document.write('<div id=tip style="position:absolute;visibility:hidden;width:200px"><table style="border:solid 1px #000" cellpadding="0" cellspacing="0" width="200"><tr><td id=tip2 style="padding:10px;color:#000" align="left" bgcolor="#FAF9E2"></td></tr></table></div>');

document.write('<div id=tip_scr style="position:absolute;visibility:hidden;width:200px"><table style="border:solid 1px #bcd5d5" cellpadding="0" cellspacing="0" width="200"><tr><td id=tip_scr2 style="padding:5px;color:#000" align="left" bgcolor="#FFFFFF"></td></tr></table></div>');

var tmp_log="";


var userAgent = navigator.userAgent.toLowerCase();
var is_opera  = (userAgent.indexOf('opera') != -1);
var is_saf    = ((userAgent.indexOf('applewebkit') != -1) || (navigator.vendor == "Apple Computer, Inc."));
var is_webtv  = (userAgent.indexOf('webtv') != -1);
var is_ie     = ((userAgent.indexOf('msie') != -1) && (!is_opera) && (!is_saf) && (!is_webtv));
var is_ie4    = ((is_ie) && (userAgent.indexOf("msie 4.") != -1));
var is_moz    = ((navigator.product == 'Gecko') && (!is_saf));

isDOM=document.getElementById; //DOM1 browser (MSIE 5+, Netscape 6, Opera 5+)
isMSIE=document.all && document.all.item; //Microsoft Internet Explorer 4+
isNetscape4=document.layers; //Netscape 4.*
isOpera=window.opera; //Opera
isOpera5=isOpera && isDOM; //Opera 5+
isMSIE5=isDOM && isMSIE && !isOpera; //MSIE 5+
isMozilla=isNetscape6=isDOM && !isMSIE && !isOpera;

var obj;

