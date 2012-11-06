#!/usr/bin/python

import sqlite3



def insert_db(version, crash_fenmo):
    connection = sqlite3.connect(mydatabase)
    connection.isolation_level = None
    cursor = connection.cursor()
    str_sql='INSERT INTO dolphin_engine_en(version_name, comp_crash_rate_fenmo) VALUES("%s", "%s")' %(version, crash_fenmo)
    print str_sql
    cursor.execute(str_sql)
    cursor.close()

def main():
    print "Hello world"

if __name__ == '__main__':
    main()