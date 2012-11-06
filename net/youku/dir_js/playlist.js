//{{{class define
function item(){
	this.videoid="";
}

function PlayListControl(){
	this.clean = 0;
	this.change = 0;
	this.del = '';
	this.add = '';
}

function PlayList(){}
var PlayList_list = '';
var PlayList_list_random = '';
PlayList.addUrl = 'http://v.youku.com/QVideo/~ajax/setPlayListAll';
PlayList.getUrl = 'http://v.youku.com/QVideo/~ajax/getPlayListAll';
PlayList.setRandomUrl = 'http://v.youku.com/QVideo/~ajax/setPlayListRandom';
PlayList.delUrl = 'http://v.youku.com/QVideo/~ajax/delPlayListById';
PlayList.cleanUrl = 'http://v.youku.com/QVideo/~ajax/cleanPlayList';
PlayList.imageQls=new Image;
PlayList.cacheTag= new Array();
PlayList.imageQls.src="http://static.youku.com/v/img/qls.gif";
PlayList.imageQlh=new Image;
PlayList.imageQlh.src="http://static.youku.com/v/img/qlh.gif";
PlayList.imageQlsed=new Image;
PlayList.imageQlsed.src="http://static.youku.com/v/img/qlsed.gif";

var PlayListGetCallback = function(data){
	if(data.list)
	{
		window.PlayList_list = data.list;
		window.PlayList_list_random = data.list_random;
	}
};

var openPlayList = function(fid){
	window.open("http://v.youku.com/v_show/id_"+fid+"_type_99.html","newwindow");	
};
//增加一个或多个视频到点播单
PlayList.add = function(videoid, callback){
	if(videoid == 'undefined' || videoid == '' || videoid == 0) return false;
	if(videoid instanceof Array && (videoid.length == 0 || videoid.length == "undefined")) return false;
	var ids = [];
	var play = 0;
	if(videoid instanceof Array)
	{
		var fast = PlayList.clickToFast();
		if(fast == true) {
			return false;
		}
		ids = videoid;
		play = 1;
		fid = ids[0];
	}
	else
	{
		ids[0] = videoid;  
	}
	nova_call(this.addUrl,{videoids:ids.join(','), play:play, callback:callback}, 'PlayListAddCallback', null, true);
	if(play == 1)
	{
		setTimeout("openPlayList('"+ fid +"')",400);
	}
}

window.nova_init_hook_playlist_init = function(){
	try{
		if(window.playmode && window.playmode == 4){
			nova_call(PlayList.getUrl,{}, 'PlayListGetCallback', null, true);
		}
	}
	catch(e)
	{
		
	}
}
var PlayListAddCallback = function(data){
	//var data = JSON.parse(data);
	if(data.errno == 1)return false;
	if(data.isMaxsize == 1)
	{
		Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4002944&cpp=1000223&"+Math.random());
	}
	if(data.firstId == null)
	{
		window.PlayList_list = data.data.list;
		window.PlayList_list_random = data.data.list_random;
		var control = new PlayListControl;
		control.add = data.data.add;
		control.del = data.data.del;
		control.change = 1;
		Nova.Cookie.set("PlayList_control", JSON.stringify(control));
	}
	PlayListIndexCallback();
	PlayList.init();
	if(data.callback && data.callback != '' && data.callback != 'null' && data.callback != 'undefined'){
		try{
			eval(data.callback + "()");
		}catch(e){
		}
	}
};
	

//按值删除数组元素，并重新排列数组键值
//PlayList.delArrByValue = function (arr, value){
//	var len = arr.length;
//	var newArr = new Array();
//	for(var i=0; i<len; i++)
//	{
//		try{
//			if(arr[i] == "undefined" || arr[i].videoid == "undefined") continue;
//			if(value.videoid != "undefined")
//			{
//				if(arr[i].videoid != value.videoid)
//				{
//					var o = new item;
//					o.videoid = arr[i].videoid;
//					newArr.push(o);
//				}
//			}
//			else 
//			{
//				if(arr[i] != value)
//				{
//					newArr.push(arr[i]);
//				}
//			}
//		}
//		catch(e)
//		{}
//	}
//	return newArr;
//}
PlayList.clickToFast = function()
{
	var clickTime = parseInt(Nova.Cookie.get("PlayList_play_click"));
	var t = parseInt((new Date).getTime()/1000);
	if(clickTime + 2 >= t) return true;//2秒内不能重操作
	else
	{
		Nova.Cookie.set("PlayList_play_click", t);
		return false;
	}
}


