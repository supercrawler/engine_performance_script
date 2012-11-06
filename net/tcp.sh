#!/bin/sh

TEMP_FILE="temp"
RESULT_FILE="result"
getValue()
{
    if [ $# -ne 2 ]; then
        echo "Usage: getValue line pos "
        exit 1
    fi
    echo "$1" | awk '{print $"'"$2"'"}' | sed -e 's/\(^ *\)//' -e 's/\( *$\)//' | tr -d [:cntrl:]
}

TCP_KEY_BEGIN="connect"
TCP_KEY_END="connected"

TCP_RESULT="tcp_result"
>$TCP_RESULT

MY_FILE="tcp"
start_time=0
cat "$MY_FILE" | while read line;
do
    echo "----------->"$line
    connect=`getValue "$line" 3`
    if [ $TCP_KEY_BEGIN = $connect ]; then
        bip=`getValue "$line" 4`
        echo $bip
        bip=`echo "$bip" | sed -e 's/\(\.*$\)//'`
        echo $bip
        start_time=`echo "$line" | awk '{print $1}'`
        echo "start_time:$start_time"
        continue
    fi

    connected=`getValue "$line" 3`
    if [ $TCP_KEY_END = $connected ]; then
        eip=`getValue "$line" 5`
        echo $eip
        eip=`echo "$eip" | sed -e 's/\(,*$\)//'`
        echo $eip
        end_time=`echo "$line" | awk '{print $1}'`
        echo "end_time:$end_time"

        if [[ $bip = $eip ]]; then
            echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
            echo "ip:"$bip
            echo "start:$start_time;end:$end_time"
            mytime=`expr $end_time - $start_time`
            echo $mytime
            echo "$mytime $bip">>$TCP_RESULT
            echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
        fi
    fi
done

cat $TCP_RESULT
cat $TCP_RESULT | awk '{print $1}' >$TEMP_FILE
mm=` awk '{_+=$0} END{print _/NR}' $TEMP_FILE`
rm $TEMP_FILE

echo "-------------------------------TCP Result------------------------------"
echo "TCP Resolve :"$mm
echo "tcp_resolve:$mm" >>$RESULT_FILE
echo "------------------------------------------------------~~~~~~~~~-------"
