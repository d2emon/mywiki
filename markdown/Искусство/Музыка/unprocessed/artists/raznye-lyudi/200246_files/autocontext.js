function chkAgent() {
    if (navigator.userAgent.indexOf('Konqueror') != -1) return false;
    if (navigator.userAgent.match(/Opera [1-7]/)) return false;
    return true;
}

String.prototype.begunSplit = function(limit) {
    var suff = '...';
    limit = this.lastIndexOf(' ', limit);
    if (limit == -1) {
        limit = this.length;
        var suff = '';
    }
    return this.substr(0, limit) + suff;
}

function bJsTs() {
    this.tpl = null;
    this.block = function(block) {
        this.tpl = this.tpl.replace('{{' + block + '}}', '');
        this.tpl = this.tpl.replace('{{/' + block + '}}', '');
    }
    this.parse = function(vars) {
        for (var key in vars) {
            while (this.tpl.match('{' + key + '}'))
                this.tpl = this.tpl.replace('{' + key + '}', vars[key], 'gm');
        }
        var tplA = this.tpl.split(/\{\{[a-z]+\}\}/);
        var tplS = '';
        for (var i = 1; i < tplA.length; i++) {
            var tplA2 = tplA[i].split(/\{\{\/[a-z]+\}\}/);
            tplS = tplS + tplA2[1];
        }
        this.tpl = tplA[0] + tplS;
        return this.tpl;
    }
}

function bJsT() {
    this.tpl = null;
    this.block = function(block) {
        var re = new RegExp('{({/?' + block + '})}', 'gm');
        this.tpl = this.tpl.replace(re, '');
    }
    this.parse = function(vars) {
        for (var key in vars) {
            var re = new RegExp('{' + key + '}', 'g');
            this.tpl = this.tpl.replace(re, vars[key]);
        }

        var re = new RegExp('{({([a-z]+)})}.+?{({/\\2})}', 'gm');
        this.tpl = this.tpl.replace(re, '');
        return this.tpl;
    }
}

function include(file) {
    document.write('<scr'+'ipt type="text/javascript" src="' + file + '"></scr'+'ipt>');
}

function begunAppend(params) {
    for (var key in params)
        if (params[key] && params.hasOwnProperty && params.hasOwnProperty(key)) // always check for own property in for .. in ..
            begun_auto_url += '&' + key + '=' + escape(params[key]);
}