//var is_best_rated = false;
var best_voted_loaded = false;
var std_loading_message = "<table cellpadding=2 cellspacing=0 width=100% ><tr><td align=center height=\"30\"  valign=center><img src=\"http:\/\/img.ultimate-guitar.com/_img/loading_white.gif\"><p class=p2>Loading, please wait...</p></td></tr></table>";
var tmp_tabid=0;
var div1 = "";
var div2 = "";
var pred = ""; // предыдущее состояние
var corr_cnt=0;
var comm_cnt=0;
var all_cnt=0;
var voted_corr_cnt=0;
var need_to_reload = false;
var div1_loaded=true;
function ShowCommentsGroup(type) {
	
	tmp_log+="SCG|";

	var all='<a href="" class=tab style="color:maroon" onclick="return ShowCommentsGroup(\'all\');">All</a>'; 
	var comm='<a href="" class=tab style="color:maroon" onclick="return ShowCommentsGroup(\'comments\');">Comments</a>'; 
	var corr='<a href="" class=tab style="color:maroon" onclick="return ShowCommentsGroup(\'corrections\');">Corrections</a>'; 
	var best_voted=' | <img src="http://img.ultimate-guitar.com/_img/tab_comm/za.gif" width=16 height=16 border=0 align=absmiddle alt="Best voted corrections!"> <a href="" class=tab style="color:green" onclick="return ShowCommentsGroup(\'best_voted\');">Best voted corrections</a>';
	
	if(type=='all') {
		if(pred=='best_voted' && !need_to_reload) {
			document.getElementById('comments').innerHTML = div1;
		}
		pred = 'all';
		
		if(!div1_loaded) {div1_loaded=true;return viewComments(tmp_tabid);}
		//if(need_to_reload){need_to_reload=false;return viewComments(tmp_tabid);}
		
		all = '<font class=ws><b>All</b></font>';
	
		var com_table = document.getElementById('t_comm');

		if(voted_corr_cnt==0) best_voted="";
			
		for (i=3; i < com_table.rows.length-2; i=i+2) {
			
				com_table.rows[i].style.display = "";
				com_table.rows[i+1].style.display = "";
	
		}
		var add_s = "s";
		if(all_cnt==1) add_s="";
		if ( all_cnt==0 ) {
			document.getElementById('cnt').innerHTML = '<font color="">Be the first to post your comment/correction';
		} else {
			document.getElementById('cnt').innerHTML = '<font color=""><b>'+all_cnt+'</b></font> comment'+add_s+' posted :';
		}
	}
	if(type=='comments') {
		if(pred=='best_voted' && !need_to_reload) {
			document.getElementById('comments').innerHTML = div1;
		}
		pred = 'comments';
		//if(need_to_reload){need_to_reload=false;return viewComments(tmp_tabid);}
		if(!div1_loaded) {div1_loaded=true;return viewComments(tmp_tabid);}
		comm = '<font class=ws><b>Comments</b></font>';
		
		var com_table = document.getElementById('t_comm');
		
		if(voted_corr_cnt==0) best_voted="";
		
		for (i=3; i < com_table.rows.length-2; i=i+2) {
		
			if (com_table.rows[i].getAttribute('row_type')==10) {
				com_table.rows[i].style.display = "none";
				com_table.rows[i+1].style.display = "none";
			}
			else if(com_table.rows[i].getAttribute('row_type')==4) {
				com_table.rows[i].style.display = "";
				com_table.rows[i+1].style.display = "";
			}
		}
		
	

		var add_s = "s";
		if(comm_cnt==1) add_s="";
		document.getElementById('cnt').innerHTML = '<font color=""><b>'+comm_cnt+'</b></font> comment'+add_s+' posted :';
	}
	if(type=='corrections') {
		if(pred=='best_voted' && !need_to_reload) {
			document.getElementById('comments').innerHTML = div1;
		}
		pred = 'corrections';
		//if(need_to_reload){ need_to_reload=false;return viewComments(tmp_tabid); }
		if(!div1_loaded) {div1_loaded=true;return viewComments(tmp_tabid);}
		corr = '<font class=ws><b>Corrections</b></font>';
		
		var com_table = document.getElementById('t_comm');
		
	
		if(voted_corr_cnt==0) best_voted="";
		
		for (i=3; i < com_table.rows.length-2; i=i+2) {
			
			if (com_table.rows[i].getAttribute('row_type')==4) {
				com_table.rows[i].style.display = "none";
				com_table.rows[i+1].style.display = "none";
			}
			else if (com_table.rows[i].getAttribute('row_type')==10) {
				com_table.rows[i].style.display = "";
				com_table.rows[i+1].style.display = "";
			}
		}
		
		
		var add_s = "s";
		if(corr_cnt==1) add_s="";
		document.getElementById('cnt').innerHTML = '<font color=""><b>'+corr_cnt+'</b></font> correction'+add_s+' posted :';
	}
	
	if(type=='best_voted') {
		div1 = document.getElementById('comments').innerHTML;
		pred = 'best_voted';
		best_voted = ' | <img src="http://img.ultimate-guitar.com/_img/tab_comm/za.gif" width=16 height=16 border=0 align=absmiddle alt="Best voted corrections!"><font class=ws><b> Best voted corrections</b></font>';
		var com_table = document.getElementById('t_comm');
		
		if(document.getElementById('t_comm').rows.length<30) {
			
		
			for(i=3; i < com_table.rows.length-2; i=i+2) {
				for(j=com_table.rows.length-4; j > i; j=j-2) {		
					if(parseInt(com_table.rows[j-2].getAttribute('row_rating')) < parseInt(com_table.rows[j].getAttribute('row_rating'))) {
						exchange(j,j-2,'t_comm');
						exchange(j+1,j-1,'t_comm');				
					}
				}
			}
			for (i=3; i < com_table.rows.length-2; i=i+2) {
				if (com_table.rows[i].getAttribute('row_type')==4) {
					com_table.rows[i].style.display = "none";
					com_table.rows[i+1].style.display = "none";
				}
				else if (com_table.rows[i].getAttribute('row_type')==10) {
					com_table.rows[i].style.display = "";
					com_table.rows[i+1].style.display = "";
				}
			}
		}
		else
		{
			if(best_voted_loaded){ 
				document.getElementById('comments').innerHTML=div2;
				return false;
			}
			else {
				return viewComments(tmp_tabid,true);
			}
		}
		
		var add_s = "s";
		if(corr_cnt==1) add_s="";
		document.getElementById('cnt').innerHTML = '<font color=""><b>'+corr_cnt+'</b></font> correction'+add_s+' posted :';
	}
	var str= 'View : '+all+' | <img src="http://img.ultimate-guitar.com/_img/tab_comm/comm.gif" width=11 height=11 border=0 alt="comments"> '+comm+' | <img src="http://img.ultimate-guitar.com/_img/tab_comm/corr.gif" width=12 height=12 border=0 alt="corrections"> '+corr+' '+best_voted;
	
	var com_table = document.getElementById('t_comm');	
	if(corr_cnt>0 && comm_cnt>0) document.getElementById('stroka').innerHTML = str;
	
	
	return false;
}

