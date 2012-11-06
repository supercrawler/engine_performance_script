#!/bin/sh


echo "----------------------------Dolphin Engine CN-------------------------------------"
adb logcat -c
echo ">>>>Baidu"
adb shell am instrument -w -e class com.testcase.PageLoading com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner

echo ">>>>Sina"
adb shell am instrument -w -e class com.testcase.PageLoadingSina com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner

sleep 5s 

echo "----------------------------Dolphin Engine EN-------------------------------------"
adb logcat -c
echo ">>>>Baidu"
adb shell am instrument -w -e class com.testcase.PageLoading com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner

echo ">>>>Sina"
adb shell am instrument -w -e class com.testcase.PageLoadingSina com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner

