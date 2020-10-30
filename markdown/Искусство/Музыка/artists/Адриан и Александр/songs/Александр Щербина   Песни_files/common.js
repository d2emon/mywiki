
var scrsize = false;
browser_name = navigator.appName;
browser_version = parseFloat(navigator.appVersion);

if (browser_name == "Netscape" && browser_version >= 3.0) { roll = 'true'; }
else if (browser_name == "Microsoft Internet Explorer" && browser_version >= 3.0) { roll = 'true'; }
else { roll = 'false'; }


if(roll)
 {im0=new Image();
  im1=new Image();
  im2=new Image();
  im3=new Image();
  im4=new Image();
  im5=new Image();
  im6=new Image();

  im7=new Image();
  im8=new Image();
  im9=new Image();
  im10=new Image();
  im11=new Image();
  im12=new Image();
  im13=new Image();

  im0.src="/images/btnews.gif";
  im1.src="/images/btsongs.gif";
  im2.src="/images/btdisk.gif";
  im3.src="/images/btgallery.gif";
  im4.src="/images/btguest.gif";
  im5.src="/images/btprose.gif";
  im6.src="/images/btgags.gif";

  im7.src="/images/btnews1.gif";
  im8.src="/images/btsongs1.gif";
  im9.src="/images/btdisk1.gif";
  im10.src="/images/btgallery1.gif";
  im11.src="/images/btguest1.gif";
  im12.src="/images/btprose1.gif";
  im13.src="/images/btgags1.gif";


 }

var curr = "off";
function rollButtonOn(button)
{
	if (CurrentItem != '') document.images[CurrentItem].src = '/images/'+CurrentItem+'1.gif';
	curr="on";
	document.images[button].src = '/images/'+button+'.gif';

}

function rollButtonOff(button)
{
	curr = "off";
	document.images[button].src = '/images/'+button+'1.gif';

	if (CurrentItem != '') setTimeout("if(curr!='on') document.images[CurrentItem].src = '/images/'+CurrentItem+'.gif'",744);
}


// ------- Screen Sizer ----------

var height=0;
var width=0;

if (self.screen) {     // for NN4 and IE4
        width = screen.width
        height = screen.height
}
else if (self.java) {   // for NN3 with enabled Java
       var jkit = java.awt.Toolkit.getDefaultToolkit();
       var scrsize = jkit.getScreenSize();
       width = scrsize.width;
       height = scrsize.height;
}


if (width > 800 && height > 600) {
  scrsize = "true";
}

// ------- Screen Sizer ----------

// ------- New window ----------
function openWin(url,toolbar,location,directories,status,menubar,scrollbars,resizable,width,height)
{
	features = "toolbar="+toolbar+", location="+location+",directories="+directories+",status="+status+",menubar="+menubar+",scrollbars="+scrollbars+",resizable="+resizable+",width="+width+",height="+height;
	window.open(url,"blank",features);

}