if (typeof(document.getElementById('bantop_span'))!='undefined') {
	var screen_width=document.body.clientWidth;
	if (screen_width<900) screen_width=900; else if (screen_width>1650) screen_width=1650;
	function put_img(url) {if (url!='') new Image().src=url;}

	document.getElementById('bantop_span').innerHTML='<div class="TONAV"><iframe src="http://sticker.yadro.ru/ad/'+(screen_width-50)+'x90.html?place=8&adv-click=http://www.liveinternet.ru/cgi-bin/adv.fcgi%3fclick%3d2990596" frameborder=0 vspace=0 hspace=0 width=100% height=90 marginwidth=0 marginheight=0 allowtransparency="true" scrolling=no></iframe></div>';
	put_img('');
	put_img('http://www.liveinternet.ru/cgi-bin/adv.fcgi?view=2990596');

}

if (typeof(document.getElementById('banprofile_span'))!='undefined') {
	var screen_width=document.body.clientWidth;
	if (screen_width<900) screen_width=900; else if (screen_width>1650) screen_width=1650;
	function put_img(url) {if (url!='') new Image().src=url;}

	document.getElementById('banprofile_span').innerHTML='<iframe src="http://news.liveinternet.ru/ad/s3_240x400.html?http://www.liveinternet.ru/cgi-bin/adv.fcgi?click=2990597" frameborder=0 vspace=0 hspace=0 width=240 height=400 marginwidth=0 marginheight=0 allowtransparency="true" scrolling=no></iframe>';
	put_img('');
	put_img('http://www.liveinternet.ru/cgi-bin/adv.fcgi?view=2990597');

}