function getCss() {
    if (begunParams.wide) {
        var css_bgulli_width = parseInt(100 / begun_auto_limit) - 1;
        var css_bgulli_float = 'float:left !important;';
    } else {
        var css_bgulli_width = 100;
        var css_bgulli_float = '';
    }
    if (begunParams.thumbs)
        var css_bgbanner_marginleft = 65;
    else
        var css_bgbanner_marginleft = 0;

    var css_bgulli_margin_bottom = 3;
    if (begunParams.thumbs && !begunParams.wide && !begunParams.autoscroll)
        var css_bgulli_height = 'min-height: 48px;';
    else
        var css_bgulli_height = '';

    if (begunParams.autoscroll) {
        var css_bgulli_height = 'height: ' + begun_scroll_height + 'px !important;';
        var css_bgulli_margin_bottom = 0;
    }

    begun_autowidth_string = new String(begun_auto_width);
    begun_autowidth_string =  begun_autowidth_string.indexOf('%')==-1 ? 'px':'';
    var cssTpl = '\
        <style><!-- \
        .begun { font-face:"arial,sans-serif" !important; cursor:pointer;cursor:hand } \
        .bgul'+rndID+' div, .bgulli'+rndID+' div  {float:none !important;clear:none !important;display:block !important;} \
        a.begun:link { color:'+begun_auto_colors[0]+';font-face:"arial,sans-serif" !important; line-height: 100% !important; } \
        a.begun:visited { color:'+begun_auto_colors[0]+';font-face:"arial,sans-serif" !important; line-height: 100% !important; } \
        a.begun:hover { color:'+begun_auto_colors[0]+';font-face:"arial,sans-serif" !important; line-height: 100% !important; } \
        a.begun:active { color:'+begun_auto_colors[0]+';font-face:"arial,sans-serif" !important; line-height: 100% !important; } \
        .bgul'+rndID+' { float: none !important; margin:5px 5px 0px 5px !important; padding:0px !important; width: '+begun_auto_width+ begun_autowidth_string+' !important; background-color: '+begun_auto_colors[3]+' !important; } \
        .bgul1 { margin:5px 5px 0px 5px !important; padding:0px !important;  background-color: '+begun_auto_colors[3]+' !important; } \
        .bgulli'+rndID+' { line-height: 100% !important; '+css_bgulli_float+' list-style:none !important; margin:0px 0px '+css_bgulli_margin_bottom+'px 0px !important; padding:0px 5px 0px 0px !important; width: '+css_bgulli_width+'% !important; '+css_bgulli_height+' font-weight:normal;background:none; overflow: hidden !important; } \
        .bgulli'+rndID+'l { line-height: 100% !important; '+css_bgulli_float+' list-style:none !important; margin:0px 0px '+css_bgulli_margin_bottom+'px 0px !important; padding:0px 5px 0px 0px !important; width: '+css_bgulli_width+'% !important; '+css_bgulli_height+' font-weight:normal;background:none; overflow: hidden !important; } \
        .bgthumb { margin:5px !important;border: 1px solid '+begun_auto_colors[2]+' !important; } \
        .bgbanner { width:expression(this.parentNode.style.width - 65) !important; margin-left:'+css_bgbanner_marginleft+'px !important; text-align: left !important; text-indent: 0px !important; } \
        .ramblersbox, .ramblersbox1 {padding:0px; margin: 0px; }\
        .ramblersbox1 td, .ramblersbox td {padding:0px; margin: 0px; color:#000000; }\
        .ramblersbox1 table, .ramblersbox table {background-color:#009CDE; padding:0px; margin: 0px; }\
        .ramblersbox1 table{background-color:#ffffff; }\
        .ramblersbox1 td{background-color:#ffffff; }\
        .ramblersbox td{background-color:#009CDE; }\
        .ramblersbox1 input, .ramblersbox input {height: 20px;} \
        //--></style>';
    return cssTpl;
}

