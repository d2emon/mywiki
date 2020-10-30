/*!
 * jQuery UI 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */(function(a,b){function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;if(!b.href||!g||f.nodeName.toLowerCase()!=="map")return!1;h=a("img[usemap=#"+g+"]")[0];return!!h&&d(h)}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}a.ui=a.ui||{};a.ui.version||(a.extend(a.ui,{version:"1.8.17",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)});return c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){if(c===b)return g["inner"+d].call(this);return this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){if(typeof b!="number")return g["outer"+d].call(this,b);return this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!!d&&!!a.element[0].parentNode)for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;if(b[d]>0)return!0;b[d]=1,e=b[d]>0,b[d]=0;return e},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}}))})(jQuery);


/*!
 * jQuery UI Widget 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}});return d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e;if(f&&e.charAt(0)==="_")return h;f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b){h=f;return!1}}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))});return h}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}this._setOptions(e);return this},_setOptions:function(b){var c=this;a.each(b,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,b){this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);this.element.trigger(c,d);return!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);


/*
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function(a){var r=a.fn.domManip,d="_tmplitem",q=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},f={},e,p={key:0,data:{}},i=0,c=0,l=[];function g(g,d,h,e){var c={data:e||(e===0||e===false)?e:d?d.data:{},_wrap:d?d._wrap:null,tmpl:null,parent:d||null,nodes:[],calls:u,nest:w,wrap:x,html:v,update:t};g&&a.extend(c,g,{nodes:[],parent:d});if(h){c.tmpl=h;c._ctnt=c._ctnt||c.tmpl(a,c);c.key=++i;(l.length?f:b)[i]=c}return c}a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(f,d){a.fn[f]=function(n){var g=[],i=a(n),k,h,m,l,j=this.length===1&&this[0].parentNode;e=b||{};if(j&&j.nodeType===11&&j.childNodes.length===1&&i.length===1){i[d](this[0]);g=this}else{for(h=0,m=i.length;h<m;h++){c=h;k=(h>0?this.clone(true):this).get();a(i[h])[d](k);g=g.concat(k)}c=0;g=this.pushStack(g,f,i.selector)}l=e;e=null;a.tmpl.complete(l);return g}});a.fn.extend({tmpl:function(d,c,b){return a.tmpl(this[0],d,c,b)},tmplItem:function(){return a.tmplItem(this[0])},template:function(b){return a.template(b,this[0])},domManip:function(d,m,k){if(d[0]&&a.isArray(d[0])){var g=a.makeArray(arguments),h=d[0],j=h.length,i=0,f;while(i<j&&!(f=a.data(h[i++],"tmplItem")));if(f&&c)g[2]=function(b){a.tmpl.afterManip(this,b,k)};r.apply(this,g)}else r.apply(this,arguments);c=0;!e&&a.tmpl.complete(b);return this}});a.extend({tmpl:function(d,h,e,c){var i,k=!c;if(k){c=p;d=a.template[d]||a.template(null,d);f={}}else if(!d){d=c.tmpl;b[c.key]=c;c.nodes=[];c.wrapped&&n(c,c.wrapped);return a(j(c,null,c.tmpl(a,c)))}if(!d)return[];if(typeof h==="function")h=h.call(c||{});e&&e.wrapped&&n(e,e.wrapped);i=a.isArray(h)?a.map(h,function(a){return a?g(e,c,d,a):null}):[g(e,c,d,h)];return k?a(j(c,null,i)):i},tmplItem:function(b){var c;if(b instanceof a)b=b[0];while(b&&b.nodeType===1&&!(c=a.data(b,"tmplItem"))&&(b=b.parentNode));return c||p},template:function(c,b){if(b){if(typeof b==="string")b=o(b);else if(b instanceof a)b=b[0]||{};if(b.nodeType)b=a.data(b,"tmpl")||a.data(b,"tmpl",o(b.innerHTML));return typeof c==="string"?(a.template[c]=b):b}return c?typeof c!=="string"?a.template(null,c):a.template[c]||a.template(null,q.test(c)?c:a(c)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){b={}},afterManip:function(f,b,d){var e=b.nodeType===11?a.makeArray(b.childNodes):b.nodeType===1?[b]:[];d.call(f,b);m(e);c++}});function j(e,g,f){var b,c=f?a.map(f,function(a){return typeof a==="string"?e.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+d+'="'+e.key+'" $2'):a:j(a,e,a._ctnt)}):e;if(g)return c;c=c.join("");c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(f,c,e,d){b=a(e).get();m(b);if(c)b=k(c).concat(b);if(d)b=b.concat(k(d))});return b?b:k(c)}function k(c){var b=document.createElement("div");b.innerHTML=c;return a.makeArray(b.childNodes)}function o(b){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+a.trim(b).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(m,l,k,g,b,c,d){var j=a.tmpl.tag[k],i,e,f;if(!j)throw"Unknown template tag: "+k;i=j._default||[];if(c&&!/\w$/.test(b)){b+=c;c=""}if(b){b=h(b);d=d?","+h(d)+")":c?")":"";e=c?b.indexOf(".")>-1?b+h(c):"("+b+").call($item"+d:b;f=c?e:"(typeof("+b+")==='function'?("+b+").call($item):("+b+"))"}else f=e=i.$1||"null";g=h(g);return"');"+j[l?"close":"open"].split("$notnull_1").join(b?"typeof("+b+")!=='undefined' && ("+b+")!=null":"true").split("$1a").join(f).split("$1").join(e).split("$2").join(g||i.$2||"")+"__.push('"})+"');}return __;")}function n(c,b){c._wrap=j(c,true,a.isArray(b)?b:[q.test(b)?b:a(b).html()]).join("")}function h(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(b){var a=document.createElement("div");a.appendChild(b.cloneNode(true));return a.innerHTML}function m(o){var n="_"+c,k,j,l={},e,p,h;for(e=0,p=o.length;e<p;e++){if((k=o[e]).nodeType!==1)continue;j=k.getElementsByTagName("*");for(h=j.length-1;h>=0;h--)m(j[h]);m(k)}function m(j){var p,h=j,k,e,m;if(m=j.getAttribute(d)){while(h.parentNode&&(h=h.parentNode).nodeType===1&&!(p=h.getAttribute(d)));if(p!==m){h=h.parentNode?h.nodeType===11?0:h.getAttribute(d)||0:0;if(!(e=b[m])){e=f[m];e=g(e,b[h]||f[h]);e.key=++i;b[i]=e}c&&o(m)}j.removeAttribute(d)}else if(c&&(e=a.data(j,"tmplItem"))){o(e.key);b[e.key]=e;h=a.data(j.parentNode,"tmplItem");h=h?h.key:0}if(e){k=e;while(k&&k.key!=h){k.nodes.push(j);k=k.parent}delete e._ctnt;delete e._wrap;a.data(j,"tmplItem",e)}function o(a){a=a+n;e=l[a]=l[a]||g(e,b[e.parent.key+n]||e.parent)}}}function u(a,d,c,b){if(!a)return l.pop();l.push({_:a,tmpl:d,item:this,data:c,options:b})}function w(d,c,b){return a.tmpl(a.template(d),c,b,this)}function x(b,d){var c=b.options||{};c.wrapped=d;return a.tmpl(a.template(b.tmpl),b.data,c,b.item)}function v(d,c){var b=this._wrap;return a.map(a(a.isArray(b)?b.join(""):b).filter(d||"*"),function(a){return c?a.innerText||a.textContent:a.outerHTML||s(a)})}function t(){var b=this.nodes;a.tmpl(null,null,null,this).insertBefore(b[0]);a(b).remove()}})(jQuery);
 /**
 * @author dmitry.petrov@sup.com (Dmitry Petrov)
 * @fileoverview Base widget for all livejournal widgets.
 */

/**
 * @name $.lj.basicWidget
 * @requires $.ui.core, $.ui.widget
 * @class Base widget for all livejournal widgets.<br />
 *	Basic widget adds pub/sub system to the widget hierarchy. By convention widgets add prefix equal
 *	to the widget name of the most parent element who fires it. E.g. if someWidget and subSomeWidget
 *	that extends someWidget do fire open event, it should be prefixed with someWidget - someWidget/open.
 *
 */
( function( $ ) {

	var __callbacks = {},

		//these events we set once and for all widget instances
		globalEvents = {
			documentClick: false
		}

	/** @lends $.lj.basicWidget.prototype */
	$.widget( 'lj.basicWidget', {

		/** 
		 * Default options for widgets.
		 * @type Object
		 * @private
		 */
		options: {
			/**
			 * Object contains strings with class names that are used within widget.
			 */
			classNames: {},
			/**
			 * Object contains strings with selectors that are used to find nodes within widget.
			 */
			selectors: {},
			/**
			 * Object contains translation strings for a widget. Widget should not contain hardcoded strings.
			 */
			ml: {},
			/**
			 * Object contains strings with templates, that are used to build content within widget.
			 */
			tmpl: {}
		},

		_create: function() {
			/**
			 * Contains all events that should not trigger events on next fire for this widget.
			 * @type Object
			 */
			this.__suppressedEvents = {};
		},

		/**
		 * Bind common events for the widget
		 */
		_bindControls: function() {
			var widget = this;

			/**
			 * documentClick
			 */
			if( !globalEvents.documentClick ) {
				$( document ).click( function( ev ) {
					widget._fire( 'documentClick', [], true );
				} );

				globalEvents.documentClick = true;
			}
		},

		_setOption: function(name, val) {
			switch (name) {
				case 'selectors':
				case 'classNames':
				case 'tmpl':
				case 'templates':
					this.options[name] = $.extend(this.options[name], val);
					return;
					break;
			}

			$.Widget.prototype._setOption.apply(this, arguments);
		},

		/**
		 * Subscribe to the event with the callback.
		 *
		 * @param {String} type Event type.
		 * @param {Function} callback Function that should be fired on the event.
		 */
		_on: function( type, callback ) {
			if( !( type in __callbacks ) ) {
				__callbacks[ type ] = [];
			}

			__callbacks[ type ].push( {
				fn: callback,
				owner: this
			} );
		},

		/**
		 * Remove subscription on the event.
		 *
		 * @param {String} type Event type.
		 * @param {Function=} callback Callback function. If parameter is omitted, function will remove all
		 *     callbacks of this instance from the subscription on this type of event.
		 */
		_off: function( type, callback ) {
			if( !( type in __callbacks ) ) { return; }

			var cbs = __callbacks[ type ];
			for( var i = 0; i < cbs.length; ++i ) {
				if( ( callback && cbs[ i ].fn === callback ) || ( cbs[i].owner === this ) ) {
					cbs.splice( i, 1 );
				}
			}
		},

		/**
		 * Dispatch event.
		 *
		 * @param {String} type Event type.
		 * @param {Array|[]} args array with arguments that will be passed to the callback functions.
		 * @param {Boolean|False} includeOwner If false the message is not recieved by
		 *     the object that dispatched it.
		 */
		_fire: function( type, args, includeOwner ) {
			args = args || [];
			includeOwner = includeOwner || false;
			if( type in __callbacks ) {
				var cbs = __callbacks[ type ],
					i = -1;

				while( cbs[ ++i ] ) {
					if( !includeOwner && cbs[ i ].owner === this ) { continue; }
					if( type in cbs[ i ].owner.__suppressedEvents ) { continue; }
					cbs[ i ].fn.apply( null, args );
				}

				//we delete supressed event flag only after firing event because 
				//wedget can subscribe more than one callback
				while(cbs[ --i ]) {
					if( type in cbs[ i ].owner.__suppressedEvents ) {
						delete cbs[ i ].owner.__suppressedEvents[ type ];
					}
				}
			}
		},

		/**
		 * Prevent event from being trigger on this widget instance on next fire.
		 *     An event after next will be processed as normal
		 */
		_suppressNextEvent: function( eventName ) {
			this.__suppressedEvents[ eventName ] = true;
		},

		/**
		 * Remove all subscriptions on widget distruction. If overriden, this method should be
		 *     also caled.
		 */
		_destroy: function() {
			var cbs;
			for( var type in __callbacks ) {
				cbs = __callbacks[ type ];
				for( var i = 0; i < cbs.length; ++i ) {
					if( cbs[i].owner === this ) {
						cbs.splice( i, 1 )
					}
				}
			}
		},

		/**
		 * Find element inside the widget and return it. Note, that function caches the elements
		 * and assigns them ti the widget object with the name _{name}
		 *
		 * @param {string} name Name of the selector to search in this.options.selectors
		 */
		_el: function(name) {
			var method = '_' + name;

			if (!this[method]) { this[method] = this.element.find(this.options.selectors[name]); };

			return this[method];
		},

		/**
		 * Fetch the class name from the options.
		 *
		 * @param {string} name Name of the class name to search in this.options.classNames.
		 */
		_cl: function(name) {
				return this.options.classNames[name];
		},

		/**
		 * Fetch the selector from the options.
		 *
		 * @param {string} name Name of the selector to search in this.options.selectors
		 */
		_s: function(name) {
				return this.options.selectors[name];
		}
	} );
} )( jQuery );

/*!
 * LiveJournal Bubble
 * use it to wrap some content with pop-up "bubble" -
 * it'll be positioned relative to "target" param (also can be passed with public method "show" invocation)
 *
 * Copyright 2011, sergey.zhirkov@sup.com
 *
 * http://docs.jquery.com/UI
 * 
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *
 * Usage:
 *	<script>
 *		$('div.with-bubble-content')
 *			.bubble()
 *			.bubble('publicMethod')
 *			.bubble({ many: options })
 *			.bubble('option', 'getOptionName')
 *			.bubble('option', 'setOptionName', 'setOptionValue')
 *			.bind('bubblehide', function( ev ){}); // bind some event
 *	</script>
 */

