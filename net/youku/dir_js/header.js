var MiniHeader = {
	isrepeat:0,
	username:'',
	popwin:null,
	theme: {
		'cookiename': 'indextheme',
		'cookieoption': {'expires': 365},
		'index': null,
		'option': null,
		'cssdom': null,
		'cssfile': [
		]
	},
	init: function(){
		this.dom = document.getElementById('header');
		if(!this.dom){ return; }
		var divs = this.dom.getElementsByTagName('div');
		var dropmenus = [];
		this.dropmenus = [];
		for(var i=0; i<divs.length; i++){
			var div = divs[i];
			if(div.className){
				if(div.className == 'dropmenu'){ dropmenus.push(div); }
			}
		}
		for(var i=0, len=dropmenus.length; i<len; i++){
			var dom = dropmenus[i];
			var handle = null
			var panel = null;
			var fire = 'click';
			var divs = dom.getElementsByTagName('div');
			for(var j=0; j<divs.length; j++){
				var div = divs[j];
				if(div.className){
					if(div.className == 'handle'){ handle = div; }
					if(div.className == 'panel'){ panel = div; break;}
				}
			}
			if(handle && panel){
				this.dropmenus.push({
					'dom': dom,
					'handle': handle,
					'panel': panel,
					'mask': null,
					'status': 'hide',					
					'fire': dom.getAttribute('fire')=='hover' ? 'hover' : 'click'	
				});
			}
		}
		
		this.bind();
	},
	
	bind: function(){
		var _this = this;
		//dropmenu
		for(var i=0, len=this.dropmenus.length; i<len; i++){
			(function(i){
				var dropmenu = _this.dropmenus[i];
				if(dropmenu.fire == 'hover'){
					_this._addEvent(dropmenu.dom, 'mouseenter', function(){ _this.showDropmenu(dropmenu); });
					_this._addEvent(dropmenu.dom, 'mouseleave', function(){ _this.hideDropmenu(dropmenu); });						
				}else if(dropmenu.fire == 'click'){
					_this._addEvent(dropmenu.handle, 'click', function(){ _this.toggleDropmenu(dropmenu); });
				}
				_this._addEvent(dropmenu.dom, 'click', function(e){ _this._cancleBubble(e); });
			})(i);
		}
		_this._addEvent(document, 'click', function(){ _this.hideAllDropmenu(); });
		var tab_msg = document.getElementById("tab_msg");
		_this._addEvent(tab_msg, 'click', function(e){ 
				_this._cancleBubble(e);});
	},
	
	_addEvent: function(dom, eventname, func){
		if(window.addEventListener){
			if(eventname == 'mouseenter' || eventname == 'mouseleave'){
				function fn(e){
					var a = e.currentTarget, b = e.relatedTarget;
					if(!elContains(a, b) && a!=b){
						func.call(e.currentTarget,e);
					}	
				}
				function elContains(a, b){
					try{ return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16); }catch(e){}
				}
				if(eventname == 'mouseenter'){
					dom.addEventListener('mouseover', fn, false);
				}else{
					dom.addEventListener('mouseout', fn, false);
				}
			}else{
				dom.addEventListener(eventname, func, false);
			}
		}else if(window.attachEvent){
			dom.attachEvent('on' + eventname, func);
		}
	},
	
	_cancleBubble: function(evt){
		var evt = window.event || evt;
		if(evt.preventDefault) {      
			evt.stopPropagation();    
		}else {    
			evt.cancelBubble=true;   
		}
	},
	
	_cookie: {
		set: function(name, value, option){
			var str = name + '=' + escape(value);  
			if(option){
				if(option.expires){
					var date = new Date();
					var ms = option.expires*24*3600*1000;
					date.setTime(date.getTime() + ms);
					str += '; expires=' + date.toGMTString();
				} 
				if(option.path)   str += '; path='  + path;
				if(option.domain) str += '; domain' + domain;
				if(option.secure) str += '; true';
			}
			document.cookie = str;
		},
		get: function(name){
			var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
			if(arr != null) return unescape(arr[2]); return null;
		}			
	},
	
	getTheme: function(){
		var index = this._cookie.get(this.theme.cookiename);
		if(index == null){ return 0; }
		else{ return index; }
	},
	
	setTheme: function(index){
		if(index != this.theme.index){
			if(index == 0){
				if(this.theme.cssdom){ this.theme.cssdom.disabled = true; }	
			}else{
				if(!this.theme.cssdom){
					this.theme.cssdom = document.createElement('link');
					this.theme.cssdom.type = 'text/css';
					this.theme.cssdom.rel = 'stylesheet';
					document.getElementsByTagName('head')[0].appendChild(this.theme.cssdom);
				}
				this.theme.cssdom.href = this.theme.cssfile[index];
				if(this.theme.cssdom.disabled){
					this.theme.cssdom.disabled = false;
				}
			}			
			this._cookie.set(this.theme.cookiename, index, this.theme.cookieoption);
			if(this.theme.option){
				var classname  = this.theme.option.className.split(' ')[0]; 
				this.theme.option.className = classname;
			}
			this.theme.index = index;
			var option = this.themepicker.getElementsByTagName('li')[index];
			this.theme.option = option;			
			option.className += ' current';			
		}
	},
	
	showDropmenu: function(dropmenu){		
		var index =  parseInt(dropmenu.dom.getAttribute('index'), 10);
		if(index==0 && this.isrepeat==0){
			if(window.openLookingClick == 1)
				this.isrepeat=0;//正在看改成实时更新
			else
				this.isrepeat = 1;
			this.looking();
		}
		if(index==1) {
			var ucup;
			try { ucup = Nova.Cookie.get('ucup');} catch(e) {};
			if(dropmenu.dom.getAttribute('loading') == 'true' || (this.ucup && ucup && this.ucup != ucup)) {
				this.getupanel();
				dropmenu.dom.setAttribute('loading', 'false');
			}
			try{
				Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4005168&cpp=1000404&"+Math.random());
			}catch(e){}
		}else if(index==3){
			var url='';
			if(arguments.length == 2 || arguments.length == 3){
				var url = ['follows','vcomment','tcomment','mention'].include(arguments[1]) ? '/case/'+arguments[1] : '';
				if(arguments[1] == 'vcomment' && arguments.length == 3){
					url += '/vtype/'+arguments[2];
				}
			}
			var ifm = document.getElementById("popnotice");
			try{
				if(arguments.length == 1) Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4003358&cpp=1000404&"+Math.random());
			}catch(e){}
			if(typeof(ifm) == 'object'){
				(function(){
					if(Prototype.Browser.IE == false){
						var editor = ifm.contentWindow;
						editor.document.designMode = 'On';
						editor.document.body.contentEditable = true;
						editor.document.open();
						editor.document.writeln('<html><head>');
						editor.document.writeln('</head><body></body></html>');
						editor.document.close();
					}
				})();
				ifm.src=comments_domain+"/comments/notice"+url;
			}
		}
		dropmenu.dom.className = 'dropmenu dropmenu_expand';
		if(!dropmenu.mask){
			iframe = document.createElement('iframe');
			iframe.id = 'maskIframe';
			iframe.className = 'mask';
			iframe.frameBorder = '0';
			iframe.scrolling = 'no';
			dropmenu.dom.appendChild(iframe);
			dropmenu.mask = iframe;
		}
		dropmenu.mask.style.width = dropmenu.panel.offsetWidth + 'px';
		dropmenu.mask.style.height = dropmenu.panel.offsetHeight + 'px';
		if(dropmenu.fire == 'click'){
			this.hideOtherDropmenu(dropmenu);	
		}
		dropmenu.status = 'show';
	},
	hideDropmenu: function(dropmenu){
		dropmenu.dom.className = 'dropmenu';
		dropmenu.status = 'hide';
	},
	toggleDropmenu: function(dropmenu){
		if(dropmenu.status == 'hide'){ this.showDropmenu(dropmenu); }
		else{ this.hideDropmenu(dropmenu); }
	},
	hideOtherDropmenu: function(dropmenu){
		for(var i=0, len=this.dropmenus.length; i<len; i++){
			var dp = this.dropmenus[i];
			if(dp != dropmenu){
				if(dp.status == 'show'){
					this.hideDropmenu(dp);	
				}	
			}
		}	
	},
	hideAllDropmenu: function(){
		for(var i=0, len=this.dropmenus.length; i<len; i++){
			var dp = this.dropmenus[i];
			if(dp.status == 'show'){
				this.hideDropmenu(dp);
			}
		}
	},
	trim:function(s){
		s = s.replace( /^(\s*|　*)/, "");
		s = s.replace( /(\s*|　*)$/, "");
		return s;
	 },
	// 搜索
	dosearch:function(f){
		if(this.trim( f.q.value.replace(/[\/_]/g,' ') )==''){
			location.href='http://www.soku.com/?inner';
			return false;
		}

		var q = encodeURIComponent(f.q.value.replace(/[\/_]/g,' '));
		
		if(f.socondition && f.socondition[1].id=='outer' && f.socondition[1].checked){//全网搜索
			var url="http://www.soku.com/v?keyword="+q;
		}else{//站内搜索
			var innersearchdomain = f.searchdomain.value;
			if(!innersearchdomain)innersearchdomain="http://www.soku.com";
			var url= innersearchdomain+"/search_video/q_"+q;
		}
		if(typeof(search_prompt_flag) != 'undefined' && search_prompt_flag){//使用下拉提示统计代码
			(new Image()).src="http://lstat.youku.com/sokuHintKeyword.php?keyword="+q;
		}
		//location.href=url;
		window.open(url);
		f.q.value='';
		return false;
	},
	/**
	 * 登录小窗口
	 */
	login:function(callBack){
		if( passport=='1' ){
			var url = typeof home_url =='undefined' ? '' : home_url;
			if(this.popwin==null) this.popwin = new Qwindow();

			if(typeof(callBack)=='string' && callBack.indexOf('ctype')>0){
				if(this.islogin()){
					this.popwin = null;
					document.location.href=callBack;
				}
				this.popwin.setSize(600, 410).setContent('iframe', url+'/index_login/?from=fee&url='+encodeURIComponent(callBack)).show();
				return;
			}else{
				this.popwin.setSize(600, 410).setContent('iframe', url+'/index_login/').show();
			}
		}else{
			if(pop!=null) pop.close();
			pop = new Popup({contentType:1,isSupportDraging:false,isReloadOnClose:false,width:540,height:300});
			pop.setContents({'title':'登录','contentUrl':'/index_login/'});
			pop.build().show();
		}
		login_callback_user = callBack;
		
		// 参数
		if(arguments.length>1){
			login_callback_user_args = Array.prototype.slice.call(arguments);
			if(login_callback_user_args.length>0){
				login_callback_user_args.shift(); // 去掉arguments[0] (callBack)
			}
		}
	},
	U8_16:function(_1) {
		var i, len, c;
		var char2, char3;
		var ary = [];
		len = _1.length;
		i = 0;
		while (i < len) {
			c = _1.charCodeAt(i++);
			switch (c >> 4) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
				// 0xxxxxxx
				ary.push(_1.charAt(i - 1));
				break;
			case 12:
			case 13:
				// 110x xxxx   10xx xxxx
				char2 = _1.charCodeAt(i++);
				ary.push(String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F)));
				break;
			case 14:
				// 1110 xxxx 10xx xxxx 10xx xxxx
				char2 = _1.charCodeAt(i++);
				char3 = _1.charCodeAt(i++);
				ary.push(String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0)));
				break;
			}
		}
		return ary.join('');
	},
	decode64:function(_1) {
		if(!_1) return '';
		var _2 = "ABCDEFGHIJKLMNOP"+"QRSTUVWXYZabcdef"+"ghijklmnopqrstuv"+"wxyz0123456789+/"+"=";
		var _3 = "";
		var _4, _5, _6;
		var _7, _8, _9, _a;
		var i = 0;
		_1 = _1.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		do {
			_7 = _2.indexOf(_1.charAt(i++));
			_8 = _2.indexOf(_1.charAt(i++));
			_9 = _2.indexOf(_1.charAt(i++));
			_a = _2.indexOf(_1.charAt(i++));
			_4 = (_7 << 2) | (_8 >> 4);
			_5 = ((_8 & 15) << 4) | (_9 >> 2);
			_6 = ((_9 & 3) << 6) | _a;
			_3 = _3 + String.fromCharCode(_4);
			if (_9 != 64) {
				_3 = _3 + String.fromCharCode(_5);
			}
			if (_a != 64) {
				_3 = _3 + String.fromCharCode(_6);
			}
		} while (i < _1.length);
		return this.U8_16(_3);
	},
	islogin:function(){
		var username = '';
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf('u=') == 0 || c.indexOf('k=') == 0) var _c = c;
			if (c.indexOf('_l_lgi=') == 0) var _l = c;
			if(c.indexOf('yktk=') == 0){
				var u_info = this.decode64(decodeURIComponent(c).split("|")[3]);
				if(u_info.indexOf(",") > -1 && u_info.indexOf("nn:") > -1 && u_info.indexOf("id:") > -1){
					 var username = u_info.split(",")[1].split(":")[1];
					 var userid = u_info.split(",")[0].split(":")[1];
					 if(username != '') break;
				}
			}
		}
		if(username == '' || userid == ''){
			if(_c){
				var username = _c.substring(2,_c.length);
				if(username == '__LOGOUT__') username = '';
				else username = decodeURIComponent(username);
			}
			if(_l){
				var userid = _l.substring(7,_l.length);
			}
		}
		if(username !== '' && userid !== '') {
			this.username=username;
			this.userid=userid;
			return true;
		}else{
			return false;
		}
	},
	truncate:function(s,length, truncation){
		var res = /[\u4e00-\u9fa5]/;
		if(!res.test(s)){
			length = 2*length;
		}
		var t = s.length > length ?  s.slice(0, length) + truncation : String(s);
		return t;
	},
	login_status:function(){// 登录前后
		//if(typeof(islogin) != 'undefined' &&  islogin() || this.islogin() ){
		var doc = document;
		if(this.islogin() ){
			this.pinfo(); // 初始化个人信息
			doc.getElementById('logafter').style.display="block";
			doc.getElementById('logpre').style.display="none";
		}else{
			doc.getElementById('logpre').style.display="block";
			doc.getElementById('logafter').style.display="none";
		}
	},
	Cookie:{
		get:function(name){
			var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
			if (arr != null) return unescape(arr[2]);;
			return null;
		},
		clear:function(name, path, domain){
		  try{
			if(this.get(name)){
				document.cookie = name + "=" + ((path) ? "; path=" + path : "; path=/") + ((domain) ? "; domain=" + domain : "") + ";expires=Fri, 02-Jan-1970 00:00:00 GMT";
				var playlist_om = document.getElementById('playlist_om').innerHTML;
				document.getElementById('panel').innerHTML = '<div class="listnull">没有播放记录</div><div class="om" id="playlist_om">'+ playlist_om+'</div>';
			}
		  }
		  catch(e){
		  }
		}
	},
	watch_tab:function(){
		var _tab = $$("#watch_tabs li");
		if(_tab){
			_tab.invoke('observe',"click",function(event){
				_tab.each(function(el){
					el.removeClassName('current');
					var id = el.readAttribute("_to");
					$(id).hide();
				});
				var e = Event.findElement(event,"li");
				e.addClassName("current");
				var id = e.readAttribute("_to");
				$(id).show();
				
				var _tab_list = $$("#"+id+"_ul li");
				if(_tab_list.length)
				{
					_tab_list.each(function(el){MiniHeader.watch_tab_list_hover(el);});
					if($('recordaction'))document.getElementById('recordaction').style.display = '';
				}
				if(id == 'showlist')
				{
					var showlist = document.getElementById('showlist');
					if(showlist.className == 'recordnull') 
					{
						if($('recordaction'))document.getElementById('recordaction').style.display = 'none';
				
					}
					MiniHeader.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4004075&cpp=1000499");	
				}
				else
				{
					MiniHeader.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4004076&cpp=1000499");
				}
			
			});
			
			var _tab_list = $$(".list li");
			if(_tab_list)
			{
				_tab_list.each(function(el){MiniHeader.watch_tab_list_hover(el);});
			}

		}
	},
	watch_tab_list_hover:function(li){
		if(!li) return false;
		var osType = {isIPAD: 'iPad', isIPHONE: 'iPhone', isIPOD: 'iPod', isSonyDTV: "SonyDTV", isLEPAD: 'lepad_hls',isMIUI: 'MI-ONE',isAndroid4: 'Android 4.'};
var isPc = true;
		for(var os in osType){
			if(navigator.userAgent.indexOf(osType[os]) !== -1){
				isPc  = false;
				break;
	 		}else{
	 			isPc = true;
	 		}
		}
		if(isPc)
		{
			li.onmouseover = function(e){
				this.className = "hover";
			};
			li.onmouseout = function(e){
				this.className = "";	
			};
		}
		else
		{
			li.className = "hover";
		}
	},
	clearLooking:function(tk){
		if(tk ==  undefined || tk == '') return;
		var clearUrl = "http://yus.navi.youku.com/playlog/clear.json?token=" + tk + "&" + Math.random();
		document.getElementById('watchlist').innerHTML = '<span>没有播放记录</span>';
		document.getElementById('watchlist').className = 'recordnull';
		document.getElementById('showlist').innerHTML = '<span>您最近没有观看过剧集节目</span><a href="http://tv.youku.com" target="_blank">更多精彩剧集</a>';
		document.getElementById('showlist').className = 'recordnull';
		if($('recordaction'))document.getElementById('recordaction').style.display = 'none';
		var img = new Image();
		img.src = clearUrl;
		this.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4004077&cpp=1000499");
	},
	delLooking:function(tk,vid,fid,shid,liId,list,charset){
		if(!tk || !vid || !liId) return;
		if(fid == undefined) fid = 0;
		if(shid == undefined) shid = 0;
		delUrl = "http://yus.navi.youku.com/playlog/delete.json?token="+tk+"&v="+vid+"&fid="+fid+"&shid="+shid+"&"+Math.random();
		var listObj1 = document.getElementById('show_'+liId);
		var listObj2 = document.getElementById('watch_'+liId);
		if(listObj1) listObj1.parentNode.removeChild(listObj1);
		if(listObj2) listObj2.parentNode.removeChild(listObj2);
		var listObj = document.getElementById("watchlist_ul");
		var li = listObj.getElementsByTagName('LI');
		if(li.length == 0)
		{
			document.getElementById('watchlist').innerHTML = '<span>没有播放记录</span>';
			document.getElementById('watchlist').className = 'recordnull';
			document.getElementById('showlist').innerHTML = '<span>您最近没有观看过剧集节目</span><a href="http://tv.youku.com" target="_blank">更多精彩剧集</a>';		
			document.getElementById('showlist').className = 'recordnull';		
			if($('recordaction'))document.getElementById('recordaction').style.display = 'none';
		}
		else
		{
			var listObj = document.getElementById("showlist_ul");
			if(listObj)
			{
				var li = listObj.getElementsByTagName('LI');
				if(li.length == 0)
				{
						document.getElementById('showlist').innerHTML = '<span>您最近没有观看过剧集节目</span><a href="http://tv.youku.com" target="_blank">更多精彩剧集</a>';
						document.getElementById('showlist').className = 'recordnull';	
						if(list == 'showlist')
						{
							if($('recordaction'))document.getElementById('recordaction').style.display = 'none';
						}
				}
				
			}
		}
		

		var img = new Image();
		img.src = delUrl;		
		if(charset)
		{
			this.addScript("http://hz.youku.com/red/click.php?tp=1&cp="+charset+"&cpp=1000499");
		}
	},
	addScript:function(src){
		var doc = document;
		var g = doc.createElement("script");
		g.type = "text/javascript";
		g.src = src;
		doc.getElementsByTagName('head')[0].appendChild(g);
	},
	ncCallback : function() {
		if(arguments.length < 2) return;
		var content = arguments[0]
		var elm = document.getElementById(arguments[1]);
		if(elm) {
			elm.innerHTML = content;
		}
		switch(arguments[1]){
			case 'panel':
				var p_elm = elm.parentNode;
				MiniHeader.watch_tab();
			break;
			default:
				var p_elm = elm;
			break;
		}
		var iframe = p_elm.parentNode.getElementsByTagName('iframe')[0];
		iframe.style.width = p_elm.offsetWidth+'px';
		iframe.style.height = p_elm.offsetHeight+'px';
		try {
			this.ucup = Nova.Cookie.get('ucup');
		} catch(e) {};
	},
	looking:function(){// 正在看
		if(nc_domain.indexOf('http://') <= -1){
			nc_domain = 'http://'+nc_domain+'/';
		}
		var ncUrl = nc_domain+'index_nc?r[]=cookielist&e[]=panel&s=mini&cb=MiniHeader.ncCallback&rand='+(new Date()).getTime();
		this.addScript(ncUrl);
		
		var clicklog = "http://hz.youku.com/red/click.php?tp=1&cp=4004074&cpp=1000499";
		this.addScript(clicklog);

		//this.playlist_click();
		return false;
    },
	getupanel:function() {
		if(nc_domain.indexOf('http://') <= -1){
			nc_domain = 'http://'+nc_domain+'/';
		}
		var ncUrl = nc_domain+'index_nc?r[]=isuc&e[]=isuc&s=mini&cb=MiniHeader.ncCallback&rand='+(new Date()).getTime();
		this.addScript(ncUrl);
		return false;
	},
	playlist_click:function(){// 点播单
		// 点播单
		var view = '0';
		try{
			//var items=JSON.parse(this.Cookie.get("PlayList"));
			var items=PlayList.getAll();
			if (items instanceof Array){
				view = items.length;
				document.getElementById('om_play').innerHTML = '<a href="http://hz.youku.com/red/click.php?tp=1&cp=4003074&cpp=1000223&url=http://'+v_domain+'/v_show/id_'+items[0].videoid+'_type_99.html">开始播放</a>';
			}else{
				document.getElementById('om_play').innerHTML = '';
			}
		}catch(e){
				document.getElementById('om_play').innerHTML = '';
		}
		document.getElementById('playlist_count').innerHTML = view;
	},
	pinfo:function(){// 个人能信息
		//this.username =  this.Cookie.get('k');
		var doc = document, uname = doc.getElementById('uname'),
			url = 'http://'+space_domain+'/user_show/uid_'+encodeURIComponent(this.username)+'.html';
		if(uname.getAttribute('uc')) url = 'http://'+uc_domain+'/u/uid_'+encodeURIComponent(this.username)+'.html';
		//uname.innerHTML = '<a title="'+this.username+'的空间" target="_blank" href="'+url+'" target="_blank">'+this.truncate(this.username,4,'...')+'</a>';
		uname.innerHTML = this.truncate(this.username,4,'...');
		if(doc.getElementById('mini_myspace'))
			doc.getElementById('mini_myspace').innerHTML ='<a target="_blank" href="http://'+space_domain+'/user_show/uid_'+encodeURIComponent(this.username)+'">我的空间</a>';
		if(doc.getElementById('uc_myspace'))
			doc.getElementById('uc_myspace').innerHTML ='<a target="_blank" href="http://'+uc_domain+'/u/uid_'+encodeURIComponent(this.username)+'">我的空间</a>';
    },
	login_callback:function(){ // 用户登录成功后调用的部分
		// 用户自定义回调函数
		if(login_callback_user && login_callback_user != 'mynull'){
			if(typeof login_callback_user == 'string'){
				login_callback_user = eval(login_callback_user);
			}
			if(typeof login_callback_user == 'function'){
				login_callback_user.apply(login_callback_user,login_callback_user_args);
			}
		}
		this.login_status();
	},
	logout:function(){
		logoutcallback = function(result){if(result)top.location.reload();}
		if(empty(udomain)) udomain = 'u.youku.com';
		var url = 'http://'+udomain+'/QUser/~ajax/logout'+ '?__callback=logoutcallback&__ai=callback ';
		this.addScript(url);
    }
};
MiniHeader.init();
MiniHeader.login_status();
window['update_login_status_hook_miniheader'] = function(){ MiniHeader.login_status();}
/**
 * 消息box
 */
