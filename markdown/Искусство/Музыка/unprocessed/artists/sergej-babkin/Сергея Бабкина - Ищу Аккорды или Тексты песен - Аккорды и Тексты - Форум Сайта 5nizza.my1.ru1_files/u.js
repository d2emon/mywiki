/*!
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){

var 
	// Will speed up references to window, and allows munging its name.
	window = this,
	// Will speed up references to undefined, and allows munging its name.
	undefined,
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,
	// Map over the $ in case of overwrite
	_$ = window.$,

	jQuery = window.jQuery = window.$ = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context );
	},

	// A simple way to check for HTML strings or ID strings
	// (both of which we optimize for)
	quickExpr = /^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,
	// Is it a simple selector
	isSimple = /^.[^:#\[\.,]*$/;

jQuery.fn = jQuery.prototype = {
	init: function( selector, context ) {
		// Make sure that a selection was provided
		selector = selector || document;

		// Handle $(DOMElement)
		if ( selector.nodeType ) {
			this[0] = selector;
			this.length = 1;
			this.context = selector;
			return this;
		}
		// Handle HTML strings
		if ( typeof selector === "string" ) {
			// Are we dealing with HTML string or an ID?
			var match = quickExpr.exec( selector );

			// Verify a match, and that no context was specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] )
					selector = jQuery.clean( [ match[1] ], context );

				// HANDLE: $("#id")
				else {
					var elem = document.getElementById( match[3] );

					// Handle the case where IE and Opera return items
					// by name instead of ID
					if ( elem && elem.id != match[3] )
						return jQuery().find( selector );

					// Otherwise, we inject the element directly into the jQuery object
					var ret = jQuery( elem || [] );
					ret.context = document;
					ret.selector = selector;
					return ret;
				}

			// HANDLE: $(expr, [context])
			// (which is just equivalent to: $(content).find(expr)
			} else
				return jQuery( context ).find( selector );

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) )
			return jQuery( document ).ready( selector );

		// Make sure that old selector state is passed along
		if ( selector.selector && selector.context ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return this.setArray(jQuery.isArray( selector ) ?
			selector :
			jQuery.makeArray(selector));
	},

	// Start with an empty selector
	selector: "",

	// The current version of jQuery being used
	jquery: "1.3.2",

	// The number of elements contained in the matched element set
	size: function() {
		return this.length;
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num === undefined ?

			// Return a 'clean' array
			Array.prototype.slice.call( this ) :

			// Return just the object
			this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems, name, selector ) {
		// Build a new jQuery matched element set
		var ret = jQuery( elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		ret.context = this.context;

		if ( name === "find" )
			ret.selector = this.selector + (this.selector ? " " : "") + selector;
		else if ( name )
			ret.selector = this.selector + "." + name + "(" + selector + ")";

		// Return the newly-formed element set
		return ret;
	},

	// Force the current matched set of elements to become
	// the specified array of elements (destroying the stack in the process)
	// You should use pushStack() in order to do this, but maintain the stack
	setArray: function( elems ) {
		// Resetting the length to 0, then using the native Array push
		// is a super-fast way to populate an object with array-like properties
		this.length = 0;
		Array.prototype.push.apply( this, elems );

		return this;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {
		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem && elem.jquery ? elem[0] : elem
		, this );
	},

	attr: function( name, value, type ) {
		var options = name;

		// Look for the case where we're accessing a style value
		if ( typeof name === "string" )
			if ( value === undefined )
				return this[0] && jQuery[ type || "attr" ]( this[0], name );

			else {
				options = {};
				options[ name ] = value;
			}

		// Check to see if we're setting style values
		return this.each(function(i){
			// Set all the styles
			for ( name in options )
				jQuery.attr(
					type ?
						this.style :
						this,
					name, jQuery.prop( this, options[ name ], type, i, name )
				);
		});
	},

	css: function( key, value ) {
		// ignore negative width and height values
		if ( (key == 'width' || key == 'height') && parseFloat(value) < 0 )
			value = undefined;
		return this.attr( key, value, "curCSS" );
	},

	text: function( text ) {
		if ( typeof text !== "object" && text != null )
			return this.empty().append( (this[0] && this[0].ownerDocument || document).createTextNode( text ) );

		var ret = "";

		jQuery.each( text || this, function(){
			jQuery.each( this.childNodes, function(){
				if ( this.nodeType != 8 )
					ret += this.nodeType != 1 ?
						this.nodeValue :
						jQuery.fn.text( [ this ] );
			});
		});

		return ret;
	},

	wrapAll: function( html ) {
		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).clone();

			if ( this[0].parentNode )
				wrap.insertBefore( this[0] );

			wrap.map(function(){
				var elem = this;

				while ( elem.firstChild )
					elem = elem.firstChild;

				return elem;
			}).append(this);
		}

		return this;
	},

	wrapInner: function( html ) {
		return this.each(function(){
			jQuery( this ).contents().wrapAll( html );
		});
	},

	wrap: function( html ) {
		return this.each(function(){
			jQuery( this ).wrapAll( html );
		});
	},

	append: function() {
		return this.domManip(arguments, true, function(elem){
			if (this.nodeType == 1)
				this.appendChild( elem );
		});
	},

	prepend: function() {
		return this.domManip(arguments, true, function(elem){
			if (this.nodeType == 1)
				this.insertBefore( elem, this.firstChild );
		});
	},

	before: function() {
		return this.domManip(arguments, false, function(elem){
			this.parentNode.insertBefore( elem, this );
		});
	},

	after: function() {
		return this.domManip(arguments, false, function(elem){
			this.parentNode.insertBefore( elem, this.nextSibling );
		});
	},

	end: function() {
		return this.prevObject || jQuery( [] );
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: [].push,
	sort: [].sort,
	splice: [].splice,

	find: function( selector ) {
		if ( this.length === 1 ) {
			var ret = this.pushStack( [], "find", selector );
			ret.length = 0;
			jQuery.find( selector, this[0], ret );
			return ret;
		} else {
			return this.pushStack( jQuery.unique(jQuery.map(this, function(elem){
				return jQuery.find( selector, elem );
			})), "find", selector );
		}
	},

	clone: function( events ) {
		// Do the clone
		var ret = this.map(function(){
			if ( !jQuery.support.noCloneEvent && !jQuery.isXMLDoc(this) ) {
				// IE copies events bound via attachEvent when
				// using cloneNode. Calling detachEvent on the
				// clone will also remove the events from the orignal
				// In order to get around this, we use innerHTML.
				// Unfortunately, this means some modifications to
				// attributes in IE that are actually only stored
				// as properties will not be copied (such as the
				// the name attribute on an input).
				var html = this.outerHTML;
				if ( !html ) {
					var div = this.ownerDocument.createElement("div");
					div.appendChild( this.cloneNode(true) );
					html = div.innerHTML;
				}

				return jQuery.clean([html.replace(/ jQuery\d+="(?:\d+|null)"/g, "").replace(/^\s*/, "")])[0];
			} else
				return this.cloneNode(true);
		});

		// Copy the events from the original to the clone
		if ( events === true ) {
			var orig = this.find("*").andSelf(), i = 0;

			ret.find("*").andSelf().each(function(){
				if ( this.nodeName !== orig[i].nodeName )
					return;

				var events = jQuery.data( orig[i], "events" );

				for ( var type in events ) {
					for ( var handler in events[ type ] ) {
						jQuery.event.add( this, type, events[ type ][ handler ], events[ type ][ handler ].data );
					}
				}

				i++;
			});
		}

		// Return the cloned set
		return ret;
	},

	filter: function( selector ) {
		return this.pushStack(
			jQuery.isFunction( selector ) &&
			jQuery.grep(this, function(elem, i){
				return selector.call( elem, i );
			}) ||

			jQuery.multiFilter( selector, jQuery.grep(this, function(elem){
				return elem.nodeType === 1;
			}) ), "filter", selector );
	},

	closest: function( selector ) {
		var pos = jQuery.expr.match.POS.test( selector ) ? jQuery(selector) : null,
			closer = 0;

		return this.map(function(){
			var cur = this;
			while ( cur && cur.ownerDocument ) {
				if ( pos ? pos.index(cur) > -1 : jQuery(cur).is(selector) ) {
					jQuery.data(cur, "closest", closer);
					return cur;
				}
				cur = cur.parentNode;
				closer++;
			}
		});
	},

	not: function( selector ) {
		if ( typeof selector === "string" )
			// test special case where just one selector is passed in
			if ( isSimple.test( selector ) )
				return this.pushStack( jQuery.multiFilter( selector, this, true ), "not", selector );
			else
				selector = jQuery.multiFilter( selector, this );

		var isArrayLike = selector.length && selector[selector.length - 1] !== undefined && !selector.nodeType;
		return this.filter(function() {
			return isArrayLike ? jQuery.inArray( this, selector ) < 0 : this != selector;
		});
	},

	add: function( selector ) {
		return this.pushStack( jQuery.unique( jQuery.merge(
			this.get(),
			typeof selector === "string" ?
				jQuery( selector ) :
				jQuery.makeArray( selector )
		)));
	},

	is: function( selector ) {
		return !!selector && jQuery.multiFilter( selector, this ).length > 0;
	},

	hasClass: function( selector ) {
		return !!selector && this.is( "." + selector );
	},

	val: function( value ) {
		if ( value === undefined ) {			
			var elem = this[0];

			if ( elem ) {
				if( jQuery.nodeName( elem, 'option' ) )
					return (elem.attributes.value || {}).specified ? elem.value : elem.text;
				
				// We need to handle select boxes special
				if ( jQuery.nodeName( elem, "select" ) ) {
					var index = elem.selectedIndex,
						values = [],
						options = elem.options,
						one = elem.type == "select-one";

					// Nothing was selected
					if ( index < 0 )
						return null;

					// Loop through all the selected options
					for ( var i = one ? index : 0, max = one ? index + 1 : options.length; i < max; i++ ) {
						var option = options[ i ];

						if ( option.selected ) {
							// Get the specifc value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if ( one )
								return value;

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;				
				}

				// Everything else, we just grab the value
				return (elem.value || "").replace(/\r/g, "");

			}

			return undefined;
		}

		if ( typeof value === "number" )
			value += '';

		return this.each(function(){
			if ( this.nodeType != 1 )
				return;

			if ( jQuery.isArray(value) && /radio|checkbox/.test( this.type ) )
				this.checked = (jQuery.inArray(this.value, value) >= 0 ||
					jQuery.inArray(this.name, value) >= 0);

			else if ( jQuery.nodeName( this, "select" ) ) {
				var values = jQuery.makeArray(value);

				jQuery( "option", this ).each(function(){
					this.selected = (jQuery.inArray( this.value, values ) >= 0 ||
						jQuery.inArray( this.text, values ) >= 0);
				});

				if ( !values.length )
					this.selectedIndex = -1;

			} else
				this.value = value;
		});
	},

	html: function( value ) {
		return value === undefined ?
			(this[0] ?
				this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g, "") :
				null) :
			this.empty().append( value );
	},

	replaceWith: function( value ) {
		return this.after( value ).remove();
	},

	eq: function( i ) {
		return this.slice( i, +i + 1 );
	},

	slice: function() {
		return this.pushStack( Array.prototype.slice.apply( this, arguments ),
			"slice", Array.prototype.slice.call(arguments).join(",") );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function(elem, i){
			return callback.call( elem, i, elem );
		}));
	},

	andSelf: function() {
		return this.add( this.prevObject );
	},

	domManip: function( args, table, callback ) {
		if ( this[0] ) {
			var fragment = (this[0].ownerDocument || this[0]).createDocumentFragment(),
				scripts = jQuery.clean( args, (this[0].ownerDocument || this[0]), fragment ),
				first = fragment.firstChild;

			if ( first )
				for ( var i = 0, l = this.length; i < l; i++ )
					callback.call( root(this[i], first), this.length > 1 || i > 0 ?
							fragment.cloneNode(true) : fragment );
		
			if ( scripts )
				jQuery.each( scripts, evalScript );
		}

		return this;
		
		function root( elem, cur ) {
			return table && jQuery.nodeName(elem, "table") && jQuery.nodeName(cur, "tr") ?
				(elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild(elem.ownerDocument.createElement("tbody"))) :
				elem;
		}
	}
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

function evalScript( i, elem ) {
	if ( elem.src )
		jQuery.ajax({
			url: elem.src,
			async: false,
			dataType: "script"
		});

	else
		jQuery.globalEval( elem.text || elem.textContent || elem.innerHTML || "" );

	if ( elem.parentNode )
		elem.parentNode.removeChild( elem );
}

function now(){
	return +new Date;
}

jQuery.extend = jQuery.fn.extend = function() {
	// copy reference to target object
	var target = arguments[0] || {}, i = 1, length = arguments.length, deep = false, options;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) )
		target = {};

	// extend jQuery itself if only one argument is passed
	if ( length == i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ )
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null )
			// Extend the base object
			for ( var name in options ) {
				var src = target[ name ], copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy )
					continue;

				// Recurse if we're merging object values
				if ( deep && copy && typeof copy === "object" && !copy.nodeType )
					target[ name ] = jQuery.extend( deep, 
						// Never move original objects, clone them
						src || ( copy.length != null ? [ ] : { } )
					, copy );

				// Don't bring in undefined values
				else if ( copy !== undefined )
					target[ name ] = copy;

			}

	// Return the modified object
	return target;
};

// exclude the following css properties to add px
var	exclude = /z-?index|font-?weight|opacity|zoom|line-?height/i,
	// cache defaultView
	defaultView = document.defaultView || {},
	toString = Object.prototype.toString;

jQuery.extend({
	noConflict: function( deep ) {
		window.$ = _$;

		if ( deep )
			window.jQuery = _jQuery;

		return jQuery;
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return toString.call(obj) === "[object Function]";
	},

	isArray: function( obj ) {
		return toString.call(obj) === "[object Array]";
	},

	// check if an element is in a (or is an) XML document
	isXMLDoc: function( elem ) {
		return elem.nodeType === 9 && elem.documentElement.nodeName !== "HTML" ||
			!!elem.ownerDocument && jQuery.isXMLDoc( elem.ownerDocument );
	},

	// Evalulates a script in a global context
	globalEval: function( data ) {
		if ( data && /\S/.test(data) ) {
			// Inspired by code by Andrea Giammarchi
			// http://webreflection.blogspot.com/2007/08/global-scope-evaluation-and-dom.html
			var head = document.getElementsByTagName("head")[0] || document.documentElement,
				script = document.createElement("script");

			script.type = "text/javascript";
			if ( jQuery.support.scriptEval )
				script.appendChild( document.createTextNode( data ) );
			else
				script.text = data;

			// Use insertBefore instead of appendChild  to circumvent an IE6 bug.
			// This arises when a base node is used (#2709).
			head.insertBefore( script, head.firstChild );
			head.removeChild( script );
		}
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toUpperCase() == name.toUpperCase();
	},

	// args is for internal usage only
	each: function( object, callback, args ) {
		var name, i = 0, length = object.length;

		if ( args ) {
			if ( length === undefined ) {
				for ( name in object )
					if ( callback.apply( object[ name ], args ) === false )
						break;
			} else
				for ( ; i < length; )
					if ( callback.apply( object[ i++ ], args ) === false )
						break;

		// A special, fast, case for the most common use of each
		} else {
			if ( length === undefined ) {
				for ( name in object )
					if ( callback.call( object[ name ], name, object[ name ] ) === false )
						break;
			} else
				for ( var value = object[0];
					i < length && callback.call( value, i, value ) !== false; value = object[++i] ){}
		}

		return object;
	},

	prop: function( elem, value, type, i, name ) {
		// Handle executable functions
		if ( jQuery.isFunction( value ) )
			value = value.call( elem, i );

		// Handle passing in a number to a CSS property
		return typeof value === "number" && type == "curCSS" && !exclude.test( name ) ?
			value + "px" :
			value;
	},

	className: {
		// internal only, use addClass("class")
		add: function( elem, classNames ) {
			jQuery.each((classNames || "").split(/\s+/), function(i, className){
				if ( elem.nodeType == 1 && !jQuery.className.has( elem.className, className ) )
					elem.className += (elem.className ? " " : "") + className;
			});
		},

		// internal only, use removeClass("class")
		remove: function( elem, classNames ) {
			if (elem.nodeType == 1)
				elem.className = classNames !== undefined ?
					jQuery.grep(elem.className.split(/\s+/), function(className){
						return !jQuery.className.has( classNames, className );
					}).join(" ") :
					"";
		},

		// internal only, use hasClass("class")
		has: function( elem, className ) {
			return elem && jQuery.inArray( className, (elem.className || elem).toString().split(/\s+/) ) > -1;
		}
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations
	swap: function( elem, options, callback ) {
		var old = {};
		// Remember the old values, and insert the new ones
		for ( var name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		callback.call( elem );

		// Revert the old values
		for ( var name in options )
			elem.style[ name ] = old[ name ];
	},

	css: function( elem, name, force, extra ) {
		if ( name == "width" || name == "height" ) {
			var val, props = { position: "absolute", visibility: "hidden", display:"block" }, which = name == "width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ];

			function getWH() {
				val = name == "width" ? elem.offsetWidth : elem.offsetHeight;

				if ( extra === "border" )
					return;

				jQuery.each( which, function() {
					if ( !extra )
						val -= parseFloat(jQuery.curCSS( elem, "padding" + this, true)) || 0;
					if ( extra === "margin" )
						val += parseFloat(jQuery.curCSS( elem, "margin" + this, true)) || 0;
					else
						val -= parseFloat(jQuery.curCSS( elem, "border" + this + "Width", true)) || 0;
				});
			}

			if ( elem.offsetWidth !== 0 )
				getWH();
			else
				jQuery.swap( elem, props, getWH );

			return Math.max(0, Math.round(val));
		}

		return jQuery.curCSS( elem, name, force );
	},

	curCSS: function( elem, name, force ) {
		var ret, style = elem.style;

		// We need to handle opacity special in IE
		if ( name == "opacity" && !jQuery.support.opacity ) {
			ret = jQuery.attr( style, "opacity" );

			return ret == "" ?
				"1" :
				ret;
		}

		// Make sure we're using the right name for getting the float value
		if ( name.match( /float/i ) )
			name = styleFloat;

		if ( !force && style && style[ name ] )
			ret = style[ name ];

		else if ( defaultView.getComputedStyle ) {

			// Only "float" is needed here
			if ( name.match( /float/i ) )
				name = "float";

			name = name.replace( /([A-Z])/g, "-$1" ).toLowerCase();

			var computedStyle = defaultView.getComputedStyle( elem, null );

			if ( computedStyle )
				ret = computedStyle.getPropertyValue( name );

			// We should always get a number back from opacity
			if ( name == "opacity" && ret == "" )
				ret = "1";

		} else if ( elem.currentStyle ) {
			var camelCase = name.replace(/\-(\w)/g, function(all, letter){
				return letter.toUpperCase();
			});

			ret = elem.currentStyle[ name ] || elem.currentStyle[ camelCase ];

			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			if ( !/^\d+(px)?$/i.test( ret ) && /^\d/.test( ret ) ) {
				// Remember the original values
				var left = style.left, rsLeft = elem.runtimeStyle.left;

				// Put in the new values to get a computed value out
				elem.runtimeStyle.left = elem.currentStyle.left;
				style.left = ret || 0;
				ret = style.pixelLeft + "px";

				// Revert the changed values
				style.left = left;
				elem.runtimeStyle.left = rsLeft;
			}
		}

		return ret;
	},

	clean: function( elems, context, fragment ) {
		context = context || document;

		// !context.createElement fails in IE with an error but returns typeof 'object'
		if ( typeof context.createElement === "undefined" )
			context = context.ownerDocument || context[0] && context[0].ownerDocument || document;

		// If a single string is passed in and it's a single tag
		// just do a createElement and skip the rest
		if ( !fragment && elems.length === 1 && typeof elems[0] === "string" ) {
			var match = /^<(\w+)\s*\/?>$/.exec(elems[0]);
			if ( match )
				return [ context.createElement( match[1] ) ];
		}

		var ret = [], scripts = [], div = context.createElement("div");

		jQuery.each(elems, function(i, elem){
			if ( typeof elem === "number" )
				elem += '';

			if ( !elem )
				return;

			// Convert html string into DOM nodes
			if ( typeof elem === "string" ) {
				// Fix "XHTML"-style tags in all browsers
				elem = elem.replace(/(<(\w+)[^>]*?)\/>/g, function(all, front, tag){
					return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i) ?
						all :
						front + "></" + tag + ">";
				});

				// Trim whitespace, otherwise indexOf won't work as expected
				var tags = elem.replace(/^\s+/, "").substring(0, 10).toLowerCase();

				var wrap =
					// option or optgroup
					!tags.indexOf("<opt") &&
					[ 1, "<select multiple='multiple'>", "</select>" ] ||

					!tags.indexOf("<leg") &&
					[ 1, "<fieldset>", "</fieldset>" ] ||

					tags.match(/^<(thead|tbody|tfoot|colg|cap)/) &&
					[ 1, "<table>", "</table>" ] ||

					!tags.indexOf("<tr") &&
					[ 2, "<table><tbody>", "</tbody></table>" ] ||

				 	// <thead> matched above
					(!tags.indexOf("<td") || !tags.indexOf("<th")) &&
					[ 3, "<table><tbody><tr>", "</tr></tbody></table>" ] ||

					!tags.indexOf("<col") &&
					[ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ] ||

					// IE can't serialize <link> and <script> tags normally
					!jQuery.support.htmlSerialize &&
					[ 1, "div<div>", "</div>" ] ||

					[ 0, "", "" ];

				// Go to html and back, then peel off extra wrappers
				div.innerHTML = wrap[1] + elem + wrap[2];

				// Move to the right depth
				while ( wrap[0]-- )
					div = div.lastChild;

				// Remove IE's autoinserted <tbody> from table fragments
				if ( !jQuery.support.tbody ) {

					// String was a <table>, *may* have spurious <tbody>
					var hasBody = /<tbody/i.test(elem),
						tbody = !tags.indexOf("<table") && !hasBody ?
							div.firstChild && div.firstChild.childNodes :

						// String was a bare <thead> or <tfoot>
						wrap[1] == "<table>" && !hasBody ?
							div.childNodes :
							[];

					for ( var j = tbody.length - 1; j >= 0 ; --j )
						if ( jQuery.nodeName( tbody[ j ], "tbody" ) && !tbody[ j ].childNodes.length )
							tbody[ j ].parentNode.removeChild( tbody[ j ] );

					}

				// IE completely kills leading whitespace when innerHTML is used
				if ( !jQuery.support.leadingWhitespace && /^\s/.test( elem ) )
					div.insertBefore( context.createTextNode( elem.match(/^\s*/)[0] ), div.firstChild );
				
				elem = jQuery.makeArray( div.childNodes );
			}

			if ( elem.nodeType )
				ret.push( elem );
			else
				ret = jQuery.merge( ret, elem );

		});

		if ( fragment ) {
			for ( var i = 0; ret[i]; i++ ) {
				if ( jQuery.nodeName( ret[i], "script" ) && (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript") ) {
					scripts.push( ret[i].parentNode ? ret[i].parentNode.removeChild( ret[i] ) : ret[i] );
				} else {
					if ( ret[i].nodeType === 1 )
						ret.splice.apply( ret, [i + 1, 0].concat(jQuery.makeArray(ret[i].getElementsByTagName("script"))) );
					fragment.appendChild( ret[i] );
				}
			}
			
			return scripts;
		}

		return ret;
	},

	attr: function( elem, name, value ) {
		// don't set attributes on text and comment nodes
		if (!elem || elem.nodeType == 3 || elem.nodeType == 8)
			return undefined;

		var notxml = !jQuery.isXMLDoc( elem ),
			// Whether we are setting (or getting)
			set = value !== undefined;

		// Try to normalize/fix the name
		name = notxml && jQuery.props[ name ] || name;

		// Only do all the following if this is a node (faster for style)
		// IE elem.getAttribute passes even for style
		if ( elem.tagName ) {

			// These attributes require special treatment
			var special = /href|src|style/.test( name );

			// Safari mis-reports the default selected property of a hidden option
			// Accessing the parent's selectedIndex property fixes it
			if ( name == "selected" && elem.parentNode )
				elem.parentNode.selectedIndex;

			// If applicable, access the attribute via the DOM 0 way
			if ( name in elem && notxml && !special ) {
				if ( set ){
					// We can't allow the type property to be changed (since it causes problems in IE)
					if ( name == "type" && jQuery.nodeName( elem, "input" ) && elem.parentNode )
						throw "type property can't be changed";

					elem[ name ] = value;
				}

				// browsers index elements by id/name on forms, give priority to attributes.
				if( jQuery.nodeName( elem, "form" ) && elem.getAttributeNode(name) )
					return elem.getAttributeNode( name ).nodeValue;

				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				if ( name == "tabIndex" ) {
					var attributeNode = elem.getAttributeNode( "tabIndex" );
					return attributeNode && attributeNode.specified
						? attributeNode.value
						: elem.nodeName.match(/(button|input|object|select|textarea)/i)
							? 0
							: elem.nodeName.match(/^(a|area)$/i) && elem.href
								? 0
								: undefined;
				}

				return elem[ name ];
			}

			if ( !jQuery.support.style && notxml &&  name == "style" )
				return jQuery.attr( elem.style, "cssText", value );

			if ( set )
				// convert the value to a string (all browsers do this but IE) see #1070
				elem.setAttribute( name, "" + value );

			var attr = !jQuery.support.hrefNormalized && notxml && special
					// Some attributes require a special call on IE
					? elem.getAttribute( name, 2 )
					: elem.getAttribute( name );

			// Non-existent attributes return null, we normalize to undefined
			return attr === null ? undefined : attr;
		}

		// elem is actually elem.style ... set the style

		// IE uses filters for opacity
		if ( !jQuery.support.opacity && name == "opacity" ) {
			if ( set ) {
				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				elem.zoom = 1;

				// Set the alpha filter to set the opacity
				elem.filter = (elem.filter || "").replace( /alpha\([^)]*\)/, "" ) +
					(parseInt( value ) + '' == "NaN" ? "" : "alpha(opacity=" + value * 100 + ")");
			}

			return elem.filter && elem.filter.indexOf("opacity=") >= 0 ?
				(parseFloat( elem.filter.match(/opacity=([^)]*)/)[1] ) / 100) + '':
				"";
		}

		name = name.replace(/-([a-z])/ig, function(all, letter){
			return letter.toUpperCase();
		});

		if ( set )
			elem[ name ] = value;

		return elem[ name ];
	},

	trim: function( text ) {
		return (text || "").replace( /^\s+|\s+$/g, "" );
	},

	makeArray: function( array ) {
		var ret = [];

		if( array != null ){
			var i = array.length;
			// The window, strings (and functions) also have 'length'
			if( i == null || typeof array === "string" || jQuery.isFunction(array) || array.setInterval )
				ret[0] = array;
			else
				while( i )
					ret[--i] = array[i];
		}

		return ret;
	},

	inArray: function( elem, array ) {
		for ( var i = 0, length = array.length; i < length; i++ )
		// Use === because on IE, window == document
			if ( array[ i ] === elem )
				return i;

		return -1;
	},

	merge: function( first, second ) {
		// We have to loop this way because IE & Opera overwrite the length
		// expando of getElementsByTagName
		var i = 0, elem, pos = first.length;
		// Also, we need to make sure that the correct elements are being returned
		// (IE returns comment nodes in a '*' query)
		if ( !jQuery.support.getAll ) {
			while ( (elem = second[ i++ ]) != null )
				if ( elem.nodeType != 8 )
					first[ pos++ ] = elem;

		} else
			while ( (elem = second[ i++ ]) != null )
				first[ pos++ ] = elem;

		return first;
	},

	unique: function( array ) {
		var ret = [], done = {};

		try {

			for ( var i = 0, length = array.length; i < length; i++ ) {
				var id = jQuery.data( array[ i ] );

				if ( !done[ id ] ) {
					done[ id ] = true;
					ret.push( array[ i ] );
				}
			}

		} catch( e ) {
			ret = array;
		}

		return ret;
	},

	grep: function( elems, callback, inv ) {
		var ret = [];

		// Go through the array, only saving the items
		// that pass the validator function
		for ( var i = 0, length = elems.length; i < length; i++ )
			if ( !inv != !callback( elems[ i ], i ) )
				ret.push( elems[ i ] );

		return ret;
	},

	map: function( elems, callback ) {
		var ret = [];

		// Go through the array, translating each of the items to their
		// new value (or values).
		for ( var i = 0, length = elems.length; i < length; i++ ) {
			var value = callback( elems[ i ], i );

			if ( value != null )
				ret[ ret.length ] = value;
		}

		return ret.concat.apply( [], ret );
	}
});

// Use of jQuery.browser is deprecated.
// It's included for backwards compatibility and plugins,
// although they should work to migrate away.

var userAgent = navigator.userAgent.toLowerCase();

// Figure out what browser is being used
jQuery.browser = {
	version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
	safari: /webkit/.test( userAgent ),
	opera: /opera/.test( userAgent ),
	msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
	mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )
};

jQuery.each({
	parent: function(elem){return elem.parentNode;},
	parents: function(elem){return jQuery.dir(elem,"parentNode");},
	next: function(elem){return jQuery.nth(elem,2,"nextSibling");},
	prev: function(elem){return jQuery.nth(elem,2,"previousSibling");},
	nextAll: function(elem){return jQuery.dir(elem,"nextSibling");},
	prevAll: function(elem){return jQuery.dir(elem,"previousSibling");},
	siblings: function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem);},
	children: function(elem){return jQuery.sibling(elem.firstChild);},
	contents: function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes);}
}, function(name, fn){
	jQuery.fn[ name ] = function( selector ) {
		var ret = jQuery.map( this, fn );

		if ( selector && typeof selector == "string" )
			ret = jQuery.multiFilter( selector, ret );

		return this.pushStack( jQuery.unique( ret ), name, selector );
	};
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function(name, original){
	jQuery.fn[ name ] = function( selector ) {
		var ret = [], insert = jQuery( selector );

		for ( var i = 0, l = insert.length; i < l; i++ ) {
			var elems = (i > 0 ? this.clone(true) : this).get();
			jQuery.fn[ original ].apply( jQuery(insert[i]), elems );
			ret = ret.concat( elems );
		}

		return this.pushStack( ret, name, selector );
	};
});

jQuery.each({
	removeAttr: function( name ) {
		jQuery.attr( this, name, "" );
		if (this.nodeType == 1)
			this.removeAttribute( name );
	},

	addClass: function( classNames ) {
		jQuery.className.add( this, classNames );
	},

	removeClass: function( classNames ) {
		jQuery.className.remove( this, classNames );
	},

	toggleClass: function( classNames, state ) {
		if( typeof state !== "boolean" )
			state = !jQuery.className.has( this, classNames );
		jQuery.className[ state ? "add" : "remove" ]( this, classNames );
	},

	remove: function( selector ) {
		if ( !selector || jQuery.filter( selector, [ this ] ).length ) {
			// Prevent memory leaks
			jQuery( "*", this ).add([this]).each(function(){
				jQuery.event.remove(this);
				jQuery.removeData(this);
			});
			if (this.parentNode)
				this.parentNode.removeChild( this );
		}
	},

	empty: function() {
		// Remove element nodes and prevent memory leaks
		jQuery(this).children().remove();

		// Remove any remaining nodes
		while ( this.firstChild )
			this.removeChild( this.firstChild );
	}
}, function(name, fn){
	jQuery.fn[ name ] = function(){
		return this.each( fn, arguments );
	};
});

// Helper function used by the dimensions and offset modules
function num(elem, prop) {
	return elem[0] && parseInt( jQuery.curCSS(elem[0], prop, true), 10 ) || 0;
}
var expando = "jQuery" + now(), uuid = 0, windowData = {};

jQuery.extend({
	cache: {},

	data: function( elem, name, data ) {
		elem = elem == window ?
			windowData :
			elem;

		var id = elem[ expando ];

		// Compute a unique ID for the element
		if ( !id )
			id = elem[ expando ] = ++uuid;

		// Only generate the data cache if we're
		// trying to access or manipulate it
		if ( name && !jQuery.cache[ id ] )
			jQuery.cache[ id ] = {};

		// Prevent overriding the named cache with undefined values
		if ( data !== undefined )
			jQuery.cache[ id ][ name ] = data;

		// Return the named cache data, or the ID for the element
		return name ?
			jQuery.cache[ id ][ name ] :
			id;
	},

	removeData: function( elem, name ) {
		elem = elem == window ?
			windowData :
			elem;

		var id = elem[ expando ];

		// If we want to remove a specific section of the element's data
		if ( name ) {
			if ( jQuery.cache[ id ] ) {
				// Remove the section of cache data
				delete jQuery.cache[ id ][ name ];

				// If we've removed all the data, remove the element's cache
				name = "";

				for ( name in jQuery.cache[ id ] )
					break;

				if ( !name )
					jQuery.removeData( elem );
			}

		// Otherwise, we want to remove all of the element's data
		} else {
			// Clean up the element expando
			try {
				delete elem[ expando ];
			} catch(e){
				// IE has trouble directly removing the expando
				// but it's ok with using removeAttribute
				if ( elem.removeAttribute )
					elem.removeAttribute( expando );
			}

			// Completely remove the data cache
			delete jQuery.cache[ id ];
		}
	},
	queue: function( elem, type, data ) {
		if ( elem ){
	
			type = (type || "fx") + "queue";
	
			var q = jQuery.data( elem, type );
	
			if ( !q || jQuery.isArray(data) )
				q = jQuery.data( elem, type, jQuery.makeArray(data) );
			else if( data )
				q.push( data );
	
		}
		return q;
	},

	dequeue: function( elem, type ){
		var queue = jQuery.queue( elem, type ),
			fn = queue.shift();
		
		if( !type || type === "fx" )
			fn = queue[0];
			
		if( fn !== undefined )
			fn.call(elem);
	}
});

jQuery.fn.extend({
	data: function( key, value ){
		var parts = key.split(".");
		parts[1] = parts[1] ? "." + parts[1] : "";

		if ( value === undefined ) {
			var data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);

			if ( data === undefined && this.length )
				data = jQuery.data( this[0], key );

			return data === undefined && parts[1] ?
				this.data( parts[0] ) :
				data;
		} else
			return this.trigger("setData" + parts[1] + "!", [parts[0], value]).each(function(){
				jQuery.data( this, key, value );
			});
	},

	removeData: function( key ){
		return this.each(function(){
			jQuery.removeData( this, key );
		});
	},
	queue: function(type, data){
		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
		}

		if ( data === undefined )
			return jQuery.queue( this[0], type );

		return this.each(function(){
			var queue = jQuery.queue( this, type, data );
			
			 if( type == "fx" && queue.length == 1 )
				queue[0].call(this);
		});
	},
	dequeue: function(type){
		return this.each(function(){
			jQuery.dequeue( this, type );
		});
	}
});/*!
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,  //'
	done = 0,
	toString = Object.prototype.toString;

var Sizzle = function(selector, context, results, seed) {
	results = results || [];
	context = context || document;

	if ( context.nodeType !== 1 && context.nodeType !== 9 )
		return [];
	
	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var parts = [], m, set, checkSet, check, mode, extra, prune = true;
	
	// Reset the position of the chunker regexp (start from head)
	chunker.lastIndex = 0;
	
	while ( (m = chunker.exec(selector)) !== null ) {
		parts.push( m[1] );
		
		if ( m[2] ) {
			extra = RegExp.rightContext;
			break;
		}
	}

	if ( parts.length > 1 && origPOS.exec( selector ) ) {
		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context );
		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] )
					selector += parts.shift();

				set = posProcess( selector, set );
			}
		}
	} else {
		var ret = seed ?
			{ expr: parts.pop(), set: makeArray(seed) } :
			Sizzle.find( parts.pop(), parts.length === 1 && context.parentNode ? context.parentNode : context, isXML(context) );
		set = Sizzle.filter( ret.expr, ret.set );

		if ( parts.length > 0 ) {
			checkSet = makeArray(set);
		} else {
			prune = false;
		}

		while ( parts.length ) {
			var cur = parts.pop(), pop = cur;

			if ( !Expr.relative[ cur ] ) {
				cur = "";
			} else {
				pop = parts.pop();
			}

			if ( pop == null ) {
				pop = context;
			}

			Expr.relative[ cur ]( checkSet, pop, isXML(context) );
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		throw "Syntax error, unrecognized expression: " + (cur || selector);
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );
		} else if ( context.nodeType === 1 ) {
			for ( var i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}
		} else {
			for ( var i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}
	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, context, results, seed );

		if ( sortOrder ) {
			hasDuplicate = false;
			results.sort(sortOrder);

			if ( hasDuplicate ) {
				for ( var i = 1; i < results.length; i++ ) {
					if ( results[i] === results[i-1] ) {
						results.splice(i--, 1);
					}
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function(expr, set){
	return Sizzle(expr, null, null, set);
};

Sizzle.find = function(expr, context, isXML){
	var set, match;

	if ( !expr ) {
		return [];
	}

	for ( var i = 0, l = Expr.order.length; i < l; i++ ) {
		var type = Expr.order[i], match;
		
		if ( (match = Expr.match[ type ].exec( expr )) ) {
			var left = RegExp.leftContext;

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace(/\\/g, "");
				set = Expr.find[ type ]( match, context, isXML );
				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = context.getElementsByTagName("*");
	}

	return {set: set, expr: expr};
};

Sizzle.filter = function(expr, set, inplace, not){
	var old = expr, result = [], curLoop = set, match, anyFound,
		isXMLFilter = set && set[0] && isXML(set[0]);

	while ( expr && set.length ) {
		for ( var type in Expr.filter ) {
			if ( (match = Expr.match[ type ].exec( expr )) != null ) {
				var filter = Expr.filter[ type ], found, item;
				anyFound = false;

				if ( curLoop == result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;
					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( var i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							var pass = not ^ !!found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;
								} else {
									curLoop[i] = false;
								}
							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		// Improper expression
		if ( expr == old ) {
			if ( anyFound == null ) {
				throw "Syntax error, unrecognized expression: " + expr;
			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],
	match: {
		ID: /#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
	},
	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},
	attrHandle: {
		href: function(elem){
			return elem.getAttribute("href");
		}
	},
	relative: {
		"+": function(checkSet, part, isXML){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !/\W/.test(part),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag && !isXML ) {
				part = part.toUpperCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},
		">": function(checkSet, part, isXML){
			var isPartStr = typeof part === "string";

			if ( isPartStr && !/\W/.test(part) ) {
				part = isXML ? part : part.toUpperCase();

				for ( var i = 0, l = checkSet.length; i < l; i++ ) {
					var elem = checkSet[i];
					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName === part ? parent : false;
					}
				}
			} else {
				for ( var i = 0, l = checkSet.length; i < l; i++ ) {
					var elem = checkSet[i];
					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},
		"": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck;

			if ( !part.match(/\W/) ) {
				var nodeCheck = part = isXML ? part : part.toUpperCase();
				checkFn = dirNodeCheck;
			}

			checkFn("parentNode", part, doneName, checkSet, nodeCheck, isXML);
		},
		"~": function(checkSet, part, isXML){
			var doneName = done++, checkFn = dirCheck;

			if ( typeof part === "string" && !part.match(/\W/) ) {
				var nodeCheck = part = isXML ? part : part.toUpperCase();
				checkFn = dirNodeCheck;
			}

			checkFn("previousSibling", part, doneName, checkSet, nodeCheck, isXML);
		}
	},
	find: {
		ID: function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? [m] : [];
			}
		},
		NAME: function(match, context, isXML){
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [], results = context.getElementsByName(match[1]);

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},
		TAG: function(match, context){
			return context.getElementsByTagName(match[1]);
		}
	},
	preFilter: {
		CLASS: function(match, curLoop, inplace, result, not, isXML){
			match = " " + match[1].replace(/\\/g, "") + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").indexOf(match) >= 0) ) {
						if ( !inplace )
							result.push( elem );
					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},
		ID: function(match){
			return match[1].replace(/\\/g, "");
		},
		TAG: function(match, curLoop){
			for ( var i = 0; curLoop[i] === false; i++ ){}
			return curLoop[i] && isXML(curLoop[i]) ? match[1] : match[1].toUpperCase();
		},
		CHILD: function(match){
			if ( match[1] == "nth" ) {
				// parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
				var test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(
					match[2] == "even" && "2n" || match[2] == "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				// calculate the numbers (first)n+(last) including if they are negative
				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}

			// TODO: Move to normal caching system
			match[0] = done++;

			return match;
		},
		ATTR: function(match, curLoop, inplace, result, not, isXML){
			var name = match[1].replace(/\\/g, "");
			
			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},
		PSEUDO: function(match, curLoop, inplace, result, not){
			if ( match[1] === "not" ) {
				// If we're dealing with a complex expression, or a simple one
				if ( match[3].match(chunker).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);
				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);
					if ( !inplace ) {
						result.push.apply( result, ret );
					}
					return false;
				}
			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}
			
			return match;
		},
		POS: function(match){
			match.unshift( true );
			return match;
		}
	},
	filters: {
		enabled: function(elem){
			return elem.disabled === false && elem.type !== "hidden";
		},
		disabled: function(elem){
			return elem.disabled === true;
		},
		checked: function(elem){
			return elem.checked === true;
		},
		selected: function(elem){
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			elem.parentNode.selectedIndex;
			return elem.selected === true;
		},
		parent: function(elem){
			return !!elem.firstChild;
		},
		empty: function(elem){
			return !elem.firstChild;
		},
		has: function(elem, i, match){
			return !!Sizzle( match[3], elem ).length;
		},
		header: function(elem){
			return /h\d/i.test( elem.nodeName );
		},
		text: function(elem){
			return "text" === elem.type;
		},
		radio: function(elem){
			return "radio" === elem.type;
		},
		checkbox: function(elem){
			return "checkbox" === elem.type;
		},
		file: function(elem){
			return "file" === elem.type;
		},
		password: function(elem){
			return "password" === elem.type;
		},
		submit: function(elem){
			return "submit" === elem.type;
		},
		image: function(elem){
			return "image" === elem.type;
		},
		reset: function(elem){
			return "reset" === elem.type;
		},
		button: function(elem){
			return "button" === elem.type || elem.nodeName.toUpperCase() === "BUTTON";
		},
		input: function(elem){
			return /input|select|textarea|button/i.test(elem.nodeName);
		}
	},
	setFilters: {
		first: function(elem, i){
			return i === 0;
		},
		last: function(elem, i, match, array){
			return i === array.length - 1;
		},
		even: function(elem, i){
			return i % 2 === 0;
		},
		odd: function(elem, i){
			return i % 2 === 1;
		},
		lt: function(elem, i, match){
			return i < match[3] - 0;
		},
		gt: function(elem, i, match){
			return i > match[3] - 0;
		},
		nth: function(elem, i, match){
			return match[3] - 0 == i;
		},
		eq: function(elem, i, match){
			return match[3] - 0 == i;
		}
	},
	filter: {
		PSEUDO: function(elem, match, i, array){
			var name = match[1], filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || "").indexOf(match[3]) >= 0;
			} else if ( name === "not" ) {
				var not = match[3];

				for ( var i = 0, l = not.length; i < l; i++ ) {
					if ( not[i] === elem ) {
						return false;
					}
				}

				return true;
			}
		},
		CHILD: function(elem, match){
			var type = match[1], node = elem;
			switch (type) {
				case 'only':
				case 'first':
					while (node = node.previousSibling)  {
						if ( node.nodeType === 1 ) return false;
					}
					if ( type == 'first') return true;
					node = elem;
				case 'last':
					while (node = node.nextSibling)  {
						if ( node.nodeType === 1 ) return false;
					}
					return true;
				case 'nth':
					var first = match[2], last = match[3];

					if ( first == 1 && last == 0 ) {
						return true;
					}
					
					var doneName = match[0],
						parent = elem.parentNode;
	
					if ( parent && (parent.sizcache !== doneName || !elem.nodeIndex) ) {
						var count = 0;
						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						} 
						parent.sizcache = doneName;
					}
					
					var diff = elem.nodeIndex - last;
					if ( first == 0 ) {
						return diff == 0;
					} else {
						return ( diff % first == 0 && diff / first >= 0 );
					}
			}
		},
		ID: function(elem, match){
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},
		TAG: function(elem, match){
			return (match === "*" && elem.nodeType === 1) || elem.nodeName === match;
		},
		CLASS: function(elem, match){
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},
		ATTR: function(elem, match){
			var name = match[1],
				result = Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value != check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},
		POS: function(elem, match, i, array){
			var name = match[2], filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS;

for ( var type in Expr.match ) {
	Expr.match[ type ] = RegExp( Expr.match[ type ].source + /(?![^\[]*\])(?![^\(]*\))/.source );
}

var makeArray = function(array, results) {
	array = Array.prototype.slice.call( array );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}
	
	return array;
};

// Perform a simple check to determine if the browser is capable of
// converting a NodeList to an array using builtin methods.
try {
	Array.prototype.slice.call( document.documentElement.childNodes );

// Provide a fallback method if it does not work
} catch(e){
	makeArray = function(array, results) {
		var ret = results || [];

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );
		} else {
			if ( typeof array.length === "number" ) {
				for ( var i = 0, l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}
			} else {
				for ( var i = 0; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		var ret = a.compareDocumentPosition(b) & 4 ? -1 : a === b ? 0 : 1;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( "sourceIndex" in document.documentElement ) {
	sortOrder = function( a, b ) {
		var ret = a.sourceIndex - b.sourceIndex;
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
} else if ( document.createRange ) {
	sortOrder = function( a, b ) {
		var aRange = a.ownerDocument.createRange(), bRange = b.ownerDocument.createRange();
		aRange.selectNode(a);
		aRange.collapse(true);
		bRange.selectNode(b);
		bRange.collapse(true);
		var ret = aRange.compareBoundaryPoints(Range.START_TO_END, bRange);
		if ( ret === 0 ) {
			hasDuplicate = true;
		}
		return ret;
	};
}

// Check to see if the browser returns elements by name when
// querying by getElementById (and provide a workaround)
(function(){
	// We're going to inject a fake input element with a specified name
	var form = document.createElement("form"),
		id = "script" + (new Date).getTime();
	form.innerHTML = "<input name='" + id + "'/>";

	// Inject it into the root element, check its status, and remove it quickly
	var root = document.documentElement;
	root.insertBefore( form, root.firstChild );

	// The workaround has to do additional checks after a getElementById
	// Which slows things down for other browsers (hence the branching)
	if ( !!document.getElementById( id ) ) {
		Expr.find.ID = function(match, context, isXML){
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				return m ? m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ? [m] : undefined : [];
			}
		};

		Expr.filter.ID = function(elem, match){
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );
})();

(function(){
	// Check to see if the browser returns only elements
	// when doing getElementsByTagName("*")

	// Create a fake element
	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	// Make sure no comments are found
	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function(match, context){
			var results = context.getElementsByTagName(match[1]);

			// Filter out possible comments
			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	// Check to see if an attribute returns normalized href attributes
	div.innerHTML = "<a href='#'></a>";
	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {
		Expr.attrHandle.href = function(elem){
			return elem.getAttribute("href", 2);
		};
	}
})();

if ( document.querySelectorAll ) (function(){
	var oldSizzle = Sizzle, div = document.createElement("div");
	div.innerHTML = "<p class='TEST'></p>";

	// Safari can't handle uppercase or unicode characters when
	// in quirks mode.
	if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
		return;
	}
	
	Sizzle = function(query, context, extra, seed){
		context = context || document;

		// Only use querySelectorAll on non-XML documents
		// (ID selectors don't work in non-HTML documents)
		if ( !seed && context.nodeType === 9 && !isXML(context) ) {
			try {
				return makeArray( context.querySelectorAll(query), extra );
			} catch(e){}
		}
		
		return oldSizzle(query, context, extra, seed);
	};

	Sizzle.find = oldSizzle.find;
	Sizzle.filter = oldSizzle.filter;
	Sizzle.selectors = oldSizzle.selectors;
	Sizzle.matches = oldSizzle.matches;
})();

if ( document.getElementsByClassName && document.documentElement.getElementsByClassName ) (function(){
	var div = document.createElement("div");
	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	// Opera can't find a second classname (in 9.6)
	if ( div.getElementsByClassName("e").length === 0 )
		return;

	// Safari caches class attributes, doesn't catch changes (in 3.2)
	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 )
		return;

	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function(match, context, isXML) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	var sibDir = dir == "previousSibling" && !isXML;
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			if ( sibDir && elem.nodeType === 1 ){
				elem.sizcache = doneName;
				elem.sizset = i;
			}
			elem = elem[dir];
			var match = false;

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem.sizcache = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	var sibDir = dir == "previousSibling" && !isXML;
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];
		if ( elem ) {
			if ( sibDir && elem.nodeType === 1 ) {
				elem.sizcache = doneName;
				elem.sizset = i;
			}
			elem = elem[dir];
			var match = false;

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem.sizcache = doneName;
						elem.sizset = i;
					}
					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

var contains = document.compareDocumentPosition ?  function(a, b){
	return a.compareDocumentPosition(b) & 16;
} : function(a, b){
	return a !== b && (a.contains ? a.contains(b) : true);
};

var isXML = function(elem){
	return elem.nodeType === 9 && elem.documentElement.nodeName !== "HTML" ||
		!!elem.ownerDocument && isXML( elem.ownerDocument );
};

var posProcess = function(selector, context){
	var tmpSet = [], later = "", match,
		root = context.nodeType ? [context] : context;

	// Position selectors must be done after the filter
	// And so must :not(positional) so we move all PSEUDOs to the end
	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet );
	}

	return Sizzle.filter( later, tmpSet );
};

// EXPOSE
jQuery.find = Sizzle;
jQuery.filter = Sizzle.filter;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.filters;

Sizzle.selectors.filters.hidden = function(elem){
	return elem.offsetWidth === 0 || elem.offsetHeight === 0;
};

Sizzle.selectors.filters.visible = function(elem){
	return elem.offsetWidth > 0 || elem.offsetHeight > 0;
};

Sizzle.selectors.filters.animated = function(elem){
	return jQuery.grep(jQuery.timers, function(fn){
		return elem === fn.elem;
	}).length;
};

jQuery.multiFilter = function( expr, elems, not ) {
	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return Sizzle.matches(expr, elems);
};

jQuery.dir = function( elem, dir ){
	var matched = [], cur = elem[dir];
	while ( cur && cur != document ) {
		if ( cur.nodeType == 1 )
			matched.push( cur );
		cur = cur[dir];
	}
	return matched;
};

jQuery.nth = function(cur, result, dir, elem){
	result = result || 1;
	var num = 0;

	for ( ; cur; cur = cur[dir] )
		if ( cur.nodeType == 1 && ++num == result )
			break;

	return cur;
};

jQuery.sibling = function(n, elem){
	var r = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType == 1 && n != elem )
			r.push( n );
	}

	return r;
};

return;

window.Sizzle = Sizzle;

})();
/*
 * A number of helper functions used for managing events.
 * Many of the ideas behind this code originated from
 * Dean Edwards' addEvent library.
 */
jQuery.event = {

	// Bind an event to an element
	// Original by Dean Edwards
	add: function(elem, types, handler, data) {
		if ( elem.nodeType == 3 || elem.nodeType == 8 )
			return;

		// For whatever reason, IE has trouble passing the window object
		// around, causing it to be cloned in the process
		if ( elem.setInterval && elem != window )
			elem = window;

		// Make sure that the function being executed has a unique ID
		if ( !handler.guid )
			handler.guid = this.guid++;

		// if data is passed, bind to handler
		if ( data !== undefined ) {
			// Create temporary function pointer to original handler
			var fn = handler;

			// Create unique handler function, wrapped around original handler
			handler = this.proxy( fn );

			// Store data in unique handler
			handler.data = data;
		}

		// Init the element's event structure
		var events = jQuery.data(elem, "events") || jQuery.data(elem, "events", {}),
			handle = jQuery.data(elem, "handle") || jQuery.data(elem, "handle", function(){
				// Handle the second event of a trigger and when
				// an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && !jQuery.event.triggered ?
					jQuery.event.handle.apply(arguments.callee.elem, arguments) :
					undefined;
			});
		// Add elem as a property of the handle function
		// This is to prevent a memory leak with non-native
		// event in IE.
		handle.elem = elem;

		// Handle multiple events separated by a space
		// jQuery(...).bind("mouseover mouseout", fn);
		jQuery.each(types.split(/\s+/), function(index, type) {
			// Namespaced event handlers
			var namespaces = type.split(".");
			type = namespaces.shift();
			handler.type = namespaces.slice().sort().join(".");

			// Get the current list of functions bound to this event
			var handlers = events[type];
			
			if ( jQuery.event.specialAll[type] )
				jQuery.event.specialAll[type].setup.call(elem, data, namespaces);

			// Init the event handler queue
			if (!handlers) {
				handlers = events[type] = {};

				// Check for a special event handler
				// Only use addEventListener/attachEvent if the special
				// events handler returns false
				if ( !jQuery.event.special[type] || jQuery.event.special[type].setup.call(elem, data, namespaces) === false ) {
					// Bind the global event handler to the element
					if (elem.addEventListener)
						elem.addEventListener(type, handle, false);
					else if (elem.attachEvent)
						elem.attachEvent("on" + type, handle);
				}
			}

			// Add the function to the element's handler list
			handlers[handler.guid] = handler;

			// Keep track of which events have been used, for global triggering
			jQuery.event.global[type] = true;
		});

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	guid: 1,
	global: {},

	// Detach an event or set of events from an element
	remove: function(elem, types, handler) {
		// don't do events on text and comment nodes
		if ( elem.nodeType == 3 || elem.nodeType == 8 )
			return;

		var events = jQuery.data(elem, "events"), ret, index;

		if ( events ) {
			// Unbind all events for the element
			if ( types === undefined || (typeof types === "string" && types.charAt(0) == ".") )
				for ( var type in events )
					this.remove( elem, type + (types || "") );
			else {
				// types is actually an event object here
				if ( types.type ) {
					handler = types.handler;
					types = types.type;
				}

				// Handle multiple events seperated by a space
				// jQuery(...).unbind("mouseover mouseout", fn);
				jQuery.each(types.split(/\s+/), function(index, type){
					// Namespaced event handlers
					var namespaces = type.split(".");
					type = namespaces.shift();
					var namespace = RegExp("(^|\\.)" + namespaces.slice().sort().join(".*\\.") + "(\\.|$)");

					if ( events[type] ) {
						// remove the given handler for the given type
						if ( handler )
							delete events[type][handler.guid];

						// remove all handlers for the given type
						else
							for ( var handle in events[type] )
								// Handle the removal of namespaced events
								if ( namespace.test(events[type][handle].type) )
									delete events[type][handle];
									
						if ( jQuery.event.specialAll[type] )
							jQuery.event.specialAll[type].teardown.call(elem, namespaces);

						// remove generic event handler if no more handlers exist
						for ( ret in events[type] ) break;
						if ( !ret ) {
							if ( !jQuery.event.special[type] || jQuery.event.special[type].teardown.call(elem, namespaces) === false ) {
								if (elem.removeEventListener)
									elem.removeEventListener(type, jQuery.data(elem, "handle"), false);
								else if (elem.detachEvent)
									elem.detachEvent("on" + type, jQuery.data(elem, "handle"));
							}
							ret = null;
							delete events[type];
						}
					}
				});
			}

			// Remove the expando if it's no longer used
			for ( ret in events ) break;
			if ( !ret ) {
				var handle = jQuery.data( elem, "handle" );
				if ( handle ) handle.elem = null;
				jQuery.removeData( elem, "events" );
				jQuery.removeData( elem, "handle" );
			}
		}
	},

	// bubbling is internal
	trigger: function( event, data, elem, bubbling ) {
		// Event object or event type
		var type = event.type || event;

		if( !bubbling ){
			event = typeof event === "object" ?
				// jQuery.Event object
				event[expando] ? event :
				// Object literal
				jQuery.extend( jQuery.Event(type), event ) :
				// Just the event type (string)
				jQuery.Event(type);

			if ( type.indexOf("!") >= 0 ) {
				event.type = type = type.slice(0, -1);
				event.exclusive = true;
			}

			// Handle a global trigger
			if ( !elem ) {
				// Don't bubble custom events when global (to avoid too much overhead)
				event.stopPropagation();
				// Only trigger if we've ever bound an event for it
				if ( this.global[type] )
					jQuery.each( jQuery.cache, function(){
						if ( this.events && this.events[type] )
							jQuery.event.trigger( event, data, this.handle.elem );
					});
			}

			// Handle triggering a single element

			// don't do events on text and comment nodes
			if ( !elem || elem.nodeType == 3 || elem.nodeType == 8 )
				return undefined;
			
			// Clean up in case it is reused
			event.result = undefined;
			event.target = elem;
			
			// Clone the incoming data, if any
			data = jQuery.makeArray(data);
			data.unshift( event );
		}

		event.currentTarget = elem;

		// Trigger the event, it is assumed that "handle" is a function
		var handle = jQuery.data(elem, "handle");
		if ( handle )
			handle.apply( elem, data );

		// Handle triggering native .onfoo handlers (and on links since we don't call .click() for links)
		if ( (!elem[type] || (jQuery.nodeName(elem, 'a') && type == "click")) && elem["on"+type] && elem["on"+type].apply( elem, data ) === false )
			event.result = false;

		// Trigger the native events (except for clicks on links)
		if ( !bubbling && elem[type] && !event.isDefaultPrevented() && !(jQuery.nodeName(elem, 'a') && type == "click") ) {
			this.triggered = true;
			try {
				elem[ type ]();
			// prevent IE from throwing an error for some hidden elements
			} catch (e) {}
		}

		this.triggered = false;

		if ( !event.isPropagationStopped() ) {
			var parent = elem.parentNode || elem.ownerDocument;
			if ( parent )
				jQuery.event.trigger(event, data, parent, true);
		}
	},

	handle: function(event) {
		// returned undefined or false
		var all, handlers;

		event = arguments[0] = jQuery.event.fix( event || window.event );
		event.currentTarget = this;
		
		// Namespaced event handlers
		var namespaces = event.type.split(".");
		event.type = namespaces.shift();

		// Cache this now, all = true means, any handler
		all = !namespaces.length && !event.exclusive;
		
		var namespace = RegExp("(^|\\.)" + namespaces.slice().sort().join(".*\\.") + "(\\.|$)");

		handlers = ( jQuery.data(this, "events") || {} )[event.type];

		for ( var j in handlers ) {
			var handler = handlers[j];

			// Filter the functions by class
			if ( all || namespace.test(handler.type) ) {
				// Pass in a reference to the handler function itself
				// So that we can later remove it
				event.handler = handler;
				event.data = handler.data;

				var ret = handler.apply(this, arguments);

				if( ret !== undefined ){
					event.result = ret;
					if ( ret === false ) {
						event.preventDefault();
						event.stopPropagation();
					}
				}

				if( event.isImmediatePropagationStopped() )
					break;

			}
		}
	},

	props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),

	fix: function(event) {
		if ( event[expando] )
			return event;

		// store a copy of the original event object
		// and "clone" to set read-only properties
		var originalEvent = event;
		event = jQuery.Event( originalEvent );

		for ( var i = this.props.length, prop; i; ){
			prop = this.props[ --i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Fix target property, if necessary
		if ( !event.target )
			event.target = event.srcElement || document; // Fixes #1925 where srcElement might not be defined either

		// check if target is a textnode (safari)
		if ( event.target.nodeType == 3 )
			event.target = event.target.parentNode;

		// Add relatedTarget, if necessary
		if ( !event.relatedTarget && event.fromElement )
			event.relatedTarget = event.fromElement == event.target ? event.toElement : event.fromElement;

		// Calculate pageX/Y if missing and clientX/Y available
		if ( event.pageX == null && event.clientX != null ) {
			var doc = document.documentElement, body = document.body;
			event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc.clientLeft || 0);
			event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc.clientTop || 0);
		}

		// Add which for key events
		if ( !event.which && ((event.charCode || event.charCode === 0) ? event.charCode : event.keyCode) )
			event.which = event.charCode || event.keyCode;

		// Add metaKey to non-Mac browsers (use ctrl for PC's and Meta for Macs)
		if ( !event.metaKey && event.ctrlKey )
			event.metaKey = event.ctrlKey;

		// Add which for click: 1 == left; 2 == middle; 3 == right
		// Note: button is not normalized, so don't use it
		if ( !event.which && event.button )
			event.which = (event.button & 1 ? 1 : ( event.button & 2 ? 3 : ( event.button & 4 ? 2 : 0 ) ));

		return event;
	},

	proxy: function( fn, proxy ){
		proxy = proxy || function(){ return fn.apply(this, arguments); };
		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || proxy.guid || this.guid++;
		// So proxy can be declared as an argument
		return proxy;
	},

	special: {
		ready: {
			// Make sure the ready event is setup
			setup: bindReady,
			teardown: function() {}
		}
	},
	
	specialAll: {
		live: {
			setup: function( selector, namespaces ){
				jQuery.event.add( this, namespaces[0], liveHandler );
			},
			teardown:  function( namespaces ){
				if ( namespaces.length ) {
					var remove = 0, name = RegExp("(^|\\.)" + namespaces[0] + "(\\.|$)");
					
					jQuery.each( (jQuery.data(this, "events").live || {}), function(){
						if ( name.test(this.type) )
							remove++;
					});
					
					if ( remove < 1 )
						jQuery.event.remove( this, namespaces[0], liveHandler );
				}
			}
		}
	}
};

jQuery.Event = function( src ){
	// Allow instantiation without the 'new' keyword
	if( !this.preventDefault )
		return new jQuery.Event(src);
	
	// Event object
	if( src && src.type ){
		this.originalEvent = src;
		this.type = src.type;
	// Event type
	}else
		this.type = src;

	// timeStamp is buggy for some events on Firefox(#3843)
	// So we won't rely on the native value
	this.timeStamp = now();
	
	// Mark it as fixed
	this[expando] = true;
};

function returnFalse(){
	return false;
}
function returnTrue(){
	return true;
}

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	preventDefault: function() {
		this.isDefaultPrevented = returnTrue;

		var e = this.originalEvent;
		if( !e )
			return;
		// if preventDefault exists run it on the original event
		if (e.preventDefault)
			e.preventDefault();
		// otherwise set the returnValue property of the original event to false (IE)
		e.returnValue = false;
	},
	stopPropagation: function() {
		this.isPropagationStopped = returnTrue;

		var e = this.originalEvent;
		if( !e )
			return;
		// if stopPropagation exists run it on the original event
		if (e.stopPropagation)
			e.stopPropagation();
		// otherwise set the cancelBubble property of the original event to true (IE)
		e.cancelBubble = true;
	},
	stopImmediatePropagation:function(){
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	},
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse
};
// Checks if an event happened on an element within another element
// Used in jQuery.event.special.mouseenter and mouseleave handlers
var withinElement = function(event) {
	// Check if mouse(over|out) are still within the same parent element
	var parent = event.relatedTarget;
	// Traverse up the tree
	while ( parent && parent != this )
		try { parent = parent.parentNode; }
		catch(e) { parent = this; }
	
	if( parent != this ){
		// set the correct event type
		event.type = event.data;
		// handle event if we actually just moused on to a non sub-element
		jQuery.event.handle.apply( this, arguments );
	}
};
	
jQuery.each({ 
	mouseover: 'mouseenter', 
	mouseout: 'mouseleave'
}, function( orig, fix ){
	jQuery.event.special[ fix ] = {
		setup: function(){
			jQuery.event.add( this, orig, withinElement, fix );
		},
		teardown: function(){
			jQuery.event.remove( this, orig, withinElement );
		}
	};			   
});

jQuery.fn.extend({
	bind: function( type, data, fn ) {
		return type == "unload" ? this.one(type, data, fn) : this.each(function(){
			jQuery.event.add( this, type, fn || data, fn && data );
		});
	},

	one: function( type, data, fn ) {
		var one = jQuery.event.proxy( fn || data, function(event) {
			jQuery(this).unbind(event, one);
			return (fn || data).apply( this, arguments );
		});
		return this.each(function(){
			jQuery.event.add( this, type, one, fn && data);
		});
	},

	unbind: function( type, fn ) {
		return this.each(function(){
			jQuery.event.remove( this, type, fn );
		});
	},

	trigger: function( type, data ) {
		return this.each(function(){
			jQuery.event.trigger( type, data, this );
		});
	},

	triggerHandler: function( type, data ) {
		if( this[0] ){
			var event = jQuery.Event(type);
			event.preventDefault();
			event.stopPropagation();
			jQuery.event.trigger( event, data, this[0] );
			return event.result;
		}		
	},

	toggle: function( fn ) {
		// Save reference to arguments for access in closure
		var args = arguments, i = 1;

		// link all the functions, so any of them can unbind this click handler
		while( i < args.length )
			jQuery.event.proxy( fn, args[i++] );

		return this.click( jQuery.event.proxy( fn, function(event) {
			// Figure out which function to execute
			this.lastToggle = ( this.lastToggle || 0 ) % i;

			// Make sure that clicks stop
			event.preventDefault();

			// and execute the function
			return args[ this.lastToggle++ ].apply( this, arguments ) || false;
		}));
	},

	hover: function(fnOver, fnOut) {
		return this.mouseenter(fnOver).mouseleave(fnOut);
	},

	ready: function(fn) {
		// Attach the listeners
		bindReady();

		// If the DOM is already ready
		if ( jQuery.isReady )
			// Execute the function immediately
			fn.call( document, jQuery );

		// Otherwise, remember the function for later
		else
			// Add the function to the wait list
			jQuery.readyList.push( fn );

		return this;
	},
	
	live: function( type, fn ){
		var proxy = jQuery.event.proxy( fn );
		proxy.guid += this.selector + type;

		jQuery(document).bind( liveConvert(type, this.selector), this.selector, proxy );

		return this;
	},
	
	die: function( type, fn ){
		jQuery(document).unbind( liveConvert(type, this.selector), fn ? { guid: fn.guid + this.selector + type } : null );
		return this;
	}
});

function liveHandler( event ){
	var check = RegExp("(^|\\.)" + event.type + "(\\.|$)"),
		stop = true,
		elems = [];

	jQuery.each(jQuery.data(this, "events").live || [], function(i, fn){
		if ( check.test(fn.type) ) {
			var elem = jQuery(event.target).closest(fn.data)[0];
			if ( elem )
				elems.push({ elem: elem, fn: fn });
		}
	});

	elems.sort(function(a,b) {
		return jQuery.data(a.elem, "closest") - jQuery.data(b.elem, "closest");
	});
	
	jQuery.each(elems, function(){
		if ( this.fn.call(this.elem, event, this.fn.data) === false )
			return (stop = false);
	});

	return stop;
}

function liveConvert(type, selector){
	return ["live", type, selector.replace(/\./g, "`").replace(/ /g, "|")].join(".");
}

jQuery.extend({
	isReady: false,
	readyList: [],
	// Handle when the DOM is ready
	ready: function() {
		// Make sure that the DOM is not already loaded
		if ( !jQuery.isReady ) {
			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If there are functions bound, to execute
			if ( jQuery.readyList ) {
				// Execute all of them
				jQuery.each( jQuery.readyList, function(){
					this.call( document, jQuery );
				});

				// Reset the list of functions
				jQuery.readyList = null;
			}

			// Trigger any bound ready events
			jQuery(document).triggerHandler("ready");
		}
	}
});

var readyBound = false;

function bindReady(){
	if ( readyBound ) return;
	readyBound = true;

	// Mozilla, Opera and webkit nightlies currently support this event
	if ( document.addEventListener ) {
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", function(){
			document.removeEventListener( "DOMContentLoaded", arguments.callee, false );
			jQuery.ready();
		}, false );

	// If IE event model is used
	} else if ( document.attachEvent ) {
		// ensure firing before onload,
		// maybe late but safe also for iframes
		document.attachEvent("onreadystatechange", function(){
			if ( document.readyState === "complete" ) {
				document.detachEvent( "onreadystatechange", arguments.callee );
				jQuery.ready();
			}
		});

		// If IE and not an iframe
		// continually check to see if the document is ready
		if ( document.documentElement.doScroll && window == window.top ) (function(){
			if ( jQuery.isReady ) return;

			try {
				// If IE is used, use the trick by Diego Perini
				// http://javascript.nwbox.com/IEContentLoaded/
				document.documentElement.doScroll("left");
			} catch( error ) {
				setTimeout( arguments.callee, 0 );
				return;
			}

			// and execute any waiting functions
			jQuery.ready();
		})();
	}

	// A fallback to window.onload, that will always work
	jQuery.event.add( window, "load", jQuery.ready );
}

jQuery.each( ("blur,focus,load,resize,scroll,unload,click,dblclick," +
	"mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave," +
	"change,select,submit,keydown,keypress,keyup,error").split(","), function(i, name){

	// Handle event binding
	jQuery.fn[name] = function(fn){
		return fn ? this.bind(name, fn) : this.trigger(name);
	};
});

// Prevent memory leaks in IE
// And prevent errors on refresh with events like mouseover in other browsers
// Window isn't included so as not to unbind existing unload events
jQuery( window ).bind( 'unload', function(){ 
	for ( var id in jQuery.cache )
		// Skip the window
		if ( id != 1 && jQuery.cache[ id ].handle )
			jQuery.event.remove( jQuery.cache[ id ].handle.elem );
}); 
(function(){

	jQuery.support = {};

	var root = document.documentElement,
		script = document.createElement("script"),
		div = document.createElement("div"),
		id = "script" + (new Date).getTime();

	div.style.display = "none";
	div.innerHTML = '   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';

	var all = div.getElementsByTagName("*"),
		a = div.getElementsByTagName("a")[0];

	// Can't get basic test support
	if ( !all || !all.length || !a ) {
		return;
	}

	jQuery.support = {
		// IE strips leading whitespace when .innerHTML is used
		leadingWhitespace: div.firstChild.nodeType == 3,
		
		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		tbody: !div.getElementsByTagName("tbody").length,
		
		// Make sure that you can get all elements in an <object> element
		// IE 7 always returns no results
		objectAll: !!div.getElementsByTagName("object")[0]
			.getElementsByTagName("*").length,
		
		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		htmlSerialize: !!div.getElementsByTagName("link").length,
		
		// Get the style information from getAttribute
		// (IE uses .cssText insted)
		style: /red/.test( a.getAttribute("style") ),
		
		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		hrefNormalized: a.getAttribute("href") === "/a",
		
		// Make sure that element opacity exists
		// (IE uses filter instead)
		opacity: a.style.opacity === "0.5",
		
		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		cssFloat: !!a.style.cssFloat,

		// Will be defined later
		scriptEval: false,
		noCloneEvent: true,
		boxModel: null
	};
	
	script.type = "text/javascript";
	try {
		script.appendChild( document.createTextNode( "window." + id + "=1;" ) );
	} catch(e){}

	root.insertBefore( script, root.firstChild );
	
	// Make sure that the execution of code works by injecting a script
	// tag with appendChild/createTextNode
	// (IE doesn't support this, fails, and uses .text instead)
	if ( window[ id ] ) {
		jQuery.support.scriptEval = true;
		delete window[ id ];
	}

	root.removeChild( script );

	if ( div.attachEvent && div.fireEvent ) {
		div.attachEvent("onclick", function(){
			// Cloning a node shouldn't copy over any
			// bound event handlers (IE does this)
			jQuery.support.noCloneEvent = false;
			div.detachEvent("onclick", arguments.callee);
		});
		div.cloneNode(true).fireEvent("onclick");
	}

	// Figure out if the W3C box model works as expected
	// document.body must exist before we can do this
	jQuery(function(){
		var div = document.createElement("div");
		div.style.width = div.style.paddingLeft = "1px";

		document.body.appendChild( div );
		jQuery.boxModel = jQuery.support.boxModel = div.offsetWidth === 2;
		document.body.removeChild( div ).style.display = 'none';
	});
})();

var styleFloat = jQuery.support.cssFloat ? "cssFloat" : "styleFloat";

jQuery.props = {
	"for": "htmlFor",
	"class": "className",
	"float": styleFloat,
	cssFloat: styleFloat,
	styleFloat: styleFloat,
	readonly: "readOnly",
	maxlength: "maxLength",
	cellspacing: "cellSpacing",
	rowspan: "rowSpan",
	tabindex: "tabIndex"
};
jQuery.fn.extend({
	// Keep a copy of the old load
	_load: jQuery.fn.load,

	load: function( url, params, callback ) {
		if ( typeof url !== "string" )
			return this._load( url );

		var off = url.indexOf(" ");
		if ( off >= 0 ) {
			var selector = url.slice(off, url.length);
			url = url.slice(0, off);
		}

		// Default to a GET request
		var type = "GET";

		// If the second parameter was provided
		if ( params )
			// If it's a function
			if ( jQuery.isFunction( params ) ) {
				// We assume that it's the callback
				callback = params;
				params = null;

			// Otherwise, build a param string
			} else if( typeof params === "object" ) {
				params = jQuery.param( params );
				type = "POST";
			}

		var self = this;

		// Request the remote document
		jQuery.ajax({
			url: url,
			type: type,
			dataType: "html",
			data: params,
			complete: function(res, status){
				// If successful, inject the HTML into all the matched elements
				if ( status == "success" || status == "notmodified" )
					// See if a selector was specified
					self.html( selector ?
						// Create a dummy div to hold the results
						jQuery("<div/>")
							// inject the contents of the document in, removing the scripts
							// to avoid any 'Permission Denied' errors in IE
							.append(res.responseText.replace(/<script(.|\s)*?\/script>/g, ""))

							// Locate the specified elements
							.find(selector) :

						// If not, just inject the full result
						res.responseText );

				if( callback )
					self.each( callback, [res.responseText, status, res] );
			}
		});
		return this;
	},

	serialize: function() {
		return jQuery.param(this.serializeArray());
	},
	serializeArray: function() {
		return this.map(function(){
			return this.elements ? jQuery.makeArray(this.elements) : this;
		})
		.filter(function(){
			return this.name && !this.disabled &&
				(this.checked || /select|textarea/i.test(this.nodeName) ||
					/text|hidden|password|search/i.test(this.type));
		})
		.map(function(i, elem){
			var val = jQuery(this).val();
			return val == null ? null :
				jQuery.isArray(val) ?
					jQuery.map( val, function(val, i){
						return {name: elem.name, value: val};
					}) :
					{name: elem.name, value: val};
		}).get();
	}
});

// Attach a bunch of functions for handling common AJAX events
jQuery.each( "ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","), function(i,o){
	jQuery.fn[o] = function(f){
		return this.bind(o, f);
	};
});

var jsc = now();

jQuery.extend({
  
	get: function( url, data, callback, type ) {
		// shift arguments if data argument was ommited
		if ( jQuery.isFunction( data ) ) {
			callback = data;
			data = null;
		}

		return jQuery.ajax({
			type: "GET",
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	},

	getScript: function( url, callback ) {
		return jQuery.get(url, null, callback, "script");
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get(url, data, callback, "json");
	},

	post: function( url, data, callback, type ) {
		if ( jQuery.isFunction( data ) ) {
			callback = data;
			data = {};
		}

		return jQuery.ajax({
			type: "POST",
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	},

	ajaxSetup: function( settings ) {
		jQuery.extend( jQuery.ajaxSettings, settings );
	},

	ajaxSettings: {
		url: location.href,
		global: true,
		type: "GET",
		contentType: "application/x-www-form-urlencoded",
		processData: true,
		async: true,
		/*
		timeout: 0,
		data: null,
		username: null,
		password: null,
		*/
		// Create the request object; Microsoft failed to properly
		// implement the XMLHttpRequest in IE7, so we use the ActiveXObject when it is available
		// This function can be overriden by calling jQuery.ajaxSetup
		xhr:function(){
			return window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
		},
		accepts: {
			xml: "application/xml, text/xml",
			html: "text/html",
			script: "text/javascript, application/javascript",
			json: "application/json, text/javascript",
			text: "text/plain",
			_default: "*/*"
		}
	},

	// Last-Modified header cache for next request
	lastModified: {},

	ajax: function( s ) {
		// Extend the settings, but re-extend 's' so that it can be
		// checked again later (in the test suite, specifically)
		s = jQuery.extend(true, s, jQuery.extend(true, {}, jQuery.ajaxSettings, s));

		var jsonp, jsre = /=\?(&|$)/g, status, data,
			type = s.type.toUpperCase();

		// convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" )
			s.data = jQuery.param(s.data);

		// Handle JSONP Parameter Callbacks
		if ( s.dataType == "jsonp" ) {
			if ( type == "GET" ) {
				if ( !s.url.match(jsre) )
					s.url += (s.url.match(/\?/) ? "&" : "?") + (s.jsonp || "callback") + "=?";
			} else if ( !s.data || !s.data.match(jsre) )
				s.data = (s.data ? s.data + "&" : "") + (s.jsonp || "callback") + "=?";
			s.dataType = "json";
		}

		// Build temporary JSONP function
		if ( s.dataType == "json" && (s.data && s.data.match(jsre) || s.url.match(jsre)) ) {
			jsonp = "jsonp" + jsc++;

			// Replace the =? sequence both in the query string and the data
			if ( s.data )
				s.data = (s.data + "").replace(jsre, "=" + jsonp + "$1");
			s.url = s.url.replace(jsre, "=" + jsonp + "$1");

			// We need to make sure
			// that a JSONP style response is executed properly
			s.dataType = "script";

			// Handle JSONP-style loading
			window[ jsonp ] = function(tmp){
				data = tmp;
				success();
				complete();
				// Garbage collect
				window[ jsonp ] = undefined;
				try{ delete window[ jsonp ]; } catch(e){}
				if ( head )
					head.removeChild( script );
			};
		}

		if ( s.dataType == "script" && s.cache == null )
			s.cache = false;

		if ( s.cache === false && type == "GET" ) {
			var ts = now();
			// try replacing _= if it is there
			var ret = s.url.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + ts + "$2");
			// if nothing was replaced, add timestamp to the end
			s.url = ret + ((ret == s.url) ? (s.url.match(/\?/) ? "&" : "?") + "_=" + ts : "");
		}

		// If data is available, append data to url for get requests
		if ( s.data && type == "GET" ) {
			s.url += (s.url.match(/\?/) ? "&" : "?") + s.data;

			// IE likes to send both get and post data, prevent this
			s.data = null;
		}

		// Watch for a new set of requests
		if ( s.global && ! jQuery.active++ )
			jQuery.event.trigger( "ajaxStart" );

		// Matches an absolute URL, and saves the domain
		var parts = /^(\w+:)?\/\/([^\/?#]+)/.exec( s.url );

		// If we're requesting a remote document
		// and trying to load JSON or Script with a GET
		if ( s.dataType == "script" && type == "GET" && parts
			&& ( parts[1] && parts[1] != location.protocol || parts[2] != location.host )){

			var head = document.getElementsByTagName("head")[0];
			var script = document.createElement("script");
			script.src = s.url;
			if (s.scriptCharset)
				script.charset = s.scriptCharset;

			// Handle Script loading
			if ( !jsonp ) {
				var done = false;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function(){
					if ( !done && (!this.readyState ||
							this.readyState == "loaded" || this.readyState == "complete") ) {
						done = true;
						success();
						complete();

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;
						head.removeChild( script );
					}
				};
			}

			head.appendChild(script);

			// We handle everything using the script element injection
			return undefined;
		}

		var requestDone = false;

		// Create the request object
		var xhr = s.xhr();

		// Open the socket
		// Passing null username, generates a login popup on Opera (#2865)
		if( s.username )
			xhr.open(type, s.url, s.async, s.username, s.password);
		else
			xhr.open(type, s.url, s.async);

		// Need an extra try/catch for cross domain requests in Firefox 3
		try {
			// Set the correct header, if data is being sent
			if ( s.data )
				xhr.setRequestHeader("Content-Type", s.contentType);

			// Set the If-Modified-Since header, if ifModified mode.
			if ( s.ifModified )
				xhr.setRequestHeader("If-Modified-Since",
					jQuery.lastModified[s.url] || "Thu, 01 Jan 1970 00:00:00 GMT" );

			// Set header so the called script knows that it's an XMLHttpRequest
			xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

			// Set the Accepts header for the server, depending on the dataType
			xhr.setRequestHeader("Accept", s.dataType && s.accepts[ s.dataType ] ?
				s.accepts[ s.dataType ] + ", */*" :
				s.accepts._default );
		} catch(e){}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && s.beforeSend(xhr, s) === false ) {
			// Handle the global AJAX counter
			if ( s.global && ! --jQuery.active )
				jQuery.event.trigger( "ajaxStop" );
			// close opended socket
			xhr.abort();
			return false;
		}

		if ( s.global )
			jQuery.event.trigger("ajaxSend", [xhr, s]);

		// Wait for a response to come back
		var onreadystatechange = function(isTimeout){
			// The request was aborted, clear the interval and decrement jQuery.active
			if (xhr.readyState == 0) {
				if (ival) {
					// clear poll interval
					clearInterval(ival);
					ival = null;
					// Handle the global AJAX counter
					if ( s.global && ! --jQuery.active )
						jQuery.event.trigger( "ajaxStop" );
				}
			// The transfer is complete and the data is available, or the request timed out
			} else if ( !requestDone && xhr && (xhr.readyState == 4 || isTimeout == "timeout") ) {
				requestDone = true;

				// clear poll interval
				if (ival) {
					clearInterval(ival);
					ival = null;
				}

				status = isTimeout == "timeout" ? "timeout" :
					!jQuery.httpSuccess( xhr ) ? "error" :
					s.ifModified && jQuery.httpNotModified( xhr, s.url ) ? "notmodified" :
					"success";

				if ( status == "success" ) {
					// Watch for, and catch, XML document parse errors
					try {
						// process the data (runs the xml through httpData regardless of callback)
						data = jQuery.httpData( xhr, s.dataType, s );
					} catch(e) {
						status = "parsererror";
					}
				}

				// Make sure that the request was successful or notmodified
				if ( status == "success" ) {
					// Cache Last-Modified header, if ifModified mode.
					var modRes;
					try {
						modRes = xhr.getResponseHeader("Last-Modified");
					} catch(e) {} // swallow exception thrown by FF if header is not available

					if ( s.ifModified && modRes )
						jQuery.lastModified[s.url] = modRes;

					// JSONP handles its own success callback
					if ( !jsonp )
						success();
				} else
					jQuery.handleError(s, xhr, status);

				// Fire the complete handlers
				complete();

				if ( isTimeout )
					xhr.abort();

				// Stop memory leaks
				if ( s.async )
					xhr = null;
			}
		};

		if ( s.async ) {
			// don't attach the handler to the request, just poll it instead
			var ival = setInterval(onreadystatechange, 13);

			// Timeout checker
			if ( s.timeout > 0 )
				setTimeout(function(){
					// Check to see if the request is still happening
					if ( xhr && !requestDone )
						onreadystatechange( "timeout" );
				}, s.timeout);
		}

		// Send the data
		try {
			xhr.send(s.data);
		} catch(e) {
			jQuery.handleError(s, xhr, null, e);
		}

		// firefox 1.5 doesn't fire statechange for sync requests
		if ( !s.async )
			onreadystatechange();

		function success(){
			// If a local callback was specified, fire it and pass it the data
			if ( s.success )
				s.success( data, status );

			// Fire the global callback
			if ( s.global )
				jQuery.event.trigger( "ajaxSuccess", [xhr, s] );
		}

		function complete(){
			// Process result
			if ( s.complete )
				s.complete(xhr, status);

			// The request was completed
			if ( s.global )
				jQuery.event.trigger( "ajaxComplete", [xhr, s] );

			// Handle the global AJAX counter
			if ( s.global && ! --jQuery.active )
				jQuery.event.trigger( "ajaxStop" );
		}

		// return XMLHttpRequest to allow aborting the request etc.
		return xhr;
	},

	handleError: function( s, xhr, status, e ) {
		// If a local callback was specified, fire it
		if ( s.error ) s.error( xhr, status, e );

		// Fire the global callback
		if ( s.global )
			jQuery.event.trigger( "ajaxError", [xhr, s, e] );
	},

	// Counter for holding the number of active queries
	active: 0,

	// Determines if an XMLHttpRequest was successful or not
	httpSuccess: function( xhr ) {
		try {
			// IE error sometimes returns 1223 when it should be 204 so treat it as success, see #1450
			return !xhr.status && location.protocol == "file:" ||
				( xhr.status >= 200 && xhr.status < 300 ) || xhr.status == 304 || xhr.status == 1223;
		} catch(e){}
		return false;
	},

	// Determines if an XMLHttpRequest returns NotModified
	httpNotModified: function( xhr, url ) {
		try {
			var xhrRes = xhr.getResponseHeader("Last-Modified");

			// Firefox always returns 200. check Last-Modified date
			return xhr.status == 304 || xhrRes == jQuery.lastModified[url];
		} catch(e){}
		return false;
	},

	httpData: function( xhr, type, s ) {
		var ct = xhr.getResponseHeader("content-type"),
			xml = type == "xml" || !type && ct && ct.indexOf("xml") >= 0,
			data = xml ? xhr.responseXML : xhr.responseText;

		if ( xml && data.documentElement.tagName == "parsererror" )
			throw "parsererror";
			
		// Allow a pre-filtering function to sanitize the response
		// s != null is checked to keep backwards compatibility
		if( s && s.dataFilter )
			data = s.dataFilter( data, type );

		// The filter can actually parse the response
		if( typeof data === "string" ){

			// If the type is "script", eval it in global context
			if ( type == "script" )
				jQuery.globalEval( data );

			// Get the JavaScript object, if JSON is used.
			if ( type == "json" )
				data = window["eval"]("(" + data + ")");
		}
		
		return data;
	},

	// Serialize an array of form elements or a set of
	// key/values into a query string
	param: function( a ) {
		var s = [ ];

		function add( key, value ){
			s[ s.length ] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
		};

		// If an array was passed in, assume that it is an array
		// of form elements
		if ( jQuery.isArray(a) || a.jquery )
			// Serialize the form elements
			jQuery.each( a, function(){
				add( this.name, this.value );
			});

		// Otherwise, assume that it's an object of key/value pairs
		else
			// Serialize the key/values
			for ( var j in a )
				// If the value is an array then the key names need to be repeated
				if ( jQuery.isArray(a[j]) )
					jQuery.each( a[j], function(){
						add( j, this );
					});
				else
					add( j, jQuery.isFunction(a[j]) ? a[j]() : a[j] );

		// Return the resulting serialization
		return s.join("&").replace(/%20/g, "+");
	}

});
var elemdisplay = {},
	timerId,
	fxAttrs = [
		// height animations
		[ "height", "marginTop", "marginBottom", "paddingTop", "paddingBottom" ],
		// width animations
		[ "width", "marginLeft", "marginRight", "paddingLeft", "paddingRight" ],
		// opacity animations
		[ "opacity" ]
	];

function genFx( type, num ){
	var obj = {};
	jQuery.each( fxAttrs.concat.apply([], fxAttrs.slice(0,num)), function(){
		obj[ this ] = type;
	});
	return obj;
}

jQuery.fn.extend({
	show: function(speed,callback){
		if ( speed ) {
			return this.animate( genFx("show", 3), speed, callback);
		} else {
			for ( var i = 0, l = this.length; i < l; i++ ){
				var old = jQuery.data(this[i], "olddisplay");
				
				this[i].style.display = old || "";
				if ( jQuery.css(this[i], "display") === "none" ) {
					var tagName = this[i].tagName, display;
					
					if ( elemdisplay[ tagName ] ) {
						display = elemdisplay[ tagName ];
					} else {
						var elem = jQuery("<" + tagName + " />").appendTo("body");
						
						display = elem.css("display");
						if ( display === "none" )
							display = "block";
						
						elem.remove();
						
						elemdisplay[ tagName ] = display;
					}
					
					jQuery.data(this[i], "olddisplay", display);
				}
			}

			// Set the display of the elements in a second loop
			// to avoid the constant reflow
			for ( var i = 0, l = this.length; i < l; i++ ){
				this[i].style.display = jQuery.data(this[i], "olddisplay") || "";
			}
			
			return this;
		}
	},

	hide: function(speed,callback){
		if ( speed ) {
			return this.animate( genFx("hide", 3), speed, callback);
		} else {
			for ( var i = 0, l = this.length; i < l; i++ ){
				var old = jQuery.data(this[i], "olddisplay");
				if ( !old && old !== "none" ){
					jQuery.data(this[i], "olddisplay", jQuery.css(this[i], "display"));
                                }
			}

			// Set the display of the elements in a second loop
			// to avoid the constant reflow
			for ( var i = 0, l = this.length; i < l; i++ ){
				this[i].style.display = "none";
			}

			return this;
		}
	},

	// Save the old toggle function
	_toggle: jQuery.fn.toggle,

	toggle: function( fn, fn2 ){
		var bool = typeof fn === "boolean";

		return jQuery.isFunction(fn) && jQuery.isFunction(fn2) ?
			this._toggle.apply( this, arguments ) :
			fn == null || bool ?
				this.each(function(){
					var state = bool ? fn : jQuery(this).is(":hidden");
					jQuery(this)[ state ? "show" : "hide" ]();
				}) :
				this.animate(genFx("toggle", 3), fn, fn2);
	},

	fadeTo: function(speed,to,callback){
		return this.animate({opacity: to}, speed, callback);
	},

	animate: function( prop, speed, easing, callback ) {
		var optall = jQuery.speed(speed, easing, callback);

		return this[ optall.queue === false ? "each" : "queue" ](function(){
		
			var opt = jQuery.extend({}, optall), p,
				hidden = this.nodeType == 1 && jQuery(this).is(":hidden"),
				self = this;
	
			for ( p in prop ) {
				if ( prop[p] == "hide" && hidden || prop[p] == "show" && !hidden )
					return opt.complete.call(this);

				if ( ( p == "height" || p == "width" ) && this.style ) {
					// Store display property
					opt.display = jQuery.css(this, "display");

					// Make sure that nothing sneaks out
					opt.overflow = this.style.overflow;
				}
			}

			if ( opt.overflow != null )
				this.style.overflow = "hidden";

			opt.curAnim = jQuery.extend({}, prop);

			jQuery.each( prop, function(name, val){
				var e = new jQuery.fx( self, opt, name );

				if ( /toggle|show|hide/.test(val) )
					e[ val == "toggle" ? hidden ? "show" : "hide" : val ]( prop );
				else {
					var parts = val.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),
						start = e.cur(true) || 0;

					if ( parts ) {
						var end = parseFloat(parts[2]),
							unit = parts[3] || "px";

						// We need to compute starting value
						if ( unit != "px" ) {
							self.style[ name ] = (end || 1) + unit;
							start = ((end || 1) / e.cur(true)) * start;
							self.style[ name ] = start + unit;
						}

						// If a +=/-= token was provided, we're doing a relative animation
						if ( parts[1] )
							end = ((parts[1] == "-=" ? -1 : 1) * end) + start;

						e.custom( start, end, unit );
					} else
						e.custom( start, val, "" );
				}
			});

			// For JS strict compliance
			return true;
		});
	},

	stop: function(clearQueue, gotoEnd){
		var timers = jQuery.timers;

		if (clearQueue)
			this.queue([]);

		this.each(function(){
			// go in reverse order so anything added to the queue during the loop is ignored
			for ( var i = timers.length - 1; i >= 0; i-- )
				if ( timers[i].elem == this ) {
					if (gotoEnd)
						// force the next step to be the last
						timers[i](true);
					timers.splice(i, 1);
				}
		});

		// start the next in the queue if the last step wasn't forced
		if (!gotoEnd)
			this.dequeue();

		return this;
	}

});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show", 1),
	slideUp: genFx("hide", 1),
	slideToggle: genFx("toggle", 1),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" }
}, function( name, props ){
	jQuery.fn[ name ] = function( speed, callback ){
		return this.animate( props, speed, callback );
	};
});

jQuery.extend({

	speed: function(speed, easing, fn) {
		var opt = typeof speed === "object" ? speed : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			jQuery.fx.speeds[opt.duration] || jQuery.fx.speeds._default;

		// Queueing
		opt.old = opt.complete;
		opt.complete = function(){
			if ( opt.queue !== false )
				jQuery(this).dequeue();
			if ( jQuery.isFunction( opt.old ) )
				opt.old.call( this );
		};

		return opt;
	},

	easing: {
		linear: function( p, n, firstNum, diff ) {
			return firstNum + diff * p;
		},
		swing: function( p, n, firstNum, diff ) {
			return ((-Math.cos(p*Math.PI)/2) + 0.5) * diff + firstNum;
		}
	},

	timers: [],

	fx: function( elem, options, prop ){
		this.options = options;
		this.elem = elem;
		this.prop = prop;

		if ( !options.orig )
			options.orig = {};
	}

});

jQuery.fx.prototype = {

	// Simple function for setting a style value
	update: function(){
		if ( this.options.step )
			this.options.step.call( this.elem, this.now, this );

		(jQuery.fx.step[this.prop] || jQuery.fx.step._default)( this );

		// Set display property to block for height/width animations
		if ( ( this.prop == "height" || this.prop == "width" ) && this.elem.style )
			this.elem.style.display = "block";
	},

	// Get the current size
	cur: function(force){
		if ( this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null) )
			return this.elem[ this.prop ];

		var r = parseFloat(jQuery.css(this.elem, this.prop, force));
		return r && r > -10000 ? r : parseFloat(jQuery.curCSS(this.elem, this.prop)) || 0;
	},

	// Start an animation from one number to another
	custom: function(from, to, unit){
		this.startTime = now();
		this.start = from;
		this.end = to;
		this.unit = unit || this.unit || "px";
		this.now = this.start;
		this.pos = this.state = 0;

		var self = this;
		function t(gotoEnd){
			return self.step(gotoEnd);
		}

		t.elem = this.elem;

		if ( t() && jQuery.timers.push(t) && !timerId ) {
			timerId = setInterval(function(){
				var timers = jQuery.timers;

				for ( var i = 0; i < timers.length; i++ )
					if ( !timers[i]() )
						timers.splice(i--, 1);

				if ( !timers.length ) {
					clearInterval( timerId );
					timerId = undefined;
				}
			}, 13);
		}
	},

	// Simple 'show' function
	show: function(){
		// Remember where we started, so that we can go back to it later
		this.options.orig[this.prop] = jQuery.attr( this.elem.style, this.prop );
		this.options.show = true;

		// Begin the animation
		// Make sure that we start at a small width/height to avoid any
		// flash of content
		this.custom(this.prop == "width" || this.prop == "height" ? 1 : 0, this.cur());

		// Start by showing the element
		jQuery(this.elem).show();
	},

	// Simple 'hide' function
	hide: function(){
		// Remember where we started, so that we can go back to it later
		this.options.orig[this.prop] = jQuery.attr( this.elem.style, this.prop );
		this.options.hide = true;

		// Begin the animation
		this.custom(this.cur(), 0);
	},

	// Each step of an animation
	step: function(gotoEnd){
		var t = now();

		if ( gotoEnd || t >= this.options.duration + this.startTime ) {
			this.now = this.end;
			this.pos = this.state = 1;
			this.update();

			this.options.curAnim[ this.prop ] = true;

			var done = true;
			for ( var i in this.options.curAnim )
				if ( this.options.curAnim[i] !== true )
					done = false;

			if ( done ) {
				if ( this.options.display != null ) {
					// Reset the overflow
					this.elem.style.overflow = this.options.overflow;

					// Reset the display
					this.elem.style.display = this.options.display;
					if ( jQuery.css(this.elem, "display") == "none" )
						this.elem.style.display = "block";
				}

				// Hide the element if the "hide" operation was done
				if ( this.options.hide )
					jQuery(this.elem).hide();

				// Reset the properties, if the item has been hidden or shown
				if ( this.options.hide || this.options.show )
					for ( var p in this.options.curAnim )
						jQuery.attr(this.elem.style, p, this.options.orig[p]);
					
				// Execute the complete function
				this.options.complete.call( this.elem );
			}

			return false;
		} else {
			var n = t - this.startTime;
			this.state = n / this.options.duration;

			// Perform the easing function, defaults to swing
			this.pos = jQuery.easing[this.options.easing || (jQuery.easing.swing ? "swing" : "linear")](this.state, n, 0, 1, this.options.duration);
			this.now = this.start + ((this.end - this.start) * this.pos);

			// Perform the next step of the animation
			this.update();
		}

		return true;
	}

};

jQuery.extend( jQuery.fx, {
	speeds:{
		slow: 600,
 		fast: 200,
 		// Default speed
 		_default: 400
	},
	step: {

		opacity: function(fx){
			jQuery.attr(fx.elem.style, "opacity", fx.now);
		},

		_default: function(fx){
			if ( fx.elem.style && fx.elem.style[ fx.prop ] != null )
				fx.elem.style[ fx.prop ] = fx.now + fx.unit;
			else
				fx.elem[ fx.prop ] = fx.now;
		}
	}
});
if ( document.documentElement["getBoundingClientRect"] )
	jQuery.fn.offset = function() {
		if ( !this[0] ) return { top: 0, left: 0 };
		if ( this[0] === this[0].ownerDocument.body ) return jQuery.offset.bodyOffset( this[0] );
		var box  = this[0].getBoundingClientRect(), doc = this[0].ownerDocument, body = doc.body, docElem = doc.documentElement,
			clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
			top  = box.top  + (self.pageYOffset || jQuery.boxModel && docElem.scrollTop  || body.scrollTop ) - clientTop,
			left = box.left + (self.pageXOffset || jQuery.boxModel && docElem.scrollLeft || body.scrollLeft) - clientLeft;
		return { top: top, left: left };
	};
else 
	jQuery.fn.offset = function() {
		if ( !this[0] ) return { top: 0, left: 0 };
		if ( this[0] === this[0].ownerDocument.body ) return jQuery.offset.bodyOffset( this[0] );
		jQuery.offset.initialized || jQuery.offset.initialize();

		var elem = this[0], offsetParent = elem.offsetParent, prevOffsetParent = elem,
			doc = elem.ownerDocument, computedStyle, docElem = doc.documentElement,
			body = doc.body, defaultView = doc.defaultView,
			prevComputedStyle = defaultView.getComputedStyle(elem, null),
			top = elem.offsetTop, left = elem.offsetLeft;

		while ( (elem = elem.parentNode) && elem !== body && elem !== docElem ) {
			computedStyle = defaultView.getComputedStyle(elem, null);
			top -= elem.scrollTop, left -= elem.scrollLeft;
			if ( elem === offsetParent ) {
				top += elem.offsetTop, left += elem.offsetLeft;
				if ( jQuery.offset.doesNotAddBorder && !(jQuery.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(elem.tagName)) )
					top  += parseInt( computedStyle.borderTopWidth,  10) || 0,
					left += parseInt( computedStyle.borderLeftWidth, 10) || 0;
				prevOffsetParent = offsetParent, offsetParent = elem.offsetParent;
			}
			if ( jQuery.offset.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible" )
				top  += parseInt( computedStyle.borderTopWidth,  10) || 0,
				left += parseInt( computedStyle.borderLeftWidth, 10) || 0;
			prevComputedStyle = computedStyle;
		}

		if ( prevComputedStyle.position === "relative" || prevComputedStyle.position === "static" )
			top  += body.offsetTop,
			left += body.offsetLeft;

		if ( prevComputedStyle.position === "fixed" )
			top  += Math.max(docElem.scrollTop, body.scrollTop),
			left += Math.max(docElem.scrollLeft, body.scrollLeft);

		return { top: top, left: left };
	};

jQuery.offset = {
	initialize: function() {
		if ( this.initialized ) return;
		var body = document.body, container = document.createElement('div'), innerDiv, checkDiv, table, td, rules, prop, bodyMarginTop = body.style.marginTop,
			html = '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';

		rules = { position: 'absolute', top: 0, left: 0, margin: 0, border: 0, width: '1px', height: '1px', visibility: 'hidden' };
		for ( prop in rules ) container.style[prop] = rules[prop];

		container.innerHTML = html;
		body.insertBefore(container, body.firstChild);
		innerDiv = container.firstChild, checkDiv = innerDiv.firstChild, td = innerDiv.nextSibling.firstChild.firstChild;

		this.doesNotAddBorder = (checkDiv.offsetTop !== 5);
		this.doesAddBorderForTableAndCells = (td.offsetTop === 5);

		innerDiv.style.overflow = 'hidden', innerDiv.style.position = 'relative';
		this.subtractsBorderForOverflowNotVisible = (checkDiv.offsetTop === -5);

		body.style.marginTop = '1px';
		this.doesNotIncludeMarginInBodyOffset = (body.offsetTop === 0);
		body.style.marginTop = bodyMarginTop;

		body.removeChild(container);
		this.initialized = true;
	},

	bodyOffset: function(body) {
		jQuery.offset.initialized || jQuery.offset.initialize();
		var top = body.offsetTop, left = body.offsetLeft;
		if ( jQuery.offset.doesNotIncludeMarginInBodyOffset )
			top  += parseInt( jQuery.curCSS(body, 'marginTop',  true), 10 ) || 0,
			left += parseInt( jQuery.curCSS(body, 'marginLeft', true), 10 ) || 0;
		return { top: top, left: left };
	}
};


jQuery.fn.extend({
	position: function() {
		var left = 0, top = 0, results;

		if ( this[0] ) {
			// Get *real* offsetParent
			var offsetParent = this.offsetParent(),

			// Get correct offsets
			offset       = this.offset(),
			parentOffset = /^body|html$/i.test(offsetParent[0].tagName) ? { top: 0, left: 0 } : offsetParent.offset();

			// Subtract element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft 
			// are the same in Safari causing offset.left to incorrectly be 0
			offset.top  -= num( this, 'marginTop'  );
			offset.left -= num( this, 'marginLeft' );

			// Add offsetParent borders
			parentOffset.top  += num( offsetParent, 'borderTopWidth'  );
			parentOffset.left += num( offsetParent, 'borderLeftWidth' );

			// Subtract the two offsets
			results = {
				top:  offset.top  - parentOffset.top,
				left: offset.left - parentOffset.left
			};
		}

		return results;
	},

	offsetParent: function() {
		var offsetParent = this[0].offsetParent || document.body;
		while ( offsetParent && (!/^body|html$/i.test(offsetParent.tagName) && jQuery.css(offsetParent, 'position') == 'static') )
			offsetParent = offsetParent.offsetParent;
		return jQuery(offsetParent);
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( ['Left', 'Top'], function(i, name) {
	var method = 'scroll' + name;
	
	jQuery.fn[ method ] = function(val) {
		if (!this[0]) return null;

		return val !== undefined ?

			// Set the scroll offset
			this.each(function() {
				this == window || this == document ?
					window.scrollTo(
						!i ? val : jQuery(window).scrollLeft(),
						 i ? val : jQuery(window).scrollTop()
					) :
					this[ method ] = val;
			}) :

			// Return the scroll offset
			this[0] == window || this[0] == document ?
				self[ i ? 'pageYOffset' : 'pageXOffset' ] ||
					jQuery.boxModel && document.documentElement[ method ] ||
					document.body[ method ] :
				this[0][ method ];
	};
});
// Create innerHeight, innerWidth, outerHeight and outerWidth methods
jQuery.each([ "Height", "Width" ], function(i, name){

	var tl = i ? "Left"  : "Top",  // top or left
		br = i ? "Right" : "Bottom", // bottom or right
		lower = name.toLowerCase();

	// innerHeight and innerWidth
	jQuery.fn["inner" + name] = function(){
		return this[0] ?
			jQuery.css( this[0], lower, false, "padding" ) :
			null;
	};

	// outerHeight and outerWidth
	jQuery.fn["outer" + name] = function(margin) {
		return this[0] ?
			jQuery.css( this[0], lower, false, margin ? "margin" : "border" ) :
			null;
	};
	
	var type = name.toLowerCase();

	jQuery.fn[ type ] = function( size ) {
		// Get window width or height
		return this[0] == window ?
			// Everyone else use document.documentElement or document.body depending on Quirks vs Standards mode
			document.compatMode == "CSS1Compat" && document.documentElement[ "client" + name ] ||
			document.body[ "client" + name ] :

			// Get document width or height
			this[0] == document ?
				// Either scroll[Width/Height] or offset[Width/Height], whichever is greater
				Math.max(
					document.documentElement["client" + name],
					document.body["scroll" + name], document.documentElement["scroll" + name],
					document.body["offset" + name], document.documentElement["offset" + name]
				) :

				// Get or set width or height on the element
				size === undefined ?
					// Get width or height on the element
					(this.length ? jQuery.css( this[0], type ) : null) :

					// Set the width or height on the element (default to pixels if value is unitless)
					this.css( type, typeof size === "string" ? size : size + "px" );
	};

});
})();

/*
 * jQuery Form Plugin
 * version: 2.28 (10-MAY-2009)
 * @requires jQuery v1.2.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are intended to be exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').bind('submit', function() {
            $(this).ajaxSubmit({
                target: '#output'
            });
            return false; // <-- important!
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    if (typeof options == 'function')
        options = { success: options };

    var url = $.trim(this.attr('action'));
    if (url) {
	    // clean url (don't include hash vaue)
	    url = (url.match(/^([^#]+)/)||[])[1];
   	}
   	url = url || window.location.href || ''

    options = $.extend({
        url:  url,
        type: this.attr('method') || 'GET'
    }, options || {});

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var a = this.formToArray(options.semantic);
    if (options.data) {
        options.extraData = options.data;
        for (var n in options.data) {
          if(options.data[n] instanceof Array) {
            for (var k in options.data[n])
              a.push( { name: n, value: options.data[n][k] } );
          }
          else
             a.push( { name: n, value: options.data[n] } );
        }
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a);

    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else
        options.data = q; // data is the query string for 'post'

    var $form = this, callbacks = [];
    if (options.resetForm) callbacks.push(function() { $form.resetForm(); });
    if (options.clearForm) callbacks.push(function() { $form.clearForm(); });

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            $(options.target).html(data).each(oldSuccess, arguments);
        });
    }
    else if (options.success)
        callbacks.push(options.success);

    options.success = function(data, status) {
        for (var i=0, max=callbacks.length; i < max; i++)
            callbacks[i].apply(options, [data, status, $form]);
    };

    // are there files to upload?
    var files = $('input:file', this).fieldValue();
    var found = false;
    for (var j=0; j < files.length; j++)
        if (files[j])
            found = true;

	var multipart = false;
//	var mp = 'multipart/form-data';
//	multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    // options.iframe allows user to force iframe mode
   if (options.iframe || found || multipart) {
       // hack to fix Safari hang (thanks to Tim Molendijk for this)
       // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
       if (options.closeKeepAlive)
           $.get(options.closeKeepAlive, fileUpload);
       else
           fileUpload();
       }
   else
       $.ajax(options);

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;


    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUpload() {
        var form = $form[0];

        if ($(':input[name=submit]', form).length) {
            alert('Error: Form elements must not be named "submit".');
            return;
        }

        var opts = $.extend({}, $.ajaxSettings, options);
		var s = $.extend(true, {}, $.extend(true, {}, $.ajaxSettings), opts);

        var id = 'jqFormIO' + (new Date().getTime());
        var $io = $('<iframe id="' + id + '" name="' + id + '" src="about:blank" />');
        var io = $io[0];

        $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

        var xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function() {
                this.aborted = 1;
                $io.attr('src','about:blank'); // abort op in progress
            }
        };

        var g = opts.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && ! $.active++) $.event.trigger("ajaxStart");
        if (g) $.event.trigger("ajaxSend", [xhr, opts]);

		if (s.beforeSend && s.beforeSend(xhr, s) === false) {
			s.global && $.active--;
			return;
        }
        if (xhr.aborted)
            return;

        var cbInvoked = 0;
        var timedOut = 0;

        // add submitting element to data if we know it
        var sub = form.clk;
        if (sub) {
            var n = sub.name;
            if (n && !sub.disabled) {
                options.extraData = options.extraData || {};
                options.extraData[n] = sub.value;
                if (sub.type == "image") {
                    options.extraData[name+'.x'] = form.clk_x;
                    options.extraData[name+'.y'] = form.clk_y;
                }
            }
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        setTimeout(function() {
            // make sure form attrs are set
            var t = $form.attr('target'), a = $form.attr('action');

			// update form attrs in IE friendly way
			form.setAttribute('target',id);
			if (form.getAttribute('method') != 'POST')
				form.setAttribute('method', 'POST');
			if (form.getAttribute('action') != opts.url)
				form.setAttribute('action', opts.url);

            // ie borks in some cases when setting encoding
            if (! options.skipEncodingOverride) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if($.browser.opera && parseFloat($.browser.version)>9.799 && !opts.timeout) opts.timeout=3*60000;
            if (opts.timeout)
                setTimeout(function() { timedOut = true; cb(); }, opts.timeout);

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (options.extraData)
                    for (var n in options.extraData)
                        extraInputs.push(
                            $('<input type="hidden" name="'+n+'" value="'+options.extraData[n]+'" />')
                                .appendTo(form)[0]);

                // add iframe to doc and submit the form
                $io.appendTo('body');
                io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
                form.submit();
            }
            finally {
                // reset attrs and remove "extra" input elements
				form.setAttribute('action',a);
                t ? form.setAttribute('target', t) : $form.removeAttr('target');
                $(extraInputs).remove();
            }
        }, 10);

        var nullCheckFlag = 0;

        function cb() {
            if (cbInvoked++) return;

            io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

            var ok = true;
            try {
                if (timedOut) throw 'timeout';
                // extract the server response from the iframe
                var data, doc;

                doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;

                if ((!doc || !doc.body || doc.body.innerHTML=='') && !nullCheckFlag) {
                    // in some browsers (cough, Opera 9.2.x) the iframe DOM is not always traversable when
                    // the onload callback fires, so we give them a 2nd chance
                    if(!($.browser.opera && parseFloat($.browser.version)>9.799 && doc && doc.baseURI=='about:blank'))nullCheckFlag = 1;
                    cbInvoked--;
                    setTimeout(cb, 100);
                    return;
                }

                xhr.responseText = doc.body ? doc.body.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': opts.dataType};
                    return headers[header];
                };

                if (opts.dataType == 'json' || opts.dataType == 'script') {
                    var ta = doc.getElementsByTagName('textarea')[0];
                    xhr.responseText = ta ? ta.value : xhr.responseText;
                }
                else if (opts.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
                    xhr.responseXML = toXml(xhr.responseText);
                }
                data = $.httpData(xhr, opts.dataType);
            }
            catch(e){
                ok = false;
                $.handleError(opts, xhr, 'error', e);
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (ok) {
                opts.success(data, 'success');
                if (g) $.event.trigger("ajaxSuccess", [xhr, opts]);
            }
            if (g) $.event.trigger("ajaxComplete", [xhr, opts]);
            if (g && ! --$.active) $.event.trigger("ajaxStop");
            if (opts.complete) opts.complete(xhr, ok ? 'success' : 'error');

            // clean up
            setTimeout(function() {
                $io.remove();
                xhr.responseXML = null;
            }, 100);
        };

        function toXml(s, doc) {
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            return (doc && doc.documentElement && doc.documentElement.tagName != 'parsererror') ? doc : null;
        };
    };
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    return this.ajaxFormUnbind().bind('submit.form-plugin',function() {
        $(this).ajaxSubmit(options);
        return false;
    }).each(function() {
        // store options in hash
        $(":submit,input:image", this).bind('click.form-plugin',function(e) {
            var form = this.form;
            form.clk = this;
            if (this.type == 'image') {
                if (e.offsetX != undefined) {
                    form.clk_x = e.offsetX;
                    form.clk_y = e.offsetY;
                } else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
                    var offset = $(this).offset();
                    form.clk_x = e.pageX - offset.left;
                    form.clk_y = e.pageY - offset.top;
                } else {
                    form.clk_x = e.pageX - this.offsetLeft;
                    form.clk_y = e.pageY - this.offsetTop;
                }
            }
            // clear form vars
            setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 10);
        });
    });
};

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    this.unbind('submit.form-plugin');
    return this.each(function() {
        $(":submit,input:image", this).unbind('click.form-plugin');
    });

};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic) {
    var a = [];
    if (this.length == 0) return a;

    var form = this[0];
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    if (!els) return a;
    for(var i=0, max=els.length; i < max; i++) {
        var el = els[i];
        var n = el.name;
        if (!n) continue;

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(!el.disabled && form.clk == el) {
            	a.push({name: n, value: $(el).val()});
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        var v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            for(var j=0, jmax=v.length; j < jmax; j++)
                a.push({name: n, value: v[j]});
        }
        else if (v !== null && typeof v != 'undefined')
            a.push({name: n, value: v});
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0], n = input.name;
        if (n && !input.disabled && input.type == 'image') {
        	a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) return;
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++)
                a.push({name: n, value: v[i]});
        }
        else if (v !== null && typeof v != 'undefined')
            a.push({name: this.name, value: v});
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *       array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length))
            continue;
        v.constructor == Array ? $.merge(val, v) : val.push(v);
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (typeof successful == 'undefined') successful = true;

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1))
            return null;

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) return null;
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
				var v = op.value;
				if (!v) // extra pain for IE...
                	v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
                if (one) return v;
                a.push(v);
            }
        }
        return a;
    }
    return el.value;
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function() {
    return this.each(function() {
        $('input,select,textarea', this).clearFields();
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function() {
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (t == 'text' || t == 'password' || tag == 'textarea')
            this.value = '';
        else if (t == 'checkbox' || t == 'radio')
            this.checked = false;
        else if (tag == 'select')
            this.selectedIndex = -1;
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType))
            this.reset();
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b == undefined) b = true;
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select == undefined) select = true;
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio')
            this.checked = select;
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// helper fn for console logging
// set $.fn.ajaxSubmit.debug to true to enable debug logging
function log() {
    if ($.fn.ajaxSubmit.debug && window.console && window.console.log)
        window.console.log('[jquery.form] ' + Array.prototype.join.call(arguments,''));
};

})(jQuery);

/**
 * jQuery.ScrollTo
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * Works with jQuery +1.2.6. Tested on FF 2/3, IE 6/7/8, Opera 9.5/6, Safari 3, Chrome 1 on WinXP.
 *
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *	  The different options for target are:
 *		- A number position (will be applied to all axes).
 *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *		- A jQuery/DOM element ( logically, child of the element to scroll )
 *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
*		- A percentage of the container's dimension/s, for example: 50% to go to the middle.
 *		- The string 'max' for go-to-end. 
 * @param {Number} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object,Function} settings Optional set of settings or the onAfter callback.
 *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *	 @option {Number} duration The OVERALL length of the animation.
 *	 @option {String} easing The easing method for the animation.
 *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *	 @option {Function} onAfter Function to be called after the scrolling ends. 
 *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @desc Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * @desc Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @dec Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @ Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *				alert('scrolled!!');																   
 *			}});
 *
 * @desc Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */
(function( $ ){
	
	var $scrollTo = $.scrollTo = function( target, duration, settings ){
		$(window).scrollTo( target, duration, settings );
	};

	$scrollTo.defaults = {
		axis:'xy',
		duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1
	};

	// Returns the element that needs to be animated to scroll the window.
	// Kept for backwards compatibility (specially for localScroll & serialScroll)
	$scrollTo.window = function( scope ){
		return $(window)._scrollable();
	};

	// Hack, hack, hack :)
	// Returns the real elements to scroll (supports window/iframes, documents and regular nodes)
	$.fn._scrollable = function(){
		return this.map(function(){
			var elem = this,
				isWin = !elem.nodeName || $.inArray( elem.nodeName.toLowerCase(), ['iframe','#document','html','body'] ) != -1;

				if( !isWin )
					return elem;

			var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem;
			
			return $.browser.safari || doc.compatMode == 'BackCompat' ?
				doc.body : 
				doc.documentElement;
		});
	};

	$.fn.scrollTo = function( target, duration, settings ){
		if( typeof duration == 'object' ){
			settings = duration;
			duration = 0;
		}
		if( typeof settings == 'function' )
			settings = { onAfter:settings };
			
		if( target == 'max' )
			target = 9e9;
			
		settings = $.extend( {}, $scrollTo.defaults, settings );
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.speed || settings.duration;
		// Make sure the settings are given right
		settings.queue = settings.queue && settings.axis.length > 1;
		
		if( settings.queue )
			// Let's keep the overall duration
			duration /= 2;
		settings.offset = both( settings.offset );
		settings.over = both( settings.over );

		return this._scrollable().each(function(){
			var elem = this,
				$elem = $(elem),
				targ = target, toff, attr = {},
				win = $elem.is('html,body');

			switch( typeof targ ){
				// A number will pass the regex
				case 'number':
				case 'string':
					if( /^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ) ){
						targ = both( targ );
						// We are done
						break;
					}
					// Relative selector, no break!
					targ = $(targ,this);
				case 'object':
					// DOMElement / jQuery
					if( targ.is || targ.style )
						// Get the real position of the target 
						toff = (targ = $(targ)).offset();
			}
			$.each( settings.axis.split(''), function( i, axis ){
				var Pos	= axis == 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					old = elem[key],
					max = $scrollTo.max(elem, axis);

				if( toff ){// jQuery / DOMElement
					attr[key] = toff[pos] + ( win ? 0 : old - $elem.offset()[pos] );

					// If it's a dom element, reduce the margin
					if( settings.margin ){
						attr[key] -= parseInt(targ.css('margin'+Pos)) || 0;
						attr[key] -= parseInt(targ.css('border'+Pos+'Width')) || 0;
					}
					
					attr[key] += settings.offset[pos] || 0;
					
					if( settings.over[pos] )
						// Scroll to a fraction of its width/height
						attr[key] += targ[axis=='x'?'width':'height']() * settings.over[pos];
				}else{ 
					var val = targ[pos];
					// Handle percentage values
					attr[key] = val.slice && val.slice(-1) == '%' ? 
						parseFloat(val) / 100 * max
						: val;
				}

				// Number or 'number'
				if( /^\d+$/.test(attr[key]) )
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max );

				// Queueing axes
				if( !i && settings.queue ){
					// Don't waste time animating, if there's no need.
					if( old != attr[key] )
						// Intermediate animation
						animate( settings.onAfterFirst );
					// Don't animate this axis again in the next iteration.
					delete attr[key];
				}
			});

			animate( settings.onAfter );			

			function animate( callback ){
				$elem.animate( attr, duration, settings.easing, callback && function(){
					callback.call(this, target, settings);
				});
			};

		}).end();
	};
	
	// Max scrolling position, works on quirks mode
	// It only fails (not too badly) on IE, quirks mode.
	$scrollTo.max = function( elem, axis ){
		var Dim = axis == 'x' ? 'Width' : 'Height',
			scroll = 'scroll'+Dim;
		
		if( !$(elem).is('html,body') )
			return elem[scroll] - $(elem)[Dim.toLowerCase()]();
		
		var size = 'client' + Dim,
			html = elem.ownerDocument.documentElement,
			body = elem.ownerDocument.body;

		return Math.max( html[scroll], body[scroll] ) 
			 - Math.min( html[size]  , body[size]   );
			
	};

	function both( val ){
		return typeof val == 'object' ? val : { top:val, left:val };
	};

})( jQuery );

/**
 * jQuery.Preload
 * Copyright (c) 2008 Ariel Flesler - aflesler(at)gmail(dot)com
 * Dual licensed under MIT and GPL.
 * Date: 3/25/2009
 *
 * @projectDescription Multifunctional preloader
 * @author Ariel Flesler
 * @version 1.0.8
 *
 * @id jQuery.preload
 * @param {String, jQuery, Array< String, <a>, <link>, <img> >} original Collection of sources to preload
 * @param {Object} settings Hash of settings.
 *
 * @id jQuery.fn.preload
 * @param {Object} settings Hash of settings.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @example Link Mode:
 *	$.preload( '#images a' );
 *
 * @example Rollover Mode:
 *	$.preload( '#images img', {
 *		find:/\.(gif|jpg)/,
 *		replace:'_over.$1'
 *	});
 *
 * @example Src Mode:
 *	$.preload( [ 'red', 'blue', 'yellow' ], {
 *		base:'images/colors/',
 *		ext:'.jpg'
 *	});
 *
 * @example Placeholder Mode:
 *	$.preload( '#images img', {
 *		placeholder:'placeholder.jpg',
 *		notFound:'notfound.jpg'
 *	});
 *
 * @example Placeholder+Rollover Mode(High res):
 *	$.preload( '#images img', {
 *		placeholder:true,
 *		find:/\.(gif|jpg)/,
 *		replace:'_high.$1'
 *	});
 */
;(function( $ ){

	var $preload = $.preload = function( original, settings ){
		if( original.split ) // selector
			original = $(original);

		settings = $.extend( {}, $preload.defaults, settings );
		var sources = $.map( original, function( source ){
			if( !source ) 
				return; // skip
			if( source.split ) // URL Mode
				return settings.base + source + settings.ext;
			var url = source.src || source.href; // save the original source
			if( typeof settings.placeholder == 'string' && source.src ) // Placeholder Mode, if it's an image, set it.
				source.src = settings.placeholder;
			if( url && settings.find ) // Rollover mode
				url = url.replace( settings.find, settings.replace );
			return url || null; // skip if empty string
		});

		var data = {
			loaded:0, // how many were loaded successfully
			failed:0, // how many urls failed
			next:0, // which one's the next image to load (index)
			done:0, // how many urls were tried
			/*
			index:0, // index of the related image			
			found:false, // whether the last one was successful
			*/
			total:sources.length // how many images are being preloaded overall
		};
		
		if( !data.total ) // nothing to preload
			return finish();
		
		var imgs = $(Array(settings.threshold+1).join('<img/>'))
			.load(handler).error(handler).bind('abort',handler).each(fetch);
		
		function handler( e ){
			data.element = this;
			data.found = e.type == 'load';
			data.image = this.src;
			data.index = this.index;
			var orig = data.original = original[this.index];
			data[data.found?'loaded':'failed']++;
			data.done++;

			// This will ensure that the images aren't "un-cached" after a while
			if( settings.enforceCache )
				$preload.cache.push( 
					$('<img/>').attr('src',data.image)[0]
				);

			if( settings.placeholder && orig.src ) // special case when on placeholder mode
				orig.src = data.found ? data.image : settings.notFound || orig.src;
			if( settings.onComplete )
				settings.onComplete( data );
			if( data.done < data.total ) // let's continue
				fetch( 0, this );
			else{ // we are finished
				if( imgs && imgs.unbind )
					imgs.unbind('load').unbind('error').unbind('abort'); // cleanup
				imgs = null;
				finish();
			}
		};
		function fetch( i, img, retry ){
			// IE problem, can't preload more than 15
			if( img.attachEvent /* msie */ && data.next && data.next % $preload.gap == 0 && !retry ){
				setTimeout(function(){ fetch( i, img, true ); }, 0);
				return false;
			}
			if( data.next == data.total ) return false; // no more to fetch
			img.index = data.next; // save it, we'll need it.
			img.src = sources[data.next++];
			if( settings.onRequest ){
				data.index = img.index;
				data.element = img;
				data.image = img.src;
				data.original = original[data.next-1];
				settings.onRequest( data );
			}
		};
		function finish(){
			if( settings.onFinish )
				settings.onFinish( data );
		};
	};

	 // each time we load this amount and it's IE, we must rest for a while, make it lower if you get stack overflow.
	$preload.gap = 14; 
	$preload.cache = [];
	
	$preload.defaults = {
		threshold:2, // how many images to load simultaneously
		base:'', // URL mode: a base url can be specified, it is prepended to all string urls
		ext:'', // URL mode:same as base, but it's appended after the original url.
		replace:'' // Rollover mode: replacement (can be left empty)
		/*
		enforceCache: false, // If true, the plugin will save a copy of the images in $.preload.cache
		find:null, // Rollover mode: a string or regex for the replacement
		notFound:'' // Placeholder Mode: Optional url of an image to use when the original wasn't found
		placeholder:'', // Placeholder Mode: url of an image to set while loading
		onRequest:function( data ){ ... }, // callback called every time a new url is requested
		onComplete:function( data ){ ... }, // callback called every time a response is received(successful or not)
		onFinish:function( data ){ ... } // callback called after all the images were loaded(or failed)
		*/
	};

	$.fn.preload = function( settings ){
		$preload( this, settings );
		return this;
	};

})( jQuery );

(function($){ // secure $ jQuery alias
/*******************************************************************************************/
// jquery.event.wheel.js - rev 1 
// Copyright (c) 2008, Three Dub Media (http://threedubmedia.com)
// Liscensed under the MIT License (MIT-LICENSE.txt)
// http://www.opensource.org/licenses/mit-license.php
// Created: 2008-07-01 | Updated: 2008-07-14
/*******************************************************************************************/

// jquery method
$.fn.wheel = function( fn ){
	return this[ fn ? "bind" : "trigger" ]( "wheel", fn );
	};

var wheelEvents = !$.browser.mozilla ? "mousewheel" : // IE, opera, safari
    "DOMMouseScroll"+( $.browser.version<"1.9" ? " mousemove" : "" ); // firefox

// special event config
$.event.special.wheel = {
	setup: function(){
		$.event.add( this, wheelEvents, wheelHandler, {} );
		},
	teardown: function(){
		$.event.remove( this, wheelEvents, wheelHandler );
		}
	};


// shared event handler
function wheelHandler( event ){
	switch ( event.type ){
		case "mousemove": // FF2 has incorrect event positions
			return $.extend( event.data, { // store the correct properties
				clientX: event.clientX, clientY: event.clientY,
				pageX: event.pageX, pageY: event.pageY
				});
		case "DOMMouseScroll": // firefox
			$.extend( event, event.data ); // fix event properties in FF2
			event.delta = -event.detail/3; // normalize delta
			break;
		case "mousewheel": // IE, opera, safari
			event.delta = event.wheelDelta/120; // normalize delta
			if ( $.browser.opera ) event.delta *= -1; // normalize delta
			break;
		}
	event.type = "wheel"; // hijack the event
	return $.event.handle.call( this, event, event.delta );
	};
})(jQuery); // confine scope


//!!!!

//props:
//type: 0 - fixed element (app or window), 1 - popup element (menu), 2 - global listener (desktop)
//owner: free format value to be used as backlink to owner of focus (app or end object etc)
//thispar: this for all handlers
//param: user param for all handlers
//parent: parent _uFocus object which will get all events

//       Event handlers are propagated from the highest parent focus down to current focus
//       True return value from handler stops propagation (so parent focus can intercept event)
//       Global focus listeners get all events and can cancel them for all other focus objects.
//onkeydown: thispar.func(event,param,target focusobj)     true return value means that event must not be propagated to child focus objects (or all other is current is global)
//onkeyup: thispar.func(event,param,target focusobj)
//onkeypress: thispar.func(event,param,target focusobj)
//       Activates are propagated in the same way as key events but propagation cannot be cancelled, except for new activate
//onactivate: only for type 0 and 1; thispar.func(param,oldfocus,target focusobj) return value of -1 shows that activate() was called and current focus change processing must be stopped immediately
//		 Check whether focus can be activated; propagated as key events; false - forbid activation
//canactivate: only for type 0 and 1; thispar.func(param,oldfocus,target focusobj) false - cannot, true (but not -1) - can, return value of -1 shows that activate() was called and current focus change processing must be stopped immediately
//       Deactivates are propagated in reverse order, from current to highest parent 
//ondeactivate: only for type 0 and 1; thispar.func(param,oldfocus (THIS is part of it),target focusobj) return value of -1 shows that activate() was called and current focus change processing must be stopped immediately

function _uFocus(props) {
	if(!props) props={};
	this.constructor=_uFocus;
	this._tp=props.type || 0;
	this._thispar=props.thispar || null;//this for all handlers
	this._param=props.param || null;//user param for all handlers
	this._parent=props.parent || null;//user param for all handlers
	delete props.type;
	delete props.thispar;
	delete props.param;
	delete props.parent;

	this.owner=null;

	$.extend(this,props || {});
	this.destroyed=0;

	if(!_uFocus.globalset) {
		_uFocus.globalset=true;
	    $(document).bind("keydown keyup keypress",_uFocus._onkey);
	}
	if(this._tp==2) {
		_uFocus.glisteners.push(this);
	}
}

_uFocus.current=null; //current listener of type 0 or 1 if any
_uFocus.last_fixed=null; //if current has type=1, then previos current of type 0 stored here
_uFocus.glisteners=[]; //list of global listeners
_uFocus.globalset=false;
_uFocus.inprocess=0;
_uFocus.delayedactivate=null; //if somefocus.activate() was called from canactivate or onactivate handler, somefocus is stored here and repeated after

_uFocus._onkey=function(e) {
	var fn='on'+e.type,t;
	//correct opera bugs in processing arrow keys
	if(e.type=='keypress') {
		if(
			(	(e.keyCode==37 || e.keyCode==38 || e.keyCode==39 || e.keyCode==40 || 
					(e.keyCode==0 && $.browser.opera)
				) &&
				e.target && 
				e.target.tagName.toLowerCase()!='input' && e.target.tagName.toLowerCase()!='textarea'
			) ||
			(e.keyCode==32 && e.ctrlKey)
		   )
//alert(e.target);
//e.stopPropagation();
			e.preventDefault();
	}
	if(e.type=='keydown' && $.browser.opera && e.keyCode==0) { //it must be APP key 93
		e.keyCode=93;
	}
	//send event to global handlers
	for(var i=0;i<_uFocus.glisteners.length;i++) {
		t=_uFocus.glisteners[i];
		if(!t[fn]) continue;
		if(t[fn].call(t._thispar,e,t._param,_uFocus.current)) return; //stop propagation
	}
	t=_uFocus.current;
	if(!t) return; //no active focus
	//else send to active focus beginning from deepest parent
	var pars=[]; //list of our parents and self
	while(t) {
		pars.unshift(t);
		t=t._parent;
	}
	for(var i=0;i<pars.length;i++) {
		if(!pars[i][fn]) continue;
		if(pars[i][fn].call(pars[i]._thispar,e,pars[i]._param,_uFocus.current)) return; //stop propagation
	}
};
_uFocus.prototype={
	//return 0 if no focus was set, true on success, -1 if activate was delayed
	activate: function() { 
		if(this.destroyed || (this._tp!=0 && this._tp!=1)) return 0; //only such types can use explicit activate
		if(_uFocus.inprocess) {
			_uFocus.delayedactivate=this;
			return -1;
		}
		var r;
		_uFocus.inprocess=1;
//		_uFocus.delayedactivate=null;
		r=this._activate(this,_uFocus.current);
		_uFocus.inprocess=0;
		if(_uFocus.delayedactivate) {
			setTimeout("var f=_uFocus.delayedactivate;_uFocus.delayedactivate=null;if(f)f.activate();",0);
		}
		return r;
	},
	deactivate: function() {
		if(this.destroyed || (this._tp!=0 && this._tp!=1) || _uFocus.inprocess) return; //only such types can use explicit deactivate
		var r;
		_uFocus.inprocess=1;
//		_uFocus.delayedactivate=null;
		r=this._deactivate(_uFocus.current,null); //after this call we have current pointing to parent of THIS if r!=-1
		_uFocus.inprocess=0;
		if(_uFocus.delayedactivate) {
			setTimeout("var f=_uFocus.delayedactivate;_uFocus.delayedactivate=null;if(f)f.activate();",0);
			return;
		}
		if(r==1 && _uFocus.last_fixed && (!_uFocus.current || _uFocus.current._tp!=1)) { //here tp can be only ==1
			_uFocus.last_fixed.activate();
		}
	},
	isactive: function(nochild) {
		return this==_uFocus.current || (!nochild && this.isparentof(_uFocus.current));
	},
	isparentof: function(obj) { //checks whether obj is parent of THIS
		if(!obj) return 0;
		var t=obj._parent;
		while(t) {
			if(t==this) return 1;
			t=t._parent;
		}
		return 0;
	},
	_activate: function(tobj,prevobj,nochild) { //target focus object of first activate() for correct propagation. previous focus
		var t,r;
//console.log('Focus in _activate('+nochild+') '+descr(this));
		//check that current focus is not this on any depth
		if(this.isactive()) {
			t=_uFocus.current;
			if(!nochild || t==this) return 1;
			//else deactivate all child focuses
//			while(t && t._parent!=this) {
//				t=t._parent;
//			}
//			if(t) t._deactivate(prevobj,tobj); //it will update _uFocus.current
		}
//console.log('Focus isactive is false for '+descr(this));
		
		//transfer command to parent if have any
		if(this._parent) {
			if(!this._parent._activate(this._parent,prevobj)) return 0;
		}
		//at this point all parents are active or none exists but _uFocus.current can point to old focus

		//deactivate previous focus up to the common parent or null
		t=_uFocus.current;
		if(t && t!=this._parent) {
			while(t._parent && t._parent!=this._parent) {
				t=t._parent;
			}
			if(t._deactivate(prevobj,tobj)==-1) return 0; //it will update _uFocus.current; -1 means another activate was called
		}

		//at this point all parents are active and _uFocus.current points to parent (if any) or null
		//we can try to activate THIS focus
		//send canactivate notification to global handlers
		for(var i=0;i<_uFocus.glisteners.length;i++) {
			t=_uFocus.glisteners[i];
			if(!t.canactivate) continue;
			r=t.canactivate.call(t._thispar,t._param,prevobj,tobj);
			if(!r || (r==-1 && _uFocus.delayedactivate)) return 0; //cancel focus activation
		}
		//send canactivate notification to all parents. any parent can cancel activation of THIS focus
		var pars=[this]; //list of our parents and self
		t=this._parent;
		while(t) {
			pars.unshift(t);
			t=t._parent;
		}
		for(var i=0;i<pars.length;i++) {
			if(!pars[i].canactivate) continue;
			r=pars[i].canactivate.call(pars[i]._thispar,pars[i]._param,prevobj,tobj);
			if(!r || (r==-1 && _uFocus.delayedactivate)) return 0; //cancel focus activation
		}
		//here all parents and THIS allowed activation
		_uFocus.current=this;
		if(this._tp==1 && prevobj && prevobj._tp==0) _uFocus.last_fixed=prevobj; //remember last fixed focus for new popup focus
			else if(this._tp==0) _uFocus.last_fixed=null; //if this type==1 and prev type==1 then last_fixed unchanged

		//notify about successful activation
		for(var i=0;i<_uFocus.glisteners.length;i++) {
			t=_uFocus.glisteners[i];
			if(t.onactivate) 
				if(t.onactivate.call(t._thispar,t._param,prevobj,tobj)==-1 && _uFocus.delayedactivate) return 0;
		}
		for(var i=0;i<pars.length;i++) {
			if(pars[i].onactivate) 
				if(pars[i].onactivate.call(pars[i]._thispar,pars[i]._param,prevobj,tobj)==-1 && _uFocus.delayedactivate) return 0;
		}
		//here all parents and THIS are notified of activation
		return 1;		
	},
	_deactivate: function(tobj,newobj) {
		//check that current focus is really in use
		if(!this.isactive()) return 0;

		//send ondeactivate to all children and THIS
		var ii,tt;
		var t=_uFocus.current;
		while(t) {
			_uFocus.current=t._parent; //ondeactivate handlers must not see its active status
			if(t.ondeactivate) {
				if(t.ondeactivate.call(t._thispar,t._param,tobj,newobj)==-1 && _uFocus.delayedactivate) return -1;
			}
			if(t._tp!=1) _uFocus.last_fixed=null; //only deactivation of whole hierarchy of focuses with tp==1 preserves last_fixed

			//send deactivate notification to global handlers
			for(ii=0;ii<_uFocus.glisteners.length;ii++) {
				tt=_uFocus.glisteners[ii];
				if(tt.ondeactivate) {
					tt.ondeactivate.call(tt._thispar,tt._param,t,newobj);
				}
			}

			if(t==this) break;
			t=t._parent;
		}
		return 1;
	},
	destroy: function() {
		if(this.destroyed) return;
		this.deactivate();
		if(this._tp==2) { //remove global listener
			for(var i=0;i<_uFocus.glisteners.length;i++) {
				if(_uFocus.glisteners[i]==this) {
					_uFocus.glisteners.splice(i,1);
					break;
				}
			}
		}
		this.destroyed=1;
	}
};

function _uGetOffset(obj){
	if(!obj) return { 'left' : 0, 'top' : 0 };
	var left_offset = obj.offsetLeft;
	var top_offset = obj.offsetTop;
	if(!left_offset && !top_offset && obj.offsetParent==null) {
	left_offset=parseInt(obj.style.left);
	top_offset=parseInt(obj.style.top);
	} else
	while ((obj = obj.offsetParent) != null)
	{
		left_offset += obj.offsetLeft;
		top_offset += obj.offsetTop;
	}

	return { 'left' : left_offset, 'top' : top_offset };
}


function _uMenu(id,par,group) {
    this.init(id,par,group);
}
_uMenu.get=function(id) {
    var o=$('#'+id)[0];
    if(o) return o._umenu;
    return null;
}
_uMenu.show=function(id,par,tp,mid,dy,dx) {
    var o=_uMenu.get(id);
    if(o)o.show_menu(par,tp,mid,dy,dx);
};
_uMenu.hide=function(id,c) {
    var o=_uMenu.get(id);
    if(o) if(!c)o.hide_menu();else o.hide_child();
};
_uMenu.hideAll=function(e) {
//    if (e.which!=1 && e.type == 'click')return;
    var gr;
    with(_uMenu.prototype) {
	for (gr in have_active) {
	    if(have_active[gr] && !donothide[gr]) {
		for (var i in all_menus[gr]) _uMenu.hide(i);
    	    have_active[gr]='';
	    }
	donothide[gr]=false;
	}
    }
};
_uMenu.showOver=function (id,par,tp,mid,dy,dx) {
    var o=_uMenu.get(id);
    if(o) {
	var gr=o.group;
        with(_uMenu.prototype) {
	    if(timerid2[gr]) clearTimeout(timerid2[gr]);
	    if (have_active[gr].length>0 && have_active[gr].indexOf(","+id+",")==-1)
		o.show_menu(par,tp,mid,dy,dx);
	}
    }
};
_uMenu.schedule_hidechild=function(id) {
    var o=_uMenu.get(id);
    if(o) {
	var gr=o.group;
        with(_uMenu.prototype) {
    	if(timerid2[gr]) clearTimeout(timerid2[gr]);
	    timerid2[gr]=setTimeout("_uMenu.hide('"+id+"',1);_uMenu.prototype.timerid2['"+gr+"']=0;",800);
	}
    }
}

_uMenu.prototype={
    donothide: [], //group is first key
    all_menus: [], //group is first key
    have_active: [], //group is first key
    timerid: [], //group is first key
    timerid2: [], //group is first key
    global_set: false,
    init: function (id,par,group){
		this.id=id;
        this.obj=$('#'+id)[0];
        if(!this.obj) return;
        this.obj._umenu=this;
        if(!par) par=id;
        this.parentid=par;
        if(!group) group='def';
        this.group=group;
        this.obj.style.display = 'none';
        $(this.obj).bind("click",this,function(e) {e.data.donothide[e.data.group]=true;});
	if(this.all_menus[group]==undefined) this.all_menus[group]=[];
	if(this.have_active[group]==undefined) this.have_active[group]='';
	this.all_menus[group][id]=this;
	if(!this.global_set) {
	    $(document).bind("click",_uMenu.hideAll);
	    $(window).bind("resize",_uMenu.hideAll);
	    _uMenu.prototype.global_set=true;	
	}
    },
    show_menu: function (par,tp,mid,dy,dx) { 
        var ddX=0;
        var ddY=0;
        if(this.timerid2[this.group]) clearTimeout(this.timerid2[this.group]);
        if(this.have_active[this.group].indexOf(","+this.id+",")>=0) {
                this.hide_menu();
                return;
        }
        if(!dy)dy=0;
        if(!dx)dx=0;
        if(mid){
                ddX=$('#'+mid)[0].offsetLeft;
                ddY=$('#'+mid)[0].offsetTop;
        }
        this.allmenus_hidenp();
        if(!par) par=this.obj.parentNode; else par=$('#'+par)[0];
        var pos=_uGetOffset(par);
        pos['left']+=dx-ddX;
        pos['top']+=dy-ddY;
        if(tp=='r') pos['left']+=par.offsetWidth-4;
    	    else pos['top']+=par.offsetHeight+1; //tp=='d'
        var ww=$(window).width();
        with(this.obj.style) {
    	left=pos['left']+'px';
    	top=pos['top']+'px';
    	display='';
    	visibility='visible';
        };
        try { if(pos['left']+this.obj.offsetWidth>ww) {
                pos['left']=ww-this.obj.offsetWidth-5;
                this.obj.style.left=pos['left']+'px';
                }
        } catch(e) {}
        if(!this.have_active[this.group]) this.have_active[this.group]='';
        this.have_active[this.group]+=','+this.id+',';
        if(this.timerid[this.group]) clearTimeout(this.timerid[this.group]);
        this.donothide[this.group]=true;
        this.timerid[this.group]=setTimeout("with(_uMenu.prototype){donothide['"+this.group+"']=false;timerid['"+this.group+"']=null;};",100);
    },
    allmenus_hidenp: function () {
        var parents={};
        var id=this.id;
        while(this.all_menus[this.group][id] && this.all_menus[this.group][id].parentid!=id && id) {parents[this.all_menus[this.group][id].parentid]=1;id=this.all_menus[this.group][id].parentid;}
        for (var i in this.all_menus[this.group]) {
                if(parents[i]==1) continue;
                this.all_menus[this.group][i].hide_menu();
        }
    },
    hide_menu: function () {
      with(this) {
        hide_child();
        var x=have_active[group].indexOf(","+id+",");
        if(x>=0) have_active[group]=have_active[group].substring(0,x);
        obj.style.display = 'none';
        obj.style.visibility = 'hidden';
      }
    },
    hide_child: function () {
      with(this) {
        for (var i in all_menus[group]) if(all_menus[group][i].parentid==id && i!=id) all_menus[group][i].hide_menu();
      }
    }
};


/*
Each menu item can be in form:
1.  'string' - just string with default action onitem (if it's defined) or without action. in last case item has not hover hightlight by default
2.  'sep' - separator
3.  ['label',action,props]
	def props is {hl:0} if action is not defined
	action can be:
	3.1 'a' - tells that item has <a> tag and item action is to follow href in that tag
	3.2 function - action(item_index,menuobj,id,item_opts,event). if null then global onitem is used. default this parameter is thispar from menu props
	3.3 array - submenu
	props:
		{
		action - 'a' or function if second element was array for creating submenu (to add action to item opening submenu)
		id - item string id which will be sent to action or onitem func in addition to index
		hl  - hover highlight. can be used to overwrite menu property
		thispar - this parameter for action
		mark - if menu has marks enabled specifies the state of mark (false - hidden, true - visible)
		marktext - if mark is visible (mark is true) then specifies html content for mark element (e.g. img tag). can be specified as array (object). then mark true values are used as index to this array. menu.props.withmarks is the default value of this field
		onldown - action for left mouse down
		onrdown - action for right mouse down
		pos - override default pos properties for submenu
		opts - override default properties for submenu
		}
*/

function _uMENU(name,pos,opts,elems,noinit) {
	this.constructor=_uMENU;
	this.name=name;
	this.pos=$.extend({
		pos: null,
		alignObj: null,
		align: 'd',
//r(R) - to the right from object + dx, top edge from object + dy ; R will change horiz pos to l-rules if goes out screen
//l(L) - to the left from object + dx, top edge from object + dy ; L will change horiz pos to r-rules if goes out screen
//d(D) - left (right from rtl) edge from object+dx, to the down from object + dy ; D will change vert pos to u-rules if goes out screen
//u(U) - left (right from rtl) edge from object+dx, to the up from object + dy ; U will change vert pos to d-rules or horiz pos to l-rules if goes out screen
		parent: null,
		parentfocus:null, //apps must specify app._focus for popup without windows
		dx:0,
		dy:0,
		childdy:0,
		childdx:0
	},pos || {});
	this.props=$.extend({
		parentnode: null, //inherited by child menus
		design: _uMENU.defdesign || 'std',
		hidden: opts.statical && elems && elems.length>0 ? 0 : 1,
		shadow: 1,
		addclass: '', //add this class to class of top menu html object
		withmarks: null, //if true (some object specified) then items of this menu can have marks to the left (u-menumarks is added to top menu object). value of this field is the default marktext
		highlight: 1, //whether hovered items must be highlighted by adding class u-menuitemhl
		statical: opts.horiz ? 1 : 0, //do not hide menu on mouse clicks
		hidetimer: 0, //time in ms to hide menu if no item was hovered
		horiz: 0, //whether menu is horizontal
		noabs: 0, //do not use position:absolute for menu
		width: 0, //0 - width is calculated by content, auto - width is just not assigned (for noabs=1), X - specified value
		onshow: null, //(menuobj,menuidx) called just before menu is shown (can be used to set marks)
		onhide: null,
		ondestroy: null,
		onitem: null, //inherited by child menus, reaction to item click
		onldown: null, //inherited by child menus, reaction to item left mouse down
		onrdown: null, //inherited by child menus, reaction to item right mouse down
		thispar: null, //'this' param for handlers; inherited by child menus
		onreadycreate: null, //(menu) called when menu is fully inited
		wnd:null, //inherited by child menus, focus will be child of window's focus
		rtl:0 //inherited by child menus
	},opts || {});
	this.state={visible:false,init:false,destroyed:false};
    this.design=this.props.design && _uMENU.designs[this.props.design] ? _uMENU.designs[this.props.design] : _uMENU.designs['std'];
    this.idx=_uMENU.nextidx++;
    _uMENU.all[this.idx]=this;
   	if(!this.pos.parent) this.zpos=_uMENU.defz;
   		else this.zpos=this.pos.parent.zpos+5;
    this.xpos=this.ypos=0;
	this.width=10;
	this.height=10;	
	this.elems=[];
	this.add_elems=elems && elems.length>0 ? [elems] : [];
	this.del_elems=[];
	this.pend_show=null;
	this.appendtimer=null;
	this.decor={w:0,h:0};
	this.frame=null;
	this.childtimer=null;
	this.sh=null;
	this.hidetimer=null;

	this.hlitem=-1; //highlighted item or -1 if none
	this.have_active=null;

	this._focus=new _uFocus({type:1,thispar:this,owner:this,parent:this.pos.parentfocus ? this.pos.parentfocus : (this.pos.parent ? this.pos.parent._focus : (this.props.wnd ? this.props.wnd._focus : null)),onkeydown:this.onkeydown,ondeactivate:this.onfocusdeactivate});

	var t=document.createElement("div");
	t.id="_umenu"+this.idx;
	if(!this.props.parentnode) $($("body")[0]).prepend(t);
		else this.props.parentnode.appendChild(t);

	this.top=t;
    $(t).addClass("x-unselectable").css({visibility:'hidden',display:'block'});
    var m=document.createElement("div");
    t.appendChild(m);
    this.menu=m;

	if(
//	!this.props.horiz || 
	!this.props.noabs) {
    	$(t).css({position:'absolute',zIndex:this.zpos});
	    if($.browser.msie && parseFloat($.browser.version)<7){
		    var html = '<iframe tabindex="-1" '
    		    +'style="display:block; position:absolute; '
			+'filter:Alpha(Opacity=\'0\'); '
			+'width:'+this.width+'px'
			+'height:'+this.height+'px;border:0"/>';

	    	this.frame=document.createElement(html);
			t.appendChild(this.frame);
	    }
	    if(this.props.shadow && !this.props.horiz && (!$.browser.msie || $.browser.version>6)) {
			this.shadow_init();
			this._resizeSh();
	    }
    	$(m).css({position:"absolute",zIndex:2,left:0});
	}
   	$(m).css("width","50px").bind("mousedown",this,_uMENU._onmenumousedown);

    this.parts=this.design.menu_init(m,this.props.horiz ? 10 : 50,this.props,this.pos.parent);
	if(!_uMENU.globalset) {
		_uMENU.globalset=true;
	    $(document).bind("mousedown",_uMENU.hideallmenus);
	    $(window).bind("resize",_uMENU.hideallmenus);
	}
	this.toinit=[]; //submenus which require init1()
	this.tocalcsize=[]; //submenus which require calcsize()
	this.createsubmenus();

	if(!this.props.hidden) this.show();
	if(!noinit)setTimeout("var m=_uMENU.all["+this.idx+"];if(m)m.init1();",10);
}


_uMENU.all=[];
_uMENU.nextidx=0;
_uMENU.lastz=0;
_uMENU.defz=25050;
_uMENU.defdesign='std';
_uMENU.globalset=false;
_uMENU.ignoreclick=null;

_uMENU.getbyname=function(name) {
    var a=this.all;
    for(var i=0;i<a.length;i++) if(a[i] && a[i].name==name) return a[i];
    return null;
};

_uMENU.designs={
    std: {
	sh_sz: [4,2], //design specific shadow config

	shadow_init: function(top) {
	    var sh=[];
	    for(var i=0;i<3;i++) {
		sh[i]=document.createElement("div");
		top.appendChild(sh[i]);
		$(sh[i]).attr("class","x-sh").css("position","absolute").css("z-index",1);
	    }
	    $(sh[0]).addClass("xsl").css({width:(this.sh_sz[0]+this.sh_sz[1])+"px",left:(-this.sh_sz[0])+"px",top:"0px"}).html('<div class="xstl"><div class="xsml"></div></div>');
	    $(sh[1]).addClass("xsr").css({width:(this.sh_sz[0]+this.sh_sz[1])+"px",top:"0px"}).html('<div class="xstr"><div class="xsmr"></div></div>');
	    $(sh[2]).addClass("xsb").css({height:(this.sh_sz[0]+this.sh_sz[1])+"px",left:(-this.sh_sz[0])+"px"}).html('<div class="xsbl"><div class="xsbr"><div class="xsbc"></div></div></div>');
	    return sh;
	},
	shadow_resize: function(sh,w,h) {
	    $(sh[0]).css({height:(h-this.sh_sz[1])+"px"});
	    $(sh[1]).css({height:(h-this.sh_sz[1])+"px",left:(w-this.sh_sz[1])+"px"});
	    $(sh[2]).css({width:(w+this.sh_sz[0]*2)+"px",top:(h-this.sh_sz[1])+"px"});
	},
	shadow_hide: function(sh) {
	    $(sh[0]).add(sh[1]).add(sh[2]).hide();
	},
	shadow_show: function(sh) {
	    $(sh[0]).add(sh[1]).add(sh[2]).show();
	},
	menu_init: function(menu,inith,props,parent) {
	    var p={};
		if(!props.horiz) {
			$(menu).attr("class","u-menu"+(props.addclass ? ' '+String(props.addclass): '')+(props.withmarks ? ' u-menumarks': ''));
			if($.browser.msie) $(menu).css("overflow","hidden");
		    $(menu).html(
(parent && parent.props.horiz ? '' : '<div class="xw-tl"><div class="xw-tr"><div class="xw-tc xw-tsps"></div></div></div>')
+ '<div class="xw-ml"><div class="xw-mr"><div class="xw-mc"><div class="u-menubody">'
+ '<div class="u-menucont" style="overflow:visible;height:'+inith+'px"></div></div></div></div></div>'
+ '<div class="xw-bl"><div class="xw-br"><div class="xw-bc"><div class="xw-footer"></div></div></div></div>'
		    );
//		    p.upper=$(menu).find(".xw-tl")[0];
//		    p.center=$(wnd).find(".xw-ml")[0];
//	    	$(wnd).find(".xw-mc").bind("mousedown",function(e){e.stopPropagation();});
		} else {
			$(menu).attr("class","u-menuh"+(props.addclass ? ' '+String(props.addclass): '')+(props.withmarks ? ' u-menumarks': '')).css("overflow","hidden");
			$(menu).html('<div class="u-menubody"><div class="u-menucont" style="overflow:hidden;height:'+inith+'px"></div></div>');
		}
	    p.content=$(menu).find(".u-menucont")[0];
		p.elems=[];
		p.marks=[];
		$(menu).find("div,span").andSelf().attr("unselectable","on");
	    return p;
	},
	append_item: function(o,el,hl) {
		var i=o.elems.length,a,txt,act=null,mark,actl,actr;
		act=el[1] ? el[1] : (typeof (el[2].action)!='undefined' ? el[2].action : o.props.onitem);
		actl=el[2].onldown || o.props.onldown;
		actr=el[2].onrdown || o.props.onrdown;
		txt=el[0];
		if(el[2].hl!=undefined) hl=el[2].hl;
		if(o.props.withmarks && txt!='sep' && el[2].mark!=undefined) { //if we have to add u-menumark object
			txt='<div class="u-menumark"></div>'+txt;
			mark=1;
		}
		if(act && (act=='a' || el[2].action=='a')) {
			a=document.createElement('a');
			$(a).css('display','block');
		} else a=document.createElement('div');
		if(!o.props.horiz) {
			if(txt=='sep') {
				a.className='u-menuvsep';
			} else {
				a.className='u-menuvitem';
				if(!act || act.constructor!=_uMENU) {
					$(a).html(txt);
					if(hl) $(a).bind("mouseover",{hl:hl,item:i,obj:o},_uMENU._onitemmouseover).bind("mouseout",{hl:hl,item:-1,obj:o},_uMENU._onitemmouseout);
					if(act) $(a).bind("click",{act:act,obj:o,item:i,itemobj:el},_uMENU._onitemclick);
					if(actl || actr) $(a).bind("mousedown",{actl:actl,actr:actr,obj:o,item:i,itemobj:el},_uMENU._onitemmousedown);
				} else {
//					$(a).addClass('u-menuvitemparent').html('<div class="u-menuarrow" style="float:right"></div>'+txt);
//					$(a).addClass('u-menuvitemparent').html('<table align="center" style="text-align:left;padding:0;margin:0;botder:0" cellspacing="0" cellpadding="0"><tr><td style="white-space:nowrap">'+txt+'</td><td><div class="u-menuarrow"></div></td></tr></table>');
					$(a).addClass('u-menuvitemparent').html('<div class="u-menuarrow"></div>'+txt);
					$(a).bind("mouseover",{hl:hl,item:i,obj:o},_uMENU._onitemmouseover).bind("mouseout",{hl:hl,item:i,obj:o},_uMENU._onitemmouseout);
					$(a).bind("mousedown",{child:act,obj:o,item:i,itemobj:el},_uMENU._onitemclick);
					if(el[2].action) $(a).bind("click",{act:el[2].action,obj:o,item:i,itemobj:el},_uMENU._onitemclick);
					if(actl || actr) $(a).bind("mousedown",{actl:actl,actr:actr,obj:o,item:i,itemobj:el},_uMENU._onitemmousedown);
				}
			}
		} else { //horiz
			$(a).css("float","left"); 
			if(txt=='sep') {
				a.className='u-menuhsep';
			} else {
				a.className='u-menuhitem';
				if(!act || act.constructor!=_uMENU) {
					$(a).html(txt);
					if(hl) $(a).bind("mouseover",{hl:hl,item:i,obj:o},_uMENU._onitemmouseover).bind("mouseout",{hl:hl,item:i,obj:o},_uMENU._onitemmouseout);
					if(act) $(a).bind("click",{act:act,obj:o,item:i,itemobj:el},_uMENU._onitemclick);
					if(actl || actr) $(a).bind("mousedown",{actl:actl,actr:actr,obj:o,item:i,itemobj:el},_uMENU._onitemmousedown);
				} else {
					$(a).addClass('u-menuhitemparent').html(txt);
					$(a).bind("mouseover",{hl:hl,item:i,obj:o},_uMENU._onitemmouseover).bind("mouseout",{hl:hl,item:i,obj:o},_uMENU._onitemmouseout);
					$(a).bind("mousedown",{child:act,obj:o,item:i,itemobj:el},_uMENU._onitemclick);
					if(el[2].action) $(a).bind("click",{act:el[2].action,obj:o,item:i,itemobj:el},_uMENU._onitemclick);
					if(actl || actr) $(a).bind("mousedown",{actl:actl,actr:actr,obj:o,item:i,itemobj:el},_uMENU._onitemmousedown);
				}
			}
		}
		if(hl) $(a).find("*").andSelf().filter('[nodeType=1]').attr("unselectable","on");
		o.elems[i]=el;
		o.parts.elems[i]=a;
		if(mark) o.parts.marks[i]=$(a).find('.u-menumark')[0];
		if(o.props.horiz && (o.props.rtl || window._rtl))
			o.parts.content.insertBefore(a,o.parts.content.firstChild);
			else
			o.parts.content.appendChild(a);
	},
	calc_size: function(o) {
		var w=0,h=0,hm=0,prevm=0;
		if(!o.props.horiz) {
			for(var i=0;i<o.parts.elems.length;i++) {
				w=Math.max(w,Math.max(o.parts.elems[i].offsetWidth,o.parts.elems[i].scrollWidth));
				hm+=Math.max(prevm,parseInt('0'+$(o.parts.elems[i]).css('margin-top')));
				prevm=parseInt('0'+$(o.parts.elems[i]).css('margin-bottom'));
				h+=o.parts.elems[i].offsetHeight;
			}
			h+=hm+prevm;
		} else {  //horiz
			for(var i=0;i<o.parts.elems.length;i++) {
				w+=Math.max(o.parts.elems[i].offsetWidth,o.parts.elems[i].scrollWidth);
				h=Math.max(h,o.parts.elems[i].offsetHeight);
			}
		}
		return {w:w,h:h};
	},
	_onitemhl: function(e,st) {
		if(st) $(this).addClass("u-menuitemhl");
			else $(this).removeClass("u-menuitemhl");
	}
    }	
};
_uMENU._onitemmouseover=function(e) {
		var d=e.data;

		var prev=d.obj.hlitem,it,hl;
		if(prev>=0 && prev!=d.item) { //unhighlight previous item
			it=d.obj.elems[prev];
			if(it && it[0]!='sep') {
				hl=d.obj.props.highlight;
				if(it[2].hl!=undefined) hl=it[2].hl;
				if(hl) {
					d.obj.design._onitemhl.apply(d.obj.parts.elems[prev],[null,0]);
				}
			}
		}


		if(d.hl) d.obj.design._onitemhl.apply(this,[e,1]);
		d.obj.hlitem=d.item;
		if(d.obj.hidetimer) clearTimeout(d.obj.hidetimer); d.obj.hidetimer=null;
		if(d.item>=0)if(!d.obj.props.horiz || d.obj._focus.isactive())d.obj.schedule_childopen(d.item);
};
_uMENU._onitemmouseout=function(e) {
		var d=e.data,it;
		//that that we do not have opened child
		if(d.hl) {
			if(d.obj.props.statical && d.obj._focus.isactive()) return; //do not blur active static menus
			if(d.item==d.obj.hlitem && d.item>=0) {
				it=d.obj.elems[d.item];
				if(it && it[1] && it[1].constructor==_uMENU && it[1].state.visible) return; //do not blur active submenu
				d.obj.design._onitemhl.apply(this,[e,0]);
				d.obj.hlitem=-1;
			}
		}
//		d.obj.reset_childopen();
};
_uMENU._onitemclick=function(e) {
		var d=e.data,act=d.itemobj[1] || d.itemobj[2].action || d.obj.props.onitem;
		if(!d.child && act) {
			if(!d.obj.props.statical)d.obj.hide(true);else d.obj.hidechildren();
			if(act.constructor==Function) {
				act.apply(d.itemobj[2].thispar || d.obj.props.thispar,[d.item,d.obj,d.itemobj[2].id,d.itemobj[2],e]);
			} 
			else if(act=='a') {
				var l=null;
			    if(this==e.target || e.target.tagName.toLowerCase()!='a') {
					if(this!=e.target) { //check that we do not have tag-A parent
						var c1=$(e.target).find('*').andSelf(),c2=$(this).find('*').not(c1);
						if(c2.filter("A").length==0) l=$(this).find("a")[0];
							else l=null;
					} else l=$(this).find("a")[0];
					if(l) {
						this.target=l.target;
						this.href=l.href;
						if(l.onclick) return l.onclick();
					}
				}
				if(!l){
					this.removeAttribute('href');
				}
			}
			return;
		}
		if(!d.child) return;
//		_uMENU.ignoreclick=d.child;
		d.obj.reset_childopen();
		d.obj.hidechildren(d.child);
		if(d.obj.props.horiz && d.child.state.visible) {d.child.hide();d.obj._focus.deactivate();}
			else
		if(!d.child.state.visible)// d.child.hide();
//			else 
			d.obj.childopen(d.item);
};
_uMENU._onitemmousedown=function(e) {
		var d=e.data,actl=d.actl || d.obj.props.onldown,actr=d.actr || d.obj.props.onrdown;
		if(e.which==1 && e.ctrlKey) e.which=3;
		if(e.which==1 && actl) {
			_uWnd.globalmousedown();
			actl.apply(d.itemobj[2].thispar || d.obj.props.thispar,[d.item,d.obj,d.itemobj[2].id,d.itemobj[2],e]);
			e.stopPropagation();
		} else if(e.which==3 && actr) {
//			_uWnd.globalmousedown();
			actr.apply(d.itemobj[2].thispar || d.obj.props.thispar,[d.item,d.obj,d.itemobj[2].id,d.itemobj[2],e]);
			e.preventDefault();
			e.stopPropagation();
		}
};
//hides all non-statical menus which are visible except for 'exc' and its parents
_uMENU.hideallmenus=function() { //optional exception
	var i,m,ig;
loop:
	for(i=0;i<_uMENU.all.length;i++) {
		m=_uMENU.all[i];
		if(!m || !m.state.visible) continue;
		if(m.props.statical) {m._focus.deactivate();continue;}
		ig=_uMENU.ignoreclick;
		while(ig) {
			if(ig==m) continue loop;
			ig=ig.pos.parent;
		}
		m.hide();
	}
	if(_uMENU.ignoreclick)setTimeout("_uMENU.ignoreclick=null;",10);
};
_uMENU._onmenumousedown=function(e) {
//	if(!_uMENU.ignoreclick)_uMENU.ignoreclick=e.data;
	if(e.data.props.wnd) e.data.props.wnd.activate(e,1);
	if(e.which==1 && e.ctrlKey) e.which=3;
	if(e.which==3 && e.data.props.horiz) return;
	e.stopPropagation();
};
_uMENU.prototype={
	onfocusdeactivate: function() {
		if(this.props.statical) { //unhighlight previous item
			var prev=this.hlitem,it,hl;
			if(prev>=0) { 
				it=this.elems[prev];
				if(it && it[0]!='sep') {
					hl=this.props.highlight;
					if(it[2].hl!=undefined) hl=it[2].hl;
					if(hl) {
						this.design._onitemhl.apply(this.parts.elems[prev],[null,0]);
					}
				}
			}
		} else {
			this.hide();
		}
	},
	onkeydown: function(e,un,t) {
		var k=e.keyCode,n,cur,it,hl,prev,i,delta;
		if(k==27 && t==this._focus) { //escape, hide topmost menu
			if(!this.props.statical) {
				this.hide();
				if(this.pos.parent && this.pos.parent.props.statical) //closing child of static menu must disable focus of static menu
					this.pos.parent._focus.deactivate();
			}
			else { //this can happen only when static menu was activated by opening child and then cursor moved to non-dropdown item of that static menu
				this.hidechildren();
				this._focus.deactivate();
			}
			e.preventDefault();
			e.stopPropagation();
			return 1;
		}
		if((k==17 || k==18) && e.ctrlKey && e.altKey) { //ctrl+alt, hide all menus
//			this.hidechildren();
//			if(!this.props.statical) this.hide();
			this._focus.deactivate();
			e.preventDefault();
			e.stopPropagation();
			return 1;
		}

		if((k==13 || (k==40 && this.props.horiz)) && t==this._focus) {//enter
			e.preventDefault();
			e.stopPropagation();
			if(this.hlitem<0) return 1;
			cur=this.hlitem;
			it=this.elems[cur];
			var act=it[1] || it[2].action || this.props.onitem;
			var actl=it[2].onldown || this.props.onldown;
			hl=0; //whether to hide menu
			if(act && act.constructor==_uMENU) { //submenu, open it
				this.reset_childopen();
				this.hidechildren(cur);
				if(!act.state.visible) this.childopen(cur,0);
			}  //continue processing in case action of ldown specified
			else if(it[2].action) act=it[2].action;
			else if(!act || act.constructor!=Function) act=null;
			if(k==40) return 1; //DOWN was pressed in horiz menu when no popup is opened
			if(act && act.constructor==Function) { //run main action
				act.apply(it[2].thispar || this.props.thispar,[cur,this,it[2].id,it[2],e]);
				hl=1;
			} 
			if(actl && actl.constructor==Function) { //run left down action
				actl.apply(it[2].thispar || this.props.thispar,[cur,this,it[2].id,it[2],e]);
				hl=1;
			}
			if(hl) 
				if(!this.props.statical) this.hide(1);else this.hidechildren();
			return 1;
		}
		if(k==93 && t==this._focus) {//APP-key
			e.preventDefault();
			e.stopPropagation();
			if(this.hlitem<0) return 1;
			cur=this.hlitem;
			it=this.elems[cur];
			var actr=it[2].onrdown || this.props.onrdown;
			if(actr && actr.constructor==Function) { //run right down action
				actr.apply(it[2].thispar || this.props.thispar,[cur,this,it[2].id,it[2],e]);
			}
			return 1;
		}
		if((k==37 || k==39) && t==this._focus && !this.props.horiz) { //LEFT and RIGHT on vert menus
			e.preventDefault();
			e.stopPropagation();
			if(k==39 && this.hlitem>=0) { //right, try to open submenu if any
				cur=this.hlitem;
				it=this.elems[cur];
				if(it && it[1] && it[1].constructor==_uMENU) {
					this.childopen(cur,0);
					return 1;
				}
			}
			else if(k==37 && this.pos.parent && !this.pos.parent.props.horiz) {//left, close submenu if our parent not horiz
				this.hide();
				return 1;
			}
			//otherwise just give transfer event to horizontal parent
			it=this.pos.parent;
			while(it && !it.props.horiz && it!=this) it=it.pos.parent;
			if(it && it.props.horiz) it.onkeydown(e,un,it._focus);
		}
		if((k==40 || k==38 || ((k==37 || k==39) && this.props.horiz)) && t==this._focus) { //DOWN and UP in vert and LEFT RIGHT in horiz
			e.preventDefault();
			e.stopPropagation();
			if(this.props.horiz && (k==40 || k==38)) return 1;
			if(k==40 || k==39) delta=1; //down or right
				else delta=-1;
			prev=cur=this.hlitem;
			n=this.elems.length;
			for(i=0;i<n;i++) {
				cur+=delta;
				if(cur>=n || cur<0) cur=delta>0 ? 0 : n-1;
				it=this.elems[cur];
				if(it && it[0]!='sep') {
					hl=this.props.highlight;
					if(it[2].hl!=undefined) hl=it[2].hl;
					if(hl) break;
				}
			} 
			if(i>=n || prev==cur) return 1; //no movement
			this.hlitem=cur;

			if(prev>=0) { //unhighlight previous item
				it=this.elems[prev];
				if(it && it[0]!='sep') {
					hl=this.props.highlight;
					if(it[2].hl!=undefined) hl=it[2].hl;
					if(hl) {
						this.design._onitemhl.apply(this.parts.elems[prev],[e,0]);
						this.reset_childopen();
					}
				}
			}

			//highlight new item
			this.design._onitemhl.apply(this.parts.elems[cur],[e,1]);
			if(this.hidetimer) clearTimeout(this.hidetimer); this.hidetimer=null;
			if(this.props.horiz) this.childopen(cur,0);
			return 1;
		}
	},
	shadow_init:function() {
    	this.sh=this.design.shadow_init(this.top);
	},
	_resizeSh:function() {
	    if(this.sh)this.design.shadow_resize(this.sh,this.width,this.height);
	},
	moveTo:function(x,y) {
		with(this) {
			$(top).css("left",x+'px').css("top",y+'px');
		    xpos=x;
    		ypos=y;
  		}
	},
	resizeTo:function(w,h) {
		with(this) {
			if(props.width==0) $(menu).css("width",w+'px');
				else if(props.width!='auto') $(menu).css("width",props.width);
				else $(menu).css("width",'auto');
			if(props.horiz) {
				$(menu).css("height",h+'px');
	    		$(parts.content).css("width",(w-decor.w)+'px').css("height",(h-decor.h)+'px');
			} else {
//			    $(menu).css("width",w+'px');//.css("height",h+'px');
    			$(parts.content).css("width",(w-decor.w)+'px');//.css("height",(h-decor.h)+'px');
				if($.browser.opera) $(top).css("width",w+'px'); //correct bug with thin menus
			}
//   		$(parts.upper).css("width",w+'px');
//    		$(parts.upper.firstChild.firstChild).css("width",w+'px');
		    if(frame) $(frame).css("width",w+'px').css("height",h+'px');
		    width=w;
		    height=h;
		    _resizeSh();
		}
	},
	init1: function(nocalcsize) {
		with(this) {
    		decor.w=50-parts.content.offsetWidth;
    		decor.h=menu.offsetHeight-(props.horiz ? 10 : 50);
			state.init=true;
//alert('in init of '+this.idx);
			_initsubmenus();
			if(add_elems)appendItems(null,0,nocalcsize); 
				else {
				if(pend_show)show(pend_show);
				if(props.onreadycreate) props.onreadycreate.call(props.thispar,this);
				props.onreadycreate=null;
//				if(oninit && props.wnd)oninit.apply(props.wnd);
				}
  		}
	},
	show: function(pos,inititem) {
		if(this.state.destroyed) return;
		if(!this.state.init){this.pend_show=pos || {};return;}
		this.pend_show=null;
		this.pos=$.extend(this.pos,pos || {});
		if(this.pos.parent && !this.pos.parent.state.visible) return; //children of hidden parent cannot be shown
		this._focus.deactivate();
		this._focus._parent=this.pos.parentfocus ? this.pos.parentfocus : (this.pos.parent ? this.pos.parent._focus : (this.props.wnd ? this.props.wnd._focus : null));
	    if(!this.pos.parent) {
	    	this.zpos=_uMENU.defz;
	    }
    	else {
    		this.zpos=this.pos.parent.zpos+5;
    	}
		$(this.top).css("z-index",this.zpos);
		if(this.pos.pos || this.pos.alignObj) {
			var a,pos,ow,oh;
//			this.moveTo(this.pos.pos.x,this.pos.pos.y);
			if(this.pos.alignObj) {
				a=this.pos.alignObj;
				pos=$(a).offset();
				ow=a.offsetWidth;
				oh=a.offsetHeight;
			} else {
				pos={left:this.pos.pos.x,top:this.pos.pos.y};
				ow=oh=0;
			}
		        var ppos,x,y,
		        	d=_uWnd.getdims(),ww=d.clientW,wh=d.clientH,wl=d.clientLeft,wt=d.clientTop,
		        	al=this.pos.align || 'd';
				if(this.props.wnd && this.props.wnd.desktop) {
					d=this.props.wnd.desktop;
					ww=d.width;
					wh=d.height;
					wl=0;
					wt=0;
				}
				if(this.props.rtl || window._rtl) x=pos.left+ow+this.pos.dx-this.width;
					else
					x=pos.left+this.pos.dx;
				y=pos.top+this.pos.dy;

				if(al=='r' || al=='R') x=pos.left+ow+this.pos.dx;
					else if(al=='l' || al=='L') x=pos.left-this.width+this.pos.dx;
					else if(al=='d' || al=='D') y=pos.top+oh+this.pos.dy;
					else if(al=='u' || al=='U') y=pos.top-this.height+this.pos.dy;
				if(x-wl+this.width>ww-3-this.design.sh_sz[0] || x-wl<1)
					if(al=='R' || al=='U') x=pos.left-this.width-this.pos.dx;
						else if(al=='L') x=pos.left+ow-this.pos.dx;
				if(x-wl+this.width>ww-3) x=ww-3-this.design.sh_sz[0]-this.width+wl;
				if(x-wl<1) x=1+wl;

				if(y-wt+this.height>wh-3-this.design.sh_sz[1] || y-wt<1)
					if(al=='D') y=pos.top-this.height-this.pos.dy;
						else if(al=='U') y=pos.top+oh-this.pos.dy;
				if(y-wt+this.height>wh-3) y=wh-3-this.design.sh_sz[1]-this.height+wt;
				if(y-wt<1) y=1+wt;

		        if(this.props.parentnode){
		        	ppos=$(this.props.parentnode).offset();
		        	x-=ppos.left;
		        	y-=ppos.top;
		        }
        		this.moveTo(x,y);
			}
    	if(this.props.onshow) this.props.onshow.apply(this.props.thispar,[this,this.idx]);
		//check marks
		if(this.props.withmarks) {
			for(var i=0;i<this.elems.length;i++) {
				var c=this.elems[i];
				if(c && c[2] && this.parts.marks[i]) {
					if(!c[2].mark) this.parts.marks[i].style.display='none';
						else {
							var m=c[2].marktext || this.props.withmarks;
							if(typeof m=='object' && m.constructr!=String) m=m[c[2].mark];
							this.parts.marks[i].innerHTML=String(m);
							this.parts.marks[i].style.display='block';
						}
				}
			}
		}

		if(!this.props.statical && this.hlitem>=0) { //unhighlight previous item
			var	it=this.elems[this.hlitem];
			if(it && it[0]!='sep') {
				var hl=this.props.highlight;
				if(it[2].hl!=undefined) hl=it[2].hl;
				if(hl) {
					this.design._onitemhl.apply(this.parts.elems[this.hlitem],[null,0]);
				}
			}
			this.hlitem=-1;
		}
		$(this.top).show();
		this.state.visible=true;
//		if(this.pos.parent) 
		if(!this.props.statical) {
			this._focus.activate();//this.pos.parent.have_active=this;
		}
		if(typeof inititem!=undefined && Number(inititem)!=NaN) {
			var a=Number(inititem);
			if(a>=0 && a<this.elems.length) {
				var	it=this.elems[a];
				if(it && it[0]!='sep') {
					var hl=this.props.highlight;
					if(it[2].hl!=undefined) hl=it[2].hl;
					if(hl) {
						this.design._onitemhl.apply(this.parts.elems[a],[null,1]);
						this.hlitem=a;
					}
				}
			}
		}
		if(this.props.hidetimer>0) this.hidetimer=setTimeout("var m=_uMENU.all["+this.idx+"];if(m)m.hide();",this.props.hidetimer);
	},
	hidechildren: function(except) {
		if(this.state.destroyed) return;
		var e=this.elems;
		for(var i=0;i<e.length;i++)
			if(e[i] && e[i].constructor==Array && e[i][1] && e[i][1].constructor==_uMENU) if(e[i][1]!=except) e[i][1].hide();
	},
	hide: function(withpar) {
		if(this.state.destroyed) return;
		if(!this.state.visible) return;
		$(this.top).hide();
		this.state.visible=false;
		if(this.hidetimer) clearTimeout(this.hidetimer); this.hidetimer=null;

		this.pend_show=null;
		this.hidechildren();
//		if(this.pos.parent && this.pos.parent.have_active==this) this.pos.parent.have_active=null;
    	if(this.props.onhide) this.props.onhide.apply(this.props.thispar,[this,this.idx]);
		this._focus.deactivate();
		
		if(withpar) { //hide all non-statical parents
			var p=this.pos.parent;
			while(p && !p.props.statical && p!=this) {p.hide(false);p=p.pos.parent;}
			if(p && p!=this && p.props.statical) p._focus.deactivate();
		} 
	},
	childopen: function(i,inititem) {
		if(this.state.destroyed) return;
		if(this.childtimer) clearTimeout(this.childtimer);
		this.childtimer=null;
		var h=this.parts.elems[i];
		var c=this.elems[i];
		if(!c) return;
		c=c[1];
		if(!c || c.constructor!=_uMENU) {
//			if(this.props.horiz || 1) {this.hidechildren(c);this.have_active=this;}
			this.hidechildren(c);
			return;
		}
		this.hidechildren(c);
		c.show({dx:(this.props.horiz ? 0 : -3 * (this.props.rtl || window._rtl ? -1 : 1)),alignObj:h,align:(this.props.horiz ? 'D' : (this.props.rtl || window._rtl ? 'L' : 'R')),parent:this},inititem);
	},
	schedule_childopen: function(i) {
		if(this.state.destroyed) return;
		if(this.childtimer) clearTimeout(this.childtimer);
		this.childtimer=setTimeout("var m=_uMENU.all["+this.idx+"];if(m)m.childopen("+i+");",100);
	},
	reset_childopen: function() {
		if(this.childtimer) clearTimeout(this.childtimer);
	},
	_initsubmenus: function() {
	  with(this) {
		for(var i=0;i<toinit.length;i++) {toinit[i].init1(true);tocalcsize[tocalcsize.length]=toinit[i];}
		toinit.length=0;
	  }
	},
	_calcsizesubmenus: function() {
	  with(this) {
		for(var i=0;i<tocalcsize.length;i++) tocalcsize[i]._setsize();
		tocalcsize.length=0;
	  }
	},
	createsubmenus: function() {
		var i,was=false;
		for(i=0;i<this.add_elems.length;i++) {
			var el=this.add_elems[i];
			var n=el.length;
			for(var j=0;j<n;j++) {
				if(el[j] && el[j].constructor==Array && el[j][1] && el[j][1].constructor==Array) { //create submenu
					var o={},pos,opts,s;
					if(el[j][2] && (typeof el[j][2])=='object') o=el[j][2];
						else if((typeof el[j][2])=='number') o={hl:el[j][2]};
						else if((typeof el[j][2])=='string') o={id:el[j][2]};
					el[j][2]=o;
					pos=$.extend({
						parent:this,
						dx:this.props.horiz ? this.pos.childdx : 0,
						dy:this.props.horiz ? this.pos.childdy : 0
						},o.pos || {});
					opts=$.extend({
						shadow:this.props.shadow,
						rtl:this.props.rtl ? 1 : 0,
						parentnode:this.props.wnd ? this.props.wnd.top : this.props.parentnode,
						wnd:this.props.wnd,
						onitem: this.props.onitem,
						thispar: this.props.thispar
						},o.opts || {});
					s=new _uMENU('',pos,opts,el[j][1],true);
					el[j][1]=s;
					this.toinit[this.toinit.length]=s;
					was=true;
				}
			}
		}
		return was;
	},
	indexById: function(id) { //find index by string id
		id=String(id);
		for(var i=0;i<this.elems.length;i++)
			if(this.elems[i][2].id==id) return i;
		return -1;
	},
	removeItems: function(idx,nodestroy,norecalc) {
		var i,p,e;
		if(idx==undefined || idx==null) { //remove all
			idx=[];
			for(i=0;i<this.elems.length;i++)idx[i]=this.elems.length-1-i;
		} else if(idx.constructor!=Array) idx=[idx];
		for(i=0;i<idx.length;i++)
			if(idx[i]==undefined || idx[i]==null || idx[i].constructor!=Number) idx[i]=this.indexById(idx[i]);
		idx.sort(function(a,b){return b-a;});
		p=-1;
		for(i=0;i<idx.length;i++) {
			if(idx[i]==p || idx[i]<0 || idx[i]>=this.elems.length) continue;
			e=this.elems[idx[i]];
			if(!nodestroy && e && e.constructor==Array && e[1] && e[1].constructor==_uMENU) e[1].destroy();
			this.elems.splice(idx[i],1);
			this.parts.elems[idx[i]].parentNode.removeChild(this.parts.elems[idx[i]]);
			this.parts.elems.splice(idx[i],1);
			p=idx[i];
		}
		if(!norecalc) this.appendItems(null,0);
	},	
	appendItems: function(el,idx,nocalcsize) {
		if(this.state.destroyed) return;
		if(el && el.constructor==Array && el.length>0)this.add_elems[this.add_elems.length]=el;
		if(!this.state.init)return;
//alert('in appendItems of '+this.idx);
		if(this.createsubmenus()) { //
			setTimeout("var m=_uMENU.all["+this.idx+"];if(m){m._initsubmenus();m.appendItems(null,0,"+nocalcsize+");}",10);
			return;
		}

		if(this.appendtimer)clearTimeout(this.appendtimer);
		this.appendtimer=null;
   		$(this.top).css("visibility",'hidden').css("display",'block');
		if(this.props.horiz) {
			if(!this.props.noabs) $(this.menu).css("width","2100px").css("height","auto");
				else $(this.menu).css("width",this.props.width==0 ? "auto" : this.props.width=='auto' ? 'auto' : this.props.width+"px");
   			$(this.parts.content).css("width","2000px").css("height","auto");
   		} else {
	    	if($.browser.opera) $(this.top).css('width','2000px');
	   		$(this.menu).css("width","auto").css("height","auto");
   			$(this.parts.content).css("width",$.browser.msie ? "50px" : "auto").css("height","auto");
   		}
		var i;
		for(i=0;i<this.add_elems.length;i++) {
			el=this.add_elems[i];
			var n=el.length;
			for(var j=0;j<n;j++) {
				if(!el[j] || el[j].constructor!=Array) el[j]=[''+el[j]];
				var o={};
				if(el[j][2] && (typeof el[j][2])=='object') o=el[j][2];
					else if((typeof el[j][2])=='number') o={hl:el[j][2]};
					else if((typeof el[j][2])=='string') o={id:el[j][2]};
				el[j][2]=o;
				this.design.append_item(this,el[j],this.props.highlight);
			}
		}
		this.add_elems.splice(0,i);
//		if(onfinish && this.props.wnd)this.onsetsize=onfinish;
		if(!nocalcsize)this.appendtimer=setTimeout("var m=_uMENU.all["+this.idx+"];if(m){m.appendtimer=null;m._setsize();}",10);
	},
	_setsize: function() {
		var d=this.design.calc_size(this);
		this.resizeTo(d.w+this.decor.w,d.h+this.decor.h);

//alert('in setsize of '+this.idx);
		this._calcsizesubmenus();

   		$(this.top).css("display",'none').css("visibility",'visible');
		if(this.pend_show || this.state.visible)this.show(this.pend_show);
//	alert('setsize');
		if(this.props.onreadycreate) {this.props.onreadycreate.call(this.props.thispar,this);this.props.onreadycreate=null;}
		if(this.onsetsize) {
			var a=this.onsetsize;
			this.onsetsize=null;
			if(this.props.wnd)a.apply(this.props.wnd);
		}
	},
	destroy: function() {
		if(this.state.destroyed) return;
		this.removeItems();
	    this.top.parentNode.removeChild(this.top);
	    _uMENU.all[this.idx]=null;
	    this._focus.destroy();
	    this.state.destroyed=true;
    	if(this.props.ondestroy) this.props.ondestroy.apply(this.props.thispar,[this,this.idx]);
	}
};
//inputId - input ID or object
//vals - [[val1,icon1,issel1,text11,text12,...],[val2,icon2,issel2,text21,text22,...]] 
//cols - number of text columns (0 if valX is used as displayed text), place for icons is reserved always
function _uComboBox(name,inputId,opts,cols,vals) {
	this.constructor=_uComboBox;
	this.name=name;
	this.obj=inputId && inputId.tagName ? inputId : document.getElementById(inputId);
	if(!this.obj) return null;
	this.props=$.extend({
//		parentnode: null, //parent node for drop-down list
		design: 'std',
		readonly: false,
		noicons: -1,
		deficon: null,
		listwidth: 'auto',
//		height: 'auto',
		maxlistheight: 'auto',
		colwidth: null,
//		hidden: 0,
//		onshow: null,
//		onhide: null,
//		ondestroy: null,
		onchange: null,
		wnd:null, //parent window determines parentnode for list and this (as wnd.app) for handlers
		rtl:0
	},opts || {});
	this.app=this.props.wnd && this.props.wnd.app ? this.props.wnd.app : null;
	this.textvals=cols > 0 ? cols : 0;
	this.tablecols=cols<=0 ? 1 : cols;
	this.colwidth=this.props.colwidth || [];
	this.destroyed=false;
    this.design=this.props.design && _uComboBox.designs[this.props.design] ? _uComboBox.designs[this.props.design] : _uComboBox.designs['std'];
    this.idx=_uComboBox.nextidx++;
    _uComboBox.all[this.idx]=this;
//    if(this.props.width=='auto') {
//    	this.width=this.obj.offsetWidth || parseInt(this.obj.style.width);
//    	if(!this.width>0) this.width=100;
//    } else this.width=this.props.width;
//    if(this.props.height=='auto') {
//    	this.height=this.obj.offsetHeight || parseInt(this.obj.style.height);
//    	if(!this.height>0) this.height=100;
//    } else this.height=this.props.height;
//	this.zpos=this.props.wnd ? 5 : _uComboBox.defz;
	this.data=[];
	if(!vals) vals=[];
	var defIdx=-1;
	for(var i=0;i<vals.length;i++) {
		if(defIdx<0 && vals[i][2]) defIdx=i;
	}
	this.userInput=this.prevInput=this.obj.value; 
	if(this.props.readonly) {
		this.obj.readOnly=true;
		this.valobj=$('<input type="hidden" name="'+this.obj.name+'" value="">')[0];
		this.obj.removeAttribute('name');
		if(this.obj.form) this.obj.form.appendChild(this.valobj);
		if(defIdx<0 || defIdx>=vals.length) defIdx=0;
	} else {
		this.obj.readOnly=false;
		this.valobj=this.obj; //object which holds form value
		if(defIdx<0 || defIdx>=vals.length) defIdx=-1;
	}
	this.selected=this.userIdx=defIdx;
	this.changetimer=null;


	this.haveicons=this.props.noicons>0;
	if(this.props.noicons<0) 
		for(var i=0;i<vals.length;i++) 
			if(vals[i][1]) {this.haveicons=true;break;}


	this.frame=null;
	this.opened=false;
	this.updated=true;
	this.showtimer=null;
	this.blurtimer=null;
	this.cancelblur=false;
//	var c=document.createElement("div");
//	c.id="_ucombo"+this.idx;
//	this.obj.parentNode.insertBefore(c,this.obj);
	this.combo=null;

	var t=document.createElement("div");
	t.id="_ucombolist"+this.idx;
//	this.combo.appendChild(t);
//	if(!this.props.parentnode) $($("body")[0]).prepend(t);
//		else this.props.parentnode.appendChild(t);
	this.toplist=t;

   	$(t).css({position:'absolute',zIndex:5,display:'none'});//zIndex:this.zpos,
    if($.browser.msie && parseFloat($.browser.version)<8){
		    var html = '<iframe tabindex="-1" '
    		    +'style="display:block; position:absolute; '
			+'filter:Alpha(Opacity=\'0\'); '
			+'width:1px;height:1px;border:0"/>';

	    	this.frame=document.createElement(html);
			t.appendChild(this.frame);
	}

    this.parts=this.design.combo_init(this);
    $(this.obj).attr("autocomplete", "off")
	.bind("focus",this,_uComboBox._onobjfocus)
	.bind("blur",this,_uComboBox._onobjblur)
	.bind("beforedeactivate",this,_uComboBox._onobjdeact)
	.bind("keydown",this,function(e) {return e.data.onkeydown(e);})
	.bind("keyup",this,function(e) {return e.data.onkeyup(e);});

	$(this.combo).bind("mousedown",this,_uComboBox._oncombomousedown);
	$(this.toplist).bind("mousedown",this,_uComboBox._onlistmousedown);
    for(var i=0;i<vals.length;i++) this.appendItem(vals[i]);
	if(!_uComboBox.globalset) {
		_uComboBox.globalset=true;
	    $(document).bind("mousedown",_uComboBox.hideall);
	    $(window).bind("resize",_uComboBox.hideall);
	}
	if(defIdx>=0) this.select(defIdx,false,true);
//	setTimeout("var m=_uComboBox.all["+this.idx+"];if(m)m.showlist();",10);
//	this.showlist();
//	if(!this.props.hidden) this.show();
//	if(!noinit)setTimeout("var m=_uMENU.all["+this.idx+"];if(m)m.init1();",10);
}


_uComboBox.all=[];
_uComboBox.nextidx=0;
_uComboBox.defz=20015;
_uComboBox.globalset=false;
_uComboBox.ignoreclick=null;

_uComboBox.getbyname=function(name) {
    var a=this.all;
    for(var i=0;i<a.length;i++) if(a[i] && a[i].name==name) return a[i];
    return null;
};
_uComboBox.hideall=function() {
    var a=_uComboBox.all;
    for(var i=0;i<a.length;i++) if(a[i] && !a[i].destroyed && _uComboBox.ignoreclick!=a[i]) a[i].hidelist();
	if(_uComboBox.ignoreclick)setTimeout("_uComboBox.ignoreclick=null;",10);
};
_uComboBox.designs={
    std: {
	combo_init: function(o) {
	    var p={};
		o.combo=$('<table id="_ucombo'+o.idx+'" style="position:relative" cellspacing="0" cellpadding="0" border="0" class="x-unselectable u-combo" align="left">'
				+'<tr><td class="u-comboeditcell"></td><td class="u-combobutcell"><div class="u-combobut"></td></tr>'
				+'</table>')[0];
		o.obj.parentNode.insertBefore(o.combo,o.obj);
		if(!o.props.wnd) o.obj.parentNode.insertBefore(o.toplist,o.obj);
			else o.props.wnd.top.appendChild(o.toplist);
//		$(o.combo).attr("class","x-unselectable u-combo").css({position:'relative'}).prepend('<img border="0" class="u-combobut" src="http://src.ucoz.net/img/1px.gif">');
		p.editcell=$(o.combo).find(".u-comboeditcell")[0];
		p.button=$(o.combo).find(".u-combobut")[0];
		p.butcell=$(o.combo).find(".u-combobutcell")[0];
		p.editcell.appendChild(o.obj);
		$(o.obj).attr("class","x-selectable u-comboedit"+(o.haveicons ? " u-comboeditimg" : "")+" "+$(o.obj).attr("class"));
//		if($.browser.msie) $(o.obj).css({marginTop:'-1px',marginBottom:'-1px'});

	    $(o.toplist).append('<div class="u-combolist"><div style="zoom:1"><table border="0" cellspacing="0" class="x-unselectable u-combocont" width="100%"></table></div></div>');
		p.list=$(o.toplist).find(".u-combolist")[0];
		p.content=$(o.toplist).find(".u-combocont")[0];

		if(!o.props.readonly) $(p.button).bind("mousedown",o,_uComboBox._onbutclick);
			else {
				$(o.obj).bind("mousedown",function(e){e.preventDefault();return 0;});
			}
		$(p.button).bind("mouseover",o.design._onbutmouseover).bind("mouseout",o.design._onbutmouseout);

		p.items=[];
		$(o.toplist).find("div,span,table").andSelf().attr("unselectable","on");
	    return p;
	},
	append_item: function(o,el) {
		var row,cell,t=o.parts.content,i=t.rows.length,txt;
		row=o.parts.items[i]=t.insertRow(i);
		$(row).attr("class","u-comborow").bind("mouseover",o,_uComboBox._onitemmouseover).bind("mouseout",o,_uComboBox._onitemmouseout)
			.bind("click",o,_uComboBox._onitemclick);
		for(var j=0;j<o.tablecols;j++) {
			cell=row.insertCell(j);
			txt= j+3<el.length ? el[j+3] : (j==0 ? el[0] : '&nbsp;');
			if(j==0 && el[1]) txt='<img class="u-comborowicon" border="0" src="'+el[1]+'">'+txt;
			$(cell).attr("class","u-combocell"+j).html(txt);
			if(o.colwidth[j]) $(cell).attr("width",o.colwidth[j]);
		}
		$(row).find("*").andSelf().attr("unselectable","on");
	},
	remove_item: function(o,i) {
		var t=o.parts.content;
		if(i<0 || i>=t.rows.length) return;
		$(t.rows[i]).unbind();
		o.parts.items.splice(i,1);
		t.deleteRow(i);
	},
	calc_size: function(o) {
		var w=0,h=0;
		if(!o.props.horiz) {
			for(var i=0;i<o.parts.elems.length;i++) {
				w=Math.max(w,Math.max(o.parts.elems[i].offsetWidth,o.parts.elems[i].scrollWidth));
				h+=o.parts.elems[i].offsetHeight;
			}
		} else {  //horiz
			for(var i=0;i<o.parts.elems.length;i++) {
				w+=Math.max(o.parts.elems[i].offsetWidth,o.parts.elems[i].scrollWidth);
				h=Math.max(h,o.parts.elems[i].offsetHeight);
			}
		}
		return {w:w,h:h};
	},
	_onitemmouseover: function(e) {
		$(this).addClass("u-comborowhl");
	},
	_onitemmouseout: function(e) {
		$(this).removeClass("u-comborowhl");
	},
	_onbutmouseover: function() {
		$(this).addClass("u-combobuthl");
	},
	_onbutmouseout: function() {
		$(this).removeClass("u-combobuthl");
	},
	_onlistopen: function(o) {
		$(o.combo).addClass("u-comboopen");
	},
	_onlisthide: function(o) {
		$(o.combo).removeClass("u-comboopen");
	},
	_onfocus: function(o,e) {
		$(o.combo).addClass("u-combofocus");
	},
	_onblur: function(o,e) {
		$(o.combo).removeClass("u-combofocus");
	},
	_select: function(o,i) {
		$(o.parts.items[i]).addClass("u-comborowsel");
	},
	_deselect: function(o,i) {
		$(o.parts.items[i]).removeClass("u-comborowsel");
	},
	seticon: function(o,icon) {
		if(icon) $(o.obj).css("background-image","url("+icon+")");
			else $(o.obj).css("background-image",o.props.deficon ? "url("+o.props.deficon+")" : "none")
	}
    }	
};

_uComboBox._onitemmouseover=function(e) {
		e.data.design._onitemmouseover.apply(this,[e]);
};
_uComboBox._onitemmouseout=function(e) {
		e.data.design._onitemmouseout.apply(this,[e]);
};
_uComboBox._onitemclick=function(e) {
		var o=e.data;
		for(var i=0;i<o.parts.items.length;i++)
			if(o.parts.items[i]==this) {
				o.select(i);
				o.hidelist();
				o.obj.focus();
			}
//		e.stopPropagation();
		e.preventDefault();
};
_uComboBox._onbutclick=function(e) {
		var o=e.data;
		_uComboBox.ignoreclick=e.data;
		_uWnd.globalmousedown();
		if(o.opened) o.hidelist(); else {o.showlist();_uComboBox.ignoreclick=e.data;}
		o.obj.focus();
		if($.browser.msie && !e.data.cancelblur) {
			e.data.cancelblur=true;
			setTimeout("var c=_uComboBox.all["+e.data.idx+"];if(c)c.cancelblur=false;",10);
		}
//		e.stopPropagation();
		e.preventDefault();
};
_uComboBox._onlistmousedown=function(e) {
	_uComboBox.ignoreclick=e.data;
//	_uWnd.globalmousedown();
	e.data.obj.focus();
	if($.browser.msie && !e.data.cancelblur) {
		e.data.cancelblur=true;
		setTimeout("var c=_uComboBox.all["+e.data.idx+"];if(c)c.cancelblur=false;",10);
	}
//	e.stopPropagation();
	e.preventDefault();
};
_uComboBox._oncombomousedown=function(e) {
	_uComboBox.ignoreclick=e.data;
	_uWnd.globalmousedown();
	if(e.which!=1) return;
	var o=e.data;
	if(o.props.readonly) if(o.opened) o.hidelist(); else {o.showlist();_uComboBox.ignoreclick=e.data;}
	o.obj.focus();
	if($.browser.msie && !o.cancelblur) {
		o.cancelblur=true;
		setTimeout("var c=_uComboBox.all["+o.idx+"];if(c)c.cancelblur=false;",10);
	}
//	e.stopPropagation();
	if(e.target!=o.obj) e.preventDefault();
};
_uComboBox._onobjfocus=function(e) {
	var o=e.data;
	if(o.blurtimer) clearTimeout(o.blurtimer);
	o.blurtimer=null;
	o.design._onfocus(o,e);
};
_uComboBox._onobjblur=function(e) {
	e.data.onblur();
};
_uComboBox._onobjdeact=function(e) {
	var o=e.data;
	if(o.cancelblur) e.preventDefault();
};

_uComboBox.isUpKey=function (code) {
    return code==38 || code == 63232;
};
_uComboBox.isDownKey=function (code) {
    return code==40 || code == 63233;
};

_uComboBox.prototype={
	_setvalue: function(i) {
	  with(this) {
		if(i>=0 && i<data.length) {
			valobj.value=prevInput=data[i][0];
			if(props.readonly) obj.value=data[i].length>2 ? data[i][2] : data[i][0];
			if(haveicons) design.seticon(this,data[i][1]);
		} else {
			if(props.readonly) {valobj.value='';obj.value=userInput;}
				else {valobj.value=prevInput=userInput;}
			if(haveicons) this.design.seticon(this,null);
		}
	  }
	},
	_selectitem: function(i) {
	  with(this) {
		if(selected>=0 && selected<data.length) {
			design._deselect(this,selected);
			selected=-1;
		}
		if(i>=0 && i<data.length) {
			design._select(this,i);
			selected=i;
		}
	  }
	},
	setvalue: function (v) {
	  with(this) {
	  	var ch=false;
		if(props.readonly) return;
		if(changetimer) clearTimeout(changetimer);
		if(valobj.value!=v) ch=true;
		valobj.value=prevInput=userInput=v;
		if(selected!=-1) ch=true;
		_selectitem(-1);
		userIdx=-1;
		if(haveicons) this.design.seticon(this,null);
		if(props.onchange && ch) props.onchange.apply(this.app || this,[selected,v]);
	  }
	},
	select: function (i,soft) { //
	  with(this) {
		var ch=false;
		if(changetimer) clearTimeout(changetimer);
		changetimer=null;
	  	_selectitem(i);
		_setvalue(selected);
		if(!soft) {
			if(selected!=userIdx) ch=true;
			userIdx=selected;
			if(props.onchange && ch) props.onchange.apply(this.app || this,[selected,valobj.value]);
		}
	  }
	},
	onblur: function (e) {
		if(this.blurtimer) clearTimeout(this.blurtimer);
		this.blurtimer=setTimeout("var c=_uComboBox.all["+this.idx+"];if(c)c._onblur2();",10);
	}, 
	_onblur2: function (e) {
		this.blurtimer=null;
		this.design._onblur(this,e);
	}, 
	onkeydown: function (e) {
	  var i;
	  with(this) {
    	var c=e.keyCode;
    	if(c==27 && opened) {
			select(userIdx,true);
			hidelist();
			return false;
    	}
    	if(data.length==0) return;
	    if(c==13) {
	    	select(selected);
			hidelist();
			obj.focus();
			e.preventDefault();
			e.stopPropagation();
			return false;
	    }
		if(c==9) {
			if(changetimer) select(selected);
			return;
		}
	    if(_uComboBox.isDownKey(c) || _uComboBox.isUpKey(c)) {
			i=selected+(_uComboBox.isDownKey(c) ? 1 : -1);
			if(props.readonly) {
	    		if(i>=data.length) i=0;
					else if(i<0) i=data.length-1;
			} else {
    			if(i>=data.length) i=-1;
					else if(i<-1) i=data.length-1;
			}
			select(i,true); //select clears changetimer
			if(!opened) changetimer=setTimeout("var c=_uComboBox.all["+this.idx+"];if(c)c.select("+i+");",500);
			return false;
    	}
  	  }
	},
	onkeyup: function (e) {
  	  with(this) {
    	if(props.readonly || obj.value==prevInput) return;
		if(changetimer) clearTimeout(changetimer);
    	prevInput=userInput=obj.value;
		_selectitem(-1);
		userIdx=-1;
		if(haveicons) this.design.seticon(this,null);
		if(props.onchange) props.onchange.apply(this.app || this,[-1,obj.value]);
  	  }
	},
	appendItem: function(elem) { //0 - id, 1 - optional icon, 2... - text labels
		this.data[this.data.length]=[elem[0],elem[1],elem[3]];
		this.design.append_item(this,elem);
		this.updated=true;
	},
	removeItem: function(idx) {
		if(idx<0 || idx>=this.data.length) return;
		this.design.remove_item(this,idx);
		this.data.splice(idx,1);
		this.updated=true;
	},
	removeAll: function() {
		for(var i=0;i<this.data.length;i++) this.design.remove_item(this,0);
		this.data.splice(0,this.data.length);
		this.updated=true;
	},
	hidelist: function() {
	    this.toplist.style.display='none';
	    this.opened=false;
		this.design._onlisthide(this);
	},
	showlist: function () {
    	var w,x,y;
		if(!this.props.wnd) {
			x=this.combo.offsetLeft;
			y=this.combo.offsetTop;
		} else {
			var pos=$(this.combo).offset(),ppos=$(this.props.wnd.top).offset();
			x=pos.left-ppos.left;
			y=pos.top-ppos.top;
		}
    	if(this.props.listwidth=='auto') w=this.combo.offsetWidth+'px';
    		else w=this.props.listwidth;
		$(this.toplist).css({left:x+'px',top:(y+this.combo.offsetHeight-1)+'px',width:w,minWidth:this.combo.offsetWidth+'px'});
	    if(this.frame) $(this.frame).css({width:w});
		if(this.updated) {
			$(this.parts.list).css({height:'auto',overflow:'hidden'});
			$(this.toplist).css({visibility:'hidden'}).css({display:'block'});
			if(this.showtimer) clearTimeout(this.showtimer);
			this.showtimer=setTimeout("var c=_uComboBox.all["+this.idx+"];if(c)c._showlist();",10);
		} else {
		    this.toplist.style.display='block';
		}
		this.design._onlistopen(this);
		this.opened=true;
	    this.updated=false;
	},
	_showlist:function(){
		this.showtimer=null;
		var o=this.parts.list,h,maxh,pos,d=_uWnd.getdims();
		h=Math.max(o.scrollHeight,o.offsetHeight);
		pos=$(this.toplist).offset();
		if(this.props.maxlistheight>0) maxh=Math.max(50,Math.min(this.props.maxlistheight,d.clientH-pos.top));
			else maxh=Math.max(50,d.clientH-pos.top);
		if(h>maxh) {
			$(this.parts.list).css({height:maxh+'px',overflow:'auto'});
			h=maxh;
		}
	    if(this.frame) $(this.frame).css({height:h+'px'});

		$(this.toplist).css({visibility:'visible'});
	}
};

//vals in form:
//{'word1':[['word11',col2],['word12',col2]],'word2':[['word21',col2],['word22',col2]]}

//function _uSuggestList(editId,cachegroup,tblClass,normalclass,highclass,minlength,url,vals) {
function _uSuggestList(name,inputId,opts,vals) { //inputId can be ID or object
	this.constructor=_uSuggestList;
	this.name=name;
	this.obj=typeof inputId=='string' ? document.getElementById(inputId) : inputId;
	if(!this.obj) return null;
	this.props=$.extend({
		design: 'std',
		maxlistheight: 'auto',
		colwidth: null,
		cachegroup: 'def',
		minlen: 2,
		url: null,
		separator: null
//		hidden: 0,
//		onshow: null,
//		onhide: null,
//		ondestroy: null,
//		onchange: null,
//		wnd:null,
//		rtl:0
	},opts || {});
	this.colwidth=this.props.colwidth || [];
//	this.destroyed=false;
    this.design=this.props.design && _uSuggestList.designs[this.props.design] ? _uSuggestList.designs[this.props.design] : _uSuggestList.designs['std'];
    this.idx=_uSuggestList.nextidx++;
    _uSuggestList.all[this.idx]=this;
    this.cacheGroup=this.props.cachegroup;
    if(!this.queryCache[this.cacheGroup]) this.queryCache[this.cacheGroup]=[];
    if(vals) this.queryCache[this.cacheGroup]=vals;

    this.visible=true;
    this.hlIndex=-1; //highlighted item
    this.hlRow=null; //highlighted row
    this.blockMouseOver=false;

    this.userInput=this.obj.value; //saved value
    this.previousInput=this.obj.value; //to track changes
    this.resultInput=""; //value for which we have result if result is not empty
    this.requestedInput=""; //to track value which will be requested remotely
    this.ignoreInput=""; //value which must be ignored
	this.sep_pos=-1;

    this.remoteReqTimer=null;
    this.hideTimer=null;
    this.AJAXretries=0;
    this.AJAXTimer=null;


	this.frame=null;


	var t=document.createElement("div");
	t.id="_usuggest"+this.idx;
	this.top=t;
	
	var wnd;
	if(wnd=_uWnd.findparent(this.obj)) {
		this.parent=wnd.top;
		this.parent.appendChild(t);
	} else {
		this.parent=this.obj.parentNode;
		this.parent.insertBefore(t,this.obj);

	}

   	$(t).css({position:'absolute',zIndex:5,display:'none',zoom:1});//zIndex:this.zpos,
    if(0 && $.browser.msie && parseFloat($.browser.version)<7){
		    var html = '<iframe tabindex="-1" '
    		    +'style="display:block; position:absolute;'
			+'filter:Alpha(Opacity=\'100\'); '
			+'width:1px;height:20px;border:0"/>';

	    	this.frame=document.createElement(html);
			t.appendChild(this.frame);
	}

    this.parts=this.design.suggest_init(this);

    $(this.obj).attr("autocomplete", "off").css("position","relative")
//	.bind("focus",this,_uComboBox._onobjfocus)
	.bind("blur",this,function(e) {return e.data.onblur(e);})
//	.bind("beforedeactivate",this,_uComboBox._onobjdeact)
	.bind("keydown",this,function(e) {return e.data.onkeydown(e);})
	.bind("keyup",this,function(e) {return e.data.onkeyup(e);});

//	$(this.combo).bind("mousedown",this,_uComboBox._oncombomousedown);
//	$(this.toplist).bind("mousedown",this,_uComboBox._onlistmousedown);
	if(!_uSuggestList.globalset) {
		_uSuggestList.globalset=true;
	    $(document).bind("mousedown",_uSuggestList.hideall);
	    $(window).bind("resize",_uSuggestList.hideall);
	}


    this.hide();
//    $(window).bind("resize",this,function(e) {return e.data.positionResult();});

    //attach event to parent form
    if(this.obj.form) {
	$(this.obj.form).bind("submit."+this.idx,this,function(e) {return e.data.onsubmitform(e);});
    }
}

_uSuggestList.all=[];
_uSuggestList.nextidx=0;
_uSuggestList.defz=20015;
_uSuggestList.globalset=false;
_uSuggestList.ignoreclick=null;

_uSuggestList.getbyname=function(name) {
    var a=this.all;
    for(var i=0;i<a.length;i++) if(a[i] && a[i].name==name) return a[i];
    return null;
};
_uSuggestList.hideall=function() {
    var a=_uSuggestList.all;
    for(var i=0;i<a.length;i++) if(a[i] && !a[i].destroyed && _uSuggestList.ignoreclick!=a[i]) a[i].hide();
	if(_uSuggestList.ignoreclick)setTimeout("_uSuggestList.ignoreclick=null;",10);
};

_uSuggestList.designs={
	std: {
	suggest_init: function(o) {
	    var p={};
		$(o.obj).attr("class","x-selectable u-suggedit "+$(o.obj).attr("class"));
//		if($.browser.msie) $(o.obj).css({marginTop:'-1px',marginBottom:'-1px'});

	    $(o.top).append('<div class="u-sugglist" style="zoom:1"><div style="zoom:1"><table border="0" cellspacing="0" class="x-unselectable u-suggcont" width="100%"></table></div></div>');
		p.list=$(o.top).find(".u-sugglist")[0];
		p.content=$(o.top).find(".u-suggcont")[0];
//		p.items=[];
		$(o.top).find("div,span,table").andSelf().attr("unselectable","on");
	    return p;

		},
	append_row: function(o,item,cols,key) {
		var row=o.parts.content.insertRow(-1);
		$(row).bind("mousedown",o,o._onrowmousedown)
	      .bind("mousemove",o,o._onrowmousemove)
	      .bind("mouseover",o,o._onrowmouseover).addClass('u-suggrow').attr("usuggeststr",item[0]);
		var v=String(item[0]);
	    if(v.toLowerCase().substr(0,key.length)==key.toLowerCase()) v='<span class="u-suggmark">'+v.substr(0,key.length)+'</span>'+v.substr(key.length);
		for(var j=0;j<cols;j++) {
		    $(row).append("<td unselectable='on' class='u-suggcell"+j+"'>"+(j==0?v:item[j])+"</td>");
		}
	},
//	_onlistopen: function(o) {
//		$(o.combo).addClass("u-comboopen");
//	},
//	_onlisthide: function(o) {
//		$(o.combo).removeClass("u-comboopen");
//	}
	_select: function(o,row) {
		$(row).addClass("u-suggrowhl");
	},
	_deselect: function(o,row) {
		$(row).removeClass("u-suggrowhl");
	}

	}

};

_uSuggestList.prototype = {
queryCache: [],
onsubmitform: function (e) {
    if(this.visible) {
	if(this.resultInput!="") this.obj.value=this.userInput;
	this.hide();
    }
},
hide: function () {
  with(this) {
    top.style.display='none';
	visible=false;
	if(hlRow) design._deselect(this,hlRow);
	hlRow=null;
	hlIndex=-1;
  }
},
show: function () {
  with(this) {
    if(!visible && numItems()>0) {
	   	var w=obj.offsetWidth,x,y,off,offp;
	   	off=$(obj).offset();
	   	offp=$(parent).offset();
		$(top).css({left:off.left-offp.left+'px',top:off.top-offp.top+obj.offsetHeight+'px',width:w+'px'});
	    if(frame) $(frame).css({width:w+'px'});
	    top.style.display='block';
		visible=true;
		blockMouseOver=true;
    }
  }
},
numItems: function () {
    return this.parts.content ? this.parts.content.rows.length : 0;
},
onblur: function (e) {
  with(this) {
    if(visible) {
	if(hlIndex>=0) obj.value=userInput;
	hide();
    }
  }
}, 
onkeydown: function (e) {
  with(this) {
    var c=e.keyCode;
    if(c==27 && visible) {
	if(resultInput!="") _setvalue_sep(userInput);
	hide();
	return false;
    }
    if(resultInput=="") return;
    if(c==13 && hlIndex>=0 && visible) {
	previousInput=obj.value;
	userInput=_getvalue_sep();
	resetRequest(userInput);
	hide();
	if(userInput != resultInput) clearResult();
	obj.focus();
	e.preventDefault();
	e.stopPropagation();
	return false;
    }
    if(isDownKey(c)) {
	moveSelection(hlIndex+1);
	return false;
    }
    if(isUpKey(c)) {
	moveSelection(hlIndex-1);
	return false;
    }
  }
},
onkeyup: function (e) {
  with(this) {
    if(ignoreInput!="" && _getvalue_sep()==ignoreInput) return;
    if(obj.value==previousInput) return;
    ignoreInput=resultInput="";
    previousInput=obj.value;
    userInput=_getvalue_sep();
    if(hideTimer) clearTimeout(hideTimer);
    hideTimer=setTimeout("var c=_uSuggestList.all["+idx+"];if(c)c.clearResult(true);",2000);
	
    procRequest(userInput);
  }
},
_setvalue_sep: function(v) {
	with(this){
		if(sep_pos>=0) obj.value=obj.value.substr(0,sep_pos)+props.separator+' '+v;
			else obj.value=v;
	}
},
_getvalue_sep: function() {
  with(this){
  	if(props.separator) sep_pos=obj.value.lastIndexOf(props.separator);
	if(sep_pos>=0) {
		var t=obj.value.substr(sep_pos+props.separator.length);
	    t=t.replace(/^\s+/,"");
	    return t;
	} else return obj.value;
  }
},
moveSelection: function (newi) {
  with(this) {
    if(resultInput=="" && ignoreInput!="" && _getvalue_sep()==ignoreInput) {
	procRequest(_getvalue_sep(),true);
	return;
    }
    if(!visible && resultInput.length>0 && resultInput==_getvalue_sep()) {
	show();
	return;
    }
    if(!visible) return;
    if(hlRow) design._deselect(this,hlRow);
    hlRow=null;
    var cnt=numItems();
    if(newi>=cnt) newi=-1;
	else if(newi<-1) newi=cnt-1;
    if(newi==-1) {
	hlIndex=-1;
	_setvalue_sep(userInput);
	obj.focus();
	return;
    }
    hlIndex=newi;
    hlRow=parts.content.rows[newi];
    design._select(this,hlRow);
    ignoreInput=$(hlRow).attr("usuggeststr");
    _setvalue_sep(ignoreInput);
  }
},	
isUpKey: function (code) {
    return code==38 || code == 63232;
},
isDownKey: function (code) {
    return code==40 || code == 63233;
},
resetRequest: function(txt) {
  with(this) {
    if(remoteReqTimer && requestedInput==txt) return;
    clearTimeout(remoteReqTimer); 	remoteReqTimer=null;
    requestedInput=txt;
    clearTimeout(AJAXTimer); AJAXTimer=null;
    try{if(AJAXObj) AJAXObj.abort(); AJAXObj=null;}catch(e){};
  }
},
procRequest: function (txt,nopause) {
  with(this) {
    resetRequest(txt);

    if(txt.length<props.minlen) {
	clearResult(true);
	return;
    }
    if(queryCache[cacheGroup][txt]) {
	setResult(txt,queryCache[cacheGroup][txt]);
	return;
    }
    AJAXretries=0;
    if(!props.url) return;
    if(nopause) remoteRequest();
	else remoteReqTimer=setTimeout("var c=_uSuggestList.all["+this.idx+"];if(c)c.remoteRequest();",350);
  }
},
remoteRequest: function () {
  with(this) {
    clearTimeout(remoteReqTimer);
    remoteReqTimer=null;
    try{if(AJAXObj) AJAXObj.abort(); AJAXObj=null;}catch(e){};

    if(AJAXretries>1) return;
    clearTimeout(AJAXTimer);
    AJAXTimer=setTimeout("var c=_uSuggestList.all["+this.idx+"];if(c){c.AJAXretries++;c.remoteRequest();}",12000);

    AJAXObj=$.ajax({
	type: "GET",
	dataType: "text",
	cache: false,
	url: props.url,
	data: {tag:requestedInput},
	success: new Function("resp","status","var c=_uSuggestList.all["+this.idx+"];if(c)c.parseRequest(resp,status);"),
	timeout: 10000
    });
  }
},
parseRequest: function (resp,status) {
    clearTimeout(this.AJAXTimer);
    this.AJAXTimer=null;
    this.AJAXretries=0;
    var res=[];
    try {
	res=eval("res="+resp);
    } catch(e) {}
    this.AJAXObj=req=null;
    if(!res || res.length<2 || res[1]<1 || res[1]>10) {
	this.clearResult();
	return;
    }
    var n=res[1],idx=0;
    var data=[];
    for(var i=2;i<res.length;i+=n,idx++) {
	data[idx]=[];
	for(var j=0;j<n;j++) {
	    data[idx][j]=res[i+j];
	}
    }
    this.queryCache[this.cacheGroup][res[0]]=data;
    if(res[0]==this.requestedInput) this.setResult(res[0],this.queryCache[this.cacheGroup][res[0]]);
},
_onrowmousemove: function(e) {
    return e.data.onrowmousemove(e);
},
_onrowmouseover: function(e) {
    return e.data.onrowmouseover(e);
},
_onrowmousedown: function(e) {
    return e.data.onrowmousedown(e);
},
onrowmousemove: function(e) {
    if(this.blockMouseOver) { //mouseOver is disable right after showing results
	this.blockMouseOver=false;
	this.onrowmouseover(e);
    }
},
onrowmouseover: function(e) {
  with(this) {
    if(blockMouseOver) return;
    if(hlRow) design._deselect(this,hlRow);
    hlRow=null;
    hlIndex=-1;
    for(var i=0;i<parts.content.rows.length;i++) {
	if(parts.content.rows[i]==e.target || jQuery.inArray(e.target,$(parts.content.rows[i]).contents())>=0) {
	    hlIndex=i;
	    hlRow=parts.content.rows[i];
	    design._select(this,hlRow);
	    break;
	}
    }
  }
},
onrowmousedown: function(e) {
  with(this) {
    if(numItems()<=0 || !hlIndex<0 || !hlRow) return;
    ignoreInput=userInput=$(hlRow).attr("usuggeststr");
    _setvalue_sep(userInput);
    previousInput=obj.value;
    resetRequest(userInput);
    hide();
    if(userInput != resultInput) clearResult();
    obj.focus();
  }
},

setResult: function (phrase,table) { //array of arrays
  with(this) {
    if(hideTimer) clearTimeout(hideTimer);
    hideTimer=null;
    clearResult();
    hlIndex=-1;
    hlRow=null;
    resultInput=phrase;
    var cnt=table.length;
    if(cnt<=0) {hide();return;}	
    var cols=table[0].length; //determine num cols by first item
    for(var i=0;i<cnt;i++) {
	    design.append_row(this,table[i],cols,phrase);
    }
    show();
  }
},
clearResult: function (hide) {
  with(this) {
    if(hide) hide();
    resultInput="";
    hlRow=null;
    hlIndex=-1;
    while(parts.content.rows.length > 0)parts.content.deleteRow(-1);
  }
}
};
//obj - this for all handlers
function _uDraggable(obj,onmove,oninitdrag,onstartdrag,onstopdrag) {
	this.par=obj;
	this.x=this.y=this.w=this.h=this.m=0;
	this.moved=false;
	this.active=false;
	this.onmove=onmove || _uDraggable.dummy;
	this.oninitdrag=oninitdrag || _uDraggable.dummy;
	this.onstartdrag=onstartdrag || _uDraggable.dummy;
	this.onstopdrag=onstopdrag || _uDraggable.dummy;
        if(!_uDraggable.globalset) {
		_uDraggable.globalset=true;
		$(document).bind("mouseup",_uDraggable.onmouseup);
		$(document).bind("mousemove",_uDraggable.onmousemove);
//		if($.browser.msie)$(document).bind("mouseout",function(e) {if(!e.relatedTarget && !e.toElement)_uWnd._dragging=null});
	}
}
_uDraggable.dummy=function(){};
_uDraggable.obj=null;
_uDraggable.clkX=0;
_uDraggable.clkY=0;
_uDraggable.scrL=0;
_uDraggable.scrT=0;
_uDraggable.globalset=false;
_uDraggable.onmousemove=function(e) {
  with(_uDraggable) {
    var o=obj;
    if(!o) return;
	o.event=e;
	if(typeof(e.which)!='undefined' && e.which!=1) {o.stop();obj=null;return;}
	e.stopPropagation();
	e.preventDefault();
        var d=_uWnd.getdims();
	if(!o.moved && (e.clientX!=clkX || e.clientY!=clkY)) {o.onstartdrag.apply(o.par,[o.x,o.y,o.w,o.h,o.m]);o.moved=true;}

	o.onmove.apply(o.par,[e.clientX-clkX-(scrL-d.clientLeft),e.clientY-clkY-(scrT-d.clientTop),o.x,o.y,o.w,o.h,o.m]);
	o.event=null;
	return false;
  }
};
_uDraggable.onmouseup=function(e) {
    if(e.which!=1) return;
  with(_uDraggable) {
    var o=obj;
    if(!o) return;
  	if(o.moved)onmousemove(e);
	o.event=e;
  	o.stop();
  	o.event=null;
  	obj=null;
  }
};
_uDraggable.prototype={
	start: function(e,x,y,w,h,m) {
		var r=_uDraggable;
		if(r.obj) {r.obj.event=e;r.obj.onstopdrag.apply(r.obj.par);r.obj.event=null;}
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.m=m;
		this.active=true;
		this.moved=false;
		r.obj=this;
	    var d=_uWnd.getdims();
	    r.clkX=e.clientX;
	    r.clkY=e.clientY;
	    r.scrL=d.clientLeft;
	    r.scrT=d.clientTop;
            this.event=e;
	    this.oninitdrag.apply(this.par,[x,y,w,h,m]);
//window.dump("drag start\n");

	},
	stop: function() {
		var r=_uDraggable;
		if(r.obj==this) r.obj=null;
		if(this.active) {
			this.onstopdrag.apply(this.par,[this.x,this.y,this.w,this.h,this.m]);
			this.active=false;
//window.dump("drag stop \n");
		}
	}

};

//moverID - id or html object of moving object
//type - v or h for vert or horiz
//minV - minimal value returned by slider
//maxV - maximal value
function _uSlider(moverID,type,minV,maxV,opts) {
        if(minV==maxV) return;
        if(typeof(moverID)!='object') this.slider=$('#'+moverID)[0]; else this.slider=moverID;
        if(!this.slider) return;
        this.slider._uslider=this;
        this.type = type.substr(0,1).toLowerCase()=='v' ? 'v' : 'h';

        this.props=$.extend({
            step: 0, //step of value change, if 0 then minimal possible (corresponding to 1 pixel)
            initval: (minV+maxV)/2, //initial value (between min and max)
            disabled: 0, //if initially disabled
            minpos: 0, //offset in pixels which corresponds to minimal value
            maxpos: null, //offset in pixels which corresponds to maximal value, by default size of parent - size of slider
            hotspot: null, //offset of slider hot spot from left (top) edge, by default a half of slider size

            thispar: null, //this for handlers
            onchange: null, //(newvalue,user param,sliderobj)
            param: null //user param for onchange
        },opts || {});

        this.disabled=!!this.props.disabled;

        this.min_value=minV; //min numerical value of slider
        this.max_value=maxV; //max
        this.step=Math.abs(this.props.step); //if zero, than step is minimal possible

        this.value=0;

        this.min_pos=this.props.minpos;
        if(this.props.maxpos!=null) this.max_pos=this.props.maxpos;
                else { //get max pos from parent size
                        var p=this.slider.parentNode;
                        if(p) {
                            this.max_pos=this.type=='h' ? p.offsetWidth-this.slider.offsetWidth : p.offsetHeight-this.slider.offsetHeight;
                        } else this.max_pos=1;
                }
        if(this.props.hotspot!=null) this.hotoff=this.props.hotspot;
                else this.hotoff=this.type=='h' ? Math.floor(this.slider.offsetWidth/2) : Math.floor(this.slider.offsetHeight/2);

        if(this.min_pos==this.max_pos) this.max_pos=this.min_pos+1;

        this.pos=0; //position of slider in parent node
        this.setValue(this.props.initval);
        this.drag=new _uDraggable(this,this._ondrag,null,null,this._ondragstop);
        $(this.slider).unbind('onmousemove mousedown').bind('onmousemove',_uSlider._onmousemove).bind('mousedown',this,_uSlider._onmousedown);
        if(this.slider.parentNode) $(this.slider.parentNode).unbind('mousedown').bind('mousedown',this,_uSlider._onmousedownparent);
}
_uSlider._onmousedownparent=function (e) {
    var o=e.data;
    if(o.disabled) return;
    var x=o.type=='h' ? e.pageX : e.pageY,
        coord=$(this).offset(),
        dx=o.type=='h' ? x-coord.left : x-coord.top;
    o.setPos(dx-o.hotoff);
    e.preventDefault();
};
_uSlider._onmousedown=function (e) {
    var o=e.data;
    if(o.disabled) return;
    o.drag.start(e,o.pos);
    };
_uSlider._onmousemove=function (e) {e.preventDefault();};
_uSlider.prototype={
    setPos:function (newpos) {
                if(newpos<this.min_pos) newpos=this.min_pos;
                        else if(newpos>this.max_pos) newpos=this.max_pos;
                var sign=this.min_value<this.max_value ? 1 : -1;
                var newvalue=(newpos-this.min_pos)/(this.max_pos-this.min_pos)*(this.max_value-this.min_value)+this.min_value;
                if(this.step>0) { //allign value with step
                        newvalue=Math.round((newvalue-this.min_value)/this.step)*this.step+this.min_value;
                        newpos=(newvalue-this.min_value)/(this.max_value-this.min_value)*(this.max_pos-this.min_pos)+this.min_pos;
                        newpos=Math.round(newpos);
                }
                if(newvalue*sign<this.min_value*sign) newvalue=this.min_value;
                        else if(newvalue*sign>this.max_value*sign) newvalue=this.max_value;
                if(newvalue!=this.value) {
                        this.pos=newpos;
                        if(this.type=='h') this.slider.style.left=this.pos+"px";
                                else this.slider.style.top=this.pos+"px";
                        this.value=newvalue;
                        if(this.props.onchange) this.props.onchange.call(this.props.thispar,this.value,this.props.param,this);
                }
    },
    _ondrag:function (dx,dy,p) {
                if(this.disabled) return;
                this.setPos(p+dx);
    },
    setValue:function (V) {
                var sign=this.min_value<this.max_value ? 1 : -1;
                if(V*sign<this.min_value*sign || V*sign>this.max_value*sign) return;
                if(this.step>0) { //allign value with step
                        V=Math.round((V-this.min_value)/this.step)*this.step+this.min_value;
                        if(V*sign<this.min_value*sign) V=this.min_value;
                                else if(V*sign>this.max_value*sign) V=this.max_value;
                }
                var pos=(V-this.min_value)/(this.max_value-this.min_value)*(this.max_pos-this.min_pos)+this.min_pos;
                this.pos=Math.round(pos);
                if(this.type=='h') this.slider.style.left=this.pos+"px";
                        else this.slider.style.top=this.pos+"px";
                this.value=V;
                if(!this.disabled && this.props.onchange) this.props.onchange.call(this.props.thispar,this.value,this.props.param,this);
    }
};


//id - ID of slider in returned code
_uSlider.buildH=function(id,opts) {
    var p=$.extend({
        w: 124, //outer width of slider control in pixels or %
        lw: 0, //width of left image with padding (if any)
        limg: '', //left image
        limgcss: '', //additional css styles for left background prop (like 'no-repeat 0 8px'), url added by limg
        rw: 0, //width of right image with padding (if any)
        rimg: null, //right image
        rimgcss: '', //additional css styles for right background prop (like 'no-repeat 0 8px'), url added by rimg
        title: '', //title for central part if any
        ch: 20, //height of background DIV in pixels
        cw: 120, //width of background DIV in pixels
        cimg: '/img/d/sldBg.gif', //central background image
        cimgcss: 'no-repeat 0 10px', //additional css styles for central background prop (like 'no-repeat 0 8px'), url added by cimg
        simg: '/img/d/sld.gif', //slider image
        simgcss: 'no-repeat 0 0', //additional css styles for slider background prop (like 'no-repeat 0 8px'), url added by simg
        sh: 20, //height of slider DIV in pixels
        sw: 9, //width of slider DIV in pixels
        st: 2 //top css property of slider DIV in pixels
    },opts || {});
    if(String(p.w).indexOf('%')<0 && String(p.w).toLowerCase().indexOf('px')<0) p.w+='px';
    return '<table border="0" cellpadding="1" cellspacing="1" style="width:'+p.w+'"><tr>'
+(p.lw>0 ? '<td width="'+p.lw+'" '+(p.limg || o.limgcss ? 'style="background:'+(p.limg ? 'url('+p.limg+') ' : '')+p.limgcss+'"' : '')+'></td>' : '')
+'<td><div'+(p.title ? ' title="'+p.title+'"' : '')+' style="height:'+p.ch+'px;width:'+p.cw+'px'+(p.cimg || o.cimgcss ? ';background:'+(p.cimg ? 'url('+p.cimg+') ' : '')+p.cimgcss : '')+'">'
+'<div unselectable="on" id="'+id+'" style="cursor:pointer;-moz-user-select:none;height:'+p.sh+'px; width:'+p.sw+'px; position:relative; top:'+p.st+'px'+(p.simg || o.simgcss ? ';background:'+(p.simg ? 'url('+p.simg+') ' : '')+p.simgcss : '')+'"></div></div></td>'
+(p.rw>0 ? '<td width="'+p.rw+'" '+(p.rimg || o.rimgcss ? 'style="background:'+(p.rimg ? 'url('+p.rimg+') ' : '')+p.rimgcss+'"' : '')+'></td>' : '')
+'</tr></table>';

}


//tab options
// id  - id of tab. can be used anywhere instead of tab index. if not specified, then auto generated as '_tc[TCIDX]tb[INDEX]'
// headerc - content of header (string or html obj)
// headerh  - height of header block if it was specified
// footerc - content of footer (string or html obj)
// footerh  - height of header block if it was specified
// hidden - true if tab is initially hidden
// href - URL if tab action is to open URL
// target - target for URL
// close - availability of close button, overrides global option
// icon - URL of tab icon
// markload - alternate markload text, overrides global option
// onload - (tabctrl,idx,tabid,cont,headercont,footercont) after tab content is loaded (reloaded)for the first time (called before onshow), overrides global option
// onshow - (tabctrl,idx,tabid,cont,headercont,footercont) after tab content is loaded into DOM after every tab switch, overrides global option
// onhide - (tabctrl,idx,tabid) when tab looses active state (if tab was closed then this event is called after onbeforeclose if closing was allowed), overrides global option
// onbeforechange - (tabctrl,idx,tabid) before tab is changed to idx. if false, than ignore click, overrides global option
// onchange - (tabctrl,idx,tabid) after tab is changed to idx. if false, than do not load tab contents, overrides global option
// onbeforeclose - (tabctrl,idx,tabid) before tab is closed. if false, than ignore close, overrides global option
// onclose - (idx,tabid) after tab is closed, overrides global option



function _uTabCtrl (name,ntabs,opts,titles,datas,topts) {
	this.constructor=_uTabCtrl;
	this.name=name;
	this.ntabs=ntabs;

	this.props=$.extend({
		parentnode: null, //if null, then just append child
		wnd:null, //use wnd as parent node. window must be already created
		app:opts && opts.wnd && opts.wnd.app || null, //parent app and 'this' for all handlers
		width: 'auto', //outer width
		height: 'auto', //outer height
		min_height: 50, //content height
		active_tab: -1, //if 'auto' then check current url for active tab
		close: 0, //default availability of close button
		design: 'std',
		noinit: false,
		markload: '<div align="left"><div class="myWinLoad"></div></div>', //default mark load text
		emptycontent: '', //content when no active tabs
		
					
		onload: null, //(tabctrl,idx,tabid,cont,headercont,footercont) after tab content is loaded (reloaded)for the first time (called before onshow)
		onshow: null, //(tabctrl,idx,tabid,cont,headercont,footercont) after tab content is loaded into DOM
		onhide: null, //(tabctrl,idx,tabid) when tab looses active state (if tab was closed then this event is called after onbeforeclose if closing was allowed)
		onbeforechange: null, //(tabctrl,idx,tabid) before tab is changed to idx. if false, than ignore click
		onchange: null, //(tabctrl,idx,tabid) after tab is changed to idx. if false, than do not load tab contents
		onbeforeclose: null, //(tabctrl,idx,tabid) before tab is closed. if false, than ignore close
		onclose: null, //(idx,tabid) after tab is closed. 
		ondestroy: null, //(tabctrl,name)
		onresize: null, //(cont_width,cont_height,tabctrl,name)
		rtl:0
	},opts || {});

	this.app=this.props.app;
	this.state={init:false,destroyed:false};
    this.design=this.props.design && _uTabCtrl.designs[this.props.design] ? _uTabCtrl.designs[this.props.design] : _uTabCtrl.designs['std'];
    this.idx=_uTabCtrl.nextidx++;
    _uTabCtrl.all[this.idx]=this;
	this.width=parseInt(this.props.width) || 0; //outer width
	this.height=parseInt(this.props.height) || 0;	//outer height
	this.data=[]; 
	this.pend_show=null;
	this.decor={cdw:0,cdh:0,pdw:0,pdh:0,ph:0}; //
	this.maxid=0;
	this.wnd=null;

	this.active_tab=this.props.active_tab;
	this.scrollpos={tabswidth:0,havewidth:0,pos:null};

	for(var i=0;i<ntabs;i++) {
		var opt=(topts && topts[i]) || {};
		var id=opt.id || '';
		if(!id || id.length==0) id='_tc'+this.idx+'tb'+(this.maxid++);
		this.data[i]={
			id:id, //id of tab. can be used anywhere instead of tab index. if not specified, then auto generated as '_tc[TCIDX]tb[INDEX]'
			title:(titles && titles[i]) || '.', 
			dat:(datas && datas[i]) || '', //tab content struct
                        footer: opt.footerc || null, //content of footer (string or html obj)
                        footerh: opt.footerh && opt.footerh>0 ? opt.footerh : 0, //height of footer block if it was specified
                        header: opt.headerc || null, //content of footer (string or html obj)
                        headerh: opt.headerh && opt.headerh>0 ? opt.headerh : 0, //height of header block if it was specified
                        footercont: null, //real footer content
                        headercont: null, //real footer content
			cont:null, //real tab content (html elem)
                        ismarkload:0, //if tab is in markload state
			markloadcont:null, //markload content obj (html elem)
			obj:null,
			ishidden: opt.hidden,
			clbut:null,
			link:null,
			href:opt.href, //is tab action is to open URL
			target:opt.target, //target for URL
			label:null,
			close:opt.close==undefined ? this.props.close : opt.close,
			icon:opt.icon,
			markload:opt.markload, //alternate markload text
			firstload:0,
			onload:opt.onload==undefined ? this.props.onload : opt.onload,
			onshow:opt.onshow==undefined ? this.props.onshow : opt.onshow,
			onhide:opt.onhide==undefined ? this.props.onhide : opt.onhide,
			onbeforechange:opt.onbeforechange==undefined ? this.props.onbeforechange : opt.onbeforechange,
			onchange:opt.onchange==undefined ? this.props.onchange : opt.onchange,
			onbeforeclose:opt.onbeforeclose==undefined ? this.props.onbeforeclose : opt.onbeforeclose,
			onclose:opt.onclose==undefined ? this.props.onclose : opt.onclose
			};
	}
        this.sesupdate=0;
	if(!_uTabCtrl.globalset) {
		_uTabCtrl.globalset=true;
//	    $(document).bind("mousedown",_uMENU.hideallmenus);
//	    $(window).bind("resize",_uMENU.hideallmenus);
	}
	this.butdown=new _uDraggable(this,null,null,null,function(but,tab){this.design._onbuttonup(this,but,tab);});

	if(!this.props.noinit)this.init();
}


_uTabCtrl.all=[];
_uTabCtrl.nextidx=1;
_uTabCtrl.globalset=false;

_uTabCtrl.getbyname=function(name) {
    var a=this.all;
    for(var i=0;i<a.length;i++) if(a[i] && a[i].name==name) return a[i];
    return null;
};
_uTabCtrl.closeTab=function(name,idx) {
    var w=this.getbyname(name);
    if(w) w.closeTab(idx);
}
_uTabCtrl.content=function(name,idx,c) {
    var w=this.getbyname(name);
    if(w)w.content(idx,c);
}
_uTabCtrl.headerheight=function(name,idx,h) {
    var w=this.getbyname(name);
    if(w)w.headerheight(idx,h);
}
_uTabCtrl.footerheight=function(name,idx,h) {
    var w=this.getbyname(name);
    if(w)w.footerheight(idx,h);
}
_uTabCtrl.setTitle=function(name,idx,t) {
    var w=this.getbyname(name);
    if(w)w.setTitle(idx,t);
}

_uTabCtrl.designs={
    std: {
//    tab_height:'25px',
        content_class: 'u-tabc-content',
        header_class: 'u-tabc-header',
        footer_class: 'u-tabc-footer',
	tabctrl_init: function(o) {
	    var p={};
		$(o.top).attr('class',"x-unselectable u-tabc").html(
 '<div class="u-tabc-p"><div class="u-tabc-listp"><div class="u-tabc-list"></div><div class="u-tabc-pbot"></div></div><div class="u-tabc-scrbut"><div class="u-tabc-tabl"><div class="u-tabc-label"><div class="u-tabc-scrl"></div><div class="u-tabc-scrr"></div></div></div></div></div>'
+'<div class="u-tabc-body"><div class="u-tabc-content" style="height:'+o.props.min_height+'px">'+o.props.emptycontent+'</div></div>'
			);
	    p.pane=$(o.top).find(".u-tabc-p")[0];
	    p.panebot=$(o.top).find(".u-tabc-pbot")[0];
	    p.listp=$(o.top).find(".u-tabc-listp")[0];
	    p.list=$(o.top).find(".u-tabc-list")[0];
	    p.scrbut=$(o.top).find(".u-tabc-scrbut")[0];
	    p.scrl=$(o.top).find(".u-tabc-scrl")[0];
	    p.scrr=$(o.top).find(".u-tabc-scrr")[0];
	    p.body=$(o.top).find(".u-tabc-body")[0];
	    p.emptycontent=p.content=$(o.top).find(".u-tabc-content")[0];
	    $(o.top).find("div,span").andSelf().attr("unselectable","on");
	    $(p.scrl).bind("click mousedown mouseover mouseout",{obj:o,but:0},_uTabCtrl._onscrbutevent);
	    $(p.scrr).bind("click mousedown mouseover mouseout",{obj:o,but:1},_uTabCtrl._onscrbutevent);

	    return p;
	},
	remove_item: function(o,idx) {
		o.parts.list.removeChild(o.data[idx].obj);
	},
	set_title: function(o,idx) {
		$(o.data[idx].label).html(
			(o.data[idx].icon ? '<img class="u-tabc-icon" border="0" src="'+o.data[idx].icon+'">' : ($.browser.msie && $.browser.version<8 ? '<img class="u-tabc-spacer" src="/img/1px.gif" width="1" height="1" border="0">' : ''))
			+o.data[idx].title
		);
	},
	insert_item: function(o,idx) {
		var a=document.createElement('div');
		$(a).attr('class','u-tabc-tab'+(o.data[idx].close ? ' u-tabc-wcl':'')).html(
(o.data[idx].href ?
'<a '+(o.data[idx].target ? 'target="'+o.data[idx].target+'" ':'')+'href="'+o.data[idx].href+'" class="u-tabc-tabl" style="display:block">' :
'<div class="u-tabc-tabl">' )
			+(o.data[idx].close ? '<div class="u-tabc-closebut"></div>' : '')
			+'<div class="u-tabc-tabr"><div class="u-tabc-label">'
			+(o.data[idx].icon ? '<img class="u-tabc-icon" border="0" src="'+o.data[idx].icon+'">' : ($.browser.msie && $.browser.version<8 ? '<img class="u-tabc-spacer" src="/img/1px.gif" width="1" height="1" border="0">' : ''))
			+o.data[idx].title
			+'</div></div>'+(o.data[idx].href ? '</a>' : '</div>')
		);
		o.data[idx].obj=a;
		o.data[idx].label=$(a).find(".u-tabc-label")[0];
		o.data[idx].link=$(a).find(".u-tabc-tabl")[0];
	    if(o.data[idx].close) {
	    	o.data[idx].clbut=$(a).find(".u-tabc-closebut")[0];
			$(o.data[idx].clbut).bind("mouseover",this._onclbutmouseover).bind("mouseout",this._onclbutmouseout).bind("click",{obj:o,tab:o.data[idx]},_uTabCtrl._onclbutclick).bind("mousedown",{obj:o,tab:o.data[idx]},_uTabCtrl._onclbutdown);
	    }
		$(o.data[idx].link).bind("mouseover",this._ontabmouseover).bind("mouseout",this._ontabmouseout).bind("mousedown",{obj:o,tab:o.data[idx]},_uTabCtrl._ontabclick);
		$(a).find("div,span,a,img").andSelf().attr("unselectable","on");
		if(o.data[idx].ishidden) a.style.display='none';

		var nc=o.parts.list.childNodes.length;
//		if(o.props.rtl || window._rtl)
//			o.parts.list.insertBefore(a,nc-idx>=nc ? null : o.parts.list.childNodes[nc-idx]);
//		else
			o.parts.list.insertBefore(a,idx>=nc ? null : o.parts.list.childNodes[idx]);
	},
	_ontabmouseover: function(e) {
		$(this.parentNode).addClass("u-tabc-tab-over");
	},
	_ontabmouseout: function(e) {
		$(this.parentNode).removeClass("u-tabc-tab-over");
	},
	_onclbutmouseover: function(e) {
		$(this).addClass("u-tabc-closebut-over");
	},
	_onclbutmouseout: function(e) {
		$(this).removeClass("u-tabc-closebut-over");
	},
	_onclbutmousedown: function(b,v) {
		if(v) $(b).addClass("u-tabc-closebut-down");
			else $(b).removeClass("u-tabc-closebut-down");
	},
	_ontabactivate: function(o,idx) {
		$(o.data[idx].obj).addClass("u-tabc-tab-act");
	},
	_ontabdeactivate: function(o,idx) {
		$(o.data[idx].obj).removeClass("u-tabc-tab-act");
	},
	_onscrbutactivate: function(o,but,v) { //0-left else right
		if(v) $(!but ? o.parts.scrl : o.parts.scrr).removeClass("u-tabc-scr-dis");
			else $(!but ? o.parts.scrl : o.parts.scrr).addClass("u-tabc-scr-dis");
	},
	_onscrbutover: function(o,but,v) { //0-left else right
		var b=!but ? o.parts.scrl : o.parts.scrr;
		if(v) $(b).addClass("u-tabc-scr-over");
			else $(b).removeClass("u-tabc-scr-over");
	},
	_onscrbutdown: function(o,but,v) { //0-left else right
		var b=!but ? o.parts.scrl : o.parts.scrr;
		if(v) $(b).addClass("u-tabc-scr-down");
			else $(b).removeClass("u-tabc-scr-down");
	},
	_onbuttonup: function(o,but,tab) { //0-left scroll,1-right scroll,2-tab close
		if(but<2) this._onscrbutdown(o,but,0);
			else this._onclbutmousedown(tab.clbut,0);
	}
    }	
};
_uTabCtrl._onclbutdown=function(e) {
		if(e.which==1) {
			e.stopPropagation();
			e.data.obj.design._onclbutmousedown(e.data.tab.clbut,1);
			e.data.obj.butdown.start(e,2,e.data.tab);
		}
		_uWnd.globalmousedown();
};
_uTabCtrl._onscrbutevent=function(e) {
		var o=e.data.obj,but=e.data.but;
		if(e.type=='click' && e.which==1) o.scrollTabPane(but ? 40 : -40);
			else if(e.type=='mouseover') o.design._onscrbutover(o,but,1);
			else if(e.type=='mouseout') o.design._onscrbutover(o,but,0);
			else if(e.type=='mousedown' && e.which==1) {
				o.design._onscrbutdown(o,but,1);
				o.butdown.start(e,but);
			}
};
_uTabCtrl._onclbutclick=function(e) {
		var d=e.data,o=d.obj;
		for(var i=0;i<o.data.length;i++) 
			if(o.data[i]==d.tab) {
				if(typeof o.data[i].onbeforeclose == 'function') if(!o.data[i].onbeforeclose.call(o.app,o,i,o.data[i].id)) break;
				o.closeTab(i);
				break;
			}
		e.preventDefault();
		e.stopPropagation();
};
_uTabCtrl._ontabclick=function(e) {
		var d=e.data,o=d.obj;
		e.preventDefault();
		for(var i=0;i<o.data.length;i++)
			if(o.data[i]==e.data.tab) {
				if(i==o.active_tab) return;
				if(typeof o.data[i].onbeforechange == 'function') if(!o.data[i].onbeforechange.call(o.app,o,i,o.data[i].id)) break;
				o.activateTab(i);
				break;
			}
};

_uTabCtrl.prototype={
        saveSession: function() {
            this.sesupdate=0;
            return {tab: this.active_tab };
        },
	init: function(noinit) {
		var t=document.createElement("div");
		t.id="_utabctrl"+this.idx;
		if(this.props.parentnode) this.props.parentnode.appendChild(t);
			else if(this.props.wnd) {
				var ww=this.props.wnd.parts.wndcont;
				while(ww.firstChild) ww.removeChild(ww.firstChild);
				ww.appendChild(t);
				this.wnd=this.props.wnd;
				this.wnd.tabctrl=this;
				this.wnd.state.loaded=true;
				}
			else $($("body")[0]).append(t);

		this.top=t;
	        $(t).css({visibility:'hidden',display:'block'});
		if(this.width>0) $(t).css('width',this.width+'px');
//		if(this.height>0) $(t).css('height',this.height+'px');

	    this.parts=this.design.tabctrl_init(this);
	    this.parts.markloadcont=null;
            this.parts.headercontent=null;
            this.parts.footercontent=null;
		this.show();
		if(!noinit)setTimeout("var m=_uTabCtrl.all["+this.idx+"];if(m)m.init1();",10);
	},
	init1: function(noresize) { //noresize used internally by windows
//calculate decor
		var p=this.parts,d=this.decor;
		if(!(this.width>0)) this.width=this.top.offsetWidth;
		if(!(this.height>0)) this.height=this.top.offsetHeight;
		d.cdw=this.top.offsetWidth-p.content.offsetWidth; //content decor w
		d.cdh=this.top.offsetHeight-p.content.offsetHeight; //content decor h
		d.pdw=this.top.offsetWidth-p.listp.offsetWidth; //panelist decor w
                d.hh=0; //active tab header height
                d.fh=0; //active tab footer height
		if(!this.props.wnd && !noresize) {
			$(this.top).css('height',this.height+'px');
			$(p.content).css({width:(this.top.offsetWidth-d.cdw)+'px',height:(this.top.offsetHeight-d.cdh)+'px'});
			$(p.listp).css({width:(this.top.offsetWidth-d.pdw)+'px'});
		}

		$(p.listp).css({overflow:'hidden'});
		$(p.panebot).css('width','4000px');
		$(p.list).css('width','4000px');
		for(var i=0;i<this.ntabs;i++)
			this.design.insert_item(this,i);
		if(this.props.wnd)
			this.resizeTo(this.props.wnd.width-this.props.wnd.decor.w,this.props.wnd.height-this.props.wnd.decor.h);
		var at=this.active_tab;
		this.active_tab=-1;
		if(at=='auto')
			if(this.name && this.name.length>0 && self.location.hash.length>1) {
				var u=self.location.hash.substr(1).split(';');
				var s='T_'+this.name+'=';
				for(var ui=0;ui<u.length;ui++)
					if(u[ui].length>s.length && u[ui].substr(0,s.length)==s) {
						var tb=this.idxbyid(u[ui].substr(s.length));
						if(tb>=0 && tb<this.data.length) {at=tb;break;}
					}
			} else at=-1;
	    $(this.top).css("display",'block').css("visibility",'');
	    if(at==-1 && this.data.length>0) at=0;
	    if(at>=0 && at<this.ntabs) {
			for(var i=0;i<this.ntabs;i++) {
				var j=(at+i)%this.ntabs;
				if(!this.data[j].ishidden && (!this.data[j].onbeforechange || !!this.data[j].onbeforechange(this,j,this.data[j].id))) {
					this.activateTab(j,true);
					break;
				}
			}
		} else this.activateTab(-1,true);

	    $(this.top).css("display",'none').css("visibility",'');
		this.state.init=true;
	    if(pend_show) this.show(pend_show[0]);
	    if(this.props.wnd) this.props.wnd.onexternalload(); //activate autosize 
	},
	scrollTabPane: function(dx) { //>0 - right
		var pos=this.scrollpos.pos+=dx;
		var w=this.scrollpos.tabswidth,havew=this.scrollpos.havewidth;
		if(w<havew) {
			this.design._onscrbutactivate(this,0,0);
			this.design._onscrbutactivate(this,1,0);
			if((this.props.rtl || window._rtl) && this.data.length>0) {
				pos=this.data[this.data.length-1].obj.offsetLeft+havew-w;
			} else pos=0;
			this.scrollpos.pos=pos;
			this.parts.listp.scrollLeft=pos;
		} else {
			if(this.props.rtl || window._rtl) {
				var ol=this.data[this.data.length-1].obj.offsetLeft;
				if(pos<ol) pos=ol;
					else if(pos>ol+w-havew) pos=ol+w-havew;
			} else if(pos<0) pos=0;
					else if(pos>w-havew) pos=w-havew;
			this.scrollpos.pos=pos;
			this.parts.listp.scrollLeft=pos;
			if(pos>0) this.design._onscrbutactivate(this,0,1);
				else this.design._onscrbutactivate(this,0,0);
			if(pos<w-havew) this.design._onscrbutactivate(this,1,1);
				else this.design._onscrbutactivate(this,1,0);
		}
	},
	_setscrolls: function() { //set scroll buttons status accroding to tab widths
		var w=0,havew=this.parts.listp.offsetWidth;
		if(this.parts.listp.clientWidth>0 && this.parts.listp.clientWidth<havew) havew=this.parts.listp.clientWidth;
		if(this.data.length>0) {
			var o=this.data[this.data.length-1];
			if(this.props.rtl || window._rtl) {
				var o2=this.data[0];
				w=o2.obj.offsetLeft+o2.obj.offsetWidth-o.obj.offsetLeft;
			} else w=o.obj.offsetLeft+o.obj.offsetWidth;
		}
		if(havew<w) { //enable scrolls
			this.parts.scrbut.style.display='block';
			havew-=this.parts.scrbut.offsetWidth;
		} else this.parts.scrbut.style.display='none';
			
		if(this.scrollpos.pos==null) {
			if((this.props.rtl || window._rtl) && this.data.length>0) this.scrollpos.pos=this.data[this.data.length-1].obj.offsetLeft+w-havew;
				else this.scrollpos.pos=0;
		} else if(this.scrollpos.havewidth!=havew) 
					if(this.props.rtl || window._rtl) this.scrollpos.pos+=this.scrollpos.havewidth-havew;

		this.scrollpos.havewidth=havew;
		this.scrollpos.tabswidth=w;
		this.scrollTabPane(0);
//		alert(w+','+havew);
	},
	show: function(rel) {
		if(!this.state.init) {pend_show=[rel];return;}
  		$(this.top).show();
	    this.state.visible=true;
//	    if(rel) load();
	},
	resizeTo: function(w,h) {
	  var d=this.decor;
          with(this) {
		width=w;
		height=h;
//		$(this.top).css({height:h+'px',width:w+'px'});
		$(top).width(w).height(h);
		$(parts.content).css({width:(w-d.cdw)+'px',height:(h-d.cdh-d.fh-d.hh)+'px'});
		if(parts.headercontent)$(parts.headercontent).css({width:(w-d.cdw)+'px',height:d.hh+'px'});
		if(parts.footercontent)$(parts.footercontent).css({width:(w-d.cdw)+'px',height:d.fh+'px'});
		$(parts.listp).css({width:(w-d.pdw)+'px'});
		if(props.onresize) props.onresize.call(app,w-d.cdw,h-d.cdh,this,name);
		_setscrolls();
          }
	},
	addTab: function(title,dat,topt,idx) {
		var i= idx!=undefined && idx>=0 && idx<this.data.length ? idx : this.data.length;
		var opt=topt || {};
		var id=opt.id || '';
		if(!id || id.length==0) id='_tc'+this.idx+'tb'+(this.maxid++);
		var data={
			id:id,
			title:title || '.',
			dat:dat || '',
                        footer: opt.footerc || null, //content of header (string or html obj)
                        footerh: opt.footerh && opt.footerh>0 ? opt.footerh : 0, //height of footer block if it was specified
                        header: opt.headerc || null, //content of footer (string or html obj)
                        headerh: opt.headerh && opt.headerh>0 ? opt.headerh : 0, //height of header block if it was specified
                        footercont: null, //real footer content
                        headercont: null, //real footer content
			cont:null,
                        ismarkload:0, //if tab is in markload state
			markloadcont:null,
			obj:null,
			ishidden: opt.hidden,
			clbut:null,
			link:null,
			href:opt.href,
			target:opt.target,
			label:null,
			close:opt.close==undefined ? this.props.close : opt.close,
			icon:opt.icon,
			markload:opt.markload,
			firstload:0,
			onload:opt.onload==undefined ? this.props.onload: opt.onload,
			onshow:opt.onshow==undefined ? this.props.onshow : opt.onshow,
			onhide:opt.onhide==undefined ? this.props.onhide : opt.onhide,
			onbeforechange:opt.onbeforechange==undefined ? this.props.onbeforechange : opt.onbeforechange,
			onchange:opt.onchange==undefined ? this.props.onchange : opt.onchange,
			onbeforeclose:opt.onbeforeclose==undefined ? this.props.onbeforeclose : opt.onbeforeclose,
			onclose:opt.onclose==undefined ? this.props.onclose : opt.onclose
			};

		if(i<this.data.length) this.data.splice(i,0,data);
			else this.data[i]=data;
		this.design.insert_item(this,i);
		this._setscrolls();
		return i;
	},
	tabHidden: function(idx,ishidden) {
		idx=this.idxbyid(idx);
		if(idx<0 || idx>=this.data.length) return;
		var a=this.data[idx];
		a.obj.style.display=ishidden ? 'none' : ''; 
		a.ishidden=!!ishidden;
		this._setscrolls();
	},
	activateTab: function(idx,first) {
		idx=this.idxbyid(idx);
		if(idx<0 || idx>=this.data.length || this.active_tab==idx) if(first && this.data.length>0) idx=0; else return;
		this.design._ontabactivate(this,idx);
		if(this.active_tab>=0 && this.active_tab<this.data.length) {
			if(typeof this.data[this.active_tab].onhide == 'function') this.data[this.active_tab].onhide.call(this.app,this,this.active_tab,this.data[this.active_tab].id);
			this.design._ontabdeactivate(this,this.active_tab);
		}
		this.active_tab=idx;
		this._setscrolls();
                if(!first) this.sesupdate=1;
		if(typeof this.data[idx].onchange == 'function') if(!this.data[idx].onchange.call(this.app,this,idx,this.data[idx].id)) return;
		this.load(idx);
	},
	closeTab: function(idx) {
		idx=this.idxbyid(idx);
		if(idx<0 || idx>=this.data.length) return;
		if(idx==this.active_tab && typeof this.data[idx].onhide == 'function') this.data[idx].onhide.call(this.app,this,idx,this.data[idx].id);

		this.design.remove_item(this,idx);
		var id=this.data[idx].id;
		var f=this.data[idx].onclose;
		this.data.splice(idx,1);
		if(idx==this.active_tab) {
			this.active_tab=-1;
			if(idx==this.data.length) 
				if(idx==0) this._assign_content(-1);
					else this.activateTab(idx-1);
				else this.activateTab(idx);
		} else if(idx<this.active_tab) this.active_tab--;
		this._setscrolls();
		if(f) f(this,idx,id);
	},
	setTitle: function(idx,title) {
		idx=this.idxbyid(idx);
		if(idx<0 || idx>=this.data.length) return;
		this.data[idx].title=title;
		this.design.set_title(this,idx);
		this._setscrolls();
	},
        headerheight: function(idx,fh) {
	    idx=this.idxbyid(idx);
	    if(idx<0 || idx>=this.data.length) return;
            if(typeof(fh)!='number' || isNaN(fh)) return;
            this.data[idx].headerh=fh;
        },
        footerheight: function(idx,fh) {
	    idx=this.idxbyid(idx);
	    if(idx<0 || idx>=this.data.length) return;
            if(typeof(fh)!='number' || isNaN(fh)) return;
            this.data[idx].footerh=fh;
        },
	content: function(idx,c,hc,fc,iserror) { //c - content, hc - header content, fc - footer content
		idx=this.idxbyid(idx);
		if(idx<0 || idx>=this.data.length) return;
		if(!this.data[idx].cont) {
			this.data[idx].cont=document.createElement('DIV');
			$(this.data[idx].cont).addClass(this.design.content_class);
		}
		$(this.data[idx].cont).html(c);
                if(hc) {
    		    if(!this.data[idx].headercont) {
			this.data[idx].headercont=document.createElement('DIV');
			$(this.data[idx].headercont).attr("class",this.design.content_class+' '+this.design.header_class).css("overflow","hidden");
		    }
		    $(this.data[idx].headercont).html(hc);
                } else if(this.data[idx].headercont) $(this.data[idx].headercont).html('');
                if(fc) {
    		    if(!this.data[idx].footercont) {
			this.data[idx].footercont=document.createElement('DIV');
			$(this.data[idx].footercont).attr("class",this.design.content_class+' '+this.design.footer_class).css("overflow","hidden");
		    }
		    $(this.data[idx].footercont).html(fc);
                } else if(this.data[idx].footercont) $(this.data[idx].footercont).html('');
		this.data[idx].firstload=iserror ? 0 : 1;
		this.data[idx].ismarkload=0;
		if(idx==this.active_tab) this._assign_content(idx);
	},
	_assign_content: function(idx) {
                var fh=0,hh=0,i; //footer height, header height
		if(idx<0) {this.parts.content=this.parts.emptycontent;this.parts.headercontent=this.parts.footercontent=null;}
		        else if(this.data[idx].ismarkload) {this.parts.content=this.data[idx].markloadcont;this.parts.headercontent=this.parts.footercontent=null;}
			else {
                            this.parts.content=this.data[idx].cont;
                            this.parts.headercontent=this.data[idx].headercont;
                            hh=this.data[idx].headerh;
                            this.parts.footercontent=this.data[idx].footercont;
                            fh=this.data[idx].footerh;
                        }
                i=0; //current child index
                //set header s first child
                if(this.parts.headercontent) {
		    $(this.parts.headercontent).css({width:(this.width-this.decor.cdw)+'px',height:hh+'px'});
                    if(this.parts.body.childNodes[i]) this.parts.body.replaceChild(this.parts.headercontent,this.parts.body.childNodes[i]);
                        else this.parts.body.appendChild(this.parts.headercontent);
                    this.decor.hh=hh;
                    i++;
                } else this.decor.hh=0;
                //set main content
		$(this.parts.content).css({width:(this.width-this.decor.cdw)+'px',height:(this.height-this.decor.cdh-fh-hh)+'px'});
                if(this.parts.body.childNodes[i]) this.parts.body.replaceChild(this.parts.content,this.parts.body.childNodes[i]);
                        else this.parts.body.appendChild(this.parts.content);
                i++;
                //set footer
                if(this.parts.footercontent) {
		    $(this.parts.footercontent).css({width:(this.width-this.decor.cdw)+'px',height:fh+'px'});
                    if(this.parts.body.childNodes[i]) this.parts.body.replaceChild(this.parts.footercontent,this.parts.body.childNodes[i]);
                        else this.parts.body.appendChild(this.parts.footercontent);
                    this.decor.fh=fh;
                    i++;
                } else this.decor.fh=0;
                //remove excess childs if any
                while(this.parts.body.childNodes[i]) this.parts.body.removeChild(this.parts.body.childNodes[i]);

		if(idx>=0 && !this.data[idx].ismarkload) {
                    if(typeof this.data[idx].onload == 'function' && this.data[idx].firstload) this.data[idx].onload.call(this.app,this,idx,this.data[idx].id,this.parts.content,this.parts.headercontent,this.parts.footercontent);
		    if(typeof this.data[idx].onshow == 'function') this.data[idx].onshow.call(this.app,this,idx,this.data[idx].id,this.parts.content,this.parts.headercontent,this.parts.footercontent);
                }
		if(idx>=0) this.data[idx].firstload=0;
	},
	markload: function(idx,txt) {
		idx=this.idxbyid(idx);
		if(idx<0 || idx>=this.data.length) return;
		var c;
		if(this.data[idx].markload) { //this tab has its own markload page
			if(!this.data[idx].markloadcont) {
				this.data[idx].markloadcont=document.createElement('DIV');
				$(this.data[idx].markloadcont).addClass("u-tabc-content").html(this.data[idx].markload);
			}
//			c=this.data[idx].markloadcont;
		} else {
			if(!this.parts.markloadcont) {
				this.parts.markloadcont=document.createElement('DIV');
				$(this.parts.markloadcont).addClass("u-tabc-content").html(this.props.markload);
			}
                        this.data[idx].markloadcont=this.parts.markloadcont;
//			c=this.parts.markloadcont;
		}
                this.data[idx].ismarkload=1;
                this.data[idx].iserrorload=0;
		if(idx==this.active_tab) this._assign_content(idx);
	},
	idxbyid: function(id) {
		if(typeof id=='string') {
			for(var i=0;i<this.data.length;i++) if(this.data[i].id==id) return i;
			return -1;
		} else return id;
	},
        findintab: function(idx,sel) { //applies css selector to tab content, including footer and header
	    idx=this.idxbyid(idx);
	    if(idx<0 || idx>=this.data.length) return $([]);
            var ob=$(this.data[idx].cont);
            if(this.data[idx].headercont) ob=ob.add(this.data[idx].headercont);
            if(this.data[idx].footercont) ob=ob.add(this.data[idx].footercont);
            return ob.find(sel);
        },
	load: function(idx,reload) {
	    idx=this.idxbyid(idx);
	    if(idx<0 || idx>=this.data.length) return;
	    if(this.data[idx].cont!=null && !reload) { //content is already loaded
		this._assign_content(idx);
		return;
	    }
	    var c=this.data[idx].dat;
	    if(typeof (c) == 'string') this.content(idx,c,this.data[idx].header,this.data[idx].footer);
    	        else if(typeof c == 'function') this.content(idx,c(),this.data[idx].header,this.data[idx].footer);
    	        else if(typeof c == 'object') {
	            this.markload(idx);
                    if(!c.data)c.data={};
                    if(!('_tci' in c.data)) c.data._tci=this.idx;
                    if(!('_ti' in c.data)) c.data._ti=idx;
                    if(this.app && !('_ai' in c.data)) c.data._ai=this.app.pid;
                    if(this.app && !('app' in c)) c.app=this.app.pid;
                    if(this.wnd && !('wnd' in c)) c.wnd=this.wnd.idx;
                    if(!('tabctrl' in c)) c.tabctrl=this.idx;
                    if(!('tabidx' in c)) c.tabidx=idx;
		    if(!c.success && c.xml===false) {c.dataType='text';c.success=new Function("data","st","var w=_uTabCtrl.all["+this.idx+"];if(w)w.content('"+this.data[idx].id+"',data);");}
	   		else if(!c.success && c.xml!==false) c.success=new Function("data","st","var w=_uTabCtrl.all["+this.idx+"];_uParseXML(data,w,'"+this.data[idx].id+"',w.app);");
		    if(!c.error) c.error=new Function("xml","st","er","var w=_uTabCtrl.all["+this.idx+"];if(w)w._onerror('"+this.data[idx].id+"',xml,st,er);");
		    try {
			if(c.form && (c.form.length>0 || c.form.nodeType)) //have form
	   			_uPostForm(c.form,c);
	   		else if(c.url) _uAjaxRequest(c.url,c);
		    } catch(e) {this._onerror(this.data[idx].id,null,'',e);}
    	        }
    	return true;
	},
	_onerror: function(id,xml,st,er) {
		var idx=this.idxbyid(id);
		if(idx<0 || idx>=this.data.length) return;
	    var o=this.props.onerror;
	    if(o && typeof(o)=='function') o.apply(this.app,arguments);
			else this.content(idx,_txt('ErrorLoadTab',this.idx,idx),null,null,1);
	},
	destroy: function() {
		//remove items
		this.data.splice(0,this.data.length);
		this.parts=null;
		this.top.parentNode.removeChild(this.top);
		this.top=null;
		if(this.props.ondestroy) this.props.ondestroy(this,this.name);
	}
};

function _uWnd (name,title,width,height,opts,content,menuitems,app) {
    if(name && name.length>0) {
		var t=_uWnd.getbyname(name);
		if(t) {t.reload(content);return false;}
    }
    this.constructor=_uWnd;
    this.desktop=this.opts && this.opts.desktop || _uWnd.defdesktop;
    this.props=$.extend({
//behavior
	parent: null, //parent window, necessary for modal mode if window is not system modal
	popup: 0, //whether window is closed when clicked outside
	alert: 0, //window has z-index above modal windows
	closeonesc: opts.popup ? 1 : 0, //close window on escape
        nohide: 0, //if true then window is hidden with visibility, not with display when minimized
//position and size
	x: 'auto',
	y: 'auto',
        initstate: null, //'max' or 'min for initially maximized or minimized window regardless of corresponding buttons (session can override this)
        headerh: 0, //height of content header. it is considered to be a part of window's decor
        headerc: null, //content of header, string with html or HTMLElement
        hideheader: 1, //whether header must become invisible when content loading is in progress
        footerh: 0, //height of content footer. it is considered to be a part of window's decor
        footerc: null, //content of footer, string with html or HTMLElement
        hidefooter: 1, //whether header must become invisible when content loading is in progress
        contentsizeprio: opts.footerh>0 || opts.headerh>0 ? 1 : 0,//if true, then preserving content height has priority when changing header or footer height (i.e. outer window height will be changed)
	nomove: 0, //window cannot be moved
        hideonmove: 1, //whether content is hidden when dragging
	center: opts.modal ? 1 : 0, //center window even for desktop (not cascaded)
	session: null, //saved session returned from saveSession
	hidden: 0, //whether initially hidden
	modal: 0, //system modal window if no parent window specified. just disables parent otherwise
	toolwindow: 0, //if true then this window is tool window (so it must have parent) and its activation look depends on parents focus, not own
	resize: opts.toolwindow ? 0 : 1, //whether window can be resized
	fixed: _uWnd.defdesktop || opts.desktop ? 0 : 1, //whether window is fixed to viewport (not actual for desktop)
	minh: 50, //min content height not counting footer and header
	minw: 0, //---same
	maxh: 0, //---same
	maxw: 0, //---same
//autosize
	autosize: opts.toolwindow ? 0 : 1,
	autosizewidth: 0, //whether autosize can change width
	autosizeonimages: 0, //restart auto size on every image load if content has images
	waitimages: 0, //if >0, then do not show content until all images are loaded (timeout is specified value), only during autosize
	hideonresize: 0, //make content invisible during autosize
//visual elements and effects
	icon: '', //icon image url
	header: title ? 1 : 0, //whether window has header
	min: this.desktop && !(opts.notaskbar || opts.parent || opts.toolwindow || opts.alert || opts.modal) ? 1 : 0, //show minimize button
	max: this.desktop && !opts.modal ? 1 : 0, //show maximize/restore button
	close: 1, //show close button
	customButtons: null, //{ 'name': [init_visible,actionfunc(wnd,param),thispar,param || 'name']... }  'xt-name' class, 'xt-name-over' will be used when mouseover
	notaskbar: opts.parent || opts.toolwindow || opts.alert || opts.modal ? 1 : 0,
	align: 'center',
	shadow: opts.toolwindow ? 0 : 1,
	design: 'std',
	fadetype: opts.toolwindow || opts.modal ? 0 : 1, //0 - no fade, 1 - animate opacity, 2 - move down and opacity
	fadespeed: 800,
	fadeclosetype: opts.toolwindow || opts.modal ? 0 : 1, //0 - no fade, 1 - animate opacity, 2 - move down and opacity
	fadeclosespeed: 250,
	havemenu: menuitems ? 1 : 0,
	menuopts: null, //object with menu options, will be passed to menu constructor
	trayicon: null, //just string with icon image URL or object with all optional fields (image must be if window have no icon){title:title, img:image, param:param, thisobj:thisobj, ondown:handler,onclick:handler,onrdown:handler} if thisobj redefined, no standard handlers will be set. param is true for animated show/hide
	traymenu: null, //tray menu which will be set by standard onrdown handler (array with items)
        actlayer: 0, //cover window content and footers with transparent div when window is inactive for ability to activate when content is iframe or flash
//loading
	markload: '<div align="left"><div class="myWinLoad"></div></div>', //default mark load text
	havegrid: 0, //ability to showgrid and hidegrid for setting waiting notification to user.
	markwaitcont: '<div class="myWinLoad"></div>', //default content of waiting notification layer (grided mode)
	markwaitclass: 'myWinGrid', //default class for waiting notification layer

//event handlers
	oninit: null, //(wnd,wndname) called when window finished its initialization and content can be loaded, if returns false, no default content is assigned to window (can be used to assign already created tab control)
	oncontent: null, //(wnd,contElem) called after content is loaded into window and its object became accessible
	onposchange: null, //(wnd) called when window position, size or min/max state is changed
	onactivate: null, //(wnd) called when window is activated (got focus)
	ondeactivate: null, //(wnd) called when window is deactivated (lost focus)
	onerror: null, //(xml,status,error) called when error loading content. if not specified, window is just closed
	onbeforeclose: null, //(wnd) called after user 'close' event appears (button or taskbar). if true, then ignore close
	onclose: null, //(wnd,wndidx) called after window is destroyed
//	onmousemove: null, //(wnd,x,y,{ctrl:0,alt:0,shift:0,meta:0},event) send when mouse is moving over content area, x and y relative to content	

//special
	desktop: null, //
	notabdestroy:0
    }, opts || {});
	if(this.props.modal || this.props.toolwindow) this.props.min=0;
	if(this.props.toolwindow) this.props.max=0;
	if(this.props.session) {
		this.props.x=this.props.session.x;
		this.props.y=this.props.session.y;
	}
//content is string, function returning string or object:
//  url - load window content (on show) by using request to this url, if xml=true, content should be set by _uWnd.content(name,content) or wnd.content(content), otherwise result assumed to be plain html
//  form - send request (for 'url' option) using data from this form ID. if no 'url', use 'action'
//  xml - whether result of remote request is raw html or parsed XML
//  type - 'get' or 'post' methods when 'form' is specified, otherwise use form's 'method' attribute
//  cache - whether to allow browser to cache result of remote request
//  async - whether to do async remote request
//  success - alternative function(data,status) to process successful request (default depends on 'xml')
//  error - handler of error requests. 
//  dataType - data type to return to 'success' function
    $.extend(this,
	{
	name: name,
	title: title ? title : '',
	letsize: 1, //average width of letters in title
	width: width && Math.abs(width)>10 ? width : -300,
	height: height && Math.abs(height)>10 ? height : -200,
        headerh: this.props.headerc && this.props.headerh>=0 ? this.props.headerh : 0,
        footerh: this.props.footerc && this.props.footerh>=0 ? this.props.footerh : 0,
	decor: {w:0, h:0, th:0}, //width of window decoration (it is added to content width to get window width)
	_content: content,
	state: {visible:false,prevvisible:false,minimized:false,maximized:false,loaded:false,init:false,disabled:false,grided:false,noshadow:false,resizing:false,destroyed:false,focused:false},
	grid: null, //grid object for modal windows
	frame: null, //background iframe for IE
	sh: null,//array of shadow objects
	sh_sz: [4,2], //shadow outdent and indent in pixels
	xpos: 0,
	ypos: 0,
	zpos: this.props.modal || this.props.alert ? _uWnd.getModalTopZ() : _uWnd.getTopZ(),
	_drag: new _uDraggable(this,this._ondragmousemove,null,this.onstartdrag,this.onstopdrag),
	_resize: new _uDraggable(this,this._onrsmousemove,null,this.onstartrs,this.onstoprs),
	restRect: null,
//		rsBut: {},
	minheight: this.props.minh,
	minwidth: this.props.minw,
	maxheight: this.props.maxh,
	maxwidth: this.props.maxw,
	pend_show: null,
	autosz: {active:false},
	imgloader: {timer:null,active:false},
	menu: null,
	app: app || null, //parent application. if assigned then all event handlers and content function are called in context of app
	childs: [],
	nchilds: 0, //number of all-level children
	tabctrl: null,
        sesupdate: 0
	});
    this.design=this.props.design && _uWnd.designs[this.props.design] || _uWnd.designs['std'];
    this.idx=_uWnd.nextidx++;
    _uWnd.all[this.idx]=this;
    this._focus=new _uFocus({type:0,owner:this,thispar:this,parent:this.props.parent && this.props.toolwindow ? this.props.parent._focus : (this.app ? this.app._focus : null),onkeydown: this._onkeydown,onkeypress: this._onkeypress,onactivate: this._onactivate,ondeactivate: this._ondeactivate, canactivate: this._canactivate});
    if(!_uWnd.globalset) {
		_uWnd.globalset=true;
//		$(document).bind("click",_uMenu.allmenushide);
//		$(document).bind("mouseup",_uWnd._onmouseup);
		$(document).bind("mousedown",_uWnd.closepopup);
//		$(document).bind("mousemove",_uWnd._onmousemove);
//		if($.browser.msie)$(document).bind("mouseout",function(e) {if(!e.relatedTarget && !e.toElement)_uWnd._dragging=null});
		$(window).bind("scroll",_uWnd._onscroll);
		$(window).bind("resize",_uWnd._onresize);
		_uWnd.sysmenu=new _uMENU('',{align:'D'},{hidden:1,withmarks:1,onitem:_uWnd._onsysmenuitem},_uWnd.sysmenuitems);

    }
    this.init(menuitems);
}

_uWnd.all={};
_uWnd.nextidx=1;
_uWnd.zchilds=[];
_uWnd.lastz=0;
_uWnd.zstep=2;
_uWnd.minz=10000;
_uWnd.maxz=20000;
_uWnd.lastmodalz=0;
_uWnd.minmodalz=21000;
_uWnd.maxmodalz=25000;
_uWnd.globalset=false;
_uWnd.defdesktop=null;
_uWnd.ignoreclick=null; //for popup windows
_uWnd.findactive=function() {
	var t=_uFocus.current;
	while(t) {
		if(t.owner && t.owner.constructor==_uWnd) return t;
		t=t._parent;
	}
	return null;
};
_uWnd.globalmousedown=function(){
	_uMENU.hideallmenus();
	_uSuggestList.hideall();
	_uComboBox.hideall();
	_uWnd.closepopup();
};
_uWnd.messageBoxclose=function(w,wi) {
	var d=w.props._msgdata;
	if(!d.retval) d.retval=d.defc;
	if(d.onsel) d.onsel.call(d.app,d.retval,d.param,w);
};
_uWnd.messageBox=function(txt,title,b,onselect,opts,param,app) { //message text, window title, buttons config
//b - [but1,but2,...]
//butX - string with id or object with props:
//id (mandatory): button id, one of 'ok','yes','not','retry','cancel' or any other (but text must be provided
//t: text label for button (or id will be used)
//def: +1 is button must be focused by default (or first will be used), +2 if button will be returned on ESC or window close (or last will be used)

//opts are stabdard window properties plus:
	var props=$.extend({
		w: 'auto', //width
		h: 'auto', //height
		name: '', //window name
//predefined standard window options
		modal: 1,
		closeonesc: 1,
		align: 'center',
		min: 0,
		max: 0,
		close: 1,
		fadetype: 0,
		fadeclosetype: 0,
		resize:0,
		autosize:0
	},opts || {});
	var d={onsel:onselect,app:app,param:param}; //all messagebox data
	props._msgdata=d;
	props.onclose=_uWnd.messageBoxclose;
	props.oncontent=_uWnd.messageBoxoncont;
	var i,std,w;
	std={'ok':1,'yes':1,'no':1,'retry':1,'cancel':1};
	d.buts=[];
	d.def=null;
	d.defc=null;
	if(!b || b.constructor!=Array) b=['ok'];
	for(i=0;i<b.length;i++) {
		if(typeof b[i]=='string') d.buts.push({id:b[i],t:( std[b[i]] ? _txt(b[i]) : b[i] )});
		else if(typeof b[i]=='object' && b[i].id) {
			d.buts.push({id:b[i].id,t:b[i].t || ( std[b[i].id] ? _txt(b[i].id) : b[i].id ),def:b[i].def});
		} 
	}
	if(d.buts.length==0) return 0;
	w=0;
	for(i=0;i<d.buts.length;i++) { //find default
		w+=60;
		if(d.buts[i].def) {
			if(d.buts[i].def & 1) d.def=d.buts[i].id;
			if(d.buts[i].def & 2) d.defc=d.buts[i].id;
		}
	}
	if(!d.def) d.def=d.buts[0].id;
	if(!d.defc) d.defc=d.buts[d.buts.length-1].id;
	d.txt=txt;
	//
	return new _uWnd(props.name || '',title,!props.w || props.w=='auto' ? -(w+50) : props.w,!props.h || props.h=='auto' ? -100 : props.h,props,_uWnd.messageBoxcont,null,app);
	
};
_uWnd.messageBoxoncont=function(w,c) {
	var d=w.props._msgdata,o;
	o=$(w.parts.content).find('#_uw'+w.idx+"msg"+d.def)[0];
	if(o) o.focus();
};
_uWnd.messageBoxcont=function(w) {
	var cont,d;
	d=w.props._msgdata;
	cont='';
	for(i=0;i<d.buts.length;i++) {
		cont+='<td>'+_uButton('','b',{
			style:1, //d.def==d.buts[i].id ? 0 : 1, 
			text:d.buts[i].t,
			content:'onclick="var w=_uWnd.all['+w.idx+'];if(w){w.props._msgdata.retval=\''+encodeHtmlVal(d.buts[i].id)+'\';w.close()}"',
			id:"_uw"+w.idx+"msg"+d.buts[i].id}
		)+'</td>';
	}
	
	return '<div style="padding:20px 10px 10px 10px">'+d.txt+'</div><div style="padding:0px 10px 10px 10px"><table align="center" callpadding="0" cellspacing="10" border="0"><tr>'+cont+'</tr></table></div>';
};

_uWnd.alerts=null;
_uWnd.alert=function(txt,title,opts,app) {
    opts=$.extend({w:150,h:100,tm:5000,close:1,align:'center',icon:'',name:'',pad:null},opts || {});
    if(opts.pad)txt='<div style="padding:'+opts.pad+'">'+txt+'</div>';
    var d,x,y,by,p,maxy;
    if(!(d=_uWnd.defdesktop)) {
    	d=_uWnd.getdims();
    	x=d.clientW-opts.w-5;
    	by=d.clientH-opts.h-5;//bottom y
    	p=_uWnd.alerts;
    	maxy=0;
    	d=null;
    } else {
		x=d.width-d.calcexclude(1)-opts.w-5;
		by=d.height-d.calcexclude(3)-opts.h-5;
		p=d.alerts;
		maxy=d.calcexclude(2);
    }
   	y=by;
    if(p) {
		if(p.y-(opts.h+5)>=0) y=p.y-(opts.h+5);
		while(p) {if(p.y>maxy) maxy=p.y;p=p.prev;}
		if(maxy>0 && by-maxy>=opts.h+5)y=by;
    }
    var w=new _uWnd(opts.name,title,opts.w,opts.h,{close:opts.close,min:0,max:0,icon:opts.icon,align:opts.align,x:x,y:y,alert:1,autosize:0,fixed:1,shadow:0,resize:0,nomove:1,hidden:0,notaskbar:1,fadetype:2,fadespeed:500,fadeclosetype:2,fadeclosespeed:500,onclose:function(w,idx){_uWnd.rmalert(w,idx);}},txt,null,app);
    if(!d)_uWnd.alerts={prev:_uWnd.alerts,wnd:w,y:y};
    	else d.alerts={prev:d.alerts,wnd:w,y:y};
    if(opts.tm>0) setTimeout("var w=_uWnd.all["+w.idx+"];if(w)w.close();",opts.tm);
    return w;
};
_uWnd.rmalert=function(w,idx) {
    var a=w.desktop ? w.desktop.alerts : _uWnd.alerts,p=null;
    while(a && a.wnd!==w) {p=a;a=a.prev;}
    if(a && a.wnd===w) if(p) p.prev=a.prev; else {
    	if(w.desktop) w.desktop.alerts=a.prev; else _uWnd.alerts=a.prev;
    }
};
_uWnd._onscroll=function(e) {
    if(!$.browser.msie) return;
    var d=_uWnd.getdims(),a=_uWnd.all;
    for(var i in a) 
	if(a[i]) if(a[i].props.fixed || a[i].grid) a[i].moveTo(a[i].xpos,a[i].ypos);
};
_uWnd._onresize=function(e,dsk) { //if dsk then select by desktop, otherwize without desktop
    var d=_uWnd.getdims(),a=_uWnd.all;
    for(var i in a) if(a[i])  if((!dsk && !a[i].desktop) || a[i].desktop==dsk) a[i]._onresize(d);
};
_uWnd.closepopup=function() {
    var a=_uWnd.all;
    for(var i in a)	if(a[i] && a[i].props.popup && _uWnd.ignoreclick!=a[i]) a[i].closeevent();
    if(_uWnd.ignoreclick)setTimeout("_uWnd.ignoreclick=null;",10);
};
_uWnd.findparent=function(elem){ //find parent window for specified element
	var p=elem;
	while(p && p!=document.body) {
		if(p.id && p.id.indexOf && p.id.indexOf('_uwndTop')==0 && p._uwndobj) return p._uwndobj;
		p=p.parentNode;
	}
	return null;
};
_uWnd.getbyname=function(name) {
    var a=this.all;
    for(var i in a) if(a[i] && a[i].name==name) return a[i];
    return null;
};
_uWnd.getTopZ=function(nc,ignw) { //number of all-level child windows for correct account of their influence
//ignw - window which must be ignored when rebuilding z indexes. if its specified then ignw.setZ must follow this function
  if(!nc)nc=0;
  with(_uWnd) {
    var z=lastz;
    if(z<minz) z=minz; else z+=zstep;
    if(z+(1+nc)*zstep>maxz) {
		var x=minz;
		var ar=[];//list of all top-level windows
		for(var i in all) if(all[i] && all[i]!=ignw && all[i].props && !all[i].props.parent) ar[ar.length]=all[i];
		for(var i=0;i<zchilds.length;i++) if(zchilds[i]) ar[ar.length]=zchilds[i];
		ar.sort(function(a,b){return a.zpos-b.zpos});
		for(var i=0;i<ar.length;i++) {
		    ar[i].setZ(x);
		    x+=zstep*(1+(ar[i].nchilds ? ar[i].nchilds : 0));
		}
		z=x;
    }
    lastz=z+(1+nc)*zstep;
    return z;
  }
};
_uWnd.getModalTopZ=function(nc,ignw) {
  if(!nc)nc=0;
  with(_uWnd) {
    var z=lastmodalz;
    if(z<minmodalz) z=minmodalz; else z+=zstep;
    if(z+(1+nc)*zstep>maxmodalz) {
		var x=minmodalz;
		var ar=[];
		for(var i in all) if(all[i] && all[i]!=ignw && all[i].props && !all[i].props.parent && (all[i].props.modal || all[i].props.alert)) ar[ar.length]=all[i];
		ar.sort(function(a,b){return a.zpos-b.zpos});
		for(var i=0;i<ar.length;i++) {
		    ar[i].setZ(x);
		    x+=zstep*(1+(ar[i].nchilds ? ar[i].nchilds : 0));
		}
		z=x;
    }
    lastmodalz=z+(1+nc)*zstep;
    return z;
  }
};
_uWnd.getdims=function() {
    var d=document;
    var s='';
    return {clientW: Math.min($.browser.opera && window.innerWidth || $(window).width(),$.browser.safari && d.body.clientWidth || $(window).width(),$(window).width()),
	    clientH: Math.min($.browser.opera && window.innerHeight || $(window).height(),$.browser.safari && d.body.clientHeight || $(window).height(),$(window).height()),
	    clientLeft: $(d).scrollLeft(),
	    clientTop: $(d).scrollTop(),
	    docW: $(d).width(),
	    docH: $(d).height()};
};
_uWnd.csize=function(elem,name) {
    if ( name != "width" && name != "height" ) return 0;
    var val, which = name == "width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ];
    val = name == "width" ? elem.offsetWidth : elem.offsetHeight;
    var padding = 0, border = 0;
    jQuery.each( which, function() {
	padding += parseFloat(jQuery.curCSS( elem, "padding" + this, true)) || 0;
	border += parseFloat(jQuery.curCSS( elem, "border" + this + "Width", true)) || 0;
    });
    val -= Math.round(padding + border);
    return Math.max(0, val);
}
_uWnd.close=function(name) {
    var w=_uWnd.getbyname(name);
    if(w) w.close();
}
_uWnd.content=function(name,c) {
    var w=_uWnd.getbyname(name);
    if(w)w.content(c);
}
_uWnd.header=function(name,c) {
    var w=_uWnd.getbyname(name);
    if(w)w.header(c);
}
_uWnd.footer=function(name,c) {
    var w=_uWnd.getbyname(name);
    if(w)w.footer(c);
}
_uWnd.headerheight=function(name,h) {
    var w=_uWnd.getbyname(name);
    if(w)w.headerheight(h);
}
_uWnd.footerheight=function(name,h) {
    var w=_uWnd.getbyname(name);
    if(w)w.footerheight(h);
}
_uWnd.reload=function(name,c) {
    var w=_uWnd.getbyname(name);
    if(w)w.reload(c);
}
_uWnd.setTitle=function(name,t) {
    var w=_uWnd.getbyname(name);
    if(w)w.setTitle(t);
}
_uWnd.activatetopwnd=function(dsk) {
    var maxz=0,maxw=null,a=_uWnd.all;
    for(var i in a) {
		if(!a[i] || (dsk && a[i].desktop!=dsk) || !a[i].state.visible || a[i].state.minimized || a[i].props.alert) continue;
		if(a[i].zpos>maxz){maxz=a[i].zpos;maxw=a[i];}
	}
	if(maxw)maxw.activate();
		else if(dsk) dsk.activate();
};
_uWnd.sysmenu=null;
_uWnd.sysmenuitems=[
	[_txt('Restore'),null,'rest'],
	[_txt('Minimize'),null,'min'],
	[_txt('Maximize'),null,'max'],
	'sep',
	[_txt('Close'),null,'close']	
];
_uWnd._onsysmenuitem=function(idx,m,id) {
	var wnd=m.forwnd;
	if(!wnd)return;
	switch(id) {
		case 'rest':
			if(wnd.state.minimized && wnd.ontaskbar)
				wnd.desktop.wndlist.design.animatewndrestore(wnd.desktop.wndlist,wnd);
				else
				wnd.restore(1);
			break;
		case 'min': 
			wnd.minimize(); 
			break;
		case 'max': 
			if(wnd.state.minimized && wnd.ontaskbar) 
				wnd.desktop.wndlist.design.animatewndmaximize(wnd.desktop.wndlist,wnd); 
				else 
				wnd.maximize(1);
			break;
		case 'close': 
			wnd.closeevent(); 
			break;
	}
};
_uWnd.designs={
    std: {
	sh_sz: [4,2], //design specific shadow config
	altcloseclass: 'xt-close2',

	shadow_init: function(top) {
	    var sh=[];
	    for(var i=0;i<3;i++) {
			sh[i]=document.createElement("div");
			top.appendChild(sh[i]);
			$(sh[i]).attr("class","x-sh").css({position:"absolute",zIndex:1});
	    }
	    $(sh[0]).addClass("xsl").css({width:(this.sh_sz[0]+this.sh_sz[1])+"px",left:(-this.sh_sz[0])+"px",top:"0px"}).html('<div class="xstl"><div class="xsml"></div></div>');
	    $(sh[1]).addClass("xsr").css({width:(this.sh_sz[0]+this.sh_sz[1])+"px",top:"0px"}).html('<div class="xstr"><div class="xsmr"></div></div>');
	    $(sh[2]).addClass("xsb").css({height:(this.sh_sz[0]+this.sh_sz[1])+"px",left:(-this.sh_sz[0])+"px"}).html('<div class="xsbl"><div class="xsbr"><div class="xsbc"></div></div></div>');
	    return sh;
	},
	shadow_resize: function(sh,w,h) {
	    $(sh[0]).css({height:(h-this.sh_sz[1])+"px"});
	    $(sh[1]).css({height:(h-this.sh_sz[1])+"px",left:(w-this.sh_sz[1])+"px"});
	    $(sh[2]).css({width:(w+this.sh_sz[0]*2)+"px",top:(h-this.sh_sz[1])+"px"});
	},
	shadow_hide: function(sh) {
	    $(sh[0]).add(sh[1]).add(sh[2]).hide();
	},
	shadow_show: function(sh) {
	    $(sh[0]).add(sh[1]).add(sh[2]).show();
	},
	custButMargin: 5,
	wnd_init: function(o,wnd,title,align,inith,head,icon,resize,menu) {
		$(wnd).addClass("xw-plain").addClass("x-unselectable");
                if(o.props.alert) $(wnd).addClass("xw-active");
	    if(resize) $(wnd).addClass("xw-resize");
		var custbuts='';
		if(o.props.customButtons) for(var i in o.props.customButtons) 
			custbuts+='<div class="xt xt-'+i+'"></div>';
            $(wnd).html('<div class="xw-disabled" style="display:none;overflow:hidden;position:absolute;z-index:30010"></div>'+
            (head ? '<div class="xw-tl"><div class="xw-tr"><div class="xw-tc">'
+ '<div class="xw-sps"></div><div class="xw-hdr">'
+ '<div class="xt xt-close"></div><div class="xt xt-maxi"></div><div class="xt xt-rest"></div><div class="xt xt-mini"></div>'
+ custbuts
+ (icon ? '<img unselectable="on" onmousedown="return false;" class="xw-icon x-unselectable" src="'+icon+'">' : '')
+ '<span class="xw-hdr-text">'+title+'</span></div></div></div></div>' :
		'<div class="xw-tl"><div class="xw-tr"><div class="xw-tc xw-tsps"></div></div></div>')
+ '<div class="xw-ml"><div class="xw-mr"><div class="xw-mc">'
+ (menu ? '<div class="u-wndmenufr"><div class="u-wndmenu" style="position:relative"></div></div>' : '' )
+ '<div class="xw-body">'
+ (o.props.havegrid ? '<div class="'+o.props.markwaitclass+'" style="display:none;overflow:hidden;position:absolute;z-index:30000"></div>':'')
+ (o.props.headerc ? '<div class="myWinCont myWinHeader" style="overflow:hidden;height:'+o.headerh+'px"></div>' : '')
+ (o.props.actlayer ? '<div class="xw-actlayer" style="overflow:hidden;position:absolute;z-index:30005"></div>':'')
+ '<div style="overflow:scroll;height:'+inith+'px">'
+ '<div class="myWinCont" style="display:none;overflow:hidden"'+(align ? ' align="'+align+'"' : '')+'></div>'
+ '<div class="myWinCont" style="overflow:hidden"'+(align ? ' align="'+align+'"' : '')+'></div></div>'
+ (o.props.footerc ? '<div class="myWinCont myWinFooter" style="overflow:hidden;height:'+o.footerh+'px"></div>' : '')
+ '</div></div></div></div>'
+ '<div class="xw-bl"><div class="xw-br"><div class="xw-bc"></div></div></div>'
+ '<div class="xw-blank" style="display:none"></div>'
	    );
	    var p={},contidx=0;
	    p.markdis=$(wnd).find(".xw-disabled")[0];
	    p.actlayer=$(wnd).find(".xw-actlayer")[0];
	    p.wndmove=$(wnd).find(".xw-blank")[0];
	    p.upper=$(wnd).find(".xw-tl")[0];
	    p.center=$(wnd).find(".xw-ml")[0];
	    p.bottom=$(wnd).find(".xw-bl")[0];
	    p.bottomc=$(wnd).find(".xw-bc")[0];
	    $(wnd).find(".xw-mc").bind("mousedown",o,_uWnd._activateonmousedown);
	    if(o.props.headerc) {
                p.headercont=$(wnd).find(".myWinCont")[contidx];
                $(p.headercont).html(o.props.headerc);
                contidx++;
            }
	    p.markload=$(wnd).find(".myWinCont")[contidx];
	    $(p.markload).html(o.props.markload);
	    p.wndcont=$(wnd).find(".myWinCont")[contidx+1];
	    if(o.props.footerc) {
                p.footercont=$(wnd).find(".myWinCont")[contidx+2];
                $(p.footercont).html(o.props.footerc);
            }
	    if(o.props.havegrid) {
	    	p.markwait=$(wnd).find("."+o.props.markwaitclass)[0];
	    	$(p.markwait).html(o.props.markwaitcont);
	    }
	    p.hwndcont=p.wndcont.parentNode;
	    if(head) {
		p.hdr=$(wnd).find(".xw-hdr")[0];
		p.htitle=$(wnd).find(".xw-hdr-text")[0];
		var buts={cbut:"xt-close",mbut:"xt-mini",xbut:"xt-maxi",rbut:"xt-rest",icon:"xw-icon"};
		for(var i in buts) {
		    p[i]=$(p.hdr).find("."+buts[i])[0];
		}
		p.custom={};
		for(var i in o.props.customButtons) {
			p.custom[i]=$(p.hdr).find(".xt-"+i)[0];
		}
	    } else {
		p.hdr=p.htitle=p.cbut=p.mbut=p.xbut=p.rbut=p.icon=null;
	    }
	    if(menu) p.menu=$(wnd).find(".u-wndmenu")[0]; else p.menu=null;
	    $(wnd).find("div,span").andSelf().attr("unselectable","on");
	    return p;
	},
	onstartautosz: function(o) {
//		o.parts.hwndcont.style.overflow="hidden";
		o.parts.wndcont.style.overflow="hidden";
		o.parts.wndcont.style.height="auto";
	},
	onstopautosz: function(o,onlyscroll) { //onlyscroll true to request restoration if scrool behavior only
//		o.parts.hwndcont.style.overflowY="auto";
		if(!onlyscroll) o.parts.hwndcont.style.visibility="";
		o.parts.wndcont.style.overflow="auto";
		o.parts.wndcont.style.height="100%";
	},
	get_szbuts: function(wnd) {
	    var rs={nw:"xw-tl",n:"xw-sps",ne:"xw-tr",w:"xw-ml",e:"xw-mr",sw:"xw-bl",s:"xw-bc",se:"xw-br"};
	    for(var i in rs) {
			rs[i]=$(wnd).find("."+rs[i])[0];
	    }
	    if(!rs.n) rs.n=$(wnd).find(".xw-tsps")[0];
	    return rs;
	},
	onbuttonover: function(e) {
		var cls=e.data.cls;
		if(e.data.state)
	    	$(this).addClass(cls+'-over');
	    else
	    	$(this).removeClass(cls+'-over');
	},
	onstartdrag: function(o) {
    	$(o.wnd).addClass('xw-dragging');
//	    if($.browser.msie) o.parts.upper.style.filter="Alpha(Opacity='70')";
//		else o.parts.upper.style.opacity=0.7;
	    if(!o.state.minimized && o.props.hideonmove) {
		o.hideSh();
		$(o.parts.center).add(o.parts.bottom).hide();
		$(o.parts.wndmove).css('width',o.width+'px').css('height',(o.height-o.decor.th)+'px').show();
	    }
	},
	onstopdrag: function(o) {
    	$(o.wnd).removeClass('xw-dragging');
//	    if($.browser.msie) o.parts.upper.style.filter='';//"Alpha(Opacity='100')";
//		else o.parts.upper.style.opacity=1;
	    if(!o.state.minimized && o.props.hideonmove) {
		o.showSh();
		$(o.parts.center).add(o.parts.bottom).show();
		$(o.parts.wndmove).hide();
	    }
	},
	ondisable: function(o,st) { //st=false to enable
		if(!st) { //show enabled
			$(o.parts.markdis).hide();
			if(o.state.focused || o.props.alert) {$(o.wnd).addClass("xw-active");}
		}
		else { //show disabled
			$(o.parts.markdis).css('width',Math.abs(o.width)+'px').css('height',Math.abs(o.height)+'px').show();
			$(o.wnd).removeClass("xw-active");
		}
	},
	onfocus: function(o,st) {
		if(st && !o.state.disabled) {$(o.wnd).addClass("xw-active");}
			else {$(o.wnd).removeClass("xw-active");}
	},
	onstartresize: function(o) {
	},
	onstopresize: function(o) {
	},
	onminimize: function(o) {
	    $(o.parts.center).css("display","none");
	    $(o.parts.bottomc).addClass("xw-bcm");
	    o.hideSh();
	},
	onrestore: function(o) {
	    $(o.parts.bottomc).removeClass("xw-bcm");
	    $(o.parts.center).css("display","block");
	    o.showSh();
	}
    }	
};

_uWnd.prototype={
showsysmenu: function(x,y) {
	this.activate();
	var m=_uWnd.sysmenu,i;
	if(!m) return;
	if((i=m.indexById('rest'))>=0) {
		if((this.state.minimized && (this.props.max || this.state.beforemin!='max')) || (this.props.max && this.state.maximized)) {
			$(m.parts.elems[i]).removeClass("u-graymenuitem");
			m.elems[i][1]=null;
		} else {
			$(m.parts.elems[i]).addClass("u-graymenuitem");
			m.elems[i][1]=1;
		}
	}
	if((i=m.indexById('min'))>=0) {
		if(this.props.min && !this.state.minimized) {
			$(m.parts.elems[i]).removeClass("u-graymenuitem");
			m.elems[i][1]=null;
		} else {
			$(m.parts.elems[i]).addClass("u-graymenuitem");
			m.elems[i][1]=1;
		}
	}
	if((i=m.indexById('max'))>=0) {
		if((this.props.max || (this.state.minimized && this.state.beforemin=='max')) && !this.state.maximized) {
			$(m.parts.elems[i]).removeClass("u-graymenuitem");
			m.elems[i][1]=null;
		} else {
			$(m.parts.elems[i]).addClass("u-graymenuitem");
			m.elems[i][1]=1;
		}
	}
	m.forwnd=this;
        if(this.props.popup)_uWnd.ignoreclick=this;
	_uWnd.globalmousedown();
	m.show({pos:{x:x,y:y},parentfocus:this._focus});
},
_foreachchild: function(func,cfirst) { //foreach child executes parent.func(child) and makes recursive call (if cfirst is false) or in reverse order (if cfirst is true)
//when cfirst is false, then func() return value shows whether to stop recursion for that window
	var c;
	for(var i=0;i<this.childs.length;i++) {
		c=this.childs[i];
		if(!c || c.state.destroyed) continue;
		if(cfirst) {
			c._foreachchild(func,cfirst);
			func.call(this,c);
		} else {
			if(!func.call(this,c))
				c._foreachchild(func,cfirst);
		}
	}
},
setZ:function(z) {
  with(this){
    zpos=z;
	var c;
	for(var i=0;i<this.childs.length;i++) {
		c=this.childs[i];
		if(!c || c.state.destroyed) continue;
		z+=_uWnd.zstep;
		c.setZ(z);
		z+=_uWnd.zstep*c.nchilds;
	}    
    $(top).css("z-index",zpos);
    if(grid)$(grid).css("z-index",zpos-1);
  }
},
saveSession: function() { //return data sutable to restore window state
    var r;
    if(this.state.maximized || this.state.minimized) r=this.restRect;
        else r=[this.xpos,this.ypos,this.width,this.height];
    return {
                x:r[0],
                y:r[1],
                w:r[2]-this.decor.w,
                h:r[3]-this.decor.h,
                bm:this.state.minimized ? this.state.beforemin : '',
                s:this.state.maximized ? 'max' : (this.state.minimized ? 'min' : '')
	};
    this.sesupdate=false;
},
moveTo:function(_x,_y,nopos) { //nopos - do not update session (used during init, maximize etc)
    var d=_uWnd.getdims();
  with(this) {
    if(_x=='auto' && _y=='auto' && desktop && !props.fixed && !props.autosize && !props.center) {
    	var p=desktop.getwndcoord(width,height);
    	_x=p.x;
    	_y=p.y;
    } else {
	    if(_x=='auto') {
			if(props.parent) _x=Math.floor((props.parent.width-width)/2)+props.parent.xpos;
				else if(desktop && !props.fixed) _x=Math.floor((desktop.calcwidth()-width)/2)+desktop.calcexclude(0);
				else _x=Math.floor((d.clientW-width)/2)+(props.fixed?0:d.clientLeft);
	    	if(_x<0) _x=0;
	    }
	    if(_y=='auto') {
			if(props.parent) _y=Math.floor((props.parent.height-height)/2)+props.parent.ypos;
				else if(desktop && !props.fixed) _y=Math.floor((desktop.calcheight()-height)/2)+desktop.calcexclude(2);
	    		else _y=Math.floor((d.clientH-height)/2)+(props.fixed?0:d.clientTop);
	    	if(_y<0) _y=0;
	    }
	}
    if(props.fixed && $.browser.msie && parseFloat($.browser.version)<=8) $(top).css("left",(d.clientLeft+_x)+'px').css("top",(d.clientTop+_y)+'px');
	else $(top).css("left",_x+'px').css("top",_y+'px');
    if(grid) 
	if($.browser.msie && parseFloat($.browser.version)<=8) $(grid).css("left",d.clientLeft+'px').css("top",d.clientTop+'px');
	    else $(grid).css("left",'0px').css("top",'0px');
    xpos=_x;
    ypos=_y;
    if(!nopos) sesupdate=1;
    if(this.props.onposchange) this.props.onposchange.apply(this.app,[this]);
  }
},
setTitle:function(t) {
    if(t!=null)this.title=t;
    if(!this.title)this.title='';
  with(this) {
    if(!props.header) return;
    var ts=width-decor.w,l;
    ts-=_countbuttonwidth();
    l=title.length;
    if(l*letsize>ts) l=Math.floor(ts/letsize)-2;
    if(l<title.length) 
		$(parts.htitle).attr("title",title).text(title.substr(0,l)+'...');
		else
		$(parts.htitle).attr("title",'').text(title);
	if(ontaskbar) desktop._onsetwindowtitle(this);
  }
},
resizeTo:function(w,h,center,nopos) { //nopos - do not notify of pos change (used during init, maximize etc)
  with(this) {
  	if(w<0) w=(-w)+decor.w;//content size was specified  
  	if(h<0) h=(-h)+decor.h;//content size was specified  
    if(center) {
        var d=_uWnd.getdims();
		var _x=xpos,_y=ypos;
	    if(props.x=='auto') {
			if(props.parent) _x=Math.floor((props.parent.width-w)/2)+props.parent.xpos;
				else if(desktop && !props.fixed) _x=Math.floor((desktop.calcwidth()-w)/2)+desktop.calcexclude(0);
				else _x=Math.floor((d.clientW-w)/2)+(props.fixed?0:d.clientLeft);
	    	if(_x<0) _x=0;
	    }
	    if(props.y=='auto') {
			if(props.parent) _y=Math.floor((props.parent.height-h)/2)+props.parent.ypos;
				else if(desktop && !props.fixed) _y=Math.floor((desktop.calcheight()-h)/2)+desktop.calcexclude(2);
	    		else _y=Math.floor((d.clientH-h)/2)+(props.fixed?0:d.clientTop);
	    	if(_y<0) _y=0;
	    }
		if(_x!=xpos | _y!=ypos) moveTo(_x,_y,1);
    }
    $(wnd).css("width",w+'px');
    $(parts.wndcont).css("width",(w-decor.w)+'px');
    $(parts.hwndcont).css("height",(h-decor.h)+'px');
    if(parts.markwait) $(parts.markwait).css({height:(h-decor.h+footerh+headerh)+'px',width:(w-decor.w)+'px'});
    if(parts.actlayer) $(parts.actlayer).css({height:(h-decor.h)+'px',width:(w-decor.w)+'px'});
    if(parts.markdis) $(parts.markdis).css("width",w+'px').css("height",h+'px');

    if(menu) $(parts.menu).css("width",(w-decor.w)+'px');

    if(tabctrl) tabctrl.resizeTo(w-decor.w,h-decor.h);
    if(frame) $(frame).css("width",w+'px').css("height",h+'px');
    width=w;
    height=h;
    if(!nopos && !this.state.maximized && !this.state.minimized) sesupdate=1;
    if(this.props.onposchange && !this.state.maximized && !this.state.minimized) this.props.onposchange.apply(this.app,[this]);
    _resizeSh();

    setTitle();
  }
},
_onresize:function(d) {
    if(this.state.maximized) 
		if(this.desktop && !this.props.fixed) {
		    this.moveTo(this.desktop.calcexclude(0),this.desktop.calcexclude(2),1);
	    	this.resizeTo(this.desktop.calcwidth(),this.desktop.calcheight(),0,1);
		} else this.resizeTo(d.clientW,d.clientH);
    if(this.grid) $(this.grid).css("width",d.clientW+'px').css("height",d.clientH+'px');
},
_resizeSh:function() {
    if(this.sh)this.design.shadow_resize(this.sh,Math.abs(this.width),Math.abs(this.height));
},
hideSh:function() {
    if(this.sh)this.design.shadow_hide(this.sh);
},
showSh:function() {
    if(this.sh && !this.state.noshadow)this.design.shadow_show(this.sh);
},
shadow_init:function() {
    this.sh=this.design.shadow_init(this.top);
},
showcustombutton: function(name,state) {
	if(!this.props.customButtons[name]) return;
	this.props.customButtons[name][0]=state;
	if(!this.parts.custom[name]) return; //window not initted yet
	if(!state) $(this.parts.custom[name]).css("display","none");
		else $(this.parts.custom[name]).css("display","block");
},
init: function(menuitems) {
    var p=this.props,t=document.createElement("div"),w;
//top parent for window and optional shadow
	t.id="_uwndTop"+this.idx;
	t._uwndobj=this;
    if(!this.desktop) $($("body")[0]).prepend(t);
    	else this.desktop.dsk.appendChild(t);
    this.top=t;
    if(!p.fixed || ($.browser.msie && parseFloat($.browser.version)<=8))	$(t).css("position","absolute"); else $(t).css("position","fixed");
    $(t).css("visibility",'hidden').css("display",'block').css("z-index",this.zpos);
//grid for system modal windows
    if (p.modal && !p.parent){
		var g=document.createElement("div"),d=_uWnd.getdims();
		$(g).addClass('myWinGrid').css("width",d.clientW+'px').css("height",d.clientH+'px').css("z-index",this.zpos-1).hide().bind('mousedown',function(e){e.stopPropagation();e.preventDefault();_uWnd.globalmousedown();});
		if($.browser.msie && parseFloat($.browser.version)<=8)	$(g).css("position","absolute"); else $(g).css("position","fixed");
	    if(!this.desktop) $($("body")[0]).prepend(g);
	    	else this.desktop.dsk.appendChild(g);
		this.grid=g;
    }
    if($.browser.msie && parseFloat($.browser.version)<7){
        this.frame=document.createElement("iframe");
        with(this.frame.style) {
            filter="Alpha(Opacity='0')";
            display="block";
            position="absolute";
//            zIndex=0;
            borderWidth=0;
            width=Math.abs(this.width)+'px';
            height=Math.abs(this.height)+'px';
        }
	t.appendChild(this.frame);
    }

    if(p.shadow && !($.browser.msie && parseFloat($.browser.version)<7)) {
		this.shadow_init();
		this._resizeSh();
    }

    this.moveTo(0,0,1);
//window
    w=document.createElement("div");
    w.id="_uwndWnd"+this.idx;
    t.appendChild(w);
    this.wnd=w;
    $(w).css({position: "absolute",width: Math.abs(this.width)+'px',zIndex:2,left:0});

	if(!_uWnd._activateonmousedown) _uWnd._activateonmousedown=function(e){e.stopPropagation();e.data.activate(e);if(e.data.props.popup)_uWnd.ignoreclick=e.data;_uWnd.globalmousedown();};
//	if(!_uWnd._activateonmousedownign) _uWnd._activateonmousedownign=function(e){e.data.activate(e);_uWnd.globalmousedown();};
    this.parts=this.design.wnd_init(this,w,this.title,p.align,60,p.header,p.icon,p.resize,p.havemenu);
    if(p.header) {
		var bb={cbut:"xt-close",mbut:"xt-mini",xbut:"xt-maxi",rbut:"xt-rest"};
		if(!_uWnd._retfalse) _uWnd._retfalse=function(e){return false;};
		if(!_uWnd._onclickcustom) _uWnd._onclickcustom=function(e){var d=e.data;d.wnd.activate(e);d.func.call(d.thispar,d.wnd,d.param);};
		if(!_uWnd._onbuttonclose) _uWnd._onbuttonclose=function(e){e.data.activate(e);e.data.closeevent();};
		if(!_uWnd._onbuttonmin) _uWnd._onbuttonmin=function(e){e.data.activate(e);e.data.minimize()};
		if(!_uWnd._onbuttonmax) _uWnd._onbuttonmax=function(e){e.data.activate(e);e.data.maximize()};
		if(!_uWnd._onbuttonrest) _uWnd._onbuttonrest=function(e){e.data.activate(e);e.data.restore()};
		//set common event handlers for system buttons
		for(var i in bb)
		    $(this.parts[i]).bind("dblclick",_uWnd._retfalse).bind("mouseover",{cls:bb[i],state:1},this.design.onbuttonover).bind("mouseout",{cls:bb[i],state:0},this.design.onbuttonover).bind("mousedown",this,_uWnd._activateonmousedown);
		//set event handlers for custom buttons
		for(var i in p.customButtons) {
		    $(this.parts.custom[i]).bind("dblclick",_uWnd._retfalse).bind("mouseover",{cls:'xt-'+i,state:1},this.design.onbuttonover).bind("mouseout",{cls:'xt-'+i,state:0},this.design.onbuttonover).bind("mousedown",this,_uWnd._activateonmousedown);
			if(!p.customButtons[i][0]) $(this.parts.custom[i]).css("display","none");
			if(p.customButtons[i][1]) $(this.parts.custom[i]).bind("click",{wnd:this,func:p.customButtons[i][1],thispar:p.customButtons[i][2],param:(p.customButtons[i][3] || i)},_uWnd._onclickcustom); //e.stopPropagation
		}
		//set specific event handlers for system buttons
		if(!p.close) $(this.parts.cbut).css("display","none");
		$(this.parts.cbut).bind("click",this,_uWnd._onbuttonclose); //e.stopPropagation
		if(!p.min) $(this.parts.mbut).css("display","none");
		$(this.parts.mbut).bind("click",this,_uWnd._onbuttonmin); //e.stopPropagation
		if(!p.max) $(this.parts.xbut).css("display","none");
		$(this.parts.xbut).bind("click",this,_uWnd._onbuttonmax); //e.stopPropagation
		$(this.parts.rbut).css("display","none").bind("click",this,_uWnd._onbuttonrest); //e.stopPropagation
		if(p.close && !p.min && !p.max && this.design.altcloseclass) {//use alternative class
			$(this.parts.cbut).addClass(this.design.altcloseclass);
		}

		if(!_uWnd._onclicktodrag) _uWnd._onclicktodrag=function(e){
			e.stopPropagation();
			e.data.activate(e);
                        if(e.data.props.popup)_uWnd.ignoreclick=e.data;
			_uWnd.globalmousedown();return e.data._ondragmousedown(e);};
		if(!_uWnd._ondclicktomax) _uWnd._ondclicktomax=function(e){var a=e.data;if((a.state.maximized && a.props.max) || a.state.minimized)a.restore();else a.maximize();};

		if(!p.nomove) $(this.parts.hdr).addClass("xw-draggable");
		$(this.parts.hdr).add(this.parts.htitle).bind("mousedown",this,_uWnd._onclicktodrag);

		if(p.max || p.min) $(this.parts.hdr).bind("dblclick",this,_uWnd._ondclicktomax);
    }
	//set event handlers for size box
    var rs=this.design.get_szbuts(w);
    if(!_uWnd._onresizebuttondown) _uWnd._onresizebuttondown=function(e){e.stopPropagation();e.data.w.activate(e);if(e.data.w.props.popup)_uWnd.ignoreclick=e.data.w;_uWnd.globalmousedown();return e.data.w._onrsmousedown(e,e.data.tp);};
    for(var i in rs) {
		$(rs[i]).bind("mousedown",{w:this,tp:i},_uWnd._onresizebuttondown);
    }
//    $(this.parts.wndcont).bind("mousedown",this,_uWnd._activateonmousedown); ????
//    $(w).bind("mousedown",this,_uWnd._activateonmousedownign); ????
    $(w).bind("mousedown",this,_uWnd._activateonmousedown);
	if(p.havemenu) {
		var mopts=$.extend({
				parentnode:this.parts.menu,
				wnd:this,
				noabs:1,
				horiz:1,
				statical:1,
				width:'auto'
			},p.menuopts || {});
		this.menu=new _uMENU('',{},mopts,menuitems,true);
	}
    if(typeof this._content == 'object' && this._content.constructor==_uTabCtrl) {
    	this.tabctrl=this._content;
    	this.tabctrl.props.parentnode=this.parts.wndcont;
    	this.tabctrl.wnd=this;
    	this.tabctrl.init(true); //tab must be created with noinit property
    } else this.tabctrl=null;
	
	if(p.trayicon && this.desktop) {
		var to={};
		if(p.trayicon.contructor==String) to.img=p.trayicon;
			else if(p.trayicon.contructor!=Object) if(p.icon)to.img=p.icon;
		if(to.img) {
			if(!p.trayicon.thisobj) { //set standard handlers
				to.thisobj=this;
				if(!p.trayicon.ondown) to.ondown=this.ontrayicondown;
				if(!p.trayicon.onrdown) to.onrdown=this.ontrayiconrdown;
				to.param=p.trayicon.param;
			} else $.extend(to,p.trayicon);
			if(!to.title) to.title=this.title || '';
			this.trayicon=this.desktop.addTrayIcon(to.img,to.title,to.thisobj,to.ondown,to.onclick,to.onrdown,to.param);
			if(p.traymenu) {
				this.traymenu=new _uMENU('',{align:'U'},{hidden:1},p.traymenu);
			}
		}
	}
    if(!p.hidden) this.show(false);
    if(this.desktop && !p.popup && !p.alert && p.header && !p.notaskbar) {
    	this.ontaskbar=true;
    	this.desktop._addwindow(this);
    } else this.ontaskbar=false;
    if(p.modal && p.parent) { //disable parent
    	p.parent.disable(1);
    }
    if(this.props.parent) {
    	this.props.parent._onnewchild(this);
    }
    this.activate();
    if(p.header || this.menu) setTimeout("var w=_uWnd.all["+this.idx+"];if(w)w.init1();",10);
	else setTimeout("var w=_uWnd.all["+this.idx+"];if(w)w.init2();",10);
},
init1: function() {
	if(this.props.header) {
  		if(!this.title) this.letsize=8;
    		else
  			with(this) {
    			if(title.length==0) letsize=8;
				else letsize=parts.htitle.offsetWidth/title.length;
    			parts.htitle.innerHTML='...';
  			}
  	}
	if(this.menu) this.menu.init1(true);
    setTimeout("var w=_uWnd.all["+this.idx+"];if(w)w.init2();",10);
},
init2: function() {
  with(this) {
    decor.sbw=parts.hwndcont.offsetWidth-parts.hwndcont.clientWidth; //scroll bar width
    decor.sbh=parts.hwndcont.offsetHeight-parts.hwndcont.clientHeight; //scroll bar width
    decor.w=Math.abs(width)-_uWnd.csize(parts.wndcont,"width")-decor.sbw;
    decor.h=wnd.offsetHeight-60;
    decor.th=parts.upper.offsetHeight;
    parts.hwndcont.style.overflow='hidden';
    if(tabctrl)tabctrl.init1(true); 
    else { //as content() won't be called for tabctrl, enable footer and header here
        if(parts.headercont) parts.headercont.style.visibility='hidden';
        if(parts.footercont) parts.footercont.style.visibility='hidden';
    }
    if(props.session)
        resizeTo(props.session.w+decor.w,props.session.h+decor.h,0,1);
    else
        resizeTo(width,height,0,1);
    moveTo(props.x,props.y,1);
    if(menu)menu._setsize();

    state.init=true;
    var rel=pend_show ? pend_show[0] : false;
    if(props.oninit) if(!props.oninit.call(app,this,name)) rel=false;
    $(top).css("display",'none').css("visibility",'');
    var s=props.session;
    s=(s && s.s) || props.initstate; //initial state state
    if(s=='min') {
            minimize(1);
            state.beforemin=(s && s.bm) || '';
            if(!props.max && props.initstate=='max') state.beforemin='max';
        }
    	else if(s=='max') maximize(0,1);
    	else
    	if(pend_show) show(rel,pend_show[1],pend_show[2]);
    sesupdate=0; //just in case
  }
},
disable: function(v,tmp) { //false to enable, true to disable; tmp - flag that this state change is temporary and must not modify state flag
//console.log("in disable for "+descr(this)+'value '+v+', tmp '+tmp);
	var c;
	if(!tmp) {
		if(v) {
			if(!this.state.disabled) { //disable all direct children
				for(var i=0;i<this.childs.length;i++) {
					c=this.childs[i];
					if(!c || c.state.destroyed || c.props.alert) continue;
					c.state.prevdisabled=c.state.disabled;
					c.disable(1);
				}
			}
			this.state.disabled=true;
		}
		else {
			if(this.state.disabled) { //restore enabled state of all direct children
				for(var i=0;i<this.childs.length;i++) {
					c=this.childs[i];
					if(!c || c.state.destroyed || c.props.alert || typeof c.state.prevdisabled=='undefined') continue;
					c.disable(c.state.prevdisabled);
				}
			}
			this.state.disabled=false;
		}
	}
	this.design.ondisable(this,v);
},
_onkeypress: function(e,un,t) {
    if(!this.state.disabled && this.state.visible && !this.props.toolwindow) { //opera reacts to keypress
		if(e.keyCode==115 && e.ctrlKey && e.shiftKey) { //CTRL-SHIFT-F4
			e.preventDefault();
			return;
		}
    }
},
_onkeydown: function(e,un,t) {
    if(!this.state.disabled && this.state.visible && !this.props.toolwindow) {
		if((e.keyCode==115 && e.ctrlKey && e.shiftKey) || (e.keyCode==27 && this.props.closeonesc)) { //CTRL-SHIFT-F4 or ESC
			this.closeevent();
			return 1;
		}
		if(this.menu && (e.keyCode==17 || e.keyCode==18) && e.ctrlKey && e.altKey && t.owner.constructor!=_uMENU) { //ctrl+alt
                        if(this.props.popup)_uWnd.ignoreclick=this;
			_uWnd.globalmousedown();			
			this.menu.show(null,0);
			this.menu._focus.activate();
			e.preventDefault();
			e.stopPropagation();
			return 1;
		}
	  	if(this.props.header && this.parts.hdr && e.keyCode==32 && e.ctrlKey && !this.state.resizing) { //ctrl space
	  		var of=$(this.parts.hdr).offset();
	  		this.showsysmenu(of.left,of.top+this.parts.hdr.offsetHeight);
			e.preventDefault();
			e.stopPropagation();
	  		return 1;
	  	}
    }
},
_ondeactivate: function(un,t,newf) {
//console.log("ondeactivate in "+descr(this)+", target "+descr(t)+", newfocus "+descr(newf));
//	if(t!=this._focus) return; //ifnore deactivation of child focuses
	if(this.props.toolwindow) { //do nothing if our first non-tool parent remains active
		var p=this.props.parent;
		while(p && p.props.toolwindow) {
			p=p.props.parent;
		}
		if(p && p._focus.isparentof(newf)) return;
	}
	this.state.focused=0;
	this.design.onfocus(this,0);
    if(this.props.ondeactivate) this.props.ondeactivate.apply(this.app,[this]);
	if(!this.props.toolwindow) {
		this._foreachchild( //show all child tool windows as deactivated
			function(c) {
				if(!c.props.toolwindow)return 1;
				c.state.focused=0;
				c.design.onfocus(c,0);
		},0);
	}

},
_canactivate: function(un,old,t) {
//console.log("canactivate in "+descr(this)+", target "+descr(t)+", oldfocus "+descr(old)+',' +this.state.disabled);
//    if(t==this._focus && this.state.disabled) {
//    	console.log('false');
//    	return 0;
//    } //forbid to activate any child focus
	if(this.props.alert || this.state.minimized) return 0;

//    console.log('true');
    return 1;
},
activate: function(e,frommenu) {
//console.log("activate() in "+descr(this)+", event "+e);
	if(this.menu && !frommenu && this.menu._focus.isactive()) {
		this.menu._focus.deactivate(); //deactivate menu if some other focus in window is activated
	}
	if(this.props.alert) return;
	if(this.props.modal && this.props.parent)
		this.props.parent.setforeground();
	return this._focus.activate();
},
_onactivate: function(un,old,t) {
//console.log("onactivate in "+descr(this)+", target "+descr(t)+", oldfocus "+descr(old));
    if(t!=this._focus) {
//console.log('show deactivated');
//		this.design.onactivate(this,0);
    	return; //show as noactive if child activates
    }
    if(!this.state.disabled) {
	    this.state.focused=1;
		this.design.onfocus(this,1);
	    if(this.props.onactivate) this.props.onactivate.apply(this.app,[this]);
		if(!this.props.toolwindow) {
			this._foreachchild( //show all child tool windows as activated
				function(c) {
					if(!c.props.toolwindow)return 1;
					c.state.focused=1;
					c.design.onfocus(c,1);
			},0);
		}
	} else { //try to find enabled direct child
		var c;
		for(var i=0;i<this.childs.length;i++) {
			c=this.childs[i];
			if(!c || c.state.destroyed || c.state.disabled || c.props.alert) continue;
			this.setforeground();
			c.activate();
			return -1;
		}
		return;
	}
	this.setforeground();
},
setforeground: function() {
	if((this.props.modal && !this.props.parent) || this.props.alert) {
	    if(this.zpos+this.nchilds*_uWnd.zstep!=_uWnd.lastmodalz)
    		this.setZ(_uWnd.getModalTopZ(this.nchilds));
	} else {
	    if(this.zpos+this.nchilds*_uWnd.zstep!=_uWnd.lastz)
    		this.setZ(_uWnd.getTopZ(this.nchilds));
	}
},
ontrayicondown:function(anim,icon,e) {
	if(!this.state.visible && !this.state.minimized) if(anim) this.show(false); else this.show(false,0,0);
		else if(this.state.minimized) {
			if(this.state.beforemin=='max')this.maximize(1);
				else this.restore(1);
		} else if(this.props.min && !this.props.notaskbar) this.minimize();
			else if(anim) this.hide(); else this.hide(0,0);

},
ontrayiconrdown:function(pp,icon,e) {
	if(!this.traymenu) return;
	this.traymenu.show({pos:{x:e.pageX,y:e.pageY}});
	_uMENU.ignoreclick=this.traymenu;
},
show: function(rel,fadetp,fadesp) {
  if(arguments.length<2 || fadetp==undefined) fadetp=this.props.fadetype;
  if(arguments.length<3 || fadesp==undefined) fadesp=this.props.fadespeed;
if(!_uWnd._onshowanimend) _uWnd._onshowanimend=function() { //this points to top or wnd
	var w=_uWnd.findparent(this);if(!w)return;
	w.disable(w.state.disabled,1); //restore real disabled state
	w.showSh();
};
  with(this) {
    if(!state.init) {pend_show=[rel,fadetp,fadesp];return;}
	if(state.visible) return;
    state.visible=true;
    if(grid) $(grid).show();
    if(fadetp==1) {
		disable(1,1);
		if($.browser.safari) hideSh();
		if($.browser.msie) {
//		    state.noshadow=true;
		    hideSh();
	    	$(wnd).hide();
	    	$(top).show();
	    	$(wnd).css("opacity","0").show().animate( {opacity: 1} , {duration:fadesp,complete:_uWnd._onshowanimend});
		} else $(top).fadeIn(fadesp,_uWnd._onshowanimend);
    } else if(fadetp==2) {
		disable(1,1);
		var endy=parseInt($(top).css("top"));
		$(top).css("top", (endy+(height>100 ? 100 : height))+'px');
		if($.browser.msie) {
//		    state.noshadow=true;
		    hideSh();
		    $(wnd).hide();
		    $(top).show().animate( {top: endy+"px"} , {duration:fadesp,complete:_uWnd._onshowanimend});
		    $(wnd).css("opacity","0").show().animate( {opacity: 1} , fadesp);
		} else $(top).css("opacity","0").show().animate( {top: endy+"px", opacity: 1} , {duration:fadesp,complete:_uWnd._onshowanimend});
    } else {
        if(props.nohide) $(top).css({visibility:''});
        $(top).show();
        disable(state.disabled); //restore disabled state as hide() does not restore it
    }
    if(!state.loaded || rel) load();
  }
},
hide: function(fadetp,fadesp,doclose) {
    if(arguments.length<1 || fadetp==undefined) fadetp=this.props.fadeclosetype;
    if(arguments.length<2 || fadesp==undefined) fadesp=this.props.fadeclosespeed;
if(!_uWnd._onhideanimendcl) _uWnd._onhideanimendcl=function() { //this points to top or wnd
	var w=_uWnd.findparent(this);if(!w)return;
	w.close(1);
};
  with(this) {
	if(!state.visible) return 0;
    state.visible=false;
    if(fadetp==1) {
	    disable(1,doclose ? 0 : 1); //if doclose, then disable permanently
		if($.browser.msie) {
//		    state.noshadow=true;
		    hideSh();
		    $(wnd).animate( {opacity: 0} , {duration:fadesp,complete:doclose ? _uWnd._onhideanimendcl : null});
		} else $(top).fadeOut(fadesp, doclose ? _uWnd._onhideanimendcl : null);
	}
    else if(fadetp==2) {
	    disable(1,doclose ? 0 : 1);
		var endy=parseInt($(top).css("top"))+(height>100 ? 100 : height);
		if($.browser.msie) {
//		    state.noshadow=true;
		    hideSh();
		    $(top).animate( {top: endy+"px"} , {duration:fadesp,complete:doclose ? _uWnd._onhideanimendcl : null});
		    $(wnd).animate( {opacity: 0} , fadesp);
		} else $(top).animate( {top: endy+"px", opacity: 0} , {duration:fadesp,complete:doclose ? _uWnd._onhideanimendcl : null});
    } 
    else {
        if(props.nohide) $(top).css({visibility:'hidden'});
            else $(top).hide();
        doclose=false;
    }
    if(grid) $(grid).hide();
	if(_focus.isactive()) {
		_focus.deactivate();
		_uWnd.activatetopwnd(this.desktop);
	}
  }
    if(doclose)return 1;
    return 0;
},
markload: function() {
    with(this) {
        parts.wndcont.style.display='none';
        parts.markload.style.display='block';
        if(parts.headercont && props.hideheader) parts.headercont.style.visibility='hidden';
        if(parts.footercont && props.hidefooter) parts.footercont.style.visibility='hidden';
    }
},
showgrid: function() {
	if(this.parts.markwait) this.parts.markwait.style.display='block';
},
hidegrid: function() {
	if(this.parts.markwait) this.parts.markwait.style.display='none';
},
reload: function(c) {
    this._content=c;
    if(typeof c == 'object' && c.constructor==_uTabCtrl)
    	this.tabctrl=c;
    	else
    	this.tabctrl=null;
    this.state.loaded=false;
//    this.disable(1); ????
    this.load();
    if(!this.props.hidden && !this.state.visible) this.show(false);
},
load: function() {
    if(this.tabctrl) return;
    var c=this._content;
    if(typeof (c) == 'string') this.content(c);
    else if(typeof c == 'function') this.content(c.apply(this.app,[this]));
    else if(typeof c == 'object') {
	this.markload();
        if(!c.data)c.data={};
        if(!('_wi' in c.data)) c.data._wi=this.idx;
        if(this.app && !('_ai' in c.data)) c.data._ai=this.app.pid;
        if(this.app && !('app' in c)) c.app=this.app.pid;
        if(!('wnd' in c)) c.wnd=this.idx;
	if(!c.success && c.xml===false) {c.dataType='text';c.success=new Function("data","st","var w=_uWnd.all["+this.idx+"];if(w)w.content(data);");}
	    else if(!c.success && c.xml!==false) c.success=new Function("data","st","var w=_uWnd.all["+this.idx+"];_uParseXML(data,w,0,w.app);");
	if(!c.error) c.error=new Function("xml","st","er","var w=_uWnd.all["+this.idx+"];if(w)w._onerror(xml,st,er);");
	try {
	if(c.form && c.form.length>0) //have form
	    _uPostForm(c.form,c);
	    else if(c.url) _uAjaxRequest(c.url,c);
	} catch(e) {this._onerror(null,'',e);}
    }
},
_onerror: function(xml,st,er) {
    var o=this.props.onerror;
    if(o && typeof(o)=='function') o.apply(this,arguments);
	else this.close();	
},
header: function(fc) {
    var f=this.parts.headercont;
    if(!f) return;
    if(fc) $(f).html(fc); else $(f).html('');
},
footer: function(fc) {
    var f=this.parts.footercont;
    if(!f) return;
    if(fc) $(f).html(fc); else $(f).html('');
},
headerheight: function(fh) {
    if(!this.parts.headercont || typeof(fh)!='number' || isNaN(fh)) return;
    var prev=this.headerh;
    if(prev==fh) return;
    this.decor.h+=fh-prev;
    this.headerh=fh;
    $(this.parts.headercont).css("height",(fh)+'px');
    this.resizeTo(this.width,this.height+(this.props.contentsizeprio ? fh-prev : 0));
},
footerheight: function(fh) {
    if(!this.parts.footercont || typeof(fh)!='number' || isNaN(fh)) return;
    var prev=this.footerh;
    if(prev==fh) return;
    this.decor.h+=fh-prev;
    this.footerh=fh;
    $(this.parts.footercont).css("height",(fh)+'px');
    this.resizeTo(this.width,this.height+(this.props.contentsizeprio ? fh-prev : 0));
},
_checkimgload: function(load) { //if we wait for all images to be loaded, this func is called after each image to check if we're ready
	var im=this.imgloader;
	var i;
	if(!im.active) return;
	if(load) im.count++; //load means that this func was called from onload or onerror IMG handler
	if(im.images) for(i=0;i<im.images.length;i++)	if(!im.images[i].complete) break; //check that we have incomplete images
	if(i>=im.images.length){this._stopimgload(true);return;} //if none, then finish

	if(im.count>=im.images.length) { //after some events complete was not updated
		if(im.timer) clearTimeout(im.timer);
        	im.timer=setTimeout("var w=_uWnd.all["+this.idx+"];if(w){w.imgloader.timer=null;w._checkimgload();}",100);
	}
	if($.browser.opera && im.images2) { //for opera check virtual images
	    for(i=0;i<im.images2.length;i++) if(!im.images2[i].complete) return;
	    $(im.images2).unbind(); //all complete
	    im.images2=null;
            with(this) {
	        parts.hwndcont.style.visibility='hidden';
    	        parts.markload.style.display='none';
    	        $(parts.wndcont).css("display","block"); //show content so that normal load handlers get executed
                if(parts.headercont) parts.headercont.style.visibility='';
                if(parts.footercont) parts.footercont.style.visibility='';
            }
	}
},
_stopimgload: function(start) { //start - whether to start autosize, otherwise just reset image waiting
	var im=this.imgloader;
	if(im.active) {
		im.active=false;
		if(im.stoptimer) {clearTimeout(im.stoptimer);im.stoptimer=null;}
		if(im.timer) {clearTimeout(im.timer);im.timer=null;}
		if(im.images) {im.images.unbind();im.images=null;}
		if(im.images2) {$(im.images2).unbind();im.images2=null;}

		if(start) {
                  with(this) {
		    if(props.hideonresize) parts.hwndcont.style.visibility='hidden'; //hide content on autosize
    		    parts.markload.style.display='none';
    		    $(parts.wndcont).css("display","block");
                    if(parts.headercont) parts.headercont.style.visibility='';
                    if(parts.footercont) parts.footercont.style.visibility='';
	    	    autosz.load=true;
	    	    delaychecksize();
                  }
	        }
	}
},
content: function(c) {
    this._stopimgload();
    this.stopautosize();
    var a=this.autosz,w=this.parts.wndcont,p=this.props,im=this.imgloader,f=this.parts.footercont,h=this.parts.headercont;

    this.state.loaded=true;
    if(p.autosize && p.waitimages>0) { //hide content until all images are loaded
        this.markload();
        $(w).html(c);
	if(this.props.oncontent) this.props.oncontent.apply(this.app,[this,w]);

    	im.active=true;
	im.stoptimer=setTimeout("var w=_uWnd.all["+this.idx+"];if(w)w._stopimgload(true);",p.waitimages);
	if(!_uWnd.waitimagesfunc) _uWnd.waitimagesfunc=function(e) {
		var im=e.data.imgloader;
		if(im.timer) clearTimeout(im.timer);
		im.timer=setTimeout("var w=_uWnd.all["+e.data.idx+"];if(w){w.imgloader.timer=null;w._checkimgload(1);}",10);
		};
	im.count=0;
    	im.images=$(w).find("img").bind('error',this,_uWnd.waitimagesfunc).bind('load',this,_uWnd.waitimagesfunc);
	if($.browser.opera && im.images.length>0) { //opera does not preload hidden images
		im.images2=[];
		for(var i=0;i<im.images.length;i++) im.images2[i]=$("<img>").attr("src",im.images[i].src).bind('load',this,_uWnd.waitimagesfunc)[0];
	}
    	this._checkimgload();
    } else {
        if(p.autosize && p.hideonresize)this.parts.hwndcont.style.visibility='hidden';
        this.parts.markload.style.display='none';
        $(w).css("display","block").html(c);
        if(h) h.style.visibility='';
        if(f) f.style.visibility='';
        a.load=true;
	if(p.autosize) {
	    if(this.props.oncontent) this.props.oncontent.apply(this.app,[this,w]);
	    this.delaychecksize();
	} else {
	    this.design.onstopautosz(this);
	    if(this.props.oncontent) this.props.oncontent.apply(this.app,[this,w]);
	}
    }

},
onexternalload: function() {
  with(this) {
    _stopimgload();
    stopautosize();

    state.loaded=true;
    autosz.load=true;
    if(parts.headercont) parts.headercont.style.visibility='';
    if(parts.footercont) parts.footercont.style.visibility='';
    if(props.autosize) delaychecksize();
  }
},
stopautosize: function() {
	var a=this.autosz;
	if(a.inittimer) {clearTimeout(a.inittimer);a.inittimer=null;}
	if(a.timer){clearTimeout(a.timer);a.timer=null;}
	if(a.images) {$(a.images).unbind();a.images=null;}
	if(a.active)this.design.onstopautosz(this);
	a.active=false;
},
delaychecksize: function(d) { //true if called due to autosizeonimages, delay
	d=d || 10;
	var a=this.autosz;
	if(a.inittimer) clearTimeout(a.inittimer);
    a.inittimer=setTimeout("var w=_uWnd.all["+this.idx+"];if(w)w.checksize();",d);
 
},
_countbuttonwidth: function() {
	var w=0;
	var buts={cbut:1,mbut:1,xbut:1,rbut:1,icon:1};
	for(var i in buts) if(this.parts[i])w+=this.parts[i].offsetWidth;
	for(var i in this.props.customButtons) w+=this.parts.custom[i].offsetWidth+this.design.custButMargin;
	return w;
},
checksize: function(autoload) { //true if called due to autosizeonimages
    var a=this.autosz,w=this.parts.wndcont;
	a.inittimer=null;
    if(this.state.maximized || this.state.minimized) return;
    this.stopdrag();
    this.stopresize();
    if(a.load) {
		a.load=false;
		if(a.images) {$(a.images).unbind();a.images=null;}
		if(this.props.autosizeonimages) {
			if(!_uWnd.autosizeonimagesfunc) _uWnd.autosizeonimagesfunc=function(e) {e.data.delaychecksize();};
			a.images=$(w).find("img").bind('load',this,_uWnd.autosizeonimagesfunc);
		}
    }
    a.active=true;
	this.design.onstartautosz(this);
	if(a.timer){clearTimeout(a.timer);a.timer=null;}

    var d=_uWnd.getdims(),minw=10,minh=10,maxw,maxh;
    if(this.props.header) {
        minw+=this._countbuttonwidth(); //minimal content width must include all header buttons
    }
    minw=Math.max(minw,this.minwidth);
    minh=Math.max(minh,this.minheight); 
    maxw=this.maxwidth;
    if(maxw==0) maxw=d.clientW-this.decor.w;
    maxh=this.maxheight;
    if(maxh==0) maxh=d.clientH-this.decor.h; //decor.h includes footer and header!!!

    var contW,contH; //scrollwidth and height
	if(this.props.autosizewidth) {
		$(this.parts.wndcont).css("width",'10px');
		contW=w.scrollWidth;
		$(this.parts.wndcont).css({width:(this.width-this.decor.w)+'px'});
	} else contW=w.scrollWidth;
    contH=w.scrollHeight+1;
//    a.tw=Math.min(Math.max(w.scrollWidth+scrW,w.offsetWidth,minw),maxw);
//    a.th=Math.min(Math.max(w.scrollHeight+scrH,w.clientHeight ? w.clientHeight : w.offsetHeight,minh),maxh);
	a.tw=Math.max(contW,minw);
	a.th=Math.max(contH,minh);
	var havescroll=false;
	if(a.tw>maxw) {a.tw=maxw;a.th+=this.decor.sbh;havescroll=true;}
	if(a.th>maxh) {
		a.th=maxh;
		if(a.tw+this.decor.sbw<=maxw) {a.tw+=this.decor.sbw;havescroll=true;}
			else a.tw=maxw;
		}
	if(havescroll) this.design.onstopautosz(this,true); //to enable scrolls during resize

    a.timer=setTimeout("try{_uWnd.all["+this.idx+"]._checksize();}catch(e){}",10);
},
_checksize: function() {
    this.stopdrag();
    this.stopresize();
    var a=this.autosz, dw=a.tw-(this.width-this.decor.w), dh=a.th-(this.height-this.decor.h),ws=10,hs=10;
    if(dw!=0) {
		if(dw>0) ws=Math.min(ws,dw);
	    	else if(dw<0) ws=Math.max(-ws,dw);
		this.resizeTo(this.width+ws,this.height,true,1);
    } else if(dh!=0) {
		if(dh>0) hs=Math.min(hs,dh);
	    	else if(dh<0) hs=Math.max(-hs,dh);
		this.resizeTo(this.width,this.height+hs,true,1);
    } else {
    	a.timer=null;
    	a.active=false;
//		if(this.props.hideonresize)
		this.design.onstopautosz(this);
    	return;
    }
    a.timer=setTimeout("try{_uWnd.all["+this.idx+"]._checksize();}catch(e){}",10);
},
closeevent: function() { //close event from user. insertion point for overrides
	if(this.props.onbeforeclose) if(this.props.onbeforeclose.apply(this.app,[this])) return;
	this.close(); //default action
},
close: function(nohide) {
	if(this.state.destroyed) return;
	if(this.state.pendingdestroy) nohide=1;
	var have=0; //if we have live childs
	for(var i=0;i<this.childs.length;i++) {
		var c=this.childs[i];
		if(!c) continue;
		if(c.state.destroyed) {delete this.childs[i];continue;}
		if(this.state.pendingdestroy) {have=1;break;} //second call to close() from hide()
		c.close();
		if(this.childs[i]) have=1;
	}
	this.state.pendingdestroy=true;
    if(this.props.modal && this.props.parent) { //disable parent
    	this.props.parent.disable(0);
    }
    if(!nohide && this.state.visible) {
    	var a=this.hide(this.props.fadeclosetype,this.props.fadeclosespeed,true);
    	if(a==1) return;
    }
	if(!have) this._destroy();
},
_destroy: function() {
	if(this.state.destroyed) return;
	this._focus.destroy();
	if(this.desktop) this.desktop._removewindow(this);
	if(this.menu) this.menu.destroy();
	if(this.traymenu) this.traymenu.destroy();
	if(this.trayicon) this.trayicon.remove();

    this.top.parentNode.removeChild(this.top);
    if(this.grid) this.grid.parentNode.removeChild(this.grid);
	if(this.tabctrl && !this.props.notabdestroy) this.tabctrl.destroy();
    _uWnd.all[this.idx]=null;
    this.state.destroyed=true;
    this.state.visible=false;
    if(this.props.onclose) this.props.onclose.apply(this.app,[this,this.idx]);
    if(this.props.parent) this.props.parent._ondelchild(this);
	if(this.app) this.app._ondestroywnd(this);
//	delete this;
},
_onnewchild:function(w) {
	if(w) this.childs.push(w);
	//recount children
	var n=0;
	this._foreachchild(function(c){n++;});
	this.nchilds=n;
	if(this.props.parent) this.props.parent._onnewchild(null); //recount childs of parent
},
_ondelchild:function(w) {
	var n=0; //count direct childs left
	for(var i=0;i<this.childs.length;i++) {
		if(this.childs[i])
			if(this.childs[i]==w) {
				delete this.childs[i];
				w.props.parent=null;
				if(!this.state.pendingdestroy) break;
			} else n++;
	}
	if(this.state.pendingdestroy && n==0) this._destroy();
		else this._onnewchild(null); //to recount childs

},
minimize: function(frominit) {
  with(this) {
    if(autosz.active || (!props.min && !(frominit && props.initstate=='min')) || !props.header || props.modal || props.alert || props.popup) return;
    state.beforemin=state.maximized ? 'max' : '';
    stopdrag();
    stopresize();
    if(!state.maximized && !state.minimized) restRect=[xpos,ypos,width,height,props.fixed];
    if(!frominit) sesupdate=1;
    if(props.onposchange && !state.minimized) props.onposchange.apply(app,[this]);
    state.maximized=false;
    state.minimized=true;

	//hide all child windows
	this._foreachchild(
		function(w) {
			if(w.props.min)return 1; //do not hide windows which can be minimized manually
			w.state.prevvisible=w.state.visible;
			w.hide(0);
		}
	,0);

    if(!ontaskbar) {
        if(props.min) { //can be false if initstate==min
            $(parts.mbut).css("display","none");
            $(parts.rbut).css("display","block");
        }
   	if(props.max)$(parts.xbut).css("display","block");
   	$(wnd).removeClass("xw-resize");

    	if(!props.fixed && !$.browser.msie) $(top).css("position","fixed");
	    design.onminimize(this);
	    props.fixed=true;
		if(desktop) {
		    moveTo(desktop.calcexclude(0),desktop.calcexclude(2),1);
		} else {
	    	moveTo(0,0,1);
	    }
	    resizeTo(200,30,0,1);
	    if(_focus.isactive()) {
	    	_focus.deactivate();
			if(!frominit) _uWnd.activatetopwnd(desktop);
	    }
	} else {
		if(!frominit) {
			hide(0);
			if(!props.notaskbar)desktop._onwndminimize(this,xpos,ypos,width,height);
		}
	}
  }
},
maximize: function(act,frominit) {
  with(this) {
    if(autosz.active || (!props.max && !(frominit && props.initstate=='max') && !(state.minimized && state.beforemin=='max')) || !props.header) return;
    stopdrag();
    stopresize();
    if(!state.maximized && !state.minimized) restRect=[xpos,ypos,width,height,props.fixed];
    if(!frominit) sesupdate=1;
    if(props.onposchange && !state.maximized) props.onposchange.apply(app,[this]);

    $(parts.hdr).removeClass("xw-draggable");
    $(wnd).removeClass("xw-resize");
    if(props.max) { //can be false if initstate was specified
        $(parts.xbut).css("display","none");
        $(parts.rbut).css("display","block");
    }
    if(props.min)$(parts.mbut).css("display","block");
    if(!desktop && !props.fixed && !$.browser.msie) $(top).css("position","fixed");

    hideSh();
	if(desktop && !props.fixed) {
	    moveTo(desktop.calcexclude(0),desktop.calcexclude(2),1);
	    resizeTo(desktop.calcwidth(),desktop.calcheight(),0,1);
	} else  {
	    var d=_uWnd.getdims();
	    props.fixed=true;
	    moveTo(0,0,1);
	    resizeTo(d.clientW,d.clientH,0,1);
	}
    if(state.minimized) {
    	if(!ontaskbar) 
    		this.design.onrestore(this);
    		else 
    		show(false,0);
    } else if(frominit) {show(false,0);}

    state.maximized=true;
    state.minimized=false;
	//restore all child windows
	_foreachchild(
		function(w) {
			if(w.props.min)return 1; //do not restore windows which can be minimized manually
			if(w.state.prevvisible)w.show(0,0);
		},
	0);
	if(act)activate();
  }
},
restore: function(act) {
  with(this) {
    if(!props.header) return;
    stopdrag();
    stopresize();
    if(this.props.onposchange && (state.minimized || state.maximized)) props.onposchange.apply(app,[this]);

    $(parts.rbut).css("display","none");
    if(props.max) $(parts.xbut).css("display","block");
    if(state.minimized && props.min) $(parts.mbut).css("display","block");
    if(!props.nomove)$(parts.hdr).addClass("xw-draggable");
    if(props.resize)$(wnd).addClass("xw-resize");


    if(state.minimized) {
    	if(!ontaskbar) {
    		this.design.onrestore(this);
    	}
    	else {
    		show(false,0);
//			desktop.onwndrestore(this);
		}
	}
    showSh();
    state.maximized=state.minimized=false;
    var r=restRect;
    if(r) {
		props.fixed=r[4];
		if(!props.fixed && !$.browser.msie) $(top).css("position","absolute");
		moveTo(r[0],r[1],1);
		resizeTo(r[2],r[3],0,1);
    }
	//restore all child windows
	_foreachchild(
		function(w) {
			if(w.props.min)return 1; //do not restore windows which can be minimized manually
			if(w.state.prevvisible)w.show(0,0);
		},
	0);
	if(act)activate();
  }
},
_ondragmousemove: function(dx,dy,x,y) {
    var d=_uWnd.getdims();
	x+=dx;
	y+=dy;
    if(x+this.width<30) x=30-this.width;
    if(y<-5) y=-5;
	if(this.desktop && !this.props.fixed) {
	if(x>this.desktop.width-20) x=this.desktop.width-20;
	if(y>this.desktop.height-20) y=this.desktop.height-20;
	} else if(this.props.fixed) {
	if(x>d.clientW-20) x=d.clientW-20;
	if(y>d.clientH-20) y=d.clientH-20;
    } else {
	if(x>d.docW-20) x=d.docW-20;
	if(y>d.docH-20) y=d.docH-20;
    }
    this.moveTo(x,y);
},
onstartdrag: function() {
	this.design.onstartdrag(this);
},
onstopdrag: function() {
	this.design.onstopdrag(this);
},
_ondragmousedown: function(e) {
  with(this){
	if(e.which==3 && typeof _uDesk=='undefined') return; //no right button without desktop
  	if(e.which==1 && e.ctrlKey) e.which=3;
  	if(e.which==3 && !state.resizing && !state.disabled && !props.toolwindow) {
  		this.showsysmenu(e.pageX,e.pageY);
  		return;
  	}
    if(props.nomove || state.resizing || state.maximized || state.disabled || e.which!=1) return;
	_drag.start(e,xpos,ypos);
    props.x=xpos;
    props.y=ypos;
  }
},
stopdrag: function() {
	this._drag.stop();
},
_onrsmousemove: function(dx,dy,tx,ty,tw,th,m) {
    var x,y,w,h,d=_uWnd.getdims(),minw=10,minh=10,maxw,maxh;
    x=tx;
    y=ty;
    w=tw;
    h=th;
    if(this.props.header) {
		minw+=this._countbuttonwidth();
    }
    minw=Math.max(minw,this.minwidth)+this.decor.w;
    minh=Math.max(minh,this.minheight)+this.decor.h;
    maxw=this.maxwidth;
    if(maxw==0) maxw=d.clientW; else maxw+=this.decor.w;
    maxh=this.maxheight;
    if(maxh==0) maxh=d.clientH; else maxh+=this.decor.h;
//	self.status=minw;
    if(m.indexOf('n')>=0){
	y=ty+dy;
	if(y<0) y=0;
	h=ty+th-y;
	if(h<minh) {h=minh;y=ty+th-h;}
	    else if(h>maxh) {h=maxh;y=ty+th-h;}
    }
    if(m.indexOf('s')>=0){
	h=th+dy;
	if(h<minh) h=minh;
	    else if(h>maxh) h=maxh;
    }
    if(m.indexOf('w')>=0){
	x=tx+dx;
	if(x<0) x=0;
	w=tx+tw-x;
	if(w<minw) {w=minw;x=tx+tw-w;}
	    else if(w>maxw) {w=maxw;x=tx+tw-w;}
    }
    if(m.indexOf('e')>=0){
	w=tw+dx;
	if(w<minw) w=minw;
	    else if(w>maxw) w=maxw;
    }
    this.moveTo(x,y);
    this.resizeTo(w,h);
},
_onrsmousedown: function(e,b) {
  with(this) {
    if(_drag.active || state.disabled || state.maximized || state.minimized || 
	autosz.active || !props.resize || e.which!=1) return;
    props.x=xpos;
    props.y=ypos;
	this.stopautosize();
	_resize.start(e,xpos,ypos,width,height,b);
  }
},
onstartrs: function() {
	this.design.onstartresize(this);
},
onstoprs: function() {
	this.design.onstopresize(this);
},
stopresize: function() {
	this._resize.stop();
}

};

function _txt(sign) { 
		var lng=window._uDeflang,a,p=arguments;
		if(!lng) a=sign;
			else {
				var db=window._uSigns;
				if(!db || !db[lng])a=sign;
					else {
						if(sign in db[lng]) a=db[lng][sign];
							else a=sign;
					}
			}
		function _txtproc(str,param) {
			return p[param];
		}

		if(p.length>1) {
			a=a.replace(/%([1-9])/g,_txtproc);
		}
		return a;
}

function _uColorBox(did,fid){
	var hex_Red=new Array("00","33","66","99","CC","FF");
	var hex_Green=new Array("00","33","66","99","CC","FF");
	var hex_Blue=new Array("00","33","66","99","CC","FF");
	var hex_Gray=new Array("909090","939393","969696","999999","9C9C9C","9F9F9F","C0C0C0","C3C3C3","C6C6C6","C9C9C9","CCCCCC","CFCFF","F0F0F0","F3F3F3","F6F6F6","F9F9F9","FCFCFC","FFFFFF");
	var hexred="00", hexgreen="00", hexblue="00", hexgray="00";
	var red=0, green=0, blue=0;
	var x=0, y=0, z=0;
	var xyz=0;
	var ctable='<table border="0" cellpadding="0" cellspacing="1" bgcolor="#000000">';
	while (y<6){
		ctable+='<tr>';
		var x=0;
		var hexblue=hex_Blue[blue];
		while (x<6){
			var z=0;
			var hexgreen=hex_Green[green];
			while (z<6){
				var hexred=hex_Red[red];
				var hexadecimal=""+hexred+hexgreen+hexblue;
				ctable+='<td style="width:8px;height:8px;cursor:pointer;" onclick="$(\'#'+did+'\').hide(); getElementById(\''+fid+'\').value=\''+hexadecimal+'\'" bgcolor="'+hexadecimal+'"></td>';
				z++;red++;
				if (red==6){red=0;}
			}
			x++;green++;
			if (green==6)green=0;
			xyz++;
			if (xyz==3){ctable+='</tr>'; xyz=0;}
		}
		y++; blue++
		if (blue==6)blue=0;
	}
	for (var i=0;i<hex_Gray.length;i++){
		ctable+='<td style="width:8px;height:8px;cursor:pointer;" onclick="$(\'#'+did+'\').hide(); getElementById(\''+fid+'\').value=\''+hex_Gray[i]+'\'" bgcolor="'+hex_Gray[i]+'"></td>';
	}
	ctable+='</table>';
	$('#'+did).html(ctable);
}

//ucoz specific
//wnd can be _uWnd or _uTabCtrl
function _uParseXML(xml,wnd,tabid,papp) {xml = xml.documentElement;
var tabctrl=null,app=null,footers={}; //footer used to associate footer and header with content of tabctrl, footer and header must come first

if(wnd && wnd.constructor==_uTabCtrl) {tabctrl=wnd;wnd=null;app=papp || tabctrl.app;}
    else if(wnd && wnd.constructor==_uWnd) {app=papp || wnd.app;}
    else {app=papp || null;wnd=null;} //unknown type in wnd

if (xml == null) { alert("Server connection Error. Sorry."); }
for (var i = 0; i < xml.childNodes.length; i++) {
if (xml.childNodes[i].nodeName == "cmd"){ var cmd='',target='',data,height=null;
for (var j=0; j<xml.childNodes[i].attributes.length; j++) {
if (xml.childNodes[i].attributes[j].name == "h")height = parseInt(xml.childNodes[i].attributes[j].value);
if (xml.childNodes[i].attributes[j].name == "p")cmd = xml.childNodes[i].attributes[j].value;
if (xml.childNodes[i].attributes[j].name == "t")target = xml.childNodes[i].attributes[j].value;}
if (xml.childNodes[i].firstChild && xml.childNodes[i].firstChild.data ) data = xml.childNodes[i].firstChild.data; else data = '';
if (cmd=='innerHTML' && target.match(/^layerContent(.+)/)) _uWnd.content(RegExp.$1,data);
if (cmd=='innerHTML' && target.match(/^layerTitle(.+)/)) _uWnd.setTitle(RegExp.$1,data);
if (cmd=='innerHTML') $('#'+target).html(data);
else if (cmd=='+innerHTML') $('#'+target).prepend(data);
else if (cmd=='innerHTML+') $('#'+target).append(data);
else if (cmd=='innerHTMLspanAll') $("span."+target).html(data);
else if (cmd=='innerHTMLdivAll') $("div."+target).html(data);
else if (cmd=='value') $('#'+target).val(data);
else if (cmd=='jsa') includeJSfile(data,target);
else if (cmd=='js') eval(data);
else if (cmd=='content' && target.length>0) {
	var r=target.match(/^([^:]+):(.+)/);
	if(r) {
            if(typeof footers['_uhh'+r]=='number' && footers['_uhh'+r]!=NaN) _uTabCtrl.headerheight(r[1],r[2],footers['_uhh'+r]);
            if(typeof footers['_ufh'+r]=='number' && footers['_ufh'+r]!=NaN) _uTabCtrl.footerheight(r[1],r[2],footers['_ufh'+r]);
            _uTabCtrl.content(r[1],r[2],data,footers['_uhc'+r],footers['_ufc'+r]);
        }
	else _uWnd.content(target,data);
}
else if (cmd=='header' && target.length>0) {
	var r=target.match(/^([^:]+):(.+)/);
        if(r) {
            footers['_uhc'+r]=data;
            footers['_uhh'+r]=height;
        } else {
            if(height!=NaN) _uWnd.headerheight(target,height);
            _uWnd.header(target,data);
        }
}
else if (cmd=='footer' && target.length>0) {
	var r=target.match(/^([^:]+):(.+)/);
        if(r) {
            footers['_ufc'+r]=data;
            footers['_ufh'+r]=height;
        } else {
            if(height!=NaN) _uWnd.footerheight(target,height);
            _uWnd.footer(target,data);
        }
}
else if (cmd=='title' && target.length>0) {
	var r=target.match(/^([^:]+):(.+)/);
	if(r) _uTabCtrl.setTitle(r[1],r[2],data);
	else _uWnd.setTitle(target,data);
}
else if (cmd=='close' && target.length>0) {
	var r=target.match(/^([^:]+):(.+)/);
	if(r) 
		if(!data || isNaN(parseInt(data)))_uTabCtrl.closeTab(r[1],r[2]);else setTimeout("_uTabCtrl.closeTab('"+r[1]+"','"+r[2]+"');",parseInt(data));
	else
		if(!data || isNaN(parseInt(data)))_uWnd.close(target);else setTimeout("_uWnd.close('"+target+"');",parseInt(data));
}
else if(wnd) {
    if(cmd=='content') wnd.content(data);
    else if(cmd=='header') {if(height!=NaN) wnd.headerheight(height);wnd.header(data);}
    else if(cmd=='footer') {if(height!=NaN) wnd.footerheight(height);wnd.footer(data);}
    else if(cmd=='title') wnd.setTitle(data);
    else if(cmd=='close') if(!data || isNaN(parseInt(data)))wnd.close();else setTimeout("var w=_uWnd.all["+wnd.idx+"];if(w)w.close();",parseInt(data));
    }
else if(tabctrl && tabid) {
    if(cmd=='content') {
        if(typeof footers['_uhh']=='number' && footers['_uhh']!=NaN) tabctrl.headerheight(tabid,footers['_uhh']);
        if(typeof footers['_ufh']=='number' && footers['_ufh']!=NaN) tabctrl.footerheight(tabid,footers['_ufh']);
        tabctrl.content(tabid,data,footers['_uhc'],footers['_ufc']);
    }
    else if(cmd=='header') {footers['_uhc']=data;footers['_uhh']=height;}
    else if(cmd=='footer') {footers['_ufc']=data;footers['_ufh']=height;}
    else if(cmd=='title') {tabctrl.setTitle(tabid,data);}
    else if(cmd=='close') if(!data || isNaN(parseInt(data)))tabctrl.closeTab(tabid);else setTimeout("var w=_uTabCtrl.all["+tabctrl.idx+"];if(w)w.closeTab('"+tabid+"');",parseInt(data));
    }
}}
}

var _defAjaxError=function(xmlreq, status, err) {
//this - options for request
//typically only one of status or err (exception) will have info
	try {
		_show_log_form();return;
	} catch(e){}
	window.location.reload();
}
var _hookAjaxError=null; //function(xmlreq, status, err)
//this - options for request

function _uAjaxRequest(url,options) {
    if(!url) return null;
    var o = $.extend({
//noerrorhook:1   - can be used to prevent error hook from being used    	
		app: 0, //application PID
		wnd: 0, //window index
		async: 1,
		cache: true,
		dataType: 'xml',
		error: _defAjaxError,
	        type: 'GET',
		success: _defAjaxSuccess,
		timeout: 25000
// 		data: {f1: val1, f2: val2, f3: [val4,val5]}
    }, options || {});
    if(o.app && o.app.appname && o.app.pid>0) o.app=o.app.pid; //fix if app object was passed instead of PID
    if(o.wnd && o.wnd.constructor==_uWnd) o.wnd=o.wnd.idx; //fix if window object was passed instead of IDX
    if(!o.data)o.data={};
    if(o.app>0 && !('_ai' in o.data)) o.data._ai=o.app;
    if(o.app>0 && _uApp.all[o.app] && _uApp.all[o.app]._admpasscook) o.data._apc=_uApp.all[o.app]._admpasscook;
    if(o.wnd>0 && !('_wi' in o.data)) o.data._wi=o.wnd;

    if(_hookAjaxError && !o.noerrorhook) {o.prev_error=o.error;o.error=_hookAjaxError;}
    o.url=url;
    if(o.app>0 && !o.nosuccesshook) {o.prev_success=o.success;o.success=_hookAjaxSuccess;}
    return jQuery.ajax(o);
}
//by default use app in options to call success-handler relative to application if it were specified
var _hookAjaxSuccess=function(data, status) {
	if(!this.prev_success) return;
	if(this.app>0 && typeof _uApp!='undefined' && _uApp.all[this.app] && !_uApp.all[this.app].exited && this.prev_success!=_defAjaxSuccess) this.prev_success.call(_uApp.all[this.app],data,status,this);
		else this.prev_success.call(this,data,status);
};

//default success action for forms and simple _uAjaxRequest
//by default call _uParseXML for xml reply
var _defAjaxSuccess=function(data, status) {
//this - options for request
        var wnd=null,app=null;
	if(this.dataType=='xml') {
		if(this.wnd>0 && _uWnd.all[this.wnd] && !_uWnd.all[this.wnd].state.destroyed) wnd=_uWnd.all[this.wnd];
		if(this.app>0 && typeof _uApp!='undefined' && _uApp.all[this.app] && !_uApp.all[this.app].exited) app=_uApp.all[this.app];
		_uParseXML(data,wnd,0,app);
	}
}

//default error action for _uPostForm
//by default try to find onerror attribute in form and execute it
var _defAjaxFormError=function(xmlreq, status, err) {
//this - options for request
//typically only one of status or err (exception) will have info
	if(!this._formobj) return;
	var a=this._formobj.onerror || this._formobj.getAttribute('onerror');
	if(!a) return;
	if(typeof a == 'string') {
		try {a=new Function(a);} catch(e){return;}
	}
	if(typeof a == 'function' || typeof a=='object') {
		try {a.call(this._formobj,xmlreq, status, err);} catch(e){return;}
	}
}

//by default try to find oncomplete attribute in form and execute it
var _defAjaxFormComplete=function(xmlreq, status) {
//this - options for request
	if(!this._formobj) return;
	var a=this._formobj.oncomplete || this._formobj.getAttribute('oncomplete');
	if(!a) return;
	if(typeof a == 'string') {
		try {a=new Function(a);} catch(e){return;}
	}
	if(typeof a == 'function' || typeof a=='object') {
		try {a.call(this._formobj,xmlreq, status);} catch(e){return;}
	}
}


function _uPostForm(formid,options) {
    if(!formid && options && options.url) { _uAjaxRequest(options.url,options);return;}
    var f;
    if(typeof(formid)!='object') f=$('#'+formid); else f=$(formid);
    if(!f.length) return;
    var o = $.extend({
//noerrorhook:1   - can be used to prevent error hook from being used    	
		app: 0, //pid of application
                wnd: 0, //window index
		url: f.attr('action') || window.location.toString(),
		type: f.attr('method') || 'GET',
		error: _defAjaxFormError,
		success: _defAjaxSuccess,
		complete: _defAjaxFormComplete,
		dataType: 'xml',
		semantic: false //true if form contains type=image
    }, options || {});
    if(o.app && o.app.appname && o.app.pid>0) o.app=o.app.pid; //fix if app object was passed instead of PID
    if(o.wnd && o.wnd.constructor==_uWnd) o.wnd=o.wnd.idx; //fix if window object was passed instead of IDX
    if(!o.data)o.data={};
    if(o.app>0 && !('_ai' in o.data)) o.data._ai=o.app;
    if(o.app>0 && _uApp.all[o.app] && _uApp.all[o.app]._admpasscook) o.data._apc=_uApp.all[o.app]._admpasscook;
    if(o.wnd>0 && !('_wi' in o.data)) o.data._wi=o.wnd;

    if(_hookAjaxError && !o.noerrorhook) {o.prev_error=o.error;o.error=_hookAjaxError;}
    o._formobj=f[0];
    if(o.app>0 && !o.nosuccesshook) {o.prev_success=o.success;o.success=_hookAjaxSuccess;}
    f.ajaxSubmit(o);
}


function includeJSfile(src,id){
if (id && document.getElementById(id)){return;}
var js = document.createElement('script');
js.setAttribute('type','text/javascript');
if(id) js.setAttribute('id',id);
js.setAttribute('src',src);
document.getElementsByTagName('head').item(0).appendChild(js);
}


var _entrRm={};
function _entrRem(bID,u,imgurl,text){
    if (!text){text='Are you sure?';}
    if (!_entrRm[bID] && confirm(text)){_entrRm[bID]=1;
	document.getElementById(bID).src=imgurl+'/img/fr/EmnAjax.gif';
	_uPostForm('',{url:u});
    }	
}


function _coloredTDs(r,c){
    var cl='';
    if (typeof(r)!='object'){r=document.getElementById(r);}
    if (typeof(document.getElementsByTagName)!='undefined'){cl=r.getElementsByTagName('td');}
    else if (typeof(r.cells)!='undefined') {cl=r.cells;}
    else {return false;}
    for (var i=0;i<cl.length;i++) {
	cl[i].className=c;
    }
}

function openLayerB(n,f,url,t,w,h,resize,anyVar2,grid,multypart,align){
    new _uWnd(n,t,w,h,{autosize: resize ? 1 : 0,modal: grid ? 1 : 0,align:align ? align : 'center'},{url:url,form:f,cache:1});
}

function _showOnTop(n,f){
	var z=_uWnd.getTopZ();
        if (f){
                document.getElementById(n).style.zIndex=z+1;
        }
        else {
                document.getElementById('outLayer'+n).style.zIndex=z+1;
        }
}

function encodeHtmlVal(s,quot) { //quot true to encode ' and " only!!! no & will be encoded (if input text is from innerHTML and must be inserted into html attribute)
        if(quot) return String(s).replace(/'/g,'&'+'#39;').replace(/"/g,'&'+'quot;'); //'
	return String(s).replace(/&/g,'&'+'amp;').replace(/'/g,'&'+'#39;').replace(/"/g,'&'+'quot;').replace(/</g,'&'+'lt;').replace(/>/g,'&'+'gt;'); //'
}

//recursively dump SIMPLE objects  (numbers, strings, bool, simple arrays, simple objects)
function dumpObject(o,depth,ex) {
	var tp=typeof o,s;
	if(arguments.length<2) depth=10;
	function hexencode(n,s) {
		var j,d=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'],v='';
		for(j=0;j<s;j++) {v=''+d[n%16]+v;n>>>=4;}
		return v;
	}
	if(tp=='object')
		if(!o) tp='null';
		else if (o.constructor==String) tp='string';
		else if (o.constructor==Number) tp='number';
		else if (o.constructor==Boolean) tp='boolean';
		else if (o.constructor==Array) tp='array';
	switch(tp) {
		case 'number': case 'boolean': case 'null': case 'undefined': return String(o);
		case 'string': 
			return '"'+o.replace(/([\\"])/g,"\\$1").
				replace(/\n/g,"\\n").
				replace(/([\x00-\x1f])/g,function(s,c){return '\\x'+hexencode(c.charCodeAt(0),2);}).
				replace(/([\u2028\u2029])/g,function(s,c){return '\\u'+hexencode(c.charCodeAt(0),4);})+'"';
		case 'array':
			if(depth<=0) return '[?]';
			s='';
			for(var i=0;i<o.length;i++) {
				if(i>0) s+=',';
				s+=dumpObject(o[i]);
			}
			return '['+s+']';
		case 'object':
			if(depth<=0) return '{?}';
			s='';
			for(var i in o) {
				if(ex && ex[i]) continue;
				if(s) s+=',';
				try {
				s+=dumpObject(i)+':'+dumpObject(o[i],depth-1);
				} catch(e) {s+=dumpObject(i)+':?';}
			}
			return '{'+s+'}';
	}
}

function _uHighlightA(parent,url,hlclass) {
	var ls=$(parent).find("a").get(),o=null,l=0;
	for(var j in ls) {
		if (ls[j].href && url.indexOf(ls[j].href)>=0) {
			if (!o || l<ls[j].href.length){
				o=ls[j]; 
				l=ls[j].href.length; 
			} 
		} 
	}
	if(o) $(o).addClass(hlclass);
}
function _uBuildMenu(id,ishoriz,hlurl,hlclass,alignclass,hidetm){
		var p,i,subs,m,al,t,it,f;
		p=$(id)[0];
		if(!p) return;
		hidetm=hidetm || 2000;
		f=function(e){_uMENU.hideallmenus();this.__umenu.show();};
		if($.browser.msie) p.style.zoom='1';
		subs=$(id + ">ul").children("li").children("ul");
		for(i=0;i<subs.length;i++) {
			m=_ubuild_submenus(subs[i]);
			al=it=subs[i].parentNode;
			if(!ishoriz && alignclass && (t=$(al).children("."+alignclass)[0]) )al=t;
			it.__umenu=new _uMENU('',{alignObj:al,align:ishoriz ? 'D' : (window._rtl ? 'L' : 'R')},{parentnode:p,hidetimer:hidetm},m);
			$(it).bind("mouseover",f);
			it.removeChild(subs[i]);
		}
		if(!hlurl || !hlclass) return;
		setTimeout("_uHighlightA($('"+id+"')[0],'"+hlurl+"','"+hlclass+"');",100);
	}

function _uReplaceMenu(id,ishoriz,hlurl,hlclass,removeclass){
		var p,m,mm;
		p=$(id)[0];
		if(!p) return;
		if($.browser.msie) p.style.zoom='1';
		mm=$(id).children("ul")[0];
		if(!mm) return;
		if(removeclass)$(mm).find("."+removeclass).remove();
		m=_ubuild_submenus(mm);
		mm.parentNode.__umenu=new _uMENU('',{},{width:'auto',horiz: ishoriz, statical:1,parentnode:p,noabs:1},m);
		mm.parentNode.removeChild(mm);
		if(!hlurl || !hlclass) return;
		setTimeout("_uHighlightA($('"+id+"')[0],'"+hlurl+"','"+hlclass+"');",100);
	}

		
function _ubuild_submenus(ul) {
		var ch=$(ul).children("li"),i,res=[],subul,m,ls;
		for(i=0;i<ch.length;i++) {
			subul=$(ch[i]).children("ul")[0];
			if(subul) {
				m=_ubuild_submenus(subul);
				subul.parentNode.removeChild(subul);
				ls=$(ch[i]).find("a").get();
				res[res.length]=[$(ch[i]).html(),m,ls.length>0 ? {action:'a'} : null];
			} else {
				ls=$(ch[i]).find("a").get();
				res[res.length]=[$(ch[i]).html(),ls.length>0 ? 'a' : ''];
			}
		}
		return res;
}

function _uColorBox(did,fid){
var hex_Red=new Array("00","33","66","99","CC","FF");
var hex_Green=new Array("00","33","66","99","CC","FF");
var hex_Blue=new Array("00","33","66","99","CC","FF");
var hex_Gray=new Array("909090","939393","969696","999999","9C9C9C","9F9F9F","C0C0C0","C3C3C3","C6C6C6","C9C9C9","CCCCCC","CFCFCF","F0F0F0","F3F3F3","F6F6F6","F9F9F9","FCFCFC","FFFFFF");
var hexred="00";var hexgreen="00";var hexblue="00";var hexgray="00";
var red=0;var green=0;var blue=0;
var x=0;var y=0;var z=0;
var xyz=0;
var ctable='<table border="0" cellpadding="0" cellspacing="1" bgcolor="#000000">';
while (y<6){
ctable+='<tr>';
var x=0;
var hexblue=hex_Blue[blue];
while (x<6){
var z=0;
var hexgreen=hex_Green[green];
while (z<6){
var hexred=hex_Red[red];
var hexadecimal=""+hexred+hexgreen+hexblue;
ctable+='<td style="width:8px;height:8px;cursor:pointer;" onclick="$(\'#'+did+'\').hide(); getElementById(\''+fid+'\').value=\''+hexadecimal+'\'" bgcolor="'+hexadecimal+'"></td>';
z++;red++;
if (red==6){red=0;}
}
x++;green++;
if (green==6){green=0;}
xyz++;
if (xyz==3){ctable+='</tr>'; xyz=0;}
}
y++; blue++
if (blue==6){blue=0;}
}
for (var i=0;i<hex_Gray.length;i++){
ctable+='<td style="width:8px;height:8px;cursor:pointer;" onclick="$(\'#'+did+'\').hide(); getElementById(\''+fid+'\').value=\''+hex_Gray[i]+'\'" bgcolor="'+hex_Gray[i]+'"></td>';
};
ctable+='</table>';
$('#'+did).html(ctable);
}


function _uButtonExt(frm){ // formID,  generate hidden input-image field for submit buttons
    return '<span style="visibility:hidden"><input type="image" src="/.s/img/1px.gif" style="width:1px" id="subm'+frm+'" /></span>';
}

function _uButton(frm,type,opts){ // formID, type['s','b','r'], options
	var props = $.extend({
        ext: 0, //if true for type=s then input=image is not created, it must be created somewhere inside the form by
	text:'Ok',
	content:'',
	style:0,		//0,1
	id: null //ID for internal A-tag
	},opts || {});

	var tp = {
		's':'onclick="if (this.dis)return; $(this).addClass(\'myBtnDis\'); this.dis=true; $(\'#subm'+frm+'\').click();"',
		'r':'onclick="document.getElementById(\''+frm+'\').reset();"'
	};
    var t = (tp[type]!='undefined') ? tp[type] : '';
	var s = (props.style==1) ? ['myBtnLeft','myBtnCenter','myBtnRight'] : ['myBtnLeftA','myBtnCenterA','myBtnRightA'];

	var hid = (type=='s' && !props.ext) ? '<input type="image" src="/.s/img/1px.gif" style="width:1px" id="subm'+frm+'" />' : '';
	var dis = (props.style==2) ? 'myBtnCont x-unselectable myBtnDis' : 'myBtnCont x-unselectable';

	var bt = '<table border="0" cellpadding="0" cellspacing="0" onmousedown="this.className=\'downBtn\'" onmouseover="this.className=\'overBtn\'" onmouseout="this.className=\'outBtn\'">'
+'<tr><td class="'+s[0]+'"><img border="0" src="/.s/img/1px.gif"></td>'
+'<td class="'+s[1]+'"><div class="'+dis+'" unselectable="on" '+t+' '+props.content+'><a '+(props.id ? 'id="'+props.id+'" ': '')+'href="javascript://" onclick="return false;">'+props.text+'</a></div></td>'
+'<td class="'+s[2]+'"><img border="0" src="/.s/img/1px.gif"></td>'
+'<td style="visibility:hidden;">'+hid+'</td></tr></table>'
	return bt;	
}

function _uButtonEn(id,enable) { //button id or object, enable  - whether to enable or disable
        var o=typeof(id)=='string' ? $("#"+id)[0] : id;
        if(!o)return;
        if(enable) {
            o.dis=false;
            $(o).removeClass('myBtnDis');
        } else {
            o.dis=true;
            $(o).addClass('myBtnDis');
        }
}
