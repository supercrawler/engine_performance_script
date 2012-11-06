#!/usr/bin/python

import urllib2
import json
import sys
import time
import sqlite3

mydatabase="/home/bolewang/workspace/Ringtone/res/database/ringtone.db3"
table_name="services_dolphinengineen"
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
	str_sql='INSERT INTO ' + table_name + '(version_name, comp_crash_rate_fenmo, last_modify) VALUES("%s", "%s", %ld)' %(version, 
		crash_fenmo, time.time())
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
	url = 'http://172.16.7.133:9090/%s/get_activations_lab_en.json' %cur_date
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
			strid=select_db(items[1])
			print strid
			if strid:
				#not exit,update
				update_db(items[2], strid)
			else:
				#exit insert database
				insert_db(items[1],items[2])
			line = '%s %d\n' %(items[1],items[2])
			print line
			file_object.writelines(line)
		#for subitem in items:
		#	print subitem
	except Exception, e:
		raise e
	finally:
		file_object.close()
if __name__ == '__main__':
	main()