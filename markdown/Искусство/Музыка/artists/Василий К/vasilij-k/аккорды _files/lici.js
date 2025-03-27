var LiCi = new Object();

/* Browser
----------------------------------------------- */
	LiCi.userAgent = navigator.userAgent.toLowerCase();
	LiCi.getBrowser = {
		version: (LiCi.userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1],
		safari: /webkit/.test(LiCi.userAgent),
		opera: /opera/.test(LiCi.userAgent),
		msie: (/msie/.test(LiCi.userAgent)) && (!/opera/.test( LiCi.userAgent )),
		mozilla: (/mozilla/.test(LiCi.userAgent)) && (!/(compatible|webkit)/.test(LiCi.userAgent)),
		chrome: (navigator.userAgent.toLowerCase().indexOf('chrome') > -1)
	};
	
/* DOM  methods
----------------------------------------------- */
	LiCi.$ = function (id) {
		return document.getElementById(id);
	};
	LiCi.$_ = function (classname,node) {
			if(!node) node = document.getElementsByTagName("body")[0];
		    var a = [];
		    var re = new RegExp('\\b' + classname + '\\b');
		    var els = node.getElementsByTagName("*");
		    for(var i=0,j=els.length; i<j; i++)
		        if(re.test(els[i].className))a.push(els[i]);
		    return a;		
	};
	LiCi.$Get = function (elem,name) {
		if (elem.style[name])
				return elem.style[name];
			else if (elem.currentStyle)
				return elem.currentStyle
			else if (document.defaultView && document.defaultView.getComputedStyle) {
				name = name.replace(/([A-Z])/g,"-$1");
				name = name.toLowerCase();			
				var s = document.defaultView.getComputedStyle(elem,"");
				return s && s.getPropertyValue(name);
			} else {
				return null;
			}
	};
	LiCi.$Set = function (e,prop,value) {
		e.style[prop] = value;
	};
	
/* Events
----------------------------------------------- */
	/* -----------[ Listeners ]----------- */	
		LiCi.eventAdd = function (obj, type, fn) {
			if ( obj.attachEvent ) {
				obj[type+fn] = function(){fn.call(obj,window.event);}
				obj.attachEvent( 'on'+type, obj[type+fn] );
			} else
				obj.addEventListener( type, fn, false );		
		};
		LiCi.eventDel = function (obj, type, fn) {
			if ( obj.detachEvent ) {
				obj.detachEvent( 'on'+type, obj[type+fn] );
				obj[type+fn] = null;
			} else
				obj.removeEventListener( type, fn, false );
		};		
		LiCi.domReady = function (f) {
			if ( LiCi.domReady.done ) return f();
			if ( LiCi.domReady.timer ) {
				LiCi.domReady.ready.push( f );
			} else {
				LiCi.eventAdd (window, "load", function () {
					LiCi.isDOMReady();
				});							
				LiCi.domReady.ready = [ f ];
				LiCi.domReady.timer = setInterval( LiCi.isDOMReady, 13 );
			}			
		};
		LiCi.isDOMReady = function () {
			if ( LiCi.domReady.done ) return false;
			if ( document && document.getElementsByTagName && document.getElementById && document.body ) {
			   clearInterval( LiCi.domReady.timer );
			   LiCi.domReady.timer = null;
			   for ( var i = 0; i < LiCi.domReady.ready.length; i++ )
			       LiCi.domReady.ready[i]();
			   LiCi.domReady.ready = null;
			   LiCi.domReady.done = true;
			}
		};
			
/* Elements properties
----------------------------------------------- */
	/* -----------[ Elements custom properties ]----------- */
		LiCi.getOption = function (e) {
			return e.onclick instanceof Function ? e.onclick() : {};
		};
	/* -----------[ Elements native properties ]----------- */
		/* -[ Size ]- */
			LiCi.pageHeight = function () {
				return document.body.scrollHeight;
			};
			LiCi.pageWidth = function () {
				return document.body.scrollWidth;
			};
			LiCi.windowHeight = function () {
				var doc = document.documentElement;
				return self.innerHeight || (doc && doc.clientHeight) || document.body.clientHeight;
			};
			LiCi.windowWidth = function () {
				var doc = document.documentElement;
				return self.innerWidth || (doc && doc.clientWidth) || document.body.clientWidth;
			};
			LiCi.elemHeight = function (e) {
				if ( this.$Get(e, "display") != "none" )
					return e.offsetHeight || getHeight (e);
				var old = this.resetCSS ( e, {
					display : "",
					visibility : "hidden",
					position : "absolute"					
				});
				var h = e.clientHeight || getHeight (e);
				this.restoreCSS (e,old);
				return h;				
			};
			LiCi.elemWidth = function (e) {
				if ( this.$Get(e, "display") != "none" )
					return e.offsetWidth || getWidth (e);
				var old = this.resetCSS ( e, {
					display : "",
					visibility : "hidden",
					position : "absolute"					
				});
				var w = e.clientWidth || getWidth (e);
				this.restoreCSS (e,old);
				return w;				
			};
			LiCi,resetCSS = function (e,prop) {
				var old = {};
				for (var i in prop) {
					old[i] = e.style[i];
					e.style[i] = prop[i];
				}
				return old;				
			};
			LiCi.restoreCSS = function (e,prop) {
				for (var i in prop) {
					e.style[i] = prop[i];
				}				
			};
		/* -[ Offset ]- */	
			LiCi.bodyOffset = function () {
				return document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
			};
			LiCi.elemTop = function (e) {
				return e.offsetParent ?
					e.offsetTop + this.elemTop (e.offsetParent) :
						e.offsetTop;				
			};
			LiCi.elemLeft = function (e) {
				return e.offsetParent ?
					e.offsetLeft + this.elemLeft (e.offsetParent) :
						e.offsetLeft;				
			};
			
/* Effects
----------------------------------------------- */
	/* -----------[ Opacity ]----------- */
		LiCi.setOpacity = function (e,level) {
			if (e.filters) e.style.filter = 'alpha(opacity=' + level*100 + ')';
			else e.style.opacity = level;			
		};
		
/* Cookies
----------------------------------------------- */
	/* -----------[ Set ]----------- */
		LiCi.setCookie = function (name,value) {
			var valueEscaped = escape(value); 
			var expiresDate = new Date(); 
			expiresDate.setTime(expiresDate.getTime() + 365 * 24 * 60 * 60 * 1000);
			var expires = expiresDate.toGMTString(); 
			var newCookie = name + "=" + valueEscaped + "; path=/; expires=" + expires; 
			if (valueEscaped.length <= 4000) document.cookie = newCookie + ";";			
		};
	/* -----------[ Get ]----------- */	
		LiCi.getCookie = function (name) {
			var prefix = name + "="; 
			var cookieStartIndex = document.cookie.indexOf(prefix); 
			if (cookieStartIndex == -1) return null; 
			var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length); 
			if (cookieEndIndex == -1) cookieEndIndex = document.cookie.length; 
			return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
		};