(function ($, window) {

	var LJBubble = {
		
		options: {
			target: null,
			currentTarget: null,
			
			hoverTimer: null,
			hoverDelay: 600,
			showDelay: 0,

			position: {
				x: 0,
				y: 0
			},

			/**
			 * offset object can contain directly fields x and y or fields l,r,t,b,tl,tr,bl,br
			 *    that contain offset object for the bubble in the exact position.
			 *  Priority order: x,y -> tl,bl,tr,br -> t,b -> l,r
			 */
			offset: {},
			
			// horizontal align relative to target elem
			// TODO "right" align
			align: 'center', // left || center
			
			// always show under target elem (even if bubble node does not fit screen height)
			alwaysShowUnderTarget: false,
			
			closeControl: true,
			closeOnContentClick: false,
			closeOnDocumentClick: true,
			closeOnEscape: true,
			
			// show on special event triggered by target (no action by default - "false")
			showOn: false, // 'click' || ('hover' || 'mouseover') || 'focus' || false
			showEffect: '', //can be fade
			
			preventDefaultTargetClick: true,
			
			outerHtml: '' +
				'<div class="b-popup bubble-node" style="display: none;">' +
					'<div class="b-popup-outer">' +
						'<div class="b-popup-inner">' +
							'<i class="i-popup-arr i-popup-arrtl">' +
								'<i class="i-popup-arr-brdr-outer">' +
									'<i class="i-popup-arr-brdr-inner">' +
										'<i class="i-popup-arr-bg"></i>' +
									'</i>' +
								'</i>' +
							'</i>' +
							'<i class="i-popup-close"></i>' +
						'</div>' +
					'</div>' +
				'</div>',
			
			classNames: {
				containerAddClass: '', //if this value is set it will add this class to the top node
				positionPrefix: 'i-popup-arr',
				arrowDefault: 'i-popup-arr',
				withCloseControl: 'b-popup-withclosecontrol',
				noCloseControl: 'b-popup-noclosecontrol'
			},
			
			selectors: {
				bubbleNode: 'div.bubble-node',
				bubbleArrow: 'i.i-popup-arr',
				bubbleInner: 'div.b-popup-inner',
				closeControl: 'i.i-popup-close'
			}
		},
		
		
		// private methods
		
		_create: function () {
			var ljBubble = this,
				options = ljBubble.options,
				selectors = options.selectors;

			$.lj.basicWidget.prototype._create.apply(this);
			$.lj.basicWidget.prototype._bindControls.apply(this);

			//this flag is needed because we cannot simply top propogation
			//on content click - user won't be able to open links.
			this.blockDocumentClick = false;

			// wrap bubble content with bubble outer html
			ljBubble._makeNode();

			this._on('documentClick', function() {
				if (options.closeOnDocumentClick && !ljBubble.blockDocumentClick) {
					ljBubble.hide();
				} else {
					ljBubble.blockDocumentClick = false;
				}
			});
			
			// set default options
			ljBubble._setOptions(options);
		},
		
		_setOption: function (option, value) {
			var ljBubble = this,
				options = ljBubble.options,
				classNames = options.classNames,
				eventNamespace = '.' + ljBubble.widgetName + '-' + option,
				currentShowOn = options.showOn,
				newValue;

			switch (option) {
				case 'target':
					newValue = $(value);
					if(options.target && options.target[0] === newValue[0]) {
						break;
					}

					//if target changes we should rebind all events from the old one.
					//we don't if the old one is a string or an ordinary node, because
					//it can happen only on init
					if (options.target && !(typeof options.target === "string") &&
						('length' in  options.target)) {
						this._setOption('showOn', false);
						options.target = newValue;
						this._setOption('showOn', currentShowOn);
					} else {
						options.target = $(value);
					}
					return; //return from the function, because we modified value
				break;
				case 'closeControl':
					if (value) {
						ljBubble.bubbleNode
							.delegate(options.selectors.closeControl, 'click' + eventNamespace, function (event) {
								ljBubble.hide();
							})
							.removeClass(classNames.noCloseControl)
							.addClass(classNames.withCloseControl);
					} else {
						ljBubble.bubbleNode
							.undelegate(options.selectors.closeControl, 'click' + eventNamespace)
							.removeClass(classNames.withCloseControl)
							.addClass(classNames.noCloseControl);
					}
				break;
				case 'position':
					ljBubble.bubbleNode.css({
						left: value.x,
						top: value.y
					});
				break;
				case 'showOn':
					value = (value == 'mouseover') ? 'hover' : value;
				
					if (value == 'click') {
						options.target.bind('click' + eventNamespace, function (event) {
							var target = $(this);
							
							event.preventDefault();
							ljBubble.blockDocumentClick = true;
							
							if (ljBubble.bubbleNode.is(':visible')) {
								ljBubble.hide();
							} else {
								ljBubble.show(target);
							}
						});
					} else {
						options.target.unbind('click' + eventNamespace);
					}
					
					if (value == 'hover') {
						options.target
							.add(ljBubble.bubbleNode)
								.bind('touchstart' + eventNamespace + ' mouseenter' + eventNamespace, function () {
									var target = this;
									clearTimeout(options.hoverTimer);
									options.hoverTimer = setTimeout(function () {
										ljBubble.show(target);
									}, options.showDelay);
								})
								.bind('mouseleave' + eventNamespace, function () {
									clearTimeout(options.hoverTimer);
									options.hoverTimer = setTimeout(function () {
										ljBubble.hide();
									}, options.hoverDelay);
								});
					} else {
						options.target
							.add(ljBubble.bubbleNode)
								.unbind('touchstart' + eventNamespace)
								.unbind('mouseenter' + eventNamespace)
								.unbind('mouseleave' + eventNamespace);
					}

					if (value == 'focus') {
						options.target
							.bind('focus' + eventNamespace, function (event) {
								var target = $(this);

								ljBubble.blockDocumentClick = true;
								event.preventDefault();
								event.stopPropagation();
								
								ljBubble.show(target);
							});
							// @BUG: this was commented out because click on the bubble
							//       content triggers blur event.
							// .bind('blur' + eventNamespace, function (event) {
							// 	ljBubble.hide();
							// });
					} else {
						options.target
							.unbind('focus' + eventNamespace)
							.unbind('blur' + eventNamespace);
					}			
				break;
				case 'preventDefaultTargetClick':
					if (value) {
						options.target.bind('click' + eventNamespace, function (event) {
							event.preventDefault();
						});
					} else {
						options.target.unbind('click' + eventNamespace);
					}
				break;
				case 'closeOnEscape':
					if (value) {
						$(document).bind('keydown' + eventNamespace, function (event) {
							// escape
							if (event.keyCode == 27) {
								ljBubble.hide();
							}
						});
					} else {
						$(document).unbind('keydown' + eventNamespace);
					}
				break;
				case 'closeOnContentClick':
					if (!value) {
						ljBubble.bubbleNode.bind('mousedown' + eventNamespace + ' click' + eventNamespace, function (event) {
							ljBubble.blockDocumentClick = true;
						});
					} else {
						ljBubble.bubbleNode.unbind('mousedown' + eventNamespace + ' click' + eventNamespace);
					}
				break;
			}

			options[option] = value;
		},

		_makeNode: function () {
			var bubbleNode = $(this.options.outerHtml),
				bubbleArrow = bubbleNode.find(this.options.selectors.bubbleArrow),
				bubbleInner = bubbleNode.find(this.options.selectors.bubbleInner);
			
			// this.element - with bubble content
			this.element
				.css('display', 'block')
				.prependTo(bubbleInner);
			
			this.bubbleNode = bubbleNode.prependTo('body');
			this.bubbleArrow = bubbleArrow;
			
			// store arrow elem position
			bubbleNode.css({
				visibility: 'hidden',
				display: 'block'
			});

			var containerAddClass = this.options.classNames.containerAddClass;
			//additional class is needed to customize look and behavior of bubble if needed
			if (containerAddClass && containerAddClass.length > 0) {
				bubbleNode.addClass(containerAddClass);
			}

			bubbleArrow.data({
				'left': bubbleArrow.position().left,
				'top': bubbleArrow.position().top
			});
			bubbleNode.css({
				visibility: 'visible',
				display: 'none'
			});
		},
		
		_getPosition: function (targetControl) {
			targetControl = targetControl || this.options.currentTarget;
			
			// if there is image in target (like this: <a><img src="..."></a>) - bubble will be positioned relative to image
			if (targetControl.find('img').length) {
				targetControl = targetControl.find('img');
			}
			
			var ljBubble = this,
				options = ljBubble.options,
				align = options.align,
				alwaysShowUnderTarget = options.alwaysShowUnderTarget,
			
				viewport = $(window),
				viewportWidth = viewport.width(),
				viewportHeight = viewport.height(),
				body = $('body'),
				viewportScrollLeft = body.prop('scrollLeft'),
				
				elem = ljBubble.bubbleNode,
				elemWidth = elem.width(),
				elemHeight = elem.height(),
				
				popupArrow = ljBubble.bubbleArrow,
				popupArrowLeft = popupArrow.data('left'),
				popupArrowTop = popupArrow.data('top'),
				popupArrowWidth = 13, // popup arrow drawn with borders (6px at left and right side)
				
				targetOffset = targetControl.offset(),
				targetLeft = Math.round(targetOffset.left),
				targetTop = Math.round(targetOffset.top),
				targetWidth = targetControl.width(),
				targetHeight = targetControl.height(),
				
				scrollOffset = viewport.scrollTop(),
				
				leftPositionX = (align == 'center') ?
					// center align (arrow relative to target elem) 
					Math.floor( targetLeft + (targetWidth / 2) - popupArrowLeft - (popupArrowWidth / 2) ) :
					// left align 
					targetLeft,
				rightPositionX = targetLeft + Math.floor( (targetWidth / 2) - (elemWidth - popupArrowLeft - popupArrowWidth / 2) ),
				topPositionY = targetTop - popupArrowTop + targetHeight,
				bottomPositionY = targetTop + popupArrowTop - elemHeight,
				
				arrowPositionType = {
					x: 'l', // left
					y: 't' // top
				},
				arrowPositionTypes = {
					'tl': { x: leftPositionX, y: topPositionY },
					'tr': { x: rightPositionX, y: topPositionY },
					'bl': { x: leftPositionX, y: bottomPositionY },
					'br': { x: rightPositionX, y: bottomPositionY }
				},
				
				position,
				
				checkAngle = {
					x: leftPositionX + elemWidth,
					y: topPositionY + elemHeight
				};
				
			if (checkAngle.x > viewportWidth + viewportScrollLeft) {
				arrowPositionType.x = 'r'; // right
			}
			
			if (!alwaysShowUnderTarget && checkAngle.y > viewportHeight + viewport.scrollTop() && bottomPositionY > 0) {
				arrowPositionType.y = 'b'; // bottom
			}
			
			arrowPositionType = arrowPositionType.y + arrowPositionType.x;

			popupArrow
				.removeClass()
				.addClass(options.classNames.arrowDefault)
				.addClass(options.classNames.positionPrefix + arrowPositionType);
			
			position = arrowPositionTypes[arrowPositionType];
			position = this._applyOffset( position, arrowPositionType );
			
			return { position: position, bubblePosition: arrowPositionType };
		},

		_updatePosition: function () {
			var newPosition = this._getPosition();
			this.option('position', newPosition.position);

			return newPosition;
		},

		_applyOffset: function( position, bubblePosition ) {
			var offset = this.options.offset,
				offsetObj;

			if( 'x' in offset ) {
				offsetObj = offset;
			} else {
				offsetObj = offset[ bubblePosition ] || offset[ bubblePosition.charAt( 0 ) ] || offset[ bubblePosition.charAt( 1 ) ];
			}

			if( offsetObj ) {
				position.x += offsetObj.x;
				position.y += offsetObj.y;
			}

			return position;
		},

		// public methods
		
		show: function (target) {
			var ljBubble = this,
				options = ljBubble.options,
				position;
				
			//prevent delayed mouseout event
			clearTimeout(this.options.hoverTimer);

			target = (target) ? $(target) : options.target;
			
			$( ':lj-bubble' ).not( this.element ).bubble( "hide" );
			
			if (!ljBubble.bubbleNode.is(':visible')) {
				ljBubble.option('currentTarget', target);
				position = ljBubble._updatePosition();

				if (this.options.showEffect === 'fade') {
					this.bubbleNode.fadeIn(200);
				} else {
					this.bubbleNode.show();
				}
			}
			
			ljBubble._trigger( 'show', null, [ {
				position: position
			} ] );
			
			return this;
		},
		
		hide: function () {
			//prevent delayed mouseout event
			clearTimeout(this.options.hoverTimer);

			if (!this.bubbleNode.is(':visible')) { //do not fire events if bubble is already hidden
				return;
			}

			if (this.options.showEffect === 'fade') {
				this.bubbleNode.fadeOut(200);
			} else {
				this.bubbleNode.hide();
			}

			this._trigger('hide');

			return this;
		},

		/**
		 * Reposition bubble on the page. The method is needed to reposition bubble
		 * in case when it's content is changed and it remains visible at the same time.
		 */
		updatePosition: function() {
			this._updatePosition();
		}

	};
	
	$.widget('lj.bubble', $.lj.basicWidget, LJBubble);
	
})(jQuery, this);

/**
 * Contextual popup is displayed on mouse hover near
 * every userpic and userhead
 */

/**
 * Widget shows the dialog to edit current user note.
 */
LJWidgetIPPU_AddAlias = new Class(LJWidgetIPPU, {
	init: function (opts, params) {
		opts.widgetClass = "IPPU::AddAlias";
		this.width = opts.width; // Use for resizing later
		this.height = opts.height; // Use for resizing later
		this.alias = opts.alias;
		LJWidgetIPPU_AddAlias.superClass.init.apply(this, arguments);
	},

	changeAlias: function (evt, form) {
		this.doPost({
				alias: form["Widget[IPPU_AddAlias]_alias"].value + "",
				foruser: form["Widget[IPPU_AddAlias]_foruser"].value + ""
		});

		evt.preventDefault();
	},

	onData: function (data) {
		if (!data.res || !data.res.success) {
			return;
		}

		this.close();

		//Changing button. Only on profile page
		var edit_node = jQuery('.profile_addalias');
		if (edit_node.length) {
			if (data.res.alias) {
				edit_node[0].style.display = 'none';
				edit_node[1].style.display = 'block';
				edit_node[1].firstChild.alias = data.res.alias;
			} else {
				edit_node[0].style.display = 'block';
				edit_node[1].style.display = 'none';
			}
		}
		
		var username = data.res.username,
			alias = data.res.alias;
		if(ContextualPopup.cachedResults[username]) {
			ContextualPopup.cachedResults[username].alias_title = alias ? 'Edit Note' : 'Add Note';
			ContextualPopup.cachedResults[username].alias = alias;
		}

		if (ContextualPopup.currentId === username) {
			ContextualPopup.renderPopup(ContextualPopup.currentId);
		}
	},

	onError: function (msg) {
		LJ_IPPU.showErrorNote("Error: " + msg);
	},

	onRefresh: function () {
		var form = jQuery('#addalias_form').get(0),
			input = jQuery(form['Widget[IPPU_AddAlias]_alias']),
			delete_btn = jQuery(form['Widget[IPPU_AddAlias]_aliasdelete']),
			widget = this;
		input.focus();

		if (delete_btn.length) {
			delete_btn.click(function(){
				input.val('');
			});
			input.input(function() {
				// save button disabled
				form['Widget[IPPU_AddAlias]_aliaschange'].disabled = !this.value;
			});
		}

		jQuery(form).submit(function(e) { widget.changeAlias(e, form) });
	},

	cancel: function (e) {
		this.close();
	}
});


//this object contains only authToken
Aliases = {}
function addAlias(target, ptitle, ljusername, oldalias, callback) {
	if (! ptitle) return true;
	
	new LJWidgetIPPU_AddAlias({
		title: ptitle,
		width: 440,
		height: 180,
		authToken: Aliases.authToken,
		callback: callback
		}, {
			alias: target.alias||oldalias,
			foruser: ljusername
		});

	return false;
}


