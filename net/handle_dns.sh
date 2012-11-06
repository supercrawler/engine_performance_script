#!/bin/sh

awk '{if ($0!=line) print;line=$0}' dns > dns1
rm dns
mv dns1 dns

check_contain_ip()
{
    if [ $# -ne 1 ]; then
        echo "Usage: check_ip string "
        exit 1
    fi

    ip=`echo $1 | grep -o '\(\([0-9]\|[1-9][0-9]\|1[0-9]\{2\}\|2[0-4][0-9]\|25[0-5]\)\.\)\{3\}\([0-9]\|[1-9][0-9]\|1[0-9]\{2\}\|2[0-4][0-9]\|25[0-5]\)' | wc -l`
    echo $ip

    #if [ $ip -eq 1 ];then
    #    echo "valid ip"
    #else
    #    echo "invalid ip"
    #fi
}

RESULT_FILE="result"

#calcuate cache rate
async=`cat dns | grep "async" | wc -l`
cache=`cat dns | grep "cache" | wc -l`
sum=$((async+cache))
rate=`echo "$cache $sum" | awk '{ printf("%.1f", $1 / $2);}'`
echo "rate:"$rate
echo "dns_rate $rate($cache/$sum)" >>$RESULT_FILE

TEMP_FILE="dns1"
pre_url=""
cat dns | while read line;
do
    echo $line
    url=`echo $line | awk '{print $4}'`
    ip=`echo $line | awk '{print $6}'`
    if [ -z $ip ]; then    
        if [[ $url = $pre_url ]];then
            continue
        else
            pre_url=$url
        fi
    else
        pre_url=""
    fi
    echo $line >>$TEMP_FILE
done

rm dns
mv $TEMP_FILE dns
echo "~~~~~~~~~~~~~~~~~~~~~~~format file~~~~~~~~~~~~~~~~~~~~~~~~~~"
pre_url=""
pre_time=""
>$TEMP_FILE
cat dns | while read line
do
    url=`echo $line | awk '{print $4}'`
    contain_ip=`check_contain_ip "$line"`
    if [ $contain_ip -ne 1 ]; then
        echo "=>"$line
        in_cache=`cat $TEMP_FILE | grep $url | wc -l`
        if [ -s $TEMP_FILE -a $in_cache -ge 2 ]; then
            echo "in cache"
            start_time=`echo $line | awk '{print $1}'`
            echo $line >> $TEMP_FILE
            sec_line=`cat dns | grep "$url" | grep "cache" | head -1 | cut -d" " -f 2-`
            echo $start_time" "$sec_line >> $TEMP_FILE
        else
            echo "async"
            echo "---------->"
            cat dns | grep "async" | while read subline;
            do
                sub_url=`echo $subline | awk '{print $4}'`
                if [[ $url == $sub_url ]]; then
                    echo $subline
                    echo $line >> $TEMP_FILE
                    echo $subline >> $TEMP_FILE
                fi
            done
        fi
        
    fi 
done
echo "~~~~~~~~~~~~~~~~~~~~~~~new~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
rm dns
mv $TEMP_FILE dns
DNS_RESULT="dns_result"
>$DNS_RESULT
start_time=0
cat dns | while read line;
do
    echo $line
    contain_ip=`check_contain_ip "$line"`
    if [ $contain_ip -ne 1 ]; then
        url=`echo $line | awk '{print $4}' | sed -e 's/\(^ *\)//' -e 's/\( *$\)//' | tr -d [:cntrl:]`
        start_time=`echo $line | awk '{print $1}'`
        echo "start_time:$start_time"
    else
        next_url=`echo $line | awk '{print $4}' | sed -e 's/\(^ *\)//' -e 's/\( *$\)//' | tr -d [:cntrl:]`
        end_time=`echo $line | awk '{print $1}'`
        echo "end_time:$end_time"
        if [[ $next_url = $url ]]; then
            echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
            echo "url:"$url
            echo "start:$start_time;end:$end_time"
            mytime=`expr $end_time - $start_time`
            echo $mytime
            echo "$mytime $url">>$DNS_RESULT
            echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
        fi
    fi
done

cat $DNS_RESULT | awk '{print $1}' >$TEMP_FILE
mm=` awk '{_+=$0} END{print _/NR}' $TEMP_FILE`
#rm $TEMP_FILE

echo "-------------------------------DNS Result------------------------------"
echo "DNS Resolve :"$mm
echo "rate:"$rate
echo "dns_resolve $mm" >>$RESULT_FILE
echo "------------------------------------------------------~~~~~~~~~-------"
