var str_out = '<div id="jamboplayer_div"></div>';
var jcTable = document.createElement("table");
jcTable.cellPadding='0';
jcTable.cellSpacing='0';
jcTable.border='0';
jcTable.style.margin='0px';
jcTable.style.padding='0px';
var jcThead = document.createElement("thead");
jcThead.style.height = '0px';
var jcTfoot = document.createElement("tfoot");
jcTfoot.style.height = '0px';
var jcTbody = document.createElement("tbody");
jcTbody.padding='0px';
jcTbody.margin='0px';
var jcCell = document.createElement("td");
var jcCell2 = document.createElement("td");

jcTable.width='300px';
var jcTopRow = document.createElement("tr");
var jcTopRowCell = document.createElement("td");
var tldiv = document.createElement("div");
tldiv.id = 'tldiv';
jcTopRowCell.appendChild( tldiv );
jcTopRow.appendChild( jcTopRowCell );
var jcTopRowCell2 = document.createElement("td");
var jcTopRowCell3 = document.createElement("td");
jcTopRowCell3.align='left';
jcTopRowCell3.verticalAlign='top';
jcTopRowCell.align='right';
jcTopRowCell.verticalAlign='top';
jcTopRow.appendChild( jcTopRowCell2 );
jcTopRow.appendChild( jcTopRowCell3 );
jcTopRow.width='300px';
jcTopRow.style.width='300px';
jcTopRowCell2.style.backgroundColor='#F6F6F6';
var trdiv = document.createElement("div");
trdiv.id = 'trdiv';
jcTopRowCell3.appendChild( trdiv );
var jcBotRow = document.createElement("tr");
var jcBotRowCell = document.createElement("td");
var bldiv = document.createElement("div");
bldiv.id = 'bldiv';
jcBotRowCell.appendChild( bldiv );
jcBotRow.appendChild( jcBotRowCell );
jcBotRow.width='300px';
jcBotRow.style.width='300px';
var jcBotRowCell2 = document.createElement("td");
var jcBotRowCell3 = document.createElement("td");
jcBotRow.appendChild( jcBotRowCell2 );
jcBotRow.appendChild( jcBotRowCell3 );
jcBotRowCell2.style.backgroundColor='#F6F6F6';
var brdiv = document.createElement("div");
brdiv.id = 'brdiv';
jcBotRowCell3.appendChild( brdiv );
var jcRow = document.createElement("tr");
var jcRow2 = document.createElement("tr");
jcRow.style.backgroundColor='#F6F6F6';
jcRow2.style.backgroundColor='#F6F6F6';
var jcCellPre = document.createElement("td");
var jcCellPost = document.createElement("td");
var jcCellPre2 = document.createElement("td");
var jcCellPost2 = document.createElement("td");
jcRow.appendChild( jcCellPre );
jcCell2.align="left";
jcCell2.verticalAlign="top";
jcCell2.colSpan=3;
jcCell2.width='300px';
jcCell2.style.width='300px';
jcCell.align="left";
jcCell.verticalAlign="top";
jcCell.id="main_cell";
jcCell.innerHTML = str_out;
jcTable.appendChild(jcThead);
jcTable.appendChild(jcTbody);
jcTable.appendChild(jcTfoot);
jcTbody.appendChild(jcTopRow);
jcTbody.appendChild(jcRow);
jcTbody.appendChild(jcRow2);
jcTbody.appendChild(jcBotRow);
jcRow.appendChild(jcCell);
jcRow2.appendChild(jcCell2);
jcRow.appendChild( jcCellPost );
//jcRow2.appendChild( jcCellPost2 );
jcRow.appendChild( jcCellPost );
var ca = document.createElement( 'div' );
ca.id = 'ca';
ca.style.padding='0px';
ca.style.margin='0px';
ca.style.width='300px';
ca.style.height='250px';
ca.width='300px';
ca.height='250px';
ca.style.display='block';
ca.style.border='0px';
jcCell2.appendChild( ca );
var ii = document.createElement( 'div' );
ii.id='ii';
ii.style.width='1px';
ii.style.height='1px';
jcCell2.appendChild( ii );
var vc = document.createElement( 'div' );
vc.id = 'vc';
vc.style.width='1px';
vc.style.height='1px';
jcCell2.appendChild( vc );
document.getElementById( 'jambocast_wrapper').appendChild( jcTable );

