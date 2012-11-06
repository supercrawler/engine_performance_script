(function() {
	if(typeof $ == 'undefined')
		$ = document.getElementById;

	function hzClick() {
		observe(document, 'click', _hzClick);
	}
	function _hzClick(event) {
		var charset, cp,
			node = event.srcElement || event.target, type = event.type,
			currentTarget = event.currentTarget;

		if (currentTarget && currentTarget.tagName) {
			if (type === 'load' || type === 'error' ||
				(type === 'click' && currentTarget.tagName.toLowerCase() === 'input'
				 && currentTarget.type === 'radio'))
			 node = currentTarget;
		}
		if (typeof node == 'undefined' || typeof node.getAttribute == 'undefined')return;

		if (node.nodeType == Node.TEXT_NODE)
			node = node.parentNode;
        
		if (typeof node == 'undefined' || typeof node.getAttribute == 'undefined')return;

		if(!(charset = node.getAttribute('hzcharset')) || charset.indexOf('hz-') != 0)
			charset = node.getAttribute('charset');
		if(!charset || charset.indexOf('hz-') != 0) return;
		cp = charset.substr(3).split('-');
		if(cp.length != 2) return;
		addScript('http://hz.youku.com/red/click.php?tp=1&cp='+cp[0]+'&cpp='+cp[1]+'&'+Math.random());
	}
	function observe(dom, evtName, func) {
      if (dom.addEventListener)
        dom.addEventListener(evtName, func, false);
      else
        dom.attachEvent('on' + evtName, func);
	}
	function addScript(id, src) {
		var script = typeof id == 'string'? $(id) :
				(typeof id == 'object' && 'nodeName' in id && id.nodeName.toLowerCase() == 'script')? id :
					document.createElement('script');
		if(!script) script = document.createElement('script');
		if(!src && typeof id == 'string') src = id;
		script.src = src
		return document.getElementsByTagName('head')[0].appendChild(script);
	}
	window.setTimeout(hzClick, 20);
})();
