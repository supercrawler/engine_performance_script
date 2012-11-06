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
    url = 'http://172.16.7.133:9090/%s/get_activations_lab_en.json' %cur_date
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

def select_dolphin_engine_cn_data_online(version, cur_date):
    #cur_date = time.strftime('%Y/%m/%d',time.localtime(time.time()))
    url = 'http://172.16.7.133:9090/%s/get_activations_lab_cn.json' %cur_date
    print "get data url:", url
    mydata = 0

    response=urllib2.urlopen(url).read().decode('utf-8')
    json_str = str(response)
    #rint(json_str)
    decoded = json.loads(json_str)
    #print 'DECODED:', decoded

    packageinfos=[]
    for items in decoded:
       # print items
        version_name=items[1]
        if version_name in packageinfos :
            continue

        #print version_name
        packageinfos.append(version_name)
        sum=0
        for subitem in decoded:
            if version_name==subitem[1]:
                sum+=subitem[2]
                #print line
        #line = '%s %d\n' %(version_name, sum)
        #print "total: ", line
        if version == version_name:
            mydata = sum
            break

    return mydata

   

def crawl_each_day_crash_data():
    print "get crash data fen zi -----------/mnt/share/CS/report.txt-------------------------------->"
    filename="/mnt/share/CS/report.txt"
    #filename="demo"
    myfile = open(filename)
    v_bflag = 0
    v_sflag = 0
    v_106="2012-08-16"
    v_105="2012-08-09"
    v_104="2012-08-02"
    v_103="2012-07-11"

    filename1="crash_file"
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
                #print '%s %s' %(strlist[0], strlist[1])
            else :
                nn = line.strip().split('\t')
                print '00:' + nn[0]
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

                    myline = '%s_%s===>Total=%d, crash_device=%d, crash_rate=%f\n' %(version, mm, totaldata, int(dev2), float(dev2)/totaldata)
                    print myline
                    file_object.writelines(myline)
                    #flag = 0

                    continue

                if v_bflag : 
                    if nn[0] == "----------------------------------":
                        continue

                    #calcuate date 
                    strs = nn[0].split('-');
                    mydate = datetime.datetime(int(strs[0]), int(strs[1]), int(strs[2]), 0, 0, 0);
                    mypredate = mydate + datetime.timedelta(days=-1)
                    pre_date = mypredate.strftime('%Y/%m/%d')
                    cur_date = mydate.strftime('%Y/%m/%d')
                
                    print '$$$$ %s' %(pre_date)
                    print '$$$$ %s' %(cur_date)

                    print '==>' + nn[0] + ',' + nn[2]
                    myflag = 0
                    if (nn[0] == v_106) or (nn[0] == v_105) or (nn[0] == v_104):
                        myflag = 1
                    else:
                        myflag = 0

                    print 'version: %s, pre_data:%s , cur_date = %s' %(version, pre_date, cur_date)
                    totaldata = 0
                    cur_crash_data = 0
                    pre_crash_data = 0
                    if myflag :
                        if mm == "cn":
                            cur_crash_data = select_dolphin_engine_cn_data_online(version, cur_date)
                        else:
                            cur_crash_data = select_dolphin_engine_en_data_online(version, cur_date)

                        print 'crashs_data:%d' %(int(cur_crash_data)) 
                        totaldata = cur_crash_data

                    else:
                        if mm == "cn":
                            cur_crash_data = select_dolphin_engine_cn_data_online(version, cur_date)
                            pre_crash_data = select_dolphin_engine_cn_data_online(version, pre_date)
                        else:
                            cur_crash_data = select_dolphin_engine_en_data_online(version, cur_date)
                            pre_crash_data = select_dolphin_engine_en_data_online(version, pre_date)

                        totaldata = cur_crash_data - pre_crash_data
                        
                    tt = 0
                    if totaldata <= 0:
                        tt = 1
                    else: 
                        tt = totaldata

                    myline = '%s\tTotal=%d\tcrash_device=%d\tcrash_rate=%f\n' %(cur_date, totaldata, int(nn[2]), float(nn[2])/tt)
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

                    myline = '%s_%s===>Total=%d, crash_device=%d, crash_rate=%f\n' %(version, mm, totaldata, int(crash), float(crash)/totaldata)
                    print myline
                    file_object.writelines(myline)
                    continue

                if v_sflag : 
                    if nn[0] == "----------------------------------":
                        continue

                    #calcuate date 
                    strs = nn[0].strip().split('-');
                    mydate = datetime.datetime(int(strs[0]), int(strs[1]), int(strs[2]), 0, 0, 0);
                    mypredate = mydate + datetime.timedelta(days=-1)
                    pre_date = mypredate.strftime('%Y/%m/%d')
                    cur_date = mydate.strftime('%Y/%m/%d')
                
                    print '$$$$ %s' %(pre_date)
                    print '$$$$ %s' %(cur_date)

                    print '~~~>' + nn[0] + ',' + nn[1]
                    myflag = 0
                    if nn[0] == v_103:
                        myflag = 1
                    else:
                        myflag = 0

                    print 'version: %s, pre_data:%s , cur_date = %s' %(version, pre_date, cur_date)
                    vdata = 0
                    cur_crash_data = 0
                    pre_crash_data = 0
                    if myflag :
                        if mm == "cn":
                            cur_crash_data = select_dolphin_engine_cn_data_online(version, cur_date)
                        else:
                            cur_crash_data = select_dolphin_engine_en_data_online(version, cur_date)

                        #print 'crashs_data:%d' %(int(cur_crash_data)) 
                        vdata = cur_crash_data

                    else:
                        if mm == "cn":
                            cur_crash_data = select_dolphin_engine_cn_data_online(version, cur_date)
                            pre_crash_data = select_dolphin_engine_cn_data_online(version, pre_date)
                        else:
                            cur_crash_data = select_dolphin_engine_en_data_online(version, cur_date)
                            pre_crash_data = select_dolphin_engine_en_data_online(version, pre_date)

                        vdata = cur_crash_data - pre_crash_data
                        
                    tt = 0
                    if vdata <= 0:
                        tt = 1
                    else: 
                        tt = vdata
                    myline = '%s\tTotal=%d\tcrash_device=%d \tcrash_rate=%f\n' %(cur_date, vdata, int(nn[1]), float(nn[1])/tt)
                    print myline
                    file_object.writelines(myline)

    except Exception, e:
        raise e
    finally:
        file_object.close()

def main():
    print "Hello world"
    crawl_each_day_crash_data()

if __name__ == '__main__':
    main()