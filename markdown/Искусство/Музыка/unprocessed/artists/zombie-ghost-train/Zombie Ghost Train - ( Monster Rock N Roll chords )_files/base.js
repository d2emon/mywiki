window.xpath = !!(document.evaluate);
if (window.ActiveXObject) window.ie = window[window.XMLHttpRequest ? 'ie7' : 'ie6'] = true;
else if (document.childNodes && !document.all && !navigator.taintEnabled) window.webkit = window[window.xpath ? 'webkit420' : 'webkit419'] = true;
else if (document.getBoxObjectFor != null) window.gecko = true;

function setOpacity(el,opacity) {
	if (opacity==0){
		if (el.style.visibility!="hidden") el.style.visibility = "hidden";
	} else {
		if (el.style.visibility!="visible") el.style.visibility = "visible";
	}
	if (window.ie) el.style.filter = (opacity==1)?'':"alpha(opacity="+opacity*100+")";
	else el.style.opacity = opacity;
}

function gE(e) {
	return	document.getElementById(e);
}

function getCookieValue(sName) {
	var aCookie = document.cookie.split("; ");
	for (var i=0; i < aCookie.length; i++) {
		var aCrumb = aCookie[i].split("=");
		if (sName == aCrumb[0])
			return unescape(aCrumb[1]);
	}
	return null;
}


function setCookie(cN, cV, cP, cE) {
	cV = escape(cV);
	if (cE == "") {
		var nowDate = new Date();
		nowDate.setHours(nowDate.getHours() + 12);
		cE = nowDate.toGMTString();
	} if (cP != "") {
		cP = ";Path=" + cP;
	}
	document.cookie = cN + "=" + cV + ";expires=" + cE + cP;
}







// name - имя считываемого cookie
function getCookie(name) {
        var prefix = name + "="
        var cookieStartIndex = document.cookie.indexOf(prefix)
        if (cookieStartIndex == -1)
                return null
        var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length)
        if (cookieEndIndex == -1)
                cookieEndIndex = document.cookie.length
        return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex))
}

// name - имя cookie
// [path] - путь, для которого cookie действительно
// [domain] - домен, для которого cookie действительно
function deleteCookie(name, path, domain)
{
	if (getCookie(name)) {
			document.cookie = name + "=" + 
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			"; expires=Thu, 01-Jan-70 00:00:01 GMT"
	}
}
