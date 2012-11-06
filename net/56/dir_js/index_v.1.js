
(function(){if(typeof jQuery=="undefined"){jcLoader().load({type:"js",url:"http://s1.56img.com/script/lib/jquery/jquery-1.4.4.min.js"},function(){f2e_pageGlobal();});}
else{f2e_pageGlobal();}})();function f2e_pageGlobal(){$("#cityDropListClose").click(function(e){f2e_stopBubble(e);$("#dropMenu1").removeClass("mod56_drop_menu_hover");});$("#ydaSubmit").click(function(e){f2e_stopBubble(e);$("#dropMenu1").removeClass("mod56_drop_menu_hover");});$(".ix_skin02_tab").each(function(){var $tags=$(this).find(".js_switch_trigger");var $cnts=$(this).find(".js_switch_panel");var _tags=$tags.get();var _cnts=$cnts.get();var _delay=200;var _toggleClass="js_active";f2e_delayHover({tags:_tags,cnts:_cnts,delay:_delay,toggleClass:_toggleClass}).init();});f2e_classToggle(".m_v_list_pic","m_v_list_pic_hover");f2e_classToggle(".m_pt_list_pic","m_pt_list_pic_hover");$(".mod56_drop_menu").each(function(){f2e_dropMenuInit(this,"mod56_drop_menu_hover");});};function f2e_stopBubble(e){e=e||window.event;if(e.stopPropagation){e.stopPropagation();}
else{e.cancelBubble=true;}};function f2e_classToggle(targetStr,toggleClassName){$(targetStr).hover(function(){$(this).addClass(toggleClassName);},function(){$(this).removeClass(toggleClassName);})};function f2e_dropMenuInit(target,toggleClassName){bind(target,"click",function(e){e=e||window.event;stopBubble(e);var className=toggleClassName;var isAdd=true;var classNames=this.className.split(/\s+/);for(var i=0,len=classNames.length;i<len;i++){if(classNames[i]===className){isAdd=false;}}
if(isAdd){this.className+=" "+className;bind(document.body,"click",autoHideEvent);}
else{this.className=classNames.join(" ");unbind(document.body,"click",autoHideEvent);}})
bind(document.body,"click",autoHideEvent);function autoHideEvent(e){e=e||window.event;var srcElement=document.elementFromPoint(e.clientX,e.clientY);if(!isBelong(srcElement,target)){removeClass(target,toggleClassName);unbind(document.body,"click",arguments.callee);}}
function stopBubble(e){e=e||window.event;if(e.stopPropagation){e.stopPropagation();}
else{e.cancelBubble=true;}}
function isBelong(target,belongOne){for(var _target=target;_target;_target=_target.parentNode){if(_target===belongOne){return true;break;}}}
function bind(target,type,func){if(typeof func!="function"||!target||!type){return;}
if(target.addEventListener){target.addEventListener(type,_addEvent,false);}
else if(target.attachEvent){target.attachEvent("on"+type,_addEvent);}
if(!func.jnsBindKey){func.jnsBindKey=[];}
func.jnsBindKey.push({target:target,bindKey:_addEvent});function _addEvent(e){func.call(target,e);}}
function unbind(target,type,func){if(typeof func!="function"||!target||!type){return;}
var unbindKey;if(func.jnsBindKey){for(var i=0,len=func.jnsBindKey.length;i<len;i++){var fragSource=func.jnsBindKey[i];if(fragSource.target==target){unbindKey=fragSource.bindKey;func.jnsBindKey.splice(i,1);break;}}}
else{unbindKey=func;}
if(target.removeEventListener&&type&&unbindKey){target.removeEventListener(type,unbindKey);}
else if(target.detachEvent){target.detachEvent("on"+type,unbindKey);}}
function removeClass(target,className){var classNames=target.className.split(/\s+/);for(var i=0,len=classNames.length;i<len;i++){if(classNames[i]===className){classNames[i]="";}}
target.className=classNames.join(" ");}};function jcLoader(){var dc=document;function createScript(url,callback){var urls=url.replace(/[,]\s*$/ig,"").split(",");var scripts=[];var completeNum=0;for(var i=0;i<urls.length;i++){scripts[i]=dc.createElement("script");scripts[i].type="text/javascript";scripts[i].src=urls[i];dc.getElementsByTagName("head")[0].appendChild(scripts[i]);if(!callback instanceof Function){return;}
if(scripts[i].readyState){scripts[i].onreadystatechange=function(){if(this.readyState=="loaded"||this.readyState=="complete"){this.onreadystatechange=null;completeNum++;completeNum>=urls.length?callback():"";}}}
else{scripts[i].onload=function(){completeNum++;completeNum>=urls.length?callback():"";}}}}
function createLink(url,callback){var urls=url.replace(/[,]\s*$/ig,"").split(",");var links=[];for(var i=0;i<urls.length;i++){links[i]=dc.createElement("link");links[i].rel="stylesheet";links[i].href=urls[i];dc.getElementsByTagName("head")[0].appendChild(links[i]);}
callback instanceof Function?callback():"";}
return{load:function(option,callback){var _type="",_url="";var _callback=callback
option.type?_type=option.type:"";option.url?_url=option.url:"";typeof option.filtration=="boolean"?filtration=option.filtration:"";switch(_type){case"js":case"javascript":createScript(_url,_callback);break;case"css":createLink(_url,_callback);break;}
return this;}}};function f2e_delayHover(){var option={tags:null,cnts:null,delay:200,toggleClass:"cur",mouseOver:function(){},mouseOut:function(){}}
var op;arguments[0]?op=arguments[0]:"";var jns={};jns.console=function(msg){if(typeof console!="undefined"){console.log(msg);}}
jns.selector=function(source){var dc=document;if(typeof source=="object"){return source;}
else if(typeof source=="string"){var strGroup=source.split(/\s+/);var strGroup_len=strGroup.length;var fragSource;var fragSource_len;var result=dc;if(strGroup_len==1&&strGroup[0].substring(0,1)=="#"){return dc.getElementById(strGroup[0].substring(1))}
else{if(dc.querySelectorAll){result=dc.querySelectorAll(source);}
else{for(var i=0;i<strGroup_len;i++){fragSource=strGroup[i];fragSource_len=fragSource.length;if(fragSource_len==0){continue;}
switch(fragSource.substring(0,1)){case"#":result=idSelector(result,fragSource.substring(1));break;case".":result=classSelector(result,fragSource.substring(1));break;default:result=tagSelector(result,fragSource);break;}}
result=[].concat(result);}
if(result.length==0){return false;}
else if(result.length==1){return result[0];}
else{return result;}}}
function idSelector(target,idStr){return dc.getElementById(idStr);}
function classSelector(target,className){var targetGroup=[].concat(target);var targetGroup_len=targetGroup.length;var result=[];var fragTarget;var fragGroup;var fragTarget_cells;var fragTarget_cells_len;var fragClassNames;var fragClassNames_len;for(var i=0;i<targetGroup_len;i++){fragTarget=targetGroup[i];if(!fragTarget){continue;}
fragTarget_cells=fragTarget.getElementsByTagName("*");fragTarget_cells_len=fragTarget_cells.length;for(var k=0;k<fragTarget_cells_len;k++){fragClassNames=fragTarget_cells[k].className.split(" ");fragClassNames_len=fragClassNames.length;for(var j=0;j<fragClassNames_len;j++){if(fragClassNames[j]==className){result=result.concat(fragTarget_cells[k]);break;}}}}
return result;}
function tagSelector(target,tagStr){var targetGroup=[].concat(target);var targetGroup_len=targetGroup.length;var result=[];var fragTarget;var fragGroup;var fragGroup_len;for(var i=0;i<targetGroup_len;i++){fragTarget=targetGroup[i];if(!fragTarget){continue;}
fragGroup=fragTarget.getElementsByTagName(tagStr);fragGroup_len=fragGroup.length;for(var j=0;j<fragGroup_len;j++){result=result.concat(fragGroup[j]);}}
return result;}}
jns.each=function(elms,func){if(!elms){return;}
if(typeof elms.length=="undefined"){elms=[elms];}
for(var i=0,len=elms.length;i<len;i++){func.call(elms[i]);}}
jns.bind=function(target,type,func){if(typeof func!="function"||!target||typeof type!="string"){return;}
if(target.addEventListener){target.addEventListener(type,_addEvent,false);}
else if(target.attachEvent){target.attachEvent("on"+type,_addEvent);}
if(!func.jnsBindKey){func.jnsBindKey=[];}
func.jnsBindKey.push({target:target,bindKey:_addEvent});function _addEvent(e){func.call(target,e);}}
jns.unbind=function(target,type,func){if(typeof func!="function"||!target||typeof type!="string"){return;}
var unbindKey;if(func.jnsBindKey){for(var i=0,len=func.jnsBindKey.length;i<len;i++){var fragSource=func.jnsBindKey[i];if(fragSource.target==target){unbindKey=fragSource.bindKey;func.jnsBindKey.splice(i,1);break;}}}
else{unbindKey=func;}
if(target.removeEventListener&&type&&unbindKey){target.removeEventListener(type,unbindKey);}
else if(target.detachEvent){target.detachEvent("on"+type,unbindKey);}}
jns.addClass=function(target,className){var classNames=target.className.split(/\s+/);for(var i=0,len=classNames.length;i<len;i++){if(classNames[i]===className){return;}}
target.className+=" "+className;}
jns.removeClass=function(target,className){var classNames=target.className.split(/\s+/);for(var i=0,len=classNames.length;i<len;i++){if(classNames[i]===className){classNames[i]="";}}
target.className=classNames.join(" ");}
jns.stopBubble=function(e){e=e||window.event;if(e.stopPropagation){e.stopPropagation();}
else{e.cancelBubble=true;}}
jns.imgAJAXLoader=function(target,src,callback){if(!target||target.tagName!="IMG"||typeof src!="string"){return;}
var onloadEvent=function(){}
if(typeof callback=="function"){onloadEvent=callback;}
if(target.src==src){return;};if(target.readyState){target.onreadystatechange=function(){if(this.readyState=="loaded"||this.readyState=="complete"){this.onreadystatechange=null;onloadEvent.call(this);}}}
else{target.onload=function(){onloadEvent.call(this);}}}
function areaReset(){if(typeof option.tags.length=="undefined"){option.tags=[option.tags];}
if(option.cnts&&typeof option.cnts.length=="undefined"){option.cnts=[option.cnts];}
var tags=option.tags,cnts=option.cnts,delayTime=option.delay,toggleClass=option.toggleClass,mouseOverEvent=option.mouseOver,mouseOutEvent=option.mouseOut;for(var i=0,len=tags.length;i<len;i++){var fs=tags[i];jns.bind(fs,"mouseover",mouseOverHandle);jns.bind(fs,"mouseout",mouseOutHandle);}
function mouseOverHandle(){var fs=this;attrSiblingsCheck.call(fs);fs.delayKey=setTimeout(function(){jns.addClass(fs,toggleClass);jns.each(fs.jns_siblings,function(){jns.removeClass(this,toggleClass);})
jns.each(cnts,function(){this===cnts[fs.jns_index]?(this.style.display="block"):(this.style.display="none");})
typeof mouseOverEvent=="function"?mouseOverEvent.call(fs):"";},delayTime);}
function mouseOutHandle(){attrSiblingsCheck.call(this);clearTimeout(this.delayKey);typeof mouseOutEvent=="function"?mouseOutEvent.call(this):"";}
function attrSiblingsCheck(){if(!this.jns_siblings){this.jns_siblings=[];var children=this.parentNode.children;for(var i=0,len=children.length;i<len;i++){this===children[i]?this.jns_index=i:this.jns_siblings.push(children[i]);}}}}
return{setOption:function(op){op.tags?option.tags=jns.selector(op.tags):"";op.cnts?option.cnts=jns.selector(op.cnts):"";op.delay?option.delay=(parseInt(op.delay)||0):"";typeof op.toggleClass=="string"?option.toggleClass=op.toggleClass:"";typeof op.mouseOver=="function"?option.mouseOver=op.mouseOver:"";typeof op.mouseOut=="function"?option.mouseOut=op.mouseOut:"";return this;},hover:function(){typeof arguments[0]=="function"?option.mouseOver=arguments[0]:"";typeof arguments[1]=="function"?option.mouseOut=arguments[1]:"";return this;},init:function(){if(op){this.setOption(op);}
if(!option.tags){return;}
areaReset.call(this);}}}
function f2e_imgAJAXLoader(target,src,callback){var jns={};jns.imgAJAXLoader=function(target,src,callback){if(!target||target.tagName!="IMG"||typeof src!="string"){return;}
var onloadEvent=function(){}
if(typeof callback=="function"){onloadEvent=callback;}
if(target.src==src){return;};target.src=src;if(target.readyState){target.onreadystatechange=function(){if(this.readyState=="loaded"||this.readyState=="complete"){this.onreadystatechange=null;onloadEvent.call(this);}}}
else{target.onload=function(){onloadEvent.call(this);}}}
jns.imgAJAXLoader(target,src,callback);}