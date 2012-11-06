
vjo.ctype("vjo.dsf.Json").endType();if(!this.JSON){JSON=function(){function f(n){return n<10?'0'+n:n;}
Date.prototype.toJSON=function(key){return this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z';};var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapeable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapeable.lastIndex=0;return escapeable.test(string)?'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==='string'){return c;}
return'\\u'+('0000'+
(+(a.charCodeAt(0))).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(typeof value.length==='number'&&!(value.propertyIsEnumerable('length'))){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+
partial.join(',\n'+gap)+'\n'+
mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value,rep);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value,rep);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+
partial.join(',\n'+gap)+'\n'+
mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
return{stringify:function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});},parse:function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+
(+(a.charCodeAt(0))).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');}};}();}

vjo.itype("vjo.dsf.IBinding").protos({serialize:function(_1){},deserialize:function(_2){}}).endType();

vjo.ctype("vjo.util.List").protos({constructs:function(_1){this.javaClass=_1||"java.util.ArrayList";this.list=[];},get:function(_2){if(this.size()>_2){return this.list[_2];}
return null;},add:function(_3){return this.list[this.size()]=_3;},remove:function(_4){var _5=this.size(),tmp=this.list,nlist=[],rv=false;for(var i=0;i<_5;i++){if(!rv&&tmp[i]===_4){rv=true;}else{nlist[nlist.length]=tmp[i];}}
this.list=nlist;return rv;},size:function(){return this.list.length;}}).endType();

vjo.ctype("vjo.util.Map").protos({constructs:function(_1){this.javaClass=_1||"java.util.HashMap";this.map={};},get:function(_2){return this.map[_2];},put:function(_3,_4){return this.map[_3]=_4;},remove:function(_5){var _6=this.map[_5];delete this.map[_5];return _6;},size:function(){var _7=0;for(var _8 in this.map){_7++;}
return _7;}}).endType();

vjo.ctype("vjo.dsf.Enc").props({unescape:vjo.NEEDS_IMPL,decodeURI:vjo.NEEDS_IMPL,decodeURIComponent:vjo.NEEDS_IMPL,encodeURIComponent:vjo.NEEDS_IMPL,encodeURI:vjo.NEEDS_IMPL}).inits(function(){vjo.dsf.Enc.unescape=window.unescape;vjo.dsf.Enc.decodeURI=window.decodeURI;vjo.dsf.Enc.decodeURIComponent=window.decodeURIComponent;vjo.dsf.Enc.encodeURIComponent=window.encodeURIComponent;vjo.dsf.Enc.encodeURI=window.encodeURI;}).endType();

