
var addEvent=function(el,ev,fn){if(el.addEventListener){el.addEventListener(ev,fn,false);}else{if(el.attachEvent){el.attachEvent("on"+ev,fn);}else{el["on"+ev]=fn;}}},attachPromotionClickHandlers=function(){var _4=document.getElementsByClassName("prmtns");for(var i=0;i<_4.length;i++){_4[i].addEventListener("click",function(){return trackPromotion(this);});}},trackPromotion=function(_6){var _7=_6.getAttribute("data-tid"),lv="lt="+getLoggingTimeStamp()+"&ai=3564&presMode=eBay&usid="+_7;if(window._sid){lv+="&site="+window._sid;}
var _8=encodeURIComponent(lv);fireTrackingRover("2051599",_8);return true;},onloadHndlr=function(){if(!readCookie("tz")){createCookie("tz",new Date().getTimezoneOffset()*-1/60,1);}
var o="p";if(window.orientation&&(window.orientation===90||window.orientation===-90)){o="l";}
createCookie("o",o,false);attachPromotionClickHandlers();var _a=document.getElementsByClassName("gtTp");if(_a&&_a.length>0){addEvent(_a[0],"click",scrlToTp);}},readCookie=function(_b){var _c=_b+"=";var ca=document.cookie.split(";");for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)===" "){c=c.substring(1,c.length);}
if(c.indexOf(_c)===0){return c.substring(_c.length,c.length);}}
return null;},createCookie=function(_10,_11,_12){var _13="",date=new Date();if(_12){date.setTime(date.getTime()+(_12*24*60*60*1000));_13="; expires="+date.toGMTString();}
document.cookie=_10+"="+_11+_13+"; path=/";},removeClass=function(ele,cls){if(hasClass(ele,cls)){var reg=new RegExp("(\\s|^)"+cls+"(\\s|$)");ele.className=ele.className.replace(reg," ");}
return ele;},addClass=function(ele,cls){if(!this.hasClass(ele,cls)){ele.className+=" "+cls;}
return ele;},hasClass=function(ele,cls){return ele.className.match(new RegExp("(\\s|^)"+cls+"(\\s|$)"));},attachTapEvent=function(el,o){var _1d=false,touchStart="tstart",touchMove="tmoved",touchEnd="tend",options=o,data=options.dataToEvent,removeState=function(el){removeClass(el,touchStart);removeClass(el,touchMove);removeClass(el,touchEnd);};el.addEventListener("touchstart",function(){var _1f=_1f?_1f:{};_1d=true;removeState(this);addClass(this,touchStart);if(typeof options.onTStart==="function"){options.onTStart.apply(this,[_1f,data]);}});el.addEventListener("touchmove",function(){var _20=_20?_20:{};removeState(this);addClass(this,touchMove);_1d=false;if(typeof options.onTMove==="function"){options.onTMove.apply(this,[_20,data]);}});el.addEventListener("touchend",function(){var _21=_21?_21:{};if(_1d){_1d=false;removeState(this);addClass(this,touchEnd);if(typeof options.onTap==="function"){options.onTap.apply(this,[_21,data]);}}else{if(typeof options.onTEnd==="function"){options.onTEnd.apply(this,[_21,data]);}}});return el;},isTouchDevice=function(){try{document.createEvent("TouchEvent");return true;}
catch(e){return false;}},trackUserAction=function(_22){var lv="lt="+getLoggingTimeStamp()+"&ai=3564&presMode=eBay&an="+_22;if(window._sid){lv+="&site="+window._sid;}
var _24=encodeURIComponent(lv);fireTrackingRover("2051725",_24);return true;},isAndroid4x=function(){return/android 4\./i.test(navigator.userAgent.toLowerCase());},isAndroid2=function(){return/android\s([2]\.[2-3](\.[0-9])?)/i.test(navigator.userAgent.toLowerCase());},iPhoneVerLess5=function(){if(/(iPhone|iPod)/i.test(navigator.userAgent)){if(/OS [2-4]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent)||/CPU like Mac OS X/i.test(navigator.userAgent)){return true;}}
return false;},scrlToTp=function(){window.scrollTo(0,0);return false;};isGingerbreadOrAbove=function(){var _25=/android (\d)\.(\d)/;var _26=navigator.userAgent.toLowerCase().match(_25);if((_26&&_26[1]>2)||(_26&&_26[1]==2&&_26[2]>=3)){return true;}else{return false;}},getLoggingTimeStamp=function(){var now=new Date().toISOString();var _28=now.indexOf("Z");if(_28!==-1){now=now.substring(0,_28);}
return now;},getCacheBuster=function(){var _29=new Date();var _2a=Math.random()*100000000000;var _2b=Math.round(_29.getTime()+_2a);return _2b;},fireTrackingRover=function(imp,lv){var _2e="http://rover.ebay.com/roverimp/0/0/14?imp="+imp+"&lv="+lv+"&mpt="+getCacheBuster();var img=document.createElement("img");img.src=_2e;img.border=0;img.height=0;img.style.display="none";document.body.appendChild(img);},getKeyCode=function(e){return(e.keycode?e.keycode:e.which);},triggerPageReflow=function(){document.body.style.paddingLeft="1px";setTimeout(function(){document.body.style.paddingLeft="0px";},0);};addEvent(window,"load",onloadHndlr);

vjo.ctype("vjo.ebay.cmp.gallery.Gallery").needs("vjo.dsf.EventDispatcher").protos({constructs:function(_1,_2,_3){var o=this;o.dailyDeals=_3;o.snapMode=_2;o.pad=20;o.widthRatio=0.75;o.wid;o.hgt;o.imgpos;o.snapindex=0;o.snappad;o.position=0;o.scroll;o.moved=false;o.direction="h";o.isSwipeDirCalculated=false;var _5=document.getElementsByClassName("em_itm");o.singleItem=_5.length<=1;var _6=document.querySelectorAll("#"+_1+" > div.em_itm");o.initDailyDealsTap(_6);o.startPos,o.speed,o.distance=0;o.startTime;o.step,o.min,o.max=0;o.coors,o.origin=0;o.posX=0;o.el=document.getElementById(_1);o.wrapper=o.el.parentNode;o.el.style.webkitTransitionProperty="-webkit-transform";o.el.style.webkitTransitionTimingFunction="cubic-bezier(0,0,0.25,1)";o.el.style.webkitTransitionDuration="0";o.el.style.webkitTransform="translate3d("+"0,0"+",0)";o.allowVerticalScroll=this.is_iOS();this.vj$.EventDispatcher.addEventListener(window,"load",function(){o.loadItems();},o);this.vj$.EventDispatcher.addEventListener(window,"resize",function(){o.onResize();},o);if(!o.singleItem){this.vj$.EventDispatcher.addEventListener(o.el,"touchstart",o.startDrag,o);this.vj$.EventDispatcher.addEventListener(o.el,"touchmove",o.moveDrag,o);this.vj$.EventDispatcher.addEventListener(o.el,"touchend",o.ontouchend,o);}
var _7="onorientationchange"in window,orientationEvent=_7?"orientationchange":"resize";this.vj$.EventDispatcher.addEventListener(window,orientationEvent,o.onResize,o);},initDailyDealsTap:function(_8){for(var j=0;j<_8.length;j++){attachTapEvent(_8[j],{"onTap":function(){var _a=this.querySelectorAll("a");if(_a&&_a.length){location.href=_a[0].href;}}});}},onResize:function(){var o=this;var _c=true;if(typeof jQuery==="function"&&!$("#viPgCntr").is(":visible")){_c=false;}
if(_c){if(o.allowVerticalScroll===true){setTimeout(vjo.bind(o,o.loadItems),0);}else{setTimeout(vjo.bind(o,o.loadItems),200);}}},loadItems:function(){var o=this;var _e=document.getElementsByClassName("lazyLoad");o.total=_e.length;o.currCount=0;for(var i=_e.length-1;i>=0;i--){var _10=_e[i].getAttribute("data-url");_e[i].src=_10;_e[i].addEventListener("load",function(){o.currCount++;if(o.currCount===o.total){o.loadItems();}});_e[i].setAttribute("src",_10);_e[i].removeAttribute("class");}
o.el.style.visibility="hidden";o.position=0;o.setPosX(0);var _11=o.el.getElementsByClassName("em_itm");if(o.dailyDeals){o.galrWidth=(152*_11.length)+20;o.el.style.width=o.galrWidth+"px";}
if(o.snapMode){o.wrapper.style.margin="auto";o.wid=Math.floor(window.innerWidth*o.widthRatio);o.hgt=Math.floor(o.wid*2/3);o.snappad=_11.length<=1?Math.floor((window.innerWidth-o.wid)/2)-15:0;o.position+=o.snappad;o.imgpos=new Array(_11.length);o.snapindex=0;}
var d;for(var i=0;i<_11.length;i++){d=_11[i];if(_11[i].nodeName=="DIV"){if(o.snapMode){d.style.margin="5px 0px";o.el.style.height=o.hgt+5+"px";o.pad=0;var _13=d;var _14=_13.getElementsByClassName("em_thmb")[0];var _15=_14.getElementsByTagName("IMG")[0];_13.style.width=o.wid+"px";_13.style.height=o.hgt+"px";_14.style.width=o.wid+"px";_14.style.height=o.hgt+"px";if((_15.nodeName=="IMG")){var _16=_15.width;var _17=_15.height;var _18,_19;if(_16-(_16*1/3)>_17){_18=o.wid;_19=Math.floor(_17*_18/_16);}else{_19=o.hgt;_18=Math.floor(_16*_19/_17);}
_15.style.width=_18+"px";_15.style.height=_19+"px";_15.width=_18;_15.height=_19;}}else{d.style.cssFloat=null;d.style.position="relative";d.style.display="inline-block";}
if(!o.dailyDeals){var pos=(o.wid/100)*15;d.style.left=o.position+"px";d.style.paddingRight=10+"px";}
if(o.snapMode){o.imgpos[i]=-o.position+o.snappad;}
o.position+=d.offsetWidth+o.pad;}}
o.el.style.visibility="visible";o.el.style.position="relative";o.el.style.zIndex="1";if(o.snapMode){o.min=o.imgpos[i];var _1b=document.getElementById("arrowDiv");if(typeof _1b!=="undefined"&&_1b!=null){_1b.style.bottom=o.hgt/2+30+"px";}
o.scrolling(o.imgpos[o.snapindex],"0ms");}else{o.min=-(o.position)+o.wrapper.offsetWidth;o.el.style.width=(152*_11.length)+"px";}
o.max=0;},startDrag:function(e){var o=this;if(!o.allowVerticalScroll&&!o.snapMode){e.preventDefault();}
e.stopPropagation();o.moved=false;o.distance=0;o.origin=this.getCoors(e);o.last=this.getCoors(e);o.originY=this.getCoorsY(e);o.lastY=this.getCoorsY(e);o.startTime=new Date().getTime();o.setTransitionTime("0");},setPosX:function(x){var o=this;o.el.style.webkitTransform="translate3d("+x+"px,"+"0px"+",0)";if(o.dailyDeals){var _20=o.el.offsetWidth;var _21=100;if(x>_21||x<-_20+window.innerWidth-_21){return;}}
o.posX=x;},setTransitionTime:function(_22){var o=this;_22=_22||"0";o.el.style.webkitTransitionDuration=_22;},moveDrag:function(e){e.stopPropagation();var o=this;var _26=o.getCoors(e);var d=_26-o.last;var _28=d+o.posX;o.last=_26;o.distance=o.last-o.origin;o.currentY=o.getCoorsY(e);if(isGingerbreadOrAbove()){if(!o.isSwipeDirCalculated){if(Math.abs(o.lastY-o.currentY)>Math.abs(d)){o.direction="v";}else{o.direction="h";}}
if(o.direction==="v"){}else{if(Math.abs(o.distance)>5){o.setPosX(_28);o.moved=true;e.preventDefault();}}
o.lastY=o.currentY;}else{if(Math.abs(o.distance)>15){o.setPosX(_28);o.moved=true;}}},scrolling:function(_29,_2a){var o=this;if(o.posX==_29){o.bounceBack();return;}
o.moved=true;o.setTransitionTime(_2a||"350ms");o.setPosX(_29);if(_2a==="0"||_2a=="0s"||_2a=="0ms"){o.bounceBack();}else{this.vj$.EventDispatcher.addEventListener(o.el,"webkitTransitionEnd",o.onTransitionEnd,o);}},bounceBack:function(){var o=this,resetX=o.posX;if(o.posX>=0){resetX=0;}else{if(o.posX<o.min){resetX=o.min;}}
if(resetX!=o.posX){o.scrolling(resetX);}else{if(o.moved){o.moved=false;}}},ontouchend:function(e){var o=this;o.isSwipeDirCalculated=false;o.distance=o.last-o.origin;var _2f=new Date().getTime();var _30=_2f-o.startTime;if(!o.moved&&_30<200){var _31=o.getTouch(e);var ta=_31.target;while(ta!=o.el){if(ta.nodeName=="A"){break;}
ta=ta.parentNode;}
return;}
o.speed=Math.round(o.distance/(_30/1000));o.momentumScroll();return;},momentumScroll:function(){var o=this;var t=350;var _35=0;var _36=Math.round(o.speed*_35*t/1000);var _37=o.posX+_36;if(o.snapMode){_37=o.nextSnapPos();}
o.scrolling(_37,t+"ms");},nextSnapPos:function(){var o=this;var _39;if(o.distance<0){if(o.snapindex+1==o.imgpos.length){}else{if(Math.abs(o.distance)>(o.wid/4)){o.snapindex++;}}}else{if(o.snapindex-1<0){}else{if(o.distance>(o.wid/3)){o.snapindex--;}}}
_39=o.imgpos[o.snapindex];return _39;},onTransitionEnd:function(){var o=this;this.vj$.EventDispatcher.detachHandlers(o.el.id,"webkitTransitionEnd");o.bounceBack();},getCoors:function(e){var _3c=this.getTouch(e);return _3c.clientX;},getCoorsY:function(e){var _3e=this.getTouch(e);return _3e.clientY;},getTouch:function(e){var _40;if(e.touches&&e.touches.length){_40=e.touches[0];}else{_40=e;}
return _40;},is_iOS:function(){var _41=(/iphone/gi).test(navigator.appVersion);var _42=(/ipad/gi).test(navigator.appVersion);var _43=(/ipod/gi).test(navigator.appVersion);return _41||_42||_43;}}).endType();

