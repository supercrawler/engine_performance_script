#!/usr/bin/python

import urllib2
import json
import sys
import time
import datetime
import sqlite3
import re
import difflib

def select_dolphin_engine_en_data_online(version_name, cur_date):
    #cur_date = time.strftime('%Y/%m/%d',time.localtime(time.time()))
    url = 'http://10.2.7.133:9090/%s/get_activations_lab_en.json' %cur_date
    print "get data url:", url
    mydata = 0

    response=urllib2.urlopen(url).read().decode('utf-8')
    json_str =str(response)
    #print(json_str)
    decoded = json.loads(json_str)
   
    for items in decoded:
        #line = '%s %d\n' %(items[1],items[2])
        #print line
        if items[1] == version_name:
            mydata = items[2]
            break

    return mydata

def get_engine_en_each_day_active_data(version_name, cur_date):
    #cur_date = time.strftime('%Y/%m/%d',time.localtime(time.time()))
    url = 'http://10.2.7.133:9090/%s/get_active_user_lab_en.json' %cur_date
    print "get data url:", url
    mydata = 0

    response=urllib2.urlopen(url).read().decode('utf-8')
    json_str =str(response)
    decoded = json.loads(json_str)   
    print(decoded)

    for items in decoded:
        #line = '%s %d\n' %(items[1],items[2])
        print items
        if items['version'] == version_name:
            mydata = items['count']
            break
    print '%s %s %s' %(version_name, cur_date, mydata)
    return mydata


def select_dolphin_engine_cn_data_online(version, cur_date):
    #cur_date = time.strftime('%Y/%m/%d',time.localtime(time.time()))
    url = 'http://10.2.7.133:9090/%s/get_activations_lab_cn.json' %cur_date
    print "get data url:", url

    response=urllib2.urlopen(url).read().decode('utf-8')
    json_str = str(response)
    #rint(json_str)
    decoded = json.loads(json_str)
    #print 'DECODED:', decoded

    sum=0
    for subitem in decoded:
        if version==subitem[1]:
            sum+=subitem[2]

    line = '%s %d\n' %(version, sum)
    print line
    return sum

def get_engine_cn_each_day_active_data(version, cur_date):
    #cur_date = time.strftime('%Y/%m/%d',time.localtime(time.time()))
    url = 'http://10.2.7.133:9090/%s/get_active_user_lab_cn.json' %cur_date
    print "get data url:", url

    response=urllib2.urlopen(url).read().decode('utf-8')
    json_str = str(response)
    #rint(json_str)
    decoded = json.loads(json_str)
    print 'DECODED:', decoded

    sum=0
    for subitem in decoded:
        print subitem

        if version==subitem['version']:
            sum+=subitem['count']

    line = '%s %d\n' %(version, sum)
    print line
    return sum