function getStub(sWidth) {
    var rambler_search_text1 = decodeURIComponent('%D0%A0%D0%B0%D0%BC%D0%B1%D0%BB%D0%B5%D1%80%2C');
    var rambler_search_text = decodeURIComponent('%D0%9D%D0%B0%D0%B9%D1%82%D0%B8!');
    var sWidth = sWidth || begun_auto_width;
    var stubTpl = '\
        <table width="{begun_auto_width}" style="background-color: {begun_auto_colors3}; margin: 0px 5px 5px 5px;"><tr><td width="33%" style="cursor:default;"> \
        {{showhref}} \
            <a href="{href0}" style="line-height:100% !important;" target="_blank"><font style="font-size:{begun_auto_fonts_size3};" color="{begun_auto_colors2}">{text0}</font></a> \
        {{/showhref}} \
        </td> \
        <td align="center" width="33%" style="cursor:default;"><a href="http://www.begun.ru/advertiser/?r1=Begun&r2=adbegun" style="line-height:100% !important;" target="_blank"><font style="font-size:{begun_auto_fonts_size3};" color="{begun_auto_colors2}">{text1}</font></a></td> \
        <td align="right"  width="33%" style="cursor:default;"><a href="http://www.begun.ru/partner/?r1=Begun&r2=become_partner" style="line-height: 100% !important;" target="_blank"><font style="font-size:{begun_auto_fonts_size3};" color="{begun_auto_colors2}">{text2}</font></a> \
        </td></tr></table> \
       {{showformv}}\
        <form name="ramlerSbegun" class="{begun_rambler_style}" target="_blank" action="http://www.rambler.ru/srch" method="get">\
        <input type="hidden" name="set" value="www" /><input type="hidden" name="sbox" value="{sbox}" />\
        <table width="{begun_auto_width}" cellpadding="0" cellspacing="0" border="0">\
        <tr><td style="padding:2px;padding-left:15px;text-align:left;"><img width="117" height="24" src="http://autocontext.begun.ru/{begun_rambler_img}" alt="Rambler" /></td></tr>\
        <tr><td style="padding-left:11px;">\
        <table width="100%"><tr>\
        <td><input type="text" name="words" value="" style="width:100%;height:18px;" /></td>\
        <td width="75"><input type="submit" name="beguns" style="margin-left:10px;width: 70px; height:24px;" value="'+rambler_search_text+'" /></td>\
        </tr></table>\
        </td></tr></table>\
        </form>\
       {{/showformv}}\
       {{showformh}}\
        <form name="ramlerSbegun" class="{begun_rambler_style}" target="_blank" action="http://www.rambler.ru/srch" method="get">\
        <input type="hidden" name="set" value="www" /><input type="hidden" name="sbox" value="{sbox}" />\
        <table width="{begun_auto_width}" cellpadding="0" cellspacing="0" border="0">\
        <tr><td style="padding:2px;padding-left:15px;text-align:left;" width="125"><img width="117" height="24" src="http://autocontext.begun.ru/{begun_rambler_img}" alt="Rambler" /></td>\
        <td><table width="100%"><tr>\
        <td style="margin:0px;padding:0px;"><input type="text" name="words" value="" style="width:100%;height:18px;" /></td>\
        <td style="margin:0px;padding:0px;" width="75"><input type="submit" name="beguns" style="margin-left:10px;width: 70px; height:24px;" value="'+rambler_search_text+'" /></td>\
        </tr></table>\
        </td></tr></table></form>\
        {{/showformh}}\
    ';

    if (isComp)
        var template = new bJsT();
    else
        var template = new bJsTs();
    template.tpl = stubTpl;
    if (begunParams.showhref)
        template.block('showhref');

    begun_rambler_style = 'ramblersbox1';
    begun_rambler_img = 'rambler_2.gif';
    if(window.begun_rambler_type && window.begun_rambler_type == 1) {
        begun_rambler_style='ramblersbox';
        begun_rambler_img='rambler_1.gif';
    }

    if(begunStubs[5] && begunStubs[5].text && sWidth>=250) {
        if(sWidth>=350)
            template.block('showformh');
        else
            template.block('showformv');
    }

    var vars = {
        'begun_auto_colors2': begun_auto_colors[2], 'begun_auto_colors3': begun_auto_colors[3],
        'begun_auto_fonts_size3': begun_auto_fonts_size[3],
        'href0': begunStubs[0].href, 'text0': begunStubs[0].text,
        'text1': begunStubs[1].text, 'text2': begunStubs[2].text,
        'begun_auto_width': sWidth,
        'sbox': begunStubs[5].text,
        'begun_rambler_style' : begun_rambler_style,
        'begun_rambler_img' : begun_rambler_img
    }
    if (begunParams.autoscroll)
        vars.begun_auto_width = sWidth + 3;
    else
        vars.begun_auto_width = sWidth;
    return template.parse(vars);
}

function begun_logic_item(item)
{
    if (typeof(item[7])=="undefined"){item[7]='Card, Url';}
    if (item[7]!='Card, Url' && item[7]!='Card' && item[7]!='Url'){item[7]='Card, Url';}

    if (typeof(item[2])=="undefined"){item[2]='';}
    if (typeof(item[6])=="undefined"){item[6]='';}

    if (item[2]=='' && item[6]==''){return item;}
    if (item[2]=='' && item[6]!=''){item[7]='Card';}
    if (item[2]!='' && item[6]==''){item[7]='Url';}
    if (item[2]!='' && item[6]!=''){item[7]=item[7];}

    switch (item[7]) {
        case 'Card':    {item[2]=item[6]; break;}
        case 'Card, Url':   {break;}
        case 'Url': {
            break;
        }
    }
    return item;
}

