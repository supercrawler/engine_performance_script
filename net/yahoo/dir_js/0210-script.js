if(!jQuery){alert('jquery required for this ad')};
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString())) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
var yhp_popup_times = 1;
var popUp = (function () {
    var F = "http://cn.yimg.com/daphne/hp-popup-v3-0210.html";
    var A = "yhp_popup";
    var C = function () {
        var E = new Date();
		E.setDate(E.getDate()+1);
		E.setHours(0);
		E.setMinutes(0);
		E.setSeconds(0);
		E.setMilliseconds(0);
        var D = (function () {
            var N = $.cookie(A) || 0;
            N = parseInt(N) + 1;
            return N
        })();
        $.cookie(A, D, {expires: E, domain:'cn.yahoo.com', path:"/"})
    };
    var B = function () {
        var D = window.open("about:blank", "_backad", "width=720,height=300,toolbar=no,location=no,directories=no,status=yes,resizable=no,scrollbars=no");
        D.blur();
        D.opener.focus();
        D.location = F
    };
    return {
        init: function () {
            $(document).ready(function () {
                var D = $.cookie(A);
                if (parseInt(D) >= yhp_popup_times) {
                    return;
                }
                setTimeout(function () {
                    try {
                        B();
                    } catch (E) {
                    	
                    } finally {
                        C();
                    }
                }, 1000)
            });
        }
    }
})();
popUp.init();