vjo.ctype("vjo.dsf.Service").needs(["vjo.dsf.ServiceResponse","vjo.dsf.Enc","vjo.dsf.SvcErr","vjo.dsf.ServiceEngine","vjo.dsf.ServiceRegistry"]).props({clientInfo:null,E:null,callback:function(_1,_2){if(_1.readyState!=4){return;}
_2.response=new vjo.dsf.ServiceResponse();try{if(_1.status>=200&&_1.status<300){_2.response.data=_1.responseText;var _3=vjo.dsf.ServiceRegistry.getBinding(_2.svcConfig.respMarshalling);if(_3){_3.deserialize(_2);_2.status=1;}else{this.E.err(_2,this.E.InvRspBnd,"respMarshalling="+_2.svcConfig.respMarshalling);}}else{var _4=this.E.RqUnk;if(404===_1.status){_4=this.E.SvcPrc;}
this.E.err(_2,_4,"status="+_1.status+":readyState="+_1.readyState);}}
catch(e){this.E.err(_2,this.E.RqUnk,"status="+_1.status+":readyState="+_1.readyState);}
vjo.dsf.ServiceEngine.handleResponse(_2);delete _1.onreadystatechange;_1=null;},getXmlHttpReq:function(){var o=null;if(typeof XMLHttpRequest!="undefined"){o=new XMLHttpRequest();}else{if(window.ActiveXObject){try{o=new ActiveXObject("Microsoft.XMLHTTP");}
catch(e){o=new ActiveXObject("Msxml2.XMLHTTP");}}}
return o;},getClientInfo:function(){if(this.clientInfo){return this.clientInfo;}
var nv=navigator,agt=nv.userAgent.toLowerCase(),i=0,ver=0,b="";if(agt.indexOf("firefox")!=-1){b="Firefox";i=agt.lastIndexOf("firefox")+8;}else{if((/webkit|khtml/).test(agt)){b="Safari";i=agt.lastIndexOf("safari")+7;}else{if(typeof(window.opera)!="undefined"){b="Opera";i=agt.lastIndexOf("opera")+6;}else{if(nv.appName=="Netscape"){b="Netscape";i=agt.lastIndexOf("/")+1;}else{if(agt.indexOf("msie")!=-1){b="IE";i=agt.indexOf("msie")+4;}}}}}
if(b){ver=parseInt((b=="Opera")?window.opera.version():agt.substring(i));}
this.clientInfo=b+":"+ver+":";return this.clientInfo;},generateReqParams:function(_7){var _8="svcid="+vjo.dsf.Enc.encodeURIComponent(_7.svcId);if(_7.stok){_8+="&stok="+_7.stok;}
if(_7.pId){_8+="&pId="+_7.pId;}
if(_7.v){_8+="&v="+_7.v;}
var ma=_7.svcConfig.reqtMarshalling;_8+="&reqttype="+ma+"&resptype="+_7.svcConfig.respMarshalling;_8+="&clientType="+this.getClientInfo();_8+="&request=";if("JSCALLBACK"==ma){_8+=vjo.dsf.Enc.encodeURIComponent(JSON.stringify(_7.request));}
return _8;}}).inits(function(){this.E=this.vj$.SvcErr;}).endType();

vjo.needs("vjo.dsf.Json");vjo.ctype("vjo.dsf.JsonBinding").satisfies("vjo.dsf.IBinding").needs("vjo.dsf.Error").needs("vjo.dsf.SvcErr").needs("vjo.dsf.Message").needs("vjo.util.List").needs("vjo.util.Map").needs("vjo.dsf.ServiceResponse").needs("vjo.dsf.Service").needs("vjo.dsf.Enc").protos({serialize:function(_1){var _2="";_2+=vjo.dsf.Service.generateReqParams(_1);_2+=vjo.dsf.Enc.encodeURIComponent(JSON.stringify(_1.request));_1.rawRequest=_2;return _2;},deserialize:function(_3){var _4=_3.response.data;try{_3.response=eval("("+_4+")");this.addMethods(_3.response,vjo.dsf.ServiceResponse.prototype.addError);if(_3.response.data){this.processObj(_3.response.data);}}
catch(e){var _5=new vjo.dsf.Error();_5.id=vjo.dsf.SvcErr.Prs;_5.message="marshalling="+_3.svcConfig.respMarshalling+":responseText="+_4;_3.response.addError(_5);}},processObj:function(_6){var _7=_6.javaClass;if(_7&&_7.length>0){if(/java.util.([^\s])*List/.test(_7)){this.addMethods(_6,vjo.util.List.prototype);}else{if(/java.util.([^\s])*Map/.test(_7)){this.addMethods(_6,vjo.util.Map.prototype);}}}},addMethods:function(_8,_9){for(var _a in _9){_8[_a]=_9[_a];}}}).endType();

