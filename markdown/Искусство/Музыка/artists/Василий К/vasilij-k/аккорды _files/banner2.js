
var rotationtmr = 0;

function startrotationtmr() {
	window.clearInterval(window.rotationtmr);
	window.rotationtmr = window.setInterval('rotation()', 5000);
}

function stoprotationtmr() {
	window.clearInterval(window.rotationtmr);
}


var preloaded = new Array();
function preload_images() {
    for (var i = 0; i < arguments.length; i++) {
        preloaded[i] = document.createElement('img');
        preloaded[i].setAttribute('src',arguments[i]);
    }
}

var data = new Array();
	
var curpage = 0;

var cntphotos = 3;

var photossetings = new Array();
var photosptrs = new Array();

var photostepdelta = 15;
var photosstepinterval = 30;

window.photostmr = new Array();

function photosconstr() {
	window.photossetings[0] = { left0:0, left1:16, left10:0, top0:0, top1:20, top10:0, wh0: 100, wh1: 200, wh10:0, delta:0, progr: 0 }
	window.photossetings[1] = { left0:0, left1:16, left10:0, top0:0, top1:20, top10:0, wh0: 100, wh1: 200, wh10:0, delta:0, progr: 0 }
	window.photossetings[2] = { left0:0, left1:16, left10:0, top0:0, top1:-40, top10:0, wh0: 100, wh1: 200, wh10:0, delta:0, progr: 0 }
	
	for(i=0; i < window.cntphotos; i++) {
		if(document.getElementById('photo'+i)) {
			window.photosptrs[i] = document.getElementById('photo'+i);
			window.photossetings[i].left10 = window.photossetings[i].left1-window.photossetings[i].left0;
			window.photossetings[i].top10 = window.photossetings[i].top1-window.photossetings[i].top0;
			window.photossetings[i].wh10 = window.photossetings[i].wh1-window.photossetings[i].wh0;		
		} else {
			window.cntphotos = i+1;
			break;
		}
	}
}

function resizestep(i) {
	noact = 0;
	if(window.photossetings[i].delta > 0) {
		if(window.photossetings[i].progr < 100) {
			window.photossetings[i].progr += window.photossetings[i].delta;
			if(window.photossetings[i].progr >= 100)
				window.photossetings[i].progr = 100;
			resizephoto(i);
		} else {
			window.clearInterval(window.photostmr[i]);
			return;
		}				
	} else {
		if(window.photossetings[i].delta < 0) {
			if(window.photossetings[i].progr > 0) {
				window.photossetings[i].progr += window.photossetings[i].delta;
				if(window.photossetings[i].progr <= 0)
					window.photossetings[i].progr = 0;
				resizephoto(i);
			} else {
				window.clearInterval(window.photostmr[i]);
				return;
			}				
		} else {
			window.clearInterval(window.photostmr[i]);
			return;
		}
	}
}


function resizephoto(i)
{
	if(window.photossetings[i].progr == 100) {
		window.photosptrs[i].src = window.photosptrs[i].src.replace(/_s1\./i, '_s2.');
		window.photosptrs[i].style.width = window.photossetings[i].wh1 + 'px';
		window.photosptrs[i].style.height = window.photossetings[i].wh1 + 'px';
		window.photosptrs[i].style.left = window.photossetings[i].left1 + 'px';
		window.photosptrs[i].style.top = window.photossetings[i].top1 + 'px';
		
		
	} else {
		if(window.photossetings[i].progr == 0) {
			window.photosptrs[i].src = window.photosptrs[i].src.replace(/_s2\./i, '_s1.');
			window.photosptrs[i].style.width = window.photossetings[i].wh0 + 'px';
			window.photosptrs[i].style.height = window.photossetings[i].wh0 + 'px';
			window.photosptrs[i].style.left = window.photossetings[i].left0 + 'px';
			window.photosptrs[i].style.top = window.photossetings[i].top0 + 'px';
		} else {
			//window.photosptrs[i].src = 'http://pb.li.ru/images/news/120/95_s2.jpg';
			window.photosptrs[i].style.width = (window.photossetings[i].wh0 + window.photossetings[i].wh10 * window.photossetings[i].progr * 0.01) + 'px';
			window.photosptrs[i].style.height = window.photosptrs[i].style.width;			
			window.photosptrs[i].style.left = (window.photossetings[i].left0 + window.photossetings[i].left10 * window.photossetings[i].progr * 0.01 ) + 'px';
			window.photosptrs[i].style.top = (window.photossetings[i].top0 + window.photossetings[i].top10 * window.photossetings[i].progr * 0.01 ) + 'px';
			
		}
	}
}


