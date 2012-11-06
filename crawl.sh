#!/bin/sh

PACKAGENAME="com.dolphin.browser.lab.en"
DOLPHIN_EN="Package:"$PACKAGENAME

echo $DOLPHIN_EN

# three screen scroll view log  tag
THREESCREENSCROLLABLEVIEW_BEGIN="[ThreeScreenScrollableView]set drawing cache enabled true"
THREESCREENSCROLLABLEVIEW_PAGE_SHOW="[ThreeScreenScrollableView]on page shown"
THREESCREENSCROLLABLEVIEW_END="[ThreeScreenScrollableView]set drawing cache enabled false"

# Tab Open and Close
TAB_OPEN_BEGIN="onTabSelectionChanged"
TAB_OPEN_SUB_TAG_END="end"

#Address tag
ADDRESS_ANIMATION_TAG_OPEN="[ThreeScreenScrollableView]set drawing cache enabled false"
ADDRESS_ANIMATION_TAG_CLOSE="Package:com.android.inputmethod.latin"

#threestr="D/TunnyBrowser_1.0.4(  954): [ThreeScreenScrollableView]set drawing cache enabled true"

#echo "******begin*********"
#tt=`awk -f three_screen_check.awk -v PARAMS="$threestr" FLAG="WANG"`
#echo "I'm :"$tt
#echo "******end*********"

#echo $str| awk '{print $3}'
#expr index "$str" "www"
#mm="Package:com.dolphin.browser.lab.en"
#echo $mm
#if test "$mm" = "$DOLPHIN_EN"; then
#	echo "ok"
#else
#	echo "error"
#fi

#three screen scroll vaiables
three_start=0
three_flag=0
#tab variables
tab_start=0
tab_sub_start=0
tab_flag=0
#address animation vaiables
address_start=0
address_flag=0
#clear data
>three_screen
>tab_data_file
>address_data_file

$ANDROID_SDK_ROOT/platform-tools/adb logcat | while read line
do
    #---------------------------------------------------begin three screen scroll
    if test $three_start -eq 0; then
		mm=`awk 'BEGIN {print index("'"$line"'","'"$THREESCREENSCROLLABLEVIEW_BEGIN"'")}'`
		#echo "mm:"$mm
		if test $mm -gt 0 ; then
			echo "begin read three screen data----------------------------------------------------------------------------"
			three_start=1
			echo "#begin">>three_screen
			continue
		fi
	else
		echo "line:"$line
		echo "three screen start:"$three_start
		end=`awk 'BEGIN {print index("'"$line"'","'"$THREESCREENSCROLLABLEVIEW_END"'")}'`
		pageend=`awk 'BEGIN {print index("'"$line"'","'"$THREESCREENSCROLLABLEVIEW_PAGE_SHOW"'")}'`
		echo "end:"$end",pageend:"$pageend
		if [ $end -gt 0 -o $pageend -gt 0 ]; then
			three_start=0
			echo "#end">>three_screen
			echo "end read three screen data----------------------------------------------------------------------------"
			continue
		fi

		echo ">>>>>>>>>>>read three screen scroll data running"
		data=`echo $line|awk '{print $6}'`
		three_index=`awk 'BEGIN {print index("'"$line"'","'"$DOLPHIN_EN"'")}'`
		
		echo "three_index:"$three_index
		if [ $three_index -gt 0 -a $data -ge 0 ]; then
			echo ">>>>>>>>>>>:"$data
			three_flag=0
			if [ `echo $data | awk -v bi=0 '{print($1>bi)?"1":"0"}'` -eq "1" ]; then
				echo $data>>three_screen
			fi
		else
			echo "flag:"$three_flag
			if [ $three_flag -gt 0 ]; then
				three_start=0
				echo "#end">>three_screen
				echo "end read three screen data----------------------------------------------------------------------------"
				continue
			fi
			three_flag=1
		fi
	fi
	#---------------------------------------------------end three screen scroll
	
	# ********************************tab data crawl begin
	if test $tab_start -eq 0; then
		tab=`awk 'BEGIN {print index("'"$line"'","'"$TAB_OPEN_BEGIN"'")}'`
		if test $tab -gt 0; then
			tab_start=1
		fi
	elif [ $tab_start -gt 0 ]; then
		tab_sub=`awk 'BEGIN {print index("'"$line"'","'"$TAB_OPEN_SUB_TAG_END"'")}'`
		if [ $tab_sub -gt 0 ]; then
			echo "begin colloction data ******************************************************************************************:"
			tab_sub_start=1
			echo "#begin">>tab_data_file
			continue
		fi
	fi

	#echo "tab_start:"$tab_start",tab_sub_start:"$tab_sub_start
	if [ $tab_start -gt 0 -a $tab_sub_start -gt 0 ]; then
		 
		 echo ">>>>>>>>>>>read tab data running"
		 tab_index=`awk 'BEGIN {print index("'"$line"'","'"$DOLPHIN_EN"'")}'`
		 tab_data=`echo $line|awk '{print $6}'`
		 echo $line
		 echo "tab:"$tab_index
		if [ $tab_index -gt 0 -a $tab_data -ge 0 ]; then
			echo $tab_data
			tab_flag=0
			if [ $tab_data -gt 0 ]; then
				echo $tab_data>>tab_data_file
			fi			
		else
			echo "flag:"$tab_flag
			if [ $tab_flag -gt 0 ]; then
				#clear tab flag
				tab_start=0
				tab_sub_start=0
				echo "read tab data close******************************************************************************************"
				echo "#end">>tab_data_file
			fi
			tab_flag=1
		fi
	fi
	# ********************************tab data crawl end

	#+++++++++++++++++++++++++++address data begin
	if [ $address_start -eq 0 ]; then
		echo $line
		mm=`awk 'BEGIN {print index("'"$line"'","'"$ADDRESS_ANIMATION_TAG_OPEN"'")}'`
		if [ $mm -gt 0 ]; then
			address_start=1
			echo "begin colloction address data ++++++++++++++++++++++++++++++++++++++++++++++++++++++"
			echo "#begin">>address_data_file
			continue
		fi
	else
		echo "address:>>"$line
		nn=`awk 'BEGIN {print index("'"$line"'","'"$ADDRESS_ANIMATION_TAG_CLOSE"'")}'`
		echo "nn:"$nn
		if [ $nn -gt 0 ]; then
			echo "end colloction address data ++++++++++++++++++++++++++++++++++++++++++++++++++++++"
			address_start=0
			echo "#end">>address_data_file
			continue
		fi

 		echo ">>>>>>>>>>>read tab data running"
		address_index=`awk 'BEGIN {print index("'"$line"'","'"$DOLPHIN_EN"'")}'`
		address_data=`echo $line|awk '{print $6}'`
		if [ $address_index -gt 0 -a $address_data -ge 0 ]; then
			echo $address_data
			address_flag=0
			if [ $address_data -gt 0 ]; then
				echo $address_data>>address_data_file
			fi			
		else
			echo "flag:"$address_flag
			if [ $address_flag -gt 0 ]; then
				echo "end colloction address data ++++++++++++++++++++++++++++++++++++++++++++++++++++++"
				address_start=0
				echo "#end">>address_data_file
			fi
			address_flag=1
		fi
	fi
	#+++++++++++++++++++++++++++address data end

done