PlayList.getAll = function(){
	try{
		var items = new Array();
		var list = window.PlayList_list;
		for(var i=0; i<list.length; i++)
		{
			var it = new item;
			it.videoid = list[i];
			items.push(it);
		}	
		if (items instanceof Array){
			return items;
		}else{
			throw "false";
		}
	}catch(e){
		return new Array();
	}
}

var PlayListSetRandomCallback = function(data){
	var data = data.data;
	if(data.list)
	{
		window.PlayList_list = data.list;
		window.PlayList_list_random = data.list_random;
	}
}
PlayList.setAllRandom = function(){
	nova_call(this.setRandomUrl,{}, 'PlayListSetRandomCallback', null, true);
}

//随机播放列表
PlayList.getAllRandom = function(){
	try{
		var items = new Array();
		var list = window.PlayList_list_random;
		for(var i=0; i<list.length; i++)
		{
			var it = new item;
			it.videoid = list[i];
			items.push(it);
		}
		if (items instanceof Array){
			return items;
		}else{
			throw "false";
		}
	}catch(e){
		return new Array();
	}
}



PlayList.check = function(videoid){
	var items = this.getAll();
	var len = items.length;
	for(i=0;i<len;i++){
		if(videoid == items[i].videoid){
			return true;
		}
	}
	return false;
}

PlayList.del = function(videoid,callback){
	nova_call(this.delUrl,{videoid:videoid,callback:callback}, 'PlayListDelCallback', null, true);
}

var PlayListDelCallback = function(data){
	//var data = JSON.parse(data);
	if(data.errno == 1)return false;
	window.PlayList_list = data.data.list;
	window.PlayList_list_random = data.data.list_random;
	var control = new PlayListControl;
	control.del = data.data.del;
	control.change = 1;
	Nova.Cookie.set("PlayList_control", JSON.stringify(control));
	PlayListIndexCallback();
	if(data.callback && data.callback != '' && data.callback != 'null' && data.callback != 'undefined'){
		try{
			eval(data.callback + "()");
		}catch(e){
		}
	}
}
//生成随机播放列表，洗牌算法，客户端不适合做大数据量处理
//PlayList.shuffle = function(plist){
//	if(plist.length == "undefined" || plist.length == 0) return new Array();
//	var list = JSON.stringify(plist);//防止js数组的引用传递
//	list = JSON.parse(list);
//	var length = list.length;
//	var rand;
//	var temp;
//	var randMax;
//	var cards = new Array();
//	for(var i = 0; i < length; i++)
//	{
//		randMax = length-1-i; 
//		rand = Math.floor(Math.random()*randMax);
//		cards[i] = list[rand];
//		if(rand == randMax) continue;
//		temp = list[rand];
//		list[rand] = list[randMax];
//		list[randMax] = temp;
//	}
//	return cards;
//}

