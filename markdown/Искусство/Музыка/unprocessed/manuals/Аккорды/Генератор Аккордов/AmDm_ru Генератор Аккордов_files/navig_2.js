<!--

//  ========= NAVIGATION ARRAY LEVEL 2 (depth level dependent) ===============

var object=new Array();


object['index']= new objectdata(100,48,"../navig/index_o.gif","../navig/index_n.gif","VRAG Records Home Page");

object['kap']= new objectdata(100,20,"../navig/kap_o.gif","../navig/kap_n.gif","Baku Songwriters' Club");

	object['kapauthors']= new objectdata(100,18,"../navig/kapauthors_o.gif","../navig/kapauthors_n.gif","KAP Baku - Songwriters");

	object['kapsingers']= new objectdata(100,18,"../navig/kapsingers_o.gif","../navig/kapsingers_n.gif","KAP Baku - Performers");

	object['kapfuncts']= new objectdata(100,18,"../navig/kapfuncts_o.gif","../navig/kapfuncts_n.gif","KAP Baku - Functioners");

	object['kaphistory']= new objectdata(100,18,"../navig/kaphistory_o.gif","../navig/kaphistory_n.gif","KAP Baku - History");

object['authors']= new objectdata(100,20,"../navig/authors_o.gif","../navig/authors_n.gif","Songs by various songwriters");

object['ragimov']= new objectdata(100,20,"../navig/ragimov_o.gif","../navig/ragimov_n.gif","Vladimir Ragimov");

	object['vrsongs']= new objectdata(100,18,"../navig/vrsongs_o.gif","../navig/vrsongs_n.gif","Songs by Vladimir Ragimov");

	object['vralbums']= new objectdata(100,18,"../navig/vralbums_o.gif","../navig/vralbums_n.gif","Vladimir Ragimov's Albums");

	object['vrbook']= new objectdata(100,18,"../navig/vrbook_o.gif","../navig/vrbook_n.gif","Vladimir Ragimov's Songbook");

	object['vrpole']= new objectdata(100,18,'../navig/vrpole_o.gif','../navig/vrpole_n.gif','Rock group "Battlefield"');

	object['vrtheater']= new objectdata(100,18,'../navig/vrtheater_o.gif','../navig/vrtheater_n.gif','Fairy tales theater "Balaganchik"');

	object['vrmpeg']= new objectdata(100,18,"../navig/vrmpeg_o.gif","../navig/vrmpeg_n.gif","Songs by Vladimir Ragimov in MPEG format");

object['news']= new objectdata(100,20,"../navig/news_o.gif","../navig/news_n.gif","Check what's new");

object['photo']= new objectdata(100,20,"../navig/photo_o.gif","../navig/photo_n.gif","Photo Archives");

object['ssylki']= new objectdata(100,20,"../navig/ssylki_o.gif","../navig/ssylki_n.gif","Useful Links");

object['guestbook']= new objectdata(100,20,"../navig/guestbook_o.gif","../navig/guestbook_n.gif","Guest Book");

object['sitemap']= new objectdata(100,20,"../navig/sitemap_o.gif","../navig/sitemap_n.gif","Site Map");


object['rabtnA']= new objectdata(46,17,"../BTN/ratr_o.gif","../BTN/ratr.gif",'Listen the whole album in RealAudio');


function objectdata(hsize,vsize,replaceimg,restoreimg,mess) {
	this.mess=mess;
	this.simg=new Image(hsize,vsize);
	this.simg.src=replaceimg;
	this.rimg=new Image(hsize,vsize);
	this.rimg.src=restoreimg;
	this.relpath=restoreimg;
}

function ReplaceOrig(name) {
	OfLink();
	window.status=object[name].mess;
	document[name].src=object[name].simg.src;
}

function RestoreOrig(name) {
	window.status="";
	document[name].src=object[name].rimg.src;
}

//  -->