function exchange(i,j,table)
{
	var oTable = document.getElementById(table);
	var trs = oTable.tBodies[0].getElementsByTagName("tr");
	
	if(i >= 0 && j >= 0 && i < trs.length && j < trs.length)
	{
		if(i == j+1) {
			oTable.tBodies[0].insertBefore(trs[i], trs[j]);
		} else if(j == i+1) {
			oTable.tBodies[0].insertBefore(trs[j], trs[i]);
		} else {
			var tmpNode = oTable.tBodies[0].replaceChild(trs[i], trs[j]);
			if(typeof(trs[i]) != "undefined") {
				oTable.tBodies[0].insertBefore(tmpNode, trs[i]);
			} else {
				oTable.appendChild(tmpNode);

			}
		}		
	}
	
}

function VoteComment(rowid,content,elm)
{
	tmp_log+="VC|";
	
	while(elm.tagName != "TD") elm = elm.parentNode;

	var value = elm.parentNode.getAttribute("row_rating")-0+content;
	
	var str = "<font style=\"font:11px Verdana;\">";

	if(value>0) str+="<font style=\"font:11px Verdana; color:green\">+"+value+"</font>";
	if(value<0) str+="<font style=\"font:11px Verdana; color:red\">"+value+"</font>";

	str += "</font> <img src=\"http://img.ultimate-guitar.com/_img/tab_comm/za2.gif\" width=16 height=16 border=0 align=absmiddle>&nbsp;<img src=\"http://img.ultimate-guitar.com/_img/tab_comm/pr2.gif\" width=16 height=16 border=0 align=absmiddle>";

	elm.innerHTML = str;

	//если голос за correction, то строка в div2 должна быть обновлена
	if(elm.parentNode.getAttribute("row_type")==10) best_voted_loaded = false;
	// а если голосоваои из best_voted, то должна быть объявлен и div1
	if(pred=='best_voted') div1_loaded = false;
	
	return AjaxQuery("/vote0_comment.php",null,{rowid:rowid,content:content});
}

