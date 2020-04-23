var pa_anchor_debug_domains = { };
pa_anchor_debug_domains[298] = true;
pa_anchor_debug_domains[221] = true;
pa_anchor_debug_domains[277] = true;
pa_anchor_debug_domains[278] = true;
pa_anchor_debug_domains[279] = true;
pa_anchor_debug_domains[280] = true;
pa_anchor_debug_domains[352] = true;
pa_anchor_debug_domains[353] = true;
pa_anchor_debug_domains[354] = true;
pa_anchor_debug_domains[355] = true;
pa_anchor_debug_domains[364] = true;
pa_anchor_debug_domains[376] = true;
pa_anchor_debug_domains[377] = true;
pa_anchor_debug_domains[378] = true;
pa_anchor_debug_domains[379] = true;
pa_anchor_debug_domains[380] = true;
pa_anchor_debug_domains[381] = true;
pa_anchor_debug_domains[382] = true;
pa_anchor_debug_domains[386] = true;
pa_anchor_debug_domains[1] = true;

function pa_anchor_trackEvent(type, payload)
{  
	if (pa_anchor_debug_flag || pa_anchor_debug_domains[domainId])
	{
		var filename = "blank42.gif";
		if (type < 0)
		{
			filename = "console.gif";
		}
		var pixel = new Image ();
		pixel.src = 'http://dev.dashboardad.com/'+filename+'?e=' + type + '&' + payload;
	}
}

function pa_anchor_trackPage()
{
	var pixel = new Image();
	var url = 'http://clicks.dashboardad.net/type3.jsp?rId='+rUnique+'&publisherId='+publisherId+'&domainId='+domainId+'&interval='+displayCount;
	pixel.src = url;
}

function pa_anchor_writeCookie(name,value)
{
	var date = new Date();
	date.setHours(0,0,0,0);
	date.setDate(date.getDate()+1);
	var expires = "; expires="+date.toGMTString();
	document.cookie = name+"="+value+expires+"; path=/";
}

function pa_anchor_readCookie(name)
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

PaJSONscriptRequest.prototype.buildScriptTag = function ()
{
	this.scriptObj = document.createElement("script");
	this.scriptObj.setAttribute("type", "text/javascript");
	this.scriptObj.setAttribute("charset", "utf-8");
	this.scriptObj.setAttribute("src", this.fullUrl + this.noCacheIE);
	this.scriptObj.setAttribute("id", this.scriptId);
}

PaJSONscriptRequest.prototype.removeScriptTag = function ()
{
	this.headLoc.removeChild(this.scriptObj);
}

PaJSONscriptRequest.prototype.addScriptTag = function ()
{
	this.headLoc.appendChild(this.scriptObj);
}

if (typeof(PaJSONscriptRequest.scriptCounter) == "undefined")
	PaJSONscriptRequest.scriptCounter = 1;

function PaJSONscriptRequest(fullUrl, cachebust)
{
	this.fullUrl = fullUrl;
	if (cachebust)
		this.noCacheIE = '&noCacheIE=' + (new Date()).getTime();
	else
		this.noCacheIE = '';
	this.headLoc = document.getElementsByTagName("head").item(0);
	this.scriptId = 'JscriptId' + PaJSONscriptRequest.scriptCounter++;
}

function PaJSONscriptRequest(fullUrl, cachebust, randId)
{
	this.fullUrl = fullUrl;
	if (cachebust)
		this.noCacheIE = '&noCacheIE=' + randId;
	else
		this.noCacheIE = '';
	this.headLoc = document.getElementsByTagName("head").item(0);
	this.scriptId = 'JscriptId_' + randId;
}

var rUnique = (new Date()).getTime().toString()+'_'+Math.floor(Math.random()*100000000).toString(16);

