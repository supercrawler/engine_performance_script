#!/usr/bin/python 

import urllib2
import json
import sys
import re
import difflib
import time
import shlex
import subprocess
from datetime import timedelta, datetime

def popen(args):
    if type(args) != type([]):
        args = shlex.split(args)
    proc = subprocess.Popen(args, stdout = subprocess.PIPE, stderr = subprocess.PIPE)
    (output, errput) = proc.communicate()
    proc.wait()
    return output + errput

def crawl_each_day_crash_data(select_date, version, which):
    filename="crash_daily/crash"
    print "get crash data fen zi -----------",filename,"-------------------------------->"
    myfile = open(filename)
    flag = 0
    crash_data = 0
    for line in myfile.readlines():
        #print line
        strlist = line.strip().split(' ')
       # for st in strlist:
        #    print st

        if flag == 0 and len(strlist) >=2:
            if strlist[2] == version and strlist[3] == which:
                flag = 1
        else :
            nn = line.strip().split(' ')
            if nn[0] == select_date : 
                crash_data = nn[1]
                break
    print select_date,"result:",crash_data
    return crash_data


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
    vt_107=0

 
    for items in decoded:
        #line = '%s %d\n' %(items[1],items[2])
        print items
        if items['version'] == vn_107:
            vt_107 = items['count']
            break

    crash_data = crawl_each_day_crash_data(pre_date, vn_107, "en")
    print crash_data
    f_key_107 = "%s_en" %vn_107
  
    print vn_107
    if vt_107 <= 0:
        tt = 1
    else: 
        tt = vt_107

    myline = '%s\tTotal=%d\tcrash_device=%d\tcrash_rate=%f\n' %(cur_date, int(vt_107), int(crash_data), float(crash_data)/tt)
    print myline

    filename1="crash_daily/%s_temp" %f_key_107
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
    print mydate.strftime('%Y%m%d%H%M%S')
    cur_date = mydate.strftime('%Y/%m/%d')
    mypredate = mydate + timedelta(days=-3)
    pre_date = mypredate.strftime('%Y/%m/%d')

    print sys.argv[1]
   # params='curl -o "crash_daily/crash" http://10.2.1.207/cs/dailyreport_data.php'

    #print crawl_each_day_crash_data(pre_date.replace('/','-'), "1.0.7", "en")
    #popen(params)
    print cur_date
    print pre_date
    get_engine_en_each_day_active_data(pre_date.replace('-','/'))
   

if __name__ == '__main__':
    main()

