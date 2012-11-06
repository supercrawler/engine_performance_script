#!/bin/sh 

cur_date=`echo "$(date +%Y%m%d)"`
echo $cur_date

filename=`echo crash_file_$cur_date`
echo $filename
>$filename

echo "crash_file_v107_cn "
echo "*****************************************************************" >>$filename
echo "               Dolphin Engine 1.0.7 CN                  " >>$filename
echo "*****************************************************************" >>$filename
cat crash_file_v107_cn >> $filename

echo "crash_file_v107_en "
echo "*****************************************************************" >>$filename
echo "               Dolphin Engine 1.0.7 EN                  " >>$filename
echo "*****************************************************************" >>$filename
cat crash_file_v107_en >> $filename

echo "crash_file_v106_cn "
echo "*****************************************************************" >>$filename
echo "               Dolphin Engine 1.0.6 CN                  " >>$filename
echo "*****************************************************************" >>$filename
cat crash_file_v106_cn >> $filename

echo "crash_file_v106_en "
echo "*****************************************************************" >>$filename
echo "               Dolphin Engine 1.0.6 EN                  " >>$filename
echo "*****************************************************************" >>$filename
cat crash_file_v106_en >> $filename

echo "crash_file_v105_cn "
echo "*****************************************************************" >>$filename
echo "               Dolphin Engine 1.0.5 CN                  " >>$filename
echo "*****************************************************************" >>$filename
cat crash_file_v105_cn >> $filename

echo "crash_file_v105_en "
echo "*****************************************************************" >>$filename
echo "               Dolphin Engine 1.0.5 EN                  " >>$filename
echo "*****************************************************************" >>$filename
cat crash_file_v105_en >> $filename

echo "crash_file_v104_cn "
echo "*****************************************************************" >>$filename
echo "               Dolphin Engine 1.0.4 CN                  " >>$filename
echo "*****************************************************************" >>$filename
cat crash_file_v104_cn >> $filename

echo "crash_file_v104_en "
echo "*****************************************************************" >>$filename
echo "               Dolphin Engine 1.0.4 EN                  " >>$filename
echo "*****************************************************************" >>$filename
cat crash_file_v104_en >> $filename

echo "crash_file_v103_cn "
echo "*****************************************************************" >>$filename
echo "               Dolphin Engine 1.0.3 CN                  " >>$filename
echo "*****************************************************************" >>$filename
cat crash_file_v103_cn >> $filename

echo "crash_file_v103_en "
echo "*****************************************************************" >>$filename
echo "               Dolphin Engine 1.0.3 EN                  " >>$filename
echo "*****************************************************************" >>$filename
cat crash_file_v103_en >> $filename


cat $filename


