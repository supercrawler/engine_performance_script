#!/bin/sh

str2time()
{
    str=`echo "$1" | sed 's/\.//g'`
    echo $str | awk -F ':' '{print $1*60*60 + $2*60 + $3 }'
}

formatline()
{
    date_str=`echo $1 | cut -d" " -f 2`
    tt=`str2time $date_str`

    end_str=`echo $1 | cut -d' ' -f 4-`
    echo $tt" "$end_str
}

line="09-28 22:12:34.422 D/dolphinnet(26518): TCP connect 119.167.151.241:80."
formatline "$line"

exit 1
tt="this dd jpg iest"
awk 'BEGIN{info="'"$tt"'";print match(info,/(.jpg)|(.jpeg)|(.png)|(.gif)|(.ico)|(.bmg)/)?1:0;}'

mm="09-28 22:12:32.668 D/TunnyBrowser_1.0.9(26518): [BrowserActivity]onPageStarted http://www.uyunad.com/r/t?url=bWVkaWFfaWQ9ZGU5ZTJjOTAxM2MxNDY3OCZhZGhvbGRlcl9pZD0zZGZlMmQxYTgxMzhhN2U0JmFkaG9sZGVyX2lkeD0wJnN0eWxlX2lkPTAmY3JlYXRpdmVfaWQ9MTg1MyZwcmljZT0yMDAwMDAmY29zdF9wZXI9MCZjbGlja191cmw9aHR0cDovL20udGFvYmFvLmNvbS8="
echo "$mm" | awk '{print $5}'

getvlaue()
{
    if [ $# -ne 3 ]; then
        echo "Usage: getvlaue str pos1 pos2"
        exit 1
    fi

    echo $2
    str1=`echo "$1" | awk '{print $"'"$2"'"}'`
    str2=`echo "$1" | awk '{print $"'"$3"'"}'`
    if [ -z str1 ]; then
        str=$str2
    else
        str=$str1
    fi 
    echo $str
}

getvlaue "$mm" 5 6

line="09-29 11:17:45.750 D/dolphinnet( 2139): Request finished: http://www.uyunad.com/r/t?url=bWVkaWFfaWQ9ZGU5ZTJjOTAxM2MxNDY3OCZhZGhvbGRlcl9pZD0zZGZlMmQxYTgxMzhhN2U0JmFkaG9sZGVyX2lkeD0wJnN0eWxlX2lkPTAmY3JlYXRpdmVfaWQ9MTg1MyZwcmljZT0yMDAwMDAmY29zdF9wZXI9MCZjbGlja191cmw9aHR0cDovL20udGFvYmFvLmNvbS8= (success)."
FLAG="http://www.uyunad.com/r/t?url=bWVkaWFfaWQ9ZGU5ZTJjOTAxM2MxNDY3OCZhZGhvbGRlcl9pZD0zZGZlMmQxYTgxMzhhN2U0JmFkaG9sZGVyX2lkeD0wJnN0eWxlX2lkPTAmY3JlYXRpdmVfaWQ9MTg1MyZwcmljZT0yMDAwMDAmY29zdF9wZXI9MCZjbGlja191cmw9aHR0cDovL20udGFvYmFvLmNvbS8="
doc_finish=$(awk 'BEGIN {print index("'"$line"'","'"$FLAG"'")}')
echo $doc_finish


echo "len=>"${#line}

tt="09-29 11:17:45.750 D/dolphinnet(  123): Request finished: http://www.uyunad.com/r/t?url=bWVkaWFfaWQ9ZGU5ZTJjOTAxM2MxNDY3OCZhZGhvbGRlcl9pZD0zZGZlMmQxYTgxMzhhN2U0JmFkaG9sZGVyX2lkeD0wJnN0eWxlX2lkPTAmY3JlYXRpdmVfaWQ9MTg1MyZwcmljZT0yMDAwMDAmY29zdF9wZXI9MCZjbGlja191cmw9aHR0cDovL20udGFvYmFvLmNvbS8= (success)."

echo $tt
echo ${tt##*//} | sed 's/ (success).//g' 


echo "==>"$tt | sed -e 's/ D\/dolphinnet([ ]*[0-9]*)://g'


awk '{if ($0!=line) print;line=$0}' dns



ifconfig | grep --color -o  '\(\([0-9]\|[1-9][0-9]\|1[0-9]\{2\}\|2[0-4][0-9]\|25[0-5]\)\.\)\{3\}\([0-9]\|[1-9][0-9]\|1[0-9]\{2\}\|2[0-4][0-9]\|25[0-5]\)'

mm="79171 DNS Resolve: img02.taobaocdn.com => 61.183.52.250 (from cache)"
ip=`echo $mm | grep -o '\(\([0-9]\|[1-9][0-9]\|1[0-9]\{2\}\|2[0-4][0-9]\|25[0-5]\)\.\)\{3\}\([0-9]\|[1-9][0-9]\|1[0-9]\{2\}\|2[0-4][0-9]\|25[0-5]\)' | wc -l`
if [ $ip -eq 1 ];then
    echo "valid ip"
else
    echo "invalid ip"
fi

iip="192.168.23.1"
if [[ $iip =~ ^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$ ]]; then
    echo "ip"
else
    echo "invalid ip"
fi


async=`cat dns | grep "async" | wc -l`
cache=`cat dns | grep "cache" | wc -l`
sum=$((async+cache))
echo $sum

myStr="http://a.tbcdn.cn/mw/app/index/h5/css/indexCache.css?v=243398019"
echo $myStr
myStr=`echo ${myStr##*/}`
echo $myStr
myStr=`echo ${myStr%%\?*}`
echo $myStr

myStr="http://a.tbcdn.cn/mw/app/index/h5/css/indexCache.css"
echo $myStr
myStr=`echo ${myStr##*/}`
echo $myStr
myStr=`echo ${myStr%%\?*}`
echo $myStr

dir_css="dir_css/"
size=0
for file in $(ls $dir_css);
do 
    echo $file
    num=`ls -al "$dir_css$file" | awk '{print $5}'`
    size=`expr $sum + $num`
done 
echo $size