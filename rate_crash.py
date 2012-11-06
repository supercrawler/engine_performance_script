#!/usr/bin/python

import urllib2
import json
import sys
import time
import sqlite3
import re
import difflib

mydatabase="/home/bolewang/workspace/Ringtone/res/database/ringtone.db3"
def select_db(table_name, str):
    print "select_db:".join(str)
    print str
    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    str_select='select id from %s where version_name="%s"' %(table_name, str)
    cursor.execute(str_select)
    res = cursor.fetchone()
    cursor.close()
    if res:
        return res[0]
   
    return None



def insert_db(table_name, version, crash_fenmo):
    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    str_sql='''INSERT INTO %s (version_name, comp_crash_rate_fenmo, last_modify, xtype_2_3, dolphin_2_3, windmill_2_3, poker_2_3,
        snow_bound_2_3,guimark_bitmap_game_2_3,xtype_4_0,dolphin_4_0,windmill_4_0,poker_4_0,snow_bound_4_0, 
        guimark_bitmap_game_4_0) VALUES("%s", "%s", %ld, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)''' %(table_name,version, 
        crash_fenmo, time.time())
    print str_sql
    cursor.execute(str_sql)
    cursor.close()

def update_db(table_name, crash_fenmo, id):
    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    str_sql='''UPDATE %s SET comp_crash_rate_fenmo="%s" WHERE id=%d''' %(table_name, crash_fenmo, id)
    print str_sql
    cursor.execute(str_sql)
    cursor.close()

def crawl_dolphin_engine_en():
    table_name="services_dolphinengineen"
    cur_date = time.strftime('%Y/%m/%d',time.localtime(time.time()))
    url = 'http://10.2.7.133:9090/%s/get_activations_lab_en.json' %cur_date
    print "get data url:", url

    response=urllib2.urlopen(url).read().decode('utf-8')
    json_str =str(response)
    #print(json_str)
    decoded = json.loads(json_str)
    print 'DECODED:', decoded

    print 'for each--------'
    filename="dolphinengine_crash_en"
    file_object = open(filename, 'wb')  
    try:
        for items in decoded:
            print items
            #insert_db(items[1],items[2])
            strid=select_db(table_name, items[1])
            print strid
            if strid:
                #not exit,update
                update_db(table_name, items[2], strid)
            else:
                #exit insert database
                insert_db(table_name, items[1],items[2])
            line = '%s %d\n' %(items[1],items[2])
            print line
            file_object.writelines(line)
        #for subitem in items:
        #   print subitem
    except Exception, e:
        raise e
    finally:
        file_object.close()

def crawl_dolphin_engine_cn():
    table_name="services_dolphinenginecn"
    cur_date = time.strftime('%Y/%m/%d',time.localtime(time.time()))
    url = 'http://10.2.7.133:9090/%s/get_activations_lab_cn.json' %cur_date
    print "get data url:", url

    response=urllib2.urlopen(url).read().decode('utf-8')
    json_str = str(response)
    #rint(json_str)
    decoded = json.loads(json_str)
    print 'DECODED:', decoded

    print 'for each--------'
    filename="dolphinengine_crash_cn"
    file_object = open(filename, 'wb')

    packageinfos=[]
    try:
        for items in decoded:
            print items
            version_name=items[1]

            if version_name in packageinfos :
                continue
            print version_name
            packageinfos.append(version_name)

            sum=0
            print "begin---------------------"
            for subitem in decoded:
                print "sub item:", subitem[1]
                if version_name==subitem[1]:
                    sum+=subitem[2]
                    print sum
                #print line
            print "end---------------------"

            #insert_db(version_name,sum)
            strid=select_db(table_name, version_name)
            print strid
            if strid:
                #not exit,update
                update_db(table_name, sum, strid)
            else:
                #exit insert database
                insert_db(table_name, version_name,sum)

            line = '%s %d\n' %(version_name, sum)
            print "total: ", line
            file_object.write(line)

    except Exception, e:
        raise e
    finally:
        file_object.close()

def execute_sql(str):
    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    print str
    cursor.execute(str)
    cursor.close()

def crawl_crash_rate_fenzi():
    print "get crash data fen zi -----------/mnt/share/CS/report.txt-------------------------------->"
    filename="/mnt/share/CS/report.txt"
    myfile = open(filename)
    flag = 0
    for line in myfile.readlines():
        strlist = line.strip().split('_')
        # print strlist
        if len(strlist) == 2:
            #print len(strlist)
            version = strlist[0]
            mm = strlist[1]
            flag = 1
            for str in strlist:
                print '==>' + str
            #print '%s %s' %(strlist[0], strlist[1])
        else :
            if flag:
            #  print version + ' ' + mm
            # print  line.strip()
                nn = line.strip().split('\t')
                # print '-->' + nn[0]
                if (nn[0] == "total") and (len(nn) >= 4):
                    crash = nn[2]
                    dev1 = nn[3]
                    dev2 = nn[4]
                    print crash + ', ' + dev1 + ', ' + dev2
                    if mm == "cn":
                        str_sql='UPDATE services_dolphinenginecn SET comp_crash_rate_fenzi=%d  where version_name="%s"' %(int(dev2), version)
                        execute_sql(str_sql)
                    else:
                        str_sql='UPDATE services_dolphinengineen SET comp_crash_rate_fenzi=%d where version_name="%s"' %(int(dev2), version)
                        execute_sql(str_sql)
                    flag = 0

                if (nn[0] == "total") and (len(nn) == 3):
                    crash = nn[2]
                    print "1.0.3 " + crash
                    if mm == "cn":
                        str_sql='UPDATE services_dolphinenginecn SET comp_crash_rate_fenzi=%d  where version_name="%s"' %(int(crash), version)
                        execute_sql(str_sql)
                    else:
                        str_sql='UPDATE services_dolphinengineen SET comp_crash_rate_fenzi=%d where version_name="%s"' %(int(crash), version)
                        execute_sql(str_sql)
                    flag = 0

def main():
    crawl_dolphin_engine_en()
    crawl_dolphin_engine_cn()
    crawl_crash_rate_fenzi()
    
    print "~~~~~~~~~~~~~~~~~~update crash data finished~~~~~~~~~~~~~~~~~~~~~~~~~~~"
if __name__ == '__main__':
    main()
