<!-- 

var NS = (navigator.appName == "Netscape") ? true : false;
var isNav4 = (document.layers) ? true : false;

var dRef = "";
var sRef = "";

	if (isNav4) {
		dRef = "document.layers[";
		sRef = "]";
	} else {
		dRef = "document.getElementById(";
		sRef = ").style";
	}

var x = 100;
var y = 100;
var keyPress = '';
var keyKode = '';
var keyString = '';
var keyIndx = 0;
var keepEscp = 0;

var subMenuLength  = 5;

var Pop_popSub0_Left = 100;
var Pop_popSub0_Top = 100;

var depthString = object["index"].relpath;
var depthLevel;
if (depthString.length > 18) {
	depthLevel = depthString.substring(0,depthString.length-17);
} else {
	depthLevel = '';
}

var actMSub = "popSub0";
var obKAP = false;
var obRAG = false;

//======  Browser compartibility detection  =======
/*
browser=(((navigator.appName=="Netscape")&&(parseInt(navigator.appVersion)>=3))||((navigator.appName=="Microsoft Internet Explorer")&&(parseInt(navigator.appVersion)>=4)))

if (!browser) {
	alert ('Your browser may not support advanced features of this web site');
} else {
	alert('browser = "'+  navigator.appName +'",  version = '+navigator.appVersion.charAt(0) +'.x');
}
*/
//   -->
