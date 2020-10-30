// JavaScript Document
function ShowOrHide(d1) {
      if (d1 != '') DoDiv(d1);
}
function DoDiv(id) {
      var item = null;
      if (document.getElementById) {
        item = document.getElementById(id);
      } else if (document.all){
        item = document.all[id];
      } else if (document.layers){
        item = document.layers[id];
      }
      if (!item) {
      }
      else if (item.style) {
        if (item.style.display == "none"){ item.style.display = ""; }
        else {item.style.display = "none"; }
      }else{ item.visibility = "show"; }
}
// Jamp Menu
function RS_jumpMenu(selObj){ //v3.0
  eval("parent.location='/MUSIC/ARTIST/"+selObj.options[selObj.selectedIndex].value+".html'");
}
// Pop-Up 
function show_win(width,height,s_url){
	var p_top=(window.screen.height-height)/2, p_left=(window.screen.width-width)/2;
	var imgnwin=window.open(s_url,"imgswin","resizable=yes,scrollbars=yes,toolbar=no,location=no,directoties=no,status=no,menubar=no,width="+width+",height="+height+",top="+p_top+",left="+p_left);
	imgnwin.focus();
}