#!/usr/bin/python

import urllib2
import json
import sys
import time
import re
import difflib
import sqlite3

mydatabase="/home/bolewang/workspace/Ringtone/res/database/ringtone.db3"
table_name="services_dolphinenginecn"

def select_db(str):
    print "select_db:".join(str)
    print str
    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    str_select='select id from ' + table_name + ' where version_name="%s"' %(str)
    cursor.execute(str_select)
    res = cursor.fetchone()
    cursor.close()
    if res:
        return res[0]
   
    return None

def insert_db(version, crash_fenmo):
	connection = sqlite3.connect(mydatabase)
	connection.isolation_level = None
	cursor = connection.cursor()
	str_sql='INSERT INTO ' + table_name + '(version_name, comp_crash_rate_fenmo, last_modify) VALUES("%s", "%s", %ld)' %(version, crash_fenmo, time.time())
	print str_sql
	cursor.execute(str_sql)
	cursor.close()

def update_db(crash_fenmo, id):
	connection = sqlite3.connect(mydatabase)
	connection.isolation_level = None
	cursor = connection.cursor()
	str_sql='UPDATE ' + table_name + ' SET comp_crash_rate_fenmo="%s" WHERE id=%d' %(crash_fenmo, id)
	print str_sql
	cursor.execute(str_sql)
	cursor.close()

def main():
	cur_date = time.strftime('%Y/%m/%d',time.localtime(time.time()))
	url = 'http://172.16.7.133:9090/%s/get_activations_lab_cn.json' %cur_date
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
			strid=select_db(version_name)
			print strid
			if strid:
				#not exit,update
				update_db(sum, strid)
			else:
				#exit insert database
				insert_db(version_name,sum)

			line = '%s %d\n' %(version_name, sum)
			print "total: ", line
			file_object.write(line)

	except Exception, e:
		raise e
	finally:
		file_object.close()
#packagename="com.dolphin.browser.lab.cn"
#strbody="com.dolphin.browser.lab.cn"
#rint packagename
#rint strbody
#=re.search(packagename,strbody, re.IGNORECASE)
#rint bool(m)'''

if __name__ == '__main__':
	main()
