
vjo.ctype("vjo.dsf.utils.SiteSpeedGauge").needs(["vjo.dsf.EventDispatcher","vjo.dsf.utils.URL","vjo.dsf.document.Positioning","vjo.dsf.error.ErrorHandlerManager","vjo.dsf.utils.SiteSpeed","vjo.dsf.cookie.VjCookieJar"]).props({gauge:function(){if(typeof(oGaugeInfo)!="undefined"){oGaugeInfo.ld=true;this.vj$.SiteSpeed.updateLoad();var ua=navigator.userAgent;if(ua.indexOf("Firefox/3.0")>0||(ua.indexOf("Safari")>0&&ua.indexOf("Chrome")<0)){this.send(0);}}},gaugeUnload:function(){this.send(1);},gaugeBodyLoad:function(){if(typeof(oGaugeInfo)!="undefined"){var g=oGaugeInfo;if(g.bf!=1){var et=(new Date()).getTime()-g.iST;this.vj$.SiteSpeed.addParam("ctb",et);}
var fg=this.vj$.URL.getArg(document.location.href,"ForceSiteSpeedGauge");if(fg=="true"){var _5=new Image(1,1);_5.src="http://p.ebaystatic.com/aw/pics/sitespeed/past/speedp.gif";}}},send:function(_6){if(typeof(oGaugeInfo)!="undefined"){var g=oGaugeInfo;var sg=this.vj$.SiteSpeed;if(g.ld===true){if(g.bf!=1){sg.addParam("ct21",g.ct21);if(typeof(g.aChunkInfo)!="undefined"&&g.aChunkInfo.length>1){var _9=g.aChunkInfo[0][1]-g.iST;if(_9===0){sg.addParam("ct1chnk","0");}else{sg.addParam("ct1chnk",_9);}
var _a=g.aChunkInfo[1][0]-g.aChunkInfo[0][1];if(_a===0){sg.addParam("ctidl","0");}else{sg.addParam("ctidl",_a);}
var _b=g.aChunkInfo[1][2];if(_b===0){sg.addParam("st2pt","0");}else{sg.addParam("st2pt",_b);}}
if(typeof(g.iLoadST)!="undefined"){var _c=g.iLoadST-g.iST;sg.addParam("ctbend",_c);}
var _d=document.referrer;var fg=this.vj$.URL.getArg(document.location.href,"ForceSiteSpeedGauge");var _f=this.vj$.URL.getArg(document.location.href,"forcesitespeedgauge");if(fg=="true"||_f=="true"||(_d!==null&&_d.indexOf("ebay.")>0)){if(g.ut!==null&&g.ut!==""){g.ex3=g.ex3-g.ut;if(g.ex3>0&&g.ex3<300000){sg.addParam("ex3",g.ex3);}}}}else{sg.addParam("ex1","1");}
if(_6==1){g.wt=(new Date()).getTime()-g.wt;sg.addParam("sgwt",g.wt);if(g.x!==0&&g.y!==0){var cxy="0|"+g.x+"|"+g.y;sg.addParam("cxy",cxy);}
if(g.sx===0){sg.addParam("slo","0");}else{sg.addParam("slo",g.sx);}
if(g.sy===0){sg.addParam("svo","0");}else{sg.addParam("svo",g.sy);}}else{g.wt=0;}
if(g.wt<60000*20){this.internal();}}else{sg.addParam("ex2",(new Date()).getTime()-g.iST);this.internal();}}},mXY:function(e){var g=oGaugeInfo;var p=this.vj$.Positioning;var sr=p.getScrollLeftTop();var xy=p.getEventLeftTop(e);g.x=xy[0]+sr[0];g.y=xy[1]+sr[1];},sXY:function(e){var g=oGaugeInfo;var sr=this.vj$.Positioning.getScrollLeftTop();if(g.sx<sr[0]){g.sx=sr[0];}
if(g.sy<sr[1]){g.sy=sr[1];}},internal:function(){if(typeof(oGaugeInfo)==="undefined"){return;}
var g=oGaugeInfo;if(g.sent===true){return;}
g.sent=true;var p=this.vj$.Positioning;var sg=this.vj$.SiteSpeed;sg.addParam("bw",p.getClientWidth());sg.addParam("bh",p.getClientHeight());var _1c=this.vj$.ErrorHandlerManager.dsfErrors;if(_1c.length>0){var msg="";for(var i=0;i<_1c.length;i++){if(i>0){msg+="|";}
msg+="js-err-line-"+_1c[i].lineNumber+"-msg-"+_1c[i].message;}
sg.addParam("sgbld",_1c.length);sg.addParam("emsg",msg);}
var prm=sg.getParams();var img=new Image(1,1);if(g.bf!=1){img.src=g.sUrl.replace(/&amp;/g,"&")+prm;}else{var url,idx=g.sUrl.indexOf("&st1");if(idx>0){url=g.sUrl.substring(0,idx);}else{url=g.sUrl;}
img.src=url.replace(/&amp;/g,"&")+prm;}}}).inits(function(){if(typeof(oGaugeInfo)!="undefined"){var oCJ=vjo.dsf.cookie.VjCookieJar,ed=vjo.dsf.EventDispatcher;var sbf=oCJ.readCookie("ebay","sbf"),b=(sbf)?oCJ.getBitFlag(sbf,20):0;oCJ.writeCookielet("ebay","sbf",oCJ.setBitFlag(sbf,20,1));var g=oGaugeInfo;if(g.ebox===1){g.bf=0;}else{g.bf=b;}
g.sent=false;g.ut=oCJ.readCookie("ds2","ssts");g.ld=false;g.x=0;g.y=0;g.sx=0;g.sy=0;g.wt=0;g.ex3=0;g.ct21=0;ed.addEventListener(document,"click",this.mXY,this);ed.addEventListener(window,"scroll",this.sXY,this);ed.addEventListener(window,"load",this.gauge,this);ed.addEventListener(window,"beforeunload",this.gaugeUnload,this);}}).endType();

// en_US/E775/SYS-MOBI_dsfSysJs_E77515414892_2_en_US
// b=15414892