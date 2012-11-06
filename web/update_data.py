#!/usr/bin/python

import os
import sqlite3

mydatabase="/home/bolewang/workspace/Ringtone/res/database/ringtone.db3"


def execute_sql(sql):
    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    #str_sql='UPDATE ' + table_name_en + ' SET start_speed=%f where version_name="%s"' %(start_speed, version_name)
    print sql
    cursor.execute(sql)
    cursor.close()

Dolphin_Engine_En_Format ='UPDATE services_dolphinengineen SET %s=%f  where version_name="%s"'
Dolphin_Engine_Cn_Format ='UPDATE services_dolphinenginecn SET %s=%f  where version_name="%s"'

def update_en_web_speed():

    #1.0.5 
    print "------------------------update dolphin engine en web open data.-------------------------------------------"
    filename="data_en"
    myfile = open(filename)
    
    for line in myfile.readlines():
        print line
        strlist = line.strip().split(':')
        if len(strlist) >= 2:
            if strlist[0] == "105sina":
                str= Dolphin_Engine_En_Format %("web_open_speed", float(strlist[1]), "1.0.5")
                execute_sql(str)
            elif strlist[0] == "105sina_news":
                str= Dolphin_Engine_En_Format %("web_open_subitem_speed", float(strlist[1]), "1.0.5")
                execute_sql(str)
            if strlist[0] == "106sina":
                str= Dolphin_Engine_En_Format %("web_open_speed", float(strlist[1]), "1.0.6")
                execute_sql(str)
            elif strlist[0] == "106sina_news":
                str= Dolphin_Engine_En_Format %("web_open_subitem_speed", float(strlist[1]), "1.0.6")
                execute_sql(str)
            if strlist[0] == "107sina":
                str= Dolphin_Engine_En_Format %("web_open_speed", float(strlist[1]), "1.0.7")
                execute_sql(str)
            elif strlist[0] == "107sina_news":
                str= Dolphin_Engine_En_Format %("web_open_subitem_speed", float(strlist[1]), "1.0.7")
                execute_sql(str)
            if strlist[0] == "108sina":
                str= Dolphin_Engine_En_Format %("web_open_speed", float(strlist[1]), "1.0.8")
                execute_sql(str)
            elif strlist[0] == "108sina_news":
                str= Dolphin_Engine_En_Format %("web_open_subitem_speed", float(strlist[1]), "1.0.8")
                execute_sql(str)
    myfile.close()
    print "===>finish"

def update_cn_web_speed():

    #1.0.5 
    print "------------------------update dolphin engine cn web open data.-------------------------------------------"
    filename="data_cn"
    myfile = open(filename)
    
    for line in myfile.readlines():
        print line
        strlist = line.strip().split(':')
        if len(strlist) >= 2:
            if strlist[0] == "105sina":
                str= Dolphin_Engine_Cn_Format %("web_open_speed", float(strlist[1]), "1.0.5")
                execute_sql(str)
            elif strlist[0] == "105sina_news":
                str= Dolphin_Engine_Cn_Format %("web_open_subitem_speed", float(strlist[1]), "1.0.5")
                execute_sql(str)
            if strlist[0] == "106sina":
                str= Dolphin_Engine_Cn_Format %("web_open_speed", float(strlist[1]), "1.0.6")
                execute_sql(str)
            elif strlist[0] == "106sina_news":
                str= Dolphin_Engine_Cn_Format %("web_open_subitem_speed", float(strlist[1]), "1.0.6")
                execute_sql(str)
            if strlist[0] == "107sina":
                str= Dolphin_Engine_Cn_Format %("web_open_speed", float(strlist[1]), "1.0.7")
                execute_sql(str)
            elif strlist[0] == "107sina_news":
                str= Dolphin_Engine_Cn_Format %("web_open_subitem_speed", float(strlist[1]), "1.0.7")
                execute_sql(str)
            if strlist[0] == "108sina":
                str= Dolphin_Engine_Cn_Format %("web_open_speed", float(strlist[1]), "1.0.8")
                execute_sql(str)
            elif strlist[0] == "108sina_news":
                str= Dolphin_Engine_Cn_Format %("web_open_subitem_speed", float(strlist[1]), "1.0.8")
                execute_sql(str)
            else:
                print "error"
    myfile.close()
    print "===>finish"

def main():
    print "hello world"
    update_en_web_speed()
    update_cn_web_speed()

if __name__ == '__main__':
    main()