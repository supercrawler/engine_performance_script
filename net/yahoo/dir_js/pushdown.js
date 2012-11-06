var globle_ad_pushdown_delay = 0;
var globle_ad_pushdown_timeout = -1;
var globle_ad_pushdown_replay_timeout = -1;
var globle_ad_pushdown_width = 0;
var globle_ad_pushdown_height_x = 0;
var globle_ad_pushdown_height_s = 0;
function ad_pushdown_show(obj,size, delay, paras) {
    globle_ad_pushdown_width = size.width || 950;
    globle_ad_pushdown_height_x = size.height_x;
    globle_ad_pushdown_height_s = size.height_s;
    var _pushdown = '<div data-attr="pushdown" style="display:none; width:' + globle_ad_pushdown_width + 'px; margin:0 auto;"><div data-attr="expand" style="position:relative;height:' + globle_ad_pushdown_height_x + 'px; width:' + globle_ad_pushdown_width + 'px; overflow:hidden;"></div><div style="display:none;position:relative; height:' + globle_ad_pushdown_height_s + 'px; width:' + globle_ad_pushdown_width + 'px;overflow:hidden;" data-attr="collapse"></div></div>';
    obj.html(_pushdown);
    if (getFlashVer()) {
        $('[data-attr="pushdown"]')
        .find('[data-attr="expand"]').html(getFlashObj('pushdown_expand', paras.expandFlashUrl, globle_ad_pushdown_width, globle_ad_pushdown_height_x)).end()
        .find('[data-attr="collapse"]').html(getFlashObj('pushdown_collapse', paras.collapseFlashUrl, globle_ad_pushdown_width, globle_ad_pushdown_height_s));
    } else {
        $('[data-attr="pushdown"]')
        .find('[data-attr="expand"]').html('<a href="' + paras.imageLink + '" target="_blank"><img width="100%" src="' + paras.expandImageUrl + '" /></a>').end()
        .find('[data-attr="collapse"]').html('<a href="' + paras.imageLink + '" target="_blank"><img width="100%" src="' + paras.collapseImageUrl + '" /></a>');
    }
    $('[data-attr="pushdown"]').fadeIn(100);
    globle_ad_pushdown_delay = delay;
    globle_ad_pushdown_timeout = setTimeout(function() {
        ad_pushdown_collapse();
    }, delay);

    $('[data-attr="pushdown"] [data-attr="collapse"] img').hover(function() { ad_pushdown_replay(); });

    //function
    function getFlashObj(id, url, width, height) {
        return '<div style="position:absolute; top:0; left:0; width:' + width + 'px; height:' + height + 'px;"><object id="' + id + '" height="100%" width="100%" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0"> <param name="wmode" value="transparent"> <param name="loop" value="true"> <param value="always" name="allowScriptAccess"> <param value="' + url + '" name="movie"> <embed src="' + url + '" pluginspage="www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" play="true" loop="true" allowscriptaccess="always" wmode="transparent" style="width:100%; height: 100%;"> </object></div>';
    }

    function getFlashVer() {
        var f = "";
        var n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf('Shockwave Flash') != -1) {
                    f = n.plugins[ii].description.split('Shockwave Flash ')[1].split(' ')[0];
                    break;
                }
            }
        } else if (window.ActiveXObject) {
            for (var ii = 10; ii >= 2; ii--) {
                try {
                    var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                    if (fl) { f = ii + '.0'; break; }
                }
                catch (e) { }
            }
        }
        return f;
    }
}

function ad_pushdown_collapse() {
    globle_ad_pushdown_replay_timeout = clearTimeout(globle_ad_pushdown_replay_timeout);
    globle_ad_pushdown_timeout = clearTimeout(globle_ad_pushdown_timeout);
    $('[data-attr="pushdown"] [data-attr="expand"]').stop()
    .animate({ height: globle_ad_pushdown_height_s }, 1000, function() {
        $('[data-attr="pushdown"] [data-attr="expand"]').hide();
        $('[data-attr="pushdown"] [data-attr="collapse"]').fadeIn(100).html($('[data-attr="pushdown"] [data-attr="collapse"]').html());
    });
}

function ad_pushdown_replay() {
    $('[data-attr="pushdown"] [data-attr="expand"]').show().html($('[data-attr="pushdown"] [data-attr="expand"]').html());
    $('[data-attr="pushdown"] [data-attr="collapse"]').hide();
    $('[data-attr="pushdown"] [data-attr="expand"]').stop().animate({ height: globle_ad_pushdown_height_x }, 1000, function() {
        globle_ad_pushdown_replay_timeout = setTimeout(function() { ad_pushdown_collapse() }, globle_ad_pushdown_delay);
    });
}