function getBanner(bb, bWidth, isLast) {
    bb = begun_logic_item( bb );
    if (!bWidth)
        var bWidth = begun_auto_width;

    var suff = isLast ? 'l' : '';
    var rambler_textb_call = decodeURI('%D0%97%D0%B2%D0%BE%D0%BD%D0%B8%D1%82%D1%8C');
    var rambler_textb_contacts = decodeURI('%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%8B');

    var bannerTpl = '\
    <li class="bgulli{rndID}'+suff+'"> \
        {{thumbs}}<div><a href="{bb2}" {begun_target}><img src="{thumbSrc}" class="bgthumb" align="left" width="56" height="42" border="0"></a></div>{{/thumbs}} \
        \
        <div class="bgbanner"> \
            <div><a class="begun" style="color:{begun_auto_colors0};font-size:{begun_auto_fonts_size0};font-weight:{begun_bold};" {begun_target} href="{bb2}">{bb0}</a></div> \
            <div style="margin-top:3px;"><a class="begun" {begun_target} href="{bb2}" style="font-size:{begun_auto_fonts_size1};color:{begun_auto_colors1};text-decoration:none;">{bb1}</a></div> \
            <div style="margin-top:3px;"> \
                {{site}}<a class="begun" {begun_target} href="{bb2}" style="white-space:nowrap;font-size:{begun_auto_fonts_size2};color:{begun_auto_colors2};text-decoration:none;">{bb4}</a>{{/site}} <span style="white-space: nowrap">\
                {{ppcall}}<img src="http://autocontext.begun.ru/phone_icon.gif" style="width:12px;height:8px;border:none;" alt="" />&nbsp;<a href="javascript:void(0);" onClick="showEnterForm({i}, this,event);" class="begun" style="font-size:{begun_auto_fonts_size2};color:{begun_auto_colors2};text-decoration:none;">'+rambler_textb_call+'</a>{{/ppcall}} \
                {{ppcallcard}}<img src="http://autocontext.begun.ru/phone_icon.gif" style="width:12px;height:8px;border:none;" alt="" />&nbsp;<a href="{card_href}" target="_blank" class="begun" style="font-size:{begun_auto_fonts_size2};color:{begun_auto_colors2};text-decoration:none;">'+rambler_textb_contacts+'</a>&nbsp;<span style="color: #aaa;font-size:10px;">&#149;</span>&nbsp;<a href="javascript:void(0);" onClick="showEnterForm({i}, this, event);" class="begun" style="font-size:{begun_auto_fonts_size2};color:{begun_auto_colors2};text-decoration:none;">'+rambler_textb_call+'</a>{{/ppcallcard}}\
				{{card}}<img src="http://autocontext.begun.ru/phone_icon.gif" style="width:12px;height:8px;border:none;" alt="" />&nbsp;<a href="{card_href}" target="_blank" class="begun" style="font-size:{begun_auto_fonts_size2};color:{begun_auto_colors2};text-decoration:none;">'+rambler_textb_contacts+'</a>{{/card}}\
	</span> \
            </div> \
        </div> \
    </li> \
    ';

    if (isComp)
        var template = new bJsT();
    else
        var template = new bJsTs();
    template.tpl = bannerTpl;
    if (bb == null)
        return '';
    if (bb[4] == null) bb[4] = '';
    if (begunParams.thumbs) {
        var thumbSrc = 'http://thumbs02.begun.ru/';
        if (bb[5] != undefined && bb[5].toString().length > 2) {
            var bannerId = bb[ 5 ].toString();
            thumbSrc = thumbSrc + bannerId.charAt( bannerId.length - 2 );
            thumbSrc = thumbSrc + '/' + bannerId.charAt( bannerId.length - 1 );
            thumbSrc = thumbSrc + '/' + bannerId + '.jpg';
        } else {
            thumbSrc = thumbSrc + 'empty.jpg';
        }
        template.block('thumbs');
    }
    if ( typeof( window.ppcallArray ) == 'undefined' || window.ppcallArray == null ){
        window.ppcallArray = [];
    }
    switch(bb[7]){
        case "Card, Url": {
            template.block("site");
            if(ppcallArray[i]==1)
                template.block('ppcallcard');
            else
                template.block("card");
        } break;
        case "Url": {
            template.block("site");
            if(ppcallArray[i]==1) template.block('ppcall');
        } break;
        case "Card":{
            if(ppcallArray[i]==1)
                template.block('ppcallcard');
            else
                template.block("card");
            bb[2] = bb[6];
        } break;
        default: break;
    }
    var vars = {
        'bb0': bb[0], 'bb1': bb[1], 'bb2': bb[2], 'bb3': bb[3], 'bb4': bb[4],
        'begun_auto_colors0': begun_auto_colors[0], 'begun_auto_colors1': begun_auto_colors[1],
        'begun_auto_colors2': begun_auto_colors[2],
        'begun_auto_fonts_size0': begun_auto_fonts_size[0], 'begun_auto_fonts_size1': begun_auto_fonts_size[1],
        'begun_auto_fonts_size2': begun_auto_fonts_size[2],
        'i': i, 'begun_target': begun_target, 'begun_auto_width': bWidth,
        'begun_bold': begun_bold, 'thumbSrc': thumbSrc, 'rndID': rndID,
        'card_href': bb[6]
    }
    return template.parse(vars);
}

