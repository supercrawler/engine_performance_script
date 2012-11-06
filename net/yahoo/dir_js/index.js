//email related
function GetCookie(name) {
    var s, e;
    s = document.cookie.indexOf(name + "=");
    if (s == -1)
        return "";
    s += name.length + 1;
    e = document.cookie.indexOf(';', s);
    if (e == -1)
        e = document.cookie.length;
    return document.cookie.substring(s, e);
}
function SetCookie(n, t, ex) {
    var cook;
    var exp = new Date();
    exp.setTime(exp.getTime() + ex * 60 * 60 * 1000);
    cook = n + "=" + t + "; domain=" + document.domain + "; expires=" + exp.toGMTString();
    document.cookie = cook;
}
function re_click(name, href) {
    if (document.images) {
        A = "http://cn.rd.yahoo.com/home/" + name + "/" + "url=" + encodeURIComponent(href) + "/" + "*" + "http://cn.yimg.com/search/yisou/clk.gif?_rnd=" + Math.random();
        try {
            setTimeout(function() {
                (new Image()).src = A;
                logit("new Image created! " + A);
            }, 500);
        }
        catch (e) {
            logit(e);
        }
    }
}
function onChoosePage(sName) {
    SetCookie("yahoo_hp_mailenterance", sName, 2400);
    if (sName == "to_intoemail") {
        document.getElementById("loginToUrl").value = "http://cn.rd.yahoo.com/home/yhp0806/login/tomailpage/*" + "http://mail.cn.yahoo.com/";
        document.getElementById("loginCnrid").value = "yhptomail_10009";
        re_click("yhp0806/login/tomailpage", "http://mail.cn.yahoo.com/");
    }
    else {
        document.getElementById("loginToUrl").value = "http://cn.rd.yahoo.com/home/yhp0806/login/tostandby/*" + "http://cn.yahoo.com/";
        document.getElementById("loginCnrid").value = "yhptoself_10000";
        re_click("yhp0806/login/tostandby", "http://cn.yahoo.com/");
    }
}

