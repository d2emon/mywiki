Begun.Autocontext.Customization.setTpls({
	"begun_html_tpls": [
		{"block_horizontal": '\
<span class="begun_adv_span">\
<table id="{{begun_alco_id}}" class="begun_adv begun_adv_ext begun_adv_hor"{{block_hover}} style="width:{{block_width}}">\
<tr>\
<td class="begun_adv_cell">\
{{block_alco}}\
<table class="begun_adv_sys"><tr>\
<td class="begun_adv_sys_logo" colspan="{{begun_url_colspan}}"><div style="display:{{logo_display}}"><a href="{{begun_url}}" target="_blank" class="snap_noshots">begun</a></div></td>\
<td class="begun_adv_sys_sign_up"><div style="display:{{become_partner_display}}"><a href="{{become_partner_url}}" target="_blank" class="snap_noshots">{{become_partner_text}}</a></div></td>\
<td class="begun_adv_sys_sign_up"><div style="display:{{place_here_display}}"><a href="{{place_here_url}}" target="_blank" class="snap_noshots">{{place_here_text}}</a></div></td>\
<td class="begun_adv_sys_sign_up"><div style="display:{{all_banners_display}}"><a href="{{all_banners_url}}" target="_blank" class="snap_noshots">{{all_banners_text}}</a></div></td>\
</tr></table>\
<div class="begun_adv_common {{block_scroll_class}}" id="{{scroll_div_id}}">\
<table class="begun_adv_table {{css_thumbnails}}" id="{{scroll_table_id}}">\
<tr>\
{{banners}}\
</tr>\
</table>\
</div>\
</td>\
</tr>\
</table>\
</span>\
'},
		{'banner_horizontal': '\
<td class="begun_adv_cell" style="width:{{banner_width}} !important" title="{{fullDomain}}" onclick="{{onclick}}" _url="{{url}}" _banner_id="{{banner_id}}">\
{{thumb}}\
<div class="begun_adv_block {{css_favicon}}" {{favicon}}>\
<div class="begun_adv_title">{{cross}}<a class="snap_noshots" target="_blank" href="{{url}}" onmouseover="status=\'{{status}}\';return true" onmouseout="status=\'\';return true" title="{{fullDomain}}" {{favicon}}{{styleTitle}}>{{title}}</a>{{bnnr_alco}}</div>\
<div class="begun_adv_text"><a class="snap_noshots" target="_blank" href="{{url}}" onmouseover="status=\'{{status}}\';return true" onmouseout="status=\'\';return true" title="{{fullDomain}}"{{styleText}}>{{descr}}</a></div>\
<div class="begun_adv_contact"{{styleContact}}>{{contact}}</div>\
</div>\
</td>\
'},
		{'banner_horizontal_rich': '\
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
		{"block_horizontal": '\
#begun_block_{{block_id}} .begun_adv,\
#begun_block_{{block_id}} .begun_adv .begun_adv_table,\
#begun_block_{{block_id}} .begun_adv_span {\
	width: 100% !important;\
}\
#begun_block_{{block_id}} .begun_adv .begun_adv_cell,\
#begun_block_{{block_id}} .begun_adv .begun_adv_all {\
	padding: 0 16px 0 0 !important;\
}\
#begun_block_{{block_id}} .begun_adv.begun_adv_ext .begun_adv_sys_logo {\
	width: 100% !important;\
}\
#begun_block_{{block_id}} .begun_adv.begun_adv_ext .begun_adv_sys_sign_up div {\
	white-space: nowrap !important;\
	margin-left: 25px !important;\
}\
#begun_block_{{block_id}} .begun_adv .begun_alco_message {\
	padding:32px 12px 33px 15px !important;\
	width:10% !important;\
	float:right !important;\
}\
#begun_block_{{block_id}} .begun_adv .begun_alco_message span.begun_alco_attention {\
	left:7px !important;\
	top:27px !important;\
}\
#begun_block_{{block_id}} #begun_alco_{{block_id}}.begun_adv {\
	border-collapse:collapse !important;\
}\
#begun_block_{{block_id}} #begun_alco_{{block_id}}.begun_adv .begun_adv_common,\
#begun_block_{{block_id}} #begun_alco_{{block_id}}.begun_adv .begun_adv_sys {\
	width:85% !important;\
}\
#begun_block_{{block_id}}  #begun_alco_{{block_id}}.begun_adv .begun_adv_cell {\
	padding-right:0 !important;\
}\
#begun_block_{{block_id}} .begun_adv td {\
	vertical-align: top !important;\
}\
#begun_block_{{block_id}} .begun_adv_fix {\
	overflow: hidden !important;\
}\
#begun_block_{{block_id}}.begun_auto_rich .begun_adv .begun_adv_rich .begun_adv_image {\
	top: 0 !important;\
	margin-bottom: 4px !important;\
}\
#begun_block_{{block_id}}.begun_auto_rich .begun_adv .begun_adv_thumb .begun_thumb {\
	margin-top:0 !important;\
}\
'}
	]
});
/*$LastChangedRevision: 41124 $*/
Begun.Autocontext.tplLoaded("begun_tpl_block_horizontal");
