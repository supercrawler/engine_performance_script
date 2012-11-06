#!/bin/sh


if [ $# -eq 0 ]; then
    echo "*********************************************************"
    echo " "
    echo "Please run the shell such as: ./get_fps_237.sh en or cn"
    echo " "
    echo "*********************************************************"
    exit 1
fi

PATTERN_FLAG_START="[BrowserActivity]WEB_GAME_FPS Begin"
WEB_GAME_FPS_DATA="[BrowserActivity]WEB_GAME_FPS Duration"

clear
if [ $1 == "en" ]; then
    filename="data_game/237_en"
    echo ">>>>>>>>>>>DolphinEngine En"
else
    filename="data_game/237_cn"
    echo ">>>>>>>>>>>DolphinEngine Cn"
fi

>$filename
echo "~~~~~~~~~~~~~~~~~~~~~Begin to collect data  Android 2.3.7~~~~~~~~~~~~~~~~~~"
echo "~~~~~~~~begin:x-type"
adb logcat -c
#x-type
i=0
sum=0
start=0
max_num=100
adb logcat | while read line;
do
    if [ $start -eq 0 ] ; then
        mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_FLAG_START"'")}'`
        if [ $mm -gt 0 ]; then
            echo "begin read data===>"
            start=1
        fi
    else
        if [ $i -ge $max_num ]; then
            cc=`echo "$sum $max_num" | awk '{ printf("%g", $1 / $2);}'`
            echo "end read data===>"
            echo "Result:"$cc
            echo "type:"$cc>>$filename
            break
        fi

        echo $line
        mm=`awk 'BEGIN {print index("'"$line"'","'"$WEB_GAME_FPS_DATA"'")}'`
        if [ $mm -gt 0 ]; then
            num=`echo $line | awk '{print $5}' | grep -o "[0-9]*"`
            if [ $num -gt 0 -a $num -le 80 ]; then
                echo $i
                echo $num
                sum=`expr $sum + $num`
                echo $sum
                i=`expr $i + 1`
            fi 
        fi
    fi
done
echo "~~~~~~~~end: x-type~~~~~~~~~~~~~~~~~~"

sleep 5s
echo "~~~~~~~~begin:Dolphin----"
adb logcat -c
#x-type
i=0
sum=0
start=0
max_num=20
adb logcat | while read line;
do
    if [ $start -eq 0 ] ; then
        mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_FLAG_START"'")}'`
        if [ $mm -gt 0 ]; then
            echo "begin read data===>"
            start=1
        fi
    else
        if [ $i -ge $max_num ]; then
            cc=`echo "$sum $max_num" | awk '{ printf("%g", $1 / $2);}'`
            echo "end read data===>"
            echo "Result:"$cc
            echo "Dolphin:"$cc>>$filename
            break
        fi

        echo $line
        mm=`awk 'BEGIN {print index("'"$line"'","'"$WEB_GAME_FPS_DATA"'")}'`
        if [ $mm -gt 0 ]; then
            num=`echo $line | awk '{print $5}' | grep -o "[0-9]*"`
            if [ $num -gt 0 -a $num -le 80 ]; then
                echo $i
                echo $num
                sum=`expr $sum + $num`
                echo $sum
                i=`expr $i + 1`
            fi 
        fi
    fi
done
echo "~~~~~~~~end:Dolphin~~~~~~~~~~~~~~~~~~"
sleep 5s
echo "~~~~~~~~begin:Windmill----"
adb logcat -c
#x-type
i=0
sum=0
start=0
max_num=50
adb logcat | while read line;
do
    if [ $start -eq 0 ] ; then
        mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_FLAG_START"'")}'`
        if [ $mm -gt 0 ]; then
            echo "begin read data===>"
            start=1
        fi
    else
        if [ $i -ge $max_num ]; then
            cc=`echo "$sum $max_num" | awk '{ printf("%g", $1 / $2);}'`
            echo "end read data===>"
            echo "Result:"$cc
            echo "Windmill:"$cc>>$filename
            break
        fi

        echo $line
        mm=`awk 'BEGIN {print index("'"$line"'","'"$WEB_GAME_FPS_DATA"'")}'`
        if [ $mm -gt 0 ]; then
            num=`echo $line | awk '{print $5}' | grep -o "[0-9]*"`
            if [ $num -gt 0 -a $num -le 100 ]; then
                echo $i
                echo $num
                sum=`expr $sum + $num`
                echo $sum
                i=`expr $i + 1`
            fi 
        fi
    fi