def crawl_each_day_crash_data():
    print "get crash data fen zi -----------/mnt/share/CS/report.txt-------------------------------->"
    filename="/mnt/share/CS/report.txt"
    myfile = open(filename)
    v_bflag = 0
    v_sflag = 0
    mysplit="---------------------------------------------------------------------------------------------------\n"
    cur_date = time.strftime('%Y%m%d',time.localtime(time.time()))
    filename1="crash_file_%s" %cur_date
    file_object = open(filename1, 'wb')  
    try:
        for line in myfile.readlines():
            strlist = line.strip().split('_')
            if len(strlist) == 2:
                #print len(strlist)
                version = strlist[0]
                mm = strlist[1]
                v_bflag = 0
                v_sflag = 0
                for str in strlist:
                    print '==>' + str
                print '%s %s' %(strlist[0], strlist[1])
            else :
                nn = line.strip().split('\t')
                print '00:' + nn[0]
                #1.0.4,1.0.5 1.0.6 and above
                if (nn[0] == "total") and (len(nn) >= 4):
                    v_bflag = 1
                    crash = nn[2]
                    dev1 = nn[3]
                    dev2 = nn[4]
                    print crash + ', ' + dev1 + ', ' + dev2
                    mmdate = time.strftime('%Y/%m/%d',time.localtime(time.time()))
                    totaldata = 0
                    if mm == "cn":
                        totaldata = select_dolphin_engine_cn_data_online(version, mmdate)
                    else:
                        totaldata = select_dolphin_engine_en_data_online(version, mmdate)
                    file_object.writelines(mysplit)
                    myline = '%s_%s\tTotal=%d\tcrash_device=%d\tcrash_rate=%f\n' %(version, mm, totaldata, int(dev2), float(dev2)/totaldata)
                    print myline
                    file_object.writelines(myline)
                    file_object.writelines(mysplit)
                    continue

                if v_bflag : 
                    if nn[0] == "----------------------------------":
                        continue

                    strs = nn[0].split('-');
                    mydate = datetime.datetime(int(strs[0]), int(strs[1]), int(strs[2]), 0, 0, 0);
                    cur_date = mydate.strftime('%Y/%m/%d')
                    print '$$$$ %s' %(cur_date)
                    print '==>' + nn[0] + ',' + nn[2]
                    print 'version: %s, cur_date = %s' %(version, cur_date)
                   
                    cur_crash_data = 0
                    if mm == "cn":
                        cur_crash_data = get_engine_cn_each_day_active_data(version, cur_date)
                    else:
                        cur_crash_data = get_engine_en_each_day_active_data(version, cur_date)

                    print 'crashs_data:%d' %(int(cur_crash_data)) 
    
                    tt = 0
                    if cur_crash_data <= 0:
                        tt = 1
                    else: 
                        tt = cur_crash_data

                    myline = '%s\tTotal=%d\tcrash_device=%d\tcrash_rate=%f\n' %(cur_date, cur_crash_data, int(nn[2]), float(nn[2])/tt)
                    print myline
                    file_object.writelines(myline)
                    continue

                #1.0.3
                if (nn[0] == "total") and (len(nn) == 3):
                    v_sflag = 1
                    crash = nn[2]
                    print "1.0.3 " + crash
                    mmdate = time.strftime('%Y/%m/%d',time.localtime(time.time()))
                    totaldata = 0
                    if mm == "cn":
                        totaldata = select_dolphin_engine_cn_data_online(version, mmdate)                        
                    else:
                        totaldata = select_dolphin_engine_en_data_online(version, mmdate)

                    file_object.writelines(mysplit)
                    myline = '%s_%s\tTotal=%d\tcrash_device=%d\tcrash_rate=%f\n' %(version, mm, totaldata, int(crash), float(crash)/totaldata)
                    print myline
                    file_object.writelines(myline)
                    file_object.writelines(mysplit)
                    continue

                if v_sflag : 
                    if nn[0] == "----------------------------------":
                        continue

                    strs = nn[0].strip().split('-');
                    mydate = datetime.datetime(int(strs[0]), int(strs[1]), int(strs[2]), 0, 0, 0);
                    cur_date = mydate.strftime('%Y/%m/%d')
                    print '$$$$ %s' %(cur_date)
                    print '~~~>' + nn[0] + ',' + nn[1]
                    print 'version: %s, cur_date = %s' %(version, cur_date)

                    cur_crash_data = 0
                    if mm == "cn":
                        cur_crash_data = get_engine_cn_each_day_active_data(version, cur_date)
                    else:
                        cur_crash_data = get_engine_en_each_day_active_data(version, cur_date)
                        
                    tt = 0
                    if cur_crash_data <= 0:
                        tt = 1
                    else: 
                        tt = cur_crash_data
                    myline = '%s\tTotal=%d\tcrash_device=%d\tcrash_rate=%f\n' %(cur_date, cur_crash_data, int(nn[1]), float(nn[1])/tt)
                    print myline
                    file_object.writelines(myline)

    except Exception, e:
        raise e
    finally:
        file_object.close()

def main():
    print "Hello world"
    crawl_each_day_crash_data()
    cur_date = time.strftime('%Y/%m/%d',time.localtime(time.time()))
if __name__ == '__main__':
    main()