(function($) {

	/**
	 * Object contains methods to build and display user popup.
	 */
	var popup = {
		popupDelay: 500,
		popupTimer: null,
		adriverImages : {
			anonymous: 'http://ad.adriver.ru/cgi-bin/rle.cgi?sid=1&ad=186396&bt=21&pid=482107&bid=893162&bn=893162&rnd={random}',
			guest: 'http://ad.adriver.ru/cgi-bin/rle.cgi?sid=1&ad=186396&bt=21&pid=482107&bid=893165&bn=893165&rnd={random}',
			self: 'http://ad.adriver.ru/cgi-bin/rle.cgi?sid=1&ad=186396&bt=21&pid=482107&bid=893167&bn=893167&rnd={random}'
		},

		classNames: {
			popup: 'b-popup-contextual'
		},
		selectors: {
			wrapper: '.b-contextualhover',
			bubble: '.b-popup',
			popup: '.contextualPopup'
		},
		templates: {
			wrapper: '<div class="b-contextualhover"></div>',
			loading: 'Loading...',
			content: 
					'{{if userpic }}' +
					'<div class="b-contextualhover-side">' +
						'<div class="b-contextualhover-userpic">' +
							'<a href="${userpic.allpics}"><img src="${userpic.pic}" alt="" /></a>' +
						'</div>' +
					'</div>' +
					'{{/if}}' +
					'<div class="b-contextualhover-section">' +
					'<div class="b-contextualhover-title">' +
						'<h3>{{html title.title}}</h3>' +
						'{{each headLinks}}' +
								'<p>{{if $value.url}}<a href="${$value.url}">${$value.text}</a>' +
								'{{else}}{{html $value}}{{/if}}</p>' + 
						'{{/each}}' +
					'</div>' +
					'{{each(i, group) linkGroups}}' +
						'{{if group.length }}' +
						'<ul class="b-contextualhover-options">' +
							'{{each group}}<li>' +
								'{{if $value.url}}<a href="${$value.url}">${$value.text}</a>' +
								'{{else}}{{html $value}}{{/if}}' +
							'</li>{{/each}}' +
						'</ul>' +
						'{{/if}}' +
					'{{/each}}' +
					'{{if showBanOptions }}' +
					'<ul class="b-contextualhover-options">' +
						'{{if reportBot}}<li><a href="${reportBot.url}">${reportBot.text}</a></li>{{/if}}' +
						'<li class="b-contextualhover-options-ban">' +
							'<p>${banUsersLink.text}:</p>' +
							'{{if banCheckboxes}}<div class="b-contextualhover-options-wrap">' +
								'{{each banCheckboxes}}' +
								'<p><label><input type="checkbox" class="input-checkbox ${$value.className}" {{if $value.checked}}checked{{/if}} /> ${$value.label}</label></p>' +
								'{{/each}}' +
							'</div>{{/if}}' +
						'</li>' +
					'</ul>' +
					'{{/if}}' +
					'</div>'
		},

		init: function() {
			var wrapper = jQuery(this.templates.wrapper),
				self = this;

			this.element = jQuery(wrapper).bubble({
				// showDelay: 500,
				closeControl: false,
				// showOn: 'hover',
				hide: function() {
					ContextualPopup.hideHourglass();
				},
				classNames: {
					containerAddClass: this.classNames.popup
				}
			});

			this.bindShowHideEvents(this.element.closest(this.selectors.bubble));
		},

		bindShowHideEvents: function(el) {
			var self = this;
			el = jQuery(el);

			el.bind('mouseenter', function(ev) { self.show(); });
			el.bind('mouseleave', function(ev) { self.hide(); });
		},

		show: function(force) {
			this.setVisibile(true, force);
		},

		hide: function(force) {
			this.setVisibile(false, force);
		},

		setVisibile: function(isVisible, force) {
			var action = isVisible ? "show" : "hide",
				self = this;

			force = force || false;
			clearTimeout(this.popupTimer);

			if (force) {
				this.element.bubble(action);
			} else {
				this.popupTimer = setTimeout(function() {
					self.element.bubble(action);
				}, this.popupDelay);
			}
		},

		/**
		 * Constructs object, passes it to the template,
		 * inserts it in the bubble and binds events.
		 *
		 * @param {Object} data Object returned from the endpoint.
		 * @param {String} ctxPopupId The id of the user.
		 */
		render: function(data, ctxPopupId) {
			if (!data) {
				this.element.empty().append(this.templates.loading);
				return;
			} else if (!data.username || !data.success || data.noshow) {
				this.hide(true);
				return;
			}

			var buildObject = {
				headLinks: [],
				linkGroups: []
			};

			if (data.url_userpic && data.url_userpic != ctxPopupId) {
				buildObject.userpic = {
					allpics: data.url_allpics,
					pic: data.url_userpic
				};
			}

			// relation
			var label, username = '<strong>' + data.display_username + ' </strong>';
			if (data.is_comm) {
				if (data.is_member)
					label = data.ml_you_member.replace('[[username]]', username);
				else if (data.is_friend)
					label = data.ml_you_watching.replace('[[username]]', username);
				else
					label = username;
			} else if (data.is_syndicated) {
				if (data.is_friend)
						label = data.ml_you_subscribed.replace('[[username]]', username);
				else
					label = username;
			} else {
				if (data.is_requester) {
					label = data.ml_this_is_you;
				} else {
					label = username;
					
					if (data.is_friend_of) {
						if (data.is_friend)
							label += data.ml_mutual_friend;
						else
							label += data.ml_lists_as_friend;
					} else if (data.is_friend) {
						label += data.ml_your_friend;
					}
				}
			}

			buildObject.title = {
				title: label
			};

			// aliases
			if (!data.is_requester && data.is_logged_in) {
				if (data.alias_enable) {
					if (data.alias) {
						buildObject.headLinks.push('<i>' + data.alias.encodeHTML() + '</i>');
					}
					
					buildObject.headLinks.push({
						url: Site.siteroot + '/manage/notes.bml',
						click: function(e)
						{
							e.preventDefault();
							addAlias(this, data.alias_title, data.username, data.alias || '');
						},
						text: data.alias_title
					});
				} else {
					buildObject.headLinks.push(
						'<span class="alias-unavailable">'+
							'<a href="'+Site.siteroot+'/manage/account">'+
								'<img src="'+Site.statprefix+'/horizon/upgrade-paid-icon.gif?v=2621" width="13" height="16" alt=""/>'+
							'</a> '+
							'<a href="'+Site.siteroot+'/support/faqbrowse.bml?faqid=295">'+data.alias_title+'</a>'+
						'</span>');
				}
			}

			// add/remove friend link
			if (data.is_logged_in && !data.is_requester) {
				buildObject.headLinks.push({
					selector: 'a[href="{url}"]:first',
					url: data.url_addfriend,
					click: function(e)
					{
						e.preventDefault();
						e.stopPropagation();
						ContextualPopup.changeRelation(data, ctxPopupId, data.is_friend ? 'removeFriend' : 'addFriend', e);
					},
					text: function()
					{
						if (data.is_comm)
							return data.is_friend ? data.ml_stop_community : data.ml_watch_community;
						else if (data.is_syndicated)
							return data.is_friend ? data.ml_unsubscribe_feed : data.ml_subscribe_feed;
						else
							return data.is_friend ? data.ml_remove_friend : data.ml_add_friend;
					}()
				});

				if (data.is_friend && !data.is_identity) {
					buildObject.headLinks.push({
						url: data.url_addfriend,
						text: data.ml_edit_friend_tags
					});
				}
			}

			var linkGroup = [];
			
			// member of community
			if (data.is_logged_in && data.is_comm) {
				linkGroup.push({
					selector: 'a[href="{url}"]',
					url: data.is_member ? data.url_leavecomm : data.url_joincomm,
					text: data.is_member ? data.ml_leave : data.ml_join_community,
					click: function(e)
					{
						e.preventDefault();
						ContextualPopup.changeRelation(data, ctxPopupId, data.is_member ? 'leave' : 'join', e);
					}
				});
			}

			//filter community
			if( ( !data.is_comm && Site.current_journal && ( "is_comm" in Site.current_journal ) 
						&& Site.current_journal.is_comm === "1" ) || data.posted_in ) {
				linkGroup.push({
					url: ( ( data.posted_in ) ? data.posted_in : Site.current_journal.url_journal ) + '/?poster=' + data.username,
					text: ( Site.remoteUser === data.username && !data.posted_in ) 
							? ( data.ml_filter_by_poster_me || 'Filter community by me' ) 
							: ( data.ml_filter_by_poster || 'Filter community by poster' )
				});
			}

			buildObject.linkGroups.push(linkGroup);
			linkGroup = [];

			// send message
			if (data.is_logged_in && data.is_person && ! data.is_requester && data.url_message) {
				linkGroup.push({
					url: data.url_message,
					text: data.ml_send_message
				});
			}

			// vgift
			if ((data.is_person || data.is_comm) && !data.is_requester && data.can_receive_vgifts) {
				linkGroup.push({
					url: Site.siteroot + '/shop/vgift.bml?to=' + data.username,
					text: data.ml_send_gift
				});
			}

			// wishlist
			// commented according to task LJSUP-11396
			// if ((data.is_person || data.is_comm) && !data.is_requester && data.wishlist_url) {
			// 	linkGroup.push({
			// 		url: data.wishlist_url,
			// 		text: data.ml_view_wishlist
			// 	});
			// }

			// buy the same userhead
			if (data.is_logged_in && data.is_person && ! data.is_requester && data.is_custom_userhead) {
				linkGroup.push((data.is_app_userhead) ?
						{ url: data.url_userhead_install, text: data.ml_userhead_install } :
						{ url: data.url_buy_userhead, text: data.ml_buy_same_userhead }
				);
			}

			// identity
			if (data.is_identity && data.is_requester) {
				linkGroup.push({
					url: Site.siteroot + '/identity/convert.bml',
					text: data.ml_upgrade_account
				});
			}

			// add site-specific content here
			var extraContent = LiveJournal.run_hook('ctxpopup_extrainfo', data);
			if (extraContent) {
				linkGroup.push(extraContent);
			}

			buildObject.linkGroups.push(linkGroup);

			if (data.is_logged_in && !data.is_requester && !data.is_comm && !data.is_syndicated) {
				buildObject.showBanOptions = true;
				buildObject.banUsersLink = {
					url: Site.siteroot + '/manage/banusers.bml',
					text: data.ml_ban
				};

				// ban/unban
				buildObject.banCheckboxes = [];
				buildObject.banCheckboxes.push({
					selector: '.ban_user',
					className: 'ban_user',
					label: data.ml_ban_in_my,
					checked: data.is_banned,
					change: function(e)
					{
						e.preventDefault();
						ContextualPopup.changeRelation(data, ctxPopupId, data.is_banned ? 'setUnban' : 'setBan', e);
					}
				});

				// report a bot
				if (!Site.remote_is_suspended) {
					buildObject.reportBot = {
						url: Site.siteroot + '/abuse/bots.bml?user=' + data.username,
						text: data.ml_report
					};
				}

				// ban user from all maintained communities
				if (!data.is_requester && !data.is_comm && !data.is_syndicated && data.have_communities) {
					buildObject.banCheckboxes.push({
						selector: '.ban_everywhere',
						className: 'ban_everywhere',
						label: data.ban_everywhere_title,
						checked: data.is_banned_everywhere,
						change: function(e)
						{
							e.preventDefault();
							var action = data.is_banned_everywhere ? 'unbanEverywhere' : 'banEverywhere';
							ContextualPopup.changeRelation(data, ctxPopupId, action, e);
						}
					});
				}
			}

			var userType = 'guest';
			if (!data.is_logged_in) { //  anonymous
				userType = 'anonymous';
			} else if (data.is_requester) { // self
				userType = 'self';
			}

			new Image().src = this.adriverImages[userType].supplant({ random: Math.random()});

			this.element
				.empty()
				.append(jQuery.tmpl(this.templates.content, buildObject));

			if (this.element.is(':visible')) {
				//show method forces bubble to reposition with respect to the new content
				this.element.bubble('updatePosition');
			}

			this.setPopupEvents(buildObject);
		},

		/**
		 * Go through all build objects and find all callbacks that should be bound 
		 * to the node events.
		 *
		 * @param {Object} buildObject Template object.
		 */
		setPopupEvents: function(buildObject) {
			var element = this.element;
			element.undelegate();

			function walkObject(obj) {
				$.each(obj, function(key, value) {
					var selector;

					if (value.click) {
						//default handler is by url
						var selector = value.selector || '[href="' + value.url + '"]';
						selector = selector.supplant(value);
						element.delegate(selector, 'click', value.click);
					}

					if (value.change) {
						//for checkboxes selector should present anyway
						var selector = value.selector;
						selector = selector.supplant(value);
						element.delegate(selector, 'change', value.change);
					}

					//maybe this object has children with events to be set
					if(typeof value === "object") {
						walkObject(value);
					}
				});
			}

			walkObject(buildObject);
		}
	};

	window.ContextualPopup = {
		cachedResults  : {},
		currentRequests: {},
		currentId      : null,
		currentElement : null,
		hourglass      : null,

		setup: function() {
			// don't do anything if no remote
			if (!Site.ctx_popup) return;

			popup.init();
			jQuery(document.body)
				.mouseover(ContextualPopup.mouseOver)
				.ljAddContextualPopup();
		},

		/**
		 * Search child nodes and bind hover events on them if needed.
		 */
		searchAndAdd: function(node) {
			if (!Site.ctx_popup) return;

			// attach to all ljuser head icons
			var rex_userid = /\?userid=(\d+)/,
				rex_userpic = /(userpic\..+\/\d+\/\d+)|(\/userpic\/\d+\/\d+)/,
				class_nopopup = 'noctxpopup',
				ljusers = jQuery('span.ljuser>a>img', node),
				i = -1, userid, ljuser, parent;

			// use while for speed
			while (ljusers[++i]) {
				ljuser = ljusers[i];
				parent = ljuser.parentNode;

				if (parent.href && (userid = parent.href.match(rex_userid)) && !(parent.className.indexOf(class_nopopup) >= 0)) {
					ljuser.userid = userid[1];
				} else if (parent.parentNode.getAttribute('lj:user')) {
					ljuser.username = parent.parentNode.getAttribute('lj:user');
				} else {
					continue;
				}

				if (parent.parentNode.getAttribute('data-journal')) {
					ljuser.posted_in = parent.parentNode.getAttribute('data-journal');
				}
				ljuser.className += ' ContextualPopup';
			}
			
			ljusers = node.getElementsByTagName('img');
			i = -1;
			while (ljusers[++i]) {
				ljuser = ljusers[i];
				if (ljuser.src.match(rex_userpic) && !(ljuser.className.indexOf(class_nopopup) >= 0)) {
					ljuser.up_url = ljuser.src;
					if (ljuser.parentNode.getAttribute('data-journal')) {
						ljuser.posted_in = ljuser.parentNode.getAttribute('data-journal');
					}
					ljuser.className += ' ContextualPopup';
				}
			}
		},

		mouseOver: function(e) {
			var target = e.target,
				ctxPopupId = target.username || target.userid || target.up_url,
				t = ContextualPopup;

			if (target.tagName == 'IMG' && ctxPopupId) {
				// if we don't have cached data background request it
				if (!t.cachedResults[ctxPopupId]) {
					t.getInfo(target, ctxPopupId);
				}

				// doesn't display alt as tooltip
				if (jQuery.browser.msie && target.title !== undefined) {
					target.title = '';
				}

				// show other popup
				if (t.currentElement != target) {
					t.showPopup(ctxPopupId, target);
				} else {
					popup.show();
				}
			}
		},

		showPopup: function(ctxPopupId, ele) {
			var showNow = popup.element.is(':visible');

			jQuery(this.currentElement)
				.unbind('mouseenter mouseleave');

			this.currentId = ctxPopupId;
			var data = this.cachedResults[ctxPopupId];

			if (data && data.noshow) return;
			if (this.currentElement && this.currentElement !== ele) {
				popup.hide(true);
			}

			if (data && data.error) {
				popup.hide(true);
				ContextualPopup.showNote(data.error, ele);
				return;
			}

			popup.render(data, ctxPopupId);
			popup.element.bubble('option', 'target', jQuery(ele));
			popup.bindShowHideEvents(ele);
			popup.show(showNow);
			this.currentElement = ele;
		},

		renderPopup: function(ctxPopupId) {
			popup.render(this.cachedResults[ctxPopupId], ctxPopupId)
		},

		// ajax request to change relation
		changeRelation: function (info, ctxPopupId, action, e) {
			var changedRelation = function(data)
			{
				if (data.error) {
					return ContextualPopup.showNote(data.error);
				}
				
				if (ContextualPopup.cachedResults[ctxPopupId]) {
					jQuery.extend(ContextualPopup.cachedResults[ctxPopupId], data);
				}
				
				// if the popup is up, reload it
				ContextualPopup.renderPopup(ctxPopupId);
			}
			
			var xhr = jQuery.post(LiveJournal.getAjaxUrl('changerelation'),
						{
							target: info.username,
							action: action,
							auth_token: info[action + '_authtoken']
						},
						function(data)
						{
							ContextualPopup.hourglass = null;
							changedRelation(data);
						},
						'json'
					);
			
			ContextualPopup.hideHourglass();
			ContextualPopup.hourglass = jQuery(e).hourglass(xhr)[0];
			//entering mouse on the hourglass should no close popup
			jQuery(ContextualPopup.hourglass.ele).bind('mouseenter', function(ev) {
				popup.element.trigger('mouseenter');
			});
			// so mousing over hourglass doesn't make ctxpopup think mouse is outside
			ContextualPopup.hourglass.add_class_name('lj_hourglass');
			
			return false;
		},

		// create a little popup to notify the user of something
		showNote: function (note, ele) {
			ele = ele || popup.element[0];
			LJ_IPPU.showNote(note, ele);
		},

		cleanCache: function(keys) {
			var self = this;

			keys = keys || [];
			if (typeof keys === 'string') {
				keys = [ keys ];
			}

			keys.forEach(function(key) {
				if (self.cachedResults[key]) {
					delete self.cachedResults[key];
				}
			});
		},

		// do ajax request of user info
		getInfo: function(target, popup_id) {
			var t = this;
			if (t.currentRequests[popup_id]) {
				return;
			}
			t.currentRequests[popup_id] = 1;

			var reqParams = {
				user: target.username || ''
			};

			jQuery.ajax({
				url: LiveJournal.getAjaxUrl('ctxpopup'),
				data: Object.extend( reqParams, {
					userid: target.userid || 0,
					userpic_url: target.up_url || '',
					mode: 'getinfo'
				}),
				dataType: 'json',
				success: function(data)
				{
					if (data.error) {
						data.username = reqParams.user;
						t.cachedResults[data.username] = data;
						popup.hide(true);
						t.showNote(data.error, target);
						return;
					}

					if( target.posted_in ) {
						data.posted_in = target.posted_in;
					}
					
					t.cachedResults[String(data.userid)] =
					t.cachedResults[data.username] =
					t.cachedResults[data.url_userpic] = data;
					
					// non default userpic
					if (target.up_url) {
						t.cachedResults[target.up_url] = data;
					}
					
					t.currentRequests[popup_id] = null;
					
					if (t.currentId == popup_id) {
						t.renderPopup(popup_id);
					}
				},
				error: function()
				{
					t.currentRequests[popup_id] = null;
				}
			});
		},

		hideHourglass: function () {
			if (this.hourglass) {
				this.hourglass.hide();
				this.hourglass = null;
			}
		}
	};

})(jQuery);


// when page loads, set up contextual popups
jQuery(ContextualPopup.setup);

