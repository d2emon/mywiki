try
{
	var pa_anchor_ss = function()
	{
		var root = false;
		var applyPositioning = true;

		var shim = 'http://media2.tmlatn.com/images/blank42.gif';

		var fnLoadPngs = function()
		{
			if (root)
			{
				root = document.getElementById(root);
			}
			else
			{
				root = document;
			}
			var obj = null;
			for (var i = root.all.length - 1; i >= 0; i--)
			{
				obj = root.all[i];
				if (obj.currentStyle.backgroundImage.match(/\.png/i) !== null)
				{
					bg_fnFixPng(obj);
				}
				if (obj.tagName=='IMG' && obj.src.match(/\.png$/i) !== null)
				{
					el_fnFixPng(obj);
				}
				if (applyPositioning && (obj.tagName=='A' || obj.tagName=='INPUT') && obj.style.position === '')
				{
					obj.style.position = 'relative';
				}
			}
		};

		var bg_fnFixPng = function(obj)
		{
			var mode = 'scale';
			var bg  = obj.currentStyle.backgroundImage;
			var src = bg.substring(5,bg.length-2);
			if (obj.currentStyle.backgroundRepeat == 'no-repeat')
			{
				mode = 'crop';
			}

			obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='" + mode + "')";
			obj.style.backgroundImage = 'url('+shim+')';
		};

		var el_fnFixPng = function(img)
		{
			var src = img.src;
			img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='scale')";
			img.src = shim;
		};

		return {
			limitTo: function(el)
			{
				root = el;
			},

			run: function()
			{
				fnLoadPngs();
			}
		};
	}();

	function pa_anchor_base64Decode(d)
	{
		var j,a,b,c,e=new Array(4),i=0,o="",k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		while (i<d.length)
		{
			for (j=0; j<4; j++)
				e[j]=k.indexOf(d.charAt(i++));
			a=(e[0]<<2)|(e[1]>>4);
			b=((e[1]&15)<<4)|(e[2]>>2);
			c=((e[2]&3)<<6)|e[3];
			o+=String.fromCharCode(a,b,c);
		}
		if (e[3]==64)
			o=o.slice(0,-1);
		if (e[2]==64)
			o=o.slice(0,-1);
		return o;
	}
	

	function pa_anchor_startMove()
	{
		try
		{
			pa_anchor_trackEvent(1, 'd='+domainId+'&p='+publisherId+'&rId='+rUnique);
			if (pa_anchor_dart_prefix.length > 0)
			{
				dart_pixel = new Image ();
				dart_pixel.src = pa_anchor_dart_prefix+'http://debug.dashboardad.com/images/dart.gif?cb='+(new Date()).getTime().toString(16);
			}
			overlayShowing = true;
			if (ie)
			{
				overlay.style.height = "1px";
				ieshim.style.height = "1px";
				pa_anchor_doPaddingCheck();
				pa_anchor_doPaddingCheck();
				pa_anchor_registerEventHandler(pa_anchor_doPaddingCheck, 'resize');
				paddingHandle = setInterval(pa_anchor_doPaddingCheck, 1000);
				ieshim.style.visibility = "visible";
				ieshim.style.display = "block";
				if (ie6)
				{
					ieshim_width = ieshim.clientWidth;
					selectHandle = setInterval(pa_anchor_checkSelects, 5);
				}
			}
			else
			{
				overlay.style.marginBottom = "-"+overlayHeight+"px";
			}
			percent = 0;
			overlay.style.visibility = "visible";
			moveHandle = setInterval(pa_anchor_incrementMove, 25);
		}
		catch (e)
		{
			pa_anchor_trackEvent(-5, 'url='+encodeURIComponent(document.location.href)+'&rId='+rUnique+'&msg='+encodeURIComponent(e.toString()));
		}
	}

	function pa_anchor_incrementMove()
	{
		try
		{
			percent += speed;
			if (percent >= 100)
			{
				if (viewTime > 0)
				{
					setTimeout(pa_anchor_doCloseAuto, viewTime);
				}
				clearTimeout(moveHandle);
				var container;
				if (ie)
				{
					pa_anchor_doPaddingCheck();
					overlay.style.height = overlayHeight + "px";
					ieshim.style.height = overlayHeight + "px";
					container = ie_holder;
				}
				else
				{
					container = document.body;
					overlay.style.marginBottom = "0px";
				}
				var debugstr = "begin: "+container.scrollHeight+"\n";
				var curr = parseInt(container.scrollHeight);
				overlayHeight = parseInt(overlayHeight);
				var multi = 0;
				var heightTry = overlayHeight;
				while ((multi < 10) && (container.scrollHeight < (curr+overlayHeight)))
				{
					multi++;
					heightTry *= 2;
					padding.style.height = heightTry+"px";
					// I have no idea why, but if I remove the following line one of my tests breaks  :-(
					debugstr += "1c: "+((multi < 14) && (container.scrollHeight < (curr+overlayHeight)))+"\n";
				}
				if (container.scrollHeight < curr+overlayHeight)
					padding.style.height = overlayHeight+"px";
				else
					padding.style.height = heightTry-(container.scrollHeight - (curr+overlayHeight))+"px";
				if (document.getElementById('pa_anchor_video_player') != null)
				{
					var vm_id = document.getElementById('pa_anchor_video_id').innerHTML;
					var tmp = vm_id.indexOf('>');
					if (tmp > -1)
						vm_id = vm_id.substring(tmp+1);
					tmp = vm_id.indexOf('<');
					if (tmp > -1)
						vm_id = vm_id.substring(0,tmp);
					var vm_title = document.getElementById('pa_anchor_video_title').innerHTML;
					tmp = vm_title.indexOf('>');
					if (tmp > -1)
						vm_title = vm_title.substring(tmp+1);
					tmp = vm_title.indexOf('<');
					if (tmp > -1)
						vm_title = vm_title.substring(0,tmp);
					document.getElementById('pa_anchor_video_player').innerHTML = '';
					var config = { playlist: [ { linkUrl: window.encodeURIComponent(window.redirectUrl), url: document.getElementById('pa_anchor_video_player').href, linkWindow: "_blank", autoPlay: videoAutoStart, autoBuffering: true, onBeforeFinish: function() { if (videoLoop) return false; else $f().getPlugin("play").css({width: "60%", height: "40%", opacity: 1.0}); }, onStart: function() { $f().getPlugin("play").css({width: "30%", height: "30%", opacity: 1.0}); }, vm_id: vm_id, vm_title: vm_title} ], plugins: { controls: { autoHide: "always", hideDelay: 1500 } }, onLoad: function() { $f().getPlugin("play").css({width: "30%", height: "30%", opacity: 1.0}); $f().setVolume(50); if (videoAutoStart) { $f().mute(); } else { $f().unmute(); } } };
					flowplayer("pa_anchor_video_player","http://media2.tmlatn.com/images/flowplayer.swf", config);
				}
			}
			else
			{
				var pos = (100 - percent) / 100 * overlayHeight;
				if (ie)
				{
					pa_anchor_doPaddingCheck();
					overlay.style.height = (overlayHeight-pos) + "px";
					ieshim.style.height = (overlayHeight-pos) + "px";
				}
				else
				{
					overlay.style.marginBottom = "-" + pos + "px";
				}
			}
		}
		catch (e)
		{
			pa_anchor_trackEvent(-6, 'url='+encodeURIComponent(document.location.href)+'&rId='+rUnique+'&msg='+encodeURIComponent(e.toString()));
		}
	}

	function pa_anchor_doClose()
	{
		return pa_anchor_doCloseImpl(true, 2);
	}

	function pa_anchor_doCloseAuto()
	{
		return pa_anchor_doCloseImpl(false, 3);
	}

	function pa_anchor_doCloseImpl(withCookie, eventNum)
	{
		if (!overlayShowing)
			return false;
		try
		{
			pa_anchor_trackEvent(eventNum, 'd='+domainId+'&p='+publisherId+'&rId='+rUnique);
			overlayShowing = false;
			if (withCookie && pa_anchor_cookie_flag)
				pa_anchor_writeCookie('aon_overlay', 'closed');
			document.body.removeChild(overlay);
			if (ie)
			{
				document.body.removeChild(ieshim);
				clearInterval(paddingHandle);
				if (ie6)
				{
					clearInterval(selectHandle);
					pa_anchor_resetSelects();
				}
				padding.style.height = "0px";
				//ie_holder.removeChild(padding);
			}
			else
			{
				document.body.removeChild(padding);
			}
		}
		catch (e)
		{
			pa_anchor_trackEvent(-2, 'url='+encodeURIComponent(document.location.href)+'&rId='+rUnique+'&msg='+encodeURIComponent(e.toString()));
		}
		return false;
	}

	function pa_anchor_buildOverlay()
	{
		if (parseInt(barHeight) + (useDropshadow?shadowHeight:0) > maxOverlayHeight)
		{
			overlayHeight = maxOverlayHeight;
			barHeight = overlayHeight-(useDropshadow?shadowHeight:0);
		}
		else
		{
			overlayHeight = Math.max(parseInt(barHeight) + (useDropshadow?shadowHeight:0), adHeight);
		}
		var blankHeight = overlayHeight - barHeight;

		var holder = document.createElement("table");
		holder.style.margin = "0px";
		holder.style.padding = "0px";
		holder.style.border = "0px";
		holder.style.lineHeight = "normal";
		holder.cellPadding = 0;
		holder.cellSpacing = 0;
		holder.style.width = "100%";
		holder.style.height = overlayHeight + "px";
		holder.style.zIndex = '2147483647';
		holder.style.position = "absolute";
		holder.style.bottom = "0";
		holder.style.left = "0";
		holder.style.backgroundImage = "url(http://media2.tmlatn.com/images/blank42.gif)";
		holder.style.backgroundColor = "transparent";
		var tbody = document.createElement("tbody");
		tbody.style.zIndex = '2147483647';
		tbody.style.margin = "0px";
		tbody.style.padding = "0px";
		tbody.style.width = "100%";
		tbody.style.height = overlayHeight + "px";
		tbody.style.backgroundImage = "url(http://media2.tmlatn.com/images/blank42.gif)";
		tbody.style.backgroundColor = "transparent";
		var row = document.createElement("tr");
		row.style.zIndex = '2147483647';
		row.style.height = overlayHeight + "px";
		row.style.backgroundImage = "url(http://media2.tmlatn.com/images/blank42.gif)";
		row.style.backgroundColor = "transparent";
		var td1 = document.createElement("td");
		td1.style.verticalAlign = "top";
		td1.style.backgroundImage = "url(http://media2.tmlatn.com/images/blank42.gif)";
		td1.style.backgroundColor = "transparent";
		td1.style.margin = "0px";
		td1.style.padding = "0px";
		td1.style.whiteSpace = "nowrap";
		td1.style.height = overlayHeight + "px";
		var td2 = document.createElement("td");
		td2.style.backgroundImage = "url(http://media2.tmlatn.com/images/blank42.gif)";
		td2.style.backgroundColor = "transparent";
		td2.style.zIndex = '2147483647';
		td2.style.textAlign = "center";
		td2.style.verticalAlign = "bottom";
		td2.style.height = overlayHeight + "px";
		td2.style.margin = "0px";
		td2.style.padding = "0px";
		var td3 = document.createElement("td");
		td3.style.backgroundImage = "url(http://media2.tmlatn.com/images/blank42.gif)";
		td3.style.backgroundColor = "transparent";
		td3.style.margin = "0px";
		td3.style.padding = "0px";
		td3.style.whiteSpace = "nowrap";
		td3.style.verticalAlign = "top";
		td3.style.height = overlayHeight + "px";
		row.appendChild(td1);
		row.appendChild(td2);
		row.appendChild(td3);
		tbody.appendChild(row);
		holder.appendChild(tbody);

		var holder_holder = document.createElement("div");
		holder_holder.style.padding = "0px";
		holder_holder.style.margin = "0px";
		holder_holder.style.width = "100%";
		holder_holder.style.height = overlayHeight+ "px";
		holder_holder.style.position = "absolute";
		holder_holder.style.left = 0;
		holder_holder.style.top = 0;
		holder_holder.style.zIndex = '2147483645';

		var divtmp = document.createElement('div');
		divtmp.style.margin = "0px";
		divtmp.style.padding = "0px";
		divtmp.style.position = "relative";
		divtmp.style.left = "0px";
		divtmp.style.top = blankHeight+"px";
		divtmp.style.height = barHeight + "px";
		td1.appendChild(divtmp);
		divtmp.innerHTML = '';//leftHTML;

		divtmp = document.createElement('div');
		divtmp.style.margin = "0px";
		divtmp.style.padding = "0px";
		divtmp.style.position = "relative";
		divtmp.style.right = "0px";
		divtmp.style.top = blankHeight+"px";
		divtmp.style.height = barHeight + "px";
		divtmp.style.cssFloat = "right";
		td3.appendChild(divtmp);
		divtmp.innerHTML = rightHTML;

		divtmp = document.createElement('div');
		divtmp.style.margin = "0px";
		divtmp.style.marginLeft = "auto";
		divtmp.style.marginRight = "auto";
		divtmp.style.padding = "0px";
		divtmp.style.position = "relative";
		divtmp.style.bottom = "0px";
		divtmp.style.height = overlayHeight + "px";
		divtmp.style.width = adWidth + "px";
		td2.appendChild(divtmp);
		divtmp.innerHTML = adHTML;

		var gradient;
		if (useGradient)
		{
			gradient = document.createElement("img");
			gradient.src = "http://media2.tmlatn.com/images/gradient_100x100.png";
			gradient.style.position = "absolute";
			gradient.style.bottom = "0";
			gradient.style.left = "0";
			gradient.style.margin = "0px";
			gradient.style.padding = "0px";
			gradient.style.width = "100%";
			gradient.style.height = barHeight+ "px";
			gradient.width = "100%";
			gradient.height = barHeight+ "px";
			gradient.style.zIndex = '2147483646';
		}

		if (ie)
		{
			ieshim = document.createElement("iframe");
			ieshim.src = "javascript:''";
			ieshim.frameborder = "0";
			ieshim.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)';
			ieshim.style.zIndex = '2147483644';
			ieshim.style.padding = "0px";
			ieshim.style.height = overlayHeight + "px";  
			ieshim.style.margin = "0px";
			ieshim.style.marginBottom = "-" + overlayHeight + "px";  
			ieshim.style.width = "100%";
			ieshim.style.bottom = 0;
			ieshim.style.left = 0;
		}

		overlay = document.createElement("div");
		overlay.style.fontFamily = "arial";
		overlay.id = "adUnit";
		overlay.style.zIndex = '2147483645';
		overlay.style.position = "fixed";
		overlay.style.bottom = 0;
		overlay.style.left = 0;
		overlay.style.padding = "0px";
		overlay.style.height = overlayHeight + "px";  
		overlay.style.margin = "0px";
		overlay.style.marginBottom = "-" + overlayHeight + "px";  
		overlay.style.visibility = "hidden";
		overlay.style.width = "100%";

		var blankDiv = document.createElement("div");
		blankDiv.style.padding = "0px";
		blankDiv.style.margin = "0px";
		blankDiv.style.height = blankHeight + "px";
		blankDiv.style.width = "100%";
		blankDiv.style.zIndex = '2147483645';
		blankDiv.style.position = "relative";
		if (useDropshadow)
		{
			var dsimg = document.createElement("img");
			dsimg.style.margin = "0px";
			dsimg.style.padding = "0px";
			dsimg.style.width = "100%";
			dsimg.style.position = "absolute";
			dsimg.style.left = 0;
			dsimg.style.bottom = 0;
			dsimg.height = shadowHeight+"px";
			dsimg.style.height = shadowHeight+"px";
			dsimg.src = "http://media2.tmlatn.com/images/dropshadow2.png";
			blankDiv.appendChild(dsimg);
		}

		var bgDiv = document.createElement("div");
		bgDiv.style.padding = "0px";
		bgDiv.style.backgroundColor = barColor;
		bgDiv.style.margin = "0px";
		bgDiv.style.height = barHeight + "px";
		bgDiv.style.width = "100%";
		bgDiv.style.zIndex = '2147483645';
		bgDiv.style.position = "relative";

		padding = document.createElement('div');
		padding.innerHTML = "&nbsp;";
		padding.style.padding = "0px";
		padding.style.margin = "0px";
		padding.style.border = "0px";
		padding.style.height = "0px";
		padding.style.width = "1px";

		if (ie)
		{
			var origBody = [];
			for (var i = 0; i < document.body.childNodes.length; i++)
			{
				origBody[i] = document.body.childNodes[i];
			}
			ie_holder = document.createElement("div");
			ie_holder.id = "ie_holder";
			ie_holder.style.width = "100%";
			if (!ieQuirks && !ie8) ie_holder.style.padding = "15px 10px";
			ie_holder.style.height = "100%";
			ie_holder.style.overflow = "auto";
			ie_holder.style.position = "absolute";
			ie_holder.style.top = "0px";
			ie_holder.style.left = "0px";

			overlay.style.position = "absolute";
			overlay.style.overflow = "hidden";
			ieshim.style.position = "absolute";
			ieshim.style.display = "none";
			for (var i = 0; i < origBody.length; i++)
			{
				ie_holder.appendChild(origBody[i]);
			}
			var html = document.getElementsByTagName("html")[0];
			html.style.height = "100%";
			html.style.overflow = "hidden";
			html.style.width = "auto";
			document.body.style.padding = "0px";
			document.body.style.margin = "0px";
			document.body.style.height = "100%";
			document.body.style.overflow = "hidden";
			document.body.style.width = "auto";
			document.body.appendChild(ie_holder);
			ie_holder.onscroll = function()
			{
				ieshim.style.width = ieshim_width+(ieshim_width_flag?1:0)+"px";
				ieshim_width_flag = !ieshim_width_flag;
			}
			document.body.appendChild(ieshim);

			padding.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)';
			ie_holder.appendChild(padding);
		}
		else
		{
			padding.style.opacity = "0.0";
			document.body.appendChild(padding);
		}

		overlay.appendChild(blankDiv);
		overlay.appendChild(bgDiv);
		if (useGradient)
			holder_holder.appendChild(gradient);
		holder_holder.appendChild(holder);
		overlay.appendChild(holder_holder);
		document.body.appendChild(overlay);
		if (document.getElementById('pa_anchor_close') != null) document.getElementById('pa_anchor_close').style.color = textColor;
		if (document.getElementById('pa_anchor_close_x') != null) document.getElementById('pa_anchor_close_x').style.borderColor = textColor;
		if (document.getElementById('pa_anchor_by') != null) document.getElementById('pa_anchor_by').style.color = textColor;
		if (document.getElementById('pa_anchor_wsName') != null) document.getElementById('pa_anchor_wsName').style.color = textColor;
		if (document.getElementById('pa_anchor_adHere') != null) document.getElementById('pa_anchor_adHere').style.color = textColor;
		if (skipAh && document.getElementById('pa_anchor_adHere') != null) document.getElementById('pa_anchor_adHere').style.visibility = 'hidden';
		if (document.getElementById('pa_anchor_close') != null) document.getElementById('pa_anchor_close').onclick = pa_anchor_doClose;
		if (document.getElementById('pa_anchor_adName') != null) document.getElementById('pa_anchor_adName').innerHTML = adName;
		if (document.getElementById('pa_anchor_wsName') != null) document.getElementById('pa_anchor_wsName').innerHTML = websiteName;
		if (document.getElementById('pa_anchor_adHere') != null) document.getElementById('pa_anchor_adHere').onclick = function()
		{
			window.open("http://anchorad.premiumaccess.com/signup/");
			return false;
		};
		if (ie6)
		{
			pa_anchor_ss.limitTo("adUnit");
			pa_anchor_ss.run();
		}
		if (document.getElementById('pa_anchor_video_player') != null)
		{
			if (typeof(aObj) == "undefined")
				aObj = new Object();
			aObj[rUnique+'_video'] = new PaJSONscriptRequest("http://tags.adcde.com/images/tags/flowplayer-3.1.4.min.js?", true, rUnique+'_video');
			aObj[rUnique+'_video'].buildScriptTag();
			aObj[rUnique+'_video'].addScriptTag();
		}
	}

	function pa_anchor_callbackfunc(data)
	{
		try
		{
			if (data['pubOverride'])
			{
				pubOverride = data['pubOverride'];
			}
			if (data['adHeight'])
			{
				adHeight = data['adHeight'];
				if (pubOverride)
					maxOverlayHeight = adHeight;
			}
			if (data['adWidth'])
			{
				adWidth = data['adWidth'];
			}
			if ((pubOverride || !barHeightPub) && data['barHeight'])
			{
				barHeight = data['barHeight'];
			}
			if ((pubOverride || !textColorPub) && data['textColor'])
			{
				textColor = '#'+data['textColor'];
			}
			if ((pubOverride || !barColorPub) && data['barColor'])
			{
				barColor = '#'+data['barColor'];
			}
			if ((pubOverride || !useGradientPub) && data['gradient'])
			{
				useGradient = (data['gradient']!="0");
			}
			if ((pubOverride || !useDropshadowPub) && data['shadow'])
			{
				useDropshadow = (data['shadow']!="0");
			}
			if (data['marketing_exclusion'])
			{
				skipAh = (typeof(data['marketing_exclusion'][domainId]) != 'undefined' && data['marketing_exclusion'][domainId] != null && data['marketing_exclusion'][domainId] == '1');
			}
			if (data['adName'])
			{
				adName = decodeURIComponent(data['adName']);
			}
			if (data['videoAutoStart'])
			{
				videoAutoStart = true;
			}
			if (data['videoLoop'])
			{
				videoLoop = true;
			}
			if (data['html'] && data['html'].length > 0 && data['redirectUrl'] && data['redirectUrl'].length > 0)
			{
				var cachebuster = (new Date()).getTime();
				redirectUrl = data['redirectUrl'];
				redirectUrl = redirectUrl.replace(/%7BCACHEBUSTER%7D/g, cachebuster);
				redirectUrl = redirectUrl.replace(/\${PUBLISHERID}/g, publisherId);
				redirectUrl = redirectUrl.replace(/\${DOMAINID}/g, domainId);
				redirectUrl = redirectUrl.replace(/\${INTERVAL}/g, displayCount);
				redirectUrl = redirectUrl.replace(/\${RID}/g, rUnique);
				var redirectBase = "";
				if (data['redirectBase'])
					redirectBase = data['redirectBase'];
				redirectBase = redirectBase.replace(/%7BCACHEBUSTER%7D/g, cachebuster);
				redirectBase = redirectBase.replace(/\${PUBLISHERID}/g, publisherId);
				redirectBase = redirectBase.replace(/\${DOMAINID}/g, domainId);
				redirectBase = redirectBase.replace(/\${INTERVAL}/g, displayCount);
				redirectBase = redirectBase.replace(/\${RID}/g, rUnique);
				adHTML = pa_anchor_base64Decode(data['html']);
				adHTML = adHTML.replace(/{CACHEBUSTER}/g, cachebuster);
				adHTML = adHTML.replace(/\${CLICKURL}/g, redirectUrl);
				adHTML = adHTML.replace(/\${CLICKURLENC}/g, encodeURIComponent(redirectUrl));
				adHTML = adHTML.replace(/\${CLICKURLBASE}/g, redirectBase);
				adHTML = adHTML.replace(/\${CLICKURLBASEENC}/g, encodeURIComponent(redirectBase));
			}
			else
			{
				pa_anchor_trackEvent(-101, 'd='+domainId+'&p='+publisherId+'&rId='+rUnique);
				return;
			}
			if (pa_anchor_cookie_flag)
				pa_anchor_writeCookie('aon_overlay', displayCount+1);
			pa_anchor_buildOverlay();
			setTimeout(pa_anchor_startMove, initialDelay);
		}
		catch (e)
		{
			pa_anchor_trackEvent(-4, 'url='+encodeURIComponent(document.location.href)+'&rId='+rUnique+'&msg='+encodeURIComponent(e.toString()));
		}
	}

	function pa_anchor_getYCoordinate(obj)
	{
		var curtop = 0;
		curtop += obj.offsetTop;
		while (obj.offsetParent)
		{
			obj = obj.offsetParent;
			curtop -= (obj.scrollTop?obj.scrollTop:0);
			curtop += obj.offsetTop;
		}
		return curtop;
	}

	function pa_anchor_getViewportHeight()
	{
		var viewportheight = 0;
	 
		if (typeof window.innerHeight != 'undefined')
		{
			viewportheight = window.innerHeight;
		}
		else if (document.body != null && typeof document.body.clientHeight != 'undefined' && document.body.clientHeight != 0)
		{
			viewportheight = document.body.clientHeight;
		}
		else if (document.documentElement != null && typeof document.documentElement.clientHeight != 'undefined' && document.documentElement.clientHeight != 0)
		{
			viewportheight = document.documentElement.clientHeight;
		}
		else if (document.getElementsByTagName('body') != null && document.getElementsByTagName('body')[0] != null && typeof document.getElementsByTagName('body')[0].clientHeight != 'undefined' && document.getElementsByTagName('body')[0].clientHeight!= 0)
		{
			viewportheight = document.getElementsByTagName('body')[0].clientHeight;
		}
		return viewportheight;
	}

	function pa_anchor_checkSelects()
	{
		try
		{
			var viewportHeight = pa_anchor_getViewportHeight();
			var currSelects = document.getElementsByTagName("select");
			var threshold = viewportHeight - ((percent / 100 * overlayHeight) + (widthStatus>0?16:0));
			for (var i=0; i<currSelects.length; i++)
			{
				if ((""+currSelects[i].id).length == 0)
					currSelects[i].id = "select_"+(++select_counter);
				if (selectDisplays[currSelects[i].id] == null)
				{
					selectDisplays[currSelects[i].id] = ''+currSelects[i].style.visibility;
				}
				var height = pa_anchor_getYCoordinate(currSelects[i]) + parseInt(currSelects[i].clientHeight);
				if (height > threshold)
				{
					currSelects[i].style.visibility = "hidden";
				}
				else
				{
					currSelects[i].style.visibility = selectDisplays[currSelects[i].id];
				}
			}
		}
		catch (e)
		{
			pa_anchor_trackEvent(-7, 'url='+encodeURIComponent(document.location.href)+'&rId='+rUnique+'&msg='+encodeURIComponent(e.toString()));
		}
	}
		
	function pa_anchor_resetSelects()
	{
		var currSelects = document.getElementsByTagName("select");
		for (var i=0; i<currSelects.length; i++)
		{
			if (selectDisplays[currSelects[i]] != null)
			{
				currSelects[i].style.display = selectDisplays[currSelects[i]];
				currSelects[i].parentNode.parentNode.replaceChild(currSelects[i], currSelects[i].parentNode);
			}
		}
	}

	function pa_anchor_doPaddingCheck()
	{
		try
		{
			var widthStatusChanged = false;
			var oldHeightStatus = heightStatus;
		
			if (ie_holder.clientHeight < ie_holder.scrollHeight)
			{
				if (heightStatus < -1)
				{
					heightStatus = -1;
				}
				else if (heightStatus != 2)
				{
					heightStatus = 2;
				}
			}
			else
			{
				if (heightStatus > 1)
				{
					heightStatus = 1;
				}
				else if (heightStatus != -2)
				{
					heightStatus = -2;
				}
			}
		
			if (heightStatus > 0)
			{
				overlay.style.width = (document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth)-17;
				ieshim_width = (document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth)-17;
			}
			else
			{
				overlay.style.width = (document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth);
				ieshim_width = (document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth);
			}

			if (ie_holder.clientWidth < ie_holder.scrollWidth)
			{
				if (widthStatus < -1)
				{
					widthStatus = -1;
				}
				else if (widthStatus != 2)
				{
					widthStatusChanged = true;
					widthStatus = 2;
					if (overlayShowing)
					{
						overlay.style.marginBottom = "15px";
						ieshim.style.marginBottom = "15px";
					}
				}
			}
			else
			{
				if (widthStatus > 1)
				{
					widthStatus = 1;
				}
				else if (widthStatus != -2)
				{
					widthStatusChanged = true;
					widthStatus = -2;
					if (overlayShowing)
					{
						overlay.style.marginBottom = "-1px";
						ieshim.style.marginBottom = "-1px";
					}
				}
			}
		
			if (widthStatusChanged && heightStatus*widthStatus < 0)
			{
				heightStatus = oldHeightStatus;
				if (ie_holder.clientHeight < ie_holder.scrollHeight)
				{
					if (heightStatus < -1)
					{
						heightStatus = -1;
					}
					else if (heightStatus != 2)
					{
						heightStatus = 2;
					}
				}
				else
				{
					if (heightStatus > 1)
					{
						heightStatus = 1;
					}
					else if (heightStatus != -2)
					{
						heightStatus = -2;
					}
				}
			}
		
			if (heightStatus > 0)
			{
				overlay.style.width = (document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth)-17;
				ieshim_width = (document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth)-17;
			}
			else
			{
				overlay.style.width = (document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth);
				ieshim_width = (document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth);
			}
		}
		catch (e)
		{
			pa_anchor_trackEvent(-8, 'url='+encodeURIComponent(document.location.href)+'&rId='+rUnique+'&msg='+encodeURIComponent(e.toString()));
		}
	}


	var overlay;
	var videoLoop = false;
	var videoAutoStart = false;
	var dart_pixel;
	var ieshim;
	var ieshim_width;
	var ieshim_width_flag = false;
	var selectDisplays = [];
	var overlayShowing = false;
	var ie_holder;
	var padding;
	var oldMargin = "";
	var ie = false;
	var ie6 = false;
	var ie8 = false;
	var ieQuirks = false;
	var moveHandle;
	var paddingHandle;
	var selectHandle;
	var widthStatus = 0;
	var heightStatus = 0;
	var shadowHeight = 8;
	var percent;
	var select_counter = 0;
	var overlayHeight = 88;
	var adHeight = 80;
	var adWidth = 800;
	var pubOverride = false;
	var adName = '';
	var redirectUrl = '';
	var skipAh = false;
	var adHTML = '';
	var rightHTML = "<ul style='text-align: left; padding: 10px 5px 10px 5px; margin: 0px; list-style-type: none;'><li style='font-size: x-small;'><a id='pa_anchor_adHere' href='#' style='font-weight: bold;'>Advertise Here</a></li><li><a id='pa_anchor_close' href='#' style='text-decoration: none; font-size: x-small;' title='Click to close'><span id='pa_anchor_close_x' style='height: 5px; padding: 0px; margin: 0px; font-size: xx-small; border-width: 1px; border-style: solid;'>X</span> Close</a></li></ul>";
	var leftHTML = "<ul style='padding: 10px 5px 10px 5px; margin: 0px; list-style-type: none;'><li id='pa_anchor_wsName' style='font-size: x-large;'></li><li id='pa_anchor_by' style='font-size: x-small;'>Brought to you by: <span id='pa_anchor_adName'></span></li></ul>";

	var pa_anchor_bypass = false;
	if (typeof(pa_anchor_adData) != "undefined" && pa_anchor_adData != null)
	{
		pa_anchor_bypass = true;
	}

	var useDropshadow = true;
	var useDropshadowPub = false;
	if (typeof(pa_anchor_shadow) != "undefined" && pa_anchor_shadow != null && pa_anchor_shadow.length > 0)
	{
		try
		{
			useDropshadow = (pa_anchor_shadow!="0"&&pa_anchor_shadow!="false"&&pa_anchor_shadow!="off"&&pa_anchor_shadow!="no");
			useDropshadowPub = true;
		}
		catch (err) { }
	}

	var useGradient = false;
	var useGradientPub = false;
	if (typeof(pa_anchor_gradient) != "undefined" && pa_anchor_gradient != null && pa_anchor_gradient.length > 0)
	{
		try
		{
			useGradient = (pa_anchor_gradient!="0"&&pa_anchor_gradient!="false"&&pa_anchor_gradient!="off"&&pa_anchor_gradient!="no");
			useGradientPub = true;
		}
		catch (err) { }
	}

	var bgHint = "none";
	if (typeof(pa_anchor_bgHint) != "undefined" && pa_anchor_bgHint != null)
	{
		try
		{
			bgHint = pa_anchor_bgHint;
		}
		catch (err) { }
	}

	var pa_anchor_dart_prefix = "";
	if (typeof(pa_anchor_dart_tracker) != "undefined" && pa_anchor_dart_tracker != null)
	{
		try
		{
			pa_anchor_dart_prefix = decodeURIComponent(pa_anchor_dart_tracker);
		}
		catch (err) { }
	}

	var websiteName = "This website";
	if (typeof(pa_anchor_siteName) != "undefined" && pa_anchor_siteName != null)
	{
		try
		{
			websiteName = decodeURIComponent(pa_anchor_siteName);
		}
		catch (err) { }
	}

	var maxOverlayHeight = 88;
	if (typeof(pa_anchor_height) != "undefined" && pa_anchor_height!= null)
	{
		try
		{
			maxOverlayHeight = parseInt(pa_anchor_height);
		}
		catch (err) { }
	}

	var initialDelay = 1500;
	if (typeof(pa_anchor_delay) != "undefined" && pa_anchor_delay!= null)
	{
		try
		{
			initialDelay = pa_anchor_delay*1000;
		}
		catch (err) { }
	}

	var viewTime = 0;
	if (typeof(pa_anchor_viewTime) != "undefined" && pa_anchor_viewTime != null)
	{
		try
		{
			viewTime = pa_anchor_viewTime*1000;
		}
		catch (err) { }
	}

	var textColor = "#FFFFFF";
	var textColorPub = false;
	if (typeof(pa_anchor_textColor) != "undefined" && pa_anchor_textColor!= null && pa_anchor_textColor.length > 0)
	{
		try
		{
			textColor = pa_anchor_textColor;
			textColorPub = true;
		}
		catch (err) { }
	}

	var barColor = "#8888FF";
	var barColorPub = false;
	if (typeof(pa_anchor_barColor) != "undefined" && pa_anchor_barColor!= null && pa_anchor_barColor.length > 0)
	{
		try
		{
			barColor = pa_anchor_barColor;
			barColorPub = true;
		}
		catch (err) { }
	}

	var barHeight = "60";
	var barHeightPub = false;
	if (typeof(pa_anchor_barHeight) != "undefined" && pa_anchor_barHeight != null && pa_anchor_barHeight.length > 0)
	{
		try
		{
			barHeight= pa_anchor_barHeight;
			barHeightPub = true;
		}
		catch (err) { }
	}

	var speed = 5;
	if (typeof(pa_anchor_speed) != "undefined" && pa_anchor_speed!= null)
	{
		try
		{
			speed = pa_anchor_speed;
		}
		catch (err) { }
	}

	ie = (navigator.appName == "Microsoft Internet Explorer");
	if (ie)
	{
		var ieVersChecker = document.createElement("span");
		ieVersChecker.innerHTML = "<span style='zoom: 1; padding: 1px; border: 0px; margin:1px; width: 5px; height: 5px; overflow: hidden;'><span id='modechecker' style='zoom: 1; overflow: hidden; margin: 0px; padding: 0px; width: 100%; height: 100%; font-size: x-small;'>&nbsp;</span></span></span><!--[if lt IE 7]><span id='ie6yes'>&nbsp;</span><![endif]--><!--[if gt IE 7]><span id='ie8yes'>&nbsp;</span><![endif]-->";
		document.body.appendChild(ieVersChecker);
		ie6 = (document.all['ie6yes'] != null);
		ie8 = (document.all['ie8yes'] != null);
		ieQuirks = (document.all['modechecker'].clientHeight == 5)
		document.body.removeChild(ieVersChecker);
	}
	if (pa_anchor_bypass)
	{
		pa_anchor_callbackfunc(pa_anchor_adData);
	}
	else
	{
		var pa_anchor_url = 'http://dist.dashboardad.net/anchor.jsp?publisherId='+publisherId+'&domainId='+domainId+'&maxHeight='+maxOverlayHeight+'&interval='+displayCount+'&rId='+rUnique+'&bgHint='+bgHint;
		if (typeof(aObj) == "undefined")
			aObj = new Object();
		aObj[rUnique] = new PaJSONscriptRequest(pa_anchor_url, false, rUnique);
		aObj[rUnique].buildScriptTag();
		aObj[rUnique].addScriptTag();
	}
}
catch (e)
{
	pa_anchor_trackEvent(-9, 'url='+encodeURIComponent(document.location.href)+'&rId='+rUnique+'&msg='+encodeURIComponent(e.toString()));
}