done
echo "~~~~~~~~end:Windmill~~~~~~~~~~~~~~~~~~"
sleep 5s
echo "~~~~~~~~begin:Poker----"
adb logcat -c
#x-type
i=0
sum=0
start=0
max_num=50
adb logcat | while read line;
do
    if [ $start -eq 0 ] ; then
        mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_FLAG_START"'")}'`
        if [ $mm -gt 0 ]; then
            echo "begin read data===>"
            start=1
        fi
    else
        if [ $i -ge $max_num ]; then
            cc=`echo "$sum $max_num" | awk '{ printf("%g", $1 / $2);}'`
            echo "end read data===>"
            echo "Result:"$cc
            echo "Poker:"$cc>>$filename
            break
        fi

        echo $line
        mm=`awk 'BEGIN {print index("'"$line"'","'"$WEB_GAME_FPS_DATA"'")}'`
        if [ $mm -gt 0 ]; then
            num=`echo $line | awk '{print $5}' | grep -o "[0-9]*"`
            if [ $num -gt 0 -a $num -le 80 ]; then
                echo $i
                echo $num
                sum=`expr $sum + $num`
                echo $sum
                i=`expr $i + 1`
            fi 
        fi
    fi
done
echo "~~~~~~~~end:Poker~~~~~~~~~~~~~~~~~~"
sleep 5s
echo "~~~~~~~~begin:GUIMark-Bitmap Game----"
adb logcat -c
#x-type
i=0
sum=0
start=0
max_num=20
adb logcat | while read line;
do
    if [ $start -eq 0 ] ; then
        mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_FLAG_START"'")}'`
        if [ $mm -gt 0 ]; then
            echo "begin read data===>"
            start=1
        fi
    else
        if [ $i -ge $max_num ]; then
            cc=`echo "$sum $max_num" | awk '{ printf("%g", $1 / $2);}'`
            echo "end read data===>"
            echo "Result:"$cc
            echo "Bitmap:"$cc>>$filename
            break
        fi

        echo $line
        mm=`awk 'BEGIN {print index("'"$line"'","'"$WEB_GAME_FPS_DATA"'")}'`
        if [ $mm -gt 0 ]; then
            num=`echo $line | awk '{print $5}' | grep -o "[0-9]*"`
            if [ $num -gt 0 -a $num -le 80 ]; then
                echo $i
                echo $num
                sum=`expr $sum + $num`
                echo $sum
                i=`expr $i + 1`
            fi 
        fi
    fi
done
echo "~~~~~~~~end:GUIMark-Bitmap Game~~~~~~~~~~~~~~~~~~"
sleep 5s
echo "~~~~~~~~begin:Snow Bound----"
adb logcat -c
#x-type
i=0
sum=0
start=0
max_num=100
adb logcat | while read line;
do
    if [ $start -eq 0 ] ; then
        mm=`awk 'BEGIN {print index("'"$line"'","'"$PATTERN_FLAG_START"'")}'`
        if [ $mm -gt 0 ]; then
            echo "begin read data===>"
            start=1
        fi
    else
        if [ $i -ge $max_num ]; then
            cc=`echo "$sum $max_num" | awk '{ printf("%g", $1 / $2);}'`
            echo "end read data===>"
            echo "Result:"$cc
            echo "SnowBound:"$cc>>$filename
            break
        fi

        echo $line
        mm=`awk 'BEGIN {print index("'"$line"'","'"$WEB_GAME_FPS_DATA"'")}'`
        if [ $mm -gt 0 ]; then
            num=`echo $line | awk '{print $5}' | grep -o "[0-9]*"`
            if [ $num -gt 0 -a $num -le 80 ]; then
                echo $i
                echo $num
                sum=`expr $sum + $num`
                echo $sum
                i=`expr $i + 1`
            fi 
        fi
    fi
done
echo "~~~~~~~~end:Snow Bound~~~~~~~~~~~~~~~~~~"
clear
echo "~~~~~~~~~~~~~~~~~~~~~End to collect data $filename Android 2.3.7~~~~~~~~~~~~~~~~~~"
cat $filename | while read line;
do
    echo $line
done
cp $filename $filename".bak"
echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