function begunPrint() {
    isComp = chkAgent();
    if (window.begun_block_type == 'Horizontal')
        begunParams.wide = 1;
    if (window.begun_block_type == 'Vertical')
        begunParams.wide = 0;
    if (window.ppcallArray != null) {
		document.write('<scr' + 'ipt src="http://ppcall.begun.ru/auto_ppcall.js" type="text/javascript"></scr' + 'ipt>');
    }
    begun_auto_width = window.begun_auto_width || 350;
    begun_auto_limit = window.begun_auto_limit || 3;
    begun_scroll_height = window.begun_scroll_height || '';
    var begunSpans = window.begun_spans;
    begun_auto_colors = window.begun_auto_colors || ['#0000CC', '#000000', '#00CC00', '#FFFFFF'];
    begun_auto_fonts_size = window.begun_auto_fonts_size || ['10', '9', '9', '9'];

    begun_target = 'target="_blank"';
    begun_bold = 'bold';

    rndID = Math.round(Math.random() * 99 + 1);

    if (begunParams.multispan)
        begunParams.wide = 0;

    if (begunParams.wide) {
        if (begun_auto_limit < 3)
            begun_auto_limit = 3;
        else if (begun_auto_limit > 5)
            begun_auto_limit = 5;
        begunBanners = begunBanners.slice(0, begun_auto_limit);
    }
    //for (var i in begunBanners) {
    //    begunBanners[i][0] = begunBanners[i][0].begunSplit(30);
    //    begunBanners[i][1] = begunBanners[i][1].begunSplit(70);
    //};

    document.write(getCss());

    var begunContent = '';
    var begunContentHeader = '';

    if (begunParams.autoscroll) {
        _begun_auto_width = begun_auto_width + 3;
        begunContentHeader = '<div id="begunScroll" style="width: ' + _begun_auto_width + 'px; height: '+(begun_view_limit * begun_scroll_height)+'px; background-color:'+begun_auto_colors[3]+'; overflow:hidden;"> \
        <div id="begunSpacer" style="height: 0px"></div>';
    }

    if (!begunParams.multispan) {

        begunContentHeader += '<div><ul class="bgul'+rndID+'" id="begunRoot">';
        begunContent += begunContentHeader;
        if (begunBanners != null) {
            for (i = 0; i < begunBanners.length; i++)
                begunContent += getBanner(begunBanners[i], null, i == begunBanners.length  - 1 ? 1 : 0);
        }
        begunContent += '</ul>';
        if (begunParams.wide)
            begunContent += '<div style="clear:left;"></div>';
        if (begunParams.autoscroll)
            begunContent += '</div>'
        if (begunParams.stub)
            begunContent += getStub();
        begunContent += '</div>';
    } else {
        begunContentHeader += '<ul class="bgul1" id="begunRoot">';

        if (begunBanners.length) {
            i = 0;
            for (var j = 0 ; j < begunSpans.length; j++ ) {
                begunContent = '';
                var breakFlag = 0;
                if (!document.getElementById(begunSpans[j].span_id)) continue;
                if (begunSpans[j].width)
                    var spanWidth = begunSpans[j].width;
                else
                    var spanWidth = begun_auto_width;
                begunContent += begunContentHeader.substr(0, begunContentHeader.length - 1) + ' style="width:'+spanWidth+'px;">';
                if (begunBanners != null) {
                    for (k = 0; k < begunSpans[j].limit; k++) {
                        if (typeof begunBanners[i] == 'object') {
                            begunContent += getBanner(begunBanners[i], spanWidth, k == begunBanners.length - 1 ? 1 : 0);
                            i++;
                        } else {
                            breakFlag = 1;
                            break;
                        }
                    }
                    if (begunParams.stub)
                        begunContent += getStub(spanWidth);
                    begunContent += '</ul>';
                    document.getElementById(begunSpans[j].span_id).innerHTML = begunContent;
                    if (breakFlag) break;
                }
            }
        }
    }

    if (typeof begunSpans == 'object') {}
    else if (document.getElementById('begunSpan'))
        document.getElementById('begunSpan').innerHTML = begunContent;
    else
        document.write(begunContent);
    if (begunParams.autoscroll) {
        document.write('<scr' + 'ipt type="text/javascript">scrollPrint();</scr' + 'ipt>');
    }

    if (begunParams.begun_auto_hyper) {
        include('http://autocontext.begun.ru/hypertext_a.js');
        document.write('<scr' + 'ipt type="text/javascript">hyperRun();</scr' + 'ipt>');
    }
}

