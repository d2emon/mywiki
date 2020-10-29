// (c) 2003 by LWG
// image preloading

var img_a = new Array();

img_a[1] = new Array();
img_a[1][0] = new Image();
img_a[1][0].src = "../../images/who1.gif";
img_a[1][1] = new Image();
img_a[1][1].src = "../../images/who2.gif";

img_a[2] = new Array();
img_a[2][0] = new Image();
img_a[2][0].src = "../../images/news1.gif";
img_a[2][1] = new Image();
img_a[2][1].src = "../../images/news2.gif";

img_a[3] = new Array();
img_a[3][0] = new Image();
img_a[3][0].src = "../../images/lyr1.gif";
img_a[3][1] = new Image();
img_a[3][1].src = "../../images/lyr2.gif";

img_a[4] = new Array();
img_a[4][0] = new Image();
img_a[4][0].src = "../../images/song1.gif";
img_a[4][1] = new Image();
img_a[4][1].src = "../../images/song2.gif";

img_a[5] = new Array();
img_a[5][0] = new Image();
img_a[5][0].src = "../../images/mp31.gif";
img_a[5][1] = new Image();
img_a[5][1].src = "../../images/mp32.gif";

img_a[6] = new Array();
img_a[6][0] = new Image();
img_a[6][0].src = "../../images/art1.gif";
img_a[6][1] = new Image();
img_a[6][1].src = "../../images/art2.gif";

img_a[7] = new Array();
img_a[7][0] = new Image();
img_a[7][0].src = "../../images/bard1.gif";
img_a[7][1] = new Image();
img_a[7][1].src = "../../images/bard2.gif";

img_a[8] = new Array();
img_a[8][0] = new Image();
img_a[8][0].src = "../../images/links1.gif";
img_a[8][1] = new Image();
img_a[8][1].src = "../../images/links2.gif";

img_a[9] = new Array();
img_a[9][0] = new Image();
img_a[9][0].src = "../../images/sky1.gif";
img_a[9][1] = new Image();
img_a[9][1].src = "../../images/sky2.gif";

img_a[10] = new Array();
img_a[10][0] = new Image();
img_a[10][0].src = "../../images/gst1.gif";
img_a[10][1] = new Image();
img_a[10][1].src = "../../images/gst2.gif";

img_a[11] = new Array();
img_a[11][0] = new Image();
img_a[11][0].src = "../../images/photo1.gif";
img_a[11][1] = new Image();
img_a[11][1].src = "../../images/photo2.gif";

img_a[12] = new Array();
img_a[12][0] = new Image();
img_a[12][0].src = "../../images/proz1.gif";
img_a[12][1] = new Image();
img_a[12][1].src = "../../images/proz2.gif";

img_a[13] = new Array();
img_a[13][0] = new Image();
img_a[13][0].src = "../../images/fr1.gif";
img_a[13][1] = new Image();
img_a[13][1].src = "../../images/fr2.gif";

img_a[14] = new Array();
img_a[14][0] = new Image();
img_a[14][0].src = "../../images/project1.gif";
img_a[14][1] = new Image();
img_a[14][1].src = "../../images/project2.gif";

img_a[15] = new Array();
img_a[15][0] = new Image();
img_a[15][0].src = "../../images/diar1.gif";
img_a[15][1] = new Image();
img_a[15][1].src = "../../images/diar2.gif";

function ch(n, n2)
{
	if (document.images) document.images['m'+n].src = img_a[n][n2].src;
}
