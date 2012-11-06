#!/bin/sh

#params cn store ->web_data_cn or store web_data_en
echo "begin collect dolphin engine  Open Web data~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
history -c
adb logcat -c
#if [ $1 == "en" ]; then
#    adb shell am instrument -w -e class com.testcase.PageLoading com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
#else
#    adb shell am instrument -w -e class com.testcase.PageLoading com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
#fi
if [ $# -lt 1 ]; then
  echo "----------------------------------------------"
  echo "please run such as: ./**.sh  1.0.5"
  echo "----------------------------------------------"
  exit 1
fi

myname="web_cache_cn"$1
PATTERN_STR="[TraceLog]Web Page Open: takes"
echo "=============================baidu==============================>"
filename=$myname"baidu"
i=0
sum=0
min=9999999
max=-1
adb logcat -c
echo "$1"
adb logcat | while read line
do
    if [ $i -ge 11 ]; then
        echo "-----------------result-------------------------------"
        echo ""
        echo "sum: $sum, max:$max, min:$min;"
        sum=`expr $sum - $min - $max `
        echo "sum: $sum"
        cc=`echo "$sum" | awk '{ printf("%g", $1 / 8);}'`
        echo "Result:"$cc
        echo "$i:$cc">>$filename
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

        if [ $i -eq 0 ]; then
            echo "no_cache:"$num
            echo ">>>">>$filename
        else

            if [ $num -lt $min ]; then
                min=$num
            fi

            if [ $num -gt $max ]; then
                max=$num
            fi

            sum=`expr $sum + $num`
            echo $sum
        fi

        echo "$i:$num"
        echo "$i:$num">>$filename
        i=`expr $i + 1`
    fi
done

sleep 5s

echo "=============================sina==============================>"
filename=$myname"sina"
adb logcat -c
i=0
sum=0
min=9999999
max=-1
echo "$1"
adb logcat | while read line
do
    if [ $i -ge 11 ]; then
        echo "-----------------result-------------------------------"
        echo ""
        echo "sum: $sum, max:$max, min:$min;"
        sum=`expr $sum - $min - $max `
        echo "sum: $sum"
        cc=`echo "$sum" | awk '{ printf("%g", $1 / 8);}'`
        echo "Result:"$cc
        echo "$i:$cc">>$filename
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

        if [ ${i:-1} -eq 0 ]; then
            echo "no_cache:"$num
            echo ">>>">>$filename

        else

            if [ $num -lt $min ]; then
                min=$num
            fi

            if [ $num -gt $max ]; then
                max=$num
            fi

            sum=`expr $sum + $num`
            echo $sum
        fi

        echo "$i:$num">>$filename
        i=`expr $i + 1`
    fi
done

echo "===============================En============================================="
myname="web_cache_en"$1
PATTERN_STR="[TraceLog]Web Page Open: takes"
echo "=============================baidu==============================>"
filename=$myname"baidu"
i=0
sum=0
min=9999999
max=-1
adb logcat -c
echo "$1"
adb logcat | while read line
do
    if [ $i -ge 11 ]; then
        echo "-----------------result-------------------------------"
        echo ""
        echo "sum: $sum, max:$max, min:$min;"
        sum=`expr $sum - $min - $max `
        echo "sum: $sum"
        cc=`echo "$sum" | awk '{ printf("%g", $1 / 8);}'`
        echo "Result:"$cc
        echo "$i:$cc">>$filename
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

        if [ $i -eq 0 ]; then
            echo "no_cache:"$num
            echo ">>>">>$filename
        else

            if [ $num -lt $min ]; then
                min=$num
            fi

            if [ $num -gt $max ]; then
                max=$num
            fi

            sum=`expr $sum + $num`
            echo $sum
        fi

        echo "$i:$num"
        echo "$i:$num">>$filename
        i=`expr $i + 1`
    fi
done

sleep 5s

echo "=============================sina==============================>"
filename=$myname"sina"
adb logcat -c
i=0
sum=0
min=9999999
max=-1
echo "$1"
adb logcat | while read line
do
    if [ $i -ge 11 ]; then
        echo "-----------------result-------------------------------"
        echo ""
        echo "sum: $sum, max:$max, min:$min;"
        sum=`expr $sum - $min - $max `
        echo "sum: $sum"
        cc=`echo "$sum" | awk '{ printf("%g", $1 / 8);}'`
        echo "Result:"$cc
        echo "$i:$cc">>$filename
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

        if [ ${i:-1} -eq 0 ]; then
            echo "no_cache:"$num
            echo ">>>">>$filename

        else

            if [ $num -lt $min ]; then
                min=$num
            fi

            if [ $num -gt $max ]; then
                max=$num
            fi

            sum=`expr $sum + $num`
            echo $sum
        fi

        echo "$i:$num">>$filename
        i=`expr $i + 1`
    fi
done
