#!/usr/bin/python

import os
import json
import sys
import urllib2
import simplejson
# Converting Python to JSON

def parse_engine_en_data(decoded):
    
    vn_106="1.0.6"
    vn_105="1.0.5"
    vn_104="1.0.4"
    vn_103="1.0.3"

    vt_106=0
    vt_105=0
    vt_104=0
    vt_103=0

    for items in decoded:
        #line = '%s %d\n' %(items[1],items[2])
        print items
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
    
    f_key_106 = "%s_en" %vn_106
    f_key_105 = "%s_en" %vn_105
    f_key_104 = "%s_en" %vn_104
    f_key_103 = "%s_en" %vn_103

    print "==>", f_key_106, vt_106
    print "==>", f_key_105, vt_105
    print "==>", f_key_104, vt_104
    print "==>", f_key_103, vt_103


def sum_cn_package_count(decoded, version):
    sum=0
    for subitem in decoded:
        if (version == subitem['version']):
            sum+=subitem['count']

    return sum

def parse_engine_cn_data(decoded):
  
    vn_106="1.0.6"
    vn_105="1.0.5"
    vn_104="1.0.4"
    vn_103="1.0.3"

    vt_106 = sum_cn_package_count(decoded, vn_106)
    vt_105 = sum_cn_package_count(decoded, vn_105)
    vt_104 = sum_cn_package_count(decoded, vn_104)
    vt_103 = sum_cn_package_count(decoded, vn_103)

   
    f_key_106 = "%s_cn" %vn_106
    f_key_105 = "%s_cn" %vn_105
    f_key_104 = "%s_cn" %vn_104
    f_key_103 = "%s_cn" %vn_103

    print "==>", f_key_106, vt_106
    print "==>", f_key_105, vt_105
    print "==>", f_key_104, vt_104
    print "==>", f_key_103, vt_103


def main():
    print "Hello world"
 
    f = file('json_str')
    source = f.read()
    source =source.decode('utf-8', 'replace')
    jsonstr = json.loads(source)
    print jsonstr
    #python_object = simplejson.loads(json_object)
    #print python_object
    #type(python_object)


    for subitem in jsonstr:
        print "-->%s" %subitem

    parse_engine_cn_data(jsonstr)

if __name__ == '__main__':
    main()
