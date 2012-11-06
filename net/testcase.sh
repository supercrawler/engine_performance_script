#!/bin/sh


if [ $# -ne 1 ]; then
    echo "Usage $0 Params"
    echo "Params: "
    echo "        taobao/56/ebay/msn/qq/yahoo/youku/youtube/google/baidu"
    exit 1
fi 

clear
adb logcat -c
clear
if [[ "$1" = "taobao" ]]; then
    echo "-----------------------------Taobao-----------------------------------------------------------------------"
    sleep 5s 
    adb shell am instrument -w -e class com.testcase.PageLoadingTaobao com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
elif [[ "$1" = "56" ]]; then
    echo "-----------------------------PageLoading56-----------------------------------------------------------------------"
    sleep 5s 
    adb shell am instrument -w -e class com.testcase.PageLoading56 com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
elif [[ "$1" = "ebay" ]]; then
    echo "-----------------------------PageLoadingEbay-----------------------------------------------------------------------"
    sleep 5s 
    adb shell am instrument -w -e class com.testcase.PageLoadingEbay com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
elif [[ "$1" = "msn" ]]; then
   echo "-----------------------------PageLoadingMsn-----------------------------------------------------------------------"
    sleep 5s 
    adb shell am instrument -w -e class com.testcase.PageLoadingMsn com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
elif [[ "$1" = "qq" ]]; then
    echo "-----------------------------PageLoadingQQ-----------------------------------------------------------------------"
    sleep 5s 
    adb shell am instrument -w -e class com.testcase.PageLoadingQQ com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
    sleep 40s 
elif [[ "$1" = "yahoo" ]]; then
    echo "-----------------------------PageLoadingYahoo-----------------------------------------------------------------------"
    sleep 5s 
    adb shell am instrument -w -e class com.testcase.PageLoadingYahoo com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
    sleep 20s 
elif [[ "$1" = "youku" ]]; then
    echo "-----------------------------PageLoadingYouKu-----------------------------------------------------------------------"
    sleep 5s 
    adb shell am instrument -w -e class com.testcase.PageLoadingYouKu com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
    sleep 10s 
elif [[ "$1" = "youtube" ]]; then
    echo "-----------------------------PageLoadingYouTube-----------------------------------------------------------------------"
    sleep 5s 
    adb shell am instrument -w -e class com.testcase.PageLoadingYouTube com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
elif [[ "$1" = "google" ]]; then
    echo "-----------------------------PageLoadingGoogle-----------------------------------------------------------------------"
    sleep 5s 
    adb shell am instrument -w -e class com.testcase.PageLoadingGoogle com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
elif [[ "$1" = "baidu" ]]; then
    echo "-----------------------------PageLoadingBaidu-----------------------------------------------------------------------"
    sleep 5s 
    adb shell am instrument -w -e class com.testcase.PageLoadingBaidu com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
else
    echo "-----------------------------PageLoadingBaidu (Default)-----------------------------------------------------------------------"
    sleep 5s 
    adb shell am instrument -w -e class com.testcase.PageLoadingBaidu com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
fi

sleep 10s 