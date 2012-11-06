#!/usr/bin/python 

import urllib2
import json
import sys
import re
import difflib
import time
from datetime import timedelta, datetime


def add_dict_item(theIndex, word, pagenumber):
    theIndex[word] = pagenumber

def crawl_each_day_crash_data(select_date):
    print "get crash data fen zi -----------/mnt/share/CS/report.txt-------------------------------->"
    filename="/mnt/share/CS/report.txt"
    myfile = open(filename)
    v_bflag = 0
    v_sflag = 0
    mysplit="---------------------------------------------------------------------------------------------------\n"
    crash_dict_data = {}

    for line in myfile.readlines():
        strlist = line.strip().split('_')
        if len(strlist) == 2:
            #print len(strlist)
            version = strlist[0]
            mm = strlist[1]
            v_bflag = 0
            v_sflag = 0
            #for str in strlist:
            #    print '==>' + str
            #print '%s %s' %(strlist[0], strlist[1])
        else :
            nn = line.strip().split('\t')
            if (nn[0] == "total") and (len(nn) >= 4):
                v_bflag = 1
                continue

            if v_bflag : 
                if nn[0] == "----------------------------------":
                    continue
                print '%s == %s ' %(nn[0], select_date)
                if nn[0] == select_date:
                    key='%s_%s' %(version, mm)
                    print select_date, key, nn[2]
                    #crash_dict_data[key] = nn[2]
                    add_dict_item(crash_dict_data, key, nn[2])
                    v_bflag=0
              
                continue

            #1.0.3
            if (nn[0] == "total") and (len(nn) == 3) :
                v_sflag = 1
                continue

            if v_sflag : 
                if nn[0] == "----------------------------------":
                    continue

               # print '%s == %s ' %(nn[0], select_date)
                if nn[0] == select_date:
                    key='%s_%s' %(version, mm)
                    print select_date, key
                    #crash_dict_data[key] = nn[1]
                    add_dict_item(crash_dict_data, key, nn[1])
                    v_sflag = 0

                continue

    return crash_dict_data


