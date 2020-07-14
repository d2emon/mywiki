var ua, topOffset = 150, subOffset=topOffset+14, toolMenuShow=true, shiftMinimize=0, currentPopup="";

function doLoad() {
switch(navigator.appName){
case "Netscape": ua="NN"; break;
case "Microsoft Internet Explorer": ua="IE"; break;
default: ua=""; return;
}
setInterval("moveMenu()",30);
}
//2101560
function moveMenu() {
var shiftPage, dif;
if(ua=="IE") shiftPage=document.body.scrollTop
else if(ua=="NN") shiftPage=window.pageYOffset;
else return;
if(shiftPage != shiftMinimize){
dif=(shiftPage-shiftMinimize)>>2;
if(dif) shiftMinimize+=dif; else shiftMinimize=shiftPage;
if(ua=="IE") document.all.Minimize.style.pixelTop=shiftMinimize+topOffset;
if(ua=="NN") document.layers.Minimize.y=shiftMinimize+topOffset;
}}











