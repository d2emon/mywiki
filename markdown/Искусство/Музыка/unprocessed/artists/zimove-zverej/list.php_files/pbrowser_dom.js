sd="";l85=0;l86=null;l87=null;l88=null;l89=null;l90=0;l96=new Object();l0=cdd__showhide_delay;document.addEventListener("mousemove",l82,0);addEventListener("resize",cdd__hr,0);if((l1=cdd__activate_onclick))document.addEventListener("mousedown",l83,0);l84=0;l9=new Array("_background_color","_text_color","_font_family","_font_size","_font_style","_font_weight","_text_decoration","_border_style","_border_color","_background_image","_text_align");l94=new Array("background-color","color","font-family","font-size","font-style","font-weight","text-decoration","border-style","border-color","background-image","text-align");l92=new Array("top","right","bottom","left");l93=new Array("none");cts=navigator.platform;vq_ismac=0;if((cts)&&(cts.toLowerCase().indexOf("mac")>-1))vq_ismac=1;l39_loaded();;function l39_loaded(){l95=null;for(cm in l96){if(l95==null)l95=l96[cm];else l95 &=l96[cm];if(!l96[cm]){l97(cm+"");l96[cm]=1;}}if(!l95)setTimeout("l39_loaded()",200);};function cdd__hr(){for(cm in l96)l97(cm+"");};function l97(id){this.fdo=document.getElementById("cdditem"+id+"_menu");this.l3=id;if(id.indexOf("_")==-1)this.l3="_main";if((this.pelm=document.getElementById(this.fdo.getAttribute("cddid")))){this.l98=document.getElementById(this.pelm.getAttribute("cddid")+"_menu");tco=l78(this.pelm);this.addb=0;if(!this.l98.getAttribute("cddisroot"))this.addb=parseInt(this.l98.style.borderTopWidth);this.fdo.style.left=parseInt(this.pelm.getAttribute("cddx"))+this.pelm.offsetWidth+tco[0]+this.addb+"px";this.fdo.style.top=parseInt(this.pelm.getAttribute("cddy"))+this.pelm.offsetHeight+tco[1]+this.addb+"px";}this.j=0;while((this.fobj=document.getElementById("cdditem"+id+"_"+this.j))){this.nid=id+"_"+this.j;if((this.tico=document.getElementById("cdditem"+this.nid+"l35_container"))){eval("this.tcxy=new Array("+this.tico.getAttribute("cddxy")+")");if(this.l3=="_main"){this.ixy=l78(this.fobj);this.ix=this.ixy[0];this.iy=this.ixy[1];}else {this.ix=this.fobj.parentNode.offsetLeft+parseInt(this.fdo.style.paddingLeft);this.iy=this.fobj.parentNode.offsetTop+parseInt(this.fdo.style.paddingTop);}this.tico.style.top=this.iy+this.tcxy[1]+"px";this.tico.style.left=this.ix+this.fobj.offsetWidth+this.tcxy[0]+"px";}if(document.getElementById("cdditem"+this.nid+"_menu"))fdobj=new l97(this.nid,l2);this.j++;}};function create_menu(l12){l90=0;sd="";l2=new window["cdd_menu"+l12];generate_all_html(l2,l12,"","_main","cddisroot=1");document.write(sd);document.close();l96[l12]=0;};function l11(l2,is_h,index,id){if(id){if(!is_h){ttbs=l41(l2,"item_border_style",id,l41(l2,"menu_items_border_style",index));tav=0;if(ttbs!="none")tav+=parseInt(l41(l2,"item_border_width",id,l41(l2,"menu_items_border_width",index)))*2;tav+=get_padding(l2,id,index,1,1);return "width:"+(l41(l2,"item_width",id,l41(l2,"menu_items_width",index))-tav)+"px;";}else {ttbs=l41(l2,"menu_border_style",index);tav=0;if(ttbs!="none")tav+=parseInt(l41(l2,"menu_border_width",index))*2;tav+=get_padding(l2,index,null,0,1);ttbs=l41(l2,"item_border_style",id,l41(l2,"menu_items_border_style",index));if(ttbs!="none")tav+=parseInt(l41(l2,"item_border_width",id,l41(l2,"menu_items_border_width",index)))*2;tav+=get_padding(l2,id,index,1,1);return "width:"+(l41(l2,"menu_width",index)-tav)+"px;";}}else {if(!is_h){ttbs=l41(l2,"menu_border_style",index);tav=0;if(ttbs!="none")tav+=parseInt(l41(l2,"menu_border_width",index))*2;tav+=get_padding(l2,index,null,0,1);return "width:"+(l41(l2,"menu_width",index)-tav)+"px;";}else {qa=0;taw=0;tdw=l41(l2,"divider_width",index);if((l41(l2,"divider_border_style",index)!="none")&&(tdw))tdw+=(l41(l2,"divider_border_width",index)*2);tdex=index+"_";if(index=="_main")tdex="";while(l2["item"+(tnid=(tdex+qa))]){taw+=parseInt(l41(l2,"item_width",tnid,l41(l2,"menu_items_width",index)))+tdw;qa++;}if(l41(l2,"divider_caps",index))taw+=tdw;else taw-=tdw;return  "width:"+(taw)+"px;";}}};function generate_all_html(l2,l12,l13,index,is_root){this.child_id=new Object();if(window.cdd__default_cursor=="hand")this.dc="pointer";else this.dc="default";this.l14=l12;if(!is_root)this.l14=l12+"_"+index;this.l16=" cddesm=\""+l41(l2,"show_menu",index)+"\" cddehm=\""+l41(l2,"hide_menu",index)+"\"";this.l17=l41(l2,"menu_is_horizontal",index);if(is_root){sd+="<table uid="+l12+" border=0 cellspacing=0 cellpadding=0><tr><td>";sd+="<div l2id='"+index+"' cddish="+(this.l17+0)+" "+is_root+this.l16+" cddisitem=0 cddid='cdditem"+this.l14+"' id='cdditem"+l12+"_"+l13+"menu' style='z-index:"+(l90++)+";cursor:"+this.dc+";"+get_menu_styles(l2,"menu",index,l9,l94)+get_menu_styles(l2,"menu",index,l93,null,1)+l11(l2,this.l17,index)+get_padding(l2,index)+get_borders(l2,index)+"'>";}else sd+="<div l2id='"+index+"' cddish="+(this.l17+0)+" "+is_root+this.l16+" cddisitem=0 cddid='cdditem"+this.l14+"' id='cdditem"+l12+"_"+l13+"menu' style='z-index:"+(l90++)+";cursor:"+this.dc+";visibility:hidden;left:0;top:0;position:absolute;"+get_menu_styles(l2,"menu",index,l9,l94)+get_menu_styles(l2,"menu",index,l93,null,1)+l11(l2,this.l17,index)+get_padding(l2,index)+get_borders(l2,index)+"'>";staw="";staw="width='100%' ";sd+="<table "+staw+" border=0 cellspacing=0 cellpadding=0>";if(this.l17)sd+="<tr>";this.i=0;while(l2["item"+(this.id=l13+this.i)]){this.l3=l12+"_"+this.id;this.l4=l41(l2,"divider_caps",index);if((this.i==0)&& this.l4)l40(l2,l12,index,this.l17);this.l21=this.dc;this.l22="onclick=\"";this.l91="";if((this.l5=l2["click"+this.id])){this.l22+=this.l5+";";this.l21="hand";}if((this.l5=l2["url"+this.id])){this.l22+="window.open('"+get_l80_path(this.l5,l12)+"','"+l41(l2,"url_target",this.id,cdd__url_target)+"','"+l41(l2,"url_features",this.id,cdd__url_features)+"')";this.l21="hand";if(window.cdd__display_urls_in_status_bar)this.l91="cddstatus='"+this.l5+"'";if((this.l5=l2["status"+this.id]))this.l91="cddstatus='"+this.l5+"'";}this.l22+="\"";this.l6=l41(l2,"menu_xy",this.id);this.l6=this.l6.split(",");if(!this.l17)sd+="<tr>";sd+="<td>";this.udi=l11(l2,!this.l17,index,this.id,1);sd+="<div id='cdditem"+this.l3+"_hl' cddisroll=1 cddisitem=1 cddicobj='"+this.l3+"' "+this.l22+"  cddhl="+(!(!(l2["item"+this.id+"_0"]+l2["url"+this.id]+l2["click"+this.id]))+0)+" style='position:absolute;cursor:"+this.l21+";visibility:hidden;"+l26(l2,this.id,index,1,l9,l94)+l26(l2,this.id,index,1,l93,null,1)+this.udi+get_padding(l2,this.id,index,1)+get_borders(l2,this.id,index,1)+"'>";l33(l2,this.id,"rel",this.l3,1,l12);sd+=l41(l2,"item_roll",this.id,l2["item"+this.id])+"</div>";sd+="<div cddid='cdditem"+this.l14+"' cddx='"+this.l6[0]+"' cddy='"+this.l6[1]+"' "+this.l22+" l25="+l12+" cddisitem=1 "+this.l91+" id='cdditem"+this.l3+"' style='cursor:"+this.l21+"; "+l26(l2,this.id,index,0,l9,l94)+l26(l2,this.id,index,0,l93,null,1)+this.udi+get_padding(l2,this.id,index,1)+get_borders(l2,this.id,index,1)+"'>";l33(l2,this.id,"rel",this.l3,0,l12);sd+=l2["item"+this.id]+"</div>";l33(l2,this.id,"abs",this.l3,1,l12);sd+="</td>";if(!this.l17)sd+="</tr>";if(this.l4 ||(l2["item"+l13+(this.i+1)]))l40(l2,l12,index,this.l17);if(l2["item"+this.id+"_0"])this.child_id[this.id]=1;this.i++;}if(this.l17)sd+="</tr>";sd+="</table></div>";if(is_root)sd+="</td></tr></table>";if(!vq_ismac)l33(l2,index,"point",this.l14,0,l12);for(this.md in this.child_id)new generate_all_html(l2,l12,this.md+"_",this.md);};function get_menu_styles(l2,l27,id,t_params,t_names,is_effect){l31="";was_effect=0;if((is_effect)&&(id.toString()=="_main"))return "";for(q=0;q<t_params.length;q++){if((l5=l41(l2,l27+t_params[q],id))!=undefined){if(is_effect){was_effect=1;if(q==0)l31+="filter:";l31+=l5;}else {if(q==9)l31+=t_names[q]+":url("+get_l80_path(l5,l2.uid)+");";else l31+=t_names[q]+":"+l5+";";}}}if((is_effect)&&(was_effect))l31+=";";return l31;};function l26(l2,id,l7,l29,t_params,t_names,is_effect){l31="";l8="";was_effect=0;for(q=0;q<t_params.length;q++){if(l29)l8="_roll";while(1){if((l5=l41(l2,"item"+t_params[q]+l8,id,l41(l2,"menu_items"+t_params[q]+l8,l7)))!=undefined){if(is_effect){if(!was_effect)l31+="filter:";was_effect=1;l31+=l5;}else {if(q==9)l31+=t_names[q]+":url("+get_l80_path(l5,l2.uid)+");";else l31+=t_names[q]+":"+l5+";";}}else  if((l29)&&(l8=="_roll")){l8="";continue;}break;}}if((is_effect)&&(was_effect))l31+=";";return l31;};function get_borders(l2,index,l7,l28){if(l28)rval=l41(l2,"item_border_width",index,l41(l2,"menu_items_border_width",l7));else rval =l41(l2,"menu_border_width",index);if(!rval)rval=0;rt="";for(ra in l92)rt+="border-"+l92[ra]+"-width:"+rval+";";return rt;};function get_divider_borders(l2,index,is_h){hpart="height";if(is_h)hpart="width";rval=0;if(l41(l2,"divider_"+hpart,index))rval =l41(l2,"divider_border_width",index);if(!rval)rval=0;rt="";for(ra in l92)rt+="border-"+l92[ra]+"-width:"+rval+";";return rt;};function get_padding(l2,index,l7,l28,get_lr){if(l28)rval=l41(l2,"item_padding",index,l41(l2,"menu_items_padding",l7));else rval =l41(l2,"menu_padding",index);if(rval){eval("ra=new Array("+rval+")");rt="";if(ra.length){if(get_lr){return parseInt(ra[1])+parseInt(ra[3]);}else {for(ri in ra)rt+="padding-"+l92[ri]+":"+ra[ri]+";";}}return rt;}return "";};function l33(l2,id,l27,l3,roll,l12){if(((iid=l41(l2,"icon_"+l27,id))!=undefined)&&(iid>-1)){icipp=l37(l2,l27+"_icon_image_wh"+iid,"width="," height=","")+">";icwh=l37(l2,l27+"_icon_image_wh"+iid,"width:",";height:",";");icxy=l37(l2,l27+"_icon_image_xy"+iid,"left:",";top:",";");icstatic="<img src='"+get_l80_path(l2[l27+"_icon_image"+iid],l12)+"' "+icipp;if(roll)icroll="<img src='"+get_l80_path(l2[l27+"_icon_rollover"+iid],l12)+"' "+icipp;if(l27=="rel"){(roll)? sd+=icroll:sd+=icstatic;}else  if(l27=="abs"){sd+="<div id='cdditem"+l3+"l35_container' cddxy='"+l2["abs_icon_image_xy"+iid]+"' cddisitem=1 cddicobj='"+l3+"' style='position:absolute;"+icxy+"'>";sd+="<div id='cdditem"+l3+"l35' cddisroll=1 style='position:absolute;top:0;left:0;visibility:hidden;'>"+icroll+"</div>"+icstatic+"</div>";}else sd+="<div id='cdditem"+l3+"_pointer' cdd_br="+(l2["point_icon_image_br"+iid]+0)+" style='position:absolute;z-index:"+l90+";visibility:hidden;top:0;left:0;"+icwh+"'><div cddisitem=0 cddid='cdditem"+l3+"' style='position:absolute;"+icxy+"'>"+icstatic+"</div></div>";}};function l37(l2,l39,l,c,r){rval="";if((l38=l2[l39]))rval=l+l38.replace(",",c)+r;return rval;};function l40(l2,l12,hid,t_hor){p2=get_menu_styles(l2,"divider",hid,l9,l94)+get_divider_borders(l2,hid,t_hor)+"font-size:0px;";if(!(p3=l41(l2,"divider_html",hid)))p3="";if(t_hor){if((l5=l41(l2,"divider_width",hid)))sd+="<td height='100%'><table  border=0 cellspacing=0 cellpadding=0 height='100%' style='"+p2+"'><tr><td><div style='width:"+l5+";'>"+p3+"</div></td></tr></table></td>";}else {if((l5=l41(l2,"divider_height",hid)))sd+="<tr><td style=''><div style='"+p2+"height:"+l5+";'>"+p3+"</div></td></tr>";}};function l41(l2,l42,id,l43){if(l2[l42+id]!=undefined)return l2[l42+id];else  if(l2[l42]!=undefined)return l2[l42];else  if(l43!=undefined)return l43;else return undefined;};function l44(l45){return document.getElementById(l45.getAttribute("cddid")+"_menu");};function l46(l49,l47,l48){if(l49!=l47){if((this.l50=document.getElementById(l49.getAttribute("cddid"))))new l46(l44(this.l50),l47,l48);if((!l49.getAttribute("cddisroot"))&&(l49!=l48)&&(l49.style.visibility=="visible")){l49.style.visibility="hidden";if((abobj=document.getElementById(l49.getAttribute("cddid")+"l35")))abobj.style.visibility="hidden";eval(l49.getAttribute("cddehm"));}if(l49.getAttribute("menuhl")){document.getElementById(l49.getAttribute("menuhl")+"_hl").style.visibility="hidden";l49.removeAttribute("menuhl");}}};function l53(l54,top){this.l55=document.getElementById(l54.id+"_hl");if((this.l49=l44(l54)).getAttribute("menuhl")!=l54.id){if((l87)&&(l87.getAttribute("l25")!=l54.getAttribute("l25")))l46_hl(l44(l87));l46_hl(this.l49,top);if(top){l87=l54;if((l56=l54.getAttribute("cddstatus"))){window.status=l56;l85=1;}else l64();if((l88)&&(l88.id !=l87.getAttribute("cddid")+"_pointer"))l65();}if(parseInt(this.l55.getAttribute("cddhl")))this.l55.style.visibility="visible";this.l49.setAttribute("menuhl",l54.id);}if(!this.l49.getAttribute("cddisroot"))new l53(document.getElementById(this.l49.getAttribute("cddid")));};function l46_hl(l49,l39_forward){if(l49.getAttribute("menuhl")){if((l39_forward)&&(nobj=document.getElementById(l49.getAttribute("menuhl")+"_menu")))new l46_hl(nobj,l39_forward);document.getElementById(l49.getAttribute("menuhl")+"_hl").style.visibility="hidden";l49.removeAttribute("menuhl");}};function l83(e){l82(e,1);};function l82(e,click){clearTimeout(l89);l59=e.target;while(l59){if(l59.getAttribute){if((niq=l59.getAttribute("cddisitem"))){if(niq>0){if((sid=l59.getAttribute("cddicobj"))){l59=document.getElementById("cdditem"+sid);}l53(l59,1);l89=setTimeout("l71("+click+",document.getElementById('"+l59.id+"_menu'),l59,l44(l59))",100);}if((l60=document.getElementById(l59.getAttribute("cddid")+"_pointer"))){l49=l44(l59);l49=l44(l59);l61=l78(l49,1);l62=l78(l49);spt=document.body.scrollTop;spl=document.body.scrollLeft;if(parseInt(l49.getAttribute("cddish")))l66(l60,l49,e.clientX,l61[0],l62[0],l62[1],'left','top',spl,spt,'Width','Height');else l66(l60,l49,e.clientY,l61[1],l62[1],l62[0],'top','left',spt,spl,'Height','Width');if(l88!=l60)l65();l60.style.visibility="visible";l88=l60;}return;}}if(l59==document.getElementsByTagName("html")[0])break;l59=l59.parentNode;}l89=setTimeout("l71()",l0);if(l87)l46_hl(l44(l87));l65();l64();};function l64(){if(l85){window.status="";l85=0;}};function l65(l79){if(l88)l88.style.visibility="hidden";};function l66(l60,l49,cx,l61,l62,l63,s1,s2,l67,l68,l69,l70){l60.style[s1]=(cx-(l61-l62))-(parseInt(l60["offset"+l69]/2))+l67+"px";if(parseInt(l60.getAttribute("cdd_br")))l60.style[s2]=(l63+l49["offset"+l70])+"px";else l60.style[s2]=(l63-l60["offset"+l70])+"px";};function l71(click,l48,l72,call_menu){if((l1)&&(!click)&&(!l84))return;if(l86!=null)l46(l86,call_menu,l48);if((l48)&&(l48.style.visibility=="hidden")){eval(l48.getAttribute("cddesm"));l48.style.visibility="visible";l86=l48;l84=1;if((l54=document.getElementById(l72.id+"l35")))l54.style.visibility="visible";}l89=0;};function l78(l79,l80){rc=new Array(0,0);do{if((!l80)&&((!l79.getAttribute("cddisitem"))&&((l79.style.position=="absolute")||(l79.style.position=="relative"))))break;rc[0]+=l79.offsetLeft;rc[1]+=l79.offsetTop;}while((l79=l79.offsetParent))return rc;};function get_l80_path(fname,l12){if(fname.indexOf(':')>-1) return fname;else { if(window.cdd__is_live &&(riv=window["cdd__include_codebase"+l12]))return riv+fname;else return window["cdd__codebase"+l12]+fname;}}