NoticeBox= {
	initialize: function() {},
	loadtryTime: {1:1,2:3,3:10},
	//轮询新的消息提醒时间间隔
	itemDetails:{'comment_reply':{'label':'','count':0,'cpp':4004471},'video_reply':{'label':'','count':0,'cpp':4004474},'comment_mentions':{'label':'','count':0,'cpp':4004472},'followers':{'label':'位新粉丝','count':0,'cpp':4004476},'statuses_mentions':{'label':'条提到我的动态','count':0,'cpp':4004482},'statuses_comments':{'label':'条空间评论','count':0,'cpp':4004480},'star_statuses':{'label':'条明星动态更新','count':0,'url':'/u/router/?ut=1','cpp':4004479},'show_statuses':{'label':'条剧集更新','count':0,'url':'/u/router/?ut=2','cpp':4004478},'subscribe':{'label':'条好友视频更新','count':0,'url':'/u/router/?ut=3','cpp':4004478}},
	maxNotice:99,
	isPolled:false,
	/**
     * 获取最新通知数量
     */
	getNotice: function(){
		//判断是否已加载prototype.js
		var loadjsInterval = null; 
		var noticeInterval = null;
		var loadtry = 0;
		var notice = function(){
			if(typeof(Prototype) == 'undefined'){
				loadtry++;
				if(loadtry > 3){
					return;
				}
				var secTime = NoticeBox.loadtryTime[loadtry]*100;
				clearInterval(loadjsInterval);
				loadjsInterval = setTimeout(notice,secTime);
			}else{
				NoticeBox.callNotice();
				clearInterval(noticeInterval);
				noticeInterval=setInterval('NoticeBox.callNotice()',pollTime*1000);
			}
		};
		notice();
	},
	callNotice:function(){
		NoticeBox.getUserId();
		var uid = MiniHeader.userid;
		if(uid == null || uid == false || uid == 'undefined') {
			if($('notify')) $('notify').style.display='none';
			return;
		}
		nova_call(notice_domain+"/notice/js_nova_notify.json",{uid:uid,rand:Math.random()},"NoticeBox.noticeCallback",undefined,1); 
	},
	isHomePage:function(){
		if(typeof window.location.href == 'undefined') return false;
		if(window.location.href.indexOf('/u/home') > 0) return true;
		return false;
	},
	noticeCallback:function(info){
		if(info == null) return;
		try{
			if(typeof(info)!="object") info  = JSON.parse(info);
		}catch(e){return;}
		var total = 0;
		var tmpNotice = [];/*有新消息提醒的项*/
		var cmt_reply_count = 0;
		for(var item in NoticeBox.itemDetails){
			total += (info.notice[item]==null || info.notice[item]=='undefined' || (['star_statuses','show_statuses','subscribe'].include(item) && (parseInt(info.notice[item+"_reset"]) < 3600 || this.isHomePage() == true))) ? 0 : parseInt(info.notice[item]);
			if(info.notice[item]==null || info.notice[item]=='undefined') info.notice[item] = 0;
			if(['star_statuses','show_statuses','subscribe'].include(item)){
				NoticeBox.itemDetails[item].count =  (typeof info.notice[item+"_reset"] != 'undefined' && parseInt(info.notice[item+"_reset"]) >= 3600) ? parseInt(info.notice[item]) : 0;
				if(this.isHomePage() == true) NoticeBox.itemDetails[item].count = 0;
			}else{
				NoticeBox.itemDetails[item].count =  parseInt(info.notice[item]);
			}
			//黄条消息提醒
			if(info.notice[item] > 0){
				//视频评论相关的提醒
				if(['comment_reply','video_reply','comment_mentions'].include(item)){
					cmt_reply_count += parseInt(info.notice[item]);
					if(parseInt(info.notice[item]) > 0) var tmp_href = item;
				}else{
					if(['star_statuses','show_statuses','subscribe'].include(item)){
						if(typeof info.notice[item+"_reset"] != 'undefined' && parseInt(info.notice[item+"_reset"]) >= 3600 && this.isHomePage() == false){
							tmpNotice.push({'item':item,'count':info.notice[item]});
						}
					}else{
						tmpNotice.push({'item':item,'count':info.notice[item]});
					}
				}
			}
		}
		if(cmt_reply_count > 0) tmpNotice.unshift({'item':'cmt_reply','count':cmt_reply_count}); 
		var labels = '';
		var len = tmpNotice.length;
		var other_count = 0;
		if(len > 0){
			var c = 0;
			for(var j=0;j<len;j++){
				if(tmpNotice[j].item == 'cmt_reply'){
					switch(tmp_href){
						case 'comment_reply':
							 var subtype = 2;
							 break;
						case 'video_reply':
							 var subtype = 1;
							 break;
						case 'comment_mentions':
							 var subtype = 3;
							 break;
						default:
							 var subtype = 2;
					}
					labels += '<a attr='+tmp_href+' onclick="NoticeBox.showDropmenu(\'vcomment\','+subtype+');NoticeBox.clearSelf(this);"><strong>'+this.max99(tmpNotice[j].count)+'</strong>条视频评论</a>';
					c++;
				}else{
					var index = tmpNotice[j].item;
					if(['statuses_comments','statuses_mentions','followers'].include(index)){
						var type = index.replace('statuses_comments','tcomment');
						var type = type.replace('statuses_mentions','mention');
						var type = type.replace('followers','follows');
						labels += '<a  attr='+index+' onclick="NoticeBox.showDropmenu(\''+type+'\');NoticeBox.clearSelf(this);"><strong>'+this.max99(tmpNotice[j].count)+'</strong>'+NoticeBox.itemDetails[index].label+'</a>';
					}else{
						labels += '<a attr='+index+' onclick="NoticeBox.clearSelf(this);" href="http://'+uc_domain+NoticeBox.itemDetails[index].url+'" target="_blank"><strong>'+this.max99(tmpNotice[j].count)+'</strong>'+NoticeBox.itemDetails[index].label+'</a>';
					}
					c++;
				}
				other_count += parseInt(tmpNotice[j].count);
				if(c >1) break;
			}
			var other_count = total-other_count;
			if(other_count > 0) labels += '<a  attr="index" onclick="NoticeBox.showDropmenu();NoticeBox.clearSelf(this);"><strong>'+this.max99(other_count)+'</strong>条其他通知</a>'; 
		}
		this.isPolled = true;
		var doc = window.document;
		if(!doc.getElementById('notice_num') || !doc.getElementById('notice_plus') || !doc.getElementById('notice_div')) return;
		if(total > 0){
			doc.getElementById('notice_num').innerHTML= (total > NoticeBox.maxNotice) ? NoticeBox.maxNotice : total;
			doc.getElementById('notice_plus').innerHTML= (total >= NoticeBox.maxNotice) ? '+' : '';
			doc.getElementById('notify').style.display='block';
			doc.getElementById('notice_div').style.display='block';
			if(doc.getElementById('tab_msg').style.display == 'none'){
				Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4004593&cpp=1000404&"+Math.random());
			}
			//var css = (len > 1) ? ((len == 2) ? 'msg2' : 'msg3') : 'msg1';
			var css ='msgcont';
			doc.getElementById('inner_msg').className=css;
			doc.getElementById('inner_msg').innerHTML=labels;
			doc.getElementById('tab_msg').style.display='block';
		}else{
			doc.getElementById('notice_div').style.display='none';
			doc.getElementById('tab_msg').style.display='none';
			doc.getElementById('notify').style.display='block';
		}
	},
	clearSelf:function(el){
		if(el) {
			el.style.display='none';
			var type = el.getAttribute('attr');
			var cp = this.logType(type);
			if(['star_statuses','show_statuses','subscribe'].include(type)){
				var type_obj = {'star_statuses':3,'show_statuses':4,'subscribe':9};
				var t = type_obj[type];
				setTimeout(function(){
					nova_call(comments_domain+"/comments/~ajax/clearUcenterStatus.html",{'type':t},'',undefined,1);
				},300);
			}
			if(cp)
				Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp="+cp+"&cpp=1000404&"+Math.random());
			window.setTimeout(NoticeBox.callNotice,1200);
		}
	},
	logType:function(type){
		if(type){
			if(NoticeBox.itemDetails[type] && NoticeBox.itemDetails[type].cpp){
				return NoticeBox.itemDetails[type].cpp;
			}else if(type == "other"){
				return 4004592;
			}else{
				return false;
			}
		}else
			return false;
	},
	close:function(){
		NoticeBox.getUserId();
		var uid = MiniHeader.userid;
		if(document.getElementById("notice_div")) document.getElementById("notice_div").style.display="none";
		if(uid == null || uid == false || uid == 'undefined') return;
		nova_call(comments_domain+"/comments/~ajax/clearAllStatus.html",{rand:Math.random()},"",undefined,1); 
		Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4004815&cpp=1000404&"+Math.random());
	},
	max99:function(num){
		return (num > this.maxNotice) ? this.maxNotice+'+' : num;
	},
	getUserId:function(){
		if(!MiniHeader.islogin()){
			 MiniHeader.userid = null;
			 return false;
		}	
	},
	showDropmenu:function(type){
		var dropmenus = MiniHeader.dropmenus;
		for(i=0;i<dropmenus.length;i++){
			if('notice_handle' == $(dropmenus[i].dom).id){
				var notice_dom = dropmenus[i];
				break;
			}
		}
		if(notice_dom){
			if(arguments.length == 2){  
				MiniHeader.showDropmenu(notice_dom,type,arguments[1]);
			}else{
				MiniHeader.showDropmenu(notice_dom,type);
			}
		}
	}
};