vjo.ctype("vjo.ebay.bizmo.cmp.itemVariation.UpdateTraits").needs("vjo.dsf.Element","E").props({m_update:0,}).protos({m_traits:[],m_options:[],m_availVariations:[],constructs:function(_1){var t=this;t.E=t.vj$.E;t.m=_1;t.m_traits=(t.m.traits);t.m_availVariations=(t.m.availableVariations);t.backupOption();},backupOption:function(){var ts=this.m_traits;if(ts&&this.vj$.UpdateTraits.m_update!==1){for(var i=0,tsl=ts.length;i<tsl;i++){var _5=ts[i],selObj=document.getElementById(_5.mask);var _6=[];for(var j=0,sl=selObj.options.length;j<sl;j++){var _8=selObj.options[j],value=_8.getAttribute("id");optObj=new Option(_8.text,_8.value,false,false);optObj.id=value;_6[j]=optObj;}
this.m_options[i]=[_5.mask,_6];}
this.sanityCheck();this.vj$.UpdateTraits.m_update=1;}},sanityCheck:function(){var _9=this.vj$.E.get("submitVar");if(this.allSelected()){_9.disabled=false;var _a=new RegExp("(\\s|^)"+"secondary"+"(\\s|$)");if(_9.className.match(_a)){_9.className=_9.className.replace(_a," ");}
_a=new RegExp("(\\s|^)"+"primary"+"(\\s|$)");if(!_9.className.match(_a)){_9.className=_9.className+" primary";}
var _b=document.getElementsByTagName("select");if(_b.length>1){for(var i=0;i<_b.length;i++){var _d=_b[i];var _e=_d.selectedIndex;var sl=_d.options.length-1;for(var j=sl;j>=0;j--){if(_d.options[j].getAttribute("id")!=-1&&j!=_e){var _11=_d.options[j].value;_d.options[j]=null;}}}}}else{_9.disabled=true;}},allSelected:function(){var _12=true;var _13=document.getElementsByTagName("select");for(var i=0;i<_13.length;i++){var sel=_13[i];var _16=sel.selectedIndex;if(_16==0){_12=false;break;}}
return _12;},updateTraitValues:function(_17){var t=this;if(_17!==""&&false){return false;}
var _19=this.vj$.E.get(_17);var mid=_19.options[_19.selectedIndex].getAttribute("id");var tso=t.m_traits;var _1c=0;var _1d=[];var _1e=[];_1d=t.findPossibleVariation(_17,mid);var pl=_1d.length;for(var k=0;k<tso.length;k++){ts=tso[k];var _21=[];var _22=document.getElementById(ts.mask);if((ts.mask==_17)&&mid!=-1){continue;}else{for(var j=0;j<_1d.length;j++){var _24=ts.values;var _25=_1d[j].id&ts.mask;if(ts.values.indexOf(_25)!=-1&&!t.include(_21,_25)){_21.push(_25);}}}
var sl=_22.options.length-1;for(var m=sl;m>=0;m--){if(!t.include(_21,_22.options[m].id)){if(_22.options[m].id!=-1){var _28=_22.options[m].id;_22.options[m]=null;}}else{t.removeElement(_21,_22.options[m].id);}}
if(_21.length>0){var _29=t.findOriginalOptions(ts.mask);if(t.m_options!=null){for(var n=0,nl=_21.length;n<nl;n++){var op=t.findOption(_29,_21[n]);sl=_22.options.length;if(op){_22.options[sl]=op;}
sl++;}}}}},buttonCheck:function(_2c){var _2d=this.vj$.E.get(_2c);if(typeof _2d.selectedIndex!="undefined"){this.updateTraitValues(_2c);}
var _2e=true;var _2f=0;var _30;var _31;var _32;var _33=document.getElementsByTagName("select");for(var i=0;i<_33.length;i++){var sel=_33[i];var _36=sel.selectedIndex;if(_36==0&&sel.length>1){_2e=false;}else{_2f++;_30=sel;_31=i;var _37=sel.options[_36].value;_32=sel.id;}}
var btn=this.vj$.E.get("submitVar");if(_2e){var _39=new RegExp("(\\s|^)"+"secondary"+"(\\s|$)");if(btn.className.match(_39)){btn.className=btn.className.replace(_39," ");}
_39=new RegExp("(\\s|^)"+"primary"+"(\\s|$)");if(!btn.className.match(_39)){btn.className=btn.className+" primary";}
btn.disabled=false;var img=this.vj$.E.get("vImg");if(typeof img!="undefined"&&img!=null){var _3b=0,src="",wid,hgt;var tso=this.m_traits;for(var k=0;k<tso.length;k++){var _3e=this.vj$.E.get(tso[k].mask);var _36=_3e.selectedIndex;var _37=_3e.options[_36].getAttribute("id");_3b=_3b|_37;}
var av=this.m_availVariations;for(var l=0;l<av.length;l++){if(av[l].id==_3b){src=av[l].imgSrc;break;}}
if(src!==""&&src!=null&&src!="null"){img.setAttribute("src",src);var _41=img.naturalWidth,newwid;var _42=img.naturalHeight,newhgt;wid=Math.floor(window.innerWidth*0.75);hgt=Math.floor(wid*2/3);if(_41>_42){newwid=wid;newhgt=Math.floor(_42*newwid/_41);}else{newhgt=hgt;newwid=Math.floor(_41*newhgt/_42);}
img.style.width=newwid+"px";img.style.height=newhgt+"px";img.width=newwid;img.height=newhgt;}}}else{var _43=new RegExp("(\\s|^)"+"primary"+"(\\s|$)");if(btn.className.match(_43)){btn.className=btn.className.replace(_43," ");}
_43=new RegExp("(\\s|^)"+"secondary"+"(\\s|$)");if(!btn.className.match(_43)){btn.className=btn.className+" secondary";}
btn.disabled=true;}
if(_2f==1){this.AddVaroptions(_30,_31,_32);}},AddVaroptions:function(_44,_45,_46){var _47=this.findOriginalOptions(_46);for(var i=1;i<_47.length;i++){if(!this.includeopt(_44.options,_47[i].id)){sl=_44.options.length;_44.options[sl]=_47[i];}}},findPossibleVariation:function(_49,_4a){var t=this;var av=t.m_availVariations;var tso=t.m_traits;var _4e=[];var v=[];if(_4a!=-1){for(var i=0,avl=av.length;i<avl;i++){var _51=av[i];var po=_51.id&_49;if(po==_4a){_4e.push(av[i]);}}}else{_4e=av;}
for(var k=0;k<tso.length;k++){ts=tso[k];var _54=document.getElementById(ts.mask);var _55=[];if(_54.selectedIndex>0&&ts.mask!=_49){for(var j=0;j<_4e.length;j++){po=_4e[j].id&ts.mask;if(po!=_54.options[_54.selectedIndex].id){_55.push(_4e[j]);}}}
if(_55.length>0){_4e=t.removeSubSets(_4e,_55);}}
return _4e;},addoptions:function(_57,_58,_59){var _5a=this.findOriginalOptions(_59);for(var i=1;i<_5a.length;i++){if(!this.includeopt(_57.options,_5a[i].id)){sl=_57.options.length;_57.options[sl]=_5a[i];}}},removeSubSets:function(arr,_5d){var r=[];for(var i=0;i<arr.length;i++){if(!this.include(_5d,arr[i])){r.push(arr[i]);}}
return r;},removeElement:function(arr,_61){for(var i=0;i<arr.length;i++){if(arr[i]==_61){arr.splice(i,1);}}},findOption:function(_63,_64){for(var i=0;i<_63.length;i++){if(_63[i].id==_64){return _63[i];}}},include:function(arr,_67){for(var i=0;i<arr.length;i++){if(arr[i]==_67){return true;}}
return false;},includeopt:function(arr,_6a){for(var i=0;i<arr.length;i++){if(arr[i].id==_6a){return true;}}
return false;},findOriginalOptions:function(id){for(var i=0;i<this.m_options.length;i++){if(parseInt(id)==parseInt(this.m_options[i][0])){return this.m_options[i][1];}}}}).endType();