jQuery(function() {
	var fbInput = $('repost_facebook'),
		thumb = $('repost_facebook_thumbnail'),
		selectUpdate = $('select-fb-thumbnail'),
		selectComments = $('select-fb-thumbnail-comments'),
		userPic = $('userpic_preview_image'),
		selectWindow = $('fbimg_select_window'),
		selectNav = $('fbimg_select_window_nav'),
		select = selectUpdate || selectComments;

	var noThumb = "nothumb";
	var userpicVal = "userpic";

	if(select == null) {
		return;
	}

	var options = {};
	if(selectUpdate) {
		options = {
			getText: function() {
				if(window.switchedRteOn){
					return CKEDITOR.instances.draft.getData();
				} else {
					return jQuery('#draft').val();
				}
			},
			getUserPic: function() {
				return (userPic) ? userPic.src : "";
			}
		};
	}
	else {
		options = {
			getText: function() {
				var txtArea = $('commenttext') || $('body');
				return txtArea.value;
			},
			getUserPic: function() {
				var upicSelect = jQuery('#userpics > [name=prop_picture_keyword]');
				if(upicSelect.length == 0) {
					upicSelect = jQuery('#prop_picture_keyword');
				}

				if(upicSelect.length == 0) {
					return "";
				}

				var val = upicSelect.val();

				if(val in userpicmap) {
					return userpicmap[val];
				}

				return defaultpicurl || "";
			}
		};
	}

	var selectPopup = {
		init: function() {
			this.opened = false;
			this.page = 1;
			this.totalImages = 1;
			this.pager = {
				prev: jQuery(selectNav).children('.i-repost-nav-prev'),
				next: jQuery(selectNav).children('.i-repost-nav-next'),
				counter: jQuery(selectNav).children('.i-repost-nav-counter')
			};
			this.listWrapper = jQuery(selectWindow).children('.b-repost-pics-wrapper');
			this.list = this.listWrapper.children('.b-repost-pics-items');
			this.pagerSize = 4;
			this.pagesNum = 1;
			this.cellWidth = 0;

			this.pager.prev.click(function(){ selectPopup.changePage(-1)});
			this.pager.next.click(function(){ selectPopup.changePage(1)});

			this.firstLi = this.list.children('span:first').click(function() {
					selectPopup.setPicture(noThumb);
			});
		},

		setPicture: function(url) {
			thumb.value = url;
			this.close();
		},

		updatePager: function() {
			selectNav.style.display = (this.totalImages < this.pagerSize)?"none":"block";
			this.pager.prev[(this.page == 1)?"addClass":"removeClass"]('i-repost-nav-prev-dis');
			this.pager.next[(this.page == this.pagesNum)?"addClass":"removeClass"]('i-repost-nav-next-dis');

			this.pager.counter.html(this.page + '/' + this.pagesNum);
		},

		makeListItem: function(url, value, selected) {
			var selClass = (selected)?"b-repost-pics-active":"";

			return jQuery('<span>')
				.addClass(selClass)
				.append ( jQuery('<img>').attr('src', url) )
				.click(function () { selectPopup.setPicture(value) });
		},

		open: function(imgList) {
			this.list.children('span:gt(0)').remove();
			this.totalImages = imgList.length;
			this.page = 1;

			if((imgList.length == 0 || jQuery.inArray(thumb.value, imgList) == -1) && thumb.value != userpicVal && thumb.value != noThumb) {
				thumb.value = "";
			}

			var upicurl = options.getUserPic();
			if(upicurl.length > 0) {
				var userPicImg = upicurl;
				this.makeListItem(userPicImg, userpicVal, userpicVal == thumb.value).appendTo(this.list);
				this.totalImages++;
			}
			this.pagesNum = Math.ceil((this.totalImages + 1) / this.pagerSize);

			if(this.totalImages > 1 && thumb.value == "") {
				thumb.value = imgList[0];
			}

			var selected = "",
				currentPageNum = 1;
			for(var i=0; i < imgList.length; ++i) {
				if( imgList[i] == thumb.value ) {
					currentPageNum = Math.floor( (i + 1 + ((upicurl.length > 0)? 1 : 0)) / this.pagerSize ) + 1;
				}
				this.makeListItem(imgList[i], imgList[i], imgList[i] == thumb.value).appendTo(this.list);
			}

			this.firstLi[((this.totalImages <= 1 && thumb.value == "") || thumb.value == noThumb)?"addClass":"removeClass"]("b-repost-pics-active");

			selectWindow.style.display = 'block';
			this.opened = true;

			this.firstLi.each(function() {
				selectPopup.cellWidth = this.offsetWidth + this.offsetLeft; //calc cell width there because it's not visible on init
			});

			var wrapperWidth = (this.pagerSize > this.totalImages) ? (this.cellWidth * (this.totalImages + 1)) + "px" : "";
			this.listWrapper.css('width', wrapperWidth);
			this.changePage(currentPageNum - 1); // default page is number one, subtracting
		},

		changePage: function(num)
		{
			this.page += num;
			this.page = (this.page < 1)? 1:
						((this.page > this.pagesNum) ? this.pagesNum : this.page);

			var offset =  - this.cellWidth * (this.page - 1) * this.pagerSize;
			this.list.css('left', offset + "px");

			this.updatePager();
		},

		close: function() {
			selectWindow.style.display = 'none';
			this.opened = false;
		}
	}

	selectPopup.init();
	selectWindow.onmousedown = function(event) {
		event = event || window.event;
		if (event.stopPropagation) event.stopPropagation(); else event.cancelBubble = true;
	};

	function extractImageUrls(arr, text)
	{
		jQuery('<div>' + text + "</div>").find("img").each(function() {
				arr.push(this.src);
		});
	}

	function closeSelWindow(ev)
	{
		selectPopup.close();
	}

	select.onmousedown = function(ev) {
		ev = ev || window.event;

		if(!selectPopup.opened) {
			return;
		}

		if (ev.stopPropagation) ev.stopPropagation(); else ev.cancelBubble = true;
	};

	select.onclick = function(ev) {
		ev = ev || window.event;
		var urls = [];

		if(fbInput.getAttribute('disabled') === null || fbInput.getAttribute('disabled') === false) {
			if(selectPopup.opened) {
				closeSelWindow();
			}
			else {
				urls.length=0;
				extractImageUrls(urls, options.getText());
				selectPopup.open(urls);
				setTimeout(function() {	DOM.addEventListener(document, 'mousedown', closeSelWindow, false); }, 0);
			}
		}

		if(ev.preventDefault) {
			ev.preventDefault();
		}
		else {
			ev.returnValue = false;
		}
	}
});

QuickReply = {
	lastDiv: 'qrdiv',
	
	reply: function(dtid, pid, newsubject)
	{
		var targetname = 'ljqrt' + dtid,
			targetcomment = 'ljcmt' + dtid,
			qr_ptid = $('parenttalkid'),
			qr_rto = $('replyto'),
			qr_dtid = $('dtid'),
			qr_div = $('qrdiv'),
			cur_div = $(targetname),
			qr_form_div = $('qrformdiv'),
			qr_form = $('qrform'),
			subject = $('subject');
		
		// Is this a dumb browser?
		if (!qr_ptid || !qr_rto || !qr_dtid || !qr_div || !cur_div || !qr_form || !qr_form_div || !subject) {
			return true;
		}
		
		qr_ptid.value = pid;
		qr_dtid.value = dtid;
		qr_rto.value = pid;
		
		if (QuickReply.lastDiv == 'qrdiv') {
			qr_div.style.display = 'inline';
			// Only one swap
		} else if (QuickReply.lastDiv != dtid) {
		}

		var comments = $('comments'),
			targetcomment = $(targetcomment);

		//LJSUP-11059: when we show old style entry page, comment form should be placed under comment with
		//shift according to its depth.
		if (!comments || comments.className.indexOf('entry-comments-s1') === -1 || !targetcomment) {
			cur_div.parentNode.insertBefore(qr_div, cur_div);
		} else {
			targetcomment.appendChild(qr_div);
		}
		
		QuickReply.lastDiv = targetname;
		
		if (!subject.value || subject.value == subject.defaultValue || subject.value.substr(0, 4) == 'Re: ') {
			subject.value = newsubject;
			subject.defaultValue = newsubject;
		}
		
		qr_form_div.className = cur_div.className || '';
		
		// have to set a timeout because most browsers won't let you focus
		// on an element that's still in the process of being created.
		// so lame.
		window.setTimeout(function(){ qr_form.body.focus() }, 100);
		
		return false;
	},
	
	more: function()
	{
		var qr_form = $('qrform'),
			basepath = $('basepath'),
			dtid = $('dtid'),
			pidform = $('parenttalkid');
		
		// do not do the default form action (post comment) if something is broke
		if (!qr_form || !basepath || !dtid || !pidform) {
			return false;
		}
		
		if(dtid.value > 0 && pidform.value > 0) {
			//a reply to a comment
			qr_form.action = basepath.value + "replyto=" + dtid.value + "#add_comment";
		} else {
			qr_form.action = basepath.value + "mode=reply#add_comment";
		}
		
		// we changed the form action so submit ourselves
		// and don't use the default form action
		qr_form.submit();
		return false;
	},
	
	submit: function()
	{
		var submitmore = $('submitmoreopts'),
			submit = $('submitpost');
		
		if (!submitmore || !submit) {
			return false;
		}
		
		submit.disabled = true;
		submitmore.disabled = true;
		
		// New top-level comments
		var dtid = $('dtid');
		if (!Number(dtid.value)) {
			dtid.value =+ 0;
		}
		
		var qr_form = $('qrform');
		qr_form.action = Site.siteroot + '/talkpost_do.bml';
		qr_form.submit();
		
		// don't do default form action
		return false;
	},
	
	check: function()
	{
		var qr_form = $('qrform');
		if (!qr_form) return true;
		var len = qr_form.body.value.length;
		if (len > 4300) {
			alert('Sorry, but your comment of ' + len + ' characters exceeds the maximum character length of 4300. Please try shortening it and then post again.');
			return false;
		}
		return true;
	},
	
	// Maintain entry through browser navigations.
	save: function()
	{
		var qr_form = $('qrform');
		if (!qr_form) {
			return false;
		}
		var do_spellcheck = $('do_spellcheck'),
			qr_upic = $('prop_picture_keyword');
		
		$('saved_body').value = qr_form.body.value;
		$('saved_subject').value = $('subject').value;
		$('saved_dtid').value = $('dtid').value;
		$('saved_ptid').value = $('parenttalkid').value;
		
		if (do_spellcheck) {
			$('saved_spell').value = do_spellcheck.checked;
		}
		if (qr_upic) { // if it was in the form
			$('saved_upic').value = qr_upic.selectedIndex;
		}
		
		return false;
	},
	
	// Restore saved_entry text across platforms.
	restore: function()
	{
		setTimeout(function(){
			var saved_body = $('saved_body'),
				dtid = $('saved_dtid'),
				subject = $('saved_subject'),
				subject_str = '',
				qr_form = $('qrform');
			if (!saved_body || saved_body.value == '' || !qr_form || !dtid) {
				return;
			}
			
			if (subject) {
				subject_str = subject.value;
			}
			
			QuickReply.reply(dtid.value, parseInt($('saved_ptid').value, 10), subject_str);
			
			qr_form.body.value = saved_body.value;
			
			// if it was in the form
			var upic = $('prop_picture_keyword');
			if (upic) {
				upic.selectedIndex = $('saved_upic').value;
			}
			
			var spellcheck = $('do_spellcheck');
			if (spellcheck) {
				spellcheck.checked = $('saved_spell').value == 'true';
			}
		}, 100);
	},
	
	userpicSelect: function()
	{
		var ups = new UserpicSelect();
		ups.init();
		ups.setPicSelectedCallback(function(picid, keywords)
		{
			var kws_dropdown = $('prop_picture_keyword');
			
			if (kws_dropdown) {
				var items = kws_dropdown.options;
				
				// select the keyword in the dropdown
				keywords.forEach(function(kw)
				{
					for (var i = 0; i < items.length; i++) {
						var item = items[i];
						if (item.value == kw) {
							kws_dropdown.selectedIndex = i;
							return;
						}
					}
				});
			}
		});
		ups.show();
	}
}

jQuery(QuickReply.restore);
DOM.addEventListener(window, 'unload', QuickReply.save);

