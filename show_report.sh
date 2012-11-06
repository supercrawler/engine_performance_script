#!/bin/sh

echo "hello world"
FILENAME="DolphinEngineOpenWeb.html"

show_html_head_begin(){
	echo "<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">">>$FILENAME
	echo "<html><head>">>$FILENAME
	echo "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">">>$FILENAME
	echo "<title>Dolphin Engine Performance indicators</title>">>$FILENAME
}

show_css_style() {
	echo "<style type=\"text/css\">">>$FILENAME

	echo ".datagrid table {border-collapse: collapse;text-align: left;width: 100%;}">>$FILENAME

	echo ".datagrid {font: normal 12px/150% Arial, Helvetica, sans-serif;background: #fff;">>$FILENAME
	echo "overflow: hidden;border: 1px solid #006699;-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;}">>$FILENAME

	echo ".datagrid table td,.datagrid table th {padding: 3px 10px;}">>$FILENAME

	echo ".datagrid table thead th {">>$FILENAME
	echo "background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #006699), color-stop(1, #00557F) );">>$FILENAME
	echo "background: -moz-linear-gradient(center top, #006699 5%, #00557F 100%);">>$FILENAME
	echo "filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#006699',endColorstr='#00557F' );">>$FILENAME
	echo "background-color: #006699;color: #FFFFFF;	font-size: 15px;font-weight: bold;border-left: 1px solid #0070A8;}">>$FILENAME

	echo ".datagrid table thead th:first-child {border: none;}">>$FILENAME

	echo ".datagrid table tbody td {color: #00557F;	border-left: 1px solid #E1EEF4;	font-size: 12px;font-weight: normal;}">>$FILENAME

	echo ".datagrid table tbody .alt td {background: #E1EEf4;color: #00557F;}">>$FILENAME

	echo ".datagrid table tbody td:first-child {border: none;}">>$FILENAME

	echo ".datagrid table tfoot td div {border-top: 1px solid #006699;background: #E1EEf4;}">>$FILENAME

	echo ".datagrid table tfoot td {padding: 0;	font-size: 12px}">>$FILENAME

	echo ".datagrid table tfoot td div {padding: 2px;}">>$FILENAME

	echo ".datagrid table tfoot td ul {	margin: 0;	padding: 0;	list-style: none;	text-align: right;}">>$FILENAME

	echo ".datagrid table tfoot  li {display: inline;}">>$FILENAME

	echo ".datagrid table tfoot li a {text-decoration: none;display: inline-block;padding: 2px 8px;">>$FILENAME
	echo "margin: 1px;color: #006699;font-size: 14px;font-weight: bold;}">>$FILENAME

	echo ".datagrid table tfoot ul.active,.datagrid table tfoot ul a:hover {">>$FILENAME
	echo "text-decoration: none;border-color: #00557F;color: #FFFFFF;background: none;background-color: #006699;}">>$FILENAME

	echo "</style>">>$FILENAME
}
show_html_head_end() {
	echo "</head>">>$FILENAME
}

show_html_body_begin() {
	echo "<body>">>$FILENAME
	echo "<div class=\"datagrid\">">>$FILENAME
}

engine_en=2
engine_cn=2
table_columns=`expr $engine_en + $engine_cn + 9`

en_version=("1.0.4", "1.0.5")
cn_version=("1.0.4", "1.0.5")

create_report_engine_head() {

	echo "<tr class=\"alt\"><td></td><td></td><td></td><td></td>">>$FILENAME
	for ver in ${en_version[@]}; do
		echo "<td>${ver}</td>">>$FILENAME
	done
	echo "<td></td>">>$FILENAME
	for ver in ${cn_version[@]}; do
		echo "<td>${ver}</td>">>$FILENAME
	done
	echo "<td></td><td></td></tr>">>$FILENAME
}

