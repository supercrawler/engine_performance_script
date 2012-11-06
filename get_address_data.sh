#!/bin/sh

############dolphin engine en
echo "begin collect dolphin engine en address data~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
adb logcat -c
adb shell am instrument -w -e class com.testcase.ClickAddressBar com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner

DOLPHIN_EN="com.dolphin.browser.lab.en"
DOLPHIN_CN="com.dolphin.browser.lab.cn"

EN_PATTERN_BEGIN="[TitleBarAnimUtil]onAnimationStart"
EN_PATTERN_END="[TitleBarAnimUtil]onAnimationEnd"

>address_data_en
start=0
flag=0
adb logcat | while read line
do
    echo $line
    if [ $start -eq 0 ] ; then
        mm=`awk 'BEGIN {print index("'"$line"'","'"$EN_PATTERN_BEGIN"'")}'`
        if [ $mm -gt 0 ]; then
            echo "begin read address data----------------------------------------------------------------------------"
            start=1
        fi
    else
         nn=`awk 'BEGIN {print index("'"$line"'","'"$EN_PATTERN_END"'")}'`
         if [ $nn -gt 0 ]; then
            echo "end read address data----------------------------------------------------------------------------"
            break
         fi

        echo ">>>>>>>>>>>read address running"
        data=`echo $line|awk '{print $6}'`
        echo $data
        tab_index=`awk 'BEGIN {print index("'"$line"'","'"$DOLPHIN_EN"'")}'`
        if [ $tab_index -gt 0 ]; then
            echo ">>>>>>>>>>>:"$data
            flag=0
            if [ `echo $data | awk -v bi=0 '{print($1>bi)?"1":"0"}'` -eq "1" ]; then
                echo $data>>address_data_en
            fi
        else
            if [ $flag -gt 0 ]; then
                echo "end read three screen data----------------------------------------------------------------------------"
                break
            fi
            flag=1
        fi
    fi
done

sleep 5s
########################################Dolphin Engine CN #################################################################################
echo "begin collect dolphin engine cn address data~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
adb logcat -c
adb shell am instrument -w -e class com.testcase.ClickAddressBar com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
start=0
flag=0
>address_data_cn
adb logcat | while read line
do
    echo $line
    if [ $start -eq 0 ] ; then
        mm=`awk 'BEGIN {print index("'"$line"'","'"$EN_PATTERN_BEGIN"'")}'`
        if [ $mm -gt 0 ]; then
            echo "begin read tab data----------------------------------------------------------------------------"
            start=1
        fi
    else
         nn=`awk 'BEGIN {print index("'"$line"'","'"$EN_PATTERN_END"'")}'`
         if [ $nn -gt 0 ]; then
            echo "end read tab data----------------------------------------------------------------------------"
            break
         fi

        echo ">>>>>>>>>>>read address data running"
        data=`echo $line|awk '{print $6}'`
        echo $data
        tab_index=`awk 'BEGIN {print index("'"$line"'","'"$DOLPHIN_CN"'")}'`
        if [ $tab_index -gt 0 ]; then
            echo ">>>>>>>>>>>:"$data
            flag=0
            if [ `echo $data | awk -v bi=0 '{print($1>bi)?"1":"0"}'` -eq "1" ]; then
                echo $data>>address_data_cn
            fi
        else
            if [ $flag -gt 0 ]; then
                echo "end read address data----------------------------------------------------------------------------"
                break
            fi
            flag=1
        fi
    fi
done
