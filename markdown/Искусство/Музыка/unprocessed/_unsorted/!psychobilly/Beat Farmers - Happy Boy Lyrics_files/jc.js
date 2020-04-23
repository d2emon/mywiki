var jc_bh = new Array( );
var jc_lt = null;
var jc_ext = null;
var jc_int = 0;
var jc_ext_interval = null;
var jc_recur_url = new Array( );
var jc_lastTimeBeaconed = 0;
var jc_currentFlipPosition = 'top';

function jc_va_init( ca, i0, ii, c, r )
{
//	alert( ca+' '+i0+' '+ii+' '+c+' '+r );

	if( 'false' != r )
	{
		jc_recur_url = r.split( '|__JC__|' );
		jc_ext =true;
	}

//	jc_bh = new Array( );
	jc_lt = null;
	jc_i_ca( ca, '' );
	jc_i_i( ii, i0 );
}

function jc_va_50( ca )
{
	jc_i_i( '', ca );
}

function jc_va_100( ca )
{
	jc_i_i( '', ca );
}

function jc_vc_init( vc, vci )
{
	jc_i( 'vc', vc, '' );

	if( vci )
	{
		var img = new Image( );
		img.src = vci;
		jc_bh.push( img );
	}
}

function jc_i( elem, value, click )
{
	var n = null;
	var n1 = null;

	if( '' != value && '' != value.replace(/^\s*|\s*$/g,'') )
	{
		if( 'ca' == elem || ( null == jc_ext && 'ca' != elem ) )
		{
			if( 'http' == value.substring( 0, 4 ) )
			{
				value = "<img border=\"0\" height=\"0px\" width=\"0px\" src=\""+value+"\" />";
			}

			if( '' != click && '' != click.replace(/^\s*|\s*$/g,'') )
			{
				value = '<a href="'+click+'" target="_blank">'+value+'</a>';
			}

			document.getElementById(elem).innerHTML = value ;
		}
		else
		{
			value = value.split('|__JC__|');

			for(var i=0; i < value.length; ++i)
			{
				var img = new Image( );
				img.src = value[i];
				jc_bh.push( img );
			}
		}
	}
}

function jc_e_i( time )
{
	if(time != jc_lastTimeBeaconed)
	{
		jc_lastTimeBeaconed = time;
		var value = '';

		for(var i=0; i < jc_recur_url.length; ++i)
		{
			value = jc_recur_url[i] + "&timerendered=" + time;
			//alert( 'recurring '+ value );
			var img = new Image( );
			img.src = value;
			jc_bh.push( img );
		}
	}
}

function jc_c_i( v )
{
	var t = parseInt(new Date().getTime().toString().substring(0, 10));
	//alert( 'recurring '+ value );
	v = unescape( v );
	v = v.replace( '[timestamp]', t ).replace( '%timestamp%', t );
//	alert( v );
	var img = new Image( );
	img.src = v;
	jc_bh.push( img );

}

function jc_i_ca( ca, c )
{
	return jc_i( 'ca', ca, c );
}

function jc_i_i( ii, i0 )
{
        var i = '';
        var internali = '';

	if( -1 < ii.indexOf( '|__JC__|' ) )
	{
		var b = ii.split( '|__JC__|' );
		ii = b.shift( );

		for( i = 0; i < b.length; i++ )
		{
			var img = new Image( );
			img.src = b[i];
			jc_bh.push( img );
		}
	}

	if( '' != ii && '' != ii.replace(/^\s*|\s*$/g,'') )
	{
		var separator = '?';

		if( -1 < ii.indexOf( '?' ) || -1 < ii.indexOf( '&' ) )
		{
			separator = '&';
		}

		internali = '<img border="0" height="0px" width="0px" src="'+ii+separator+'s=b&r='+Math.random()+'" /><img border="0" height="0px" width="0px" src="'+ii+separator+'s=p&r='+Math.random()+'" />';
	}

	if( -1 >= i0.indexOf( '|__JC__|' ) )
	{
		if( '' != i0 && '' != i0.replace(/^\s*|\s*$/g,'') )
		{
			var img = new Image( );
			r = Math.random( );
			i0 = i0.replace( '[randomnumber]', r ).replace( '%randomnumber%', r );
			img.src = i0;
			jc_bh.push( img );
//			internali = internali+'<img border="0" height="0px" width="0px" src="'+i0+'" />';
		}
	}
	else
	{
		i0 = i0.split('|__JC__|');

		for(var i=0; i < i0.length; ++i)
		{
			//alert( i0[i] );
			var img = new Image( );
			r = Math.random( );
			i0[i] = i0[i].replace( '[randomnumber]', r ).replace( '%randomnumber%', r );
			img.src = i0[i];
			jc_bh.push( img );
		}
	}

//	alert( internali );
	document.getElementById( 'ii' ).innerHTML = internali;
}


function jc_tm_ca( b )
{
	document.getElementById( 'ca' ).innerHTML = '';
	tmDisplayBanner(b, "ca", 300, 250);
}

function startAd( )
{
	getFlashMovie("JamboPlayer").onAdStart();
}

function endAd( ) 
{
	getFlashMovie("JamboPlayer").onAdEnd();
}

function getFlashMovie( movieName )
{
	var isIE = navigator.appName.indexOf("Microsoft") != -1;

	return (isIE) ? window[movieName] : document[movieName];
}

function trackAd()
{
    getFlashMovie("JamboPlayer").onAdTrack();
} 