vjo.ctype("vjo.ebay.bizmo.timer.Timer").protos({timer:null,totalSeconds:null,timeString:null,minString:"m",secString:"s",ovlTimer:null,startTimer:function(_1,_2,_3){var t=this;t.timer=document.getElementById("timeleftid");var _5=t.timer;if(_5!==null){t.timeString=_5.innerHTML;var _6=t.timeString.split(" ");if(_6.length==2){minString=t.discardNumbers(_6[0]);secString=t.discardNumbers(_6[1]);}}
t.totalSeconds=_1;t.currentUTCTime=Math.floor(new Date().getTime()/1000);t.endUTCTime=Math.floor(new Date().getTime()/1000)+_1;var _7=document.getElementById(_2);t.ovlTimer=document.getElementById(_3);if(_7!=null){t.ovlTimer=document.getElementById(_3);}
t.updateTimeLeftTimer(true);setTimeout(function(){t.secondsTick(true);},1000);},startTimeLeftTimer:function(_8){var t=this;t.timer=document.getElementById("timeleftid");var _a=t.timer;if(_a!==null){t.timeString=_a.innerHTML;var _b=t.timeString.split(" ");if(_b.length==2){minString=t.discardNumbers(_b[0]);secString=t.discardNumbers(_b[1]);}}
t.totalSeconds=_8;t.currentUTCTime=Math.floor(new Date().getTime()/1000);t.endUTCTime=Math.floor(new Date().getTime()/1000)+_8;t.updateTimeLeftTimer(true);setTimeout(function(){t.secondsTick(true);},1000);},attachTimer:function(_c,_d,_e){var t=this;t.timer=document.getElementById(_d);var tmr=t.timer;if(tmr!==null){t.timeString=tmr.innerHTML;var _11=t.timeString.split(" ");if(_11.length==2){minString=t.discardNumbers(_11[0]);secString=t.discardNumbers(_11[1]);}}
t.totalSeconds=_c;t.currentUTCTime=Math.floor(new Date().getTime()/1000);t.endUTCTime=Math.floor(new Date().getTime()/1000)+_c;t.updateTimeLeftTimer(false,_e);setTimeout(function(){t.secondsTick(false,_e);},1000);},secondsTick:function(_12,_13){var t=this;t.totalSeconds-=1;if(t.totalSeconds>=0){t.updateTimeLeftTimer(_12,_13);setTimeout(function(){t.secondsTick(_12,_13);},1000);}},updateTimeLeftTimer:function(_15,_16){var t=this;t.updateUTCTime=Math.floor(new Date().getTime()/1000);if((t.endUTCTime-t.updateUTCTime)!==Math.abs(t.endUTCTime-t.currentUTCTime)){t.totalSeconds=t.endUTCTime-t.updateUTCTime;}
var _18=t.totalSeconds;var _19=Math.floor(_18/60);_18-=_19*(60);var _1a=_19+t.minString+" "+t.addLeadingZero(_18)+t.secString;t.timer.innerHTML=_1a;if(t.ovlTimer!=null){t.ovlTimer.innerHTML=_1a;}
if(_19<0||(_19===0&&_18<=0)){t.timer.innerHTML="0"+t.minString+" 00"+t.secString;if(t.ovlTimer!=null){t.ovlTimer.innerHTML="0"+t.minString+" 00"+t.secString;}
if(_15){var _1b=document.location.href;if(_1b.match("&cmd=SUBMIT_VARIATION")){var _1c=_1b.replace("&cmd=SUBMIT_VARIATION","");location.replace(_1c);}else{location.reload(true);}}else{t.timer.innerHTML=_16;t.timer.className="tmLft";}}
t.currentUTCTime++;},addLeadingZero:function(_1d){return(_1d<10)?"0"+_1d:+_1d;},discardNumbers:function(_1e){return _1e.replace(/[0-9]/g,"");}}).endType();