var params = {
	allowScriptAccess:"always",
	flashvars: "pubsite_id=12694&player_reference_id=12694&logo=jc&bgcolor=F6F6F6&layout=bottom&base_url=http%3A%2F%2Fplayer.jambovideonetwork.com%2F&logoHref=http%3A%2F%2Fwww.jambovideonetwork.com%2F&logoUrl=http%3A%2F%2Fimages.jambocast.com%2Fimages%2FJ_logo25x25.png",
	quality: "high",
	align: "middle",
	play: "true",
	loop: "true",
	salign: "",
	scale: "showall",
	wmode: "transparent",
	devicefont: "false",
	id: "JamboPlayer",
	bgcolor: "#F6F6F6",
	name: "JamboPlayer",
	menu: "true",
	allowFullScreen: "false"
}

swfobject.embedSWF("http://media.jambocast.com/jcp/JamboPlayer.swf?2009103002&pr=12694", "jamboplayer_div", "288px", "260px", "9.0.0", "http://media.jambocast.com/jcp/expressInstall.swf", "pubsite_id=12694&logo=jc&bgcolor=F6F6F6&player_reference_id=12694&layout=bottom&base_url=http%3A%2F%2Fplayer.jambovideonetwork.com%2F&logoHref=http%3A%2F%2Fwww.jambovideonetwork.com%2F&logoUrl=http%3A%2F%2Fimages.jambocast.com%2Fimages%2FJ_logo25x25.png", params, params );
params = {
	allowScriptAccess:"sameDomain",
	flashvars: "color=0xF6F6F6&type=topLeft",
	quality: "high",
	align: "middle",
	play: "true",
	loop: "true",
	salign: "",
	scale: "showall",
	wmode: "transparent",
	devicefont: "false",
	id: "tlcorner",
	name: "tlcorner",
	menu: "true",
	allowFullScreen: "false"
}
swfobject.embedSWF("http://media.jambocast.com/jcp/RoundCorner.swf", "tldiv", "6", "6", "9.0.0", "http://media.jambocast.com/jcp/expressInstall.swf", "color=0xF6F6F6&type=topLeft", params, params );
params = {
	allowScriptAccess:"sameDomain",
	flashvars: "color=0xF6F6F6&type=topRight",
	quality: "high",
	align: "middle",
	play: "true",
	loop: "true",
	salign: "",
	scale: "showall",
	wmode: "transparent",
	devicefont: "false",
	id: "trcorner",
	name: "trcorner",
	menu: "true",
	allowFullScreen: "false"
}
swfobject.embedSWF("http://media.jambocast.com/jcp/RoundCorner.swf", "trdiv", "6", "6", "9.0.0", "http://media.jambocast.com/jcp/expressInstall.swf", "color=0xF6F6F6&type=topRight", params, params );
params = {
	allowScriptAccess:"sameDomain",
	flashvars: "color=0xF6F6F6&type=bottomLeft",
	quality: "high",
	align: "middle",
	play: "true",
	loop: "true",
	salign: "",
	scale: "showall",
	wmode: "transparent",
	devicefont: "false",
	id: "blcorner",
	name: "blcorner",
	menu: "true",
	allowFullScreen: "false"
}
swfobject.embedSWF("http://media.jambocast.com/jcp/RoundCorner.swf", "bldiv", "6", "6", "9.0.0", "http://media.jambocast.com/jcp/expressInstall.swf", "color=0xF6F6F6&type=bottomLeft", params, params );
params = {
	allowScriptAccess:"sameDomain",
	flashvars: "color=0xF6F6F6&type=bottomRight",
	quality: "high",
	align: "middle",
	play: "true",
	loop: "true",
	salign: "",
	scale: "showall",
	wmode: "transparent",
	devicefont: "false",
	id: "brcorner",
	name: "brcorner",
	menu: "true",
	allowFullScreen: "false"
}
swfobject.embedSWF("http://media.jambocast.com/jcp/RoundCorner.swf", "brdiv", "6", "6", "9.0.0", "http://media.jambocast.com/jcp/expressInstall.swf", "color=0xF6F6F6&type=bottomRight", params, params );
