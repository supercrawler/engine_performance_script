#!/bin/sh 

clear
adb logcat -c
adb logcat -c 

echo "---------------Get Chrome data.------------------------"

filename="data_game/chrome"
i=1
>$filename 
adb logcat | while read line
do 
  if [ $i -gt 1000 ]; then
    break
  fi
  echo $line
  num=`echo $line | awk '{print $6}'| grep -o "[0-9]*"`
  echo $num
  if [ $num -gt 10 ]; then 
    echo $num>>$filename
    i=`expr $i + 1`
  fi

  echo $i
done 

echo "-------------Collect over----------------------------"
mm=`awk '{_+=$0} END{print _/NR}' $filename`
echo "Averge:"$mm 

