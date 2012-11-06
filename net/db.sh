#!/bin/sh 

name="taobao"

if [ $# -ne 1 ]; then
    echo "Usage $0 Params"
    echo "Params: "
    echo "        taobao/56/ebay/msn/qq/yahoo/youku/youtube/google/baidu"
    exit 1
fi 


if [[ "$1" = "taobao" ]]; then
    echo "-----------------------------Taobao-----------------------------------------------------------------------"
    name="taobao"
elif [[ "$1" = "56" ]]; then
    echo "-----------------------------56-----------------------------------------------------------------------"
    name="56"
elif [[ "$1" = "ebay" ]]; then
    echo "-----------------------------ebay-----------------------------------------------------------------------"
    name="ebay"
elif [[ "$1" = "msn" ]]; then
    echo "-----------------------------msn-----------------------------------------------------------------------"
    name="msn"
elif [[ "$1" = "qq" ]]; then
    echo "-----------------------------qq-----------------------------------------------------------------------"
    name="qq"
elif [[ "$1" = "yahoo" ]]; then
    echo "-----------------------------yahoo-----------------------------------------------------------------------"
    name="yahoo"
elif [[ "$1" = "youku" ]]; then
    echo "-----------------------------youku-----------------------------------------------------------------------"
    name="youku"
elif [[ "$1" = "youtube" ]]; then
    echo "-----------------------------youtube-----------------------------------------------------------------------"
    name="youtube"
elif [[ "$1" = "google" ]]; then
    echo "-----------------------------google-----------------------------------------------------------------------"
    name="google"
elif [[ "$1" = "baidu" ]]; then
    echo "-----------------------------baidu-----------------------------------------------------------------------"
    name="baidu"
fi


category_id=27 #GPRS-high
web_open_time=0
dns_resolve_time=0
dns_cache_rate=0
tcp_time=0
primary_file_loading_time=0
main_resouce_loading_time=0
document_loading_time=0
document_num=0
document_size=0
page_loading_time=0
css_each_file_total_time=0
css_total_time=0
css_num=0
css_size=0
js_total_time=0
js_num=0
js_size=0
img_total_time=0
img_num=0
img_size=0

num=`cat result |wc -l` 
echo "num: $num"
if [ $num -lt 19 ]; then
    echo "Do you forget something?"
    exit 1
fi 

#echo "============================================================================"
for line in $(cat result)
do 
    #echo $line
    key=`echo $line | awk -F":" '{print $1}'`
    value=`echo $line | awk -F":" '{print $2}'`
    if [ -z $value ]; then
        value=0
    fi

    #echo "key:$key; value:$value"
    if [ "web_open_time" = $key ]; then
        web_open_time=$value
    elif [[ "tcp_resolve" = $key ]]; then
        tcp_time=$value
    elif [[ "dns_rate" = $key ]]; then
        dns_cache_rate=$value
    elif [[ "dns_resolve" = $key ]]; then
        dns_resolve_time=$value
    elif [[ "primary_file_loading_time" = $key ]]; then
        primary_file_loading_time=$value
    elif [[ "main_resouce_loading_time" = $key ]]; then
        main_resouce_loading_time=$value
    elif [[ "document_loading_time" = $key ]]; then
        document_loading_time=$value
    elif [[ "document_num" = $key ]]; then
        document_num=$value
    elif [[ "document_size" = $key ]]; then
        document_size=$value
    elif [[ "page_loading_time" = $key ]]; then
        page_loading_time=$value
    elif [[ "css_num" = $key ]]; then
        css_num=$value
    elif [[ "css_download_time" = $key ]]; then
        css_each_file_total_time=$value
    elif [[ "css_s2f" = $key ]]; then
        css_total_time=$value
    elif [[ "css_size" = $key ]]; then
        css_size=$value
    elif [[ "js_download_time" = $key ]]; then
        js_total_time=$value
    elif [[ "js_num" = $key ]]; then
        js_num=$value
    elif [[ "js_size" = $key ]]; then
        js_size=$value
    elif [[ "img_num" = $key ]]; then
        img_num=$value
    elif [[ "img_size" = $key ]]; then
        img_size=$value      
    elif [[ "img_download_time" = $key ]]; then
        img_total_time=$value      
    fi
done 

echo "============================================================================"
echo "web_open_time $web_open_time"
echo "dns_resolve_time $dns_resolve_time"
echo "dns_cache_rate $dns_cache_rate"
echo "tcp_time $tcp_time"
echo "primary_file_loading_time $primary_file_loading_time"
echo "main_resouce_loading_time $main_resouce_loading_time"
echo "document_loading_time $document_loading_time"
echo "document_num $document_num"
echo "document_size $document_size"
echo "page_loading_time $page_loading_time"
echo "css_each_file_total_time $css_each_file_total_time"
echo "css_total_time $css_total_time"
echo "css_num $css_num"
echo "css_size $css_size"
echo "js_total_time $js_total_time"
echo "js_num $js_num"
echo "js_size $js_size"
echo "img_total_time $img_total_time"
echo "img_num $img_num"
echo "img_size $img_size"

echo "============================================================================"

table_sql="insert into services_networkkpi(name, category_id, web_open_time, dns_resolve_time, dns_cache_rate,tcp_time,
document_loading_time,document_num,page_loading_time,
document_size,css_each_file_total_time,css_total_time,
css_num,css_size,primary_file_loading_time,
main_resouce_loading_time,js_total_time,js_num,js_size,
img_total_time,img_num,img_size)"

value_sql="values(\"$name\", $category_id, $web_open_time, $dns_resolve_time, \"$dns_cache_rate\",$tcp_time,
$document_loading_time,$document_num,$page_loading_time,
\"$document_size\",$css_each_file_total_time,$css_total_time,
$css_num,\"$css_size\",$primary_file_loading_time,
$main_resouce_loading_time,$js_total_time,$js_num,\"$js_size\",
$img_total_time,$img_num,\"$img_size\");"

sql=`echo "$table_sql $value_sql"`
echo $sql

dbpath="/home/bolewang/workspace/Ringtone/res/database/ringtone.db3"
export sqlitedb="sqlite3 $dbpath"

$sqlitedb <<EOF
$sql
.quit
EOF