#!/bin/sh

#params cn store ->web_data_cn or store web_data_en
clear
echo "begin collect dolphin engine  Open Web data~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
#history -c
#adb logcat -c
#if [ $1 == "en" ]; then
#    adb shell am instrument -w -e class com.testcase.PageLoading com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
#else
#    adb shell am instrument -w -e class com.testcase.PageLoading com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
#fi

PATTERN_STR="[TraceLog]Web Page Open: takes"
sum=0
min=99999999
max=-1
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
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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
min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "sum:"$sum
echo "min:"$min";max:"$max

adb logcat -c
echo ">>>>Baidu"
adb shell am instrument -w -e class com.testcase.PageLoadingBaidu com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "sum:"$sum
echo "min:"$min";max:"$max

adb logcat -c
echo ">>>>Bing"
adb shell am instrument -w -e class com.testcase.PageLoadingBing com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "sum:"$sum
echo "min:"$min";max:"$max

adb logcat -c
echo ">>>>163"
adb shell am instrument -w -e class com.testcase.PageLoading163 com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "sum:"$sum
echo "min:"$min";max:"$max

adb logcat -c
echo ">>>>Ruters"
adb shell am instrument -w -e class com.testcase.PageLoadingRuters com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "sum:"$sum
echo "min:"$min";max:"$max

adb logcat -c
echo ">>>>Sina"
adb shell am instrument -w -e class com.testcase.PageLoadingSina com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "sum:"$sum
echo "min:"$min";max:"$max


adb logcat -c
echo ">>>>Sohu"
adb shell am instrument -w -e class com.testcase.PageLoadingSohu com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "sum:"$sum
echo "min:"$min";max:"$max

adb logcat -c
echo ">>>>Time"
adb shell am instrument -w -e class com.testcase.PageLoadingTime com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "sum:"$sum
echo "min:"$min";max:"$max

adb logcat -c
echo ">>>>Usatoday"
adb shell am instrument -w -e class com.testcase.PageLoadingUsatoday com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "sum:"$sum
echo "min:"$min";max:"$max

adb logcat -c
echo ">>>>Yahoo"
adb shell am instrument -w -e class com.testcase.PageLoadingYahoo com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "sum:"$sum
echo "min:"$min";max:"$max
sum=`expr $sum - $min - $max `
echo "sum:"$sum

echo "***********************Dolphin Engine EN result ***************************************"
cc=`echo "$sum " | awk '{ printf("%g", $1 / 8);}'`
echo "result:" $cc
echo $cc>web_data_en
echo "*******************************************************************************************"

sum=0
min=99999999
max=-1
adb logcat -c
echo "~~~~~~~~~~~~Dolphin Engine CN~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
echo ">>>>163"
adb shell am instrument -w -e class com.testcase.PageLoading163 com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "min:"$min";max:"$max

adb logcat -c
echo ">>>>Baidu"
adb shell am instrument -w -e class com.testcase.PageLoadingBaidu com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "sum:"$sum
echo "min:"$min";max:"$max

adb logcat -c
echo ">>>>Bing"
adb shell am instrument -w -e class com.testcase.PageLoadingBing com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "min:"$min";max:"$max
sum=`cat temp | awk '{print $1}' | grep -o "[0-9]*"`
echo "sum:"$sum

adb logcat -c
echo ">>>>Google"
adb shell am instrument -w -e class com.testcase.PageLoadingGoogle com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "min:"$min";max:"$max
sum=`cat temp | awk '{print $1}' | grep -o "[0-9]*"`
echo "sum:"$sum

adb logcat -c
echo ">>>>Ruters"
adb shell am instrument -w -e class com.testcase.PageLoadingRuters com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "min:"$min";max:"$max
sum=`cat temp | awk '{print $1}' | grep -o "[0-9]*"`
echo "sum:"$sum

adb logcat -c
echo ">>>>Sina"
adb shell am instrument -w -e class com.testcase.PageLoadingSina com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "min:"$min";max:"$max
sum=`cat temp | awk '{print $1}' | grep -o "[0-9]*"`
echo "sum:"$sum

adb logcat -c
echo ">>>>Sohu"
adb shell am instrument -w -e class com.testcase.PageLoadingSohu com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "min:"$min";max:"$max
sum=`cat temp | awk '{print $1}' | grep -o "[0-9]*"`
echo "sum:"$sum

adb logcat -c
echo ">>>>Time"
adb shell am instrument -w -e class com.testcase.PageLoadingTime com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        echo $num
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "min:"$min";max:"$max
sum=`cat temp | awk '{print $1}' | grep -o "[0-9]*"`
echo "sum:"$sum

adb logcat -c
echo ">>>>Usatoday"
adb shell am instrument -w -e class com.testcase.PageLoadingUsatoday com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "min:"$min";max:"$max
sum=`cat temp | awk '{print $1}' | grep -o "[0-9]*"`
echo "sum:"$sum

adb logcat -c
echo ">>>>Yahoo"
adb shell am instrument -w -e class com.testcase.PageLoadingYahoo com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
adb logcat | while read line
do
    mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_STR"'")}'`
    if [ ${mm:-0} -gt 0 ]; then
        num=`echo $line | awk '{print $7}' | grep -o "[0-9]*"`
        echo $line
        if [ ${num:-0} -lt $min ]; then
            min=$num
            echo $min>minfile
        fi

        if [ ${num:-0} -gt $max ]; then
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

min=`cat minfile | awk '{print $1}'`
max=`cat maxfile | awk '{print $1}'`
sum=`cat temp | awk '{print $1}'`
echo "min:"$min";max:"$max
sum=`expr $sum - $min - $max `
echo "sum:"$sum


echo "***********************Dolphin Engine CN result ***************************************"
cc=`echo "$sum " | awk '{ printf("%g", $1 / 8);}'`
echo "result:" $cc
 echo $cc>web_data_cn
echo "*********************************************************************"
