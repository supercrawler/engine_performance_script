#!/usr/bin/python

import os
import sqlite3

mydatabase="/home/bolewang/workspace/Ringtone/res/database/ringtone.db3"
def update_engine_en_db(web_open_speed, version_name):
    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    str_sql='UPDATE services_dolphinengineen  SET web_open_speed=%f where version_name="%s"' %(web_open_speed, version_name)
    print str_sql
    cursor.execute(str_sql)
    cursor.close()

def update_engine_cn_db(web_open_speed, version_name):
    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    str_sql='UPDATE services_dolphinenginecn  SET web_open_speed=%f  where version_name="%s"' %(web_open_speed, version_name)
    print str_sql
    cursor.execute(str_sql)
    cursor.close()

def update_dolphin_engine_en(version_name):
    print "update_dolphin_engine_en"
    filename="web_data_en"
    myfile = open(filename)
    line = myfile.readline()
    print line
    myfile.close()
    update_engine_en_db(float(line), version_name)

def update_dolphin_engine_cn(version_name):
    print "update_dolphin_engine_cn"
    filename="web_data_cn"
    myfile = open(filename)
    line = myfile.readline()
    print line
    myfile.close()
    update_engine_cn_db(float(line), version_name)

def main():
    print "hello world"
    version_name = "1.0.7"
    update_dolphin_engine_en(version_name)
    update_dolphin_engine_cn(version_name)

if __name__ == '__main__':
    main()
