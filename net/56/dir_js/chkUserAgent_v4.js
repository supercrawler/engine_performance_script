
var oAndroidRedirect={sPhoneUrl:'',sPadUrl:''};if(window.location.href.indexOf("#sm_ua")!=-1){fCheckBrowser();}
function fCheckBrowser(){var sUserAgent=navigator.userAgent.toLowerCase();var sUrlRedirect="";var oUrlRedirect={"ipad":"","pad":"","smart":"http://m.56.com/","m":"http://3g.56.com/"};var aClient=["ipad","iphone os","android","ucweb","rv:1.2.3.4","windows ce","windows mobile","midp"];for(var i=0;i<aClient.length;i++){if(sUserAgent.indexOf(aClient[i])!=-1){switch(aClient[i]){case"ipad":sUrlRedirect=oUrlRedirect["ipad"];break;case"iphone os":sUrlRedirect=oUrlRedirect["smart"];break;case"android":oAndroidRedirect={sPhoneUrl:oUrlRedirect["smart"],sPadUrl:oUrlRedirect["pad"]};androidRedirect();return false;break;default:sUrlRedirect=oUrlRedirect["m"];}
if(sUrlRedirect!=""){window.location.href=sUrlRedirect;}}}}
function androidRedirect(){if(oAndroidRedirect){var sUA=navigator.userAgent.toLowerCase();var nWidth=window.outerWidth;var nHeight=window.outerHeight;var aDeviceList=['SAMSUNG-SGH-I717','Galaxy Nexus','MT917','HUAWEI_T9510E_TD','HuaweiU9500E','HuaweiU9500','HuaweiU9510E','HuaweiU9501L'];var sUrlRedirect="";var bForcePhone=true;var nMax=Math.max(nWidth,nHeight);var nMin=Math.min(nWidth,nHeight);if((nMax>=1000)&&(nMin>=700)){bForcePhone=false;}
for(var i=0;i<aDeviceList.length;i++){if(sUA.indexOf(aDeviceList[i].toLowerCase())!=-1){bForcePhone=true;break;}}
if(bForcePhone){sUrlRedirect=oAndroidRedirect['sPhoneUrl'];}else{sUrlRedirect=oAndroidRedirect['sPadUrl'];}
if(sUrlRedirect!=""){window.location.href=sUrlRedirect;}}}