def get_engine_en_each_day_active_data(cur_date):
    #cur_date = time.strftime('%Y/%m/%d',time.localtime(time.time()))
    url = 'http://10.2.7.133:9090/%s/get_active_user_lab_en.json' %cur_date
    print "get data url:", url
    mydata = 0
    pre_date = cur_date.replace('/','-')

    response=urllib2.urlopen(url).read().decode('utf-8')
    json_str =str(response)
    decoded = json.loads(json_str)   
    print(decoded)
    vn_107="1.0.7"
    vn_106="1.0.6"
    vn_105="1.0.5"
    vn_104="1.0.4"
    vn_103="1.0.3"

    vt_107=0
    vt_106=0
    vt_105=0
    vt_104=0
    vt_103=0

    for items in decoded:
        #line = '%s %d\n' %(items[1],items[2])
        print items
        if items['version'] == vn_107:
            vt_107 = items['count']
            continue

        if items['version'] == vn_106:
            vt_106 = items['count']
            continue

        if items['version'] == vn_105:
            vt_105 = items['count']
            continue

        if items['version'] == vn_104:
            vt_104 = items['count']
            continue

        if items['version'] == vn_103:
            vt_103 = items['count']
            continue
    
    crash_dict_data = crawl_each_day_crash_data(pre_date)
    file_subfix = cur_date.replace('/','_')
    print "***************************************>>"
    f_key_107 = "%s_en" %vn_107
    f_key_106 = "%s_en" %vn_106
    f_key_105 = "%s_en" %vn_105
    f_key_104 = "%s_en" %vn_104
    f_key_103 = "%s_en" %vn_103

    print "%s ==> %d" %(f_key_107, vt_107)
    print "%s ==> %d" %(f_key_106, vt_106)
    print "%s ==> %d" %(f_key_105, vt_105)
    print "%s ==> %d" %(f_key_104, vt_104)
    print "%s ==> %d" %(f_key_103, vt_103)

    if f_key_107 not in crash_dict_data.keys():
        add_dict_item(crash_dict_data, f_key_107, 0)
    if f_key_106 not in crash_dict_data.keys():
        add_dict_item(crash_dict_data, f_key_106, 0)
    if f_key_105 not in crash_dict_data.keys():
        add_dict_item(crash_dict_data, f_key_105, 0)
    if f_key_104 not in crash_dict_data.keys():
        add_dict_item(crash_dict_data, f_key_104, 0)
    if f_key_103 not in crash_dict_data.keys():
        add_dict_item(crash_dict_data, f_key_103, 0)

    for key in crash_dict_data:
        print "dict[%s]="%key, crash_dict_data[key]
        tt = 0
        if key == f_key_106 : 
            print "106"
            if vt_106 <= 0:
                tt = 1
            else: 
                tt = vt_106
            myline = '%s\tTotal=%d\tcrash_device=%d\tcrash_rate=%f\n' %(cur_date, int(vt_106), int(crash_dict_data[key]), float(crash_dict_data[key])/tt)
            name = f_key_106

        elif key == f_key_107 : 
            print "107"
            if vt_107 <= 0:
                tt = 1
            else: 
                tt = vt_107
            myline = '%s\tTotal=%d\tcrash_device=%d\tcrash_rate=%f\n' %(cur_date, int(vt_107), int(crash_dict_data[key]), float(crash_dict_data[key])/tt)
            name = f_key_107

        elif key == f_key_105 : 
            print "105"
            if vt_105 <= 0:
                tt = 1
            else: 
                tt = vt_105
            myline = '%s\tTotal=%d\tcrash_device=%d\tcrash_rate=%f\n' %(cur_date, int(vt_105), int(crash_dict_data[key]), float(crash_dict_data[key])/tt)
            name = f_key_105

        elif key == f_key_104 :
            print "104"
            if vt_104 <= 0:
                tt = 1
            else: 
                tt = vt_104
            myline = '%s\tTotal=%d\tcrash_device=%d\tcrash_rate=%f\n' %(cur_date, int(vt_104), int(crash_dict_data[key]), float(crash_dict_data[key])/tt)
            name = f_key_104

        elif key == f_key_103 :
            print "103"
            if vt_103 <= 0:
                tt = 1
            else: 
                tt = vt_103
            myline = '%s\tTotal=%d\tcrash_device=%d\tcrash_rate=%f\n' %(cur_date, int(vt_103), int(crash_dict_data[key]), float(crash_dict_data[key])/tt)
            name = f_key_103

        else:
            continue

        print myline
        filename1="crash_daily/%s_temp" %name
        file_object = open(filename1, 'ab')  
        try:
            file_object.writelines(myline)
        except Exception, e:
            raise e
        finally:
            file_object.close()

def sum_cn_package_count(decoded, version):
    sum=0
    for subitem in decoded:
        if version==subitem['version']:
            sum+=subitem['count']

    return sum

