#!/usr/bin/python

import os
import sqlite3

mydatabase="/home/bolewang/workspace/Ringtone/res/database/ringtone.db3"

def execute_sql(strsql):
    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    print strsql
    cursor.execute(strsql)
    cursor.close()


def update_dolphin_engine_en_address(version_name):
    filename="address_data_en"
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
    #update_engine_en_db(result, version_name)
    str_sql='UPDATE services_dolphinengineen  SET ui_address_animation=%f where version_name="%s"' %(result, version_name)
    execute_sql(str_sql)

def update_dolphin_engine_cn_address(version_name):
    filename="address_data_cn"
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
    str_sql='UPDATE services_dolphinenginecn  SET ui_address_animation=%f  where version_name="%s"' %(result, version_name)
    execute_sql(str_sql)


def update_dolphin_engine_en_three_screen(version_name):
    filename="three_screen_data_en"
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
    str_sql='UPDATE services_dolphinengineen  SET ui_three_screen_scroll=%f where version_name="%s"' %(result, version_name)
    execute_sql(str_sql)

def update_dolphin_engine_cn_three_screen(version_name):
    filename="three_screen_data_cn"
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
    str_sql='UPDATE services_dolphinenginecn  SET ui_three_screen_scroll=%f  where version_name="%s"' %(result, version_name)
    execute_sql(str_sql)

def update_dolphin_engine_en_tab_data(version_name):
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
    str_sql='UPDATE services_dolphinengineen  SET ui_tab_animation=%f where version_name="%s"' %(result, version_name)
    execute_sql(str_sql)

def update_dolphin_engine_cn_tab_data(version_name):
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
    str_sql='UPDATE services_dolphinenginecn  SET ui_tab_animation=%f  where version_name="%s"' %(result, version_name)
    execute_sql(str_sql)


def main():
    print "hello world"

    version_name="1.0.7"
    print "update dolphin engine address data-------------------------------->"
    print ">>>dolphin engine en"
    update_dolphin_engine_en_address(version_name)
    print ">>>dolphin engine cn"
    update_dolphin_engine_cn_address(version_name)

    print "update dolphin engine Three screen data-------------------------------->"
    print ">>>dolphin engine en"
    update_dolphin_engine_en_three_screen(version_name)
    print ">>>dolphin engine cn"
    update_dolphin_engine_cn_three_screen(version_name)

    print "update dolphin engine Tab Animation data-------------------------------->"
    print ">>>dolphin engine en"
    update_dolphin_engine_en_tab_data(version_name)
    print ">>>dolphin engine cn"
    update_dolphin_engine_cn_tab_data(version_name)

if __name__ == '__main__':
    main()