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
MY_FILE="js"
JS_RESULT="js_result"
>$JS_RESULT

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
            echo "$mytime $url">>$JS_RESULT

            break
        fi
    done
done

echo "--------------------------------------------------"
cat $JS_RESULT
num=`cat "$JS_RESULT" | wc -l`
cat $JS_RESULT | awk '{print $1}' >$TEMP_FILE
mm=` awk '{_+=$0} END{print _}' $TEMP_FILE`
rm $TEMP_FILE

echo "------------------Download JS File----------------------------------"

Dir="$1/dir_js"
if [ ! -d $Dir ]; then
    mkdir $Dir
fi

i=0
cat $JS_RESULT | awk '{print "http://"$2}' | while read line;
do
    echo $line
    name=`echo ${line##*/}`
    name=`echo ${name%%\?*}`
    echo "filename:"$name
    if [ -z $name ]; then
        name=$i
    fi
    i=`expr $i + 1`

    path=`echo "$Dir/$name"`
    if [ -f $path ]; then
        continue
    fi
    echo "path:$path"
    curl -o $path "$line"
    sleep 3s
done 
echo "------------------Collect JS File  Size----------------------------------"
size=0
for file in $(ls $Dir);
do 
    echo $file
    nn=`ls -al "$Dir/$file" | awk '{print $5}'`
    size=`expr $size + $nn`
done 
echo $size
if [ $size -lt 1048576 ]; then
    size=`echo $size | awk '{ printf("%.1fK", $1 / 1024);}'`
elif [ $size -ge 1048576 -a $size -lt 1073741824 ]; then
    size=`echo $size | awk '{ printf("%.1fM", $1 / 1048576);}'`
fi
echo $size


echo "-------------------------------JS Result------------------------------"
echo "JS NUM: $num"
echo "js_download_time $mm"
echo "js_size $size"

echo "js_num:$num" >>$RESULT_FILE
echo "js_download_time:$mm" >>$RESULT_FILE
echo "js_size:$size" >>$RESULT_FILE
echo "------------------------------------------------------~~~~~~~~~-------"
