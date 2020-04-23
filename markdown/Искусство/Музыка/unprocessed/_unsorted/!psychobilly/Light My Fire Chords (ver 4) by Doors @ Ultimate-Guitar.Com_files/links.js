var ad_text = "";

if (window.tf_artist)
{
	ad_text = tf_artist;
}
else
{
	tf_artist = "";
}

if (window.tf_song)
{
	ad_text = tf_song;
}
else
{
	tf_song = "";
}

if (tf_song != "")
{
	tf_ad_html = '<a href="http://www.ringtonematcher.com/co/ringtonematcher/02/noc.asp?sid=NOUGrotT04&artist=' + encodeURIComponent(tf_artist) + '&song=' + encodeURIComponent(tf_song) + '" style="color: red; font-size: 14px; font-family: Arial; text-decoration: underline; font-weight: bold;" rel="nofollow" target="_blank"><img src="http://img.ultimate-guitar.com/_img/ring_left.gif" border="0" style="margin-right: 5px; vertical-align: bottom;" />Send "'+tf_song+'" to Cell Phone<img src="http://img.ultimate-guitar.com/_img/ring_right.gif" border="0" style="margin-left: 5px; vertical-align: bottom;" /></a>'
}
else if (tf_artist != "")
{
	tf_ad_html = '<a href="http://www.ringtonematcher.com/co/ringtonematcher/02/noc.asp?sid=NOUGrotT03&artist=' + encodeURIComponent(tf_artist) + '" style="color: red; font-size: 14px; font-family: Arial; text-decoration: underline; font-weight: bold;" rel="nofollow" target="_blank"><img src="http://img.ultimate-guitar.com/_img/ring_left.gif" border="0" style="margin-right: 5px; vertical-align: bottom;" />Send ' + tf_artist + ' Ringtones to Cell Phone<img src="http://img.ultimate-guitar.com/_img/ring_right.gif" border="0" style="margin-left: 5px; vertical-align: bottom;" /></a>'
}
else
{
	tf_ad_html = '<a href="http://www.ringtonematcher.com/co/ringtonematcher/02/noc.asp?sid=NOUGrot" style="color: red; font-size: 14px; font-family: Arial; text-decoration: underline; font-weight: bold;" rel="nofollow" target="_blank"><img src="http://img.ultimate-guitar.com/_img/ring_left.gif" border="0" style="margin-right: 5px; vertical-align: bottom;" />Send Ringtones to your Cell Phone<img src="http://img.ultimate-guitar.com/_img/ring_right.gif" border="0" style="margin-left: 5px; vertical-align: bottom;" /></a>'
}

ug_ad_html = '<a href="http://www.ringtonematcher.com/co/ringtonematcher/02/clients/ultimate-guitar.asp?sid=NOUGrot" style="color: red; font-size: 14px; font-family: Arial; text-decoration: underline; font-weight: bold;" rel="nofollow" target="_blank"><img src="http://tonefuse.s3.amazonaws.com/clientjs/images/ug.png" border="0" style="margin-right: 5px; vertical-align: bottom;" />Learn to play "'+ad_text+'" with online video lessons<img src="http://tonefuse.s3.amazonaws.com/clientjs/images/ug.png" border="0" style="margin-left: 5px; vertical-align: bottom;" /></a>';

geo_ad_html = '<a href="http://1.sharkadnetwork.com/sw/718/CD6/NOUGtab&subid1=NOUGtab" style="color: red; font-size: 14px; font-family: Arial; text-decoration: underline; font-weight: bold;" rel="nofollow" target="_blank"><img src="http://tonefuse.s3.amazonaws.com/clientjs/images/ug.png" border="0" style="margin-right: 5px; vertical-align: bottom;" />"' + tf_song + '" and ' + tf_artist + ' Tabs<img src="http://tonefuse.s3.amazonaws.com/clientjs/images/ug.png" border="0" style="margin-left: 5px; vertical-align: bottom;" /></a>';

jam_ad_html = '<a href="http://www.ultimate-guitar.com/xtra/click_contest.php?ug_from=tabs&url=http://www.jamplay.com/?s=16&c=213" style="color: red; font-size: 14px; font-family: Arial; text-decoration: underline; font-weight: bold;" rel="nofollow" target="_blank"><img src="http://tonefuse.s3.amazonaws.com/clientjs/images/ug.png" border="0" style="margin-right: 5px; vertical-align: bottom;" />Learn to play "' + tf_song + '" with online video lessons<img src="http://tonefuse.s3.amazonaws.com/clientjs/images/ug.png" border="0" style="margin-left: 5px; vertical-align: bottom;" /></a>';

creatives = new Array();

creatives[creatives.length]		= new Array();
creatives[creatives.length-1]['HTML']	= tf_ad_html;
creatives[creatives.length-1]['Weight'] = 25;

creatives[creatives.length]		= new Array();
creatives[creatives.length-1]['HTML']	= ug_ad_html;
creatives[creatives.length-1]['Weight'] = 49;

creatives[creatives.length]		= new Array();
creatives[creatives.length-1]['HTML']	= jam_ad_html;
creatives[creatives.length-1]['Weight'] = 26;





var arr_choices = new Array();

for (i = 0; i < creatives.length; i++)
{
	ind = arr_choices.length;
	
	for (x = ind; x < ind + creatives[i]['Weight']; x++)
	{
		arr_choices[arr_choices.length] = i
	}
}

var adrnd	= Math.floor(Math.random() * arr_choices.length);
var ad_html	= creatives[arr_choices[adrnd]]['HTML'];

document.write(ad_html); 






function set_cookie(a, b, c)
{
	var d = new Date(); 
	d.setDate(d.getDate() + c);
 
	document.cookie = a + "=" + escape(b) + ";path=/" + ((c == null) ? "" : ";expires=" + d.toGMTString()) + ";domain =." + top.location.host.replace(/www\./i,"")
}

function get_cookie(a)
{
	if (document.cookie.length > 0)
	{
		c_start = document.cookie.indexOf(a + "=");
		
		if (c_start != -1)
		{
			c_start = c_start + a.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1)
			{
				c_end = document.cookie.length;return unescape(document.cookie.substring(c_start, c_end));
			}
		}
	}
	
	return '';
}
				
function update_rm_c(a)
{
	rm_c = a;
	set_cookie("rm_c", a, 30);
}