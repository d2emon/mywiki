var f_cb_medrect1_served = false;
var f_need_cb = false;

function reload_div(flash_id) {
	;
}

function yume_backfill_banner(banner_div_id, banner_frame_id, imu_type) {
	return false;
}

function yume_serve_cb_frame(banner_div_id, banner_frame_id, frame_src_url) {
	var rc=0;
	var cb_width = document.getElementById(banner_div_id).style.width;
	var cb_height =document.getElementById(banner_div_id).style.height;
	//var y_c_frame = document.getElementById(banner_frame_id);
	try {
		document.getElementById(banner_div_id).innerHTML = "<iframe src='"+frame_src_url+"'height='"+cb_height+"'width='"+cb_width+"' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' topmargin='0' leftmargin='0' style='overflow:hidden'></iframe>";
		rc = 1;
	} catch(e) {}
	return rc;
}

function yume_serve_cb_image(banner_div_id, banner_frame_id, frame_img, frame_link) {
	var rc=0;
	var cb_width = document.getElementById(banner_div_id).style.width;
	var cb_height =document.getElementById(banner_div_id).style.height;
	try {
		document.getElementById(banner_div_id).innerHTML = "<a href='"+frame_link+"' target='_blank'><img src='"+frame_img+"' border='0' width='"+cb_width+"' height='"+cb_height+"'></a>";
		rc = 1;
	} catch(e) {}
	return rc;
}

// return 1 if img_url is a SWF, 0 otherwise
function yume_img_is_swf(img_url) {
        var ix_getElement = img_url.indexOf("/getElement?", 0);
        var ix_extSWF = img_url.indexOf("ext=.swf", 0);
        var rc=0;

        if (ix_getElement > 0 && ix_extSWF > ix_getElement) {
                rc=1;
        }
        return rc;
}

function yume_flash_callback(command, arg1, arg2, arg3){
//        alert("yume_flash_callback:" + command +"," + arg1 + "," + arg2 + "," + arg3);
        if (command == 'companionbanner/iframe'
          || (command == 'companionbanner/image' && yume_img_is_swf(arg1) > 0) // serve SWFs as an Iframe
           )
        {
		//alert("yume_flash_callback:" + command +"," + arg1 + "," + arg2 + "," + arg3);
		if (arg3=="cb1" || arg3=="cb_medrect1") {
			if (yume_serve_cb_frame("ca", "jc_ca_frame", arg1) > 0) {
				f_cb_medrect1_served = true;
			}
		}
	} else if (command == 'companionbanner/image') { 
		//alert("yume_flash_callback:" + command +"," + arg1 + "," + arg2 + "," + arg3);
		if (arg3=="cb1" || arg3=="cb_medrect1") {
			if (yume_serve_cb_image("ca", "jc_ca_frame", arg1, arg2) > 0) {
				f_cb_medrect1_served = true;
			}
		}
	} else
	if(command == "yume_preroll_start" || command == "yume_postroll_start" || command == "yume_midroll_start") {
	  f_need_cb = true;
	  //alert("yume_flash_callback:" + command +"," + arg1 + "," + arg2);
        } else
	if(command == "yume_preroll_end" || command == "yume_postroll_end" || command == "yume_midroll_end") {
	  f_need_cb = false;
	  //alert("yume_flash_callback:" + command +"," + arg1 + "," + arg2);
        } else
	if(command == "yume_ad_end") {
	  f_cb_medrect1_served = false;
	  //alert("yume_flash_callback:" + command +"," + arg1 + "," + arg2);
        } else
	if( (command == "yume_ad_start" && f_need_cb == true)
	  ||(command == "yume_end" && arg1 == "0" && f_need_cb == true) ) {
		//alert("check for backfill");
		if (f_cb_medrect1_served == false) {
			if (yume_backfill_banner("ca", "jc_ca_frame", "medrect") > 0) {
				f_cb_medrect1_served = true;
			}
		}
        }
}

function playContent(str)
{
	;
}

function syncRoadBlock( s )
{
	a = s.split(';');

	if (a.length>0)
	{
		for (x=0; x<=a.length-1; x++)
		{
			if (a[x].indexOf('sz=') == 0)
			{
				size = a[x].substring(3);
				dims = size.split('x');
				height = dims[1];
				width = dims[0];
				loadRBs( s, height, width );
			}
		}
	}
}

function loadRBs( s, h, w )
{
	jc_i_ca( "<iframe src=\""+s+"\" width=\""+w+"\" height=\""+h+"\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" frameborder=\"0\"></iframe>", '' );
}
