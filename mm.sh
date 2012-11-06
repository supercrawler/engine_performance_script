#!/bin/sh

PATTERN_STR="[TraceLog]Web Page Open: takes"
sum=0
min=99999999
max=-1
adb logcat -c
echo "~~~~~~~~~~~~Dolphin Engine EN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
adb logcat -c
echo ">>>>Google"
adb shell am instrument -w -e class com.testcase.PageLoadingGoogle com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ $num -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ $num -gt $max ]; then
            max=$num
            echo $max>maxfile
        fi
        echo "min:"$min";max:"$max
        echo "num:"$num
        echo "sum:"$sum
        sum=`expr $sum + $num`
        echo "sum:"$sum
        echo $sum>temp
        break
    fi
done