#!/bin/sh

#params cn store ->web_data_cn or store web_data_en
history -c
adb logcat -c
#if [ $1 == "en" ]; then
#    adb shell am instrument -w -e class com.testcase.PageLoading com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
#else
#    adb shell am instrument -w -e class com.testcase.PageLoading com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
#fi
if [ $# -lt 1 ]; then
  echo "----------------------------------------------"
  echo "please run such as: ./**.sh  1.0.5 "
  echo "----------------------------------------------"
  exit 1
fi


myname="web/web_cache_cn"$1
PATTERN_STR="[TraceLog]Web Page Open: takes"
echo "============Dolphin Engine CN==========sina==========================>"
filename=$myname"sina"
subfilename=$filename"_news"
adb logcat -c
i=0

>$filename
>$subfilename
echo "$1"
adb logcat | while read line
do
    if [ $i -gt 19 ]; then
        echo "-----------------result-------------------------------"
        echo ""
        cat $filename
        echo "-------------------"
        cat $subfilename
        #echo "sum: $sum, max:$max, min:$min;"
        #sum=`expr $sum - $min - $max `
        #echo "sum: $sum"
        #cc=`echo "$sum" | awk '{ printf("%g", $1 / 8);}'`
        #echo "Result:"$cc
        #echo "$i:$cc">>$filename
        echo ""
        echo "------------------------------------------------"
        break
    fi

    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ $mm -gt 0 ]; then

        echo $i
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        echo $num

        if [ $((i%2)) -eq 0 ]; then
            echo $num>>$filename
        else
            echo $num>>$subfilename
        fi
        
        i=`expr $i + 1`
    fi
done

sleep 5s

myname="web/web_cache_en"$1
PATTERN_STR="[TraceLog]Web Page Open: takes"
echo "============Dolphin Engine EN==========sina==========================>"
filename=$myname"sina"
subfilename=$filename"_news"
adb logcat -c
i=0

>$filename
>$subfilename
echo "$1"
adb logcat | while read line
do
    if [ $i -gt 19 ]; then
        echo "-----------------result-------------------------------"
        echo ""
        cat $filename
        echo "----------------"
        cat $subfilename
        #echo "sum: $sum, max:$max, min:$min;"
        #sum=`expr $sum - $min - $max `
        #echo "sum: $sum"
        #cc=`echo "$sum" | awk '{ printf("%g", $1 / 8);}'`
        #echo "Result:"$cc
        #echo "$i:$cc">>$filename
        echo ""
        echo "------------------------------------------------"
        break
    fi

    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ $mm -gt 0 ]; then

        echo $i
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        echo $num

        if [ $((i%2)) -eq 0 ]; then
            echo $num>>$filename
        else
            echo $num>>$subfilename
        fi
        
        i=`expr $i + 1`
    fi
done
