#!/usr/bin/python
# -*- coding: utf-8 -*-
# Author: Jitang Hu
# Modify by bole wang @date 2012-09-25

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import time
import shlex
import subprocess

from datetime import timedelta, datetime

SMTP_HOST = "mail.bainainfo.com"
SMTP_PORT = 25
#SENDER = 'dolphin_build@codeserver.baina.com'

class EmailSender:
	def __init__(self, fromer, to, cc=[], subject=''):
		if isinstance(to, str):
			to = [to]
		if isinstance(cc, str):
			cc = [cc]

		if not isinstance(to, list) or not isinstance(cc, list):
			raise TypeError("to or cc must be str or list")

		self.sender = fromer
		cc.append(self.sender)
		self.to = to
		self.cc = cc if cc is not None else []
		self.subject = subject

	def send(self, content, attachmentName=None, attachment=None):
		msg = MIMEMultipart()
		to = ';'.join(self.to)
		cc = ';'.join(self.cc)
		msg['From'] = self.sender
		msg['To'] = to
		msg['Cc'] = cc
		msg['Subject'] = self.subject

		print self.subject
		mailContent = MIMEText(content, 'html', 'utf-8')
		msg.attach(mailContent)

		if attachment is not None:
			attachmentName = attachmentName if attachmentName is not None else "attachment.txt"
			mailAttachment = MIMEText(attachment, 'base64', 'utf-8')
			mailAttachment['Content-Type'] = 'application/octet-stream'
			mailAttachment['Content-Disposition'] = 'attachment; filename=' + attachmentName
			msg.attach(mailAttachment)

		try:
			smtp = smtplib.SMTP(SMTP_HOST, SMTP_PORT)
			smtp.set_debuglevel(1)
			msgContent = msg.as_string()
			print msgContent
			smtp.sendmail(self.sender, self.to + self.cc, msgContent)
			smtp.quit()
		except:
			pass


def popen(command, params):
	return subprocess.check_call(command + " " +params, shell=True)

def read_file_by_shell(args):
	if type(args) != type([]):
		args = shlex.split(args)
	proc = subprocess.Popen(args, stdout = subprocess.PIPE, stderr = subprocess.PIPE, shell=True)
	(output, errput) = proc.communicate()
	proc.wait()
	return output + errput


def SendEmail():
	mydate = datetime.fromtimestamp(time.time());
	cur_date = mydate.strftime('%Y-%m-%d')
	mypredate = mydate + timedelta(days=-9)
	pre_date = mypredate.strftime('%Y-%m-%d')
	print cur_date
	print pre_date

	result = popen('/home/bolewang/workspace/DolphinEngine/pre_mail.sh', pre_date)
	print result
	if result != 0:
		print "pre_mail error ..........."
		return 
	print "pre_mail  success ..."

	
	f = file('crash_daily/report_en.html')
	content = f.read();
	f.close() 

	#print content

	begin="""
<p style="font-size:14px">
<b>Test, please ignore it </b><br/>
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
	msg = "%s %s %s " %(begin, content, end)
	sender = 'blwang@bainainfo.com'
	to = 'jthu@bainainfo.com'
	cc = ['TfLiu@bainainfo.com', 'ntang@bainainfo.com', 'jduan@bainainfo.com', 'yuwang@bainainfo.com', 
    'DHu@bainainfo.com', 'xdu@bainainfo.com', 'lytang@bainainfo.com', 'wzheng@bainainfo.com', 'lchen@bainainfo.com',
    'chzhong@bainainfo.com', 'hlli@bainainfo.com', 'yhu@bainainfo.com']

	subject = '[DolphinEngineEN KPI] %s' %pre_date
	emailSender = EmailSender(sender, to, cc, subject)
	emailSender.send(msg)

if __name__ == '__main__':
	SendEmail()
