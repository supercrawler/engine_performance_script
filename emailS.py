#!/usr/bin/python
# script for Dolphin daily build
# Author: Jitang Hu

import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import time


#SMTP_HOST = "127.0.0.1"
SMTP_HOST = "mail.bainainfo.com"
#SMTP_HOST = "exch04.baina.com"
#SMTP_PORT = 25
#SENDER = 'dolphin_build@codeserver.baina.com'
SENDER = 'blwang@bainainfo.com'
#MAINTAINER_MAIL = 'yhu@bainainfo.com'


class EmailSender:
	def __init__(self, to, cc=[], subject=''):
		#always append maintainer
		if isinstance(to, str):
			to = [to]
		if isinstance(cc, str):
			cc = [cc]

		if not isinstance(to, list) or not isinstance(cc, list):
			raise TypeError("to or cc must be str or list")

		cc.append(SENDER)
		self.to = to
		self.cc = cc if cc is not None else []
		self.subject = subject

	def send(self, content, attachmentName=None, attachment=None):
		msg = MIMEMultipart()
		to = ';'.join(self.to)
		cc = ';'.join(self.cc)
		msg['From'] = SENDER
		msg['To'] = to
		msg['Cc'] = cc
		msg['Subject'] = self.subject

		mailContent = MIMEText(content, 'html', 'utf-8')
		msg.attach(mailContent)

		if attachment is not None:
			attachmentName = attachmentName if attachmentName is not None else "attachment.txt"
			mailAttachment = MIMEText(attachment, 'base64', 'utf-8')
			mailAttachment['Content-Type'] = 'application/octet-stream'
			mailAttachment['Content-Disposition'] = 'attachment; filename=' + attachmentName
			msg.attach(mailAttachment)

		try:
			smtp = smtplib.SMTP(SMTP_HOST, port=25)
#			smtp.set_debuglevel(1)
			msgContent = msg.as_string()
			smtp.sendmail(SENDER, self.to + self.cc, msgContent)
			smtp.quit()
		except:
			pass

def sendEmailTest():
	from mailer import Mailer
	from mailer import Message
	message = Message(From='xlu@bainainfo.com', To='xlu@bainainfo.com')
	message.Subject = 'An HTML Email'
	message.Html = """<p>Hi!<br>
		How are you?<br>
		Here is the <a href="http://172.16.2.249/kpi-android-cn.html">link</a>you wanted.</p>"""
	sender = Mailer('mail.bainainfo.com')
	sender.send(message)

def testSendEmail():
	to = 'blwang@bainainfo.com'
	cc = ['mguo@bainainfo.com', 'qxiao@bainainfo.com']
	title = 'email title'
	emailSender = EmailSender(to, cc, title)

	content = 'mail for test, please ignore it'
	#attachmentName = "att.txt"
	#attachment = "123abc"
	emailSender.send(content)

if __name__ == '__main__':
	testSendEmail()
#	sendEmailTest()