function photoover(photoidx) {
	stoprotationtmr();
	for(i=0; i < window.cntphotos; i++) {
		window.clearInterval(window.photostmr[i]);
		if(photoidx == i) {
			window.photosptrs[i].style.zIndex=50;
			window.photossetings[i].delta = window.photostepdelta;
		} else {
			window.photosptrs[i].style.zIndex=45;
			window.photossetings[i].delta = -window.photostepdelta;
		}
		window.photostmr[i] = window.setInterval('resizestep('+i+')', window.photosstepinterval);
	}

}


function photoout() {
	for(i=0; i < window.cntphotos; i++) {
		window.clearInterval(window.photostmr[i])
		window.photossetings[i].delta = -window.photostepdelta;
		window.photostmr[i] = window.setInterval('resizestep('+i+')', window.photosstepinterval);
	}	
	startrotationtmr();
}



function rotation() {
	if(window.curpage < 4)
		window.curpage++;
	else
		window.curpage = 0;
	setpagedata();
}

function set_topic(row_id) {	
	var new_data = window.data[ window.curpage ][ row_id ];
	
	document.getElementById('photo'+row_id).src = new_data.imgs1;
	
	document.getElementById('imglnk'+row_id).href = new_data.link;
	
	document.getElementById('titlelnk'+row_id).href = new_data.link;
	document.getElementById('titlelnk'+row_id).innerHTML = new_data.title;
	
	document.getElementById('catlnk'+row_id).href = new_data.catlink;
	document.getElementById('catlnk'+row_id).innerHTML = new_data.cat;
}

function setpage(newpageid) {
	window.curpage = newpageid;
	setpagedata();
	stoprotationtmr();
	startrotationtmr();
	
		
}

function setpagedata() {
	for($i=0; $i<3; $i++)
		set_topic($i);
		
	var pnumlinks = document.getElementById('pnums').getElementsByTagName('a');
	for($i=0; $i<5; $i++)
		pnumlinks[$i].className = $i==window.curpage ? 'act' : 'noact';
		
		
}

function setZindex (col,id) {
	while (col>0) 
	{
	  document.getElementById("block"+col).style.zIndex="1";
	  col--;
	}
	document.getElementById("block"+id).style.zIndex="10";
}

function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}

function submitCatsPriority() {
	var newSelectedCatsCnt = 0;		
	$(".catsconfig input:checked").each(
		function () {
			newSelectedCatsCnt++;
		}
	);
	
	if(newSelectedCatsCnt < 5)
	{
		$(".catsconfig .msg b ").css('background-color', 'red');
		window.setTimeout('$(".catsconfig .msg b ").css(\'background-color\', \'\');', 1000);
		return false;
	}
	return true;
}

function showCatsPriority() {
	$(".catsconfig").show("scale");
	
	$(".blind").css('opacity', 0).show().animate({opacity: 0.8}, 'fast' );

}	
function canselCatsPriority() {
	$(".catsconfig").hide("scale");
	$(".blind").animate({opacity: 0}, 'fast', function () {$(this).hide();});
}

function generateData() {

	var mycats = getCookie('mynewscats');
	if(mycats)
		mycats =  mycats.split('_');
	else
		mycats = new Array();
		
	var mycats_by_id = new Array();
	
	for(mycat_idx in mycats)
		mycats_by_id[ mycats[mycat_idx] ] = true;
		
	//document.title += 'mycats_len: '+mycats.length;
	
	var newsAll = new Array();
	
	var cats_err = false;
	if(mycats.length > 4) {
		for(idx in mycats) {
			var catid = mycats[idx];
			if(typeof catsnews[catid] != 'undefined') {
				for(j in catsnews[catid])
					newsAll.push(catsnews[catid][j]);
			}
		}
	}
	
	newsAll = shuffle(newsAll);
	
	var i=0;
	var j=0;
	
	for(news_idx in newsAll) {
		if(j == 0)
			window.data[i] = new Array();		
		window.data[i].push( newsAll[news_idx] );
		j++;
		if(j > 2) {
			j=0;
			i++;
		}
	}

	//document.title += 'data_len: '+data.length;
	
	if(data.length < 5) {
		for(catnews_id in catsnews)
			data.push( catsnews[catnews_id] );
		cats_err = true;
	}

	data = shuffle(data);
	//document.title += 'cats_err: '+cats_err;
	
	function shuffle (v) {
		for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
   	 	return v;
	}
	
	setpage(0);
	photosconstr();
	
	$('.columbs input').each(function() {
		var cb_cat_id = parseInt($(this).attr('id').replace('c', ''));
		if(typeof catsnews[cb_cat_id] != 'undefined') {
			if(cats_err || (typeof mycats_by_id[cb_cat_id] != 'undefined') )
				$(this).attr('checked','checked');
			else
				$(this).removeAttr('checked');
		}
	})
	
}