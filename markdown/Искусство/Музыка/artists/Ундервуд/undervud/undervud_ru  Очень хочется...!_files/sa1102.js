function drawPixel() {

        var debug=0;
        var topHref='';
        var topRefer='';
        var parHref='';
        var parRefer='';
        var winHref='';
        var winRefer='';

        try {
            topHref=encodeURIComponent(top.location.href);
            topRefer=encodeURIComponent(top.document.referrer);
            //alert('top.location.href=' + topHref);
            //alert('top.document.referrer=' + topRefer);
        } catch(e) {
            if(debug) { alert('exception getting top properties' + e ) };
        }

        try {
            parHref=encodeURIComponent(parent.location.href);
            parRefer=encodeURIComponent(parent.document.referrer);
            //alert('parent.location.href=' + parHref);
            //alert('parent.document.referrer=' + parRefer);
        } catch(e) {
            if(debug) { alert('exception getting parent properties' + e); }
        }

        try {
            winHref=encodeURIComponent(window.location.href);
            winRefer=encodeURIComponent(window.document.referrer);
            //alert('window.location.href=' + winHref);
            //alert('window.document.referrer=' + winRefer);
        } catch(e) {
            if(debug) { alert('exception getting window properties' + e); }
        }

        hostname='map.media6degrees.com';
        //var rnd = Math.floor(Math.random()*99);
        //if ( rnd > 25 ) {
        //  hostname='map.media6degrees.com';
        //}

        var timestamp = Math.floor(Math.random()*99999999999);

        pix_url = 'http://'+ hostname + '/orbserv/aopix?pixId=1102&cb=' + timestamp + '&topHref=' + topHref + '&topRefer=' + topRefer + '&parHref=' + parHref + '&parRefer=' + parRefer +'&winHref=' + winHref + '&winRefer=' + winRefer ;

        if (debug) { alert("pix_url=" + pix_url) }

   img_src='<img width=1 height=1 src='+ pix_url +'>';
   if (debug) { alert("img_src=" + img_src) }

   document.write(img_src);

}

drawPixel();
