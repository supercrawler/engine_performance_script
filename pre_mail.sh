 #!/bin/sh

echo "Hello world"
echo $#
echo $0
echo $1
if [ $# -ne 1 ]; then
    echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    echo "Usage ./pre_mail.sh date(2012-09-26)"
    echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    exit 1
fi

cur_date=$1
echo $cur_date

cd /home/bolewang/workspace/DolphinEngine
pwd
echo "=====>Download crash data ..."
echo "--->crash fenzi"
curl -o "crash_daily/crash" http://10.2.1.207/cs/dailyreport_data.php
echo "---->crash fenmu"
./beijing_oneline_v107.py $cur_date

echo "=====>Download finish....."
cd crash_daily/
pwd
echo "----->update database"
./v107.py

echo "merge privious data."
./remove.sh
./merge.sh
echo "------------->merge previous data finish....."

sleep 2s 
echo "Begin get KPI Info----------------------------------"
cd /home/bolewang/workspace/Ringtone/src/ringtone
pwd
echo "===>begin start server 127.0.0.1"
python manage.py runserver &
sleep 5s
echo "===>crawl data..."
cd /home/bolewang/workspace/DolphinEngine
pwd
curl -o "crash_daily/report_en.html" http://127.0.0.1:8000/report_en_kpi.do
#curl -o "crash_daily/report_cn.html" http://127.0.0.1:8000/report_cn_kpi.do
echo "End get KPI Info----------------------------------"
echo "===>ready for send mail..."
exit 0

#cur_date=`echo "$(date +%Y-%m-%d)"`
content=`cat crash_daily/report.html`


mymail() {

#cc="blwang@bainainfo.com;QXiao@bainainfo.com"
subject="[DolphinEngineEN KPI] $cur_date ==>Test for Auto send mail script"
#msgdate=`date +"%a, %e %Y %T %z"`  # Leave alone


daemail=$(cat <<!
To:$1
Subject: $subject
Mime-Version: 1.0
Content-Type: text/html; charset=utf-8
!)


begin="""
<p style="font-size:14px">
Hi All:<br/>
<br/>
1. KPI统计如下：<p/>"""

end="""
<br/>
<br/>

<b style="font-size:14px">备注：</b>
<p style="font-size:14px">
    1. 网页打开速度： 统计10组数据，取其平均值。新浪==> www.sina.com.cn.桌面版; 新浪新闻频道=>news.sina.com.cn (已修改为，手机通过USB共享PC网络方式统计)  <br/>
    2. 今日Crash比例，以服务端获取的数据日期为准，不易发daily kpi 时间为依据。<br/>
    3. 游戏帧率： X-Type游戏，以游戏界面开始显示，可以发子弹后进行测试，抓取1000次FPS数据，求平均值。<br/>
<br/>  
有什么疑问，请直接回复邮件。
<br/>
<br/>
</p>
"""
echo "$daemail" > msg.tmp
echo $begin>>msg.tmp
cat crash_daily/report.html >>msg.tmp
echo  $end>> msg.tmp

cat msg.tmp |sendmail -t
rm -f msg.tmp

echo "send $1 finished."
}

cat body | while read line;
do
    echo "----send to $line"
    mymail $line
done