try
{
	var displayCount = pa_anchor_readCookie('aon_overlay');
	if (displayCount == null)
	{
		pa_anchor_writeCookie('aon_overlay', "0");
		displayCount = pa_anchor_readCookie('aon_overlay');
		if (displayCount == null)
		{
			displayCount = "null";
		}
	}
	try
	{
		displayCount = parseInt(displayCount);
	}
	catch (err) { }

	if(document.all && !document.getElementById)
	{
		document.getElementById = function(id)
		{
			return document.all[id];
		}
	}

	var publisherId = 97999;
	if (typeof(pa_anchor_publisherId) != "undefined" && pa_anchor_publisherId != null)
	{
		try
		{
			publisherId = pa_anchor_publisherId;
		}
		catch (err) { }
	}

	var domainId = 5555555;
	if (typeof(pa_anchor_domainId) != "undefined" && pa_anchor_domainId != null)
	{
		try
		{
			domainId = pa_anchor_domainId;
		}
		catch (err) { }
	}

	pa_anchor_trackPage();


	var pageCount = 0;
	if (typeof(pa_anchor_pageCount) != "undefined" && pa_anchor_pageCount != null)
	{
		try
		{
			pageCount = pa_anchor_pageCount;
		}
		catch (err) { }
		if (pageCount < 0)
			pageCount = 0;
	}

	var maxDisplays = 3;
	if (typeof(pa_anchor_maxDisplays) != "undefined" && pa_anchor_maxDisplays!= null)
	{
		try
		{
			maxDisplays = pa_anchor_maxDisplays;
		}
		catch (err) { }
		if (maxDisplays <= 0)
			maxDisplays = 1000000000;
	}

	var pa_anchor_debug_flag = false;
	if (typeof(pa_anchor_debug) != "undefined" && pa_anchor_debug!= null)
	{
		try
		{
			pa_anchor_debug_flag = pa_anchor_debug;
		}
		catch (err) { }
	}

	var pa_anchor_cookie_flag = true;
	if (typeof(pa_anchor_cookie) != "undefined" && pa_anchor_cookie!= null)
	{
		try
		{
			pa_anchor_cookie_flag = (pa_anchor_cookie != 'false');
		}
		catch (err) { }
	}

	var repeatDelay = 3;
	if (typeof(pa_anchor_repeatDelay) != "undefined" && pa_anchor_repeatDelay!= null)
	{
		try
		{
			repeatDelay = parseInt(pa_anchor_repeatDelay)+1;
		}
		catch (err) { }
		if (repeatDelay < 2)
			repeatDelay = 2;
	}

	if (domainId == '342')
	{
		repeatDelay = 1;
	}
	if (domainId == '273')
	{
		maxDisplays = 5;
		repeatDelay = 1;
	}
	if (domainId == '341')
	{
		maxDisplays = 1;
	}
	if (domainId == '298')
	{
		maxDisplays = 1000000;
		repeatDelay = 1;
	}

	function pa_anchor_init()
	{
		try
		{
			if (pa_anchor_cookie_flag)
			{
				displayCount = pa_anchor_readCookie('aon_overlay');
				if (displayCount == null)
				{
					pa_anchor_writeCookie('aon_overlay', "0");
					displayCount = pa_anchor_readCookie('aon_overlay');
					if (displayCount == null)
					{
						//pa_anchor_trackMiss();
						return;
					}
				}
				if (displayCount == "closed")
				{
					//pa_anchor_trackMiss();
					return;
				}
				displayCount = parseInt(displayCount);
			}
			if (!pa_anchor_cookie_flag || ( (displayCount >= pageCount) && (((displayCount-pageCount) % repeatDelay) == 0) && (((displayCount-pageCount) / repeatDelay) < maxDisplays) ) )
			{
				// load anchor-call.js
				if (typeof(aObj) == "undefined")
					aObj = new Object();
				aObj[rUnique+'_call'] = new PaJSONscriptRequest('http://tags.adcde.com/images/tags/anchor-call.js?', true, rUnique+'_call');
				aObj[rUnique+'_call'].buildScriptTag();
				aObj[rUnique+'_call'].addScriptTag();
			}
			else
			{
				//pa_anchor_trackMiss();
				pa_anchor_writeCookie('aon_overlay', displayCount+1);
			}
		}
		catch (e)
		{
			pa_anchor_trackEvent(-3, 'url='+encodeURIComponent(document.location.href)+'&rId='+rUnique+'&msg='+encodeURIComponent(e.toString()));
		}
	}

	function pa_anchor_registerEventHandler(func, event)
	{
		if (window.addEventListener)
		{
			window.addEventListener(event, func, false);
		}
		else if (window.attachEvent)
		{
			window.attachEvent('on'+event, func);
		}
		else
		{
			window[event+'Chain'] = window['on'+event];
			if (typeof window['on'+event] != "function")
			{
				window['on'+event] = func;
			}
			else
			{
				window['on'+event] = function()
				{
					window[event+'Chain']();
					func();
				};
			}
		}
	}

	pa_anchor_registerEventHandler(pa_anchor_init, 'load');
}
catch (e)
{
	pa_anchor_trackEvent(-1, 'url='+encodeURIComponent(document.location.href)+'&rId='+rUnique+'&msg='+encodeURIComponent(e.toString()));
}