function	viewComments(tabid,is_best_rated) 
{
	tmp_log+="viewC|";

	tmp_tabid = tabid;
	
	var loc_ = document.location.toString();
	
	if(is_best_rated) {
		
		div1 = document.getElementById('comments').innerHTML;
		document.getElementById('comments').innerHTML = div2;		
	}
	var def_ = loc_.indexOf("#comments");
	
	if (def_!=-1) document.location = loc_;
	else {
		loc_ = loc_ + "#comments";
		document.location = loc_;
	}
		
	if (comments_showed && !is_best_rated) return false; 
	
	comments_showed=true;

	var req = new JsHttpRequest();

	req.onreadystatechange = function() {
		
		if (req.readyState == 4) 
		{
			
			if (req.responseJS)
			{
			
				if(req.responseJS.error) 
				{
					alert(req.responseJS.error);
				} else {
					if(is_best_rated) {	
						div2 = req.responseJS.content_head;
						is_best_rated = false;
						best_voted_loaded = true;
					
						//div1 = document.getElementById('comments').innerHTML;
						document.getElementById('comments').innerHTML	= div2;
					}
					else {
						div1 = req.responseJS.content_head;						
						document.getElementById('comments').innerHTML	= div1;
						
						corr_cnt = req.responseJS.corr_cnt;
						comm_cnt = req.responseJS.comm_cnt;
						voted_corr_cnt = req.responseJS.voted_corr_cnt;
						all_cnt = req.responseJS.all_cnt;
						
						if(pred=='all') ShowCommentsGroup("all");
						else if (pred=='comments') ShowCommentsGroup("comments");
						else if (pred=='corrections') ShowCommentsGroup("corrections");
						else {
							var corr_show = loc_.indexOf("&corr");
					
							if(corr_cnt>0) {
								if(corr_show!=-1) ShowCommentsGroup("corrections");
							}
							else {
								if(corr_show!=-1) ShowCommentsGroup("all");
							}
							
							var comm_show = loc_.indexOf("&comm");
							
							if(comm_cnt>0) {
								if(comm_show!=-1) ShowCommentsGroup("comments");
							}
							else {
								if(comm_show!=-1) ShowCommentsGroup("all");
							}
						}
					}
				}
			}
			else alert(req.responseText);
		}
	};

	var str = "";
	str +=	"<table cellpadding=\"2\" cellspacing=\"0\" width=\"100%\" bgcolor=\"#ffffff\">";
	str +=		"<tr>";
	str +=			"<td>"+std_loading_message+"</td>";
	str +=		"</tr>";
	str +=		"<tr>";
	str +=			"<td align=center><a href='/tab_comment.php?id="+tabid+"&artist_genre=0' style='color:maroon'>Click here if don't want to wait</a></td>";
	str +=		"</tr>";
	str +=	"</table>";
	
	if(is_best_rated) {
		
		
		document.getElementById('comments').innerHTML	=	str;
		
		req.open("POST", "/src/ajax/ajax.tab_comment.php", true);

		doit=function()
		{
			req.send({tabid: tabid, what:"best_rated"})
		};
		
	} else {
		document.getElementById('comments').innerHTML	=	str;
		req.open("POST", "/src/ajax/ajax.tab_comment.php", true);
		
		doit=function()
		{
			req.send({tabid: tabid})
		};
	}
	
	if(is_ie) setTimeout("doit()",100);
	else doit();
	
	
	
	return false;
}

function Expand(id)
{
	tmp_log+="exp|";

	if(is_moz)document.getElementById(id).style.height=parseInt(document.getElementById(id).style.height)+70;
	else document.getElementById(id).style.height = document.getElementById(id).style.pixelHeight + 70; return false;
	
}

function getLayer(layerName, parentLayerName){
  if(isDOM){ return document.getElementById(layerName); }
  if(isMSIE){ return document.all[layerName]; }
  if(isNetscape4){ return eval('document.layers[layerName]'); }
  return false;
}


