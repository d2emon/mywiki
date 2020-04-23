okdn=location.href+'/';
okdn=okdn.substr(okdn.indexOf('://')+3);
okdn=okdn.substr(0,okdn.indexOf('/'));
function okadd(s) {
okurl='';
if (s=='bobrdobr') okurl='http://bobrdobr.ru/addext.html?url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title);
if (s=='memori') okurl='http://memori.ru/link/?sm=1&u_data[url]='+encodeURIComponent(location.href)+'&u_data[name]='+encodeURIComponent(document.title);
if (s=='mister-wong') okurl='http://www.mister-wong.ru/index.php?action=addurl&bm_url='+encodeURIComponent(location.href)+'&bm_description='+encodeURIComponent(document.title);
if (s=='moemesto') okurl='http://moemesto.ru/post.php?url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title);
if (s=='yandex') okurl='http://zakladki.yandex.ru/userarea/links/addfromfav.asp?bAddLink_x=1&lurl='+encodeURIComponent(location.href)+'&lname='+encodeURIComponent(document.title);
if (s=='myscoop') okurl='http://myscoop.ru/add/?URL='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title);
if (s=='delicious') okurl='http://del.icio.us/post?v=4&noui&jump=close&url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title);
if (s=='ruspace') okurl='http://www.ruspace.ru/index.php?link=bookmark&action=bookmarkNew&bm=1&url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title);
if (s=='google') okurl='http://www.google.com/bookmarks/mark?op=add&bkmk='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title);
if (s=='news2') okurl='http://news2.ru/add_story.php?url='+encodeURIComponent(location.href);
if (s=='vaau') okurl='http://www.vaau.ru/submit/?action=step2&url='+encodeURIComponent(location.href);
if (okurl.length>0) {
oktgo=setTimeout('okgo()',3000);
scr=document.createElement('script'); 
scr.type='text/javascript'; 
scr.src='http://odnaknopka.ru/save/?domain='+okdn+'&system='+s; 
document.body.appendChild(scr);
}
}
function okgo() {
if (oktgo) clearTimeout(oktgo);
if (okurl) location.href=okurl;
}
str='width:16px;height:16px;padding:0px;border:0px;cursor:pointer;background-image:url(\'http://odnaknopka.ru/images/all_.gif\');float:left;margin-left:4px;background-position:';
document.write('<div style="'+str+'background-position:0px 0px;" title="&#1055;&#1086;&#1083;&#1091;&#1095;&#1080;&#1090;&#1100; &#1090;&#1072;&#1082;&#1080;&#1077; &#1078;&#1077; &#1080;&#1082;&#1086;&#1085;&#1082;&#1080; &#1089;&#1077;&#1073;&#1077; &#1085;&#1072; &#1089;&#1072;&#1081;&#1090;!" onclick="location.href=\'http://odnaknopka.ru/get\';"></div>'
+'<div style="'+str+'-16px 0px;" title="&#1054;&#1076;&#1085;&#1072;&#1050;&#1085;&#1086;&#1087;&#1082;&#1072;: &#1041;&#1086;&#1073;&#1088;&#1044;&#1086;&#1073;&#1088;" onclick="okadd(\'bobrdobr\');"></div>'
+'<div style="'+str+'-32px 0px;" title="&#1054;&#1076;&#1085;&#1072;&#1050;&#1085;&#1086;&#1087;&#1082;&#1072;: Memori" onclick="okadd(\'memori\');"></div>'
+'<div style="'+str+'-48px 0px;" title="&#1054;&#1076;&#1085;&#1072;&#1050;&#1085;&#1086;&#1087;&#1082;&#1072;: &#1052;&#1080;&#1089;&#1090;&#1077;&#1088; &#1042;&#1086;&#1085;&#1075;" onclick="okadd(\'mister-wong\');"></div>'
+'<div style="'+str+'-64px 0px;" title="&#1054;&#1076;&#1085;&#1072;&#1050;&#1085;&#1086;&#1087;&#1082;&#1072;: &#1052;&#1086;&#1105; &#1052;&#1077;&#1089;&#1090;&#1086;" onclick="okadd(\'moemesto\');"></div>'
+'<div style="'+str+'-80px 0px;" title="&#1054;&#1076;&#1085;&#1072;&#1050;&#1085;&#1086;&#1087;&#1082;&#1072;: &#1071;&#1085;&#1076;&#1077;&#1082;&#1089;.&#1047;&#1072;&#1082;&#1083;&#1072;&#1076;&#1082;&#1080;" onclick="okadd(\'yandex\');"></div>'
+'<div style="'+str+'-96px 0px;" title="&#1054;&#1076;&#1085;&#1072;&#1050;&#1085;&#1086;&#1087;&#1082;&#1072;: RuSpace" onclick="okadd(\'ruspace\');"></div>'
+'<div style="'+str+'-112px 0px;" title="&#1054;&#1076;&#1085;&#1072;&#1050;&#1085;&#1086;&#1087;&#1082;&#1072;: MyScoop" onclick="okadd(\'myscoop\');"></div>'
+'<div style="'+str+'-128px 0px;" title="&#1054;&#1076;&#1085;&#1072;&#1050;&#1085;&#1086;&#1087;&#1082;&#1072;: del.icio.us" onclick="okadd(\'delicious\');"></div>'
+'<div style="'+str+'-144px 0px;" title="&#1054;&#1076;&#1085;&#1072;&#1050;&#1085;&#1086;&#1087;&#1082;&#1072;: &#1047;&#1072;&#1082;&#1083;&#1072;&#1076;&#1082;&#1080; Google" onclick="okadd(\'google\');"></div>'
+'<div style="'+str+'-160px 0px;" title="&#1054;&#1076;&#1085;&#1072;&#1050;&#1085;&#1086;&#1087;&#1082;&#1072;: News 2" onclick="okadd(\'news2\');"></div>'
+'<div style="'+str+'-176px 0px;" title="&#1054;&#1076;&#1085;&#1072;&#1050;&#1085;&#1086;&#1087;&#1082;&#1072;: &#1042;&#1072;&#1072;&#1091;!" onclick="okadd(\'vaau\');"></div>');