var _cPrice,_bids,_minimumBid,_userInput,_maxBidContent,_currentUTCTime,_endUTCTime,_updateUTCTime,_totalSeconds,_timeLeft,_rTimeLeft,_msgId;var _suggestedBid,_tr,_autoFresh;var _timer,_timeStr,_minStr,_secStr,isGspItem=false;_minStr="m";_secStr="s";_autoFresh=true;if(typeof jQuery!=='undefined'){$('#userBId').bind('blur',function(){var v=$("#userBId").val();track("","EDIT_DEFAULT","imp",v);});}
function setIsGspItem(boolean){isGspItem=boolean;}
function updateFields(needUpdateTime,itemId){var priceUpdate=false,timeUpdate,viUrl;viUrl=BO._viLiteUrl;if(!needUpdateTime)
timeUpdate=true;else
timeUpdate=false;$.ajax({url:viUrl,dataType:"jsonp",data:{item:itemId,f:"json",cb:"updateOvl",dl:"4"},timeout:5000,error:function(request,status,error){hideThrobber("bidInfo","bidOverlay");updateOvlMsg();}});if(!timeUpdate){$.ajax({url:"/ajaxbidding?cmd=UPDATE_TIME",data:{itemId:itemId},success:function(data){var gspinfo=vjo.Registry.get("gspinfo");$('#ovlTimeLeft').html(data);if(typeof gspinfo!='undefined'&&typeof gspinfo.get('importCost')!='undefined'&&$.trim(gspinfo.get('importCost')).length>0){$("#importChargeVl").html(gspinfo.get('importCost'));}}});}}
function enableContentDiv(id,maskId,itemId,maxBid,site,needUpdateTime,url,symbol,pageId,source,isAndroid){if(BO==undefined)
return;BO._isFirstStep=true;_autoFresh=true;$(".lglmsg").addClass("hidden");if($("#ovlBidBtn").is(':disabled')==true)
$("#ovlBidBtn").removeAttr("disabled");$("#ovlBidBtn").removeClass();$("#ovlBidBtn").addClass("btn primary");if(_totalSeconds>300||_totalSeconds==undefined)
changeBtnValue("ovlCancelBtn",getMessage("CANCEL"));else
changeBtnValue("ovlCancelBtn",getMessage("CLOSE"));$("#ovlTitle").html(getMessage("PL_TITLE"));$('#ovlMsg').hide();if(BO._userMaxBid==undefined)
BO._userMaxBid=getNumber(maxBid);$('#userBId').removeClass("ovlBtnHl");$('#'+maskId).show();showDiv("bidOverlay","mask");showThrobber("bidInfo","bidOverlay");_userInput="";updateFields(needUpdateTime,itemId,"");track(pageId,source,"page","");}
function viLiteCallback(data){var isEnd,bid,isReserve,currentPrice,maxBid,sbid,price,Is,I,reserveMet,bids,mValue,hBidder,uInputValue,cInput;Is=data[0].ViewItemLiteResponse.Item;if(Is.length!=undefined&&Is.length>0){I=data[0].ViewItemLiteResponse.Item[0];price=I.CurrentPrice.Amount;if(price>=_cPrice||_cPrice==undefined){isEnd=I.IsEnded;_tr=getTimeLeft(data);isReserve=I.IsReserve;if(isReserve!=undefined&&isReserve){reserveMet=I.IsReserveMet;if(reserveMet!=undefined&&reserveMet)
$("#ovlRMsg").hide();}
currentPrice=I.CurrentPrice.MoneyStandard;if(BO._symbol==undefined)
BO._symbol=getSymbol(currentPrice);_cPrice=I.CurrentPrice.Amount;bids=I.BidCount;if(bids>_bids||bids==1||_bids==undefined){_bids=I.BidCount;if(parseInt(_bids)===1){$('#priceL').html(getMessage("CURRENT_BID"));$('#ovlpriceL').html(getMessage("CURRENT_BID"));}
$("#bidCountId").html(_bids);}
_minimumBid=I.MinimumToBid.Amount;_suggestedBid=I.MinimumToBid.CleanAmount;$("#ovlPrice").html(getPrice(data));bid=BO._userMaxBid;if(parseFloat(normalizeNumber(bid))>=parseFloat(_minimumBid)){maxBid=BO._symbol+BO._userMaxBid;$("#maxMsg").show();$("#normalMsg").hide();$("#maxMsg>#ovlBidMini").html(maxBid);_suggestedBid="";hBidder=true;}else{$("#maxMsg").hide();$("#normalMsg").show();$("#normalMsg>#ovlBidMini").html(I.MinimumToBid.MoneyStandard);}
uInputValue=parseFloat(normalizeNumber(_userInput));if(!$('#userBId').is(":focus")){if(isNaN(uInputValue)||uInputValue<parseFloat(_minimumBid)){cInput=parseFloat(normalizeNumber($('#userBId').val()));setValue("userBId",_suggestedBid);if((cInput<_minimumBid||(isNaN(cInput)&&_suggestedBid!=""))&&$("#bidOverlay").css('display')!="none"){$('#userBId').addClass("ovlBtnHl");setTimeout(function(){$('#userBId').removeClass("ovlBtnHl");},2000);}}
else{$('#userBId').val(_userInput);}}}}}
function openOvl(){BO._isFirstStep=true;if($("#ovlBidBtn").is(':disabled')==true)
$("#ovlBidBtn").removeAttr("disabled");$("#ovlBidBtn").removeClass();$("#ovlBidBtn").addClass("btn primary");if(_totalSeconds>300||_totalSeconds==undefined)
changeBtnValue("ovlCancelBtn",getMessage("CANCEL"));else
changeBtnValue("ovlCancelBtn",getMessage("CLOSE"));$("#ovlTitle").html(getMessage("PL_TITLE"));$('#mask').show();showDiv("bidOverlay","mask");}
function updateOvl(data){viLiteCallback(data);hideThrobber("bidInfo","bidOverlay");updateOvlMsg();}
function showThrobber(infoId,cId){$("#"+infoId).css('visibility','hidden');$("#"+cId).addClass('throbber').removeClass('empty');}
function hideThrobber(infoId,cId){$("#"+infoId).css('visibility','visible');$("#"+cId).addClass('empty').removeClass('throbber');}
function disableContentDiv(id,maskId){var divId=document.getElementById(id);if(divId){divId.style.display="none";}
var maskIdE=document.getElementById(maskId);if(maskIdE){maskIdE.style.display="none";}
if(BO._isAndroid2)
location.hash='#'+BO._msgId;}
function removeSymbol(price){price=price+'';if(BO._local=="US"&&price.indexOf('US')!=-1){return price.replace("US","");}
return price;}
function getNumber(price){return price.replace(/[^\d^\.^\,]/g,"");}
function cancel(){var gspinfo=vjo.Registry.get("gspinfo");if(BO._isFirstStep){disableContentDiv("bidOverlay","mask");_autoFresh=false;track("","CANCEL_BID.CLICK","imp","");$(".lglmsg").addClass("hidden");return;}else{BO._isFirstStep=true;changeUi(undefined);}
if(typeof gspinfo!='undefined'&&typeof gspinfo.get('importCost')!='undefined'&&$.trim(gspinfo.get('importCost')).length>0){$("#impCharge").html(gspinfo.get('importCost'));}}
function getImportCost(itemId){if(typeof vjo.Registry.get("gspinfo")!="undefined"){var gspinfo=vjo.Registry.get("gspinfo");$.ajax({url:"/ajaxbidding?cmd=UPDATE_IMPORT_CHARGE",data:{itemId:itemId,maxBid:$("#userBId").val(),seed:$("#dynSeed").val()},success:function(data){var o=JSON.parse(data);$("#importChargeVl").html(o.importcost);$("#updatedImporCost").val(o.importcost);}})}}
function bidSubmit(maxBid,binPrice,itemId){if(BO._isFirstStep){$(".lglmsg").removeClass("hidden");if(BO._binAvaiable==undefined&&parseFloat(binPrice)!=NaN)
BO._binAvaiable=true;var msg,R;R=validateInput(binPrice)
if(R!=undefined&&!R.isValid!=undefined){if(!R.isValid&&R.msg!=undefined){$('#ovlMsg').html(R.msg);$('#ovlMsg').removeClass();$('#ovlMsg').addClass('msg rdbg rdtxt');$(".lglmsg").addClass("hidden");$('#ovlMsg').show();if(_suggestedBid!=undefined&&R.pre){$('#userBId').val(_suggestedBid);}
if(!R.pre){$('#userBId').val("");}}
else{BO._isFirstStep=false;getImportCost(itemId);$('#ovlMsg').hide();_userInput=$('#userBId').val();_maxBidContent=$("#ovlMaxBid").html();changeUi(undefined);track("","PLACE_BID.CLICK","page","");}}}else{showThrobber("bidInfo","bidOverlay");var seed=$('#dynSeed').val();var confirmedImportCost=$("#updatedImporCost").val();$.ajax({url:"/ajaxbidding?cmd=PLACE_BID",data:{itemId:itemId,maxBid:_userInput,seed:seed},success:function(data){hideThrobber("bidInfo","bidOverlay");try{var R,errorMsg,msg,toBid;R=JSON.parse(data);if(R!=null&&R.success!=undefined){_userInput="";BO._isFirstStep=true;if(R.uBidValue!=undefined){BO._userMaxBid=getNumber(R.uBidValue);}
if(R.success.toLowerCase()==='true'){roiTracking(R.roiUrl);BO._bidCount++;BO._hasBid=true;changeUi(undefined);updateVi(R);if(_totalSeconds==undefined||_totalSeconds>300){disableContentDiv("bidOverlay","mask");}
else{msg=R.msg;if(msg!=undefined&&msg!=null){$('#ovlMsg').html(msg);$("#ovlMsg").removeClass();$("#ovlMsg").addClass('msg grbg grtxt');$('#ovlMsg').show();}
toBid=R.toBid;if(toBid!=null&&toBid!=undefined&&toBid!=""){$("#ovlBidMini").html(toBid);$('#userBId').val(getNumber(toBid));}else{maxBid=BO._symbol+BO._userMaxBid;$("#maxMsg").show();$("#normalMsg").hide();$("#maxMsg>#ovlBidMini").html(maxBid);}}}
if(R.success.toLowerCase()==='false'){if(R.updateVi!=undefined&&R.updateVi=="true"){updateVi(R);}
errorMsg=R.errMsg;toBid=R.toBid;$.ajax({url:BO._viLiteUrl,dataType:"jsonp",data:{item:itemId,f:"json",cb:"updateAll",dl:"4"},timeout:5000,error:function(request,status,error){updateOverlay(R);$('#ovlBidMini').html(toBid);}});if(errorMsg!=""&&errorMsg!=null&&errorMsg!=undefined){$('#ovlMsg').html(errorMsg);$("#ovlMsg").removeClass();$("#ovlMsg").addClass('msg rdbg rdtxt');$('#ovlMsg').show();}
if(toBid!=null&&toBid!=undefined&&toBid!=""){$("#ovlBidMini").html(toBid);$('#userBId').val(getNumber(toBid));}
if(R.disableBtn=='true'){changeBtnValue("ovlCancelBtn",getMessage("CLOSE"));$("#ovlBidBtn").attr("disabled","disabled");}
changeUi(toBid);}
if(R&&typeof R!="undefined"&&R.import_charge&&typeof R.import_charge!='undefined'&&$.trim(R.import_charge).length>0){$("#impCharge").html(R.import_charge);vjo.Registry.get("gspinfo").set("importCost",R.import_charge);}}}catch(e){BO._isFirstStep=true;changeUi(undefined);}},});}}
function changeUi(toBid){if(BO._isFirstStep){$(".lglmsg").addClass("hidden");changeBtnValue("ovlBidBtn",getMessage("PLACE_BID"));if(_totalSeconds>300||_totalSeconds==undefined)
changeBtnValue("ovlCancelBtn",getMessage("CANCEL"));else
changeBtnValue("ovlCancelBtn",getMessage("CLOSE"));$("#ovlTitle").html(getMessage("PL_TITLE"));if(_maxBidContent!=undefined){$("#ovlMaxBid").html(_maxBidContent);}
if(toBid!=undefined){$("#ovlBidMini").html(toBid);$('#userBId').val(getNumber(toBid));}
else if(_userInput!=undefined){$('#userBId').val(_userInput);}
else if(_suggestedBid!=undefined){$('#userBId').val(_suggestedBid);}
if(parseInt(_bids)===1){$('#priceL').html(getMessage("CURRENT_BID"));$('#ovlpriceL').html(getMessage("CURRENT_BID"));}
$('#ovlLMsg').hide();$('#uMsg').show();updateOvlMsg();}else{$('#uMsg').hide();$('#ovlLMsg').show();$("#ovlMaxBid").html(getLocalPrice(_userInput));$("#ovlMaxBid").css("color","#0096D6");changeBtnValue("ovlBidBtn",getMessage("CONFIRM"));changeBtnValue("ovlCancelBtn",getMessage("CHANGE_BID"));$("#ovlTitle").html(getMessage("REVIEW_TL"));}}
function updateVi(result){var timeLeft=result.time,bidCounts,currentPrice,msg,hasBin,reserveMet,userBid,isEnd,mId;isEnd=result.end;if(isEnd==="true"){reloadPage();}
if(timeLeft!=undefined&&timeLeft!=null&&timeLeft!=""&&_totalSeconds>3600)
$('#timeLeftId').html(timeLeft);bidCounts=result.bidCountId;if(bidCounts!=undefined&&bidCounts!=null&&bidCounts!=""){$('#bidCountId').html(bidCounts);if(parseInt(bidCounts)===1){$('#priceL').html(getMessage("CURRENT_BID"));}}
currentPrice=result.curPriceId;if(currentPrice!=undefined&&currentPrice!=null&&currentPrice!=""){$('#curPriceId').html(currentPrice);}
msg=result.msg;if(msg!=undefined&&msg!=null&&msg!=""){mId=BO._msgId;$('#msgId').html(msg);$('#'+mId).removeClass();$('#'+mId).show();var msgType=result.msgType;if(result.success!="true"||msgType==="alert"){$('#'+mId).addClass('msgImg rdbg rdtxt');}else
$('#'+mId).addClass('msgImg grbg grtxt');}
hasBin=result.binAvaiable;if(hasBin=="false"||hasBin==undefined){BO._binAvaiable=false;$("#topBuy").hide();$("#buyBtnId").hide();$("#binPriceRowId").hide();}
reserveMet=result.reserveMet;if(reserveMet=="true"){$("#reserveMsgId").hide();}
userBid=result.userBid;if(userBid!=undefined&&userBid!=null&&userBid!=""){if($("#maxBidRow").css('display')=="none")
$("#maxBidRow").show();$("#maxBidId").html(userBid);}}
function reloadPage(){var para,newLoc,currLoc=document.location.href;if(currLoc.match("&from=videsc")){para="&from=videsc";}
if(currLoc.match("&from=authbid")){para="&from=authbid";}
if(para!==undefined){showProgress();newLoc=currLoc.replace(para,"");setTimeout(function(){location.replace(newLoc);},3000);}else{showProgress();setTimeout(function(){location.reload(true);},3000);}}
function validateInput(binPrice){var reg,uMaxBid,valid,msg,result,p,reg1,userInput;reg=/^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{0,2})?$/;reg1=/^[\.][0-9]{0,2}$/;if(isEuropean()){reg=/^[+-]?[0-9]{1,3}(?:.?[0-9]{3})*(?:\,[0-9]{0,2})?$/;reg1=/^[\,][0-9]{0,2}$/;}
userInput=$('#userBId').val();valid=true;p=true;uMaxBid=parseFloat(normalizeNumber(BO._userMaxBid));if(!reg.test(userInput)&&!reg1.test(userInput)){if(!isNaN(uMaxBid)&&uMaxBid>=parseFloat(_minimumBid))
msg=getMessage("INVALID_INPUT");else
msg=getMessage("AJAX_INVALID_INPUT");valid=false;}else if(BO._binAvaiable&&binPrice!=""&&parseFloat(binPrice)>0&&parseFloat(normalizeNumber(userInput))>=parseFloat(binPrice)){msg=getMessage("BID_GREATER_BIN");valid=false;}else if(BO._userMaxBid!=undefined&&uMaxBid>=0&&parseFloat(normalizeNumber(userInput))<=uMaxBid){msg=getMessage("BID_MORE");valid=false;p=false;}else if(parseFloat(normalizeNumber(userInput))<parseFloat(_minimumBid)){msg=getMessage("BID_MORE1");valid=false;}
result={msg:msg,isValid:valid,pre:p};return result;}
function changeBtnValue(id,value){$('#'+id).val(value);}
function getUpdateInterval(timeLeft){var hasBid=BO._hasBid;if(hasBid!=undefined&&hasBid)
return interval[3];if(timeLeft>=5*60&&timeLeft<60*60)
return interval[0];if(timeLeft>=2*60&&timeLeft<5*60)
return interval[1];if(timeLeft>=60&&timeLeft<2*60)
return interval[2];if(timeLeft>0&&timeLeft<60)
return interval[3];}
function getTimeLeft(data){var t,Is;Is=data[0].ViewItemLiteResponse.Item;if(Is.length!=undefined&&Is.length>0){var I=data[0].ViewItemLiteResponse.Item[0],T,d,h,m,s;T=I.TimeLeft;d=0;h=0;m=0;s=0;if(T.DaysLeft!=undefined)
d=T.DaysLeft;if(T.HoursLeft!=undefined)
h=T.HoursLeft;if(T.MinutesLeft!=undefined)
m=T.MinutesLeft;if(T.SecondsLeft!=undefined)
s=T.SecondsLeft;t=s+m*60+h*3600+d*86400;}
return t;}
function autoRefresh(timeLeft,itemId,url,symbol,userBid){_totalSeconds=timeLeft;_currentUTCTime=Math.floor(new Date().getTime()/1000);_endUTCTime=Math.floor(new Date().getTime()/1000)+timeLeft;BO._symbol=symbol;if(userBid!=undefined&&userBid!=""&&userBid!="null"){BO._userMaxBid=getNumber(userBid);}
var interval=getUpdateInterval(timeLeft);setTimeout(function(){refresh(interval,itemId,url);},interval*1000);}
function refresh(interval,itemId,url){var rUrl;_totalSeconds=_totalSeconds-interval;if(_totalSeconds>=0){_updateUTCTime=Math.floor(new Date().getTime()/1000);if((_endUTCTime-_updateUTCTime)!==Math.abs(_endUTCTime-_currentUTCTime)){_totalSeconds=_endUTCTime-_updateUTCTime;}
rUrl=update(itemId,url);var interval=getUpdateInterval(_totalSeconds);setTimeout(function(){refresh(interval,itemId,rUrl);},interval*1000);}}
function update(itemId,url){var callback,rUrl;rUrl=url;callback="updateAll";showSmallThrobber();if(url!=undefined&&url.indexOf("http")!=-1){$.ajax({url:url,dataType:"jsonp",data:{item:itemId,cb:callback,dl:"4"},timeout:5000,error:function(request,status,error){hideSmallThrobber();}});}else{$.ajax({url:url,data:{itemId:itemId,maxBid:BO._userMaxBid},success:function(data){try{var result=JSON.parse(data);if(result!=null&&result.success!=undefined){if(result.success.toLowerCase()==='true'){updateVi(result);if($("#bidOverlay").css('display')=='none'){updateOverlay(result);}
if(result.url!=undefined)
rUrl=result.url;else
rUrl=BO._viLiteUrl;}}}catch(e){}
hideSmallThrobber();},});}
_rTimeLeft=getUpdateInterval(_timeLeft);return rUrl;}
function userRefresh(itemId,url){update();trackUserAction("ajax_userRefresh");}
function showSmallThrobber(){$(".fr").css("display","block")}
function hideSmallThrobber(){$(".fr").css("display","none")}
function viUpdate(data){var Is,I,cp,C,M,price,bids,mValue,mId;Is=data[0].ViewItemLiteResponse.Item;if(Is.length!=undefined&&Is.length>0){I=data[0].ViewItemLiteResponse.Item[0];C=I.CurrentPrice;price=C.Amount;if(price>=_cPrice||_cPrice==undefined){cp=C.MoneyStandard;_cPrice=C.Amount;M=I.MinimumToBid;_minimumBid=M.Amount;_suggestedBid=M.CleanAmount;if(BO._symbol==undefined)
BO._symbol=getSymbol(currentPrice);bids=I.BidCount;if(bids>_bids||bids==1||_bids==undefined){_bids=I.BidCount;$("#bidCountId").html(_bids);}
$("#curPriceId").html(getPrice(data));mValue=parseFloat(normalizeNumber(BO._userMaxBid));if(mValue<_cPrice&&BO._userMaxBid!=undefined&&!isNaN(mValue)){mId=BO._msgId;$('#msgId').html(getMessage("BID_OUTBID"));$('#'+mId).removeClass();$('#'+mId).show();$('#'+mId).addClass('msgImg rdbg rdtxt');}}}}
function updateAll(data){viUpdate(data);viLiteCallback(data);updateOvlMsg();hideSmallThrobber();}
function updateOvlMsg(){var bid,mValue,mId;bid=BO._userMaxBid;mId=BO._msgId;mValue=parseFloat(normalizeNumber(bid));if(mValue<_cPrice&&BO._userMaxBid!=undefined&&!isNaN(mValue)){if(BO._isFirstStep){$('#ovlMsg').html(getMessage("OVL_OUT_BID"));$("#ovlMsg").removeClass();$("#ovlMsg").addClass('msg rdbg rdtxt');$('#ovlMsg').show();}
$('#msgId').html(getMessage("BID_OUTBID"));$('#'+mId).removeClass();$('#'+mId).show();$('#'+mId).addClass('msgImg rdbg rdtxt');if($("#bidOverlay").css('display')=='none'&&_autoFresh){openOvl();}}}
function getPrice(data){var p,Is;Is=data[0].ViewItemLiteResponse.Item;if(Is.length!=undefined&&Is.length>0){var I=data[0].ViewItemLiteResponse.Item[0],price,cp;price=I.CurrentPrice.MoneyStandard;if(BO._local=="US")
p=removeSymbol(price);if(I.LocalCurrentPrice!=undefined&&I.LocalCurrentPrice.MoneyStandard!=undefined){cp=I.LocalCurrentPrice.MoneyStandard;p=price.concat(" (").concat(cp).concat(")");}}
return p;}
function getSymbol(str){if(str!=undefined){var sym=str.replace(/[\d\.\, \t]/g,"");if(BO._local=="US")
sym=sym.replace("US","");return sym;}
return"";}
function getMessage(id){if(bidMsg!=undefined){for(var i=0;i<bidMsg.length;i++){if(bidMsg[i].id===id){return bidMsg[i].msg;}}}}
function updateOverlay(result){var timeLeft=result.time,currentPrice;if(timeLeft!=undefined&&_totalSeconds>3600){$('.vfw').html(timeLeft);}
currentPrice=result.curPriceId;if(currentPrice!=undefined){$("#ovlPrice").html(currentPrice);}}
function normalizeNumber(str){if(str!=undefined&&str!=""){var p;p=str+'';if(isEuropean()){p=p.replace(/\./,"");p=p.replace(/\,/,".");}
return p.replace(/\,/,"");}
return str;}
function convertToLocal(str){if(str!=undefined&&str!=""){var p;p=str+'';if(isEuropean()){p=p.replace(/\./,",");}
return p;}
return str;}
function removeComma(str){if(str!=undefined){str=str+'';return str.replace(/\,/,"");}}
function isEuropean(){var isEuropean=false;if(BO._local=="DE"||BO._local=="FR"||BO._local=="IT"||BO._local=="ES"||BO._local=="AT"||BO._local=="CH"||BO._local=="NL"){isEuropean=true;}
return isEuropean;}
function setValue(id,v){if(isEuropean())
$('#'+id).val(v);else
$('#'+id).val(removeComma(v));}
function setAttr(v,id,name){if(isEuropean())
$('#'+id).attr(name,v);else
$('#'+id).attr(name,removeComma(v));}
function getLocalPrice(str){var cInput,nf;cInput="";if(isEuropean()){nf=addZero(str,',');}else{nf=addZero(str,'.');}
if(BO._symbol!=undefined){if(BO._local=="FR"){cInput=nf.concat(" ").concat(BO._symbol);}else if(BO._symbol.indexOf("$")!=-1){cInput=cInput.concat(BO._symbol).concat(nf);}else{cInput=cInput.concat(BO._symbol).concat(" ").concat(nf);}}else{cInput=nf;}
return cInput;}
function showDiv(id,maskId){var left,top,h;h=getHeight();left=window.pageXOffset+20;$('#'+id).css("left",left+"px");if(typeof BO!=undefined&&BO._isAndroid2!=undefined&&BO._isAndroid2){top=h-window.screen.height+0;$('#'+id).css("top",top+"px");}else{top=window.pageYOffset+40;$('#'+id).css("top",top+"px");}
$('#'+id).show();$("#"+maskId).height(h);if(typeof BO!=undefined&&BO._isAndroid2)
location.hash='#'+id;}
function adjustMaskHeight(id){var h;h=getHeight();$("#"+id).height(h);}
function getHeight(){return Math.max($(document).height(),$(window).height(),document.documentElement.clientHeight);};function getScreenHeight(){xHeight=null;if(window.screen!=null)
xHeight=window.screen.availHeight;if(window.innerHeight!=null)
xHeight=window.innerHeight;if(document.body!=null)
xHeight=document.body.clientHeight;return xHeight;}
function roiTracking(url){try{var i=document.createElement("img");url=url.replace(/&amp;/g,"&");i.src=url;i.border=0;i.height=0;i.style.display='none';document.body.appendChild(i);}catch(e){return;}}
function startTimer(time){var tmr,timeArr;tmr=$("#timeleftid").html();if(tmr!=undefined){_timeStr=tmr;timeArr=_timeStr.split(" ");if(timeArr.length==2){_minStr=discardNumbers(timeArr[0]);_secStr=discardNumbers(timeArr[1]);}}
_timeLeft=time;_currentUTCTime=Math.floor(new Date().getTime()/1000);_endUTCTime=Math.floor(new Date().getTime()/1000)+time;updateTime();setTimeout(function(){secondsTick();},1000);}
function updateTime(){_updateUTCTime=Math.floor(new Date().getTime()/1000);if((_endUTCTime-_updateUTCTime)!==Math.abs(_endUTCTime-_currentUTCTime)){_timeLeft=_endUTCTime-_updateUTCTime;}
var seconds,minutes,timeStr,currLoc,newLoc,para,rTl;seconds=_timeLeft;minutes=Math.floor(seconds/60);seconds-=minutes*(60);timeStr=minutes+_minStr+" "+addLeadingZero(seconds)+_secStr;$("#timeleftid").html(timeStr);$('.vfw').html(timeStr);if(minutes<0||(minutes===0&&seconds<=0)){timeStr='0'+_minStr+" 00"+_secStr;$("#timeleftid").html(timeStr);$('.vfw').html(timeStr);currLoc=document.location.href;if(currLoc.match("&from=videsc")){para="&from=videsc";}
if(currLoc.match("&from=authbid")){para="&from=authbid";}
if(para!==undefined){showProgress();newLoc=currLoc.replace(para,"");setTimeout(function(){location.replace(newLoc);},3000);}else{showProgress();setTimeout(function(){location.reload(true);},3000);}}
rTl=_rTimeLeft;if(rTl>=0)
$("#uTimer").html(rTl);else
_rTimeLeft=getUpdateInterval(_timeLeft);_currentUTCTime++;}
function showProgress(){if($("#bidOverlay").css('display')=='none'){$("#bidOverlay").show();}
showThrobber("bidInfo","bidOverlay");$("#ovlTitle").html(getMessage("BID_END_MSG"));$("#ovlTitle").css('visibility','visible');}
function secondsTick(){_timeLeft-=1;if(_rTimeLeft==undefined){_rTimeLeft=getUpdateInterval(_timeLeft);}
if(_timeLeft>=0){updateTime();_rTimeLeft-=1;setTimeout(function(){secondsTick();},1000);}}
function addLeadingZero(time){return(time<10)?"0"+time:+time;}
function discardNumbers(strValue){return strValue.replace(/[0-9]/g,'');}
function addZero(p,ds){var l,f;if(p==undefined)
return p;if(p.indexOf(ds)!=-1){l=p.substring(p.indexOf(ds),p.length);if(l.length==1){f=p.concat("00");}else if(l.length==2){f=p.concat("0");}else
f=p;}else{f=p.concat(ds).concat("00");}
return f;}
function track(pageId,linkId,type,uInput){if(TO==undefined||TO.rover==undefined)
return;linkId=linkId+"";var lv,rover,price,tr,cachebuster,pId,trknvp,i,bc,cprice,sc,ba,page;cachebuster=Math.round(new Date().getTime()+Math.random()*100000000000);if(linkId!=undefined&&linkId.indexOf("EDIT")!=-1){if(uInput!=undefined)
ba='&bidamt='+uInput;}
if(BO._isFirstStep){if(_cPrice!=undefined)
price='&curprice='+_cPrice;pId="2050509";}
else{if(_userInput!=undefined)
price='&bidamt='+_userInput;pId="2050510";}
if(type=="page")
page='&page='+linkId;else
page='&av='+linkId;if(_tr!=undefined)
tr='&tr='+_tr;if(_bids!=undefined)
bc='&bc='+_bids;if(typeof TO.sc!=undefined)
sc='&sc='+getNumber(TO.sc+"");lv='ai=3564'+'&lt='+getLocalTime()+'&presMode=eBay&an=clickthru'+page+'&leaf='+TO.leaf+'&shipsiteid='+TO.shipsiteid+'&itm='+TO.itm+sc;if(bc!=undefined)
lv=lv+bc;if(tr!=undefined)
lv=lv+tr;if(price!=undefined)
lv=lv+price;if(ba!=undefined)
lv=lv+ba;lv=encodeURIComponent(lv);rover=TO.rover+'roverimp/0/0/14?imp='+pId+'&lv='+lv+'&ts='+cachebuster;if(rover!=undefined){i=document.createElement("img");i.src=rover;i.border=0;i.height=0;i.style.display='none';document.body.appendChild(i);}}
function trackBids(){if(TO==undefined||TO.rover==undefined||BO==undefined||BO._bidCount==undefined||BO._bidCount==0)
return;var bc,lv,rover,cachebuster,i,sc;cachebuster=Math.round(new Date().getTime()+Math.random()*100000000000);bc='&bid_placed='+BO._bidCount;if(typeof TO.sc!=undefined)
sc='&sc='+getNumber(TO.sc+"");lv=encodeURIComponent('ai=3564'+'&lt='+getLocalTime()+'&presMode=eBay&an=clickthru&leaf='+TO.leaf+'&shipsiteid='+TO.shipsiteid+'&itm='+TO.itm+sc+bc);rover=TO.rover+'roverimp/0/0/14?imp=5408'+'&lv='+lv+'&ts='+cachebuster;if(rover!=undefined){i=document.createElement("img");i.src=rover;i.border=0;i.height=0;i.style.display='none';document.body.appendChild(i);}}
function getLocalTime(){var now,indexOfZ;now=new Date().toISOString();indexOfZ=now.indexOf('Z');if(indexOfZ!==-1){now=now.substring(0,indexOfZ);}
return now;}
function toggleLearnOL(){var ele=document.getElementById("lmore");var ele2=document.getElementById("cvrOL");if(ele.style.display=="block"){ele.style.display="none";ele2.style.display="none";}
else{ele.style.display="block";ele2.style.display="block";}
resetHeights();}
function autoPosition(id){var left,top,h;h=getHeight();left=window.pageXOffset+20;$('#'+id).css("left",left+"px");if(BO._isAndroid2!=undefined&&BO._isAndroid2){top=h-window.screen.height+0;$('#'+id).css("top",top+"px");}
$('#'+id).show();if(BO._isAndroid2)
location.hash='#'+id;}
if(typeof jQuery!=='undefined'){$(document).ready(function(){$('.em_thmb img').bind('click',function(){var src=this.src;src=src.replace('1.JPG','3.JPG');IP.shwPrvw(src);});});}
var resetHeights=function(){$('#cvrOL').height($(document).height());};

