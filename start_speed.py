#!/usr/bin/python
 # -*- coding: utf-8 -*-
import os
import time
import shlex
import subprocess
import sqlite3

mydatabase="/home/bolewang/workspace/Ringtone/res/database/ringtone.db3"
table_name_en="services_dolphinengineen"
table_name_cn="services_dolphinenginecn"

def update_en_db(start_speed, version_name):
    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    str_sql='UPDATE ' + table_name_en + ' SET start_speed=%f where version_name="%s"' %(start_speed, version_name)
    print str_sql
    cursor.execute(str_sql)
    cursor.close()

def update_cn_db(start_speed, version_name):
    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    str_sql='UPDATE ' + table_name_cn + ' SET start_speed=%f where version_name="%s"' %(start_speed, version_name)
    print str_sql
    cursor.execute(str_sql)
    cursor.close()

def keyEvent(keycode):
    popen('adb shell input keyevent %s' %(keycode))
   # os.system('adb shell input keyevent %s' %(keycode))
    time.sleep(2)

def closeDolphin():
    keyEvent(4) 
    keyEvent(20) 
    keyEvent(20)
    keyEvent(22) 
    keyEvent(66)

def popen(args):
    if type(args) != type([]):
        args = shlex.split(args)
    proc = subprocess.Popen(args, stdout = subprocess.PIPE, stderr = subprocess.PIPE)
    (output, errput) = proc.communicate()
    proc.wait()
    return output + errput

def collectDolphinEngineEn(version_name):
    params='adb shell am start -W -n com.dolphin.browser.lab.en/mobi.mgeek.TunnyBrowser.BrowserActivity'
    print "---------------------%s En----------------------------------" %version_name
    sum=0
    for i in range(0, 10):
        print i
        #delay 5 seconds
        time.sleep(10)
        lines = popen(params)
  #  print lines

        strs = lines.split('\n');
        for item in strs:
            isfind = item.find('TotalTime')
            if isfind == 0 : 
                print item
                tt = item.split(' ')
                sum += int(tt[1])
                print "sum %d" %(sum)
                print "find %d" %(item.find('TotalTime'))

        closeDolphin()

    result = float(sum) / 10
    print result
    update_en_db(result,version_name)

def collectDolphinEngineCn(version_name):
    params='adb shell am start -W -n com.dolphin.browser.lab.cn/mobi.mgeek.TunnyBrowser.BrowserActivity'
    print "---------------------%s-----CN-----------------------------" %version_name
    sum=0
    for i in range(0, 10):
        print i
        #delay 5 seconds
        time.sleep(10)
        lines = popen(params)
  #  print lines

        strs = lines.split('\n');
        for item in strs:
            isfind = item.find('TotalTime')
            if isfind == 0 : 
                print item
                tt = item.split(' ')
                sum += int(tt[1])
                print "sum %d" %(sum)
                print "find %d" %(item.find('TotalTime'))

        closeDolphin()

    result = float(sum) / 10
    print result
    update_cn_db(result,version_name)

def main():
    print "hello world"
    version_name = "1.0.7"
    collectDolphinEngineEn(version_name)
    time.sleep(5)
    collectDolphinEngineCn(version_name)


if __name__ == '__main__':
    main()
