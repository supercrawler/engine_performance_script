
__oJKL_={};var RequestDelayHandle=0;var charset="gbk";var sUrl="http://key.so.56.com/kw?";var listDiv="";var lastindex=-1;var search_prompt_flag=false;var SEARCHINPUTVALUE="搜视频";JKLoad=function JKLoad(YoN){document.body.onkeydown=function(){try{var oOoo=eval(YoN);__oJKL_=oOoo;if(typeof(_page_)!="undefined"&&(_page_.channel=='search_list'||_page_.channel=='search_index')){document.forms[oOoo.FN].target='_self'}else{document.forms[oOoo.FN].target='_self'}}catch(e){}}
window.onresize=function(){hiddensearch();}}
JKLoad.prototype._callBack=function(sJson){show(sJson);}
function showresult(responseJsonObj){if(typeof(responseJsonObj)!="string")
return;jLoad=new JKLoad();eval(responseJsonObj);}
function StringBuffer(){this.data=[];}
function setSearchInVal(val){if(val&&val!=""&&SEARCHINPUTVALUE=="搜视频"){SEARCHINPUTVALUE=val;}}
StringBuffer.prototype.append=function(){this.data.push(arguments[0]);return this;}
StringBuffer.prototype.tostring=function(){return this.data.join("");}
function ajaxsearch(){var value=document.getElementById('Search_input').value.trim();if(value==''){hiddensearch();if(document.getElementById("Search_input").className=="inp_search"){document.getElementById("Search_input").className="inp_search gray";}}
if(value==''||search_prompt_flag||value==SEARCHINPUTVALUE){return;}else if(document.getElementById("Search_input").className=="inp_search gray"){document.getElementById("Search_input").className="inp_search";}
clearTimeout(RequestDelayHandle);RequestDelayHandle=setTimeout("sendRequest()",50);}
function sendRequest(){var _sUrl_="http://key.so.56.com/kw?";var value=document.getElementById('Search_input').value.trim();if(value==''){return;}
value=value.toLowerCase();if(navigator.userAgent.indexOf("Firefox")>0){var url=_sUrl_+encodeURI(value)+"&charset=utf8&s=ns&_st="+Math.random();}else{var url=_sUrl_+encodeURI(value)+"&charset=utf8&s=ns&_st="+Math.random();}
this.jLoader(url,true,'',charset);}
function create_prompt_list(){if(document.getElementById("Search_input").className=="inp_search gray"){document.getElementById("Search_input").value="";}
var showJKL=document.getElementById("showJKL");if(listDiv==""){listDiv=document.createElement("ul");listDiv.id="jk_ul";listDiv.className="so_auto_complete";showJKL.appendChild(listDiv);}}
function hiddensearch(){var showJKL=document.getElementById("showJKL");if(!showJKL)
return;showJKL.style.display="none";}
function showsearch(num){var serchResultPanel=document.getElementById("showJKL");if(!serchResultPanel)
return;serchResultPanel.style.display='block';}
function getposition(element,offset){var c=0;while(element){c+=element[offset];element=element.offsetParent}
return c;}
function focusitem(index){var item=document.getElementById('item'+index),lastItem=document.getElementById('item'+lastindex);if(lastItem!=null){lastItem.className="";}
if(item!=null){item.className="sfhover";lastindex=index;}else{lastindex=-1;document.getElementById("Search_input").focus();}}
function searchclick(index){if(index){document.getElementById("Search_input").value=document.getElementById('title'+index).innerHTML;}else{if(document.getElementById('title'+lastindex)!=null){document.getElementById("Search_input").value=document.getElementById('title'+lastindex).innerHTML;}}}
function searchformsubmit(){listDiv.style.display="none";if(!document.getElementById("Search_input").value.trim().length)
return;stats();window.location.href=serachUrl+encodeURI(document.getElementById("Search_input").value.trim())+"&charset=utf8";}
function searchkeydown(e){if(!document.getElementById('showJKL'))
return;if(document.getElementById('showJKL').innerHTML=='')
return;var keycode=(window.navigator.appName=="Microsoft Internet Explorer")?event.keyCode:e.which;if(keycode==40){search_prompt_flag=true;if(lastindex==-1||lastindex==listlength-1){focusitem(0);searchclick(0);}else{focusitem(lastindex+1);searchclick();}}
if(keycode==38){search_prompt_flag=true;if(lastindex==-1&&listlength>0){focusitem(listlength-1);searchclick(listlength-1);}else{focusitem(lastindex-1);searchclick();}}
if(keycode==13){hiddensearch();searchformsubmit();}
if(keycode==46||keycode==8){search_prompt_flag=false;ajaxsearch();}}
function show(responseJsonObj){if(typeof(responseJsonObj)!="object"||listDiv==""){hiddensearch();}else{if(responseJsonObj.length>0){listDiv.style.display="";var resultstring=new StringBuffer();for(var i=0;i<responseJsonObj.length;i++){resultstring.append('<li id="item'+i+'" onmousemove="this.className=\'sfhover\';focusitem('+i+')" onmouseout = "this.className =\'\'" onmousedown="searchclick('+i+');searchformsubmit()">');if(document.location.href.indexOf('tieba.56.com')>0&&typeof(tChoice)!="undefined"){if(tChoice==1){resultstring.append('<a id="title'+i+'" href="javascript:void(0);">');resultstring.append(responseJsonObj[i].keyword);resultstring.append('</a>');resultstring.append('<span id="hits'+i+'">');resultstring.append('进入我贴');resultstring.append('</span>');resultstring.append('</li>');}else{resultstring.append('<a id="title'+i+'" href="javascript:void(0);">');resultstring.append(responseJsonObj[i].keyword);resultstring.append('</a>');resultstring.append('<span id="hits'+i+'">');resultstring.append('约'+responseJsonObj[i].num+'个帖子');resultstring.append('</span>');resultstring.append('</li>');}}else{resultstring.append('<a id="title'+i+'" href="javascript:void(0);">');resultstring.append(responseJsonObj[i].keyword);resultstring.append('</a>');resultstring.append('<span id="hits'+i+'">');resultstring.append(responseJsonObj[i].num);resultstring.append('</span>');resultstring.append('</li>');}}
listDiv.innerHTML=resultstring.tostring();showsearch();listlength=responseJsonObj.length;lastindex=-1;}else{hiddensearch();}}}
String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")}
function stats(){if(typeof(_page_)=='undefined')
return;if(_page_.channel!='search_list'&&_page_.channel!='search_index'){try{document.getElementById('add_favorite').src='http://stat3.corp.v-56.com/player.htm?s=jload';}catch(e){}}}
function resetSearchInVal(){var searchInputValue=document.getElementById("Search_input").value;searchInputValue=searchInputValue.trim();if(searchInputValue===""){document.getElementById("Search_input").value=SEARCHINPUTVALUE;}}