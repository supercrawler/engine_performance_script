#!/bin/sh

clear
adb logcat -c

echo "-----------------------------Dolphin Engine CN-----------------------------------------------------------------------"
echo ">>>>Sina 1"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 2"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 3"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 4"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 5"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 6"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 7"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 8"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 9"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 10"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.cn.test/android.test.InstrumentationTestRunner
sleep 5s 

adb logcat -c

echo "-----------------------------Dolphin Engine EN-----------------------------------------------------------------------"
echo ">>>>Sina 1"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 2"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 3"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 4"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 5"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 6"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 7"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 8"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 9"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
sleep 5s 

echo ">>>>Sina 10"
adb shell am instrument -w -e class com.testcase.PageLoadingNewSina com.dolphin.browser.lab.en.test/android.test.InstrumentationTestRunner
sleep 5s 

echo "==========>test over"