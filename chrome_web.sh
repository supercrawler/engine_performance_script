#!/bin/sh 

history -c
clear
adb logcat -c

echo "-------------Collect Chrome Open WebData--------------------------"
filename="web/chrome"
subfile="web/chrome_news"
#>$filename
#>$subfile 
i=0
flag=0
BEGIN_PATTERN_STR="onPageStarted"
END_PATTERN_STR="onPageFinished"

adb logcat | while read line
do
    if [ $i -ge 20 ]; then
        break
    fi 

    if [ $flag -eq 1 ]; then
        nn=$(awk 'BEGIN {print index("'"$line"'", "'"$END_PATTERN_STR"'")}')
        if [ $nn -gt 0 ]; then
            echo $i
            echo $line 
            end=$(echo $line | awk '{print $3}')
            echo $end 
            cc=`echo "$end $start " | awk '{ printf("%g", $1 - $2);}'`
            echo "open web speed:"$cc
            flag=0
            #store data
            
            if [ $((i%2)) -eq 0 ]; then 
                echo $cc>>$filename
            else
                echo $cc>>$subfile
            fi
            i=`expr $i + 1`
        fi
    else
        mm=$(awk 'BEGIN {print index("'"$line"'", "'"$BEGIN_PATTERN_STR"'")}')
        if [ $mm -gt 0 ]; then
            flag=1
            echo $line
            start=$(echo $line | awk '{print $3}') 
            echo $start
        fi 
    fi
done

echo "--------Collect over-----------------------------------"