def get_engine_cn_each_day_active_data(cur_date):
    #cur_date = time.strftime('%Y/%m/%d',time.localtime(time.time()))
    url = 'http://10.2.7.133:9090/%s/get_active_user_lab_cn.json' %cur_date
    print "get data url:", url
    pre_date = cur_date.replace('/','-')

    response=urllib2.urlopen(url).read().decode('utf-8')
    json_str = str(response)
    #rint(json_str)
    decoded = json.loads(json_str)
    print 'DECODED:', decoded

    vn_107="1.0.7"
    vn_106="1.0.6"
    vn_105="1.0.5"
    vn_104="1.0.4"
    vn_103="1.0.3"

    vt_107 = sum_cn_package_count(decoded, vn_107)
    vt_106 = sum_cn_package_count(decoded, vn_106)
    vt_105 = sum_cn_package_count(decoded, vn_105)
    vt_104 = sum_cn_package_count(decoded, vn_104)
    vt_103 = sum_cn_package_count(decoded, vn_103)

    crash_dict_data = crawl_each_day_crash_data(pre_date)
    file_subfix = cur_date.replace('/','_')
    print "***************************************>>"
    f_key_107 = "%s_cn" %vn_107
    f_key_106 = "%s_cn" %vn_106
    f_key_105 = "%s_cn" %vn_105
    f_key_104 = "%s_cn" %vn_104
    f_key_103 = "%s_cn" %vn_103
    print "%s ==> %d" %(f_key_107, vt_107)
    print "%s ==> %d" %(f_key_106, vt_106)
    print "%s ==> %d" %(f_key_105, vt_105)
    print "%s ==> %d" %(f_key_104, vt_104)
    print "%s ==> %d" %(f_key_103, vt_103)

    if f_key_107 not in crash_dict_data.keys():
        add_dict_item(crash_dict_data, f_key_107, 0)
    if f_key_106 not in crash_dict_data.keys():
        add_dict_item(crash_dict_data, f_key_106, 0)
    if f_key_105 not in crash_dict_data.keys():
        add_dict_item(crash_dict_data, f_key_105, 0)
    if f_key_104 not in crash_dict_data.keys():
        add_dict_item(crash_dict_data, f_key_104, 0)
    if f_key_103 not in crash_dict_data.keys():
        add_dict_item(crash_dict_data, f_key_103, 0)
    

    for key in crash_dict_data:
        print "dict[%s]="%key, crash_dict_data[key]
        tt = 0
        if key == f_key_106 : 
            print "106"
            if vt_106 <= 0:
                tt = 1
            else: 
                tt = vt_106

            myline = '%s\tTotal=%d\tcrash_device=%d\tcrash_rate=%f\n' %(cur_date, int(vt_106), int(crash_dict_data[key]), float(crash_dict_data[key])/tt)
            name = f_key_106
        elif key == f_key_107 : 
            print "107"
            if vt_107 <= 0:
                tt = 1
            else: 
                tt = vt_107
            myline = '%s\tTotal=%d\tcrash_device=%d\tcrash_rate=%f\n' %(cur_date, int(vt_107), int(crash_dict_data[key]), float(crash_dict_data[key])/tt)
            name = f_key_107

        elif key == f_key_105 : 
            print "105"
            if vt_105 <= 0:
                tt = 1
            else: 
                tt = vt_105
            myline = '%s\tTotal=%d\tcrash_device=%d\tcrash_rate=%f\n' %(cur_date, int(vt_105), int(crash_dict_data[key]), float(crash_dict_data[key])/tt)
            name = f_key_105

        elif key == f_key_104 :
            print "104"
            if vt_104 <= 0:
                tt = 1
            else: 
                tt = vt_104
            myline = '%s\tTotal=%d\tcrash_device=%d\tcrash_rate=%f\n' %(cur_date, int(vt_104), int(crash_dict_data[key]), float(crash_dict_data[key])/tt)
            name = f_key_104

        elif key == f_key_103 :
            print "103"
            if vt_103 <= 0:
                tt = 1
            else: 
                tt = vt_103
            myline = '%s\tTotal=%d\tcrash_device=%d\tcrash_rate=%f\n' %(cur_date, int(vt_103), int(crash_dict_data[key]), float(crash_dict_data[key])/tt)
            name = f_key_103

        else:
            continue

        print myline
        filename1="crash_daily/%s_temp" %name
        file_object = open(filename1, 'ab')  
        try:
            file_object.writelines(myline)
        except Exception, e:
            raise e
        finally:
            file_object.close()




def main():
    print "Hello world"
    #crawl_each_day_crash_data()
  
    mydate = datetime.fromtimestamp(time.time());
    cur_date = mydate.strftime('%Y/%m/%d')
    mypredate = mydate + timedelta(days=-3)
    pre_date = mypredate.strftime('%Y/%m/%d')

    print cur_date
    print pre_date

    get_engine_cn_each_day_active_data(pre_date)
    #get_engine_en_each_day_active_data(pre_date)
   
    #crash_dict_data = crawl_each_day_crash_data(pre_date)


if __name__ == '__main__':
    main()

