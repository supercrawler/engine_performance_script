#!/bin/sh

getvlaue()
{
    if [ $# -ne 1 ]; then
        echo "Usage: getvlaue str"
        exit 1
    fi

    line=$1
    str=`echo ${line##*//} | sed 's/ (success).//g' | sed -e 's/\(^ *\)//' -e 's/\( *$\)//' | tr -d [:cntrl:]`
    if [ -z str ]; then
        echo "getvalue result is null"
        exit 1
    fi 
    echo $str
}

if [ $# -ne 1 ]; then
    echo "Usage $0 Params"
    echo "Params: "
    echo "        taobao/56/ebay/msn/qq/yahoo/youku/youtube/google/baidu"
    exit 1
fi 

TEMP_FILE="temp"
>$TEMP_FILE
RESULT_FILE="result"
MY_FILE="css"
CSS_RESULT="css_result"
>$CSS_RESULT

REQUEST_START="Request start:"
REQUEST_END="Request finished:"

start_time=0
cat "$MY_FILE" | grep "$REQUEST_START" | while read line;
do
    echo $line
    url=`getvlaue "$line"`
    echo $url
    start_time=`echo "$line" | awk '{print $1}'`
    echo "start_time:$start_time"
    
    cat "$MY_FILE" | grep "$REQUEST_END" | while read subline;
    do
        e_url=`getvlaue "$subline"`
        echo $e_url
        if [[ $url = $e_url ]]; then
            end_time=`echo "$subline" | awk '{print $1}'`
            echo "end_time:$end_time"

            echo "url:"$url
            echo "start:$start_time;end:$end_time"
            mytime=`expr $end_time - $start_time`
            echo $mytime
            echo "$mytime $url">>$CSS_RESULT

            break
        fi
    done
done

echo "--------------------------------------------------"
cat $CSS_RESULT
num=`cat "$CSS_RESULT" | wc -l`
cat $CSS_RESULT | awk '{print $1}' >$TEMP_FILE
mm=` awk '{_+=$0} END{print _}' $TEMP_FILE`
rm $TEMP_FILE

echo "------------------Download CSS File----------------------------------"
Dir_css="$1/dir_css"
if [ ! -d $Dir_css ]; then
    mkdir $Dir_css
fi

i=0
echo $Dir_css
cat $CSS_RESULT | awk '{print "http://"$2}' | while read line;
do
    echo $line
    name=`echo ${line##*/}`
    name=`echo ${name%%\?*}`
    echo "filename:"$name
    if [ -z $name ]; then
        name=$i
    fi
    i=`expr $i + 1`

    path=`echo "$Dir_css/$name"`
    if [ -f $path ]; then
        continue
    fi
    curl -o $path "$line"
    sleep 3s
done 
echo "------------------Collect CSS File  Size----------------------------------"
size=0
for file in $(ls $Dir_css);
do 
    echo $file
    nn=`ls -al "$Dir_css/$file" | awk '{print $5}'`
    size=`expr $size + $nn`
done 


echo $size

if [ $size -lt 1048576 ]; then
    size=`echo $size | awk '{ printf("%.1fK", $1 / 1024);}'`
elif [ $size -ge 1048576 -a $size -lt 1073741824 ]; then
    size=`echo $size | awk '{ printf("%.1fM", $1 / 1048576);}'`
fi
echo $size

echo "-------------------------------CSS Result------------------------------"
echo "CSS NUM: $num"
echo "CSS download_time :"$mm
echo "css_size $size" 
fline=`cat "$MY_FILE" | grep "$REQUEST_START" | head -1`
eline=`cat "$MY_FILE" | grep "$REQUEST_END" | tail -1`
ftime=`echo "$fline" | awk '{print $1}'`
etime=`echo "$eline" | awk '{print $1}'`
mytime=`expr $etime - $ftime`
echo "Duration first css to last css:"$mytime
echo "css_num:$num" >>$RESULT_FILE
echo "css_download_time:$mm" >>$RESULT_FILE
echo "css_s2f:$mytime" >>$RESULT_FILE
echo "css_size:$size" >>$RESULT_FILE
echo "------------------------------------------------------~~~~~~~~~-------"