var _vSelected,_mskuSource,_avaiable,_itemId,_buck,_shipping,_surcharge,_options,_btn;function showBuyOvl(id,_2,_3){$("#ovlMsgRow").hide();if(typeof _buck!=undefined){$("#ovlbucks").html(_buck);}
if(_shipping!=undefined){$("#ovlshipping").html(_shipping);}
if(_surcharge!=undefined){$("#importChargeVl").html(_surcharge);}
$("#quantity").val("1");$("#"+_2).show();showDiv("buyOvl","buyMsk");_itemId=_3;}
function hideOvl(id,_5){var i,ol;$("#"+id).hide();$("#"+_5).hide();if(typeof BO!=undefined&&BO._isAndroid2){location.hash="#"+BO._msgId;}}
function cancelMsku(id,_9){var i,ol;hideOvl(id,_9);if(_options!=undefined){ol=_options.length;for(i=0;i<ol;i++){removeOptions(_options[i][0]);addOptions(_options[i][0],_options[i][1],_options[i][2]);}}
if(_btn!=undefined&&_btn=="disabled"){$("#submitVar").attr("disabled","disabled");$("#submitVar").removeClass();$("#submitVar").addClass("btn secondary");}else{$("#submitVar").removeClass();$("#submitVar").addClass("btn primary");$("#submitVar").removeAttr("disabled");}}
function buySubmit(id,_d){var _e,_f;_e=$("#quantity").val();if(_e==undefined){_e=1;}
if(isNaN(parseInt(_e))){_f=getMessage("INVALID_INPUT");$("#buyMsg").html(_f);$("#ovlMsgRow").show();}else{showThrobber("buyInfo","buyOvl");var _10=$("#binDyn").val();$.ajax({url:"/buy?cmd=BUY",data:{itemId:id,quantity:_e,autoPay:_d,seed:_10},success:function(_11){try{var R,msg,url;R=JSON.parse(_11);if(R.success.toLowerCase()==="false"){hideThrobber("buyInfo","buyOvl");msg=R.errMsg;if(msg!=undefined&&msg!=""){$("#buyMsg").html(msg);$("#ovlMsgRow").show();}}
if(typeof R.surchange!="undefined"){_surCharge=$("#importChargeVl").html();$("#importChargeVl").html(R.surchange);}
if(R.success.toLowerCase()==="true"){url=decodeURIComponent(R.url);url=url.replace(/&amp;/g,"&");hideThrobber("buyInfo","buyOvl");hideOvl("buyOvl","buyMsk");document.location=url;}}
catch(e){}},});}}
function openMsku(id,_16,_17,_18){_itemId=_18;if(_vSelected&&_17=="buy"){showBuyOvl("buyOvl","buyMsk",_18);}else{$("#"+_16).show();showDiv("mskuOvl","mskuMsk");_mskuSource=_17;if(_17=="buy"||_17=="fromBuy"){changeBtnValue("submitVar",getMessage("CONTINUE"));}else{changeBtnValue("submitVar",getMessage("APPLY"));}
backupOption();_btn=$("#submitVar").attr("disabled");}}
function mskuSubmit(_19,_1a){var _1b,sel,_1d,_1e,_1f={};_1b=document.getElementsByTagName("select");for(var i=0;i<_1b.length;i++){sel=_1b[i];_1d=sel.selectedIndex;_1f[sel.name]=sel.options[_1d].value;}
_1f["itemId"]=_19;showThrobber("mskuInfo","mskuOvl");$.ajax({url:"/selectMsku?cmd=SELECT",data:_1f,success:function(_21){hideThrobber("mskuInfo","mskuOvl");try{var R,qty,_24,v;R=JSON.parse(_21);if(R.success.toLowerCase()==="true"){qty=R.quantity;if(typeof qty!=undefined){_avaiable=qty;$("#qty").html(qty);if(parseInt(qty)===1){$("#buyQty").html(qty);$("#quantity").val(qty);$("#trQty").hide();}}
_24=R.price;if(typeof _24!=undefined){$("#curPriceId").html(_24);$("#buyPrice").html(_24);}
v=R.variation;if(typeof variation!=undefined){$("#variation").text(v);$("#editVariation").text(v);$("#editlnk").html(getMessage("EDIT"));$("#editlnk").addClass("edit");}
hideOvl("mskuOvl","mskuMsk");$("#msgId").hide();_vSelected=true;if(_mskuSource!=undefined&&(_mskuSource==="buy"||_mskuSource==="fromBuy")){showBuyOvl("buyOvl","buyMsk");}}}
catch(e){}},});}
function buyUpdate(_26,_27,_28){var _29,msg;if(_avaiable==undefined){_avaiable=_28;}
_29=$("#quantity").val();if(_29===""){return;}
showSmallThrobber();if(isNaN(parseInt(_29))){msg=getMessage("INVALID_INPUT");}
if(typeof _avaiable!=undefined&&parseInt(_29)>_avaiable){msg=getMessage("INVALID_INPUT");}
if(msg!=undefined){$("#buyMsg").html(msg);$("#ovlMsgRow").show();}else{$("#ovlMsgRow").hide();$.ajax({url:"/buy?cmd=UPDATE",data:{itemId:_itemId,quantity:_29,updateBonus:_26,updateGps:_27},success:function(_2b){try{var R,s,_2e,_2f;R=JSON.parse(_2b);s=R.shipping;if(s!=undefined){if(_shipping==undefined){_shipping=$("#ovlshipping").html();}
$("#ovlshipping #shippingCostHolder").html(s);}
if(typeof R.surchange!="undefined"){if(_surcharge==undefined){_surcharge=$("#importChargeVl").html();}
$("#importChargeVl").html(R.surchange);}
_2f=R.bonus;if(_2f!=undefined){if(_buck==undefined){_buck=$("#ovlbucks").html();}
$("#ovlbucks").html(_2f);}}
catch(e){}
hideSmallThrobber();},});}}
function editMsku(id,_31,_32,_33){hideOvl("buyOvl","buyMsk");openMsku(id,_31,_32,_33);}
function backupOption(){var _34,_35,_36,_37,i,j,sl,_3b;_34=document.getElementsByTagName("select");_options=[];for(i=0;i<_34.length;i++){_35=_34[i];_36=[];sl=_35.options.length;for(j=0;j<sl;j++){_37=_35.options[j],_3b=_37.getAttribute("id");optObj=new Option(_37.text,_37.value,false,false);optObj.id=_3b;_36[j]=optObj;}
_options[i]=[_35.id,_36,_35.selectedIndex];}
_btn=$("#submitVar").attr("disabled");}
function backupStates(){backupOption();_mskuSource="buy";}
function removeOptions(id){var o,sl;o=document.getElementById(id);sl=o.options.length-1;for(var j=sl;j>=0;j--){o.options[j]=null;}}
function addOptions(id,_41,i){var o,sl;o=document.getElementById(id);sl=_41.length-1;for(var j=sl;j>=0;j--){o.options[j]=_41[j];o.options[j].selected=(i==j)?"selected":false;}
o.selectedIndex=i;}

