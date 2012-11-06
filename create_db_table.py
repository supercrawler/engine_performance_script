#!/usr/bin/python

import sqlite3
import time


print "Hello world"

DOLPHINENGINE_EN_TABLE_STRUCTURE=''' CREATE TABLE IF NOT EXISTS "dolphin_engine_en" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "version_name" varchar(100),
        "owner" varchar(100),
        "target" varchar(100),
        "start_speed" varchar(50),
        "start_speed_remark" text,
        "web_open_speed" varchar(50),
        "web_open_speed_remark" text,
        "ui_three_screen_scroll" varchar(20),
        "ui_three_screen_remark" text,
        "ui_tab_animation" varchar(20),
        "ui_tab_animation_remark" text,
        "ui_address_animation" varchar(20),
        "ui_address_animatio_remark" text,
        "comp_crash_rate" varchar(20),
        "comp_crash_rate_fenzi" varchar(20),
        "comp_crash_rate_fenmo" varchar(20),
        "comp_p0p1_bug_rate" varchar(20),
        "comp_p0_bug" varchar(20),
        "comp_p1_bug" varchar(20),
        "web_game_speed" varchar(20),
        "web_game_remark" text,
        "timestamp" TIMESTAMP
        );'''

DOLPHINENGINE_CN_TABLE_STRUCTURE=''' CREATE TABLE IF NOT EXISTS "dolphin_engine_cn" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "version_name" varchar(100),
        "owner" varchar(100),
        "target" varchar(100),
        "start_speed" varchar(50),
        "start_speed_remark" text,
        "web_open_speed" varchar(50),
        "web_open_speed_remark" text,
        "ui_three_screen_scroll" varchar(20),
        "ui_three_screen_remark" text,
        "ui_tab_animation" varchar(20),
        "ui_tab_animation_remark" text,
        "ui_address_animation" varchar(20),
        "ui_address_animatio_remark" text,
        "comp_crash_rate" varchar(20),
        "comp_crash_rate_fenzi" varchar(20),
        "comp_crash_rate_fenmo" varchar(20),
        "comp_p0p1_bug_rate" varchar(20),
        "comp_p0_bug" varchar(20),
        "comp_p1_bug" varchar(20),
        "web_game_speed" varchar(20),
        "web_game_remark" text,
        "timestamp" TIMESTAMP
        );'''

DOLPHIN_BROWSER_HD_TABLE_STRUCTURE=''' CREATE TABLE IF NOT EXISTS "dolphin_browser_hd" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "version_name" varchar(100),
        "owner" varchar(100),
        "target" varchar(100),
        "start_speed" varchar(50),
        "start_speed_remark" text,
        "web_open_speed" varchar(50),
        "web_open_speed_remark" text,
        "ui_three_screen_scroll" varchar(20),
        "ui_three_screen_remark" text,
        "ui_tab_animation" varchar(20),
        "ui_tab_animation_remark" text,
        "ui_address_animation" varchar(20),
        "ui_address_animatio_remark" text,
        "comp_crash_rate" varchar(20),
        "comp_crash_rate_fenzi" varchar(20),
        "comp_crash_rate_fenmo" varchar(20),
        "comp_p0p1_bug_rate" varchar(20),
        "comp_p0_bug" varchar(20),
        "comp_p1_bug" varchar(20),
        "web_game_speed" varchar(20),
        "web_game_remark" text,
        "timestamp" TIMESTAMP
        );'''

DOLPHIN_BROWSER_CN_TABLE_STRUCTURE=''' CREATE TABLE IF NOT EXISTS "dolphin_browser_cn" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "version_name" varchar(100),
        "owner" varchar(100),
        "target" varchar(100),
        "start_speed" varchar(50),
        "start_speed_remark" text,
        "web_open_speed" varchar(50),
        "web_open_speed_remark" text,
        "ui_three_screen_scroll" varchar(20),
        "ui_three_screen_remark" text,
        "ui_tab_animation" varchar(20),
        "ui_tab_animation_remark" text,
        "ui_address_animation" varchar(20),
        "ui_address_animatio_remark" text,
        "comp_crash_rate" varchar(20),
        "comp_crash_rate_fenzi" varchar(20),
        "comp_crash_rate_fenmo" varchar(20),
        "comp_p0p1_bug_rate" varchar(20),
        "comp_p0_bug" varchar(20),
        "comp_p1_bug" varchar(20),
        "web_game_speed" varchar(20),
        "web_game_remark" text,
        "timestamp" TIMESTAMP
        );'''


def select_db(str):
    print "select_db:".join(str)
    print str
    mydatabase="db/dollphin_engine.db"

    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    str_select='select id from dolphin_engine_en where version_name="%s"' %(str)
    cursor.execute(str_select)
    res = cursor.fetchone()
    cursor.close()
    if res:
        return res[0]
   
    return None

def main():
    mydatabase="db/dollphin_engine.db"
    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    cursor.execute(DOLPHINENGINE_EN_TABLE_STRUCTURE)
    cursor.execute(DOLPHINENGINE_CN_TABLE_STRUCTURE)
    cursor.execute(DOLPHIN_BROWSER_HD_TABLE_STRUCTURE)
    cursor.execute(DOLPHIN_BROWSER_CN_TABLE_STRUCTURE)

    myversion_name="1.0.4"
    myowner="owner"
    mytarget="nesux s"
    mystart_speed="1000"
    myweb_open_speed="154"
    myui_three_screen_scroll="45.2"
    myui_tab_animation="14.2"
    myui_address_animation="47.2"
    mycomp_crash_rate="0.35"
    mycomp_p0p1_bug_rate="0.36"
    myweb_game_speed="123"
    mytimestamp=time.time()
    strvalues= '"%s","%s","%s","%s","%s","%s","%s","%s","%s","%s","%s",%ld' %(myversion_name,myowner,mytarget,mystart_speed,myweb_open_speed,
        myui_three_screen_scroll,myui_tab_animation,myui_address_animation,mycomp_crash_rate, mycomp_p0p1_bug_rate,
        myweb_game_speed, mytimestamp)
    
    print strvalues
    insert_sql='''INSERT INTO dolphin_engine_en(version_name,owner,target,start_speed, web_open_speed,ui_three_screen_scroll,ui_tab_animation,
            ui_address_animation,comp_crash_rate,comp_p0p1_bug_rate,web_game_speed,timestamp) VALUES (%s)''' %(strvalues)
    print insert_sql
   # cursor.execute(insert_sql)
    cursor.close()


    strid=select_db("1.0.4")
    print strid
    if strid:
        print "OK"
    else:
        print "error"
    

if __name__ == '__main__':
    main()