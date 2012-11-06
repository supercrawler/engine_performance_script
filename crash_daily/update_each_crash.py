#!/usr/bin/python

import sys
import sqlite3
import difflib

mydatabase="/home/bolewang/workspace/Ringtone/res/database/ringtone.db3"
def execute_sql(str):
    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    print str
    cursor.execute(str)
    cursor.close()

def update_engine_en_daily_crash_data():
    
    #v1.0.3
    version="1.0.3"
    filename="1.0.3_en_temp"
    myfile = open(filename)
    for line in myfile.readlines():
        print line;
        strlist = line.strip().split('\t')
        daily_date = strlist[0]
        total = strlist[1].strip().split('=')
        device = strlist[2].strip().split('=')
        rate = strlist[3].strip().split('=')

        daily_total = float(total[1])
        daily_device = float(device[1])
        daily_rate = float(rate[1])
        break;
    myfile.close()

    print "daily_date:%s" %daily_date
    print "daily_total:%f" %daily_total
    print "daily_device:%f" %daily_device
    print "daily_rate:%f" %daily_rate

    str_sql='''UPDATE services_dolphinengineen SET daily_crash_fenzi=%d,
                daily_crash_fenmu=%d, daily_crash_rate=%f, daily_crash_date="%s" where version_name="%s"''' %(daily_device, 
                    daily_total, daily_rate, daily_date, version)

    print str_sql
    execute_sql(str_sql)

    #v1.0.4
    version="1.0.4"
    filename="1.0.4_en_temp"
    myfile = open(filename)
    for line in myfile.readlines():
        print line;
        strlist = line.strip().split('\t')
        daily_date = strlist[0]
        total = strlist[1].strip().split('=')
        device = strlist[2].strip().split('=')
        rate = strlist[3].strip().split('=')

        daily_total = float(total[1])
        daily_device = float(device[1])
        daily_rate = float(rate[1])
        break;
    myfile.close()

    print "daily_date:%s" %daily_date
    print "daily_total:%f" %daily_total
    print "daily_device:%f" %daily_device
    print "daily_rate:%f" %daily_rate

    str_sql='''UPDATE services_dolphinengineen SET daily_crash_fenzi=%d,
                daily_crash_fenmu=%d, daily_crash_rate=%f, daily_crash_date="%s" where version_name="%s"''' %(daily_device, 
                    daily_total, daily_rate, daily_date, version)

    print str_sql
    execute_sql(str_sql)

    #v1.0.5
    version="1.0.5"
    filename="1.0.5_en_temp"
    myfile = open(filename)
    for line in myfile.readlines():
        print line;
        strlist = line.strip().split('\t')
        daily_date = strlist[0]
        total = strlist[1].strip().split('=')
        device = strlist[2].strip().split('=')
        rate = strlist[3].strip().split('=')

        daily_total = float(total[1])
        daily_device = float(device[1])
        daily_rate = float(rate[1])
        break;
    myfile.close()

    print "daily_date:%s" %daily_date
    print "daily_total:%f" %daily_total
    print "daily_device:%f" %daily_device
    print "daily_rate:%f" %daily_rate

    str_sql='''UPDATE services_dolphinengineen SET daily_crash_fenzi=%d,
                daily_crash_fenmu=%d, daily_crash_rate=%f, daily_crash_date="%s" where version_name="%s"''' %(daily_device, 
                    daily_total, daily_rate, daily_date, version)

    print str_sql
    execute_sql(str_sql)

    #v1.0.6
    version="1.0.6"
    filename="1.0.6_en_temp"
    myfile = open(filename)
    for line in myfile.readlines():
        print line;
        strlist = line.strip().split('\t')
        daily_date = strlist[0]
        total = strlist[1].strip().split('=')
        device = strlist[2].strip().split('=')
        rate = strlist[3].strip().split('=')

        daily_total = float(total[1])
        daily_device = float(device[1])
        daily_rate = float(rate[1])
        break;
    myfile.close()

    print "daily_date:%s" %daily_date
    print "daily_total:%f" %daily_total
    print "daily_device:%f" %daily_device
    print "daily_rate:%f" %daily_rate

    str_sql='''UPDATE services_dolphinengineen SET daily_crash_fenzi=%d,
                daily_crash_fenmu=%d, daily_crash_rate=%f, daily_crash_date="%s" where version_name="%s"''' %(daily_device, 
                    daily_total, daily_rate, daily_date, version)

    print str_sql
    execute_sql(str_sql)

    #v1.0.7
    version="1.0.7"
    filename="1.0.7_en_temp"
    myfile = open(filename)
    for line in myfile.readlines():
        print line;
        strlist = line.strip().split('\t')
        daily_date = strlist[0]
        total = strlist[1].strip().split('=')
        device = strlist[2].strip().split('=')
        rate = strlist[3].strip().split('=')

        daily_total = float(total[1])
        daily_device = float(device[1])
        daily_rate = float(rate[1])
        break;
    myfile.close()

    print "daily_date:%s" %daily_date
    print "daily_total:%f" %daily_total
    print "daily_device:%f" %daily_device
    print "daily_rate:%f" %daily_rate

    str_sql='''UPDATE services_dolphinengineen SET daily_crash_fenzi=%d,
                daily_crash_fenmu=%d, daily_crash_rate=%f, daily_crash_date="%s" where version_name="%s"''' %(daily_device, 
                    daily_total, daily_rate, daily_date, version)

    print str_sql
    execute_sql(str_sql)