var PlayListCleanCallback = function(data){
	PlayListGetCallback(data);
	PlayListIndexCallback();
	var control = new PlayListControl;
	control.clean = 1;
	Nova.Cookie.set("PlayList_control", JSON.stringify(control));
	if(data.callback && data.callback != '' && data.callback != 'null' && data.callback != 'undefined'){
		try{
			eval(data.callback + "()");
		}catch(e){
		}
	}
}
PlayList.clean = function(callback){
	if(confirm("确定清空点播单？") == false)
	{
		return false;
	}
	nova_call(this.cleanUrl,{callback:callback}, 'PlayListCleanCallback', null, true);
	if(callback != undefined && callback !="" && typeof(callback) == "function"){
		try{
			callback();
		}catch(e){}
	}
}
PlayList.list = function (start,end){}
//获取用户的点播单数目
PlayList.getNum = function(){
}
PlayList.render = function(img,callback){
		if(img.id==undefined){
			//参数是直接的ID，兼容以前模式
			var videoid = img;
		}else{
			var tmp=img.id.split("_");
			if(tmp[1]==undefined || tmp[1]==""){return;}
			var videoid = tmp[1];
		}
		if(!PlayList.check(videoid)){
			PlayList.add(videoid);
		}else{
			if(img.nodeName.toLowerCase() == 'img') this.del(videoid);
		}
		PlayList.init();
		if(callback != undefined && callback !=""){
			try{
				callback();
			}catch(e){}
		}
		Nova.addScript("http://hz.youku.com/red/click.php?tp=1&cp=4000554&cpp=1000223&"+Math.random());
		
}
PlayList.init = function(module){
	try{
		if(PlayList.cacheTag.length==0){
			var list=[document.getElementsByTagName('img'),document.getElementsByTagName('span')];
			var f=true;
		}else{
			var list = [PlayList.cacheTag];
			var f=false;
		}
		var items = this.getAll();
		var n = list.length;
		while(n-- > 0) {
			var n2=list[n].length;
			while(n2-->0){
				var inPlayList =false;
				var o= list[n][n2];
				if( o.id == undefined || o.id =="" )continue;
				
				var tmp =o.id.split("_");
				if(tmp[0]!="PlayListFlag" || tmp[1]==undefined || tmp[1]=="")continue;
				var videoId= tmp[1];
				if(f)PlayList.cacheTag=PlayList.cacheTag.concat(o);

				for(var i=0;i<items.length;i++){
					if(videoId == items[i].videoid){//在播放列表里
						inPlayList=true;
						break;
					}
				}

				if(o.onclick == undefined || o.onclick == "") {
					o.onclick = function(){
						PlayList.render(this);
					}
				}
				if(inPlayList){
					o.title="从点播单移除";
					o.onmouseout=function(){}
					o.onmouseover=function(){}
					if(o.nodeName.toLowerCase()=="img"){
						if(o.src.indexOf("qlus.gif")>-1)continue;
						o.style.display="block";
						o.src=PlayList.imageQlsed.src;
					}else if(o.nodeName.toLowerCase()=="span"){
						o.title = '开始播放';
						o.className = 'ico__listexist';
						try {
							var link = Element.extend(o).up('ul').down('a');
							var vlink = link.href.substr(0, link.href.indexOf('/', 7))+'/v_show/id_'+videoId+'_type_99.html';
							Element.extend(o).replace('<a id="PlayListFlag_'+videoId+'" title="'+o.title+'" target="_blank" class="'+o.className+'" href="'+vlink+'"></a>');
						} catch(e) {}
					}
				}else{
					o.title="添加到点播单";
					if(o.nodeName.toLowerCase()=="img"){
						if(o.src.indexOf("qlus.gif")>-1)continue;
						o.style.display="block";
						o.src=PlayList.imageQls.src;
						o.onmouseout=function(){ this.src=PlayList.imageQls.src;}
						o.onmouseover=function(){ this.src=PlayList.imageQlh.src;}
					}else if(o.nodeName.toLowerCase()=="span"){
						o.className = 'ico__listquick';
						o.onmouseout = function(){this.className = 'ico__listquick';};
						o.onmouseover = function(){this.className = 'ico__listadd';};
					}
				}
			}
		}
	}catch(e){}
}
//}}}
//{{{user interface
function PlayListIndexCallback(){
	var view = '0';
	try{
			//var items=JSON.parse(this.Cookie.get("PlayList"));
			var items=PlayList.getAll();
			if (items instanceof Array){
				view = items.length;
				document.getElementById('playlist_count').innerHTML = view;
				if(view == 0)
				{
					document.getElementById('om_play').innerHTML = '';
				}
				else
				{
					document.getElementById('om_play').innerHTML = '<a href="http://hz.youku.com/red/click.php?tp=1&cp=4003074&cpp=1000223&url=http://'+v_domain+'/v_show/id_'+items[0].videoid+'_type_99.html">开始播放</a>';
				}
			}else{
				document.getElementById('om_play').innerHTML = '';
			}
	}catch(e){
	}
	//MiniHeader.playlist_click();
	return false;
//	if(PlayList.getAll().length==0){	
//		document.getElementById("playlist_span").style.display="none";
//	}else{
//		document.getElementById("playlist_span").style.display="inline";
//	}
//	document.getElementById("playlist_count").innerHTML= PlayList.getAll().length;
}
function PlayListIndexAdd(item) {
    var g = document.createElement("a");
    g.href="/v/show/id/"+item.videoid;
    g.innerHTML='<img style="margin:2px; padding:2px" src="'+item.logo+'" width="36" height="27" border="0" />';
    document.getElementById("PlayListIndexContenter").appendChild(g);
}

