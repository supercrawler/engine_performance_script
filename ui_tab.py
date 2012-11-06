#!/usr/bin/python

import os
import sqlite3

mydatabase="/home/bolewang/workspace/Ringtone/res/database/ringtone.db3"
def update_engine_en_db(ui_tab_animation, version_name):
    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    str_sql='UPDATE services_dolphinengineen  SET ui_tab_animation=%f where version_name="%s"' %(ui_tab_animation, version_name)
    print str_sql
    cursor.execute(str_sql)
    cursor.close()

def update_engine_cn_db(ui_tab_animation, version_name):
    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    str_sql='UPDATE services_dolphinenginecn  SET ui_tab_animation=%f  where version_name="%s"' %(ui_tab_animation, version_name)
    print str_sql
    cursor.execute(str_sql)
    cursor.close()


def update_dolphin_engine_en(version_name):
    print "update_dolphin_engine_en"
    filename="tab_data_en"
    myfile = open(filename)
    min_data=999999
    max_data=-1
    sum=0

    lines = myfile.readlines()
    i=0
    for str in lines:
        data = int(str)
        if data < min_data:
            min_data = data

        if data > max_data:
            max_data = data 

        sum += data
        i += 1

    myfile.close()

    print "sum %d num:%d" %(sum, i)
    sum = sum - max_data - min_data
    i=i-2

    print "sum %d max=%d, min=%d, num:%d" %(sum, max_data, min_data,i)
    result = float(sum)/i
    print "result %f" %(result)
    update_engine_en_db(result, version_name)

def update_dolphin_engine_cn(version_name):
    print "update_dolphin_engine_cn"
    filename="tab_data_cn"
    myfile = open(filename)
    min_data=999999
    max_data=-1
    sum=0

    lines = myfile.readlines()
    i=0
    for str in lines:
        data = int(str)
        if data < min_data:
            min_data = data

        if data > max_data:
            max_data = data 

        sum += data
        i += 1

    myfile.close()

    print "sum %d num:%d" %(sum, i)
    sum = sum - max_data - min_data
    i=i-2
    print "sum %d max=%d, min=%d, num:%d" %(sum, max_data, min_data,i)
    result = float(sum)/i
    print "result %f" %(result)
    update_engine_cn_db(result, version_name)

def main():
    print "hello world"

    version_name="1.0.7"
    update_dolphin_engine_en(version_name)
    update_dolphin_engine_cn(version_name)

  
if __name__ == '__main__':
    main()