function ts(what,text,e){
	tmp_log+="ts|";

  //var e	 = event;
  mousex = e.clientX;
  mousey = e.clientY;

  pagexoff = 20;
  pageyoff = 20;

  if(isMSIE5){
	pagexoff = document.documentElement.scrollLeft;//document.body.scrollLeft;
    pageyoff = document.documentElement.scrollTop;//document.body.scrollTop;
  }
  else{
    pagexoff = window.pageXOffset;
    pageyoff = window.pageYOffset;
  }
  if(getLayer(what)){

	if(isNetscape4)
      obj = getLayer(what);
    else
      obj = getLayer(what).style;
 	
	if(obj){

		document.getElementById(what+2).innerHTML	=	text;

		leftoff = mousex-pagexoff;
    	obj.left = (mousex+pagexoff) + 30 + 'px';

		topoff = mousey-pageyoff;
		//alert(topoff);
		//gen
		if(isOpera && topoff <= 10)
		{
    		//alert("1: isOpera && topoff <= 10");
			//alert(mousey);
			//obj.top = mousey - 10;
			//alert(mousey);
			obj.top = (mousey+pageyoff) - 160+ 'px';
		}
	    else {
			if ( mousey <= - 10) 
			{
				obj.top = (mousey+pageyoff) - 160+ 'px';
				alert("2: mousey <= - 10");
			}
			else if (isOpera)
			{
	    	    //alert("3: isOpera");
				obj.top = (mousey+pageyoff) - 160+ 'px';
			}
		    else //AM & Internet Explorer
			{
	    		//alert("4: else");
				obj.top = (mousey+pageyoff) - 160 + 'px';
			}
		}

	    //obj.top = 800;

		if(isNetscape4)
    	  obj.visibility = 'show';
	    else
    	  obj.visibility = 'visible';
	  }
   }
  return true;
}
function tc(){
  if(obj){
    if(isNetscape4)
      obj.visibility = 'show';
    else
      obj.visibility= 'hidden';
  }
  return true
}
function	parse_chords(acc) {
	tmp_log+="p_c|";

	var	code	=	chords[acc]?chords[acc]:chords[js_sins[acc]];
	var	fred	=	freds[acc]?freds[acc]:freds[js_sins[acc]];
	var	alt		=	alts[acc]?alts[acc]:alts[js_sins[acc]];
	var ebgd	=	new Array("E", "A", "D", "G", "B", "e");
	var	s		=	"";
	for(i=0;i<code.length;i++) {
		var s1	=	"<br><b>" + ebgd[i]+"</b> ";
		for(j=1;j<=5;j++) {
			if(j==code.charAt(i)) {
				s1	+=	"-x-|";
			} else {
				if (j==alt.charAt(i))
				{
					s1	+=	"-o-|";
				}
				else
				{
					s1	+=	"---|";
				}
			}
		}
		s	=	s1+s;
	}
	if(sk_chords[acc]) acc += " "+sk_chords[acc];
	var st	=	"<center>"+acc+"</center>";
	
	if (fred > 1)
	{
	st	+=	"<span style='text-align: left;'>"+fred+" fr.</span>";
	}

	s = st+"<span style='text-align: center;'>"+s+"</span>";
	return	s;
}
function	showAcc(acc,ev) {
	tmp_log+="sAcc|";
	if (document.getElementById('showing_chords').checked) {
		ts('tip','<font style="font:12px Courier New">'+parse_chords(acc)+'</font>', ev);
	}
}
function	showAllAcc() {
	tmp_log+="saACC|";
	if (!document.getElementById('showing_chords_down').checked) {
		document.getElementById('allch').innerHTML	=	"";
		return true;
	}
	var s	=	"<table cellpadding=\"0\" cellspacing=\"3\" width=\"100%\" bgcolor=\"#e3e3e3\" style=\"margin-bottom:20px\">				<tr><td colspan=\"4\" width=\"100%\"><font style=\"padding:5px;height:5px;background:#CFCFCF;color:black\"><b>Chords used in this song :</b></font></td></tr>";
	var	cc	=	chords;
	for(i in js_sins) {
		cc[i] = chords[js_sins[i]];
	}
	var	j	=	1;
	for(i in cc) {
		if(j==1) {
			s	+=	"<tr>";
		}
		s	+=	"<td class='crd'> "+parse_chords(i)+"</td>";
		if(j==3) {
			s	+=	"</tr>";
			j=1;
		} else {
			j++;
		}
	}
	if(j!=1) {
		while(j<=3) {
			s	+=	"<td class='crd'></td>";
			j++;
		}
		s	+=	"</tr>";
	}
	s	+=	"</table>";
	document.getElementById('allch').innerHTML	=	s;
}
function	sh_chords() {
	tmp_log+="sh_c|";
	var	b	=	document.getElementById('showing_chords').checked;
	for(i=1;i<=lcnt;i++) {
		el = document.getElementById('ch'+i);
		try {
			if(!b) {
				el.style.color				=	"black";
//				el.style.textDecoration		=	"none";
				el.style.cursor				=	"default";
			} else {
				el.style.color				=	"#0000FF";
//				el.style.textDecoration		=	"underline";
				el.style.cursor				=	"pointer";
			}
		} catch(e) {}
	}
}


function getAbs(obj,k) {
	var	kk	=	0;
	if(k=='y') {
		if(!obj||obj==null) return 0;

		if (typeof(obj.offsetTop != undefined)) kk	= obj.offsetTop;

		if (typeof(obj.offsetParent != undefined) && (obj.offsetParent != null))
			kk += getAbs(obj.offsetParent,'y');
	}
	else if(k=='x') 
	{
		if(!obj||obj==null) return 0;

		if (typeof(obj.offsetLeft != undefined)) kk = obj.offsetLeft;

		if (typeof(obj.offsetParent != undefined) && (obj.offsetParent != null))
			kk += getAbs(obj.offsetParent,'x');
	} else {
		return	{x:getAbs(obj,'x'),y:getAbs(obj,'y')};
	}
	return	kk;
}



