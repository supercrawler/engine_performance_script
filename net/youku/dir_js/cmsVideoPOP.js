/**
 * 普通视频控件，宽栏头条视图，泡泡
 */
var VideoPopEvent = Class.create();
VideoPopEvent.prototype = {
	vedioPopData : null,
	initialize: function() {},
	createPopHtml: function(evt){
		var evtElm = Element.extend(Event.element(evt)).up('UL');
		var vTip = evtElm.next('.popinfo');
		var poptype = vTip.getAttribute('poptype');
		var videoid = vTip.getAttribute('videoid');
		var pageRegionModuleId = vTip.getAttribute('pageRegionModuleId');
		if( !videoid || !pageRegionModuleId){
			return ;
		}
		try{
			this.vedioPopData = eval('popData_'+pageRegionModuleId+'_'+videoid);
		} catch(exception) {
			return ;
		}
		if( !this.vedioPopData ) return ;
		if(poptype == 'video'){
			vTip.innerHTML = this.createVideoHtml();
		} else if (poptype == 'show'){
			vTip.innerHTML = this.createShowHtml();
		} else if(poptype == 'show38' || poptype == 'show43' || poptype == 'show44'){
			vTip.innerHTML = this.createShow38Html();
		}
	},
	createShowHtml : function () {
		var html = '';
		var vedioData = this.vedioPopData;
		var chsetStr = vedioData.precharset;
		if( vedioData.i1.title || vedioData.i1.memo ){
			html += '<ul class="i1">';
			if( vedioData.i1.title ){
				var m_charset = chsetStr ? ('charset="' + chsetStr + '-4"') : '';
				html += '<li class="i_title"><a href="'+vedioData.i1.url+'" '+m_charset+' target="video">'+vedioData.i1.title+'</a></li>';
			}
			if( vedioData.i1.memo ){
				html += '<li class="i_intro">'+decodeURIComponent(vedioData.i1.memo)+'</li>';
			}
			html += '</ul>';
		}
		if( vedioData.i2.showsum_vv || vedioData.i2.showtotal_comment || vedioData.i2.updown ){
			html += '<ul class="i2">';
			if( vedioData.i2.showsum_vv ){
				html += '<li class="i_stat"><span class="label">播放:</span> <span class="num">'+vedioData.i2.showsum_vv+'</span></li>';
			}
			if( vedioData.i2.showtotal_comment ){
				html += '<li class="i_stat"><span class="label">评论:</span> <span class="num">'+vedioData.i2.showtotal_comment+'</span></li>';
			}
			if( vedioData.i2.updown ){
				html += '<li class="i_stat"><span class="label">顶踩:</span> <span class="num">'+vedioData.i2.updown+'</span></li>';
			}
			html += '</ul>';
		}
		if( vedioData.i3.showname || vedioData.i3.showcategory ){
			html += '<ul class="i3">';
			if( vedioData.i3.showname ){
				var m_charset = chsetStr ? ('charset="' + chsetStr + '-5"') : '';
				html += '<li class="i_user"><span class="label">节目:</span> <a target="_blank" '+m_charset+' href="'+vedioData.i3.showname.url+'">'+vedioData.i3.showname.name+'</a>';
			}
			if( vedioData.i3.showcategory ){
				html += '<li class="i_type"><span class="label">分类:</span> '+vedioData.i3.showcategory+'</li>';
			}
			html += '</ul>';
		}
		html += '<div class="clear"></div>';
		return html;
	},
	createVideoHtml : function (){
		var html = '';
		var vedioData = this.vedioPopData;
		var chsetStr = vedioData.precharset;
		if( vedioData.linkto == '1' || vedioData.linkto == '2' ){
			var type = (vedioData.linkto == '1') ? '[专题]' : '[直播]';
			html += '<ul class="i1">';
			if( vedioData.i1.title ){
				var m_charset = chsetStr ? ('charset="' + chsetStr + '-4"') : '';
				html += '<li class="i_title"><a href="'+vedioData.i1.url+'" '+m_charset+' target="video">'+type+vedioData.i1.title+'</a></li>';
			}
			if( vedioData.i1.memo ){
				html += '<li class="i_intro">'+decodeURIComponent(vedioData.i1.memo)+'</li>'
			}
			html += '</ul>';
			html += '<div class="clear"></div>';
		}else {
			if( vedioData.i1.title || vedioData.i1.memo){
				html += '<ul class="i1">';
				if( vedioData.i1.title ){
					var m_charset = chsetStr ? ('charset="' + chsetStr + '-4"') : '';
					html += '<li class="i_title"><a href="'+vedioData.i1.url+'" '+m_charset+' target="video">'+vedioData.i1.title+'</a></li>';
				}
				if( vedioData.i1.memo ){
					html += '<li class="i_intro">'+decodeURIComponent(vedioData.i1.memo)+'</li>';
				}
				html += '</ul>';
			}
			
			if( vedioData.i2.totalPv || vedioData.i2.totalComment ){
				html += '<ul class="i2">';
				if( vedioData.i2.totalPv ){
					html += '<li class="i_stat"><span class="label">播放:</span> <span class="num">'+vedioData.i2.totalPv+'</span></li>';
				}
				if( vedioData.i2.totalComment ){
					html += '<li class="i_stat"><span class="label">评论:</span> <span class="num">'+vedioData.i2.totalComment+'</span></li>';
				}
				if( vedioData.i2.updown ){
					html += '<li class="i_stat"><span class="label">顶踩:</span> <span class="num">'+vedioData.i2.updown+'</span></li>';
				}
				
				html += '</ul>';
			}
			
			if( vedioData.i3.ownerUserName.name || vedioData.i3.cate.cate_name ){
				html += '<ul class="i3">';
				if( vedioData.i3.ownerUserName.name ){
					var m_charset = chsetStr ? ('charset="' + chsetStr + '-5"') : '';
					html += '<li class="i_user"><span class="label">用户:</span> <a target="_blank" '+m_charset+' href="'+vedioData.i3.ownerUserName.url+'">'+vedioData.i3.ownerUserName.name+'</a>';
				}
				if( vedioData.i3.cate.cate_name ){
					var m_charset = chsetStr ? ('charset="' + chsetStr + '-6"') : '';
					html += '<li class="i_type"><span class="label">分类:</span> <a href="'+vedioData.i3.cate.url+'" '+m_charset+' target="_blank">'+vedioData.i3.cate.cate_name+'</a></li>';
				}
				html += '</ul>';
			}
			html += '<div class="clear"></div>';
		}
		return html;
	},
	createShow38Html : function(){
		var html = '';
		var vedioData = this.vedioPopData;
		html += '<ul class="i1">';
		if( vedioData.showname.name ){
			html += '<li class="i_title"><a href="'+vedioData.showname.url+'" target="_blank">'+vedioData.showname.name+'</a></li>';
		}
		if( vedioData.releaseyear ){
			html += '<li class="i_pub"><span class="num">' + vedioData.releaseyear + '</span></li>';
		}
		if( vedioData.i_intro ){
			html += '<li class="i_intro">' + decodeURIComponent(vedioData.i_intro) + '</li>';
		}
		html += '</ul>';
		html += '<ul class="i2">';
		if( vedioData.showsum_vv ){
			html += '<li class="i_stat"><span class="label">总播放:</span> <span class="num"> '+vedioData.showsum_vv+'</span></li>';
		}
		if( vedioData.showtotal_comment ){
			html += '<li class="i_stat"><span class="label">总评论:</span> <span class="num">'+vedioData.showtotal_comment+'</span></li>';
		}
		if( vedioData.showlength ){
			html += '<li class="i_stat"><span class="label">时长:</span> <span class="num">'+vedioData.showlength+'</span></li>';
		}
		if( vedioData.avg_vv ){
			html += '<li class="i_stat"><span class="label">集均播放:</span> <span class="num">'+vedioData.avg_vv+'</span></li>';
		}
		if( vedioData.updown ){
			html += '<li class="i_stat"><span class="label">总顶踩:</span> <span class="num">' + vedioData.updown + '</span></li>';
		}
		html += '</ul>';
		html += '<ul class="i3">';
		if( vedioData.director ){
			html += '<li class="i_director"><span class="label">导演:</span> ' + vedioData.director + '</li>';
		}
		if( vedioData.performer ){
			html += '<li class="i_actor"><span class="label">主演:</span> ' + vedioData.performer + '</li>';
		}
		if( vedioData.host ){
			html += '<li class="i_actor"><span class="label">主持人:</span> ' + vedioData.host + '</li>';
		}
		if( vedioData.area ){
			html += '<li class="i_area"><span class="label">地区:</span> ' + vedioData.area + '</li>';
		}
		if( vedioData.i_type ){
			html += '<li class="i_type"><span class="label">类型:</span> ' + vedioData.i_type + '</li>';
		}
		html += '</ul>';
		html += '<div class="clear"></div>';
		return html;
	},
	showVTip : function (evt){
		this.keepVTip();
		evt = evt || window.event;
		var pop = $('pop');
		if( !pop ){
			pop = document.createElement('div');
			pop.id = "pop";
			pop.className = "pop";
			pop.style.display = "none";
			pop.style.position = "absolute";
			pop.setAttribute("onmouseover", "if (typeof(VideoPop) != 'undefined') VideoPop.keepVTip();");
			pop.setAttribute("onmouseout", "if (typeof(VideoPop) != 'undefined') VideoPop.hideVTip(event);");
			var popMain = document.createElement('div');
			popMain.className = 'popmain';
			pop.appendChild(popMain);
			var shadow = document.createElement('div');
			shadow.className = 'shadow';
			pop.appendChild(shadow);
			pop = document.body.appendChild(pop);
		}
		this.createPopHtml(evt);
		var evtElm = Element.extend(Event.element(evt)).up('UL');
		var vTip = evtElm.next('.popinfo');
		var pos = Position.cumulativeOffset(evtElm);
		vTip = pop.down('.popmain').update().appendChild(vTip.cloneNode(true));
		pop.hide(); vTip.show();
		
		var right = pos[0] + evtElm.getWidth();
		var bottom = pos[1] + evtElm.getHeight();
		var clientWidth = document.documentElement.clientWidth || document.body.clientWidth || 0;
		var clientHeight = document.documentElement.clientHeight || document.body.clientHeight || 0;
		var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		var popWidth = Element.getWidth(pop);
		var popHeight = Element.getHeight(pop);
		if (navigator.userAgent.indexOf("MSIE") != -1) { // fixed in IE
			popWidth -= 8;
			popHeight -= 8;
		}
		var popLeft = right + 10;
		var popTop  = pos[1];
		if (right > clientWidth + scrollLeft - 300) {
			popLeft = pos[0] - popWidth - 10;
		}
		if (bottom > clientHeight + scrollTop - 200) {
			popTop = bottom - popHeight;
		}
		pop.style.left = popLeft + 'px';
		pop.style.top = popTop + 'px';
		this.popTimeout = window.setTimeout('$(\'pop\').show();', 500);
	},
	hideVTip : function (evt){
		this.keepVTip();
		evt = evt || window.event;
		var pop = $('pop');
		if( !pop ){
			pop = document.createElement('div');
			pop.id = "pop";
			pop.className = "pop";
			pop.style.display = "none";
			pop.style.position = "absolute";
			pop.setAttribute("onmouseover", "if (typeof(VideoPop) != 'undefined') VideoPop.keepVTip();");
			pop.setAttribute("onmouseout", "if (typeof(VideoPop) != 'undefined') VideoPop.hideVTip(event);");
			var popMain = document.createElement('div');
			popMain.className = 'popmain';
			pop.appendChild(popMain);
			var shadow = document.createElement('div');
			shadow.className = 'shadow';
			pop.appendChild(shadow);
			pop = document.body.appendChild(pop);
		}
		var evtElm = Element.extend(Event.element(evt)).up('UL');
		this.popTimeout = window.setTimeout('$(\'pop\').hide();', 200);
	},
	keepVTip : function () {
		if(!isNaN(this.popTimeout)) {
			window.clearTimeout(this.popTimeout);
			this.popTimeout = null;
		}
	}
}
var VideoPop = new VideoPopEvent();

// 页面加载完成后初始化页面事件
window.nova_init_hook_videopop = function(){
	Event.observe(document, "click",  VideoPop.hideVTip.bindAsEventListener(VideoPop));
}