(function($) {
    $(document).ready(function() {
        //navi
        var timeout_navi_out = -1,
            timeout_navi_on = -1;
        var top_navs = $('.y_navi li').not('.y_navi .sethome');
        top_navs.mouseenter(function() {
            timeout_navi_out = clearTimeout(timeout_navi_out);
            var tar = $(this),
                sub = tar.find('.sub_nav');
            timeout_navi_on = clearTimeout(timeout_navi_on);
            timeout_navi_on = setTimeout(function() {
                tar.siblings().removeClass('hover');
                tar.siblings().find('.sub_nav').hide();
                if (sub.length) {
                    tar.addClass('hover');
                    sub.show();
                }
            }, 150);
        }).mouseleave(function() {
            timeout_navi_on = clearTimeout(timeout_navi_on);
            var tar = $(this),
                sub = tar.find('.sub_nav');
            timeout_navi_out = clearTimeout(timeout_navi_out);
            timeout_navi_out = setTimeout(function() {
                if (sub.length) {
                    tar.removeClass('hover');
                    sub.hide();
                }
            }, 200);
        });
        $('.y_navi').mouseleave(function() {
            $(this).find('li.hover').removeClass('hover').find('.sub_nav').hide();
        });

        //logo_tip_box
        var logo_tip_box = $('.logo_tip_box');
        $('.y_head .logo').click(function() {
            logo_tip_box.show();
        });
        $('.y_head .logo').mouseleave(function() {
            logo_tip_box.hide();
        });

        //focus
        var conts = $('.y_focus .conts li'),
            tabs = $('#focustab li'),
            dots = $('.y_focus .status .op').children().not('.arr'),
            focusNum = conts.length,
            oneLen = tabs.first().outerWidth(),
            arr = $('.y_focus .status .op .arr');
        var autoSlideInv = -1,
            autoInitIndex = 0;
        function playFocus(i, isFade) {
            isFade = isFade || false;
            var cur_i = $('#focustab li.on').index();
            if (cur_i != i) {
                if (i > 3) {
                    tabs.parent().stop().animate({
                        'margin-left': (-1 * 4) * oneLen
                    });
                    arr.attr('title', arr.attr('data-prev')).addClass('arr_left');
                } else {
                    tabs.parent().stop().animate({
                        'margin-left': 0
                    });
                    arr.attr('title', arr.attr('data-next')).removeClass('arr_left');
                }
                var tar_con = conts.eq(i);
                tabs.eq(i).addClass('on').siblings().removeClass('on');
                dots.eq(i).addClass('on').siblings().removeClass('on');
                if (isFade) {
                    tar_con.siblings().removeClass('on').hide();
                    tar_con.fadeIn(600, function() {
                        tar_con.addClass('on');
                    });
                } else {
                    tar_con.show().addClass('on').siblings().hide().removeClass('on');
                }
                $('.y_focus .status .num').text((i + 1) + ' / ' + focusNum);
                autoInitIndex = i;
            }
        }
        var timeoutDelay = -1,
            delayTime = 200;
        tabs.add(dots).mouseenter(function() {
            var tar_i = $(this).index();
            timeoutDelay = clearTimeout(timeoutDelay);
            timeoutDelay = setTimeout(function() {
                playFocus(tar_i);
            }, delayTime);
        }).mouseleave(function() {
            timeoutDelay = clearTimeout(timeoutDelay);
        });
        arr.click(function() {
            var cur_i = $('#focustab li.on').index();
            if (cur_i > 3) {
                playFocus(0, true);
            } else {
                playFocus(4, true);
            }
        });

        function autoSlideFoc() {
            return setInterval(function() {
                playFocus(autoInitIndex, true);
                if (autoInitIndex < focusNum - 1) {
                    autoInitIndex++;
                } else {
                    autoInitIndex = 0;
                }
            }, 10000);
        }
        autoSlideInv = autoSlideFoc();
        $('.y_focus').hover(function() {
            autoSlideInv = clearInterval(autoSlideInv);
        }, function() {
            autoSlideInv = autoSlideFoc();
        });

        //headline tabs
        var headline_timeout = -1;
        $('.headline .tab li').mouseenter(function() {
            var tar = $(this);
            headline_timeout = clearTimeout(headline_timeout);
            headline_timeout = setTimeout(function() {
                var i = tar.index();
                tar.addClass('on').siblings().removeClass('on');
                $('.headline .cont').eq(i).show().siblings('.cont').hide();
            }, 100);
        }).mouseleave(function() {
            headline_timeout = clearTimeout(headline_timeout);
        });


        //tab ad
        $('.tab_ad').each(function(i, o) {
            var tab = $(o).children(),
                con = $(o).siblings('.switch_body');
            tab.mouseenter(function() {
                var tar_i = $(this).index();
                tab.not($(this).addClass('on')).removeClass('on');
                con.not(con.eq(tar_i).show()).hide();
            });
        });

        //ad switch_list
        $('.switch_list').each(function(i, o) {
            var hot = $(o).children();
            hot.mouseenter(function() {
                $(this).find('.m').addClass('on');
                hot.not($(this)).find('.m').removeClass('on');
            });
        });

        //stock seach
        $('.stock_sch .tag').hide().show();
        $('.stock_sch .code').val('').focus(function() {
            $(this).siblings('.tag').hide();
        }).blur(function() {
            if ($.trim($(this).val()) == '') {
                $(this).siblings('.tag').show();
                $(this).val('');
            }
        });

        //sethomepage
        $('#setashomepage').click(function(e) {
            try {
                $(this).css('behavior', 'url(#default#homepage)');
                this.setHomePage("http://cn.yahoo.com");
            } catch (_err) {
                alert("抱歉!您的浏览器不支持直接设为首页。您可通过浏览器 工具->选项->使用当前页->确定，完成设为首页。");
            }
            e.preventDefault();
        });

        //email login begin
        (function() {
            var tip = $('#emailct');
            if (document.getElementById("to_intoemail")) {
                if (GetCookie("yahoo_hp_mailenterance") == "to_intoemail") {
                    document.getElementById("loginToUrl").value = "http://cn.rd.yahoo.com/home/yhp0806/login/tomailpage/*" + "http://mail.cn.yahoo.com/";
                    document.getElementById("loginCnrid").value = "yhptomail_10009";
                }
                else {
                    document.getElementById("loginToUrl").value = "http://cn.rd.yahoo.com/home/yhp0806/login/tostandby/*" + "http://cn.yahoo.com/";
                    document.getElementById("loginCnrid").value = "yhptoself_10000";
                }
            }

            $('#login_form').bind('submit', function(e) {
                if ($('#emailinput').val() == '') {
                    $('#emailinput').focus();
                    return false;
                } else if ($('#pwdinput').val() == '') {
                    $('#pwdinput').focus();
                    return false;
                } else {
                    $(this).action = 'https://edit.bjs.yahoo.com/config/login';
                    return true;
                }
            });

            $('#to_intoemail').click(function(e) {
                $('#login_form').trigger('submit');
            });

            $('#pwdinput,#emailinput').each(function() {
                var tar = $(this),
                    timeout_ipt = -1;
                tar.prev('label').hide();
                timeout_ipt = setTimeout(function() {
                    if ($.trim(tar.val()) == '') {
                        tar.prev('label').show();
                    } else {
                        tar.prev('label').hide();
                    }
                }, 300);
            });
            $('#pwdinput,#emailinput').focus(function() {
                $(this).prev('label').hide();
            }).blur(function() {
                if ($.trim($(this).val()) == '') {
                    $(this).val('').prev('label').show();
                }
            });

            $('#pwdinput').keyup(function(e) {
                var key = e.keyCode;
                if (key == 13) {
                    $('#login_form').trigger('submit');
                }
            });

            $('#emailinput').keyup(function(e) {
                var key = e.keyCode;
                var current = tip.find('li.on');
                if ($.trim($(this).val()) == '') {
                    $(this).val('').prev('label').show();
                } else {
                    $(this).prev('label').hide();
                }
                if (key == 40) {//key down
                    if (current.length == 1) {
                        if (current.next().length == 1) {
                            current.removeClass('on').next().addClass('on');
                        }
                    } else {
                        tip.find('li').first().addClass('on');
                    }
                } else if (key == 38) {//key up
                    if (current.length == 1 && current.prev().length == 1) {
                        current.removeClass('on').prev().addClass('on');
                    }
                } else if (key == 13) {//enter
                    if (current.length == 1) {
                        e.preventDefault();
                        $(this).val(current.html());
                        tip.hide();
                    } else {
                        $(this).change();
                    }
                } else {
                    $(this).change();
                }
            }).change(function(e) {
                var value = $(this).val();
                if (value.match('@') != null || value.length < 1) {
                    tip.hide();
                    return;
                }
                var last = $(this).attr('last');
                if (value != 0 && value != last) {
                    var arr_email = ['yahoo.com.cn', 'yahoo.cn'];
                    var html = '<ul>';
                    for (var i = 0; i < arr_email.length; i++) {
                        html += "<li>" + value + "@" + arr_email[i] + "</li>";
                    }
                    html += "</ul>";
                    html += "<div class='footer'>请选择您的邮箱地址</div>";
                    $(this).attr('last', value);
                    tip.html(html).show(function() {
                        $('#emailct li').mouseenter(function(e) {
                            $(this).addClass('on');
                            $('#emailct li').not(this).removeClass('on');
                        }).click(function(e) {
                            $('#emailinput').val($(this).html());
                            tip.hide();
                        })
                    });
                }
            }).blur(function() {
                $(this).change();
            });
        })();
        //email login end

        //频道豆腐块内tab滑块 start
        var totalObjWidth = function(targets, start, end) {
            var width = 0;
            for (var i = start; i < end; i++) {
                width += targets.eq(i).width();
            }
            return width;
        };
        $('.chan_box .switch_tab').each(function() {
            var obj = $(this),
                tabs = obj.find('.st'),
                cur_tab = obj.find('.on');
            var init_index = tabs.index(cur_tab);
            var arr = $('<div class="arr"><div class="in"><b></b></div></div>');
            arr.css({
                width: cur_tab.width(),
                left: totalObjWidth(tabs, 0, init_index)
            });
            tabs.parent().prepend(arr);
        });
        $('.chan_box .switch_tab .st').mouseenter(function() {
            var tar = $(this),
                tab_box = tar.parents('.switch_tab'),
                arr = tab_box.find('.arr'),
                cons = tar.parents('.chan_box').find('.switch_con'),
                index = tab_box.find('.st').index(tar);
            var status_tar = {
                width: tar.width(),
                left: totalObjWidth(tab_box.find('.st'), 0, index)
            };
            arr.stop().animate(status_tar, 200, function() {
                if (index == 0) {
                    arr.addClass('first_status');
                } else {
                    arr.removeClass('first_status');
                }
                tar.addClass('on').siblings('.st').removeClass('on');
                cons.eq(index).show().siblings('.switch_con').hide();
            });
        });
        //频道豆腐块内tab滑块 end
    });
})(jQuery);