create_start_speed_structure(){

	echo "<tr><td>启动速度</td><td>启动速度(ms)</td><td></td><td></td>">>$FILENAME
	for ((i=0; i<$engine_en; i++)); do
		echo "<td></td>">>$FILENAME
	done
	echo "<td></td>">>$FILENAME
	for ((i=0; i<$engine_cn; i++)); do
		echo "<td></td>">>$FILENAME
	done
	echo "<td></td><td>从点击应用到用户可以实际操作的时间（统计平均值）</td></tr>">>$FILENAME
}

create_web_open_speed(){

	echo "<tr class=\"alt\"><td>网页打开速度</td><td>网页打开速度(ms)</td><td></td><td></td>">>$FILENAME
	for ((i=0; i<$engine_en; i++)); do
		echo "<td></td>">>$FILENAME
	done
	echo "<td></td>">>$FILENAME
	for ((i=0; i<$engine_cn; i++)); do
		echo "<td></td>">>$FILENAME
	done
	echo "<td></td><td>从打开网页到加载完成的时间（统计平均值）</td></tr>">>$FILENAME
}

create_three_screen_scroll_structure() {

	echo "<tr><td rowspan=\"3\">UI响应度</td><td>三屏滑动流畅度(FPS)</td><td></td><td></td>">>$FILENAME
	for ((i=0; i<$engine_en; i++)); do
		echo "<td></td>">>$FILENAME
	done
	echo "<td></td>">>$FILENAME
	for ((i=0; i<$engine_cn; i++)); do
		echo "<td></td>">>$FILENAME
	done
	echo "<td></td><td>用户进行滑屏操作（调出Bookmark和Addon栏）时的帧率（统计平均值）</td>	</tr>">>$FILENAME
}

create_tab_animation_structure(){

	echo "<tr class="alt"><td>Tab动画流畅度(FPS)</td><td></td><td></td>">>$FILENAME
	for ((i=0; i<$engine_en; i++)); do
		echo "<td></td>">>$FILENAME
	done
	echo "<td></td>">>$FILENAME
	for ((i=0; i<$engine_cn; i++)); do
		echo "<td></td>">>$FILENAME
	done
	echo "<td></td><td>用户新建/关闭Tab时的帧率（分别统计统计平均值）</td></tr>">>$FILENAME
}

create_address_animation_structure(){

	echo "<tr><td>地址栏动画流畅度(FPS)</td><td></td><td></td>">>$FILENAME
	for ((i=0; i<$engine_en; i++)); do
		echo "<td></td>">>$FILENAME
	done
	echo "<td></td>">>$FILENAME
	for ((i=0; i<$engine_cn; i++)); do
		echo "<td></td>">>$FILENAME
	done
	echo "<td></td><td>用户打开地址栏时的帧率（统计平均值）</td></tr>">>$FILENAME
}

en_crash=("10.50(2085/19866)", "19.56(978/5001)")
cn_crash=("6.25(181/2911)", "15.95(284/1781)")
create_crash_rate_structure() {

	echo "<tr class=\"alt\"><td rowspan="2">兼容性及稳定性（主程序）</td><td>Crash比例(%)</td><td></td><td></td>">>$FILENAME
	for crash in ${en_crash[@]}; do
		echo "<td>${crash}</td>">>$FILENAME
	done
	echo "<td></td>">>$FILENAME
	for crash in ${cn_crash[@]}; do
		echo "<td>${crash}</td>">>$FILENAME
	done

	echo "<td></td><td>Crash用户与Dolphin Engine总用户的比例（主程序）</td></tr>">>$FILENAME
}

create_cash_p0_p1_rate_structure(){

	echo "<tr><td>P0/P1 bug比例(%)</td>	<td></td><td></td>">>$FILENAME
	for ((i=0; i<$engine_en; i++)); do
		echo "<td></td>">>$FILENAME
	done
	echo "<td></td>">>$FILENAME
	for ((i=0; i<$engine_cn; i++)); do
		echo "<td></td>">>$FILENAME
	done

	echo "<td></td><td>从禅道系统中取得P0/P1 bug的比例（主程序）</td></tr>">>$FILENAME
}