function	scHpp() {
	tmp_log+="scHPP|";

if(document.getElementById('scSpeed_div').style.display=='none') return false;

	if( (scSpeedVal=speedVals[curSpeed]) == 0 ) return;

	tcY		=	getAbs(document.getElementById('tab_content')).y;
max_h = tcY+document.getElementById('tab_content').offsetHeight;


	scH	=	document.body.scrollHeight;
	scT	=	document.body.scrollTop;
	clH	=	document.body.clientHeight;
	

	if( (scH-scT) > clH ) {
		document.body.scrollTop	+=	1;
		setTimeout('scHpp()',scSpeedVal);
		nowScroll	=	true;
	} else {
		nowScroll	=	false;
	}
}

function	scDpp() {
tmp_log+="scD|";
	old_sc0 = sc0;
	sc0		=	sc1;
	sc1		=	document.body.scrollTop;

	tcY		=	getAbs(document.getElementById('tab_content')).y;

	if(sc1==0)
		TOP	=	tcY+2;
	else
		TOP	=	document.getElementById('scSpeed_div').offsetTop + (sc1-sc0);

	//для того чтобы скроллер не уходил выше чем содержимое таба
	if(sc1 && sc1 < tcY) return;
	
	max_h = tcY+document.getElementById('tab_content').offsetHeight;

	//для того чтобы скроллер не уходил ниже чем содержимое таба
	if(max_h-document.getElementById('scSpeed_div').offsetHeight < TOP) 
	{
		sc1 = sc0;
		sc0 = old_sc0;

		return;
	}

	document.getElementById('scSpeed_div').style.top	=	TOP + "px";

	if(!nowScroll)
		scHpp();

}

function	scSpeed(v) {
	if(v=="-")
		if(curSpeed>0)
			curSpeed--;
	if(v=="+")
		if(curSpeed<5)
			curSpeed++;

	mouIndic();
	if(curSpeed == 0)	nowScroll	=	false;
	if(!nowScroll) scHpp();
}




function	momIndic(ev) {
	if(!nowTuning) return;

	ev	=	ev?ev:window.event;

	document.getElementById('indic').style.height	=	getIndicY(ev);
}

function	mouIndic() {
	nowTuning	=	true;
	document.getElementById('indic').style.height	=	curSpeed*14;
}

function	clkIndic(ev) {
	ev	=	ev?ev:window.event;
	k	=	getIndicY(ev);
	h	=	Math.ceil(k / 14);

	curSpeed										=	h;
	document.getElementById('indic').style.height	=	h*14;

	nowTuning	=	false;
	
	if(!nowScroll)	scHpp();
}

function	getIndicY(ev) {
	k	=	ev.clientY - getAbs(document.getElementById('indic')).y + document.body.scrollTop;
	if(isIE)	k	-=	3;
	return	k;
}


function	checkKey(ev) {

	ev = ev?ev:window.event;
	if(ev.keyCode == 27) {
		curSpeed	=	0;
		nowScroll	=	false;
	}
	if(ev.keyCode == 43 || ev.keyCode == 107) {
		scSpeed("+");
	}

	if(ev.keyCode == 45 || ev.keyCode == 109) {
		scSpeed("-");
	}
	mouIndic();
}


function	showHelp(el) {
	tmp_log+="shH|";
	k	=	getAbs(el);
	m	=	{"clientX": k.x-250, "clientY": k.y-document.body.scrollTop+120};
	ts('tip_scr','<font style="font:bold 13px Arial;color:blue">+</font>&nbsp;&nbsp;to speed up (numpad)<br><font style="font:bold 13px Arial;color:blue">&#8211;</font>&nbsp;&nbsp;to slow down (numpad)<br><font style="font:bold 12px Arial;color:blue">Esc</font>&nbsp;&nbsp;to stop',m);
}
if(!document.getElementById('scSpeed_div')||document.getElementById('scSpeed_div')==null) {

} 
else {
document.onkeydown = checkKey;


scSpeedVal	=	220;
isIE		=	window.addEventListener?false:true;
nowTuning	=	true;
nowScroll	=	false;
curSpeed	=	0;

speedVals	=	new Array(0,300,200,120,50,20);

sc0	=	0;
sc1	=	0;


drag_on	=	false;

var	kk	= "";
}
function MyOnMouseMove(event) {

	if(!drag_on)	return;

	event	=	event?event:window.event;

	var newTop = event.clientY + document.body.scrollTop - kk.y;

	tcY		=	getAbs(document.getElementById('tab_content')).y;
	max_h = tcY+document.getElementById('tab_content').offsetHeight;

	if(newTop>(max_h-drag_obj.offsetHeight)) newTop = max_h-drag_obj.offsetHeight;

	drag_obj.style.top	= newTop + "px";
	drag_obj.style.left = event.clientX - kk.x + "px";
}



