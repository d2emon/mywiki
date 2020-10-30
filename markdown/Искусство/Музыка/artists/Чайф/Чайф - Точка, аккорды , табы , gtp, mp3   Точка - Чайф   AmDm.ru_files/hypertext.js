if (typeof Begun !== "object") {
	var Begun = {};
}
if (typeof Begun.Error !== "object") {
	Begun.Error = {};
}

if (typeof Begun.Error.send === "undefined") {
	Begun.Error.send = function(errorMessage, errorUrl, errorLine, loggerAddress) {
		if (typeof Begun.Error.sent[errorMessage] !== "undefined") {
			return;
		}
		var defaultErrorLogger = "http://autocontext.begun.ru/log_errors?";
		var address = loggerAddress || window.begun_error_url || defaultErrorLogger;
		var padId = window.begun_auto_pad;
		var img = (new Image()).src = address + "e_msg=" + encodeURIComponent(errorMessage) + "&e_url=" +
			 encodeURI(errorUrl) + "&e_line=" + errorLine +
			"&pad_id=" + padId + "&location=" + encodeURI(document.location);
		Begun.Error.sent[errorMessage] = true;
	};
	Begun.Error.sent = {};
}

	var hyperBanners    = new Array();
	var hyperWords      = new Array();
	var begunProceedFeeds;

	function begunUnescapeHTML(txt) {
		var div = document.createElement('DIV');
		div.innerHTML = txt.replace(/<\/?[^>]+>/gi, '');
		return div.childNodes[0] ? div.childNodes[0].nodeValue : '';
	}

	(function() {
		if (window.stopwords != null) {
			var stopwords = '&stopwords=' + encodeURIComponent(window.stopwords);
		}  else {
			var stopwords = '';
		}

		if (typeof window.begun_urls != 'undefined' && window.begun_urls && window.begun_urls.daemon) {
			var url = window.begun_urls.daemon;
		} else {
			var url = 'http://autocontext.begun.ru/hyper.php?';
		}

		if (typeof window.begun_utf8 != 'undefined') {
			var hyper_utf8 = '&begun_utf8=1';
		} else {
			var hyper_utf8 = '';
		}

		if (typeof window.begun_hyper_limit !== undefined && !isNaN(window.begun_hyper_limit)) {
			var adLimit = '&n=' + window.begun_hyper_limit;
		} else {
			var adLimit = '';
		}
		var isJson = "&json=1";

		if (typeof window.begunhyper_auto_pad !== undefined && !isNaN(window.begunhyper_auto_pad)) {
			document.write( '<sc' + 'ript type="text/javascript" src="' + url + 'pad_id=' + window.begunhyper_auto_pad + adLimit + stopwords + '&ut_screen_width=' + screen.width + '&ut_screen_height=' + screen.height + isJson + '&jscall=loadHyperFeedDone&real_refer=' + encodeURIComponent(document.location) + '&ref=' + encodeURIComponent(document.referrer) + '"></s' + 'cript>' );
		} else {
			Begun.Error.send("begunhyper_auto_pad is missing", document.location, -1);
		}
	})();

    function hyperRun() {
		if (window.begunProceedFeeds !== undefined && !window.begunBlockIsNotLoaded){
			return;
		}
		window.begunProceedFeeds = 0;

		if (typeof window.begun_hyper_limit !== "undefined") {
			if (typeof window.begun_hyper_max_total === "undefined") {
				window.begun_hyper_max_total = begun_hyper_limit;
			}
			if (typeof window.begun_hyper_max_singleword === "undefined") {
				window.begun_hyper_max_singleword = 1;
			}
		} else {
			if (typeof window.begun_hyper_max_total === "undefined") {
				window.begun_hyper_max_total = 5;
			}
		}

        if ( new Array().push ) {
            var hypercontext = document.getElementById( 'hypercontext' );
            if ( hypercontext ) {
                window.BEGUN = new BegunHyper( hypercontext, hyperBanners, hyperWords );
                if ( window.begunhyper_auto_colors != null ) {
                    var colors = window.begunhyper_auto_colors;
                    if ( colors[ 0 ] != null ) BEGUN.design.banner.linkColor   = colors[ 0 ];
                    if ( colors[ 1 ] != null ) BEGUN.design.banner.textColor   = colors[ 1 ];
                    if ( colors[ 2 ] != null ) BEGUN.design.banner.domainColor = colors[ 2 ];
                    if ( colors[ 3 ] != null ) BEGUN.design.banner.bgColor     = colors[ 3 ];
                }
                //if ( window.begun_hyper_limit     == null) window.begun_hyper_limit			= hyperBanners.length;
                if ( window.begunhyper_auto_width != null ) BEGUN.design.banner.width = begunhyper_auto_width;
                if ( window.begun_hyper_a_color   != null ) BEGUN.design.phrase.style.color = begun_hyper_a_color;
                if ( window.begun_underline_color != null ) BEGUN.design.phrase.style.borderBottomColor = begun_underline_color;
                if ( window.begun_hyper_a_bold    != null ) {
                    if ( window.begun_hyper_a_bold != 'normal' ) {
                        BEGUN.design.phrase.style.fontWeight = 'bold';
                    }
                }
                BEGUN.start();
            } else {
				if (typeof hyperRun.initialize === "undefined") {
					hyperRun.initialize = function() {
						if (arguments.callee.done) {
							return;
						}
						arguments.callee.done = true;
						hyperRun();
					};
				}
				if (hyperRun.initialize.done) {
					Begun.Error.send("Block with id=\"hypercontext\" absents", document.location, -1);
					return;
				}

				window.begunBlockIsNotLoaded = true;
				if (document.addEventListener) {
					document.addEventListener("DOMContentLoaded", hyperRun.initialize, false);
				}
				(function() {
					/*@cc_on
					if (document.body) {
						try {
							document.createElement("div").doScroll("left");
							return hyperRun.initialize();
						} catch (e) {}
					}
					/*@if (false) @*/
					if (/loaded|complete/.test(document.readyState)) {
						return hyperRun.initialize();
					}
					/*@end @*/
					if (!hyperRun.initialize.done) {
						setTimeout(arguments.callee, 50);
					}
				})();
				var _previousOnload = window.onload;
				window.onload = function() {
					if (typeof _previousOnload === "function") {
						_previousOnload();
					}
					hyperRun.initialize();
				};
			}
			if (typeof BEGUN === "object") {
				BEGUN.addCss();
			}
        }
    }
	if (typeof loadHyperFeedDone === "undefined") {
		loadHyperFeedDone = function() {
			if (!begunAds || !begunAds.banners) {
				return;
			}
			if (window.begunAds.debug) {
				if (typeof loadHyperFeedDone.unhandledDebugs === "undefined") {
					loadHyperFeedDone.unhandledDebugs = [];
				}
				var debugCopy = {};
				for (var debugEntity in window.begunAds.debug) {
					if (window.begunAds.debug.hasOwnProperty(debugEntity)) {
						debugCopy[debugEntity] = window.begunAds.debug[debugEntity];
					}
				}
				delete window.begunAds.debug;
				loadHyperFeedDone.unhandledDebugs.push(debugCopy);
				begunToolbarLoaded();
			}

			var tnsCounterFlag = (function() {
				return window.begunAds && window.begunAds.params && window.begunAds.params.tns_counter;
			})();
			var isTnsSet = (function() {
				try {
					return top.begun_tns_counter_included;
				} catch (e) {
					return window.begun_tns_counter_included;
				}
			})();
			if (!isTnsSet && tnsCounterFlag) {
				(new Image()).src = 'http://www.tns-counter.ru/V13a***R>' + document.referrer.replace(/\*/g,'%2a') + '*bg_ru/ru/CP1251/tmsec=' + tnsCounterFlag + '/';
				try {
					top.begun_tns_counter_included = true;
				} catch (e) {
					window.begun_tns_counter_included = true;
				}
			}

			window.hyperBanners = [];
			window.hyperWords = [];
			for (var currentNum = 0; currentNum < begunAds.banners.hypercontext.length; currentNum++) {
				window.hyperWords.push(begunUnescapeHTML(begunAds.banners.hypercontext[currentNum].words));
				window.hyperBanners.push([begunAds.banners.hypercontext[currentNum].title,
					begunAds.banners.hypercontext[currentNum].descr, begunAds.banners.hypercontext[currentNum].url]);
			}
			hyperRun();
		};
	}

    function BegunHyper( container, feeds, words )
    {
        this.container  = container;
        this.hyperText  = new BEGUN_HyperText( container );
        this.hideTimer  = false;
        this.showTimer  = false;
        this.parameters = {
            'showTimeout' : 100,
            'hideTimeout' : 500,
            'openNewWin'  : false
        }
        this.design = {
            'banner'    : {
                'width'         : 350,
                'bgColor'       : '#FFFFE0',
                'headColor'     : '#CCCCCC',
                'linkColor'     : '#00CC00',
                'textColor'     : '#000000',
                'domainColor'   : '#CCCCCC'
            },
            'phrase'    : {
                'style' : {
                    'fontWeight'        : 'normal',
                    'color'             : '#0000FF',
                    'textDecoration'    : 'none',
                    'borderBottomWidth' : '1px',
                    'borderBottomStyle' : 'solid',
                    'borderBottomColor' : '#0000FF',
                    'cursor'            : 'pointer'
                }
            }
        }
        this.start = function()
        {
            var feedsLength = feeds.length;
            for ( var i = 0; i < feedsLength; i++ ) {
                /*if ( i >= this.parameters.phraseLimit ) {
                    break;
                }*/
                if ( typeof( feeds[ i ][ 3 ] ) == 'undefined' || ! feeds[ i ][ 3 ] ) {
                    feeds[ i ][ 3 ] = '';
                }
                var banner = new BEGUN_Banner(
                    feeds[ i ][ 0 ],
                    feeds[ i ][ 1 ],
                    feeds[ i ][ 2 ],
                    feeds[ i ][ 3 ],
                    words[ i ].split( '|' )
                );
                banner.id = this.hyperText.banners.length;
                this.hyperText.banners[ banner.id ] = banner;
            }
            this.hyperText.start();
            this.highlight();
            var bannersLength = this.hyperText.banners.length;
            for ( var i = 0; i < bannersLength; i++ ) {
                this.container.appendChild( this.createHTMLBanner( this.hyperText.banners[ i ] ) );
				if (this.hyperText.banners[i] && this.hyperText.banners[i].element && this.hyperText.banners[i].element.node) {
					this.hyperText.banners[i].element.node.onmouseover = function() {
						BEGUN.Event_BannerOnMouseOver();
					};
					this.hyperText.banners[i].element.node.onmouseout  = (function(num) {
						return function() {
							BEGUN.Event_BannerOnMouseOut(num);
						};
					})(i);
				}
            }
            var phrasesLength = this.hyperText.phrases.length;
            for ( var i = 0; i < phrasesLength; i++ ) {
				if (this.hyperText.phrases[i] && this.hyperText.phrases[i].element && this.hyperText.phrases[i].element.node) {
					this.hyperText.phrases[i].element.node.onmouseover = (function(num) {
						return function() {
							BEGUN.Event_PhraseOnMouseOver(num);
						};
					})(i);
					this.hyperText.phrases[i].element.node.onmouseout = (function(num) {
						return function() {
							BEGUN.Event_PhraseOnMouseOut(num);
						};
					})(i);
				}
            }
        }
        this.Event_PhraseOnMouseOver = function( phraseIndex )
        {
            var phrase = BEGUN.hyperText.phrases[ phraseIndex ];
            phrase.element.node.style.borderBottomWidth = '2px';
            if ( BEGUN.hideTimer ) {
                clearTimeout( BEGUN.hideTimer );
                BEGUN.hideTimer = false;
            }
            BEGUN.hideAllBanners();
            BEGUN.showTimer = setTimeout(
                'BEGUN.showBanner( ' + phraseIndex + ' )',
                BEGUN.parameters.showTimeout
            );
        }
        this.Event_PhraseOnMouseOut = function( phraseIndex )
        {
            var phrase = BEGUN.hyperText.phrases[ phraseIndex ];
            var banner = phrase.banner;
            phrase.element.node.style.borderBottomWidth = '1px';
            BEGUN.hideTimer = setTimeout(
                'BEGUN.hideBanner( ' + banner.id + ' )',
                BEGUN.parameters.hideTimeout
            );
        }
        this.Event_BannerOnMouseOver = function()
        {
            if ( BEGUN.hideTimer ) {
                clearTimeout( BEGUN.hideTimer );
                BEGUN.hideTimer = false;
            }
        }
        this.Event_BannerOnMouseOut = function( bannerIndex )
        {
            BEGUN.hideTimer = setTimeout(
                'BEGUN.hideBanner( ' + bannerIndex + ' )',
                BEGUN.parameters.hideTimeout
            );
        }
        this.showBanner = function( phraseIndex )
        {
            var left, top;
            var phrase      = BEGUN.hyperText.phrases[ phraseIndex ];
            var banner      = phrase.banner;
            var winW        = phrase.element.windowWidth();
            var winH        = phrase.element.windowHeight();
            var winS        = phrase.element.windowScrollTop();
            var phraseX     = phrase.element.left();
            var phraseY     = phrase.element.top();
            var phraseW     = phrase.element.width();
            var phraseH     = phrase.element.height();
            var bannerW     = banner.element.width();
            var bannerH     = banner.element.height();
            if ( 2 * phraseX > winW - phraseW ) {
                left = phraseX -bannerW - 3;
            } else{
                left = phraseX + phraseW + 3;
            }
            if ( 2 * phraseY > winH - phraseH + 2 * winS ) {
                top = phraseY - bannerH;
            } else {
                top = phraseY + phraseH + 3;
            }
            if ( banner.element.node.parentNode.tagName.toLowerCase() != 'body' ) {
                var body = document.getElementsByTagName( 'BODY' )[ 0 ];
                if ( body ) {
                    body.appendChild( banner.element.node );
                }
            }
            banner.element.move( top, left );
            banner.element.show();
        }
        this.hideBanner = function( bannerIndex )
        {
            var banner = BEGUN.hyperText.banners[ bannerIndex ];
            banner.element.hide();
        }
        this.hideAllBanners = function()
        {
            var bannersLength = BEGUN.hyperText.banners.length;
            for ( var i = 0; i < bannersLength; i++ ) {
                BEGUN.hyperText.banners[ i ].element.hide();
            }
        }
        this.createHTMLPhrase = function( phrase )
        {
			if (typeof this.limitLinks === "undefined" && typeof window.begun_hyper_max_total !== "undefined") {
				this.limitLinks = window.begun_hyper_max_total;
			} else {
				if (isNaN(this.limitLinks) || this.limitLinks-- <= 1) {
					return document.createTextNode(phrase.getText());
				}
			}

            var result = document.createElement( 'A' );
            if ( true || window.begun_target ) {
                result.target = '_blank';
            }
            result.appendChild( document.createTextNode( phrase.getText() ) );
            result.href = phrase.banner.url;
            for ( var property in this.design.phrase.style ) {
                result.style[ property ] = this.design.phrase.style[ property ];
            }
            phrase.element = new HTMLNodeWrapper( result );
            return phrase.element.node;
        }
        this.createHTMLBanner = function( banner )
        {
			var htmlBanner = '<div style="width:100%; height: auto; text-align: right; padding: 2px; background-color: ' + this.design.banner.bgColor + '"><a href="http://www.begun.ru" target="_blank" style="float: left; width: auto; padding-left: 20px; background:' + this.design.banner.bgColor + ' url(http://autocontext.begun.ru/begun16x16.png) no-repeat top left; _background: none; _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'http://autocontext.begun.ru/begun16x16.png\', sizingMethod=\'crop\'); color: ' + this.design.banner.domainColor + '; font-size: 12px; height: 16px; text-decoration: none">&#1050;&#1086;&#1085;&#1090;&#1077;&#1082;&#1089;&#1090;&#1085;&#1072;&#1103; &#1088;&#1077;&#1082;&#1083;&#1072;&#1084;&#1072;</a><a href="http://www.begun.ru" style="width: auto; color: ' + this.design.banner.domainColor + '; font-size: 12px; text-decoration: none; background-color: ' + this.design.banner.bgColor + '" target="_blank">&#1041;&#1077;&#1075;&#1091;&#1085;&nbsp;</a></div>\
							<div style="text-align:left; clear: both; padding: 6px 2px 2px 2px; height: auto; background-color: ' + this.design.banner.bgColor + '"><a class="begun_hyper" target="_blank" style="color: ' + this.design.banner.linkColor + ';font-size: 10pt; text-decoration: none" href="' + banner.url + '" onclick="event.cancelBubble=true;"><strong style="background-color: ' + this.design.banner.bgColor + '">' + banner.title + '</strong></a></div>\
							<div style="text-align:left;color: ' + this.design.banner.textColor   + '; font-size: 10pt; padding: 2px; height: auto; background-color: ' + this.design.banner.bgColor + '">' + banner.text + '</div>\
							<div style="text-align:left;color: ' + this.design.banner.domainColor + '; font-size: 10pt; padding: 2px 2px 8px 2px; height: auto; background-color: ' + this.design.banner.bgColor + '">' + banner.domain + '</div>';
            var result = document.createElement( 'DIV' );
            result.style.backgroundColor    = this.design.banner.bgColor;
            result.style.position           = 'absolute';
            result.style.border             = 'solid 1px #000';
            result.style.visibility         = 'hidden';
            result.style.width              = parseInt( this.design.banner.width ) + 'px';
            result.style.top                = '0px';
            result.style.left               = '0px';
            result.style.padding            = '5px';
            result.style.zIndex             = 99999;
			result.style.lineHeight			= '100%';
			result.style.height				= 'auto';
            result.className = 'begun_hyper';
            result.innerHTML = htmlBanner;
            result.onclick = function()
            {
                var a = this.getElementsByTagName( 'A' )[ 2 ];
                if ( a.click ) {
                    a.click();
                } else {
                    if ( a.target == '_blank' ) {
                        window.open().location.href = a.href;
                    } else {
                        window.location.href = a.href;
                    }
                }
            }
            banner.element = new HTMLNodeWrapper( result );
            return result;
        }
        this.highlight = function()
        {
            var phrasesLength = this.hyperText.phrases.length;
            for ( var i = 0; i < phrasesLength; i++ ) {
                var phrase = this.hyperText.phrases[ i ];
                var phrases = phrase.fragment.phrases;
                phrases[ phrases.length ] = phrase;
            }
            var fragmentsLength = this.hyperText.fragments.length;
            for ( var i = 0; i < fragmentsLength; i++ ) {
                var index = 0;
                var nodes = new Array();
                var fragment = this.hyperText.fragments[ i ];
                var text = fragment.node.nodeValue;
                var phrasesLength = fragment.phrases.length;
                for ( var j = 0; j < phrasesLength; j++ ) {
                    var phrase = fragment.phrases[ j ];
                    var textNode = document.createTextNode( text.substr( index, phrase.index - index ) );
                    nodes[ nodes.length ] = textNode;
                    nodes[ nodes.length ] = this.createHTMLPhrase( phrase );
                    index = phrase.index + phrase.length;
                }
                if ( text.length > index ) {
                    nodes[ nodes.length ] = document.createTextNode( text.substr( index ) );
                }
                var prevNode = fragment.node;
				try {
					var parent = fragment.node.parentNode;
					while ( nodes.length > 0 ) {
						prevNode = parent.insertBefore( nodes.pop(), prevNode );
					}
					parent.removeChild( fragment.node );
				} catch(e) {
				}
            }
        }
		this.addCss = function() {
			var cssCode = ".begun_hyper,.begun_hyper * {font-family:Arial,Tahoma,sans-serif;" +
				"cursor:pointer}\n A.begun_hyper:link,A.begun_hyper:visited," +
				"A.begun_hyper:hover,A.begun_hyper:active {color:" + this.design.banner.linkColor+"}";
			var styleElement = document.createElement("style");
			styleElement.type = "text/css";
			if (styleElement.styleSheet) {
				styleElement.styleSheet.cssText = cssCode;
			} else {
				styleElement.appendChild(document.createTextNode(cssCode));
			}
			var documentHead = document.getElementsByTagName("head")[0];
			if (typeof documentHead !== "undefined") {
				documentHead.appendChild(styleElement);
			} else {
				document.body.appendChild(styleElement);
			}
		}
    }

    function BEGUN_Fragment( node, offset )
    {
        this.node       = node;
        this.text       = node.nodeValue;
        this.offset     = offset;
        this.phrases    = new Array();
    }

    function BEGUN_Banner( title, text, url, domain, words )
    {
    	var occurencies = 0;
        this.phrasesCount = 0;
        this.title      = title;
        this.text       = text;
        this.url        = url;
        this.domain     = domain;
        this.element    = null;
        this.phrases    = new Array();

        var regexpWordBorder    = '(^|$|[^0-9A-z' + begunUnescapeHTML('&#1040;') + '-' + begunUnescapeHTML('&#1103;') + ']+)';

        var regexpPattern       = regexpWordBorder + '(' + words.join("|").replace(begunUnescapeHTML('&#1077;'), "(" + begunUnescapeHTML('&#1077;') + "|" + begunUnescapeHTML('&#1105;') + ")").replace(begunUnescapeHTML('&#1045;'), "(" + begunUnescapeHTML('&#1045;') + "|" + begunUnescapeHTML('&#1025;') + ")") + ')' + regexpWordBorder;

        this.regexp             = new RegExp( regexpPattern, 'ig' );

        this.findPhrases = function( fragment )
        {

        	if (window.begun_hyper_max_singleword !== undefined){
        		if (occurencies >= window.begun_hyper_max_singleword){
        			return false;
        		}
        	}

            var result = this.regexp.exec( fragment.text );
            if ( result != null ) {
                //this.regexp.lastIndex -= result[ result.length - 1 ].length;
            	begunProceedFeeds++;
            	occurencies++;
                return new BEGUN_Phrase(
                    this,
                    fragment,
                    result.index + result[ 1 ].length,
                    result[ 2 ].length
                );
            }
            return false;
        }
    }

    function BEGUN_Phrase( banner, fragment, index, length )
    {
        this.banner     = banner;
        this.fragment   = fragment;
        this.index      = index;
        this.length     = length;
        this.density    = null;
        this.element    = null;
        this.rating     = 0;
        this.space      = fragment.offset + index;
        this.banner.phrasesCount++;
        this.getText = function()
        {
            return this.fragment.text.substr(
                this.index,
                this.length
            );
        }
    }

    function BEGUN_HyperText( container )
    {
        this.container      = container;
        this.fragments      = new Array();
        this.banners        = new Array();
        this.phrases        = new Array();
        this.viewType       = 0;
        this.start = function( limit )
        {
            this.findPhrases( this.container, 0 );
            var cmp = function( a, b ) { return a.space - b.space };
            this.phrases = this.phrases.sort( cmp );
            this.deleteCrossing();
            this.combineRelatives();
            var phrasesLength = this.phrases.length;
            for ( var i = 0; i < phrasesLength; i++ ) {
                this.calculatePhrasesDensity( i );
            }
            if ( this.viewType == 1 ) {
                this.deleteMoreThanOne();
            } else {
                this.cleanForBestView();
            }
        }
        this.isLegalNode = function( node )
        {
            var regexp = new RegExp( '^(script|a|h1|h2|h3|h4|h5|h6|big)$', 'i' );
            if ( node.tagName && node.tagName.search( regexp ) != -1 ) {
                return false;
            }
            return true;
        }
        this.findPhrases = function( parent, offset )
        {
            if ( parent.hasChildNodes() ) {
                for ( var i = 0; i < parent.childNodes.length; i++ ) {
                    if ( parent.childNodes[ i ].nodeType == 3 ) {
                        if (/^\s$/.test(parent.childNodes[i].nodeValue)) {
                            continue;
                        }
                        var fragment = new BEGUN_Fragment( parent.childNodes[ i ], offset );
                        this.fragments[ this.fragments.length ] = fragment;
                        var bannersLength = this.banners.length;
                        for ( var j = 0; j < bannersLength; j++ ) {
                            //this.banners[ j ].regexp.lastIndex = 0;
                            while ((phrase = this.banners[j].findPhrases(fragment)) != false){
                                this.phrases[ this.phrases.length ] = phrase;
                            }
                        }
                        offset = offset + fragment.text.length;
                    } else {
                        if ( this.isLegalNode( parent.childNodes[ i ] ) ) {
                            offset = this.findPhrases( parent.childNodes[ i ], offset );
                        }
                    }
                }
            }
            return offset;
        }
        this.deletePhrase = function( i )
        {
            i = parseInt( i );
            this.phrases[ i ].banner.phrasesCount--;
            this.phrases.splice( i, 1 );
            this.calculatePhrasesDensity( i );
            this.calculatePhrasesDensity( i - 1 );
        }
        this.calculatePhrasesDensity = function( i )
        {
            i = parseInt( i );
            if ( 0 <= i && i < this.phrases.length ) {
                var count = 0;
                this.phrases[ i ].density = 0;
                if ( i > 0 ) {
                    this.phrases[ i ].density += this.phrases[ i ].space - this.phrases[ i - 1 ].space;
                    count++;
                }
                if ( i < this.phrases.length - 1 ) {
                    this.phrases[ i ].density += this.phrases[ i + 1 ].space - this.phrases[ i ].space;
                    count++;
                }
                if ( count > 1 ) {
                    this.phrases[ i ].density /= count;
                }
            }
        }
        this.deleteCrossing = function()
        {
            var i = 1, curr, prev;
            var MIN_WORDS_BETWEEN = 5;
            var _this = this;
            var clearNearPhrases = function(leftPhraseIndex, rightPhraseIndex) {
                    var phraseLeft = _this.phrases[leftPhraseIndex];
                    var phraseRight = _this.phrases[rightPhraseIndex];
                    if (typeof phraseRight === "undefined" || phraseLeft.fragment !== phraseRight.fragment) {
                            return;
                    }
                    var interval = phraseLeft.fragment.text.substring(phraseLeft.space + phraseLeft.length - phraseRight.fragment.offset, phraseRight.space - phraseRight.fragment.offset);                                                                                   
                    if (interval.replace(/^\s+/, '').replace(/\s+$/, '').split(/\s+/).length < MIN_WORDS_BETWEEN) {
                            _this.deletePhrase(rightPhraseIndex);
                            clearNearPhrases(leftPhraseIndex, rightPhraseIndex);
                    }
            };
            while ( i < this.phrases.length ) {
                curr = this.phrases[ i ];
                prev = this.phrases[ i - 1 ];
                if ( prev.space + prev.length > curr.space ) {
                    if ( curr.banner.phrasesCount > prev.banner.phrasesCount ) {
                        this.deletePhrase( i );
                    } else {
                        this.deletePhrase( i - 1 );
                    }
                } else {
                    clearNearPhrases(i-1, i);
                    i++;
                }
            }
        }
        this.combineRelatives = function()
        {
            var i = 1, curr, prev;
            var regexp = new RegExp( '^(\\s|-|\\+|/|&#150;|&nbsp;|&|[0-9a-z' + begunUnescapeHTML('&#1040;') + '-' + begunUnescapeHTML('&#1103;') + ']){1,14}$', 'i' );
            while ( i < this.phrases.length ) {
                curr = this.phrases[ i ];
                prev = this.phrases[ i - 1 ];
                if ( curr.banner == prev.banner && curr.fragment == prev.fragment ) {
                    var lining = curr.fragment.text.substr( prev.index + prev.length, curr.index - prev.index - prev.length );
                    if ( regexp.test( lining ) ) {
                        prev.length = prev.length + lining.length + curr.length;
                        this.deletePhrase( i );
                        continue;
                    }
                }
                i++;
            }
        }
        this.deleteMoreThanOne = function()
        {
            var phrasesLength = this.phrases.length;
            for ( var i = 0; i < phrasesLength; i++ ) {
                var phrase = this.phrases[ i ];
                phrase.banner.phrases[ phrase.banner.phrases.length ] = phrase;
            }
            var bannersLength = this.banners.length;
            for ( var i = 0; i < bannersLength; i++ ) {
                if ( this.banners[ i ].phrases.length > 0 ) {
                    var maxDensity  = 0;
                    var maxLength   = 0;
                    var maxRating   = 0;
                    var maxSpace    = 0;
                    var minSpace    = Number.POSITIVE_INFINITY;
                    var bestPhrase  = this.banners[ i ].phrases[ 0 ];
                    var phrasesLength = this.banners[ i ].phrases.length;
                    for ( var j = 0; j < phrasesLength; j++ ) {
                        var phrase = this.banners[ i ].phrases[ j ];
                        if ( phrase.space < minSpace ) minSpace = phrase.space;
                        if ( phrase.space > maxSpace ) maxSpace = phrase.space;
                        if ( phrase.length > maxLength ) maxLength = phrase.length;
                        if ( phrase.density > maxDensity ) maxDensity = phrase.density;
                    }
                    var phrasesLength = this.banners[ i ].phrases.length;
                    for ( var j = 0; j < phrasesLength; j++ ) {
                        var phrase = this.banners[ i ].phrases[ j ];
                        var kD = phrase.density / maxDensity;
                        var kL = phrase.length / maxLength;
                        var kS = ( maxSpace + minSpace - phrase.space ) / maxSpace;
                        var kR = kL * 100 + kD * 10 + kS;
                        if ( kR > maxRating ) {
                            maxRating = kR;
                            bestPhrase = phrase;
                        }
                    }
                    bestPhrase.rating = 1;
                }
            }
            var cmpRating = function( a, b ) { return b.rating - a.rating };
            this.phrases = this.phrases.sort( cmpRating );
            while ( this.phrases.length > this.banners.length ) {
                this.deletePhrase( this.phrases.length - 1 );
            }
            var cmpSpace = function( a, b ) { return a.space - b.space };
            this.phrases = this.phrases.sort( cmpSpace );
        }
        this.cleanForBestView = function()
        {
            if (window.begun_hyper_max_total === undefined){
            	return;
            }
        	while ( this.phrases.length > window.begun_hyper_max_total ) {
                var index = null;
                var minDensity = Number.POSITIVE_INFINITY;
                var phrasesLength = this.phrases.length;
                for ( var i = 0; i < phrasesLength; i++ ) {
                    if (  this.phrases[ i ].banner.phrasesCount > 1 ) {
                        if ( minDensity > this.phrases[ i ].density ) {
                            index = i;
                            minDensity = this.phrases[ i ].density;
                        }
                    }
                }
                if ( index == null ) {
                    break;
                }
                this.deletePhrase( index );
            }
        }
    }

    function HTMLNodeWrapper( node )
    {
        this.node = node;
        if ( document.all ) {
            this.browser = 'ie';
        } else {
            if ( navigator.userAgent.indexOf( 'Opera' ) > -1 ) {
                this.browser = 'opera';
            } else {
                this.browser = 'mozilla';
            }
        }
        this.top = function()
        {
            return _sumProperty( this.node, 'offsetTop' );
        }
        this.left = function()
        {
            return _sumProperty( this.node, 'offsetLeft' );
        }
        this.width = function()
        {
            return this.node.offsetWidth;
        }
        this.height = function()
        {
            return this.node.offsetHeight;
        }
        this.show = function()
        {
            this.node.style.visibility = 'visible';
        }
        this.hide = function()
        {
            this.node.style.visibility = 'hidden';
        }
        this.move = function( top, left )
        {
            this.node.style.top     = parseInt( top ) + 'px';
            this.node.style.left    = parseInt( left ) + 'px';
        }
        this.windowWidth = function()
        {
            if ( this.browser == 'ie' ) {
                return window.document.body.clientWidth;
            }
            return window.innerWidth;
        }
        this.windowHeight = function()
        {
            if ( this.browser == 'ie' ) {
                return window.document.body.clientHeight;
            }
            return window.innerHeight;
        }
        this.windowScrollTop = function()
        {
            return document.body.scrollTop;
        }
        function _sumProperty( node, propertyName )
        {
            var result = 0;
            while( node.offsetParent ) {
                result += node[ propertyName ];
                node = node.offsetParent;
            }
            return result;
        }
    }
(function() {
if (typeof window.begunToolbarLoaded === "undefined") {
	window.begunToolbarLoaded = function() {
		if (typeof Begun === "undefined" || !Begun.Toolbar || !Begun.Toolbar.init) {
			return;
		}
		while (loadHyperFeedDone.unhandledDebugs.length > 0) {
			Begun.Toolbar.init(loadHyperFeedDone.unhandledDebugs.pop());
		}
	}
} else {
	var btl = window.begunToolbarLoaded;
	window.begunToolbarLoaded = function() {
		btl();
		if (typeof Begun === "undefined" || !Begun.Toolbar || !Begun.Toolbar.init) {
			return;
		}
		while (loadHyperFeedDone.unhandledDebugs && loadHyperFeedDone.unhandledDebugs.length > 0) {
			Begun.Toolbar.init(loadHyperFeedDone.unhandledDebugs.pop());
		}
	};
}
})();
