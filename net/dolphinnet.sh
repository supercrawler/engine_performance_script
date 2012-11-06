#!/bin/sh


str2time()
{
    if [ $# -ne 1 ]; then
        echo "Usage: str2time string "
        exit 1
    fi
    str=`echo "$1" | sed 's/\.//g'`
    echo $str | awk -F ':' '{print $1*60*60 + $2*60 + $3 }'
}

gettime()
{
    if [ $# -ne 1 ]; then
        echo "Usage: gettime line "
        exit 1
    fi

    date_str=`echo $1 | cut -d" " -f 2`
    str2time $date_str
}

formatline()
{
    if [ $# -ne 1 ]; then
        echo "Usage: formatline line "
        exit 1
    fi

    line=`echo $1 | sed -e 's/ D\/dolphinnet([ ]*[0-9]*)://g'`
    date_str=`echo $line | cut -d" " -f 2`
    tt=`str2time $date_str`

    end_str=`echo $line | cut -d' ' -f 3-`
    echo $tt" "$end_str
}

getvlaue()
{
    if [ $# -ne 1 ]; then
        echo "Usage: getvlaue str"
        exit 1
    fi

    line=$1
    str=`echo ${line##*//} | sed 's/ (success).//g' | sed -e 's/\(^ *\)//' -e 's/\( *$\)//' | tr -d [:cntrl:]`
    if [ -z str ]; then
        echo "getvalue result is null"
        exit
    fi 
    echo $str
}


if [ $# -ne 1 ]; then
    echo "Usage $0 Params"
    echo "Params: "
    echo "        taobao/56/ebay/msn/qq/yahoo/youku/youtube/google/baidu"
    exit 1
fi 

path="taobao"
if [[ "$1" = "taobao" ]]; then
    echo "-----------------------------Taobao-----------------------------------------------------------------------"
    path="taobao"
elif [[ "$1" = "56" ]]; then
    echo "-----------------------------56-----------------------------------------------------------------------"
    path="56"
elif [[ "$1" = "ebay" ]]; then
    echo "-----------------------------ebay-----------------------------------------------------------------------"
    path="ebay"
elif [[ "$1" = "msn" ]]; then
    echo "-----------------------------msn-----------------------------------------------------------------------"
    path="msn"
elif [[ "$1" = "qq" ]]; then
    echo "-----------------------------qq-----------------------------------------------------------------------"
    path="qq"
elif [[ "$1" = "yahoo" ]]; then
    echo "-----------------------------yahoo-----------------------------------------------------------------------"
    path="yahoo"
elif [[ "$1" = "youku" ]]; then
    echo "-----------------------------youku-----------------------------------------------------------------------"
    path="youku"
elif [[ "$1" = "youtube" ]]; then
    echo "-----------------------------youtube-----------------------------------------------------------------------"
    path="youtube"
elif [[ "$1" = "google" ]]; then
    echo "-----------------------------google-----------------------------------------------------------------------"
    path="google"
elif [[ "$1" = "baidu" ]]; then
    echo "-----------------------------baidu-----------------------------------------------------------------------"
    path="baidu"
fi

echo "Path:$path"
if [ ! -d $path ]; then
    mkdir $path
fi

clear
############dolphin engine en
echo "Collect dolphin net data~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
adb logcat -c

DOLPHIN_NET_PATTERN="dolphinnet"
PAGE_STARTED_PATTERN_STR="[BrowserActivity]onPageStarted"
PAGE_FINISHED_PATTERN_STR="Web Page Open: takes"

DNS_KEY="DNS Resolve:"
TCP_KEY="TCP connect"
REQUEST_KEY="Request"
REQUEST_START="Request start"
REQUEST_END="Request finished:"

SUFFIX_CSS=".css"
SUFFIX_JS=".js"

DNS_FILE="dns"
TCP_FILE="tcp"
REQUEST_FILE="request"
IMG="img"
CSS="css"
JS="js"

RESULT_FILE="result"

>$DNS_FILE
>$TCP_FILE
>$REQUEST_FILE
>$IMG
>$CSS
>$JS
>$RESULT_FILE

OFFSET=1
logfile="log"
>$logfile
start_time=0
start_flag=0
end_flag=0
flag=1
adb logcat -v time | while read line
do
    line=`echo $line | sed 's/\"//'g`

    if [ $start_flag -eq 0 ]; then
       
        nn=$(awk 'BEGIN {print index("'"$line"'","'"$PAGE_STARTED_PATTERN_STR"'")}')
        if [ $nn -gt 0 ]; then
            start_time=`gettime "$line"`
            index=`expr $OFFSET + 5`
            url=`getvlaue "$line"`
            echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
            echo $line
            echo $start_time
            echo "url:"$url
            echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
            start_flag=1
            continue
        fi
    fi

    if [ $flag -eq 1 ]; then

        mm=$(awk 'BEGIN {print index("'"$line"'","'"$DOLPHIN_NET_PATTERN"'")}')
        if [ $mm -gt 0 ]; then
            line=`formatline "$line"`
            echo $line
            echo $line >> $logfile

            #DNS Resolver
            dns=$(awk 'BEGIN {print index("'"$line"'","'"$DNS_KEY"'")}')
            if [ $dns -gt 0 ]; then
                echo $line >> $DNS_FILE
            fi

            #TCP Connect...
            tcp=$(awk 'BEGIN {print index("'"$line"'","'"$TCP_KEY"'")}')
            if [ $tcp -gt 0 ]; then
                echo $line >> $TCP_FILE
            fi

            #Request 
            request=$(awk 'BEGIN {print index("'"$line"'","'"$REQUEST_KEY"'")}')
            if [ $request -gt 0 ]; then
                echo $line >> $REQUEST_FILE

                #document download if finished.
                if [ $end_flag -eq 0 ]; then

                    doc=$(awk 'BEGIN {print index("'"$line"'","'"$REQUEST_END"'")}')
                    if [ $doc -gt 0 ];then
                        #index=`expr $OFFSET + 6`
                        #doc_finish=`echo $line | awk '{print $"'"$index"'"}' | sed -e 's/\(^ *\)//' -e 's/\( *$\)//' | tr -d [:cntrl:]`
                        doc_finish=`getvlaue "$line"`
                        echo "==>$doc_finish"
                        #echo "==>$url"
                        #echo "len(doc_finish):"${#doc_finish}
                        #echo "len(url):"${#url}
                        #for((i=0;i<=${#url};i++))
                        #do
                        #    if [ "${doc_finish:0:$i}" != "${url:0:$i}" ] ; then
                        #        break
                        #    fi
                        #done
                        #pos=$(($i-1))
                        #echo "pos:"$pos
                        #echo "~~~>"${url:0:$pos}
                        #echo "~~~>1'${url:233:234}'"
                        #echo "~~~>2'${url:234:235}'"
                        #space=${url:$pos}
                        #if [ -z $space ];then
                        #    echo "I'm space.."
                        #fi
                        if [ "$doc_finish" == "$url" ]; then

                            echo "--------------Main Document Download Finish--------------------------------------------"
                            echo $line
                            echo "url:$doc_finish"
                            #end_time=`gettime "$line"`
                            end_time=`echo $line | awk '{print $1}'`
                            echo "start_time: "$start_time"; end_time:"$end_time
                            document_loading_time=`expr $end_time - $start_time`
                            echo "Document loading time "$document_loading_time
                           
                            echo "---------------------------------------------------------------------------------------"
                            end_flag=1
                        fi

                    fi 
                fi

                #jpg, jpeg, png, gif ,ico, bmp
                img=`awk 'BEGIN{info="'"$line"'";print match(info,/(.jpg)|(.jpeg)|(.png)|(.gif)|(.ico)|(.bmp)|(image)/)?1:0;}'`
                if [ $img -eq 1 ]; then
                    echo $line >> $IMG
                    continue
                fi

                #CSS Resource
                css=`awk 'BEGIN{info="'"$line"'";print match(info,/(.cs)/)?1:0;}'`
                if [ $css -eq 1 ]; then
                    echo $line >> $CSS
                    continue
                fi

                #JS Resource
                js=`awk 'BEGIN{info="'"$line"'";print match(info,/(.js)/)?1:0;}'`
                if [ $js -eq 1 ]; then
                    echo $line >> $JS
                    continue
                fi
                continue
            fi
        fi

    fi

    gg=`awk 'BEGIN {print index("'"$line"'","'"$PAGE_FINISHED_PATTERN_STR"'")}'`
    if [ $gg -gt 0 ]; then
        #disable crawl log flag.
        flag=0
        num1=`echo $line | awk '{print $10}' | grep -o "[0-9]*"`
        num2=`echo $line | awk '{print $11}' | grep -o "[0-9]*"`
        num=0
        if [ -z $num1 ]; then
            num=$num2
        else
            num=$num1
        fi
        echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
        echo $line
        echo $line >> $logfile
        echo "web_open_time "$num 
        echo "web_open_time:"$num >>$RESULT_FILE

        sleep 1s
        echo "====>"
        eline=`cat "$CSS" | grep "$REQUEST_END" | grep "http://" | tail -1`
        etime=`echo "$eline" | awk '{print $1}'`

        echo "url request start time: " $start_time
        echo "css last fiel finished time: "$etime
        primary_file_loading_time=`expr $etime - $start_time`
        echo "primary_file_loading_time: "$primary_file_loading_time
        echo "primary_file_loading_time:"$primary_file_loading_time >>$RESULT_FILE

        echo "start_time:"$start_time >>$RESULT_FILE

        iline=`cat "$IMG" | grep "$REQUEST_END" | grep "http://" | tail -1 `
        itime=`echo "$iline" | awk '{print $1}'`

        jline=`cat "$JS" | grep "$REQUEST_END" | grep "http://" | tail -1 `
        jtime=`echo "$jline" | awk '{print $1}'`

        echo "======>"
        ptime=$itime
        echo "etime:$etime; itime:$itime; jtime:$jtime"
        if [ $itime -ge $jtime ]; then
            ptime=$itime
        else
            ptime=$jtime
        fi
        
        echo $iline
        echo $jline
        echo "ptime $ptime"
        sleep 5s

        page_loading_time=`expr $ptime - $start_time`
        echo "page_loading_time "$page_loading_time
        echo "page_loading_time:"$page_loading_time >>$RESULT_FILE

        echo "Document loading time "$document_loading_time
        main_resouce_loading_time=0
        if [[ $primary_file_loading_time -gt document_loading_time ]]; then
            main_resouce_loading_time=$primary_file_loading_time
        else
            main_resouce_loading_time=$document_loading_time
        fi
        echo "====>"
        echo "main_resouce_loading_time "$main_resouce_loading_time
        echo "main_resouce_loading_time:"$main_resouce_loading_time >>$RESULT_FILE

        echo "==>"
        curl -o "1.html" "$url"
        sleep 5s
        size=`ls -alh "1.html" | awk '{print $5}'`
        echo "Document loading time "$document_loading_time
        echo "document_num 1"
        echo "document_size "$size 
        echo "document_loading_time:"$document_loading_time >>$RESULT_FILE
        echo "document_num:1" >>$RESULT_FILE
        echo "document_size:"$size >>$RESULT_FILE
        echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
        break
    fi
done 

sleep 5s
#TCP 
./tcp.sh
sleep 3s 

#DNS
./dns.sh
sleep 3s 

#css
./css.sh "$path"
sleep 3s 

#js
./js.sh "$path"
sleep 3s 
#img
./img.sh "$path"
sleep 3s 

echo "~~~~~~~~~~~~~~~Result~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
cat result


./db.sh "$path"