function PlayListSave(){
		if(islogin()){
		PlayListSaveDialog();
		}else{
		login(PlayListSaveDialog);
		}
}
function PlayListSaveDialog(r){
	try{
	Dialog.cancelCallback()
	}catch(e){}
    if(pop!=null)pop.close();
    pop=new Popup({contentType:1,isSupportDraging:false,isReloadOnClose:false,width:580,height:480});
    pop.setContent("title","");
    pop.setContent("contentUrl", "/v/showPlayListSave");
    pop.build();
    pop.show();
}
//}}}

window.nova_init_hook_playlist = function (){
	try{
		PlayList.init(); 
	}catch(e){}
}
try{
if(NovaOptions.compatibleMode == true)
{
	window.onload = window.nova_init_hook_share;
}
}catch(e){}
//{{{记录视频书签
PlayList.tag="PlayListTag";
PlayList.setPlayLogUrl = 'http://v.youku.com/QVideo/~ajax/setPlayLog';
PlayList.getPlayLogUrl = 'http://v.youku.com/QVideo/~ajax/getPlayLog';
PlayList.addTag= function(o){
	//nova_call(this.setPlayLogUrl,o, '', null, true);
	return false;
	
	var t=0;
	if(o && o.ns && o.ns.time && o.ns.alltime && (parseInt(o.ns.time)<parseInt(o.ns.alltime)-5)){
		t=parseInt(o.ns.time);
	}
	var items = new Array();
	try{
		var items_tmp = JSON.parse(Nova.Cookie.get(PlayList.tag));
		if (items_tmp instanceof Array){
			items = items_tmp;
		}
	}catch(e){}
	//{{{check unique
	for(var i=0;i<items.length;i++){
			if(	
				(items[i].folderid!=undefined && items[i].folderid == o.folderid)|| 
				(items[i].showid!=undefined && items[i].showid== o.showid)|| 
				items[i].videoid == o.videoid
			){
					items.splice(i,1);
					break;
			}
	}
	//}}}
	try{
		var it = new item;
		if(t>0)it.sec= t;
		it.videoid=o.videoid;
		if(o.folderid){ it.folderid = o.folderid }
		if(o.showid){ it.showid= o.showid}
		if(o.vidEncoded){ it.vidEncoded= o.vidEncoded}
		if(o.stage){ it.stage= o.stage}
		if(o.order){ it.order= o.order}
		if(o.pos){ it.pos = o.pos}
		items.unshift(it);
		items = items.slice(0,30);
	}catch(e){}
	Nova.Cookie.set(PlayList.tag,JSON.stringify(items),15);
	
}
PlayList.delTag= function(o){
	//return true;
	
	var items = new Array();
	try{
		var items_tmp = JSON.parse(Nova.Cookie.get(PlayList.tag));
		if (items_tmp instanceof Array){
			items = items_tmp;
		}
	}catch(e){}
	for(var i=0;i<items.length;i++){
			if((o.folderid && items[i].folderid== o.folderid) || (o.videoid && items[i].videoid == o.videoid)){
					items.splice(i,1);
					break;
			}
	}
	Nova.Cookie.set(PlayList.tag,JSON.stringify(items),15);
	
};
PlayList.getTagCallback = function(items){
	playmode = window._playmode;
	callback = window._callback;
	args = window._args;
		switch(parseInt(playmode)){
			case 2://专辑
				if(args && args.folderid!=undefined){
					for(var i=0;i<items.length;i++){
						if(	items[i].folderid==args.folderid ){
							//return(items[i]);
							//(callback+"("+items[i]+")");
							callback(items[i]);
							break;
						}
					}
				}
			break;
			case 3://节目
				if(args && args.showid!=undefined){
					for(var i=0;i<items.length;i++){
						if(	items[i].showid==args.showid){
							//return items[i];
							//callback(items[i]);
							callback(items[i]);
							break;
						}
					}
				}
			break;
			default://视频
				if(args && args.videoid!=undefined){
					for(var i=0;i<items.length;i++){
						if(	items[i].videoid==args.videoid){
							//return items[i];
							//callback(items[i]);
							//(callback+"("+items[i]+")");
							callback(items[i]);
							break;
						}
					}
				}
		}
}
PlayList.getTag=function(playmode,args,callback){
	/*
	window._callback = callback;
	window._playmode = playmode;
	window._args = args;
	nova_call(this.getPlayLogUrl,{}, "PlayList.getTagCallback", null, true);
	*/
	
	var items = new Array();
	try{
		var items_tmp = JSON.parse(Nova.Cookie.get(PlayList.tag));
		if (items_tmp instanceof Array){
			items = items_tmp;
		}
	}catch(e){}
	if(items.length==0)return;
	
}
PlayList.getAllTag=function(callback){
	nova_call(this.getPlayLogUrl,{}, callback, null, true);
}
//}}}
//{{{ hoverVP
PlayList.flag = "PlayListFlag";
PlayList.HoverVP = function(){}
PlayList.HoverVP.vmenuqueue = new Array();//menu added
PlayList.HoverVP.collection = new Array();
PlayList.HoverVP.collection['videos'] = new Array();
//PlayList.HoverVP.collection['shows'] = new Array();
PlayList.HoverVP.init = function(){PlayList.HoverVP.walk();PlayList.HoverVP.bind();}
PlayList.HoverVP.walk = function(){
	var ULs = document.getElementsByTagName("UL");
	for(var i=0; i<ULs.length; i++){
		var UL = ULs[i];
		if(UL.className == 'v' || UL.className.indexOf('v ') != -1){//查找video 
			var LIs = UL.getElementsByTagName('LI');
			var vmenu = null;
			var linker = null;
			for(var j=0; j<LIs.length; j++){
				var LI = LIs[j];
				if(LI.className == 'v_menu'){ 
					vmenu = LI; 
					vmenu.style.display='none'; 
					//点播单
					var videoId = 0;
					var tmp = vmenu.id.split("_");
					if(tmp[0]==PlayList.flag && (tmp[1]!=undefined || tmp[1]!="")) videoId = tmp[1];
					if (PlayList.check(videoId))
					{
						vmenu.style.display='block'; 
						vmenu.innerHTML = '<span class="ico__listexist" title="播放该视频"><a href="http://v.youku.com/v_show/id_'+videoId+'_type_99.html" target="_blank"></a></span>';
					}else
					{
						vmenu.innerHTML = '<span class="ico__listadd" title="添加到点播单"></span>';
					}
				}
				if(LI.className == 'v_link'){ linker = LI; }
			}
			if(vmenu && linker ){ PlayList.HoverVP.collection.videos.push({'linker': linker, 'vmenu': vmenu}); }
		}
		/*
		if(UL.className == 'p' || UL.className.indexOf('p ') != -1){//查找show
			var LIs = UL.getElementsByTagName('LI');
			var status = null;
			var linker = null;
			for(var j=0; j<LIs.length; j++){
				var LI = LIs[j];
				if(LI.className == 'p_status'){ status = LI; }
				if(LI.className == 'p_link'){ linker = LI; }
			}
			if(status && linker ){ PlayList.HoverVP.collection.shows.push({'linker': linker, 'status': status}); }
		}
		*/
	}
}
PlayList.HoverVP.getvmenu = function(linker){
	var len = PlayList.HoverVP.collection.videos.length;
	for(var i=0; i<len; i++){
		var v = PlayList.HoverVP.collection.videos[i];
		if(v.linker == linker){ return v.vmenu; }
	}
	return null;
}
PlayList.HoverVP.getvlinker = function(vmenu){
	var len = PlayList.HoverVP.collection.videos.length;
	for(var i=0; i<len; i++){
		var v = PlayList.HoverVP.collection.videos[i];
		if(v.vmenu == vmenu){ return v.linker; }
	}
	return null;
}
PlayList.HoverVP.bind = function(){
	var len1 = PlayList.HoverVP.collection.videos.length;
	for(var i=0; i<len1; i++){
		var v = PlayList.HoverVP.collection.videos[i];
		v.linker.onmouseover = function(){ PlayList.HoverVP.showvmenu(PlayList.HoverVP.getvmenu(this)); };
		v.linker.onmouseout = function(){ PlayList.HoverVP.hidevmenu(PlayList.HoverVP.getvmenu(this)); };
		v.vmenu.onmouseover = function(){ PlayList.HoverVP.showvmenu(this); };
		v.vmenu.onmouseout = function(){ PlayList.HoverVP.hidevmenu(this); };
		v.vmenu.onclick = function(){PlayList.HoverVP.clickvmenu(this); };
	}
	/*
	var len2 = PlayList.HoverVP.collection.shows.length;
	for(var i=0; i<len2; i++){
		var p = PlayList.HoverVP.collection.shows[i];
		p.linker.onmouseover = function(){ PlayList.HoverVP.showpstatus(PlayList.HoverVP.getpstatus(this)); };
		p.linker.onmouseout = function(){ PlayList.HoverVP.hidepstatus(PlayList.HoverVP.getpstatus(this)); };
	}
	*/
}
PlayList.HoverVP.vemenuisadded = function(vmenu){
	for(var i=0, len=PlayList.HoverVP.vmenuqueue.length; i<len; i++){
		if(vmenu == PlayList.HoverVP.vmenuqueue[i]){
			return true;	
		}
	}
	return false;
}
PlayList.HoverVP.clickvmenu = function(vmenu){
	if(!PlayList.HoverVP.vemenuisadded()){
		PlayList.HoverVP.vmenuqueue.push(vmenu);
		var vSpans = vmenu.getElementsByTagName('span');
		if (vSpans[0].className == 'ico__listadd')
		{
			var videoId = 0, title = '', logo = '';
			var tmp = vmenu.id.split("_");
			if(tmp[0]==PlayList.flag && (tmp[1]!=undefined || tmp[1]!="")) videoId = tmp[1];
			PlayList.add(videoId);
			PlayListIndexCallback();				
			vmenu.innerHTML = '<span class="ico__listexist" title="播放该视频"><a href="http://v.youku.com/v_show/id_'+videoId+'_type_99.html"'+' target="_blank"></a></span>';
		}
		vmenu.onclick = null;
	}
}
PlayList.HoverVP.showvmenu = function(vmenu){
	if(!vmenu){ return; }
	//点播单
	var videoId = 0;
	var tmp = vmenu.id.split("_");
	if(tmp[0]==PlayList.flag && (tmp[1]!=undefined || tmp[1]!="")) videoId = tmp[1];
	if (PlayList.check(videoId)) return;
		
	if(!PlayList.HoverVP.vemenuisadded(vmenu)){
		vmenu.style.display ='block';
	}
}
PlayList.HoverVP.hidevmenu = function(vmenu){
	if(!vmenu){ return; }
	//点播单
	var videoId = 0;
	var tmp = vmenu.id.split("_");
	if(tmp[0]==PlayList.flag && (tmp[1]!=undefined || tmp[1]!="")) videoId = tmp[1];
	if (PlayList.check(videoId)) return;
	
	if(!PlayList.HoverVP.vemenuisadded(vmenu)){
		vmenu.style.display ='none';
	}	
}
PlayList.HoverVP.showvmenu = function(vmenu){
	if(!vmenu){ return; }
	if(!PlayList.HoverVP.vemenuisadded(vmenu)){
		vmenu.style.display ='block';
	}
}
/*
PlayList.HoverVP.getpstatus = function(linker){
	var len = PlayList.HoverVP.collection.shows.length;
	for(var i=0; i<len; i++){
		var p = PlayList.HoverVP.collection.shows[i];
		if(p.linker == linker){ return p.status; }
	}
	return null;
}
PlayList.HoverVP.hidepstatus = function(pstatus){
	if(!pstatus){ return; }
	pstatus.style.display ='none';
}
PlayList.HoverVP.showpstatus = function(pstatus){
	if(!pstatus){ return; }
	pstatus.style.display ='block';
}
*/
//}}}
