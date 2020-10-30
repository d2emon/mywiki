Begun.Autocontext.Customization.setTpls({
	"begun_html_tpls": [
		{"block_728x90": '\
<span class="begun_adv_span">\
<div id="{{begun_alco_id}}" class="begun_adv begun_adv_fix begun_adv_fix_hor {{fix_layout}}"{{block_hover}}>\
{{block_alco}}\
<div class="begun_adv_common {{block_scroll_class}} banners_count_{{banners_count}}" id="{{scroll_div_id}}">\
<div class="begun_adv_sys_logo" style="display:{{logo_display}}"><div><a href="{{begun_url}}" target="_blank" class="snap_noshots">begun</a></div></div>\
<div class="begun_adv_sys_sign_up" style="display:{{place_here_display}}"><div><a href="{{place_here_url}}" target="_blank" class="snap_noshots">{{place_here_text}}</a></div></div>\
<table class="begun_adv_table {{css_thumbnails}} {{extended_block_class}}" id="{{scroll_table_id}}">\
<tr>\
{{banners}}\
</tr>\
</table>\
</div>\
</div>\
</span>\
'},
		{'banner_728x90': '\
<td class="begun_adv_cell" style="width:{{banner_width}} !important" title="{{fullDomain}}" onclick="{{onclick}}" _url="{{url}}" _banner_id="{{banner_id}}">\
{{thumb}}\
<div class="begun_adv_block {{css_favicon}}" {{favicon}}>\
<div class="begun_adv_title">{{cross}}<a class="snap_noshots" target="_blank" href="{{url}}" onmouseover="status=\'{{status}}\';return true" onmouseout="status=\'\';return true" title="{{fullDomain}}" {{favicon}}{{styleTitle}}>{{title}}</a>{{bnnr_alco}}</div>\
<div class="begun_adv_text"><a class="snap_noshots" target="_blank" href="{{url}}" onmouseover="status=\'{{status}}\';return true" onmouseout="status=\'\';return true" title="{{fullDomain}}"{{styleText}}>{{descr}}</a></div>\
<div class="begun_adv_contact"{{styleContact}}>{{contact}}</div>\
</div>\
</td>\
'},
		{'banner_728x90_rich': '\
<td class="begun_adv_cell begun_adv_rich" onclick="{{onclick}}" _url="{{url}}" _banner_id="{{banner_id}}">\
{{picture}}\
<div class="begun_adv_block {{css_favicon}}" {{favicon}} title="{{fullDomain}}">\
<div class="begun_adv_title"><a class="snap_noshots" target="_blank" href="{{url}}" onmouseover="status=\'{{status}}\';return true" onmouseout="status=\'\';return true" title="{{fullDomain}}"{{styleTitle}}>{{title}}</a></div>\
<div class="begun_adv_text"><a class="snap_noshots" target="_blank" href="{{url}}" onmouseover="status=\'{{status}}\';return true" onmouseout="status=\'\';return true" title="{{fullDomain}}"{{styleText}}>{{descr}}</a></div>\
<div class="begun_adv_contact"{{styleContact}}>{{contact}}</div>\
</div>\
</td>\
'}
	],
	"begun_css_tpls": [
		{"block_728x90": '\
#begun_block_{{block_id}} .begun_adv .begun_adv_common {\
	zoom:1 !important;\
}\
#begun_block_{{block_id}} .begun_adv {\
	width: 728px !important;\
	height: 90px !important;\
}\
#begun_block_{{block_id}} .begun_adv.begun_fix_layout {\
	width: 726px !important;\
	height: 88px !important;\
}\
#begun_block_{{block_id}} .begun_adv .begun_adv_sys_sign_up {\
	margin-top: 4px !important;\
}\
#begun_block_{{block_id}} .begun_adv .begun_adv_sys_logo a {\
	padding-left: 4px !important;\
}\
#begun_block_{{block_id}} .begun_adv .begun_adv_text {\
	padding-bottom: 4px !important;\
}\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_fav .begun_adv_title ,\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_fav .begun_adv_text,\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_fav div.begun_adv_contact {\
	margin-left:22px !important;\
}\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_fav .begun_adv_title a {\
	margin-left:-22px !important;\
	padding-left:22px !important;\
	background-position:left 1px !important;\
	background-repeat:no-repeat !important;\
}\
#begun_block_{{block_id}} .begun_adv .begun_adv_thumb .begun_adv_cell,\
#begun_block_{{block_id}} .begun_adv .begun_adv_thumb .begun_adv_cell *,\
#begun_block_{{block_id}} .begun_adv .begun_adv_rich .begun_adv_cell,\
#begun_block_{{block_id}} .begun_adv .begun_adv_rich .begun_adv_cell * {\
	font-size: 10px !important;\
	line-height: 10px !important;\
}\
#begun_block_{{block_id}} .begun_adv .begun_adv_text,\
#begun_block_{{block_id}} .begun_adv .begun_adv_text * {\
	font-size: 12px !important;\
	line-height: 13px !important;\
}\
#begun_block_{{block_id}} .begun_adv .begun_adv_thumb .begun_adv_text,\
#begun_block_{{block_id}} .begun_adv .begun_adv_thumb .begun_adv_text *,\
#begun_block_{{block_id}} .begun_adv .begun_adv_rich .begun_adv_text,\
#begun_block_{{block_id}} .begun_adv .begun_adv_rich .begun_adv_text * {\
	font-size: 11px !important;\
	line-height: 12px !important;\
}\
#begun_block_{{block_id}} .begun_adv .begun_adv_title,\
#begun_block_{{block_id}} .begun_adv .begun_adv_title * {\
	font-size: 14px !important;\
	line-height: 14px !important;\
}\
#begun_block_{{block_id}} .begun_adv .begun_adv_thumb .begun_adv_title,\
#begun_block_{{block_id}} .begun_adv .begun_adv_thumb .begun_adv_title *,\
#begun_block_{{block_id}} .begun_adv .begun_adv_rich .begun_adv_title,\
#begun_block_{{block_id}} .begun_adv .begun_adv_rich .begun_adv_title * {\
	font-size: 13px !important;\
	line-height: 13px !important;\
}\
#begun_block_{{block_id}} .begun_adv td.begun_adv_cell {\
	width: 50% !important;\
	vertical-align: top !important;\
}\
#begun_block_{{block_id}} .begun_adv .begun_adv_thumb .begun_thumb {\
	margin-top:1px !important;\
}\
#begun_block_{{block_id}} .begun_adv .begun_adv_rich .begun_adv_image {\
	top:1px !important;\
}\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_cell,\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_cell * {\
	font-size:13px !important;\
	line-height:14px !important;\
	text-align:center !important;\
}\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_thumb,\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_thumb *,\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_rich,\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_rich * {\
	text-align:left !important;\
}\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_phone {\
	margin-top:2px !important;\
}\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_text,\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_text * {\
	font-size:15px !important;\
	line-height:16px !important;\
	text-align:center !important;\
}\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_thumb .begun_adv_text,\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_thumb.begun_adv_text *,\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_rich .begun_adv_text,\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_rich  .begun_adv_text * {\
	text-align:left !important;\
}\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_title,\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_title * {\
	font-size:17px !important;\
	line-height:19px !important;\
	text-align:center !important;\
}\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_thumb .begun_adv_title,\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_thumb .begun_adv_title *,\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_rich .begun_adv_title,\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_rich .begun_adv_title * {\
	text-align:left !important;\
}\
#begun_block_{{block_id}} .begun_adv .banners_count_1 .begun_adv_table {\
	margin-left:0 !important;\
	display:table !important;\
	width:92% !important;\
}\
#begun_block_{{block_id}} .begun_adv .begun_adv_table.begun_extended_block {\
	margin-left:0 !important;\
}\
#begun_block_{{block_id}} .begun_adv .begun_alco_message {\
	padding-bottom:20px !important;\
	width:10% !important;\
	float:right !important;\
}\
#begun_block_{{block_id}} .begun_adv .begun_alco_message span.begun_alco_attention {\
	left:10px !important;\
	position:absolute !important;\
	top:10px !important;\
}\
\
'}
	]
});
/*$LastChangedRevision: 41124 $*/
Begun.Autocontext.tplLoaded("begun_tpl_block_728x90");