create_webgame_structure(){

	echo "<tr class=\"alt\"><td>WebGame渲染速度</td><td>游戏帧率(FPS)</td><td></td><td></td>">>$FILENAME
	for ((i=0; i<$engine_en; i++)); do
		echo "<td></td>">>$FILENAME
	done
	echo "<td></td>">>$FILENAME
	for ((i=0; i<$engine_cn; i++)); do
		echo "<td></td>">>$FILENAME
	done
	echo "<td></td><td>选取5~10款杀手级游戏，计算游戏中的帧率（统计平均值）</td></tr>">>$FILENAME
}

show_html_body(){

	echo "<table><thead>">>$FILENAME
	echo "<tr><th>Item</th><th>Site</th><th>0</th><th>1</th><th>2</th><th>3</th>">>$FILENAME
	echo "<th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th>">>$FILENAME
    echo "<th>10</th><th>Averge</th></tr>">>$FILENAME
	
	cur_date=`echo "$(date +%Y-%m-%d)"`
	echo "<tfoot><tr><td colspan="14"><div id=\"paging\">">>$FILENAME
	echo "<ul><li><a href=\"#\"><span>日期：$cur_date</span></a></li></ul>	</div></tr></tfoot>">>$FILENAME

	echo "<tbody>">>$FILENAME
	flag=0

	#dolphin engine en 1.0.7
	en_107_baidu="web_cache_en1.0.7baidu"
	en_107_sina="web_cache_en1.0.7sina"
    row_107_baidu=`cat $en_107_baidu | grep ">>>" | wc -l`
    row_107_sina=`cat $en_107_sina | grep ">>>" | wc -l`
    rows=`expr $row_107_baidu + $row_107_sina`
    echo "row_107_baidu:$row_107_baidu;row_107_sina: $row_107_sina"
 	i=0
 	cat $en_107_baidu | while read line
 	do
 		if [ -z $line ]; then
 			continue
 		fi

 		#echo $line
 		if [ $line == ">>>" ]; then
 			if [ $i -eq 0 ]; then
 				echo "<tr ><td rowspan=\"$rows\" style=\"border-bottom: 1px solid #E1EEF4;\">DolphinEngine EN 1.0.7 </td>">>$FILENAME
 				echo "<td rowspan=\"$row_107_baidu\">百度</td>">>$FILENAME
 			else
 				if [ $flag -eq 0 ]; then
 					echo "</tr><tr class=\"alt\" >">>$FILENAME
 					flag=1
 				else
 					echo "</tr><tr>">>$FILENAME
 					flag=0
 				fi
 			fi
 			continue
 		fi

 		data=`echo $line | awk -F":" '{print $2}'`
 		echo "<td>$data</td>">>$FILENAME
    	
 		i=`expr $i + 1`
 	done
   	echo "</tr>">>$FILENAME

    i=0
 	cat $en_107_sina | while read line
 	do
 		if [ -z $line ]; then
 			continue
 		fi
 		#echo $line
 		if [ $line == ">>>" ]; then
 			if [ $i -eq 0 ]; then
 				
 				if [ $flag -eq 0 ]; then
 					echo "<tr class=\"alt\" ><td rowspan=\"$row_107_sina\">新浪 </td>">>$FILENAME
 					flag=1
 				else
 					echo "<tr><td rowspan=\"$row_107_sina\">新浪 </td>">>$FILENAME
 					flag=0
 				fi

 			else
 				if [ $flag -eq 0 ]; then
 					echo "</tr><tr class=\"alt\" >">>$FILENAME
 					flag=1
 				else
 					echo "</tr><tr>">>$FILENAME
 					flag=0
 				fi

 			fi
 			continue
 		fi

 		data=`echo $line | awk -F":" '{print $2}'`
 		echo "<td>$data</td>">>$FILENAME
    	
 		i=`expr $i + 1`
 	done
   	echo "</tr>">>$FILENAME

	flag=0
	#dolphin engine cn 1.0.6 
	cn_107_baidu="web_cache_cn1.0.7baidu"
	cn_107_sina="web_cache_cn1.0.7sina"
    row_107_baidu=`cat $cn_107_baidu | grep ">>>" | wc -l`
    row_107_sina=`cat $cn_107_sina | grep ">>>" | wc -l`
    rows=`expr $row_107_baidu + $row_107_sina`
    echo "row_107_baidu:$row_107_baidu;row_107_sina: $row_107_sina"
 	i=0
 	cat $cn_107_baidu | while read line
 	do
 		if [ -z $line ]; then
 			continue
 		fi
 		#echo $line
 		if [ $line == ">>>" ]; then
 			if [ $i -eq 0 ]; then
 				echo "<tr><td rowspan=\"$rows\" style=\"border-bottom: 1px solid #E1EEF4;\">DolphinEngine CN 1.0.7 </td>">>$FILENAME
 				echo "<td rowspan=\"$row_107_baidu\">百度</td>">>$FILENAME
 			else
 				if [ $flag -eq 0 ]; then
 					echo "</tr><tr class=\"alt\" >">>$FILENAME
 					flag=1
 				else
 					echo "</tr><tr>">>$FILENAME
 					flag=0
 				fi

 			fi
 			continue
 		fi

 		data=`echo $line | awk -F":" '{print $2}'`
 		echo "<td>$data</td>">>$FILENAME
    	
 		i=`expr $i + 1`
 	done
   	echo "</tr>">>$FILENAME

    i=0
 	cat $cn_107_sina | while read line
 	do
 		if [ -z $line ]; then
 			continue
 		fi
 		#echo $line
 		if [ $line == ">>>" ]; then
 			if [ $i -eq 0 ]; then
 				if [ $flag -eq 0 ]; then
 					echo "<tr class=\"alt\" ><td rowspan=\"$row_107_sina\">新浪 </td>">>$FILENAME
 					flag=1
 				else
 					echo "<tr><td rowspan=\"$row_107_sina\">新浪 </td>">>$FILENAME
 					flag=0
 				fi

 			else
 				if [ $flag -eq 0 ]; then
 					echo "</tr><tr class=\"alt\" >">>$FILENAME
 					flag=1
 				else
 					echo "</tr><tr>">>$FILENAME
 					flag=0
 				fi

 			fi
 			continue
 		fi

 		data=`echo $line | awk -F":" '{print $2}'`
 		echo "<td>$data</td>">>$FILENAME
    	
 		i=`expr $i + 1`
 	done
   	echo "</tr>">>$FILENAME


	#dolphin engine en 1.0.6
	en_106_baidu="web_cache_en1.0.6baidu"
	en_106_sina="web_cache_en1.0.6sina"
    row_106_baidu=`cat $en_106_baidu | grep ">>>" | wc -l`
    row_106_sina=`cat $en_106_sina | grep ">>>" | wc -l`
    rows=`expr $row_106_baidu + $row_106_sina`
    echo "row_106_baidu:$row_106_baidu;row_106_sina: $row_106_sina"
 	i=0
 	cat $en_106_baidu | while read line
 	do
 		if [ -z $line ]; then
 			continue
 		fi

 		#echo $line
 		if [ $line == ">>>" ]; then
 			if [ $i -eq 0 ]; then
 				echo "<tr ><td rowspan=\"$rows\" style=\"border-bottom: 1px solid #E1EEF4;\">DolphinEngine EN 1.0.6 </td>">>$FILENAME
 				echo "<td rowspan=\"$row_106_baidu\">百度</td>">>$FILENAME
 			else
 				if [ $flag -eq 0 ]; then
 					echo "</tr><tr class=\"alt\" >">>$FILENAME
 					flag=1
 				else
 					echo "</tr><tr>">>$FILENAME
 					flag=0
 				fi
 			fi
 			continue
 		fi

 		data=`echo $line | awk -F":" '{print $2}'`
 		echo "<td>$data</td>">>$FILENAME
    	
 		i=`expr $i + 1`
 	done
   	echo "</tr>">>$FILENAME

    i=0
 	cat $en_106_sina | while read line
 	do
 		if [ -z $line ]; then
 			continue
 		fi
 		#echo $line
 		if [ $line == ">>>" ]; then
 			if [ $i -eq 0 ]; then
 				
 				if [ $flag -eq 0 ]; then
 					echo "<tr class=\"alt\" ><td rowspan=\"$row_106_sina\">新浪 </td>">>$FILENAME
 					flag=1
 				else
 					echo "<tr><td rowspan=\"$row_106_sina\">新浪 </td>">>$FILENAME
 					flag=0
 				fi

 			else
 				if [ $flag -eq 0 ]; then
 					echo "</tr><tr class=\"alt\" >">>$FILENAME
 					flag=1
 				else
 					echo "</tr><tr>">>$FILENAME
 					flag=0
 				fi

 			fi
 			continue
 		fi

 		data=`echo $line | awk -F":" '{print $2}'`
 		echo "<td>$data</td>">>$FILENAME
    	
 		i=`expr $i + 1`
 	done
   	echo "</tr>">>$FILENAME

   	flag=0
	#dolphin engine cn 1.0.5 
	cn_106_baidu="web_cache_cn1.0.6baidu"
	cn_106_sina="web_cache_cn1.0.6sina"
    row_106_baidu=`cat $cn_106_baidu | grep ">>>" | wc -l`
    row_106_sina=`cat $cn_106_sina | grep ">>>" | wc -l`
    rows=`expr $row_106_baidu + $row_106_sina`
    echo "row_106_baidu:$row_106_baidu;row_106_sina: $row_106_sina"
 	i=0
 	cat $cn_106_baidu | while read line
 	do
 		if [ -z $line ]; then
 			continue
 		fi
 		#echo $line
 		if [ $line == ">>>" ]; then
 			if [ $i -eq 0 ]; then
 				echo "<tr><td rowspan=\"$rows\" style=\"border-bottom: 1px solid #E1EEF4;\">DolphinEngine CN 1.0.6 </td>">>$FILENAME
 				echo "<td rowspan=\"$row_106_baidu\">百度</td>">>$FILENAME
 			else
 				if [ $flag -eq 0 ]; then
 					echo "</tr><tr class=\"alt\" >">>$FILENAME
 					flag=1
 				else
 					echo "</tr><tr>">>$FILENAME
 					flag=0
 				fi

 			fi
 			continue
 		fi

 		data=`echo $line | awk -F":" '{print $2}'`
 		echo "<td>$data</td>">>$FILENAME
    	
 		i=`expr $i + 1`
 	done
   	echo "</tr>">>$FILENAME

    i=0
 	cat $cn_106_sina | while read line
 	do
 		if [ -z $line ]; then
 			continue
 		fi
 		#echo $line
 		if [ $line == ">>>" ]; then
 			if [ $i -eq 0 ]; then
 				if [ $flag -eq 0 ]; then
 					echo "<tr class=\"alt\" ><td rowspan=\"$row_106_sina\">新浪 </td>">>$FILENAME
 					flag=1
 				else
 					echo "<tr><td rowspan=\"$row_106_sina\">新浪 </td>">>$FILENAME
 					flag=0
 				fi

 			else
 				if [ $flag -eq 0 ]; then
 					echo "</tr><tr class=\"alt\" >">>$FILENAME
 					flag=1
 				else
 					echo "</tr><tr>">>$FILENAME
 					flag=0
 				fi

 			fi
 			continue
 		fi

 		data=`echo $line | awk -F":" '{print $2}'`
 		echo "<td>$data</td>">>$FILENAME
    	
 		i=`expr $i + 1`
 	done
   	echo "</tr>">>$FILENAME

	#dolphin engine en 1.0.5 
	en_105_baidu="web_cache_en1.0.5baidu"
	en_105_sina="web_cache_en1.0.5sina"
    row_105_baidu=`cat $en_105_baidu | grep ">>>" | wc -l`
    row_105_sina=`cat $en_105_sina | grep ">>>" | wc -l`
    rows=`expr $row_105_baidu + $row_105_sina`
    echo "row_105_baidu:$row_105_baidu;row_105_sina: $row_105_sina"
 	i=0
 	cat $en_105_baidu | while read line
 	do
 		#echo $line
 		if [ $line == ">>>" ]; then
 			if [ $i -eq 0 ]; then
 				echo "<tr ><td rowspan=\"$rows\" style=\"border-bottom: 1px solid #E1EEF4;\">DolphinEngine EN 1.0.5 </td>">>$FILENAME
 				echo "<td rowspan=\"$row_105_baidu\">百度</td>">>$FILENAME
 			else
 				if [ $flag -eq 0 ]; then
 					echo "</tr><tr class=\"alt\" >">>$FILENAME
 					flag=1
 				else
 					echo "</tr><tr>">>$FILENAME
 					flag=0
 				fi
 			fi
 			continue
 		fi

 		data=`echo $line | awk -F":" '{print $2}'`
 		echo "<td>$data</td>">>$FILENAME
    	
 		i=`expr $i + 1`
 	done
   	echo "</tr>">>$FILENAME

    i=0
 	cat $en_105_sina | while read line
 	do
 		#echo $line
 		if [ $line == ">>>" ]; then
 			if [ $i -eq 0 ]; then

 				if [ $flag -eq 0 ]; then
 					echo "<tr class=\"alt\" ><td rowspan=\"$row_105_sina\">新浪 </td>">>$FILENAME
 					flag=1
 				else
 					echo "<tr><td rowspan=\"$row_105_sina\">新浪 </td>">>$FILENAME
 					flag=0
 				fi

 			else
 				if [ $flag -eq 0 ]; then
 					echo "</tr><tr class=\"alt\" >">>$FILENAME
 					flag=1
 				else
 					echo "</tr><tr>">>$FILENAME
 					flag=0
 				fi

 			fi
 			continue
 		fi

 		data=`echo $line | awk -F":" '{print $2}'`
 		echo "<td>$data</td>">>$FILENAME
    	
 		i=`expr $i + 1`
 	done
   	echo "</tr>">>$FILENAME

   	flag=0
	#dolphin engine cn 1.0.5 
	cn_105_baidu="web_cache_cn1.0.5baidu"
	cn_105_sina="web_cache_cn1.0.5sina"
    row_105_baidu=`cat $cn_105_baidu | grep ">>>" | wc -l`
    row_105_sina=`cat $cn_105_sina | grep ">>>" | wc -l`
    rows=`expr $row_105_baidu + $row_105_sina`
    echo "row_105_baidu:$row_105_baidu;row_105_sina: $row_105_sina"
 	i=0
 	cat $cn_105_baidu | while read line
 	do
 		#echo $line
 		if [ $line == ">>>" ]; then
 			if [ $i -eq 0 ]; then
 				echo "<tr><td rowspan=\"$rows\" style=\"border-bottom: 1px solid #E1EEF4;\">DolphinEngine CN 1.0.5 </td>">>$FILENAME
 				echo "<td rowspan=\"$row_105_baidu\">百度</td>">>$FILENAME
 			else
 				if [ $flag -eq 0 ]; then
 					echo "</tr><tr class=\"alt\" >">>$FILENAME
 					flag=1
 				else
 					echo "</tr><tr>">>$FILENAME
 					flag=0
 				fi

 			fi
 			continue
 		fi

 		data=`echo $line | awk -F":" '{print $2}'`
 		echo "<td>$data</td>">>$FILENAME
    	
 		i=`expr $i + 1`
 	done
   	echo "</tr>">>$FILENAME

    i=0
 	cat $cn_105_sina | while read line
 	do
 		#echo $line
 		if [ $line == ">>>" ]; then
 			if [ $i -eq 0 ]; then
 				if [ $flag -eq 0 ]; then
 					echo "<tr class=\"alt\" ><td rowspan=\"$row_105_sina\">新浪 </td>">>$FILENAME
 					flag=1
 				else
 					echo "<tr><td rowspan=\"$row_105_sina\">新浪 </td>">>$FILENAME
 					flag=0
 				fi

 			else
 				if [ $flag -eq 0 ]; then
 					echo "</tr><tr class=\"alt\" >">>$FILENAME
 					flag=1
 				else
 					echo "</tr><tr>">>$FILENAME
 					flag=0
 				fi

 			fi
 			continue
 		fi

 		data=`echo $line | awk -F":" '{print $2}'`
 		echo "<td>$data</td>">>$FILENAME
    	
 		i=`expr $i + 1`
 	done
   	echo "</tr>">>$FILENAME

				
	#echo "<tr class=\"alt\"><td></td><td></td><td></td><td></td><td>1.03</td>">>$FILENAME	
	#echo "<td>1.04</td><td>0ms</td><td>0ms</td><td></td></tr>">>$FILENAME
	#create_report_engine_head

	#echo "<tr><td>启动速度</td><td>启动速度</td>">>$FILENAME
	#echo "<td></td><td></td><td>0ms</td><td>0ms</td><td>0ms</td>">>$FILENAME
	#echo "<td>0ms</td><td>从点击应用到用户可以实际操作的时间（统计平均值）</td></tr>">>$FILENAME
	#create_start_speed_structure

	#echo "<tr class=\"alt\"><td>网页打开速度</td><td>网页打开速度</td><td></td>">>$FILENAME
	#echo "<td></td><td>0ms</td><td>0ms</td><td>0ms</td><td>0ms</td><td>从打开网页到加载完成的时间（统计平均值）</td></tr>">>$FILENAME
	#create_web_open_speed

	#echo "<tr><td rowspan=\"3\">UI响应度</td><td>三屏滑动流畅度</td><td></td><td></td><td>0FPS</td>">>$FILENAME
	#echo "<td>0FPS</td><td>0FPS</td><td>0FPS</td><td>用户进行滑屏操作（调出Bookmark和Addon栏）时的帧率（统计平均值）</td>	</tr>">>$FILENAME
	#create_three_screen_scroll_structure

	#echo "<tr class="alt"><td>Tab动画流畅度</td><td></td><td></td><td>0FPS</td><td>0FPS</td>">>$FILENAME
	#echo "<td>0FPS</td><td>0FPS</td><td>用户新建/关闭Tab时的帧率（分别统计统计平均值）</td></tr>">>$FILENAME
	#create_tab_animation_structure

	#echo "<tr><td>地址栏动画流畅度</td><td></td><td></td><td>0FPS</td><td>0FPS</td>">>$FILENAME
	#echo "<td>0FPS</td><td>0FPS</td><td>用户打开地址栏时的帧率（统计平均值）</td></tr>">>$FILENAME
	#create_address_animation_structure

	#echo "<tr class=\"alt\"><td rowspan="2">兼容性及稳定性（主程序）</td><td>Crash比例</td>">>$FILENAME
	#echo "<td></td><td></td><td>0%</td><td>0%</td><td>0%</td>	<td>0%</td>">>$FILENAME
	#echo "<td>Crash用户与Dolphin Engine总用户的比例（主程序）</td></tr>">>$FILENAME
	#create_crash_rate_structure

	#echo "<tr><td>P0/P1 bug比例</td>	<td></td><td></td><td>0%</td>	<td>0%</td>">>$FILENAME
	#echo "<td>0%</td><td>0%</td><td>从禅道系统中取得P0/P1 bug的比例（主程序）</td></tr>">>$FILENAME
	#create_cash_p0_p1_rate_structure

	#echo "<tr class=\"alt\"><td>WebGame渲染速度</td><td>游戏帧率</td><td></td><td></td>">>$FILENAME
	#echo "<td>0FPS</td><td>0FPS</td><td>0FPS</td><td>0FPS</td><td>选取5~10款杀手级游戏，计算游戏中的帧率（统计平均值）</td></tr>">>$FILENAME
	#create_webgame_structure

	echo "<tr><td colspan="14" height=\"20px\"></td></tr>">>$FILENAME

	echo "</tbody>">>$FILENAME
	echo "</table>">>$FILENAME
}

show_html_body_end(){
	echo "</div></body></html>">>$FILENAME
}

#clear data
>$FILENAME
#show html head
show_html_head_begin
show_css_style
show_html_head_end

#show html body
show_html_body_begin
show_html_body
show_html_body_end

chromium-browser $FILENAME