var windowWidth=document.getElementsByTagName("body")[0].innerWidth;var iframeWidth="";addLoadEvent=function(_1){var _2=window.onload;if(typeof window.onload!=="function"){window.onload=_1;}else{window.onload=function(){if(_2){_2();}
_1();};}};addLoadEvent(function(){window.addEventListener("message",receiver,false);});function isAndroid(){var ua=navigator.userAgent;if(ua.indexOf("Android")!==-1){return true;}
return false;}
function receiver(e){var x=String(e.data);var _6=x.split(",");var _7=window.innerWidth;var _8=_6[0];var _9=_6[1];var _a=_7/_9;var _b=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);document.getElementsByTagName("html")[0].width=_9;document.getElementsByTagName("html")[0].style.width=_9+"px";document.getElementById("desc_iframe").height=_8;document.getElementById("desc_iframe").style.height=_8+"px";if(_9>(_7)){this.resizeElements(_a,_9);}
document.getElementById("desc_iframe").style.width="99%";document.getElementById("desc_iframe").width="99%";viewport=document.querySelector("meta[name=viewport]");if(!_b&&!this.isAndroid()){document.getElementsByTagName("html")[0].style.overflowX="hidden";document.getElementsByTagName("body")[0].style.overflowX="hidden";viewport.setAttribute("content","width=device-width, initial-scale="+_a+", minimum-scale="+_a+", maximum-scale=5.0, user-scalable=yes");}else{viewport.setAttribute("content","width=device-width, initial-scale=1, minimum-scale=0.1, maximum-scale=5.0, user-scalable=yes");}}
function resizeElements(_c,_d){var _e=1/_c;$("#sbHdr").css("padding",_e+"em");$(".bk").css("webkit-transform","scale("+_e+","+_e+")");$(".bk").css("padding-left",(_e*7.5)+"px");if(this.isAndroid()){$("#body").css("-webkit-transform-origin","0 0");$("#body").css("-webkit-transform","scale("+_c+","+_c+")");}}
if(typeof jQuery!=="undefined"){$(function(){if(typeof vjo.Registry.get("gspinfo")!=="undefined"&&typeof vjo.Registry.get("gspinfo").get("tcurl")!=="undefined"){var _f=vjo.Registry.get("gspinfo").get("tcurl");var _10=document.getElementsByClassName("gsp_info_icon");for(var i=0;i<_10.length;i++){_10[i].addEventListener("click",function(){if(typeof trackUserAction!=="undefined"){trackUserAction("gspIconClick");}
window.open(vjo.Registry.get("gspinfo").get("tcurl"),"_target");},false);}}});}

