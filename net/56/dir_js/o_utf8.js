
try{document.domain="56.com"}catch(e){}
if(typeof ready=="undefined"){var ready=function(){};(function(){if(document.documentElement.doScroll){(function(){try{document.documentElement.doScroll("left");}catch(e){setTimeout(arguments.callee,0);return;}
ready();})();}else{document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);ready();},false);}})();}
var fid=0;var clickTimes=0;var ShowFlv_UO={selected:1,selectVInfoTab:function(){if(this.selected==1){return false;}
_.e("leaveWorld_con").style.display="none";_.e("leaveWorld_con").innerHTML="";_.e("tab_1_2").className="";_.e("videoInfo_con").style.display="";_.e("tab_1_1").className="action";ShowFlv_UO.switchTab(1);},selectVCmtTab:function(force){force=force||0;if(this.selected==2&&!force){return false;}
_.e("videoInfo_con").style.display="none";_.e("leaveWorld_con").style.display="";_.e("tab_1_1").className="";_.e("tab_1_2").className="action";var sHTML=_.e("LwordContent").innerHTML;if(sHTML.indexOf("[%=")==-1){if(sHTML.length<500){noComment();}else{sHTML=sHTML.replace("LwordForm_bottom","LwordForm_right").replace(/auth_img_span_id_bottom/g,"auth_img_span_id_bottom_right").replace(/<div class="SkyKuan tright">(.)*<\/div>/ig,"").replace(/javascript:gReF.rev\(\d+\);/g,"#CommentPlace").replace(/javascript:gReF.rev\(((.|\n)*?)\);/gm,"javascript:gReF.quote($1);_.gowin('#CommentPlace')")
+'<p class="viewAll"><span><a href="#CommentPlace"><b>查看所有评论</b></a></span><span><a href="#CommentPlace"><b>我要评论</b></a></span></p>';_.e("leaveWorld_con").innerHTML=sHTML;}}else{noComment();}
ShowFlv_UO.switchTab(2);function noComment(){sHTML='<p class="viewAll"><span><a href="#CommentPlace"><b>暂无评论</b></a></span><span><a href="#CommentPlace"><b>我要抢沙发</b></a></span></p>';_.e("leaveWorld_con").innerHTML=sHTML;}},switchTab:function(n){ShowFlv_UO.selected=n;},dingStatus:0,userDing:function(user,type,id,pct){if(this.dingStatus){return false;}
user=user||"";type=type||"up";id=id||0;pct=pct||0;var rootDing="http://stat.56.com/user_action/action4.php?u=";var url="";if(!user){return false;}else if(id){url=rootDing+user+"&type="+type+"&id="+id;}else{url=rootDing+user+"&type="+type;}
url+=pct?"&p="+pct:"";this.dingStatus=1;if(this.dingStatus==1){var ding_count=_.e('dingCount').innerHTML;var shtml='';shtml+='<em id="eup">您已点过，谢谢参与！</em>';shtml+='<em id="edown">您已点过，谢谢参与！</em>';shtml+='<a href="javascript:;" onmouseover="document.getElementById(\'eup\').style.visibility=\'visible\'" onmouseout="document.getElementById(\'eup\').style.visibility=\'hidden\'" class="dig_up"><span id="dingCount">'
+ding_count+'</span></a>';shtml+='<a href="javascript:;" onmouseover="document.getElementById(\'edown\').style.visibility=\'visible\'" onmouseout="document.getElementById(\'edown\').style.visibility=\'hidden\'" class="dig_down"><span id="downCount">'
+down_count+'</span></a>';_.e('digg').className='digg voted';_.e('digg').innerHTML=shtml;}
_.e("add_favorite").src=url;try{var action=function(id,t){var id=id,t=t;var iframe=document.createElement("iframe");var src='http://app.56.com/cooperate/index.php?action=RenRen&do=Feed&flvid='+id+'id&type='+t;iframe.setAttribute("width",0);iframe.setAttribute("height",0);iframe.setAttribute("name","action");iframe.setAttribute("src",src);document.getElementsByTagName('body')[0].appendChild(iframe);};if(usr.user_id()){if(_.getCookie("renren_setting")){eval("var rs = "+_.getCookie("renren_setting")+";");if(type=="up"&&rs&&rs.ding==1){action(oFlv.o.EnId,1);}else if(type=="down"&&rs&&rs.cai==1){action(oFlv.o.EnId,2);}}}}catch(e){if(usr.user_id()=='rebill'){alert('renren顶接口异常');}}},userDing2:function(user,type,id,pct){if(this.dingStatus){return false;}
user=user||"";type=type||"up";id=id||0;pct=pct||0;var rootDing="http://stat.56.com/user_action/action4.php?u=";var url="";if(!user){return false;}else if(id){url=rootDing+user+"&type="+type+"&id="+id;}else{url=rootDing+user+"&type="+type;}
url+=pct?"&p="+pct:"";this.dingStatus=1;if(this.dingStatus==1){var ding_count=_.e('dingCount').innerHTML;if(_.e('digg')){_.e('digg').className="pa_digg_liked";var aobj=_.e('digg').childNodes;for(var i=0;i<aobj.length;i++){if(aobj[i].tagName!="A")continue;aobj[i].title="您已点过，谢谢参与！";}}
synShowTip.autoSelect(type);}
_.e("add_favorite").src=url;setStat("u_dc_"+type,3000);try{if(typeof weibo!="undefined"){weibo.sync(type,oFlv.o.EnId);}}catch(e){}
try{var action=function(id,t){var id=id,t=t;var iframe=document.createElement("iframe");var src='http://app.56.com/cooperate/index.php?action=RenRen&do=Feed&flvid='+id+'id&type='+t;iframe.setAttribute("width",0);iframe.setAttribute("height",0);iframe.setAttribute("name","action");iframe.setAttribute("src",src);document.getElementsByTagName('body')[0].appendChild(iframe);};if(usr.user_id()){if(_.getCookie("renren_setting")){eval("var rs = "+_.getCookie("renren_setting")+";");if(type=="up"&&rs&&rs.ding==1){action(oFlv.o.EnId,1);}else if(type=="down"&&rs&&rs.cai==1){action(oFlv.o.EnId,2);}}}}catch(e){if(usr.user_id()=='vincentwu2010'){alert('renren顶接口异常');}}},userDing3:function(user,type,id,pct){if(this.dingStatus){return false;}
user=user||"";type=type||"up";id=id||0;pct=pct||0;var rootDing="http://stat.56.com/user_action/action4.php?u=";var url="";if(!user){return false;}else if(id){url=rootDing+user+"&type="+type+"&id="+id;}else{url=rootDing+user+"&type="+type;}
url+=pct?"&p="+pct:"";this.dingStatus=1;if(this.dingStatus==1){synShowTip.autoSelect(type);}
_.e("add_favorite").src=url;setStat("u_dc_"+type,3000);try{if(typeof weibo!="undefined"){weibo.sync(type,oFlv.o.EnId);}}catch(e){}
try{var action=function(id,t){var id=id,t=t;var iframe=document.createElement("iframe");var src='http://app.56.com/cooperate/index.php?action=RenRen&do=Feed&flvid='+id+'id&type='+t;iframe.setAttribute("width",0);iframe.setAttribute("height",0);iframe.setAttribute("name","action");iframe.setAttribute("src",src);document.getElementsByTagName('body')[0].appendChild(iframe);};if(usr.user_id()){if(_.getCookie("renren_setting")){eval("var rs = "+_.getCookie("renren_setting")+";");if(type=="up"&&rs&&rs.ding==1){action(oFlv.o.EnId,1);}else if(type=="down"&&rs&&rs.cai==1){action(oFlv.o.EnId,2);}}}}catch(e){if(usr.user_id()=='vincentwu2010'){alert('renren顶接口异常');}}},setRss:function(){if(!usr.user_id()){show_login();return false;}
_.e("add_favorite").src="http://www.56.com/w20/act.php?a=add_subscription&user_id="+oFlv.o.user_id;},showUserSubButton:function(targetId){tmpStr="<ul>";tmpStr+='<li class="attention atten_update" id="movie_attention" onclick="ShowFlv_UO.addUserSub();"><a href="javascript:void(0)"><s></s><em>订阅节目</em><em class="em2">已订阅</em></a></li>';tmpStr+='<li class="notice" id="movie_notice"><span>轻轻一点，随时获知节目更新！</span></li>';tmpStr+='</ul>';if(_.e(targetId)){_.e(targetId).innerHTML=tmpStr;}
if(_.e("movie_notice")){setTimeout(function(){_.e("movie_notice").style.display="none";},10000);}},addUserSub:function(){if(!usr.user_id()){show_login();return false;}
if(_.e("movie_attention").className=="attention atten_update attentioned"){return false;}
setStat("addMovieSub");_.e("add_favorite").src="http://w.56.com/my2/api/subMovie.php?mid="+((typeof(oFlv)!="undefined")?oFlv.o.opera_id:_operaid)+"&user_id="+usr.user_id();_.e("movie_attention").className="attention atten_update attentioned";if(_.e("movie_notice")){_.e("movie_notice").innerHTML="<span>更新会通过系统信息通知您！</span>";_.e("movie_notice").style.display="block";setTimeout(function(){_.e("movie_notice").style.display="none";},10000);}},setRssNoAlert:function(){if(!usr.user_id()){show_login();return false;}
if(_.e("rss_attention").className!="attention attentioned"){_.e("rss_attention").className="attention attentioned";_.e("add_favorite").src="http://www.56.com/w20/act.php?a=add_subscription&re=no&user_id="+oFlv.o.user_id;}},favoriteObj:{},addFav:function(id,user_id,pct){var isAlbum=false;if(clickTimes>0){}
if(id&&user_id&&pct){this.favoriteObj={"EnId":id,"user_id":user_id,"pct":pct}}
if(typeof(oFlv)!="undefined"&&typeof(oFlv.o.EnId)!="undefined"&&typeof(oFlv.o.user_id)!="undefined"&&!pct){var o=oFlv.o;}else{isAlbum=true;var o=this.favoriteObj;}
var user_id=usr.gLoginUser()||"";if(user_id.length&&user_id.indexOf("guest")!=0){var cb="";cb="&callback=ShowFlv_UO.addFavCallBack";if(typeof(weibo)!="undefined"){weibo.sync('fav',o.EnId);}
if(isAlbum){var favParams="/act.php?a=add_favorite&id="}else{var favParams="/act.php?a=add_favorite&sc=tsc&id="}
_.e("add_favorite").src="http://fav.56.com/index.php?a=add_favorite&id="+o.EnId+"&user_id="+o.user_id+"&pct="+o.pct+cb;clickTimes++;}else{show_login();}
try{var action=function(id){var id=id,type=3;if(_.getCookie("renren_setting")){eval("var rs = "+_.getCookie("renren_setting")+";");if(rs&&rs.fav==1&&usr.user_id()){var iframe=document.createElement("iframe");var src='http://app.56.com/cooperate/index.php?action=RenRen&do=Feed&flvid='+id+'id&type='+type;iframe.setAttribute("width",0);iframe.setAttribute("height",0);iframe.setAttribute("name","action");iframe.setAttribute("src",src);document.getElementsByTagName('body')[0].appendChild(iframe);}}};action(o.EnId);}catch(e){if(usr.user_id()=='melon_huang'){alert('renren收藏接口异常');}}
setStat("addfav");},addFavCallBack:function(data){var dialogVideoFav=true;if(dialogVideoFav=="undefined"||dialogVideoFav==null){return;}else{if(typeof data!="undefined"){if(document.getElementById('addFav')){document.getElementById('addFav').className='pa_digg_faved';document.getElementById('addFav').innerHTML='<span><s></s>已藏</span>';}
if(data["code"]==1){try{if(typeof weibo!="undefined"){weibo.sync('fav',oFlv.o.EnId);}}catch(e){}
synShowTip.addFav();}else{synShowTip.showAddFavMsg("您已经收藏过该视频!");return false;}}}},setFid:function(){alert('添加成功，你可以在管理中心查看。');return;},setFid2:function(){_.e('addFav').className='pa_digg_faved';_.e('addFav').innerHTML='<a onclick="return false;" href="javascript:void(0)" title="已藏">已藏</a>';return;},addTag:function(objname){var favTag=document.getElementById('favTag');if(!favTag.value){alert("请填写标签再提交");}else{var objname=objname||'addTag';var obj=document.getElementById(objname);if(typeof(oFlv)!="undefined"&&typeof(oFlv.o.EnId)!="undefined"){var o=oFlv.o;}else{var o=this.favoriteObj;}
obj.action='http://www.56.com/u'
+(Math.ceil((Math.random())*88)+11)
+'/act.php?a=add_favorite&id='+o.EnId+'&pct='+o.pct
+'&do=add_tag&fid='+fid;obj.submit();fAddTag.hidden();}}};function jLoader(source,autoRemove,id,charset){id=id||"";charset=charset||"gb2312";autoRemove=autoRemove||false;var b=document.getElementsByTagName("head")[0];var c=document.createElement("script");c.type="text/javascript";c.charset=charset;if(id){c.id=id;}
c.src=source;var remove=function(){c.onload=null;var h=c.parentNode;h.removeChild(c);delete c;};var e=function(h){var j=(h?h:window.event).target?(h?h:window.event).target:(h?h:window.event).srcElement;if(j.readyState=="loaded"||j.readyState=="complete"){j.onreadystatechange=null;if(autoRemove){remove();}}};if(navigator.product=="Gecko"&&autoRemove){c.onload=remove;}else{c.onreadystatechange=e;}
b.appendChild(c);}
var oJson={};var fJson={"varName":{},"data":{},"file":{},"str":{},"jsonId":{},"set":function(element,vars){for(key in vars){this[key][element]=vars[key];}},"get":function(url,element){element=element||'element';this.set(element,{"data":"n"});this.main(url,element);},"main":function(url,element,un){this.__url__=url;this.__element__=element;this.__un__=un;eval("oJson['"+element+"'] = this.include()");},"getSrc":function(element){var rs='';if(this.varName[element]){rs+='&gJsonVarName='+encodeURI(this.varName[element]);}
if(this.data[element]){if(this['data'][element]=='n'||this['data'][element]=='-1'||this['data'][element]=='no'){rs+='&gJsonData=n';}}
if(this['str'][element]){rs+='&gJsonDoStr='+encodeURI(this['str'][element]);}
if(this['file'][element]){rs+='&gJsonDoFile='+encodeURI(this['file'][element]);}
return rs;},"include":function(url,element,un,charset){charset=charset||this.charset||'gb2312';url=url||this.__url__;element=element||this.__element__||'script';un=un||this.__un__||false;var jsonId=this.__getJsonId(element),a;if(navigator.appVersion.indexOf("MSIE")==-1||element=='script'){a=document.createElement('script');}else{a=document.getElementById("script_"+element
+((jsonId>1)?'_'+jsonId:''));if(!a){a=document.createElement('script');a.setAttribute("id","script_"+element
+((jsonId>1)?'_'+jsonId:''));}}
var b=document.getElementsByTagName('HEAD').item(0);a.un=un;a.data='';a.charset=charset;a.type="text/javascript";a.src=url+((url.indexOf('?')==-1)?'?':'&')+'gJsonId='
+jsonId+'&gJson='+element+fJson.getSrc(element);b.appendChild(a,null);return a;},"css":function(url){if(!url)
return;var a=document.createElement('link');var b=document.getElementsByTagName('HEAD').item(0);a.rel="stylesheet";a.type="text/css";a.href=url;b.appendChild(a,null);},"__getJsonId":function(element){if(this.jsonId[element]){var i=0;do{i++;if(!this.jsonId[element][i]){this.jsonId[element][i]=1;return i;}}while(1);}
this.jsonId[element]={};this.jsonId[element][1]=1;return 1;},"flush":function(element){document.getElementById(element).innerHTML=(oJson[element].un)?unescape(oJson[element].data):oJson[element].data;oJson[element]={};}};if(!this.JSON){this.JSON={};}
(function(){function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+
partial.join(',\n'+gap)+'\n'+
mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+
mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());var theref=document.referrer;var oTpl={"html":false,"main":function(element,jsonUrl,html){if(html)
this.html=html;var obj=document.getElementById(element);if(!obj){alert("指定的模版容器"+element+"不存在");return;}
var oJsonSet={"data":"n","str":"oTpl.tpl('"+element+"',oJson."+element+".data)"};fJson.set(element,oJsonSet);fJson.main(jsonUrl,element);},"tpl":function(element,jsonUrl,html){if(html)
this.html=html;var obj=document.getElementById(element);var templetHTML;if(!obj){alert("指定的模版容器不"+element+"存在");return;}
if(!obj.oldHTML){obj.oldHTML=this.html||obj.innerHTML;obj.oldHTML=obj.oldHTML.replace(/\[%/g,"<%").replace(/%\]/g,"%>").replace(/\{%/g,"<%").replace(/%\}/g,"%>").replace(/<!--%/g,"<%").replace(/%-->/g,"%>").replace(/\/\*%/g,"<%").replace(/%\*\//g,"%>");}
obj.innerHTML=this.doTpl(obj.oldHTML,jsonUrl,0).replace(/http:\/\/56com\.56\.com/g,"http://www.56.com/w11/space_index.phtml");obj.style.display="";},"doTpl":function(tpl,data,xLev){try{var sRepeat="<%begin_"+xLev+"[^>]*%>((.|\\n)+?)<%end_"+xLev
+"%>";var rKey_g=new RegExp("<%begin_"+xLev
+"\\s*key=\"([^\"]+)\"[^%]*%>","g");var rRepeat=new RegExp(sRepeat);var rRepeat_g=new RegExp(sRepeat,"g");var rVars=new RegExp("<%=(.+?)%>","g");var tDate;var aKey=tpl.match(rKey_g);if(aKey){var aRepeat=tpl.match(rRepeat_g);for(var key=0;key<aKey.length;key++){aKey[key]=aKey[key].replace(rKey_g,"$1");aRepeat[key]=aRepeat[key].replace(rRepeat,"$1");tDate=data[aKey[key]];var html='';for(var key2 in tDate){if(typeof tDate[key2]!="function"&&typeof tDate[key2]!="undefined")
html+=this.doTpl(aRepeat[key],tDate[key2],xLev+1);}
tpl=tpl.replace(rRepeat,html);}}
var aVars=tpl.match(rVars);if(aVars){for(key=0;key<aVars.length;key++){aVars[key]=aVars[key].replace(rVars,"$1");tDate=data[aVars[key]]?data[aVars[key]]:'';var rVars_=new RegExp("<%="+aVars[key]+"%>");tpl=tpl.replace(rVars_,tDate);}}
return tpl;}catch(e){if(usr.user_id()=='onesec'){alert(tpl);}}}};Array.prototype.indexOf=function(o){var l=this.length;for(var i=0;i<l;i++){if(this[i]==o){return i;}}
return-1;};Array.prototype.remove=function(n){this.splice(n,1);};Array.prototype.replace=function(n,vars){this.splice(n,1,vars);};jQuery_cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{expires:1,path:"\/"};var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toGMTString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()
+(options.expires*60*60*1000));}else{date=options.expires;}
expires='; expires='+date.toGMTString();}
var path=options.path?'; path='+options.path:'';var domain=options.domain?'; domain='+options.domain:'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue='';if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=_.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){try{cookieValue=decodeURIComponent(cookie.substring(name.length+1));}catch(e){cookieValue=unescape(cookie.substring(name.length+1));}
break;}}}
return cookieValue;}};var userAgent=navigator.userAgent.toLowerCase();var _={time:function(a,b){var s,d;if(b==1){d=new Date(a*1000);s=d.getYear()+"-";s+=(d.getMonth()+1)+"-";s+=d.getDate();}else{d=new Date(a*1000);s=d.getYear()+"-";s+=(d.getMonth()+1)+"-";s+=d.getDate()+" ";s+=d.getHours()+":";s+=d.getMinutes()+":";s+=d.getSeconds();};return s;},copyErr:false,rand:function(begin,end){if(typeof begin!='undefined'){end=end?end:2147483648;return Math.floor(Math.random()*(end-begin)+begin);}else{a=new Date();return a.getTime();}},r:function(vars){document.write(vars)},e:function(){var elements=[];for(var i=0;i<arguments.length;i++){var element=arguments[i];if(typeof element=='string')
element=document.getElementById(element);if(arguments.length==1)
return element;elements.push(element);}
return elements;},get:function(name){var get=location.search||location.hash;var start=get.indexOf(name+'=');if(start==-1)
return'';var len=start+name.length+1;var end=get.indexOf('&',len);if(end==-1)
end=get.length;return unescape(get.substring(len,end));},getCookie:function(name){return jQuery_cookie(name);},setCookie:function(name,value,hours,domain){var options={};if(hours)
options.expires=hours;if(domain)
options.domain=domain;options.path="\/";jQuery_cookie(name,value,options);},copy:function(vars,note){note=note||'网址复制成功!';if(!window.clipboardData){alert("您的浏览器不支持此复制方式，请直接用Ctrl+C或按鼠标右键复制");return false;}
var c=window.clipboardData.setData('text',vars);if(note&&c){alert(note);}else{if(!_.copyErr){alert("由于您的浏览器安全级别设置不允许脚本复制\n系统帮您复制失败，请手动复制吧 :(");_.copyErr=true;}}},copy2:function(sid,vars,note){note=note||'复制成功!';if(!window.clipboardData){_.e(sid).className="suc";_.e(sid).value="您的浏览器不支持此复制方式，请直接用Ctrl+C或按鼠标右键复制";setTimeout(function(){_.e(sid).value=vars;_.e(sid).className="";},3000);return false;}
var c=window.clipboardData.setData('text',vars);if(note&&c){_.e(sid).className="suc";_.e(sid).value=note;}else{if(!_.copyErr){_.e(sid).className="suc";_.e(sid).value="由于您的浏览器安全级别设置不允许脚本复制\n系统帮您复制失败，请手动复制吧 :(";_.copyErr=true;}}
setTimeout(function(){_.e(sid).value=vars;_.e(sid).className="";},3000);},copy3:function(sid,vars,note){note='复制成功!';_.e(sid).className="suc";_.e(sid).value=note;setTimeout(function(){_.e(sid).value=vars;_.e(sid).className="";},3000);},rehide:function(obj1,obj2){try{obj1=this.e(obj1);obj2=this.e(obj2);if(obj1.style.display==''){this.e(obj1).style.display='none';this.e(obj2).style.display='';}else{this.e(obj2).style.display='none';this.e(obj1).style.display='';}}catch(e){}},gowin:function(url,t,note){if(note)
if(!window.confirm(note))
return;if(t){top.document.location.href=url;}
document.location.href=url;},substr:function(s,n){s=s.toString();if(s){n=n||20;if(s.length>n){return s.substr(0,n)+'..';}}
return s;},player:function(v,p,w,h,id,transparent){transparent=transparent||"";p=p||'http://www.56.com/flashApp/v_player_site_fp7_5_20061219.swf';w=w||'100%';h=h||'100%';var wl=this.get('wl')||0;return'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="'
+(id||'object_flash_player')
+'" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="'
+w
+'" height="'
+h
+'"><param name="movie" value="'
+(wl?p+'?'+v:p)
+'"><param name="quality" value="high"><param name="wmode" value="opaque" /><param name="allowScriptAccess" value="always" />'
+'<param name="allowFullScreen" value="true" />'
+(wl?'':'<param name="FlashVars" value="'+v+'" />')
+'<embed id="embed_flash_player" allowScriptAccess="always" src="'
+(wl?p+'?'+v:p)
+'"  '
+(wl?'':'flashvars="'+v+'"')
+' '
+' quality="high" wmode="opaque" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowfullscreen="true" width="'
+w+'" height="'+h+'"></embed></object>';},"do":function(e,fn){},err:function(a,data,user,woman){data=(typeof data=='object')?data:data||{"flv":"http://www.56.com/v/img/flv_no_photo.gif","user":"http://www.56.com/v/img/user_no_photo.gif","women":"http://www.56.com/space/imgs/all/thu_woman.gif"};if(user){if(woman){a.src=data.woman;}else{a.src=data.user;}}else{a.src=data.flv;}},phost:function(a,b){if(b){var c={0:'u',1:'u',2:'l',3:'p'};if(b==1||b==2||b==3)
b=c[b];return"http://www.56.com/"+b+(a%88+11);}else{var rs=0,l=a.length,i;for(i=0;i<l;i++)
rs+=a.charCodeAt(i);return"http://www.56.com/w"+(rs%88+11);}},"getEnId":function(url){url=url||location.href;return url.indexOf('/v_')==-1?(url.indexOf('id=')==-1?'':url.split('id=')[1].split('&')[0]):url.split('/v_')[1].split('.')[0];},browser:{version:(userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(userAgent),opera:/opera/.test(userAgent),msie:/msie/.test(userAgent)&&!/opera/.test(userAgent),chrome:/chrome/.test(userAgent),mozilla:/mozilla/.test(userAgent)&&!/(compatible|webkit)/.test(userAgent)},trim:function(text){return(text||"").replace(/^\s+|\s+$/g,"");},formatTime:function(a,b){var s,d,D,y,now,delta;D=new Date();now=D.getTime();d=new Date(a*1000);delta=Math.floor(now/1000-a);if(delta<86400){if(delta<60){if(delta<30)s='刚刚';else s=delta+'秒前';}else if(delta>=60&&delta<3600){s=Math.floor(delta/60)+'分钟前';}else if(delta>=3600&&delta<86400){s=Math.floor(delta/3600)+'小时前';}}else if(delta>=86400&&delta<86400*7){s=Math.floor(delta/86400)+'天前';}else if(delta>=86400*7&&delta<86400*7*4){s=Math.floor(delta/(86400*7))+'周前';}else if(delta>=86400*7*4&&delta<86400*365){s=Math.floor(delta/(86400*7*4))+'个月前';}else if(delta>=86400*365){s=Math.floor(delta/(86400*365))+'年前';}else{y=d.getFullYear();s=y+"-"+(d.getMonth()+1)+"-"+d.getDate();if(b!=1)
{s+=" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();}}
return s;},reclass:function(e1,c1,e2,c2){try{_.e(e1).className=c1;_.e(e2).className=c2;}catch(e){}}};var _c={"sendSms":function(user_id,Subject,Content){window.open("http://www.56.com/admin/?http://msg.56.com/fasong.php?to="
+user_id);},"userUrl":function(user_id,s){s=s||'site';return s=='site'?_.phost(user_id)+'/show_user.php?user_id='+a:_.phost(user_id)+'/spaceListUser.php?user_id='+a;},"flvUrl":function(EnId,pct,id,s){if(pct==7){return"http://kankan.56.com/v/"+EnId+".html";}else if(pct==8){return"http://kankan.56.com/live/"+EnId+".html";}else if(pct==11){return"http://kankan.56.com/cpm/"+EnId+".html";}
s=s||'site';return s=='site'?_.phost(id,pct)+'/v_'+EnId+'.html':_.phost(id,pct)
+'/spaceDisplay.php?user_id='+EnId;}}
var usr={"gLoginId":_.getCookie("member_id"),"gLoginUserIdFromCookie":function(){var u=_.getCookie("member_id");if(u!=""&&_.getCookie("pass_hex")!=""){return u;}
return'';},"gNewMsg":_.getCookie("newmsg")||0,"gLoginUser":function(){this.gLoginId=this.gLoginUserIdFromCookie();var user=(this.gLoginId.indexOf("@")==-1?this.gLoginId:this.gLoginId.substring(0,this.gLoginId.indexOf("@")));if(user.indexOf('guest')>-1||user=='deleted'){user='';}
return user;},"user_id":function(){return this.gLoginUser();},"photo":function(u,b){var a1=0,a2=0,i,rs;u=u||this.gLoginUser();for(i=0;i<u.length;i++){a1+=u.charCodeAt(i)*i;a2+=u.charCodeAt(i)*(i*2+1);}
a1%=100;a2%=100;rs='http://uface.56.com/photo/'+a1+"/"+a2+"/";if(b){return rs+u+"_b_56.com_.jpg";}else{return rs+u+"_56.com_.jpg";}},"gIsLogin":function(){return(_.getCookie("member_id").length>1&&_.getCookie("pass_hex").length>1)?true:false;},"nk":function(){return decodeURIComponent&&_.getCookie("user_nickname_js").length?decodeURIComponent(_.getCookie("user_nickname_js")):this.user_id();}};function setStat(s,t){var u="http://stat3.corp.v-56.com/player.htm?s=";if(typeof t=='number'){setTimeout(function(){jLoader(u+s,true);},t);}else{jLoader(u+s,true);}}
function addListener(element,e,fn){element.addEventListener?element.addEventListener(e,fn,false):element.attachEvent("on"+e,fn)}
function removeListener(element,e,fn){element.removeEventListener?element.removeEventListener(e,fn,false):element.detachEvent("on"+e,fn)}
function insertAfter(newEl,targetEl){var parentEl=targetEl.parentNode;if(parentEl.lastChild==targetEl){parentEl.appendChild(newEl);}else{parentEl.insertBefore(newEl,targetEl.nextSibling);}}
function IeTrueBody(){return(document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body};function loadSwf(swf,vars,height,width,id,wmode){id=id||"flash_player";wmode=wmode||"opaque";var h='\
  <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="object_'+id+'" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" height="'+height+'" width="'+width+'">\
      <param name="movie" value="'+swf+'">\
      <param name="quality" value="high">\
      <param name="allowScriptAccess" value="always">\
      <param name="wmode" value="'+wmode+'">\
      <param name="allowFullScreen" value="true">\
      <param name="FlashVars" value="'+vars+'">\
      <embed src="'+swf+'" id="embed_'+id+'" allowScriptAccess = "always" wmode="'+wmode+'" FlashVars="'+vars+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" allowfullscreen="true" height="'+height+'" width="'+width+'">\
  </object>';return h;}
function isApple(){if((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/iPad/i))){return true;}
return false;}
function hasContents(Obj){return Obj&&(/<div[^>]*/i.test(Obj.innerHTML));}
function hideSilder1(){if(_.e('rAD2_420x60')){_.e('rAD2_420x60').style.display="none";}}
function hideSilder3(){if(_.e('rAD120_show')){_.e('rAD120_show').style.display="none";}}
function showSilder1(){if(_.e('rAD2_420x60')){_.e('rAD2_420x60').style.display="block";}}
function showSilder3(){if(_.e('rAD120_show')){_.e('rAD120_show').style.display="block";}}
function showSilder4(){if(_.e('rAD34_show')&&(typeof(oFlv.ban_ad)=="undefined"||oFlv.ban_ad==false)){_.e('rAD34_show').style.display="block";}}
function show_big(){document.getElementById('ADS_124_frame').height=250;}
function show_small(){document.getElementById('ADS_124_frame').height=50;}
function ch_r1_height(h){if(h!=""&&h>0){document.getElementById('ADS_124_frame').height=h;}}
function deleteViewRecord(vid){jLoader("http://msg.ua.56.com/view_rec/d?id="+vid+"&callback=viewRecord&rnd="+Math.ceil(Math.random()*1000));}
function clearViewRecord(){jLoader("http://msg.ua.56.com/view_rec/d?id=0&callback=viewRecord");}
function logViewRecOut(){jLoader("http://msg.ua.56.com/view_rec/d?id=0&rnd="+Math.ceil(Math.random()*1000));setTimeout(function(){window.location.href="http://urs.56.com/php/logout.php";},500);}
function saveViewCookie(jData,callback){try{var view_rec=_.getCookie("view_rec");if(view_rec!=""){_.setCookie("view_rec","",-2,".56.com");}
if(callback){sendViewCookie(jData,callback);}else{sendViewCookie(jData);}}catch(e){setStat("saveViewErr");}}
function getViewCookie(nowLogin){var view_rec=_.getCookie("view_rec");if(view_rec!=""){_.setCookie("view_rec","",-2,".56.com");}
if(usr.user_id()&&nowLogin=="now"){jLoader("http://msg.ua.56.com/view_rec/r?callback=viewRecord&login=1");}else{jLoader("http://msg.ua.56.com/view_rec/r?callback=viewRecord&rnd="+Math.ceil(Math.random()*1000));}}
function saveViewRecord(){if(!usr.user_id()){show_login();}else if(_.e("save_view_cookie")){_.e("save_view_cookie").innerHTML='<a title="更多" href="http://w.56.com/my/index.php?action=Video&do=viewList">更多</a>&nbsp;|&nbsp;<a title="清空当前记录" href="javascript:void(0)" onclick="clearViewRecord();">清空当前记录</a>';}}
function sendViewCookie(jData,callback){var objView=JSON.parse(jData);var vid=objView.id;var title=objView.title;var totaltime=objView.totaltime;var playtime=objView.playtime;if(callback){jLoader("http://msg.ua.56.com/view_rec/r?id="+vid+"&title="+title+"&totaltime="+totaltime+"&playtime="+playtime+"&callback="+callback);}else{jLoader("http://msg.ua.56.com/view_rec/r?id="+vid+"&title="+title+"&totaltime="+totaltime+"&playtime="+playtime);}}
function viewRecord(o){var vewRecordStr="";if(typeof o!="undefined"&&o!=""){try{var objView=o;var currentVid="";var currentViewId="";var isContainViewId=false;var totalItem=0;var viewLength=(objView.length-1);if(typeof(oFlv)!="undefined"){oFlv.objView=o;}
if((typeof(_oFlv_c)!="undefined"&&_oFlv_c.id)||(typeof(oFlv)!="undefined"&&oFlv.o.id)){currentVid=(_oFlv_c.id)?_oFlv_c.id:oFlv.o.id;for(var i=viewLength;i>=0;i--){if(parseFloat(objView[i]['id'])==currentVid){isContainViewId=true;currentViewId=i;break;}}}
if(viewLength>=0&&typeof(oFlv)!="undefined"&&isContainViewId&&currentVid!=""){vewRecordStr+='<div class="v_h_list_item" id="view_recs">';vewRecordStr+='<h4 class="v_h_list_title">';vewRecordStr+='<a title="'+decodeURIComponent(objView[currentViewId]['Subject'])+'" href="'+objView[currentViewId]['go_url']+'#st='+objView[currentViewId]['playtime']+'" target="_blank"  onclick="setStat(\'total_2_23113243\')">'+decodeURIComponent(objView[currentViewId]['Subject'])+'</a>';vewRecordStr+='</h4>';vewRecordStr+='<p>';vewRecordStr+='<span class="v_h_list_watch">正在看</span>';vewRecordStr+='<span class="v_h_list_extra">';vewRecordStr+='<a title="继续观看" target="_blank" href="'+objView[currentViewId]['go_url']+'" onclick="setStat(\'total_2_23113905\')">继续观看</a>';vewRecordStr+='</span>';vewRecordStr+='</p>';vewRecordStr+='<a class="v_h_list_close" href="javascript:void(0);" onclick="deleteViewRecord('+objView[currentViewId]['id']+');setStat(\'total_2_23113811\');return false;">删除</a>';vewRecordStr+='</div>';totalItem++;}else if(viewLength>=0&&typeof(oFlv)!="undefined"&&!isContainViewId&&currentVid!=""){vewRecordStr+='<div class="v_h_list_item" id="view_recs">';vewRecordStr+='<h4 class="v_h_list_title">';vewRecordStr+='<a title="'+_oFlv_c.Subject+'" href="'+window.location.href+'" target="_blank"  onclick="setStat(\'total_2_23113243\')">'+_oFlv_c.Subject+'</a>';vewRecordStr+='</h4>';vewRecordStr+='<p>';vewRecordStr+='<span class="v_h_list_watch">正在看</span>';vewRecordStr+='<span class="v_h_list_extra">';vewRecordStr+='<a title="继续观看" target="_blank" href="'+window.location.href+'" onclick="setStat(\'total_2_23113905\')">继续观看</a>';vewRecordStr+='</span>';vewRecordStr+='</p>';vewRecordStr+='<a class="v_h_list_close" href="javascript:void(0);" onclick="deleteViewRecord('+currentVid+');setStat(\'total_2_23113811\');return false;">删除</a>';vewRecordStr+='</div>';totalItem++;}
for(var i=viewLength;i>=0;i--){if(typeof(oFlv)!="undefined"&&parseFloat(objView[i]['id'])==currentVid||totalItem==5){continue;}else{totalItem++;vewRecordStr+='<div class="v_h_list_item" id="view_recs">';vewRecordStr+='<h4 class="v_h_list_title">';vewRecordStr+='<a title="'+decodeURIComponent(objView[i]['Subject'])+'" href="'+objView[i]['go_url']+'#st='+objView[i]['playtime']+'" onclick="setStat(\'total_2_23113243\')" target="_blank">'+decodeURIComponent(objView[i]['Subject'])+'</a>';vewRecordStr+='</h4>';vewRecordStr+='<p>';if(objView[i]['playtime']*100000/objView[i]['totaltime']>90){vewRecordStr+='<span class="v_h_list_watch">已看完</span>';vewRecordStr+='<span class="v_h_list_extra">';vewRecordStr+='<a title="从头观看" target="_blank" href="'+objView[i]['go_url']+'" onclick="setStat(\'total_2_23113905\')">从头观看</a>';vewRecordStr+='</span>';}else if(objView[i]['playtime']==0||objView[i]['playtime']==10){vewRecordStr+='<span class="v_h_list_watch">观看少于15秒</span>';vewRecordStr+='<span class="v_h_list_extra">';vewRecordStr+='<a title="继续观看" target="_blank" href="'+objView[i]['go_url']+'#st='+objView[i]['playtime']+'" onclick="setStat(\'total_2_23113905\')">继续观看</a>';vewRecordStr+='</span>';}else{vewRecordStr+='<span class="v_h_list_watch">观看至'+formart_time(objView[i]['playtime'])+'</span>';vewRecordStr+='<span class="v_h_list_extra">';vewRecordStr+='<a title="继续观看" target="_blank" href="'+objView[i]['go_url']+'#st='+objView[i]['playtime']+'" onclick="setStat(\'total_2_23113905\')">继续观看</a>';vewRecordStr+='</span>';}
vewRecordStr+='</p>';vewRecordStr+='<a class="v_h_list_close" href="javascript:void(0)" onclick="deleteViewRecord('+objView[i]['id']+');setStat(\'total_2_23113811\');return false;">删除</a>';vewRecordStr+='</div>';}}}catch(e){setStat("loadViewErr");}}
if(vewRecordStr==""){vewRecordStr='<div class="v_h_list_item" id="view_recs">暂无记录</div>';}else{if(usr.user_id()){vewRecordStr+='<div class="v_h_list_opt"><a title="更多" href="http://w.56.com/my/index.php?action=Video&do=viewList" onclick="setStat(\'total_2_23114444\')">更多</a>&nbsp;|&nbsp;<a title="清空当前记录" href="javascript:void(0)" onclick="clearViewRecord();setStat(\'total_2_23114515\');return false;">清空当前记录</a></div>';}else{vewRecordStr+='<div class="v_h_list_opt" id="save_view_cookie"><a title="永久保存观看记录" href="javascript:void(0)" onclick="saveViewRecord();setStat(\'total_2_23114551\');">永久保存观看记录</a>&nbsp;|&nbsp;<a title="更多" href="javascript:void(0)" onclick="clearViewRecord();setStat(\'total_2_23114515\');">清空当前记录</a></div>';}}
if(_.e("vewRecordS")){_.e("vewRecordS").innerHTML=vewRecordStr;}
if(_.e("vewRecordS2")){_.e("vewRecordS2").innerHTML=vewRecordStr;}}
function formart_time(itime){var sreturn="";if(!itime||isNaN(itime))
return sreturn;var num=parseInt(itime);var hours=Math.floor(num/3600);var mintus=Math.floor((num%3600)/60);var sec=num-3600*hours-60*mintus;if(hours){sreturn+=hours+"小时";}
if(mintus){sreturn+=mintus+"分";}
if(sec){sreturn+=sec+"秒";}
return sreturn;}