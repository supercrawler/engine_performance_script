/*publish time:2011-09-06 18:25:23*/
(function(N,M,J){var G={lt_pkgs:{inf:"http://a.alimama.cn/",packages:"http://a.alimama.cn/inf/"},lt_v:"1.1.5",lt_t:"20110801.js"};if(N[M]===J){N[M]={}}else{KSLITE.Config.lt_pkgs=KSLITE.mix(G.lt_pkgs,KSLITE.Config.lt_pkgs);return }var H=N.KSLITEonLoad,O=N.KSLITEpkgPaths;M=N[M];var A=N.document;var D=Object.prototype.toString;var F=function(S,T,U,X){if(!T||!S){return S}if(U===J){U=true}var V,Y,W;if(X&&(W=X.length)){for(V=0;V<W;V++){Y=X[V];if(Y in T){if(U||!(Y in S)){S[Y]=T[Y]}}}}else{for(Y in T){if(U||!(Y in S)){S[Y]=T[Y]}}}return S};var K=A.getElementsByTagName("head")[0]||A.documentElement;var R=0,B=1,L=2,I=3,P=4,Q=/\.css(?:\?|$)/i;var E=A.createElement("script").readyState?function(T,S){var U=T.onreadystatechange;T.onreadystatechange=function(){var V=T.readyState;if(V==="loaded"||V==="complete"){T.onreadystatechange=null;if(U){U()}S.call(this)}}}:function(T,S){T.addEventListener("load",S,false);T.addEventListener("error",S,false)};function C(){if(navigator.userAgent.indexOf("MSIE")<0){return null}var U=K.getElementsByTagName("script");var T,S=0,V=U.length;for(;S<V;S++){T=U[S];if(T.readyState==="interactive"){return T}}return null}F(M,{version:G.lt_v,_init:function(){var U,T,V=A.getElementsByTagName("script");if(!window.KSLITEcurrentScript){for(U=0;U<V.length;U++){if(V[U].kslite){window.KSLITEcurrentScript=V[U];break}}}T=window.KSLITEcurrentScript||V[V.length-1];window.KSLITEcurrentScript=T;var X=(T.src).split("/").slice(0,-1).join("/")+"/";M.Env={mods:{},fns:{},_loadQueue:{},_relies:{rq:{},sp:{}}};M.Config={debug:0,base:X,timeout:10,kslite:G};M.mix(M.Config,G);M.declare("kslite",[],function(Z,Y){Y=M.mix(Y,M,true,["path","log","getScript","substitute","clone","mix","multiAsync","extend","iA","iF","iPO","iS"])});M.provide(["kslite"],function(Y){M.require("kslite").log("kslite inited")});if(M.Config.debug){G.lt_t+=(new Date()).getTime()+".js"}var S;function W(Z){var Y=Z.split("@");G.lt_pkgs[Y[0]]=Y[1]}N.KSLITEpkgPaths={push:function(Y){W(Y)}};if(O&&M.iA(O)){for(S=0;S<O.length;S++){W(O[S])}}G.lt_t=N.KSLITEtimestamp||G.lt_t;N.KSLITEonLoad={push:function(Y){if(Y&&M.iF(Y)){Y(M)}}};if(H&&M.iA(H)){for(S=0;S<H.length;S++){if(M.iF(H[S])){H[S](M)}}}},mix:F,log:function(S,U,T){if(M.Config.debug){if(N.console!==J&&console.log){console[U&&console[U]?U:"log"](S)}}return M},clone:function(S){var T=S,V,U;if(S&&((V=M.iA(S))||M.iPO(S))){T=V?[]:{};for(U in S){if(S.hasOwnProperty(U)){T[U]=M.clone(S[U])}}}return T},extend:function(T,U,W,S){if(!U||!T){return T}var X=Object.prototype,Y=function(b){function a(){}a.prototype=b;return new a()},Z=U.prototype,V=Y(Z);T.prototype=V;V.constructor=T;T.superclass=Z;if(U!==Object&&Z.constructor===X.constructor){Z.constructor=U}if(W){F(V,W)}if(S){F(T,S)}return T},substitute:function(S,T,U,V){if(!M.iS(S)||!M.iPO(T)){return S}return S.replace(U||(/\\?\{([^{}]+)\}/g),function(W,X){if(W.charAt(0)==="\\"){return W.slice(1)}return(T[X]!==J)?T[X]:(V?W:"")})},getScript:function(c,T,Y,U){var S=Q.test(c),Z=A.createElement(S?"link":"script");var a=T,W,V,b,X;if(M.iPO(a)){T=a.success;W=a.error;V=a.timeout;Y=a.charset}if(S){Z.href=c;Z.rel="stylesheet"}else{Z.src=c;Z.async=true}if(Y){Z.charset=Y}if(U){for(X in U){Z.setAttribute(X,U[X])}}if(M.iF(T)){if(S){T.call(Z)}else{E(Z,function(){if(b){b.cancel();b=J}T.call(Z)})}}if(M.iF(W)){b=setTimeout(function(){b=J;W()},(V||M.Config.timeout)*1000)}K.insertBefore(Z,K.firstChild);return Z},iF:function(S){return D.call(S)==="[object Function]"},iA:function(S){return D.call(S)==="[object Array]"},iS:function(S){return D.call(S)==="[object String]"},iPO:function(S){return S&&D.call(S)==="[object Object]"&&!S.nodeType&&!S.setInterval},add:function(V,T,W){var S=M.Env.mods,U;if(S[V]&&S[V].status>R){return }U={name:V,fn:T||null,status:L};if(M.iA(W)){W={requires:W}}F(U,W);S[V]=U;return M},use:function(U,S){U=U.split(",");var T=M.Env.mods;M._aMs(U,function(){if(S){S(M)}})},_aMs:function(V,S){var U,T={};for(U=0;U<V.length;U++){T[V[U]]={f:M._aM,a:V[U]}}M.multiAsync(T,S)},_aM:function(V,W){var Z,S;var U=M.Env.mods,a=M.Env._relies.rq,X=M.Env._relies.sp;function Y(b){if(b.status!=P){if(b.fn){b.fn(M,M.require(b.name),M._ns(b.name))}else{}b.status=P}W()}function T(e){var f,d,b,h,c;function g(i){a[i]=a[i]||{};X[i]=X[i]||{};return i}d=g(e.name);for(f=0;f<e.requires.length;f++){b=g(e.requires[f]);a[d][b]=1;X[b][d]=1;for(c in X[d]){a[c][b]=1;X[b][c]=1}}}Z=U[V];if(Z&&Z.status!==R){S=Z.requires;if(M.iA(S)&&S.length>0){T(Z);if(a[V][V]){throw new Error("Fatal Error,Loop Reqs:"+Z.name)}M._aMs(S,function(){Y(Z)})}else{Y(Z)}}else{Z={name:V};M._lM(Z,function(){M._aM(V,function(){Y(U[V])})})}},_lM:function(W,Y){var X=M.Env._loadQueue,T=W.name,V;var U=M.Env.mods;if(X[T]){V=X[T];if(V.c){Y()}else{V.fns.push(Y)}}else{if(typeof X[T]!="undefined"){try{X[T].fns.push(Y)}catch(S){X[T].fns=[Y]}}else{X[T]={fns:[Y],c:false}}M._gPath(W,function(){if(!U[T]){U[T]={name:T,status:R}}M.getScript(W.fullpath,function(){var Z,b=X[T],a;if(M.__m__){a=M.__m__;M.add(T,a.fn,a.deps);M.__m__=null}if(U[T].status===R){U[T].status=L}for(Z=0;Z<b.fns.length;Z++){b.fns[Z]()}b.c=true;b.fns=J},null,{mod_name:T})})}},path:function(V,S){var W=V.split("-"),T=W[0],U=G.lt_pkgs;if(M.iS(U[T])){S(U[T]+W.join("/"))}else{KSLITE.provide(["packages-router"],function(X){var Y=X("packages-router");S((Y[T]||M.Config.base)+W.join("/"))})}},_gPath:function(T,S){M.path(T.name,function(U){T.fullpath=U+".js?_t="+G.lt_t;S()})},multiAsync:function(T,S){var W,V,X=false;function U(){var Z,Y={};for(Z in T){if(!T[Z].c){return }Y[Z]=T[Z].r}S(Y)}for(V in T){X=true}if(!X){S({})}for(V in T){(function(){var Y=T[V];Y.f.call((Y.c||M),Y.a,function(Z){Y.r=Z;Y.c=true;U()})})()}},_ns:function(T){var V,U=T.split("-"),S=M.Env.fns;for(V=0;V<U.length;V++){S[U[V]]=S[U[V]]||{};S=S[U[V]]}return S},require:function(S){var T=M._ns(S);T.exports=T.exports||{};return T.exports},declare:function(){var U,V,W,S,X,T;for(V=0;V<arguments.length;V++){W=arguments[V];if(M.iS(W)){S=W}else{if(M.iA(W)){X=W}else{if(M.iF(W)){T=W}}}}if(!S){U=C();if(U){S=U.getAttribute("mod_name")||false}}if(!S){M.__m__={deps:X,fn:function(Z,a,Y){T(Z.require,a,Y)}}}else{M.add(S,function(Z,a,Y){T(Z.require,a,Y)},X)}},provide:function(S,T){M.use(S.join(","),function(U){T(U.require)})}});M._init()})(window,"KSLITE");KSLITE.add("inf-gather",function(D){var C=window;var B=["pid","width","height","type","sizecode","referpid","tks","tkw","p4p_kw","p4p_ai","titlecolor","descolor","bgcolor","bordercolor","linkcolor","bottomcolor","anglesize","bgpic","icon","displaytype","displayconfig","fwposition","async","custom","extpara"];function A(){var F,H,G={};for(F=0;F<B.length;F++){H="alimama_"+B[F];if(C[H]){G[B[F]]=C[H];C[H]=undefined;try{delete C[H]}catch(E){}}}return G}D.G=A});(function(C,D){var B=C.alimama_onload;C.alimama_onload={push:function(E){if(E&&D.iPO(E)){alimama_show(E)}}};if(B&&D.iA(B)){for(var A=0;A<B.length;A++){if(D.iPO(B[A])){alimama_show(B[A])}}}if(C.alimama_pid){if(C.alimama_type=="i"&&!(typeof C.alimama_async=="undefined"?false:true)){alimama_show(0);return }D.provide(["inf-gather"],function(){var E=KSLITE.G();alimama_show(E)})}else{}})(window,KSLITE);function alimama_show(B){var A={};A=B;if(A==0||(typeof (alimama_type)=="undefined"?"":alimama_type=="i"&&!(typeof alimama_async=="undefined"?false:true))){document.write('<script src="http://a.alimama.cn/sync_type_i.js"><\/script>');return }if(!Boolean(B)){KSLITE.provide(["inf-gather"],function(){A=KSLITE.G()})}if(!document.getElementById("tanx-a-"+A.pid||"")){document.write("<iframe style='display:none' id='tanx-a-"+A.pid+"' frameborder=0 scrolling='no' marginwidth='0' marginheight='0'></iframe>")}KSLITE.provide(["inf-main"],function(C){C("inf-main").run(A)})};