var IP={container:document.getElementById("imPr-wndw"),image:document.getElementById("imPr-img"),imageAnchor:document.getElementById("imAnchr"),imageArray:[],closeAncr:document.getElementById("clsAnchr"),hdr:document.getElementById("mw-hdr"),ftr:document.getElementById("mw-ftr"),closeContainer:document.getElementById("imPr-clsCntr"),prevLink:document.getElementById("imPr-prev"),nextLink:document.getElementById("imPr-next"),tpMsg:document.getElementById("imPr-tpMsg"),imgCntr:document.getElementById("imPr-imgCntr"),msgCntr:document.getElementById("imPr-msgCntr"),hdnCls:"imPr-hdn",nmW:"imPr-nmW",nmH:"imPr-nmH",zmW:"imPr-zmdW",zmH:"imPr-zmdH",zmWP:"imPr-zmdWP",zmHP:"imPr-zmdHP",zmWL:"imPr-zmdWL",zmHL:"imPr-zmdHL",hide:"imPr-hide",fxd:"imPr-fxd",currentIndex:0,zmByWdt:true,zmd:false,tpd:false,aTpd:false,aTpdCls:"imPr-tpd",wndWdt:window.innerWidth/2,wndHgt:window.innerHeight/2,currTouchX:0,currTouchY:0,trackZoom:false,cntOpn:0,cntZoom:0,dfImg:"http://pics.ebaystatic.com/aw/pics/mobile/rwap/icon_throbber_144.png",hasClass:function(_1,_2){return _1.className.match(new RegExp("(\\s|^)"+_2+"(\\s|$)"));},addClass:function(_3,_4){if(!this.hasClass(_3,_4)){_3.className+=" "+_4;}},removeClass:function(_5,_6){if(this.hasClass(_5,_6)){var _7=new RegExp("(\\s|^)"+_6+"(\\s|$)");_5.className=_5.className.replace(_7,"");}},clsPrvw:function(){if(this.zmd){var _8=this.zmWP;if(!this.zmByWdt){_8=this.zmHP;}
this.resetStatus();this.zmd=false;}
var _9=document.getElementById(this.container.getAttribute("data-prnt"));this.addClass(this.container,this.hdnCls);this.removeClass(_9,this.hdnCls);this.removeClass(this.hdr,this.hdnCls);this.removeClass(this.ftr,this.hdnCls);this.removeClass(this.tpMsg,this.hide);this.removeClass(this.closeContainer,this.fxd);this.removeClass(this.imgCntr,this.fxd);this.setImg(this.dfImg);return false;},shwPrvw:function(_a){var _b=document.getElementById(this.container.getAttribute("data-prnt"));this.removeClass(this.container,this.hdnCls);this.addClass(_b,this.hdnCls);this.addClass(this.hdr,this.hdnCls);this.addClass(this.ftr,this.hdnCls);if(iPhoneVerLess5()){window.onscroll=IP.resetFixedElements;window.onresize=IP.resetFixedElements;window.onorientationchange=function(){IP.resetFixedElements();IP.resetStatus();};IP.imageAnchor.addEventListener("click",IP.resetFixedElements,false);IP.image.ontouchstart=IP.hideFixedElements;IP.image.ontouchend=IP.showFixedElements;}else{this.addClass(this.closeContainer,this.fxd);this.addClass(this.imgCntr,this.fxd);}
var _c=this.tpMsg.offsetHeight;var _d=this.tpMsg.offsetWidth;var _e=window.innerHeight;var _f=window.innerWidth;this.tpMsg.style.top=((_e-_c)/2)+"px";this.tpMsg.style.left=((_f-_d)/2)+"px";setTimeout(function(){IP.addClass(IP.tpMsg,IP.hide);},1000);setTimeout(function(){IP.addClass(IP.tpMsg,IP.hdnCls);},1500);if(_a!==undefined){this.setImg(_a);var _10=IP.imageArray.indexOf(_a);currentIndex=_10;IP.msgCntr.children[0].innerHTML=_10+1;}else{IP.msgCntr.children[0].innerHTML=1;}
this.resize();if(history.pushState){history.pushState({},"","");window.onpopstate=function(_11){IP.clsPrvw();};}
this.trackZoom=true;this.cntOpn+=1;},hideFixedElements:function(){IP.addClass(IP.closeContainer,"opcty0");IP.addClass(IP.imgCntr,"opcty0");},showFixedElements:function(){IP.removeClass(IP.closeContainer,"opcty0");IP.removeClass(IP.imgCntr,"opcty0");},resize:function(){var _12=IP.image.offsetWidth,imageHeight=IP.image.offsetHeight;if(_12!==0&&imageHeight!==0){if((_12/imageHeight)<0.4){IP.zmByWdt=false;IP.addClass(IP.image,IP.nmH);IP.removeClass(IP.image,IP.nmW);}else{IP.zmByWdt=true;IP.addClass(IP.image,IP.nmW);IP.removeClass(IP.image,IP.nmH);}}else{IP.zmByWdt=true;IP.addClass(IP.image,IP.nmW);IP.removeClass(IP.image,IP.nmH);}},setImg:function(_13){this.image.src=_13;if(_13===IP.dfImg){IP.addClass(IP.container,"dflt");}else{if(IP.image.complete){IP.removeClass(IP.container,"dflt");}}
this.image.onload=function(){IP.resize();if(_13!==IP.dfImg){IP.removeClass(IP.container,"dflt");}};this.image.onerror=function(){triggerPageReflow();};},tglZm:function(_14,_15){var _16=_14*2,scrlY=_15*2,orient=window.orientation,wWidth=window.innerWidth,wHeight=window.innerHeight,cssWidthRange=330,cls=IP.zmWP,scrlWdt=this.wndWdt-_16,scrlHgt=this.wndHgt-scrlY,bodyWidthLeft=body.scrollWidth-wWidth,bodyHeightTop=body.scrollHeight-wHeight;if(isAndroid2()){scrlWdt=(Math.abs(scrlWdt)>bodyWidthLeft)?bodyWidthLeft:scrlWdt;scrlHgt=(Math.abs(scrlHgt)>bodyHeightTop)?bodyHeightTop:scrlHgt;}
if(typeof wWidth===undefined||wWidth<cssWidthRange){cls=IP.zmWP;if(!IP.zmByWdt){cls=IP.zmHP;}}else{cls=IP.zmWL;if(!IP.zmByWdt){cls=IP.zmHL;}}
if(IP.zmd){window.scrollTo(0,0);IP.resetStatus();IP.zmd=false;}else{IP.addClass(IP.image,cls);IP.zmd=true;window.scrollTo(Math.abs(scrlWdt),Math.abs(scrlHgt));IP.cntZoom+=1;}},tAnchrStrt:function(){this.aTpd=true;this.addClass(this.closeAncr,this.aTpdCls);window.setTimeout(function(){IP.tAnchrMv();},250);},tAnchrMv:function(){this.aTpd=false;this.removeClass(this.closeAncr,this.aTpdCls);},tAnchrEnd:function(){if(this.aTpd){this.hndlBk();this.aTpd=false;this.removeClass(this.closeAncr,this.aTpdCls);}},hndlBk:function(){if(history.pushState){window.history.back();}else{IP.clsPrvw();}
return false;},updateImageToNext:function(_17){if(IP.zmd){window.scrollTo(0,0);IP.resetStatus();IP.zmd=false;}
var _18=currentIndex,next=_17?Number(_18)+1:_18-1;if(next<0){next=IP.imageArray.length-1;}else{if(next>=IP.imageArray.length){next=0;}}
IP.setImg(IP.imageArray[next]);currentIndex=next;IP.msgCntr.children[0].innerHTML=next+1;triggerPageReflow();return false;},atchMsTchEvnts:function(){var _19=document.getElementsByClassName("em_thmb");for(i in _19){if(_19[i]&&_19[i].firstChild){var src=_19[i].firstChild.getAttribute("data-url");if(src!=null&&src!=undefined){src=src.replace("1.JPG","3.JPG");IP.imageArray.push(src);}}}
if(IP.imageArray.length>1){IP.removeClass(IP.imgCntr,IP.hdnCls);}
if(IP.msgCntr){IP.msgCntr.children[1].innerHTML=IP.imageArray.length;}
if(IP.image){IP.imageAnchor.onclick=function(_1b){IP.tglZm(_1b.pageX,_1b.pageY);return false;};}
if(IP.setImg&&IP.container){IP.setImg(IP.dfImg);}
window.onpagehide=IP.fireImageZoomTracking;window.onorientationchange=IP.resetStatus;},resetStatus:function(){if(IP.image&&IP.image!=="undefined"&&IP.image!==null){IP.removeClass(IP.image,IP.zmWP);IP.removeClass(IP.image,IP.zmHP);IP.removeClass(IP.image,IP.zmWL);IP.removeClass(IP.image,IP.zmHL);window.scrollTo(0,0);IP.zmd=false;}},resetFixedElements:function(){var _1c=window.pageXOffset,yOffset=window.pageYOffset,wWidth=window.innerWidth,wHeight=window.innerHeight;IP.closeContainer.style.position="absolute";IP.imgCntr.style.position="absolute";IP.closeContainer.style.top=(yOffset+10)+"px";IP.closeContainer.style.left=(wWidth+_1c-70)+"px";IP.closeContainer.style.right="auto";IP.imgCntr.style.top=(wHeight+yOffset-60)+"px";IP.imgCntr.style.left=(_1c-10)+"px";},addLoadEvent:function(_1d){var _1e=window.onload;if(typeof window.onload!=="function"){window.onload=_1d;}else{window.onload=function(){if(_1e){_1e();}
_1d();};}},fireImageZoomTracking:function(){var lv="lt="+getLoggingTimeStamp()+"&ai=3564&preview="+IP.cntOpn+"&mTpZm="+IP.cntZoom;if(window._sid){lv+="&site="+window._sid;}
var _20=encodeURIComponent(lv);if(IP.trackZoom){fireTrackingRover("2051122",_20);}}};IP.addLoadEvent(IP.atchMsTchEvnts);

var attachItemTeaserOnLoadEvents=function(){var _1=document.getElementById("iTmg");if(_1){_1.addEventListener("click",function(){if(IP.shwPrvw){IP.shwPrvw(this.src);}},false);}};if(typeof addLoadEvent==="function"){addLoadEvent(attachItemTeaserOnLoadEvents);}else{var addLoadEvent=function(_2){var _3=window.onload;if(typeof window.onload!=="function"){window.onload=_2;}else{window.onload=function(){if(_3){_3();}
_2();};}};addLoadEvent(attachItemTeaserOnLoadEvents);}

vjo.ctype("vjo.ebay.cmp.gsp.Gspinfo").protos({isGspItem:false,importCost:"",tcurl:"",constructs:function(_1,_2,_3){this.isGspItem=_1;this.tcurl=_3;this.importCost=_2;},toString:function(){return this.isGspItem+"|"+this.importCost+"|";},set:function(n,v){this[n]=v;},get:function(n){return this[n];},tcClickHndlr:function(_7){window.open(_7,"_blank");}}).props({instance:"",getgspInstance:function(){return vjo.ebay.cmp.gsp.Gspinfo.instance;}});

// en_US/E775/MobiAppSpec_ViewItemDsf_E77515414892_3_en_US
// b=15414892