Expander = function(){
    this.__caller__;    // <a> HTML element from where Expander was called
    this.url;           // full url of thread to be expanded
    this.id;            // id of the thread
    this.stored_caller;
    this.iframe;        // iframe, where the thread will be loaded
    this.is_S1;         // bool flag, true == journal is in S1, false == in S2
}
Expander.Collection={};
Expander.make = function(el,url,id,is_S1){
    var local = (new Expander).set({__caller__:el,url:url.replace(/#.*$/,''),id:id,is_S1:!!is_S1});
    local.get();
}

Expander.prototype.set = function(options){
    for(var opt in options){
        this[opt] = options[opt];
    }
    return this;
}

Expander.prototype.getCanvas = function(id,context){
    return context.document.getElementById('ljcmt'+id);
}

Expander.prototype.parseLJ_cmtinfo = function(context,callback){
    var map={}, node, j;
    var LJ = context.LJ_cmtinfo;
    if(!LJ)return false;
    for(j in LJ){
        if(/^\d*$/.test(j) && (node = this.getCanvas(j,context))){
            map[j] = {info:LJ[j],canvas:node};
            if(typeof callback == 'function'){
                callback(j,map[j]);
            }
        }
    }
    return map;
}

Expander.prototype.loadingStateOn = function(){
    this.stored_caller = this.__caller__.cloneNode(true);
    this.__caller__.setAttribute('already_clicked','already_clicked');
    this.__caller__.onclick = function(){return false}
    this.__caller__.style.color = '#ccc';
}

Expander.prototype.loadingStateOff = function(){
    if(this.__caller__){
        // actually, the <a> element is removed from main window by
        // copying comment from ifame, so this code is not executed (?)
        this.__caller__.removeAttribute('already_clicked','already_clicked');
        if(this.__caller__.parentNode) this.__caller__.parentNode.replaceChild(this.stored_caller,this.__caller__);
    }
    var obj = this;
    // When frame is removed immediately, IE raises an error sometimes
    window.setTimeout(function(){obj.killFrame()},100);
}

Expander.prototype.killFrame = function(){
    document.body.removeChild(this.iframe);
}

Expander.prototype.isFullComment = function(comment){
    return !!Number(comment.info.full);
}

Expander.prototype.killDuplicate = function(comments){
    var comment;
    var id,id_,el,el_;
    for(var j in comments){
        if(!/^\d*$/.test(j))continue;
        el_ = comments[j].canvas;
        id_ = el_.id;
        id = id_.replace(/_$/,'');
        el = document.getElementById(id);
        if(el!=null){
            //in case we have a duplicate;
            el_.parentNode.removeChild(el_);
        }else{
            el_.id = id;
            window.ContextualPopup && ContextualPopup.searchAndAdd(el_);
            window.setupAjax && setupAjax(el_);
            window.ESN && ESN.initTrackBtns(el_);
        }
    }
}

Expander.prototype.getS1width = function(canvas){
  //TODO:  may be we should should add somie ID to the spacer img instead of searching it
  //yet, this works until we have not changed the spacers url = 'dot.gif');
  var img, imgs;
  imgs = canvas.getElementsByTagName('img');
  for(var j=0;j<imgs.length;j++){
    img=imgs[j];
    if(/dot\.gif$/.test(img.src)){
        if (img.width) { return Number(img.width); }
        break;
    }
  }
  return false;
}

Expander.prototype.setS1width = function(canvas,w){
  var img, imgs;
  imgs = canvas.getElementsByTagName('img');
  for(var j=0;j<imgs.length;j++){
    img=imgs[j];
    if(/dot\.gif$/.test(img.src)){
        img.setAttribute('width',w);
        break;
    }
  }
}

Expander.prototype.onLoadHandler = function(iframe){
        var doc = iframe.contentDocument || iframe.contentWindow;
        doc = doc.document||doc;
        var obj = this;
        var win = doc.defaultView||doc.parentWindow;
        var comments_intersection={};
        var comments_page = this.parseLJ_cmtinfo(window);
        var comments_iframe = this.parseLJ_cmtinfo(win,function(id,new_comment){
                                    if(id in comments_page){
                                        comments_page[id].canvas.id = comments_page[id].canvas.id+'_';
                                        comments_intersection[id] = comments_page[id];
                                        // copy comment from iframe to main window if
                                        // 1) the comment is collapsed in main window and is full in iframe
                                        // 2) or this is the root comment of this thread (it may be full in
                                        //     main window too, it's copied so that to remove "expand" link from it)
                                        if((!obj.isFullComment(comments_page[id]) && obj.isFullComment(new_comment)) || (id===obj.id)){
                                            var w;
                                            if(obj.is_S1){
                                                w =obj.getS1width(comments_page[id].canvas);
                                            }
                                            comments_page[id].canvas.innerHTML = new_comment.canvas.innerHTML;
                                            if(obj.is_S1 && w!==false){
                                                    obj.setS1width(comments_page[id].canvas,w);
                                            }
                                            //TODO: may be this should be uncommented
                                            //comments_page[id].canvas.className = new_comment.canvas.className;
                                            LJ_cmtinfo[id].full=1;
                                            LJ_cmtinfo[id].expanded=1;
                                        }
                                    }//if(id in comments_page){
                                });
       this.killDuplicate(comments_intersection);
       this.loadingStateOff();
       return true;
}


//just for debugging
Expander.prototype.toString = function(){
    return '__'+this.id+'__';
}


Expander.prototype.get = function(){
    if(this.__caller__.getAttribute('already_clicked')){
        return false;
    }
    this.loadingStateOn();

    var iframe;
    if(/*@cc_on !@*/0){
        // branch for IE
        Expander.Collection[this.id] = this;
        iframe = document.createElement('<iframe onload="Expander.Collection['+this.id+'].onLoadHandler(this)">');
    }else{
        // branch for all other browsers
        iframe = document.createElement('iframe');
        iframe.onload = function(obj){return function(){
                            obj.onLoadHandler(iframe);
                        }}(this);
    }
    iframe.style.height='1px';
    iframe.style.width='1px';
    iframe.style.display = 'none';
    iframe.src = this.url;
    iframe.id = this.id;
    document.body.appendChild(iframe);
    this.iframe=iframe;
    return true;
};

/*
 * ExpanderEx object is used in s1 style comment pages and provides
 * ajax functionality to expand comments instead of loading iframe page as it is
 * in old Expander
 * expander object is also used in commentmanage.js
 */
ExpanderEx = function(){
    this.__caller__;    // <a> HTML element from where ExpanderEx was called
    this.url;           // full url of thread to be expanded
    this.id;            // id of the thread
    this.stored_caller;
    this.is_S1;         // bool flag, true == journal is in S1, false == in S2
}
ExpanderEx.Collection={};
ExpanderEx.ReqCache = {};

ExpanderEx.make = function(ev,el,url,id,is_S1){
    var local = (new ExpanderEx).set({__caller__:el,url:url.replace(/#.*$/,''),id:id,is_S1:!!is_S1});
    local.get();
    jQuery.event.fix(ev).preventDefault();
}

ExpanderEx.collapse = function(ev,el,url,id,is_S1){
    var local = (new ExpanderEx).set({__caller__:el,url:url.replace(/#.*$/,''),id:id,is_S1:!!is_S1});
    local.collapseThread();
    jQuery.event.fix(ev).preventDefault();
}

ExpanderEx.prototype.set = function(options){
    for(var opt in options){
        this[opt] = options[opt];
    }
    return this;
}

ExpanderEx.prototype.getCanvas = function(id,context){
    return context.document.getElementById('ljcmt'+id);
}

ExpanderEx.prototype.parseLJ_cmtinfo = function(context,callback){
    var map={}, node, j;
    var LJ = context.LJ_cmtinfo;
    if(!LJ)return false;
    for(j in LJ){
        if(/^\d*$/.test(j) && (node = this.getCanvas(j,context))){
            map[j] = {info:LJ[j],canvas:node};
            if(typeof callback == 'function'){
                callback(j,map[j]);
            }
        }
    }
    return map;
}

ExpanderEx.preloadImg = function(){
    (new Image()).src = Site.imgprefix + '/preloader-s.gif?v=9673';
}

ExpanderEx.prototype.addPreloader = function(){
    this.loader = new Image();
    this.loader.src = Site.imgprefix + '/preloader-s.gif?v=9673';
    this.loader.className = 'i-exp-preloader';
    this.__caller__.parentNode.appendChild( this.loader );
}

ExpanderEx.prototype.removePreloader = function(){
    if( !this.loader ){
        return;
    }

    if( this.loader.parentNode ){
        this.loader.parentNode.removeChild( this.loader );
    }
    delete this.loader;
};

ExpanderEx.prototype.loadingStateOn = function(){
    // turn on preloader there
    this.addPreloader();
    this.stored_caller = this.__caller__.cloneNode(true);
    this.__caller__.setAttribute('already_clicked','already_clicked');
    this.__caller__.onclick = function(){return false}
    this.__caller__.style.color = '#ccc';
}

ExpanderEx.prototype.loadingStateOff = function(){
    if(this.__caller__){
        // actually, the <a> element is removed from main window by
        // copying comment from ifame, so this code is not executed (?)
        this.__caller__.removeAttribute('already_clicked','already_clicked');
        if(this.__caller__.parentNode) this.__caller__.parentNode.replaceChild(this.stored_caller,this.__caller__);
        //remove preloader if exist
        this.removePreloader();
    }
    var obj = this;
    // When frame is removed immediately, IE raises an error sometimes
}

ExpanderEx.prototype.killFrame = function(){
    document.body.removeChild(this.iframe);
}

ExpanderEx.prototype.isFullComment = function( comment ) {
    return !!Number(comment.info.full);
}

ExpanderEx.prototype.expandThread = function( json ) {
    this.loadingStateOff();

    //we show expand link if comment block has collapsed children
    function isChildCollapsed( idx )
    {
        var state;
        for( var i = idx + 1; i < json.length; ++i ) {
            state = json[ i ].state;
            if( state === "expanded" ) { return false; }
            if( state === "collapsed" ) { return true; }
        }

        return  false;
    }

    var threadId, cell, html;
    for( var i = 0; i < json.length; ++i ) {
        //we skip comment blocks thate were not expanded
        if( json[ i ].state === 'deleted' ) {
            LJ_cmtinfo[ json[ i ].thread ].is_deleted = true;
        }
		if( !( json[ i ].thread in LJ_cmtinfo ) ) {
			continue;
		}
        if( json[ i ].state && json[ i ].state !== "expanded") {
            continue;
        }

        threadId = json[ i ].thread;
        html = ExpanderEx.prepareCommentBlock( jQuery( json[ i ].html ), threadId, isChildCollapsed( i ) );

        var oldHtml = LiveJournal.CommentManager.updateCell( threadId, html );
        if( !( threadId in ExpanderEx.Collection ) ) {
            ExpanderEx.Collection[ threadId ] = oldHtml;
        }
    }

    //duplicate cycle, because we do not know, that external scripts do with node
    for( var i = 0; i < json.length; ++i ) {
        threadId = json[ i ].thread;
        LJ_cmtinfo[ threadId ].parent = this.id;
        if( json[ i ].state && json[ i ].state === "expanded") {
            this.initCommentBlock( jQuery( '#ljcmt' + threadId )[0] , threadId );
        }
    }

    return true;
}

ExpanderEx.prototype.collapseThread = function( id ){
    var threadId = id || this.id;
    this.collapseBlock( threadId );

    var children = LJ_cmtinfo[ threadId ].rc;
    for( var i = 0; i < children.length; ++i )
        this.collapseThread( children[ i ] );
}

ExpanderEx.prototype.collapseBlock =  function( id )
{
	if( id in ExpanderEx.Collection ) {
		LiveJournal.CommentManager.updateCell( id, ExpanderEx.Collection[ id ] );

		this.initCommentBlock( LiveJournal.CommentManager.getCell( id )[0], id, true );
		delete ExpanderEx.Collection[ id ];
	}
}

ExpanderEx.prototype.initCommentBlock = function( el_, id, restoreInitState )
{
    if( !restoreInitState ){
        LJ_cmtinfo[ id ].oldvars = {
            full: LJ_cmtinfo[ id ].full || 0,
            expanded: LJ_cmtinfo[ id ].expanded || 0
        }
        LJ_cmtinfo[ id ].full = 1;
        LJ_cmtinfo[ id ].expanded = 1;
    }
    else {
        LJ_cmtinfo[ id ].full = LJ_cmtinfo[ id ].oldvars.full;
        LJ_cmtinfo[ id ].expanded = LJ_cmtinfo[ id ].oldvars.expanded;
        delete LJ_cmtinfo[ id ].oldvars;
    }
    window.ContextualPopup && ContextualPopup.searchAndAdd(el_);
    //window.setupAjax && setupAjax(el_, true);
    window.ESN && ESN.initTrackBtns(el_);
}


//just for debugging
ExpanderEx.prototype.toString = function(){
    return '__'+this.id+'__';
}


ExpanderEx.prototype.get = function(){
    if(this.__caller__.getAttribute('already_clicked')){
        return false;
    }
    this.loadingStateOn();

    var obj = this;
    //set timeout to allow browser to display image before request
    setTimeout( function(){
        LiveJournal.CommentManager.getThreadJSON( obj.id, function(result) {
            obj.expandThread(result);
            ExpanderEx.ReqCache[ obj.id ] = result;
        }, false, false, true );
    }, 0 );

    return true;
}

//toggle visibility of expand and collapse links, if server returns
//html with both of them ( with every ajax request)
ExpanderEx.prepareCommentBlock = function(html, id, showExpand){
    this.showExpandLink( id, html, showExpand );
    return html;
}

ExpanderEx.showExpandLink = function ( id, block, showExpand ) {
    var expandSel = "#expand_" + id,
        collapseSel = "#collapse_" + id,
        selector, resetSelector;

    if( LJ_cmtinfo[ id ].has_link > 0 ) {
        if( showExpand ) {
            selector = collapseSel;
            resetSelector = expandSel;
        } else {
            selector = expandSel;
            resetSelector = collapseSel;
        }
        block.find( resetSelector ).css( 'display', '' );
    }
    else {
        selector = collapseSel + "," + expandSel;
    }

    block.find( selector )
        .css( 'display', 'none' );
}

ExpanderEx.preloadImg();

// called by S2:
function setStyle (did, attr, val) {
    if (! document.getElementById) return;
    var de = document.getElementById(did);
    if (! de) return;
    if (de.style)
        de.style[attr] = val
}

// called by S2:
function setInner (did, val) {
    if (! document.getElementById) return;
    var de = document.getElementById(did);
    if (! de) return;
    de.innerHTML = val;
}

// called by S2:
function hideElement (did) {
    if (! document.getElementById) return;
    var de = document.getElementById(did);
    if (! de) return;
    de.style.display = 'none';
}

// called by S2:
function setAttr (did, attr, classname) {
    if (! document.getElementById) return;
    var de = document.getElementById(did);
    if (! de) return;
    de.setAttribute(attr, classname);
}

// called from Page:
function multiformSubmit (form, txt) {
    var sel_val = form.mode.value;
    if (!sel_val) {
        alert(txt.no_action);
        return false;
    }

    if (sel_val.substring(0, 4) == 'all:') { // mass action
        return;
    }

    var i = -1, has_selected = false; // at least one checkbox
    while (form[++i]) {
        if (form[i].name.substring(0, 9) == 'selected_' && form[i].checked) {
            has_selected = true;
            break;
        }
    }
    if (!has_selected) {
        alert(txt.no_comments);
        return false;
    }

    if (sel_val == 'delete' || sel_val == 'deletespam') {
        return confirm(txt.conf_delete);
    }
}

function getLocalizedStr( key, username ) {
    return LiveJournal.getLocalizedStr( key, { username: username } );
}

// hsv to rgb
// h, s, v = [0, 1), [0, 1], [0, 1]
// r, g, b = [0, 255], [0, 255], [0, 255]
function hsv_to_rgb (h, s, v)
{
    if (s == 0) {
	v *= 255;
	return [v,v,v];
    }

    h *= 6;
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - s * f);
    var t = v * (1 - s * (1 - f));

    v = Math.floor(v * 255 + 0.5);
    t = Math.floor(t * 255 + 0.5);
    p = Math.floor(p * 255 + 0.5);
    q = Math.floor(q * 255 + 0.5);

    if (i == 0) return [v,t,p];
    if (i == 1) return [q,v,p];
    if (i == 2) return [p,v,t];
    if (i == 3) return [p,q,v];
    if (i == 4) return [t,p,v];
    return [v,p,q];
}

function deleteComment (ditemid, action) {
	action = action || 'delete';
	
	var curJournal = (Site.currentJournal !== "") ? (Site.currentJournal) : (LJ_cmtinfo.journal);

    var form = $('ljdelopts' + ditemid),
        todel = $('ljcmt' + ditemid),
        opt_delthread, opt_delauthor, is_deleted, is_error,
        pulse = 0,
		url = LiveJournal.getAjaxUrl('delcomment')+'?mode=js&journal=' + curJournal + '&id=' + ditemid;
    
	var postdata = 'confirm=1';
    if (form && action == 'delete') { 
    	if (form.ban && form.ban.checked) {
			postdata += '&ban=1';
		}
    	if (form.spam && form.spam.checked) {
			postdata += '&spam=1';
		}
    	if (form.delthread && form.delthread.checked) {
			postdata += '&delthread=1';
			opt_delthread = true;
		}
    	if (form.delauthor && form.delauthor.checked) {
        	postdata += '&delauthor=1';
        	opt_delauthor = true;
    	}
    } else if (action == 'markAsSpam') {
		opt_delauthor = opt_delthread = true;
		postdata += '&ban=1&spam=1&delauthor=1';
	}
	
    postdata += '&lj_form_auth=' + decodeURIComponent(LJ_cmtinfo.form_auth);

    var opts = {
        url: url,
        data: postdata,
        method: 'POST',
        onData: function(data) {
            is_deleted = !!data;
            is_error = !is_deleted;
        },
        onError: function() {
          alert('Error deleting ' + ditemid);
          is_error = true;
        }
    };

	HTTPReq.getJSON(opts);


    var flash = function () {
        var rgb = hsv_to_rgb(0, Math.cos((pulse + 1) / 2), 1);
        pulse += 3.14159 / 5;
        var color = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";

        todel.style.border = "2px solid " + color;
        if (is_error) {
            todel.style.border = "";
            // and let timer expire
        } else if (is_deleted) {
			removeComment(ditemid, opt_delthread);
            if (opt_delauthor && LJ_cmtinfo[ditemid].u !== '') {
                for (var item in LJ_cmtinfo) {
					if ( LJ_cmtinfo[item].u == LJ_cmtinfo[ditemid].u
						&& !LJ_cmtinfo[ item ].is_deleted) {
						removeComment(item, false);
                    }
                }
            }
        } else {
            window.setTimeout(flash, 50);
        }
    };

    window.setTimeout(flash, 5);
}

function removeComment (ditemid, killChildren) {
	if( LiveJournal.CommentManager.getState() !== 'iframe'){
		var threadId = ditemid;

		LiveJournal.CommentManager.getThreadJSON(threadId, function(result) {
			LiveJournal.CommentManager.processThreadJSON( result, function( dtid, html, comment) {
				if (LJ_cmtinfo[ threadId ].u !== LJ_cmtinfo[ dtid ].u) {
					return;
				}

				html = ExpanderEx.prepareCommentBlock( html, dtid ); //, isChildCollapsed( i ) );
				LiveJournal.CommentManager.updateCell( dtid, html );
				if( comment.is_deleted && ( dtid in ExpanderEx.Collection ) ) {
					delete ExpanderEx.Collection[ dtid ];
				}
			} );
		}, true );
	}
	else {
		var todel = document.getElementById("ljcmt" + ditemid);
		if (todel) {
			todel.style.display = 'none';

			var userhook = window["userhook_delete_comment_ARG"];
			if (userhook)
				userhook(ditemid);
		}
	}
	if (killChildren) {
		var com = LJ_cmtinfo[ditemid];
		for (var i = 0; i < com.rc.length; i++) {
			removeComment(com.rc[i], true);
		}
	}
}

function createDeleteFunction(ae, dItemid, action) {
	action = action || 'delete';
	
    return function (e) {
		e = jQuery.event.fix(e || window.event);
		
		e.stopPropagation();
		e.preventDefault();

        var doIT = 0;
        // immediately delete on shift key
        if (e.shiftKey) {
			doIT = 1;
			deleteComment(dItemid, action);
			return true;
		}
		
		if (!LJ_cmtinfo) {
			return true;
		}

        var com = LJ_cmtinfo[dItemid],
			comUser = LJ_cmtinfo[dItemid].u,
			remoteUser = LJ_cmtinfo.remote;
        if (!com || !remoteUser) {
			return true;
		}
        var canAdmin = LJ_cmtinfo.canAdmin;
		
		var markSpamMLPrefix = (Site.remote_is_maintainer == 1 && com.u !== '') ? 'comment.mark.spam.' : 'comment.mark.spam2.';		
		
		if (action == 'markAsSpam') {
			if (!window.ctrlPopup) {
				window.ctrlPopup = jQuery('<div class="b-popup-ctrlcomm" />')
					.delegate('input.spam-comment-button', 'click', function () {
						window.ctrlPopup.bubble('hide');
					});
			}			

			window.ctrlPopup
				.html('<div class="b-popup-group"><div class="b-popup-row b-popup-row-head"><strong>' + getLocalizedStr(markSpamMLPrefix + 'title', comUser) + '</strong></div><div class="b-popup-row">' + getLocalizedStr(markSpamMLPrefix + 'subject', comUser) + '</div><div class="b-popup-row"><input type="button" class="spam-comment-button" onclick="deleteComment(' + dItemid + ', \'' + action + '\');" value="' + getLocalizedStr(markSpamMLPrefix + 'button', comUser) + '"></div><div>', ae, e, 'spamComment' + dItemid)
				.bubble()
				.bubble('show', ae);

			return true;
		} else if (action == 'delete') {
			var inHTML = [ "<form id='ljdelopts" + dItemid + "'><div class='b-popup-group'><div class='b-popup-row b-popup-row-head'><strong>" + getLocalizedStr( 'comment.delete.q', comUser ) + "</strong></div>" ];
			var lbl;
			if (com.username !== "" && com.username != remoteUser && canAdmin) {
				lbl = "ljpopdel" + dItemid + "ban";
				inHTML.push("<div class='b-popup-row'><input type='checkbox' name='ban' id='" + lbl + "'> <label for='" + lbl + "'>" + getLocalizedStr( 'comment.ban.user', comUser ) + "</label></div>");
			}

			if (com.rc && com.rc.length && canAdmin) {
				lbl = "ljpopdel" + dItemid + "thread";
				inHTML.push("<div class='b-popup-row'><input type='checkbox' name='delthread' id='" + lbl + "'> <label for='" + lbl + "'>" + getLocalizedStr( 'comment.delete.all.sub', comUser ) + "</label></div>");
			}
			if (canAdmin&&com.username) {
				lbl = "ljpopdel" + dItemid + "author";
				inHTML.push("<div class='b-popup-row'><input type='checkbox' name='delauthor' id='" + lbl + "'> <label for='" + lbl + "'>" +
						(com.username == remoteUser ? getLocalizedStr( 'comment.delete.all.my') :
						getLocalizedStr( 'comment.delete.all', "<b>" + comUser + "</b>" )) + "</label></div>");
			}

			inHTML.push("<div class='b-popup-row'><input class='delete-comment-button' type='button' value='" + getLocalizedStr( 'comment.delete', comUser ) + "' onclick='deleteComment(" + dItemid + ");' /></div></div><div class='b-bubble b-bubble-alert b-bubble-noarrow'><i class='i-bubble-arrow-border'></i><i class='i-bubble-arrow'></i>" + getLocalizedStr( 'comment.delete.no.options', comUser ) + "</div></form>");
			
			if (!window.delPopup) {
				window.delPopup = jQuery('<div class="b-popup-delcomm" />')
					.delegate('input.delete-comment-button', 'click', function () {
						window.delPopup.bubble('hide');
					});
			}
			
			window.delPopup
				.html(inHTML.join(' '))
				.bubble()
				.bubble('show', ae);
				
		} else if (action == 'unspam') {
			deleteComment(dItemid, action);
		}
	};
}

function poofAt (pos) {
    var de = document.createElement("div");
    de.style.position = "absolute";
    de.style.background = "#FFF";
    de.style.overflow = "hidden";
    var opp = 1.0;

    var top = pos.y;
    var left = pos.x;
    var width = 5;
    var height = 5;
    document.body.appendChild(de);

    var fade = function () {
        opp -= 0.15;
        width += 10;
        height += 10;
        top -= 5;
        left -= 5;

        if (opp <= 0.1) {
            de.parentNode.removeChild(de);
        } else {
            de.style.left = left + "px";
            de.style.top = top + "px";
            de.style.height = height + "px";
            de.style.width = width + "px";
            de.style.filter = "alpha(opacity=" + Math.floor(opp * 100) + ")";
            de.style.opacity = opp;
            window.setTimeout(fade, 20);
        }
    };
    fade();
}

function updateLink (ae, resObj, clickTarget) {
    ae.href = resObj.newurl;
    var userhook = window["userhook_" + resObj.mode + "_comment_ARG"];
    var did_something = 0;

    if (clickTarget && clickTarget.src && clickTarget.src == resObj.oldimage) {
        clickTarget.src = resObj.newimage;
        did_something = 1;
    }

    if (userhook) {
        userhook(resObj.id);
        did_something = 1;
    }

    // if all else fails, at least remove the link so they're not as confused
    if (! did_something) {
        if (ae && ae.style)
            ae.style.display = 'none';
        if (clickTarget && clickTarget.style)
            clickTarget.style.dispay = 'none';
    }

}

var tsInProg = {}  // dict of { ditemid => 1 }
function createModerationFunction(control, dItemid, action) {
	var action = action || 'screen',
		comUser = LJ_cmtinfo[dItemid].u;	
	
	return function (e) {
		var	e = jQuery.event.fix(e || window.event),
			pos = { x: e.pageX, y: e.pageY },
			modeParam = LiveJournal.parseGetArgs(location.href).mode,
			hourglass;
			
		e.stopPropagation();
		e.preventDefault();
			
		sendModerateRequest();

		function sendModerateRequest() {
			var	bmlName = (action == 'unspam') ? 'spamcomment' : 'talkscreen',
				postUrl = control.href.replace(new RegExp('.+' + bmlName + '\.bml'), LiveJournal.getAjaxUrl(bmlName)),
				postParams = { 'confirm': 'Y', lj_form_auth: decodeURIComponent(LJ_cmtinfo.form_auth) };
				
			if (action == 'unspam') {
				postUrl += '&jsmode=1';
			}
				
			hourglass = jQuery(e).hourglass()[0];
			
			jQuery.post(postUrl, postParams, function (json) {
				tsInProg[dItemid] = 0;
				
				if (action == 'unspam') {
					json = jQuery.parseJSON(json); 
					
					if (json.result) {
						removeEmptyMarkup(dItemid);
						hourglass.hide();
						return true;
					} else {
						alert(json.errormsg);
					}
				}
				
				if( LiveJournal.CommentManager.getState() !== 'iframe' ) {
					handleNew();
				} else {
					var ids = checkRcForNoCommentsPage();
					handleIframe(ids);
				}
			});
		}

		function handleNew() {
			var newNode, showExpand, j, children,
				threadId = dItemid,
				threadExpanded = !!(LJ_cmtinfo[ threadId ].oldvars && LJ_cmtinfo[ threadId ].full),
				populateComments = function (result) {
					LiveJournal.CommentManager.processThreadJSON( result, function( dtid, html ) {
						if( LJ_cmtinfo[ dtid ].full ){
							showExpand = !( 'oldvars' in LJ_cmtinfo[ dtid ]);
	
							//still show expand button if children comments are folded
							if( !showExpand ) {
								children  = LJ_cmtinfo[ dtid ].rc;
	
								for( j = 0; j < children.length;  ++j ) {
									if( !LJ_cmtinfo[ children[j] ].full && !LJ_cmtinfo[ children[j] ].is_deleted ) {
									// if( !( 'oldvars' in LJ_cmtinfo[ children[j] ] ) ) {
										showExpand = true;
									}
								}
							}
							
							if (!html) {
								removeEmptyMarkup(result[i].thread);
							}

							var newNode = ExpanderEx.prepareCommentBlock( html, dtid, showExpand );
	
							LiveJournal.CommentManager.updateCell( dtid, newNode );
						}
					} );
					hourglass.hide();
					poofAt(pos);
				};
	
			LiveJournal.CommentManager.getThreadJSON(threadId, function (result) {
				//if comment is expanded we need to fetch it's collapsed state additionally
				if( threadExpanded && LJ_cmtinfo[ threadId ].oldvars.full )
				{
					LiveJournal.CommentManager.getThreadJSON( threadId, function (result2) {
						ExpanderEx.Collection[ threadId ] = ExpanderEx.prepareCommentBlock( jQuery( "<div>" + result2[0].html + "</div>" ), threadId, true ).html()
						//ExpanderEx.Collection[ threadId ] = result2[0].html;
						populateComments( result );
					}, true, true );
				}
				else {
					populateComments( result );
				}
			}, false, !threadExpanded);
		}

		function handleIframe(ids) {
			// modified jQuery.fn.load
			jQuery.ajax({
				url: location.href,
				type: 'GET',
				dataType: 'html',
				complete: function (res, status) {
					// If successful, inject the HTML into all the matched elements
					if (status == 'success' || status == 'notmodified') {
						// Create a dummy div to hold the results
						var nodes = jQuery('<div/>')
							// inject the contents of the document in, removing the scripts
							// to avoid any 'Permission Denied' errors in IE
							.append(res.responseText.replace(/<script(.|\s)*?\/script>/gi, ''))
							// Locate the specified elements
							.find(ids)
							.each(function () {
								var id = this.id.replace(/[^0-9]/g, '');
								if (LJ_cmtinfo[id].expanded) {
									var expand = this.innerHTML.match(/Expander\.make\(.+?\)/)[0];
									(function(){
										eval(expand);
									}).apply(document.createElement('a'));
								} else {
									jQuery('#' + this.id).replaceWith(this);
								}
							});
						hourglass.hide();
						poofAt(pos);
					}
				}
			});
		}

		function checkRcForNoCommentsPage() {
			var commsArray = [ dItemid ], ids;

			// check rc for no comments page
			if (LJ_cmtinfo[dItemid].rc) {
				if (/mode=(un)?freeze/.test(control.href)) {
					mapComms(dItemid);
				}
				ids = '#ljcmt' + commsArray.join(',#ljcmt');
			} else {
				var rpcRes;
				eval(json);
				updateLink(control, rpcRes, control.getElementsByTagName('img')[0]);
				// /tools/recent_comments.bml
				if (document.getElementById('ljcmtbar'+dItemid)) {
					ids = '#ljcmtbar' + dItemid;
				}
				// ex.: portal/
				else {
					hourglass.hide();
					poofAt(pos);
					return;
				}
			}
			
			
			function mapComms(id) {
				var i = -1, newId;
				
				while (newId = LJ_cmtinfo[id].rc[++i]) {
					if (LJ_cmtinfo[newId].full) {
						commsArray.push(newId);
						mapComms(String(newId));
					}
				}
			}
			
			return ids;
		}
		
		return false;
	}
}

function removeEmptyMarkup(threadId) {
	jQuery('#ljcmt' + threadId).remove();
}

(function( $, window ) {

	window.LiveJournal.CommentManager = function() {
		this.bindLinks();
	}

	LiveJournal.CommentManager.prototype.bindLinks = function() {
		$( 'body' ).delegate( 'a', 'click', function( ev ) {
			var rex_id = /id=(\d+)/, ae = this;

		if (ae.href.indexOf('talkscreen.bml') != -1) {
			var reMatch = rex_id.exec(ae.href);
			if (!reMatch) return;

			var id = reMatch[1];
			if (!document.getElementById('ljcmt' + id)) return;

			createModerationFunction(ae, id)( ev );
		} else if (ae.href.indexOf('delcomment.bml') != -1) {
			if (LJ_cmtinfo && LJ_cmtinfo.disableInlineDelete) return;

			var reMatch = rex_id.exec(ae.href);
			if (!reMatch) return;

			var id = reMatch[1];
			if (!document.getElementById('ljcmt' + id)) return;

			var action = (ae.href.indexOf('spam=1') != -1) ? 'markAsSpam' : 'delete';

			createDeleteFunction(ae, id, action)( ev );
		// unspam
		} else if (ae.href.indexOf('spamcomment.bml') != -1) {
			var reMatch = rex_id.exec(ae.href);
			if (!reMatch) return;

			var id = reMatch[1];
			if (!document.getElementById('ljcmt' + id)) return;
			createModerationFunction(ae, id, 'unspam')( ev );
		} else {
			return;
		}

			ev.preventDefault();
			ev.stopPropagation();
		} );
	}

	var manager = window.LiveJournal.CommentManager;

	window.LiveJournal.CommentManager.getState = function() {
		if( LJ_cmtinfo.use_old_thread_expander ) {
			return "iframe";
		} else {
			return "old";
		}
	}

	/**
	 * @param {Number} threadId Id of thread to update
	 * @param {Node} node Collection of nodes with new content
	 *
	 * @return {String} Returns a string containing old content of the cell;
	 */
	LiveJournal.CommentManager.updateCell = function( threadId, node ) {
		var cell = $( "#ljcmt" + threadId ),
			old_html = $( '<div></div>' ). append( cell.clone() );

		cell.replaceWith( $( node ).filter( "#ljcmt" + threadId ) );

		return old_html.html();
	}

	LiveJournal.CommentManager.getCell = function( threadId ) {
		return $( "#ljcmt" + threadId );
	}

	LiveJournal.CommentManager.getThreadJSON = function(threadId, success, getSingle)
	{
		var postid = location.href.match(/\/(\d+).html/)[1],
			modeParam = LiveJournal.parseGetArgs(location.href).mode,
			params = {
				journal: Site.currentJournal,
				itemid: postid,
				thread: threadId,
				depth: LJ_cmtinfo[ threadId ].depth
			};

		if( getSingle) {
			params.single = '1';
		}

		if (modeParam) {
			params.mode = modeParam;
		}

		var getArgs = LiveJournal.parseGetArgs( location.href );
		if( getArgs && !!getArgs.style && getArgs.style === "mine" ) {
			params.style = "mine";
		}

		var endpoint = LiveJournal.getAjaxUrl( 'get_thread' );
		jQuery.get( LiveJournal.constructUrl( endpoint, params ), success, 'json' );
	}

	LiveJournal.CommentManager.processThreadJSON = function( result, callback ) {
		var comment, dom;
		for( var i = 0; i < result.length; ++i ){
			if( !( result[ i ].thread in LJ_cmtinfo ) ) {
				continue;
			}
	
			comment = {};
			comment.is_deleted = ( result[i].state === "deleted" );
			if( comment.is_deleted ) {
				LJ_cmtinfo[ result[i].thread ].is_deleted = true;
			}
			dom = $( result[i].html ).filter( "#ljcmt" + result[i].thread );
			callback( result[i].thread, dom, comment );
		}
	}

	$( function() { new LiveJournal.CommentManager(); } );

}( jQuery, window ))

function LJ_Mul( a, b ) { return parseInt(a, 10) * parseInt(b, 10) }

function LJ_JoinURL( url /* parts */ ) {
	var add = [].slice.call( arguments, 1 ).join( '&' );

	url += ( url.indexOf( '?' ) > -1 ) ? '&' : '?';
	return url + add;
}

function LJ_Concat( /* parts */ ) {
	return [].slice.call( arguments, 0 ).join( '' );
}

(function( window, $ ) {

/**
* 
* Livejournal sharing script.
* 
* Usage:
* 
* .. Somewhere in the head ..
* <script type="text/javascript">
* 	//show only three links in popup by default
* 	LJShare.init({"ml":{"close":"Close","title":"Share"},"links":["facebook","twitter","email"]})
* </script>
* 
* .. Somewhere on the page ..
* <a href="#">share</a>
* <script type="text/javascript">
* 	LJShare.link( {
* 		"url":"http://community.livejournal.com/news/750.html",
* 		"title":"Some title",
* 		"description":"Some description",
* 		"links": [ "twitter", "vkontakte", "moimir" ] //we want custom buttons there
* 	});
* </script>
*
* You can attach single links:
* LJShare.entry( { url: "http://some.url.com/", title: "Post title", description: "Post description" } )
*		.attach( '#link_selector', 'service_name' )
*		.attach( jQuery( '#another_selector' ), 'service_name2' ) //we can pass nodes or jquery collections
*		.link( '#selector', [ "twitter", "vkontakte", "moimir"] ); //also we can attach popup
* 
*/

function preload( srcArr ) {
	for( var i = 0; i < srcArr.length; ++i ) {
		( new Image() ).src = Site.imgprefix + srcArr[ i ] + '?v=1';
	}
}

function prepareOptions( opts ) {
	var defaults = {
		title: '',
		description: '',
		url: ''
	};

	var options = jQuery.extend( {}, defaults, opts );

	//we encode strings two times, because they are decoded once on the livejournal endpoint
	options.url = encodeURIComponent( encodeURIComponent( options.url ) );
	options.title = encodeURIComponent( encodeURIComponent( options.title ) );
	options.description = encodeURIComponent( encodeURIComponent( options.description ) );
	return options;
}

preload( [
	'/popup-cls.gif',
	'/popup-arr.gif',
	'/icons/sharethis.gif'
] );

function pollForWindowClose(w, service, link) {
	if (w.closed) {

		/**
		* Callback will be fired when external sharing popup will be closed
		*      sharing script will poll for this, so expect some delay.
		*
		* @name LJShare#popupClosed
		* @param {String} service The name of service which window was closed.
		* @event
		*/
		var event = jQuery.Event('popupClosed', { service: service, shareLink: link });
		LJShare.dispatchMessage(event);
	} else {
		setTimeout(pollForWindowClose.bind(null, w, service, link), 200);
	}
}

var selectors = {
	close: ".i-popup-close",
	links: ".b-sharethis-services a",
	arrow: ".i-popup-arr"
};

// four arrow positions availible
var arrow_opts = {
	className: "i-popup-arr",
	position: {
		tl: "i-popup-arrtl",
		tr: "i-popup-arrtr",
		bl: "i-popup-arrbl",
		br: "i-popup-arrbr"
	}
};

var template = {
	//here we take values from global_options.ml object
	start: '<div class="b-sharethis">' +
				'<div class="b-sharethis-head">{title}</div>' +
				'<div class="b-sharethis-services">',
	//here we take values from an object made from service object. Availible vars: name, url, title.
	item: 			'<span class="b-sharethis-{name}"><a href="{url}" data-service={name}>{title}</a></span>',
	//here we take values from global_options.ml object
	end: 		'</div>' +
			'</div>'
};

//buildLink takes values passed to the url with link method ( title, post url, description )
var default_options = {
	ml: {
		close: "Close",
		title: "Share"
	},
	services: {
		livejournal: {
			title: 'LiveJournal', bindLink: 'http://www.livejournal.com/update.bml?repost_type=c&repost={url}', openInTab: true
		},
		facebook: {
			title: 'Facebook', bindLink: 'http://www.facebook.com/sharer.php?u={url}'
		},
		twitter: {
			title: 'Twitter', bindLink: 'http://twitter.com/share?url={url}&text={title}'
		},
		vkontakte: {
			title: 'Vkontakte', bindLink: 'http://vkontakte.ru/share.php?url={url}'
		},
		moimir: {
			title: 'Moi Mir', bindLink: 'http://connect.mail.ru/share?url={url}'
		},
		stumbleupon: {
			title: 'Stumbleupon', bindLink: 'http://www.stumbleupon.com/submit?url={url}', openInTab: true
		},
		digg: {
			title: 'Digg', bindLink: 'http://digg.com/submit?url={url}', openInTab: true
		},
		email: {
			title: 'E-mail', bindLink: 'http://api.addthis.com/oexchange/0.8/forward/email/offer?username=internal&url={url}&title={title}', height: 600
		},
		tumblr: {
			title: 'Tumblr', bindLink: 'http://www.tumblr.com/share?v=3&u={url}'
		},
		odnoklassniki: {
			title: 'Odnoklassniki', bindLink: 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1&st._surl={url}'
		}
	},
	//list of links wich will be shown, when user will click on share link. Can be overriden in init and link methods.
	links: [ 'livejournal', 'facebook', 'twitter', 'vkontakte', 'odnoklassniki', 'moimir', 'email', 'digg', 'tumblr', 'stumbleupon' ],
	showOn: 'click'
};

var global_options = $.extend( true, {}, default_options );

window.LJShare = {};
LJ.addPubSub(LJShare); //we add messaging system to notify external scripts about popups being closed.

/**
* Overrides default options for current page.
* 
* @param Object opts Options object, may contain the following fields:
*    ml - translation strings to use;
*    services - An Object, that contains configuration fields for services links;
*    links - array of links that will be shown to the user in popup.
*/
window.LJShare.init = function( opts ) {
	if( opts ) {
		global_options = $.extend( true, {}, default_options, opts );
		global_options.links = opts.links || global_options.links;
	}
};

/**
* Bind share popup to the latest link found on the page
* 
* @param Object opts Options object, may contain the following fields:
*    title, description, url - parameters of the page you want to share;
*    links - array of links that will be shown to the user in popup.
* @param String|Node|Jquery collection Node the popup has to be attached to. Default id a:last
*/
window.LJShare.link = function( opts, node ) {
	if( opts && opts.share_uniq_id ) {
		var id = opts.share_uniq_id;
		delete opts.share_uniq_id;
		LJShare.link( opts, $( '#' + id ) );
		return;
	}

	var a = node || $( 'a:last' ),
		linkImg = a.find( 'img' ),
		link = (linkImg.length) ? linkImg : a,
		url = a.attr( 'href' ),
		options = prepareOptions( $.extend( {}, { url: url } , opts ) ),
		dom;

	a.attr( 'href', 'javascript:void(0)' );

	var links = ( opts.links ) ? opts.links : global_options.links;

	function buildDom( initHidden ) {
		initHidden = initHidden || false;
		var str = [ template.start.supplant(global_options.ml) ],
			serviceName, serviceObj;

		for( var i = 0; i < links.length; ++i ) {
			serviceName = links[i];
			serviceObj = global_options.services[ serviceName ];

			str.push( template.item.supplant({
				name: serviceName,
				title: serviceObj.title,
				url: serviceObj.bindLink.supplant(options)
			} ) );
		}

		str.push(template.end.supplant(global_options.ml));

		bubbleOptions = {
			target: link,
			showOn: options.showOn || global_options.showOn
		};

		if( options.showOn === "hover" ) {
			bubbleOptions.closeControl = false;
		}

		dom = $( str.join( ' ' ) )
			.hide()
			.bubble( bubbleOptions );

		if( !initHidden ) {
			dom
				.bubble( 'show' );
		}
	}

	function bindControls() {
		dom.find( selectors.links ).click( function( ev )
		{
			dom.bubble('hide');
			var service = $( this ).attr( 'data-service' );

			LJShare.openPopupEvent(this, ev, options, service);
		} );
	}

	if( options.showOn === "hover" ) {
		if( !dom ) {
			buildDom( true );
			bindControls();
		}
	}

	link.one( 'click', function( ev ) {
		ev.stopPropagation();
		
		if( !dom ) {
			buildDom();
			bindControls();
		}
	} );

	return this;
};

/**
 * open popup functionality was exposed to allow the modification of its behavior
 * by external scripts
 */
window.LJShare.openPopupEvent = function(el, ev, options, service) {
	var width, height;

	if( global_options.services[ service ].openInTab ) {
		if( $.browser.msie ) {
			ev.preventDefault();
			width = $( window ).width();
			height = $( window ).height();
			window.open( el.href, null, 'toolbar=yes,menubar=yes,status=1,location=yes,scrollbars=yes,resizable=yes,width=' + width + ',height=' + height );
		} else {
			//other browsers just open link in new tab
			el.target = "_blank";
		}
	} else {
		ev.preventDefault();
		width = global_options.services[ service ].width || 640;
		height = global_options.services[ service ].height || 480;
		w = window.open(el.href, 'sharer', 'toolbar=0,status=0,width=' + width + ',height=' + height + ',scrollbars=yes,resizable=yes');
										//double encoded url?!
		pollForWindowClose(w, service, decodeURIComponent(decodeURIComponent(options.url)));
	}
};

window.LJShare.entry = function( opts ) {
	var defaults = {
		title: '',
		description: '',
		url: ''
	};

	var options = prepareOptions( opts );

	return {
		attach: function( node, service ) {
			var link = jQuery( node ),
				serviceObj = global_options.services[ service ];

			if( service in global_options.services ) {
				link.each( function() {
					var url = serviceObj.bindLink.supplant(options);
					if ( service.openInTab ) {
						this.url = url;
						this.target = "_blank";
					} else {
						$( this ).click( function( ev ) {
							var width = service.width || 640;
							var height = service.height || 480;
							window.open( url, 'sharer', 'toolbar=0,status=0,width=' + width + ',height=' + height + ',scrollbars=yes,resizable=yes');
							ev.preventDefault();
						} );
					}
				} );
			}

			return this;
		},

		link: function( node, links ) {
			var opts = jQuery.extend( {}, options, links ? { links: links } : null );
			LJShare.link( opts, ( node ) ? jQuery( node ) : null );

			return this;
		}
	};

};

} )( window, jQuery );

function ellipsis(node)
{
	var s = document.documentElement.style,
		w = node.offsetWidth,
		clon = node.cloneNode(true);
	
	clon.style.position = "absolute";
	clon.style.width = "auto";
	clon.style.overflow = "visible";
	clon.style.top = "-10000px";
	
	node.parentNode.insertBefore(clon, node);
	if (clon.offsetWidth > w) {
		node.title = node[/*@cc_on"innerText"||@*/"textContent"];
		// FF2, FF3
		if (!("textOverflow" in s || "OTextOverflow" in s)) {
			var searcher = function(el, orig) {
				if (el.nodeType === 1 && el.tagName === "IMG") {
					orig.parentNode.removeChild(orig);
					el.parentNode.removeChild(el);
				}
				if (el.nodeType === 3) {
					var text = el.nodeValue;
					while (text.length > 0 && clon.offsetWidth > w) {
						text = text.substr(0, text.length - 1);
						el.textContent = text + "...";
					}
					if (text.length) {
						orig.textContent = el.textContent
							// replace space on end
							.replace(/[\s\.\,\-]+\.\.\.$/, '...');
						return true;
					}
					orig.textContent = el.textContent = "";
				}
				var i;
				for (i = el.childNodes.length - 1; i >= 0; i--) {
					if (searcher(el.childNodes[i], orig.childNodes[i])) {
						return true;
					}
				}
			};
			searcher(clon, node);
		}
	} else {
		node.title = "";
	}
	clon.parentNode.removeChild(clon);
	return node;
}

LJLive =
{
	is_full: false,
	
	getStateCode: function(state)
	{
		if (~navigator.userAgent.indexOf('iPad')) {
			return '';
		}
		var normalState = !Cookie('ljlive-is-min') && state !== false,
			code = '<div class="b-ljtimes-wrapper" id="ljtime">'
				+'<i class="i-ljtimes-border"></i>'
				+'<span class="i-ljtimes-btn" title="' + LJLive.ml_click_to_expand + '" onmousedown="return LJLive.tagMousedown(event)">'
					+'<i class="i-ljtimes-drag"></i>'
					+'<i class="i-ljtimes-click"></i>'
				+'</span>';

		if (!normalState) {
			jQuery('body').addClass('ljtimes-minimized');
		}

		var height = 21;
		
		if (normalState) {
			var param;
			if (Site.currentEntry) {
				param = {entry: Site.currentEntry};
			}
			code += '<iframe width="100%" height="24" frameborder="0" src="' + LiveJournal.getAjaxUrl('lj_times_string', param) + '" id="ljtime_iframe"></iframe>';
			height += 24;
		}
		
		code += '</div><div id="ljtime_bottom" style="height:'+height+'px"></div>';
		
		return code;
	},
	
	tagMousedown: function(e)
	{
		e = jQuery.event.fix(e);
		if (e.which !== 1) {
			return;
		}
		
		LJLive.writePostHide();
		
		if (!$('ljtime_iframe')) {
			jQuery('<iframe/>', {
				id: 'ljtime_iframe',
				src: LiveJournal.getAjaxUrl('lj_times_string'),
				frameborder: 0
			})
			.attr({
				height: 0,
				width: '100%'
			})
			.appendTo('#ljtime');
		}
		
		// one cursor in all document
		var transparentBG = jQuery('<div/>', {
			css: {
				cursor: 'row-resize',
				top: 0,
				left: 0,
				width: jQuery('body').width(),
				height: jQuery('body').height(),
				position: 'absolute',
				zIndex: 10000
			}
		}).appendTo(document.body);
		
		var node = $('ljtime_iframe'),
			is_click = true, mousemove_cnt = 0,
			diffX = e.clientX, diffY = e.clientY, startHeight = +node.height,
			return_false = function(){ return false; },
			mousemove = function(e)
			{
				if (is_click) {
					mousemove_cnt++;
					if (Math.max(mousemove_cnt, diffX - e.clientX, diffY - e.clientY) > 2) {
						is_click = false;
					}
				}
				var h = Math.max(0, Math.min(24, startHeight + diffY - e.clientY));
				node.height = h;
			},
			mouseup = function(e) {
				if (e.which !== 1) {
					return;
				}
				
				transparentBG.remove();
				
				if (is_click) {
					LJLive.full();
				}
				
				document[/*@cc_on'detachEvent'||@*/'removeEventListener'](/*@cc_on'on'+@*/'mousemove', mousemove, false);
				jQuery(document)
					.unbind('mouseup', mouseup)
					.unbind('selectstart', return_false);
				
				document.body.releaseCapture && document.body.releaseCapture();
				
				// oncomplete logic
				if (node.height > 24/2) { // expand
					jQuery('body').removeClass('ljtimes-minimized');
					node.height = 24;
					Cookie('ljlive-is-min', null, {domain: '.'+location.host.match(/[^.]+\.\w+$/)[0], path: '/' });
					jQuery('#ljtime_bottom').height(24+21);
				} else {
					node.height = 0;
					jQuery('body').addClass('ljtimes-minimized');
					Cookie('ljlive-is-min', 1, { expires: 2, domain: '.'+location.host.match(/[^.]+\.\w+$/)[0], path: '/' });
					jQuery('#ljtime_bottom').height(21);
				}
			};
		
		// using native method for speed
		document[/*@cc_on'attachEvent'||@*/'addEventListener'](/*@cc_on'on'+@*/'mousemove', mousemove, false);
		jQuery(document).mouseup(mouseup);
		// don't selection in IE
		if (jQuery.browser.msie) {
			jQuery(document).bind('selectstart', return_false);
		}
		// IE drag in all
		document.body.setCapture && document.body.setCapture();
		// for opera or drag&drop image
		e.originalEvent.preventDefault && e.originalEvent.preventDefault();
	},
	
	full: function()
	{
		if (LJLive.is_full) {
			return;
		}
		LJLive.is_full = true;
		
		// scroll for iframe
		var win = jQuery(window),
			html = jQuery(jQuery.boxModel ? 'html' : 'body'),
			html_overflow_x = html.css('overflow-x'),
			html_overflow_y = html.css('overflow-y'),
			last_scroll_top = win.scrollTop(),
			last_scroll_left = win.scrollLeft(),
			cont = jQuery('#ljtime'),
			full = cont.find('iframe'),
			iframe_src_param = Site.currentJournal ? {
				journal: Site.currentJournal
			} : null,
			iframe_src = LiveJournal.getAjaxUrl('lj_times_full', iframe_src_param);
		
		cont.height(cont.height());
		full.hide();
		
		var node = jQuery('<div class="b-ljtimes-wrapper b-ljtimes-lwrapper" id="ljtime-full" style="height:100%;left: -10000px">'
				+'<i class="i-ljtimes-border"><i class="i-ljtimes-bl"></i><i class="i-ljtimes-br"></i></i>'
				+'<span class="i-ljtimes-btn" style="top: -20px" title="'+LJLive.ml_click_to_close+'">'
					+'<i class="i-ljtimes-drag"></i>'
					+'<i class="i-ljtimes-click"></i>'
				+'</span>'
			+'<iframe src="' + iframe_src + '" width="100%" height="100%" style="height:100%;background:#fff" frameborder="0"></iframe>'
		+'</div>').appendTo('body');

		jQuery('#ljtime').addClass('b-ljtimes-opening');
		
		cont.animate({
			height: win.height()
		}, 1000, function(){
			// don't use overflow: hidden for Quirks mode
			html.css('overflow-x', 'hidden').css('overflow-y', 'hidden');
			node.css('left', 0);

			jQuery('#ljtime').removeClass('b-ljtimes-opening');
			
			node.find('.i-ljtimes-btn')
				.animate({
					top: 0
				}, 100)
				.click(function(){
					LJLive.is_full = false;
					// no jump
					win.scrollTop(last_scroll_top).scrollLeft(last_scroll_left);
					
					node
						.height(node.height())
						.animate({
							height: 24
						}, function(){
							node.remove();
							html.css('overflow-x', html_overflow_x)
								.css('overflow-y', html_overflow_y);
							full.show();
							
							win.scrollTop(last_scroll_top).scrollLeft(last_scroll_left);
						});
				});
			
			cont.height('auto');
		}).css('overflow', 'visible');
	},
	
	messagesIsShow: false,
	messagesShow: function(target)
	{
		var node = jQuery(target).parents('.b-inbox'),
			show_node = jQuery('<div class="b-ljtimes-inbox b-popup"><div class="b-popup-outer"><div class="b-popup-inner"><span class="b-ljtimes-inbox-item">'+LJLive.ml.loading+'</span><i class="i-popup-arr i-popup-arrb"></i></div></div></div>')
				.appendTo('body');

		var user_url = '';
		if (/^(community|users)\./.test(location.host)) {
			user_url = '/'+Site.currentJournal;
		}

		this.initPopup(target, show_node, 'messages', function(target){
			show_node.find('.b-popup-inner')
				.html('<span class="b-ljtimes-inbox-item">'+LJLive.ml.loading+'</span>');

			jQuery.getJSON(
				user_url + '/__alerts/get.html',
				function(data)
				{
					if (!data.messages.length) {
						node.find('.arrow').html(0);
						show_node.remove();
					}
					
					var rec_ids = [],
						html = '', i;
					data.messages = data.messages.splice(0, 5);
					
					for (i = -1; data.messages[++i];) {
						rec_ids.push(data.messages[i].rec_id);
						html += '<span class="b-ljtimes-inbox-item">'+data.messages[i].message+'</span>';
					}
					
					show_node.find('.b-popup-inner').html(html);
					jQuery.post(
						user_url + '/__alerts/mark_readed.html',
						{rec_id: rec_ids.join(',')},
						function(data){
							+data.unread_count
								? node.find('a').text(data.unread_count)
								: node.find('.arrow').html(0);
						}, 'json');
				}
			);
		});

		LJLive.messagesShow(target);
	},
	messagesHide: jQuery.noop,
	
	_loginNode: null,
	_loginShow: function(target, method)
	{
		if (!LJLive._loginNode) {
			LJLive._loginNode = jQuery('<div class="b-ljtimes-update">' + LJLive.ml.html_login_form + '</div>').appendTo('body');
		}
		
		var show_node = LJLive._loginNode;
		this.initPopup(target, show_node, method, jQuery.noop, true);
		LJLive[method + 'Show'](target);
	},
	
	writePostIsShow: false,
	writePostShow: function(target)
	{
		if (!Site.has_remote) {
			LJLive._loginShow(target, 'writePost');
			return;
		}
		
		var auth_token, right,
			html = '<div class="b-ljtimes-update">' + LJLive.ml.html_submit_form + '</div>',
			show_node = jQuery(html).appendTo('body'),
			form_node = show_node.find('form');

		this.initPopup(target, show_node, 'writePost', function(target){
			jQuery.post(LiveJournal.getAjaxUrl('quick_post'),
				{get_auth: 1},
				function(data){
					auth_token = data.auth;
				}, 'json');
		}, false, true);

		LJLive.writePostShow(target);
		
		form_node.find('input, textarea').placeholder();
		
		form_node
			.submit(function(e){
				jQuery.post(LiveJournal.getAjaxUrl('quick_post'),
					form_node.serialize() + '&auth_token=' + auth_token,
					function(data){
						LJLive.writePostHide();
						var html;
						if (data.error) {
							html = '<div class="b-ljtimes-update b-ljtimes-success b-popup"><div class="b-popup-outer"><div class="b-popup-inner">'
									+'<span class="b-ljtimes-success-body">'+data.error+'</span>'
									+'<i class="i-popup-arr i-popup-arrb"></i><i class="i-popup-close"></i>'
								+'</div></div></div>';
						} else {
							html = '<div class="b-ljtimes-update b-ljtimes-success b-popup"><div class="b-popup-outer"><div class="b-popup-inner">'
								+'<span class="b-ljtimes-success-title">'+LJLive.ml.post_created_title+'</span>'
								+'<span class="b-ljtimes-success-body">'+LJLive.ml.post_created_body.replace('[[url]]', data.entry_url)+'</span>'
								+'<i class="i-popup-arr i-popup-arrb"></i><i class="i-popup-close"></i>'
							+'</div></div></div>';
							form_node[0].reset();
							form_node[0].send.disabled = true;
						}
						
						var node = jQuery(html)
								.appendTo('body')
								.css('right', right);
						
						node.find('a.ljtimes_again').click(function(e){
							jQuery(document).mousedown(); // close
							LJLive.writePostShow(target);
							e.preventDefault();
						});
						
						node.find('.i-popup-close').click(function() {
							jQuery(document).mousedown(); // close
						});
						
						node.mousedown(function(e){
							e.stopPropagation();
						});
						jQuery(document)
							.add(node.find('.i-ljtimes-logged-close'))
							.one('mousedown', function(){
								node.remove();
							});
					}, 'json');
			e.preventDefault();
			
			// Google Analytics
			LJLive.window._gaq.push(['_trackEvent', 'Mini LJTimes', 'post', 'Write form - posted']);
		});
		
		form_node.find('textarea').input(function(){
			form_node[0].send.disabled = !this.value.length;
		});
	},
	writePostHide: jQuery.noop,
	
	suggestBubble: null,
	suggestBubbleRemove: function()
	{
		if (LJLive.suggestBubble) {
			LJLive.suggestBubble.remove();
		}
	},
	
	suggestIsShow: false,
	suggestShow: function(target)
	{
		if (!Site.has_remote) {
			LJLive._loginShow(target, 'suggest');
			return;
		}
		
		var show_node = jQuery(LJLive.ml.html_suggest_form)
				.mousedown(function(e) {
					e.stopPropagation();
				})
				.appendTo('body'),
			auth_token;

		this.initPopup(target, show_node, 'suggest', function(target){
			if (Site.currentEntry) {
				jQuery(form_node[0].url).val(Site.currentEntry).placeholder().input();
			}
			
			jQuery.post(LiveJournal.getAjaxUrl('lj_times_recommend'),
				{get_auth: 1},
				function(data){
					auth_token = data.auth;
				}, 'json');
		});
		
		var form_node = show_node.find('form');
		jQuery(form_node[0].url)
			.placeholder()
			.input(function(){
				form_node[0].send.disabled = !this.value || this.value === this.getAttribute('placeholder');
			});
		
		LJLive.suggestShow(target);
		
		form_node.submit(function(e){
			form_node[0].send.disabled = true;
			jQuery.post(LiveJournal.getAjaxUrl('lj_times_recommend'),
				form_node.serialize() + '&auth_token=' + auth_token,
				function(data){
					LJLive.suggestHide();
					
					if (Site.currentEntry && Site.currentEntry == form_node[0].url.value) {
						jQuery('span', target).html(
							LJLive.ml.suggest_already.replace('[[num]]', data.currentEntryRecommendations)
						);
					}
					
					var right = jQuery(window).width() - jQuery(target).offset().left - jQuery(target).width()/2 - 40,
						html = '<div class="b-ljtimes-suggest b-ljtimes-success b-popup"><div class="b-popup-outer"><div class="b-popup-inner">'
							+'<span class="b-ljtimes-success-body">'+(data.ret || data.error)+'</span>'
							+'<i class="i-popup-arr i-popup-arrbr"></i><i class="i-popup-close"></i>'
						+'</div></div></div>';
					
					var node = jQuery(html)
							.appendTo('body')
							.css('right', right);
					
					node.find('a.ljtimes_again').click(function(e){
						jQuery(document).mousedown(); // close
						LJLive.writePostShow(target);
						e.preventDefault();
					});
					
					node.find('.i-popup-close').click(function() {
						jQuery(document).mousedown(); // close
					});
					
					node.mousedown(function(e){
						e.stopPropagation();
					});
					
					jQuery(document)
						.add(node.find('.i-ljtimes-logged-close'))
						.one('mousedown', function(){
							node.remove();
						});
					
					form_node[0].reset();
					
					LJLive.window._gaq.push(['_trackEvent', 'Mini LJTimes', 'post', 'Suggest form - posted']);
			}, 'json');
			
			e.preventDefault();
		});
	},
	suggestHide: jQuery.noop,

	initPopup: function(target, show_node, method, showHandler, checkData, stayOnDocumentClick) {
		show_node.mousedown(function(e){
			e.stopPropagation();
		});

		LJLive[method + 'Show'] = function(target) {
			LJLive[method + 'IsShow'] = true;
			show_node.show();
			//we need to store method name with node, because every handler should close the popup
			//only if its above the correspoinding link
			show_node.data('method', method);
			
			var right = jQuery(window).width() - jQuery(target.parentNode).offset().left - target.parentNode.offsetWidth;
			right += target.parentNode.offsetWidth/2 - 40; // arrow of center
			show_node.css('right', Math.max(right, 4));

			showHandler.call(this, target);
		};

		LJLive[method + 'Hide'] = function(){
			LJLive[method + 'IsShow'] = false;
			show_node
				.data('method', null)
				.hide();
		};
		
		show_node.find('.i-popup-close').click(LJLive[method + 'Hide']);

		if (!stayOnDocumentClick) {
			jQuery(document).mousedown(function(e, iframe_target) {
				var cur_method = !!checkData && show_node.data('method'),
					parent = iframe_target && iframe_target.parentNode;

				if (parent && parent.tagName.toLowerCase() === 'a' && target === parent) {
					return;
				}

				if (target !== iframe_target &&
						(!checkData || !cur_method || cur_method === method)) {
					LJLive[method + 'Hide']();
				}
			});
		}
	},
	
	calcTime: function(ts)
	{
		if (typeof ts === 'number') {
			var minutes = Math.ceil((LJLive.now - ts) / 60);
			ts = minutes + ' ' + LJLive.ml.timeText(minutes);
		}
		return ts;
	},
	
	frameInit: function(frame)
	{
		LJLive.frame_body = frame.document.body;
		LJLive.ml = frame.ML_ljtimes;
		LJLive.now = frame.now;
		LJLive.window = frame;
		
		// fire event for main document
		jQuery(LJLive.frame_body)
			.mousedown(function(e){
				jQuery(document).trigger('mousedown', e.target);
			})
			// don't use stopPropagation
			// write post don't hide if mousedown on document
			.delegate('.b-update a', 'mousedown', function() {
				LJLive.suggestHide();
				LJLive.suggestBubbleRemove();
				
				!LJLive.writePostIsShow
					? LJLive.writePostShow(this)
					: LJLive.writePostHide();
				
				LJLive.window._gaq.push(['_trackEvent', 'Mini LJTimes', 'click', 'Write form - clicked']);
			})
			.delegate('.b-inbox a', 'mousedown', function() {
				LJLive.writePostHide();
				LJLive.suggestHide();
				LJLive.suggestBubbleRemove();
				
				!LJLive.messagesIsShow
					? LJLive.messagesShow(this)
					: LJLive.messagesHide();
				
				LJLive.window._gaq.push(['_trackEvent', 'Mini LJTimes', 'click', 'Messages']);
			})
			.delegate('.b-suggest a', 'mousedown', function() {
				LJLive.writePostHide();
				LJLive.suggestBubbleRemove();
				
				!LJLive.suggestIsShow
					? LJLive.suggestShow(this)
					: LJLive.suggestHide();
				
				LJLive.window._gaq.push(['_trackEvent', 'Mini LJTimes', 'click', 'Suggest clicked']);
			});
		
		jQuery('.b-update, .b-inbox', LJLive.frame_body).click(function(e){
			e.preventDefault();
		});
		
		// Google Analytics
		jQuery('.b-random', LJLive.frame_body).click(function(){
			LJLive.window._gaq.push(['_trackEvent', 'Mini LJTimes', 'click', 'Random journal']);
		});
		
		// TODO after 14 remove with branding
		if (LJLive.feb14 === true) {
			// place hearts in right place
			var suggest_link = jQuery('.b-suggest a', LJLive.frame_body),
				love_pic = jQuery('<i class="i-ljtimes-love" onmousedown="return LJLive.tagMousedown(event)"></i>').appendTo('#ljtime');
		
			setTimeout(function() {
				var right = jQuery(window).width() - suggest_link.offset().left; //place upper part of picture right above bottom one
				love_pic.css('right', right + 'px').show();
			}, 100);
		}
	},
	
	insertAdditionalHTML: function() {
		jQuery('#ljtime').append( LJLive.ml.html_additional );
	},

	helpBubbleInit: function()
	{
		if (Cookie('ljlive-bubble') === '2') {
			return;
		}
		
		var $win = jQuery(window),
			$doc = jQuery(document);
		
		function show_bubble(text)
		{
			$win.unbind('scroll', check_to_show_bubble);
			$doc.unbind('mousemove', check_to_show_bubble);
			jQuery('#ljtime').unbind('mouseover', check_to_show_bubble);
			
			var bubble = jQuery(LJLive.ml.html_bubble).appendTo('#ljtime');
			bubble
				.find('.b-ljtimes-bubble-p')
				.html(text);
			bubble
				.css('top', -bubble.height() - 27)
				.find('.b-ljtimes-bubble-close')
					.click(function(){
						bubble.remove();
						Cookie('ljlive-bubble', 1, { expires: 355, domain: '.'+location.host.match(/[^.]+\.\w+$/)[0], path: '/' });
						
						// suggest bubble
						show_suggest_bubble();
					});
		}
		
		function show_suggest_bubble()
		{
			var bubble = jQuery(LJLive.ml.html_suggest_bubble),
				suggestLink = jQuery(LJLive.frame_body).find('.b-suggest a'),
				// arrow of center
				right = $win.width() - suggestLink.offset().left - suggestLink.width()/2 - 40;
			
			bubble
				.css('right', right)
				.find('.i-popup-close')
					.click(function(){
						bubble.remove();
						Cookie('ljlive-bubble', 2, { expires: 355, domain: '.'+location.host.match(/[^.]+\.\w+$/)[0], path: '/' });
					})
				.end()
				.appendTo('#ljtime');
			
			LJLive.suggestBubble = bubble;
		}
		
		var timeout;
		function check_to_show_bubble(e)
		{
			clearTimeout(timeout);
			switch(e.type) {
				case 'mousemove': // user rests
					timeout = setTimeout(function(){
						show_bubble(LJLive.ml.bubble_rests);
					}, 1000*60);
					break;
				case 'scroll': // bottom page
					if ($win.scrollTop() + $win.height() === $doc.height()) {
						show_bubble(LJLive.ml.bubble_scroll);
					}
					break;
				case 'mouseover':
					show_bubble(LJLive.ml.bubble_mouseover);
					break;
			}
		}
		
		if (!Cookie('ljlive-bubble')) {
			$win.scroll(check_to_show_bubble);
			$doc.mousemove(check_to_show_bubble);
			jQuery('#ljtime').mouseover(check_to_show_bubble);
		} else if (Cookie('ljlive-bubble') === '1') {
			show_suggest_bubble();
		}
	},
	
	dataInit: function(data)
	{
		if (data.mode === 'night') {
			jQuery('.b-ttiny', LJLive.frame_body).addClass('b-ttiny-night');
		}
		var i;
		for (i = -1; data.live[++i];) {
			data.live[i].text = data.live[i].text + ', ' + LJLive.calcTime(data.live[i].ts);
		}
		
		// TODO: delete
		if (LJLive.window.additional_data) {
			var i = -1;
			for (; LJLive.window.additional_data[++i]; ) {
				data.live.splice(Math.round(i*2.3), 0, LJLive.window.additional_data[i])
			}
		}
		
		for (i = -1; data.themes[++i];) {
			data.themes[i].text = data.themes[i].text + ', ' + LJLive.calcTime(data.themes[i].ts);
		}
		
		var text_ary = data
						.live.concat(data.themes)
						.sort(function(){ return Math.round(Math.random())-0.5; });
		
		if (text_ary.length) {
			i = 0;
			var last_node,
				before_last_node,
				post_container = jQuery('.b-posts', LJLive.frame_body),
				logo_width = jQuery('.b-logo', LJLive.frame_body).outerWidth(),
				interval,
				anim_complete = true,
				fade_nodes = function( in_node, out_node ) {
					var anim_count = 2,
						fadeFinshed = function() {
							anim_count--;
							anim_complete = anim_count === 0;
						};

					anim_complete = false;
					out_node.fadeTo(800, 0, function() {
						jQuery(this).remove();
						fadeFinshed();
					} );
					in_node.fadeTo(800, 1, function() {
						fadeFinshed();
					} );
				},
				interval_func = function()
				{
					if( !anim_complete ) { return; }

					if (!text_ary[i+1]) {
						i = -1;
					}
					var post_data = text_ary[++i],
						node = jQuery('<li>'+post_data.text+'</li>', LJLive.frame_body.ownerDocument),
						width = jQuery(window).width() - logo_width - jQuery('.b-quick', LJLive.frame_body).outerWidth() - jQuery('.b-inbox', LJLive.frame_body).width();
					
					node
						.mouseenter(function(){
							clearInterval(interval);
						})
						.mouseleave(function(){
							clearInterval(interval);
							interval = setInterval(interval_func, 5000);
						})
						.css('width', width);
					
					if (last_node) {
						node.css('opacity', 0);
					}
					
					node.appendTo(post_container);
					
					ellipsis(node[0]);
					
					if (last_node) {
						fade_nodes( node, last_node );
					}
					
					//Google Analytics
					var click_node = node.find('a:first');
					if (!click_node[0].onclick) {
						click_node.click(function(e) {
							LJLive.window._gaq.push(['_trackEvent', 'Live - mini ljtimes', 'click', this.href]);
							// if no new tab
							if (this.target !== '_blank' && !(e.metaKey || e.altKey || e.shiftKey || e.ctrlKey) && e.which === 1) {
								setTimeout('top.location="' + this.href + '"', 100);
								e.preventDefault();
							}
						});
					}
					
					last_node = node;
				};
			
			interval = setInterval(interval_func, 5000);
			interval_func();
		}

		LJLive.insertAdditionalHTML();
		jQuery(document).trigger('ljliveReady');
	}
};

(function( top ) {

	var icoBase = 'http://wh.lj.ru/iepinned';

	function updateJumpList( dict, inboxNumber ) {
		inboxNumber = inboxNumber || 0;
		window.external.msSiteModeCreateJumplist( 'LiveJournal');
		window.external.msSiteModeAddJumpListItem( dict.journal, Site.remoteJournalBase, icoBase + '/recent.ico' );
		window.external.msSiteModeAddJumpListItem( dict.friends, Site.remoteJournalBase + '/friends', icoBase + '/friends.ico' );
		window.external.msSiteModeAddJumpListItem( dict.ljtimes, Site.siteroot + '/ljtimes/', icoBase + '/ljtimes.ico' );
		window.external.msSiteModeAddJumpListItem( dict.ratings_posts, Site.siteroot + '/ratings/posts/', icoBase + '/top.ico' );
		window.external.msSiteModeAddJumpListItem( dict.random_journal, Site.siteroot + '/random.bml', icoBase + '/surprise.ico' );

		if( inboxNumber > 0 ) {
			window.external.msSiteModeAddJumpListItem( dict.inbox + '(' + inboxNumber + ')', Site.siteroot + '/inbox/', icoBase + '/inbox.ico' );
			window.external.msSiteModeSetIconOverlay( icoBase + '/inbox.ico', dict.inbox + '(' + inboxNumber + ')' );
		} else {
			window.external.msSiteModeAddJumpListItem( dict.inbox, Site.siteroot + '/inbox/', icoBase + '/inbox_empty.ico' );
			window.external.msSiteModeClearIconOverlay();
		}
		window.external.msSiteModeShowJumplist();
	}

	function fetchInbox() {
		var url = Site.siteroot + LiveJournal.getAjaxUrl( 'inbox_count' );
		$.getJSON( url, function( data ) {
			updateJumpList( data.number );
		} );
	}

	function setMeta( name, content ) {
		var meta = document.createElement( 'meta' )
		meta.name = name;
		meta.content = content;

		document.getElementsByTagName( 'head' )[0].appendChild( meta );
	}

	function injectPinnedMeta( dict ) {
		if( Site.has_remote ) {
			setMeta( "msapplication-task", "name=" + dict.update_journal + ";action-uri=" + Site.siteroot + "/update.bml;icon-uri=" + icoBase + "/post.ico" );
		}

		setMeta( "application-name", dict.app_name );
		setMeta( "msapplication-tooltip", dict.app_tooltip );
		setMeta( "msapplication-starturl", Site.siteroot );
	}

	var defaultDict = {
		app_name: 'LiveJournal',
		app_tooltip: 'Livejournal.com',
		inbox: 'Inbox',
		update_journal: 'Post an entry',
		journal: 'Journal',
		friends: 'Friends',
		ljtimes: 'LJTimes',
		ratings_posts: 'Ratings',
		random_journal: 'Surprise me!' 
    }

	top.ie9InitPinnedMode = function( dict ) {
        dict = jQuery.extend( {}, defaultDict, dict );
		try {
			injectPinnedMeta( dict );

			if(window.external.msIsSiteMode()) {
				if( Site.has_remote > 0 ) {
					//here we should pass the number of current unread notifications
                    var unread_count = parseInt( Site.inbox_unread_count, 10) || 0;
					updateJumpList( dict, unread_count );

					/*
					setInterval( function() {
						//fetchInbox();
						//ajax requests emulation
						//updateJumpList( dict, Math.floor( Math.random() * 10 ) );
					}, 3000 );
					*/
				} else {
					window.external.msSiteModeClearJumplist();
					window.external.msSiteModeClearIconOverlay();
				}
			}
			else {}
		}
		catch(e) { }
	}

    ie9InitPinnedMode();

}( window ));


/*!
 * LiveJournal loader for vkontakte like buttons.
 *
 * Copyright 2011, dmitry.petrov@sup.com
 *
 * VK script is often loaded with notable delay, so
 * plugin just loads it after the page rendering and
 * allows to display page faster.
 *
 */
( function( $ ) {

	if( $.VK ) { return; }

	$.VK = {};

	var onloads = [];
		buttons = [],
		onloadPassed = false,
		scriptLoaded = false,
		scriptLoading = false;

	/**
	 * Public API
	 *
	 * @namespase $.VK
	 */
	$.VK = {

		/**
		 * Init VK object after the script load.
		 *     Function passes all option to the VK.init
		 *  @param {Object} options
		 */
		init: function( options ) {
			onloads.push( function() {
				VK.init( options );
			} )
		},

		/**
		 * Add button to init after script load.
		 *    If this method was called after the page load, and script wasn't downloaded yet,
		 *    it will trigger downloading.
		 */
		addButton: function( elementId, options ) {
			buttons.push( {
				id: elementId,
				options: options
			} );

			if( onloadPassed && !scriptLoading ) {
				if( scriptLoaded ) {
					initButtons();
				} else {
					loadScript( initButtons );
				}
			}
		}
	}

	function initButtons() {
		for( var i = 0; i < buttons.length; ++i ) {
			VK.Widgets.Like( buttons[ i ].id, buttons[ i ].options );
		}

		buttons = [];
	}

	function loadScript( onload ) {
		onload = onload || $.noop;
		scriptLoading = true;

		$.getScript( 'http://userapi.com/js/api/openapi.js?31', function() {
			scriptLoading = false;
			scriptLoaded = true;
			for( var i = 0; i < onloads.length; ++i ) {

				onloads[ i ]();
			}
			onloads = [];
			onload();
		} );
	}

	jQuery( function() {
		//Do not download the script if the widgets were not added yet.
		if( buttons.length ) {
			//Do not load the script directly after the page load.
			//We don't want to delay other onload functions somehow.
			setTimeout( function() {
				loadScript( initButtons );
			}, 500 );
		}
		onloadPassed = true;
	} );

} ) ( jQuery );