function begunAutoRun() {
    begunPrint();
}

begun_auto_url = 'http://autocontext.begun.ru/context.jsp?';
//begun_auto_url = 'sense.js';
var params = {
    'pad_id': window.begun_auto_pad,
    'lmt': Date.parse(document.lastModified) / 1000,
    'n': window.begun_auto_limit,
    'begun_utf8': window.begun_utf8,
    'begun_koi8': window.begun_koi8,
    'begun_scroll': window.begun_scroll,
    'many_span': window.many_span,
    'misc_id': typeof(window.begun_misc_id) == 'undefined' ? window.misc_id : window.begun_misc_id,
    'begun_multispan': window.begun_multispan,
    'sense_mode': 'custom',
    'stopwords': window.stopwords || '',
    'begun_self_keywords': window.begun_self_keywords,
    'ref': document.referrer,
    'real_refer': document.location
}
begunAppend(params);

if (window.begun_scroll) {
    var host = 'http://autoscroll.begun.ru/';
    var jsfiles = ['prototype.lite.js', 'moo.fx.js', 'moo.fx.scroll.js', 'begunScroll.js'];
    for (var i in jsfiles)
        include(host + jsfiles[i]);
}

begun_auto_url = begun_auto_url.substring(0, 1524).replace(/%[0-9a-fA-F]?$/, '');
include(begun_auto_url);
