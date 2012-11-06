#!/bin/sh

MYFILE="ipfile"
line=`cat $MYFILE`

OFFSET=8
pre_ip=${line%.*}
#echo $pre_ip
sub_ip=`echo $line | awk -F"." '{print $4}'`
if [ $sub_ip -le 15 -o $sub_ip -ge 232 ]; then
    sub_ip=17
#elif [[ $sub_ip -ge 232 ]]; then
#    sub_ip=17
else
    sub_ip=`expr $sub_ip + $OFFSET`
fi 

ip=`echo $pre_ip"."$sub_ip`
echo $ip
echo $ip > $MYFILE

export SHELL="adb shell"
$SHELL <<EOF
su
busybox ifconfig wlan0 $ip
exit
exit
EOF