#!/usr/bin/python 

import sqlite3
import re
import difflib

mydatabase="/home/bolewang/workspace/Ringtone/res/database/ringtone.db3"

def execute_sql(str):
    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    print str
    cursor.execute(str)
    cursor.close()

Dolphin_Engine_En_Format ='UPDATE services_dolphinengineen SET %s=%f  where version_name="%s"'
Dolphin_Engine_Cn_Format ='UPDATE services_dolphinenginecn SET %s=%f  where version_name="%s"'
def handle_en_237(version):
    print "hanle dolphin engine en in android 2.3.7"
    filename="data_game/237_en"
    myfile = open(filename)
    
    for line in myfile.readlines():
        print line
        strlist = line.strip().split(':')
        if len(strlist) >= 2:
            if strlist[0] == "type":
                str= Dolphin_Engine_En_Format %("xtype_2_3", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "Bitmap":
                str= Dolphin_Engine_En_Format %("guimark_bitmap_game_2_3", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "SnowBound":
                str= Dolphin_Engine_En_Format %("snow_bound_2_3", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "Dolphin":
                str= Dolphin_Engine_En_Format %("dolphin_2_3", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "Windmill":
                str= Dolphin_Engine_En_Format %("windmill_2_3", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "Poker":
                str= Dolphin_Engine_En_Format %("poker_2_3", float(strlist[1]), version)
                execute_sql(str)
            else:
                print "error"
    print "===>finish"

def handle_en_400(version):
    print "hanle dolphin engine en in android 4.0.0"
    filename="data_game/400_en"
    myfile = open(filename)
    
    for line in myfile.readlines():
        print line
        strlist = line.strip().split(':')
        if len(strlist) >= 2:
            if strlist[0] == "type":
                str= Dolphin_Engine_En_Format %("xtype_4_0", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "Bitmap":
                str= Dolphin_Engine_En_Format %("guimark_bitmap_game_4_0", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "SnowBound":
                str= Dolphin_Engine_En_Format %("snow_bound_4_0", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "Dolphin":
                str= Dolphin_Engine_En_Format %("dolphin_4_0", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "Windmill":
                str= Dolphin_Engine_En_Format %("windmill_4_0", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "Poker":
                str= Dolphin_Engine_En_Format %("poker_4_0", float(strlist[1]), version)
                execute_sql(str)
            else:
                print "error"
    print "===>finish"

def handle_cn_237(version):
    print "hanle dolphin engine cn in android 2.3.7"
    filename="data_game/237_cn"
    myfile = open(filename)
    
    for line in myfile.readlines():
        print line
        strlist = line.strip().split(':')
        if len(strlist) >= 2:
            if strlist[0] == "type":
                str= Dolphin_Engine_Cn_Format %("xtype_2_3", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "Bitmap":
                str= Dolphin_Engine_Cn_Format %("guimark_bitmap_game_2_3", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "SnowBound":
                str= Dolphin_Engine_Cn_Format %("snow_bound_2_3", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "Dolphin":
                str= Dolphin_Engine_Cn_Format %("dolphin_2_3", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "Windmill":
                str= Dolphin_Engine_Cn_Format %("windmill_2_3", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "Poker":
                str= Dolphin_Engine_Cn_Format %("poker_2_3", float(strlist[1]), version)
                execute_sql(str)
            else:
                print "error"
    print "===>finish"

def handle_cn_400(version):
    print "hanle dolphin engine en in android 4.0.0"
    filename="data_game/400_cn"
    myfile = open(filename)
    
    for line in myfile.readlines():
        print line
        strlist = line.strip().split(':')
        if len(strlist) >= 2:
            if strlist[0] == "type":
                str= Dolphin_Engine_Cn_Format %("xtype_4_0", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "Bitmap":
                str= Dolphin_Engine_Cn_Format %("guimark_bitmap_game_4_0", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "SnowBound":
                str= Dolphin_Engine_Cn_Format %("snow_bound_4_0", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "Dolphin":
                str= Dolphin_Engine_Cn_Format %("dolphin_4_0", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "Windmill":
                str= Dolphin_Engine_Cn_Format %("windmill_4_0", float(strlist[1]), version)
                execute_sql(str)
            elif strlist[0] == "Poker":
                str= Dolphin_Engine_Cn_Format %("poker_4_0", float(strlist[1]), version)
                execute_sql(str)
            else:
                print "error"
    print "===>finish"
def main():
    print "insert game fps to dabase begin~~~~"
    version="1.0.7"
    handle_en_237(version)
    handle_cn_237(version)
    handle_en_400(version)
    handle_cn_400(version)
    print "insert game fps to dabase end~~~~"

if __name__ == '__main__':
    main()