def update_engine_cn_daily_crash_data():
    
    #v1.0.3
    version="1.0.3"
    filename="1.0.3_cn_temp"
    myfile = open(filename)
    for line in myfile.readlines():
        print line;
        strlist = line.strip().split('\t')
        daily_date = strlist[0]
        total = strlist[1].strip().split('=')
        device = strlist[2].strip().split('=')
        rate = strlist[3].strip().split('=')

        daily_total = float(total[1])
        daily_device = float(device[1])
        daily_rate = float(rate[1])
        break;
    myfile.close()

    print "daily_date:%s" %daily_date
    print "daily_total:%f" %daily_total
    print "daily_device:%f" %daily_device
    print "daily_rate:%f" %daily_rate

    str_sql='''UPDATE services_dolphinenginecn SET daily_crash_fenzi=%d,
                daily_crash_fenmu=%d, daily_crash_rate=%f, daily_crash_date="%s" where version_name="%s"''' %(daily_device, 
                    daily_total, daily_rate, daily_date, version)

    print str_sql
    execute_sql(str_sql)

    #v1.0.4
    version="1.0.4"
    filename="1.0.4_cn_temp"
    myfile = open(filename)
    for line in myfile.readlines():
        print line;
        strlist = line.strip().split('\t')
        daily_date = strlist[0]
        total = strlist[1].strip().split('=')
        device = strlist[2].strip().split('=')
        rate = strlist[3].strip().split('=')

        daily_total = float(total[1])
        daily_device = float(device[1])
        daily_rate = float(rate[1])
        break;
    myfile.close()

    print "daily_date:%s" %daily_date
    print "daily_total:%f" %daily_total
    print "daily_device:%f" %daily_device
    print "daily_rate:%f" %daily_rate

    str_sql='''UPDATE services_dolphinenginecn SET daily_crash_fenzi=%d,
                daily_crash_fenmu=%d, daily_crash_rate=%f, daily_crash_date="%s" where version_name="%s"''' %(daily_device, 
                    daily_total, daily_rate, daily_date, version)

    print str_sql
    execute_sql(str_sql)

    #v1.0.5
    version="1.0.5"
    filename="1.0.5_cn_temp"
    myfile = open(filename)
    for line in myfile.readlines():
        print line;
        strlist = line.strip().split('\t')
        daily_date = strlist[0]
        total = strlist[1].strip().split('=')
        device = strlist[2].strip().split('=')
        rate = strlist[3].strip().split('=')

        daily_total = float(total[1])
        daily_device = float(device[1])
        daily_rate = float(rate[1])
        break;
    myfile.close()

    print "daily_date:%s" %daily_date
    print "daily_total:%f" %daily_total
    print "daily_device:%f" %daily_device
    print "daily_rate:%f" %daily_rate

    str_sql='''UPDATE services_dolphinenginecn SET daily_crash_fenzi=%d,
                daily_crash_fenmu=%d, daily_crash_rate=%f, daily_crash_date="%s" where version_name="%s"''' %(daily_device, 
                    daily_total, daily_rate, daily_date, version)

    print str_sql
    execute_sql(str_sql)

    #v1.0.6
    version="1.0.6"
    filename="1.0.6_cn_temp"
    myfile = open(filename)
    for line in myfile.readlines():
        print line;
        strlist = line.strip().split('\t')
        daily_date = strlist[0]
        total = strlist[1].strip().split('=')
        device = strlist[2].strip().split('=')
        rate = strlist[3].strip().split('=')

        daily_total = float(total[1])
        daily_device = float(device[1])
        daily_rate = float(rate[1])
        break;
    myfile.close()

    print "daily_date:%s" %daily_date
    print "daily_total:%f" %daily_total
    print "daily_device:%f" %daily_device
    print "daily_rate:%f" %daily_rate

    str_sql='''UPDATE services_dolphinenginecn SET daily_crash_fenzi=%d,
                daily_crash_fenmu=%d, daily_crash_rate=%f, daily_crash_date="%s" where version_name="%s"''' %(daily_device, 
                    daily_total, daily_rate, daily_date, version)

    print str_sql
    execute_sql(str_sql)

    #v1.0.7
    version="1.0.7"
    filename="1.0.7_cn_temp"
    myfile = open(filename)
    for line in myfile.readlines():
        print line;
        strlist = line.strip().split('\t')
        daily_date = strlist[0]
        total = strlist[1].strip().split('=')
        device = strlist[2].strip().split('=')
        rate = strlist[3].strip().split('=')

        daily_total = float(total[1])
        daily_device = float(device[1])
        daily_rate = float(rate[1])
        break;
    myfile.close()

    print "daily_date:%s" %daily_date
    print "daily_total:%f" %daily_total
    print "daily_device:%f" %daily_device
    print "daily_rate:%f" %daily_rate

    str_sql='''UPDATE services_dolphinenginecn SET daily_crash_fenzi=%d,
                daily_crash_fenmu=%d, daily_crash_rate=%f, daily_crash_date="%s" where version_name="%s"''' %(daily_device, 
                    daily_total, daily_rate, daily_date, version)

    print str_sql
    execute_sql(str_sql)

def main():
    print "Hello world"
    update_engine_en_daily_crash_data()
    update_engine_cn_daily_crash_data()

if __name__ == '__main__':
    main()