function MyOnDragStart(id,event) {

	event	=	event?event:window.event;

	drag_on = true;
	drag_obj = document.getElementById(id);

	t = getAbs(drag_obj);
	
	kk	=	{y: event.clientY + document.body.scrollTop - t.y, x: event.clientX - t.x};

}

function MyOnDragEnd() 
{
	if(drag_on) drag_on	=	false;
}


function get_check(str) 
{
	var cb_comm = document.getElementById('cb_comment').checked;
	var cb_corr = document.getElementById('cb_correction').checked;
	
	if(str=='corr') 
	{
		document.getElementById('cb_comment').checked = false;
		document.getElementById('cb_correction').checked = true;
	}
	else if(str=='comm') 
	{
		document.getElementById('cb_comment').checked = true;
		document.getElementById('cb_correction').checked = false;
	}

	//if(readCookie('dbg'))
	//{
		document.getElementById('cb_comment').parentNode.style.borderColor="white";
		
		var table = document.getElementById('cb_comment');
		while(table.tagName!="TABLE") table=table.parentNode;
		
		if(table.rows.length==2)table.deleteRow(1);
		
	//}

	return false;
}	

function HideWarning()
{
	if(document.getElementById('post_comm_table').rows.length>1)
	{
		document.getElementById('post_comm_table').deleteRow(1);
		document.getElementById('post_comm_table').rows[0].cells[0].style.borderColor="white";
	}
}

function getOffsetLeft(elm,topelm)
{
	var mOffsetLeft = elm.offsetLeft;
	var mOffsetParent = elm.offsetParent;

	while(mOffsetParent!=topelm&&mOffsetParent)
	{
		if (mOffsetParent.tagName == "TD" && is_ie && mOffsetParent.currentStyle.borderLeftWidth != "medium") mOffsetLeft += parseInt(mOffsetParent.currentStyle.borderLeftWidth);
		
		mOffsetLeft += mOffsetParent.offsetLeft;
		mOffsetParent = mOffsetParent.offsetParent;
	}

	return mOffsetLeft;
}

function	ini(str) 
{tmp_log+="ini|";
	if(!document.getElementById('scSpeed_div') || document.getElementById('scSpeed_div')==null) return;

	
	var	k	=	getAbs(document.getElementById('tabinfo'));
	
	if(str!='pro')
	{
		var	td	=	getAbs(document.getElementById('tab_content'));
		document.getElementById('scSpeed_div').style.top	=	td.y +  5 + "px";
	}
	
	if(isMozilla) 
	{
		document.getElementById('scSpeed_div').style.left	= 	k.x - 12 + document.getElementById('tabinfo').offsetWidth - document.getElementById('scSpeed_div').offsetWidth + "px";
		document.getElementById('scSpeed_div').style.top	=	td.y - 2 + "px";
	}
	else
	{
		document.getElementById('scSpeed_div').style.left	= 	getOffsetLeft(document.getElementById('tabinfo')) + document.getElementById('tabinfo').offsetWidth - document.getElementById('scSpeed_div').offsetWidth + "px"; 
		document.getElementById('scSpeed_div').style.width=71;
	}
	
	if(str!='pro') 
	{
		document.getElementById('scSpeed_div').style.visibility = 'visible';
	}
}

function readCookie(name) 
{	
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');

	for(var i=0;i < ca.length;i++) 
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}


if(!document.getElementById('scSpeed_div') || document.getElementById('scSpeed_div')==null) 
{

} 
else 
{	
	document.onmouseup = MyOnDragEnd;
	document.onmousemove = MyOnMouseMove;
}