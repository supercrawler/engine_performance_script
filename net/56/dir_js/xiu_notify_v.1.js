
var f2e_xiuNotify={cookiesName:"56f2e_xiuNotify",appearInterval　:36,init:function(){f2e_xiuNotify.cLoader("http://s1.56img.com/style/xiu/v1/css/platform/xiu_outside.css");f2e_xiuNotify.checkInnerPage();},addEvent:function(obj,type,fn){if(obj.attachEvent){obj['e'+type+fn]=fn;obj[type+fn]=function(){obj['e'+type+fn](window.event);}
obj.attachEvent('on'+type,obj[type+fn]);}else{obj.addEventListener(type,fn,false);}},checkInnerPage:function(){var isCookie=f2e_xiuNotify.cookies.get(f2e_xiuNotify.cookiesName)
if(!isCookie){f2e_xiuNotify.innerPage();}},closeMark:function(){f2e_xiuNotify.cookies.set(f2e_xiuNotify.cookiesName,"handle",f2e_xiuNotify.appearInterval)},innerPage:function(){var notifyHtml=['','<div class="xiu_keeper">','<div id="keeperArea" class="keeper_area">','<em class="xk01">1000名主播，在线与你视频互动、点歌、聊天！</em><a href="http://acs.56.com/redirect/click/2727/http://xiu.56.com/jump.html?p=20118984" class="xk_btn" target="_blank">56美女秀场</a><a  href="javascript:f2e_xiuNotify.closeMark();" onclick="this.parentNode.parentNode.style.display=\'none\'"  class="xk_link">不再提示</a><a href="javascript:void(0)" class="xk_close" onclick="this.parentNode.parentNode.style.display=\'none\'">X</a>','</div>','</div>',''].join("");var pBody=document.getElementsByTagName("body")[0];var pBox=document.createElement("div");var pTarget=document.getElementById("page");pBox.setAttribute("id","keeperAreaBox");pBody.insertBefore(pBox,pTarget);pBox.innerHTML=notifyHtml;},cLoader:function(url,callback){var urls=url.replace(/[,]\s*$/ig,"").split(",");var links=[];for(var i=0;i<urls.length;i++){links[i]=document.createElement("link");links[i].rel="stylesheet";links[i].href=urls[i];document.getElementsByTagName("head")[0].appendChild(links[i]);}
callback instanceof Function?callback():"";}}
f2e_xiuNotify.cookies={get:function(name){var arr=document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));if(arr!=null)return unescape(arr[2]);return null;},set:function(name,value,delayHours){if(!delayHours){delayHours=24;}
var exp=new Date();exp.setTime(exp.getTime()+delayHours*60*60*1000);document.cookie=name+"="+escape(value)+";expires="+exp.toGMTString();},del:function(name){var exp=new Date();exp.setTime(exp.getTime()-1);var cval=f2e_xiuNotify.cookies.get(name);if(cval!=null)document.cookie=name+"="+cval+";expires="+exp.toGMTString();}}
f2e_xiuNotify.addEvent(window,"load",f2e_xiuNotify.init);