vjo.ctype("vjo.dsf.XhrTransport").satisfies("vjo.dsf.ITransport").needs(["vjo.dsf.Service","vjo.dsf.ServiceEngine","vjo.dsf.SvcErr","vjo.dsf.assembly.VjClientAssembler"]).protos({processed:[],timerCount:0,reqTimers:[],handleRequest:function(_1,_2){this.remoteTrspHdl(_1);var _3=vjo.dsf.Service,xmlHttpReq=_3.getXmlHttpReq(),requestUrl=this.appendPort80ForSafari(document.location.href,_1.svcConfig.url),cfg=_1.svcConfig;_1.status=-1;try{var _4=(cfg.async===false)?false:true;xmlHttpReq.open(cfg.method,requestUrl,_4);var _5=this.timerCount++;if(_4){this.setupReadyState(xmlHttpReq,_1,_5);}
if(cfg.method=="POST"){xmlHttpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded");xmlHttpReq.setRequestHeader("Content-Length",_1.rawRequest.length);if(_1.headers!=="undefined"&&_1.headers){for(var m in _1.headers){xmlHttpReq.setRequestHeader(m,_1.headers[m]);}}
xmlHttpReq.send(_1.rawRequest);}else{xmlHttpReq.send(null);}
if(!_4&&!this.checkAndSetProcessed(_5)){vjo.dsf.Service.callback(xmlHttpReq,_1);}else{if(cfg.timeout){var _7=this;this.reqTimers[_5]=window.setTimeout(function(){_7.timeout(xmlHttpReq,_1,_5);},cfg.timeout);}}}
catch(e){vjo.dsf.SvcErr.err(_1,vjo.dsf.SvcErr.InvRq,"Cannot open URL '"+requestUrl+"'");}},setupReadyState:function(_8,_9,_a){var _b=this;_8.onreadystatechange=function(){if(_8.readyState!=4||_b.checkAndSetProcessed(_a)){return;}
var _c=_b.reqTimers[_a];if(_c){window.clearTimeout(_c);delete _b.reqTimers[_a];}
vjo.dsf.Service.callback(_8,_9);};},timeout:function(_d,_e,_f){if(this.checkAndSetProcessed(_f)){return;}
delete _d.onreadystatechange;_d.abort();delete this.reqTimers[_f];vjo.dsf.SvcErr.err(_e,vjo.dsf.SvcErr.TO,"Timed out:"+_e.svcConfig.timeout);vjo.dsf.ServiceEngine.handleResponse(_e);},checkAndSetProcessed:function(idx){if(this.processed[idx]){return true;}
this.processed[idx]=true;return false;},remoteTrspHdl:function(_11){var cfg=_11.svcConfig;if(!cfg||cfg.objType!="dsf_SvcConfig"){return;}else{if(cfg.respMarshalling=="JSCALLBACK"){if(typeof vjo.dsf.assembly!="undefined"&&typeof vjo.dsf.assembly.VjClientAssembler!="undefined"&&!vjo.dsf.assembly.VjClientAssembler.bBodyLoaded){vjo.dsf.assembly.VjClientAssembler.load(_11);_11.status=-1;return;}}}
if(_11.request&&_11.request.javaClass){delete _11.request.b;}
var svc=vjo.dsf.Service,requestUrl=cfg.url;if(_11.svcConfig.method=="GET"){var sep=(requestUrl.indexOf("?")==-1)?"?":"&";requestUrl=requestUrl+sep+_11.rawRequest;}else{if(!_11.rawRequest){var _15=svc.generateReqParams(_11);_11.rawRequest=_15;}}
_11.svcConfig.url=requestUrl;},appendPort80ForSafari:function(_16,_17){try{if(navigator.userAgent.toLowerCase().indexOf("safari")>=0){var _18="(([^:]*)://([^:/?]*)(:([0-9]+))?)?([^?#]*)([?]([^#]*))?(#(.*))?",ajaxUrl=_17,safariIssuePort="80";var _19=_16.match(_18);if(_19&&_19.length>=5&&_19[5]&&_19[5]==safariIssuePort){var _1a=ajaxUrl.match(_18);if(_1a&&_1a[2]&&_1a[2].length>0){if(_1a[5]&&_1a[5].length>0){}else{var _1b="";if(_1a[2]){_1b+=_1a[2]+"://";}
if(_1a[3]){_1b+=_1a[3]+":"+safariIssuePort;}
if(_1a[6]){_1b+=_1a[6];}
if(_1a[8]){_1b+="?"+_1a[8];}
if(_1a[10]){_1b+="#"+_1a[10];}
_17=_1b;}}}}}
catch(e){}
return _17;}}).endType();

// en_US/E775/SYS-MOBI_dsfSysJs_E77515414892_opta_en_US
// b=15414892