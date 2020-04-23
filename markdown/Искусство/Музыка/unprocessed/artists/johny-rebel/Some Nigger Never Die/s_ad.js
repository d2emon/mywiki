boonity={site:null,options:{},dyn_color:{},deployed_host:"payload.yieldbuild.com",get_url:function(_1){
if(boonity.is_deployed()&&(boonity.site==1491||boonity.site==1686)){
boonity.deployed_host="newpayload.yieldbuild.com";
}
var _2="http://"+boonity.host()+"/ad/inline"+"?url="+boonity.clean_uri_field(window.location)+"&is_framed="+boonity.in_cross_iframe()+"&site_id="+boonity.site+"&loc="+_1+"&rnd="+boonity.rand_int()+"&layout="+yieldbuild_layout+boonity.url_options();
if(document.referrer){
_2+="&referrer="+boonity.clean_uri_field(document.referrer);
}
if(this.options.dynamic_bg){
_2+="&dyn_bg="+this.options.dynamic_bg;
}
if(this.options.dynamic_ti){
_2+="&dyn_ti="+this.options.dynamic_ti;
}
if(this.options.dynamic_txt){
_2+="&dyn_txt="+this.options.dynamic_txt;
}
if(this.options.force_baseline=="true"){
_2+="&force_baseline="+this.options.force_baseline;
}
return _2;
},get_iframe_url:function(_3){
var _4=boonity.get_canon("boonity_ads");
if(_4[_3]&&_4[_3].length>0){
if(boonity.site==5&&_3!="sub_rate_it"){
boonity.options.google_channels=(boonity.is_refresh)?"9638158787":"0384787205";
}
return "http://"+boonity.host()+"/ad/iframe?"+"ag_id="+boonity.get_canon("ag_id")+"&site_id="+boonity.site+"&location="+_3+"&ft="+_4[_3+"_ft"]+boonity.url_options();
}
return "http://hubpages.com/i/s.gif";
},find_element:function(_5,_6){
while(_5.parentNode&&(!_5.tagName||!_6(_5))){
_5=_5.parentNode;
}
return _5;
},set_canon_ref:function(){
if(window.boonity_canon){
return;
}
if(parent==window){
window.boonity_canon={};
}else{
try{
if(!parent.boonity_canon){
parent.boonity_canon={};
}
window.boonity_canon=parent.boonity_canon;
}
catch(e){
}
if(!window.boonity_canon){
window.boonity_canon={};
}
}
},get_canon:function(_7){
boonity.set_canon_ref();
if(typeof window.boonity_canon[_7]!="undefined"){
return window.boonity_canon[_7];
}
return false;
},set_canon:function(_8,_9){
boonity.set_canon_ref();
window.boonity_canon[_8]=_9;
},merge_canon:function(_a,_b){
var _c=boonity.get_canon(_a);
if(!_c){
boonity.set_canon(_a,_b);
}else{
for(var _d in _b){
_c[_d]=_b[_d];
}
}
},get_tracker:function(){
var tr=boonity.get_canon("boonity_tracker");
if(tr&&document.referrer){
tr+="&referrer="+boonity.clean_uri_field(document.referrer);
}
return tr;
},get_ads:function(){
return this.get_canon("boonity_ads");
},get_opt:function(_f){
if(boonity.options[_f]){
return "&"+_f+"="+boonity.options[_f];
}
return "";
},no_log:function(){
return boonity.get_canon("boonity_no_log");
},url_options:function(){
var _10="";
_10+=boonity.get_opt("cj_pid");
_10+=boonity.get_opt("google_adclient");
_10+=boonity.get_opt("google_channels");
_10+=boonity.get_opt("pubcenter_channels");
_10+=boonity.get_opt("microsoft_pg");
if(_10.length>0){
_10+="&options=1";
}
return _10;
},fetch_ads:function(_11){
boonity.set_canon("started_fetch",window);
if(!boonity.options.dynamic_bg){
var _12=null;
var _13=boonity.last_dom_node();
var _14=boonity.find_element(_13,function(ele){
var bg=boonity.get_current_style(ele).backgroundColor;
return (bg&&bg!="transparent");
});
if(_14){
_12=boonity.get_current_style(_14).backgroundColor;
if(_12){
_12=_12.replace(/\#/,"");
boonity.options.dynamic_bg=_12;
}
}
}
if(!boonity.options.dynamic_ti){
this.options.dynamic_ti=boonity.top_color("a","00f");
}
if(!boonity.options.dynamic_txt){
this.options.dynamic_ti=boonity.top_color("p","000");
}
if(!boonity.get_ads()){
document.write("<sc"+"ri"+"pt src=\""+boonity.get_url(_11)+"\" type=\"text/javascript\"> </sc"+"ript>");
}
},top_color:function(_17,_18){
var _19=_18;
try{
var _1a={};
var _1b=0;
var _1c=document.getElementsByTagName(_17);
for(i=0;i<_1c.length;i++){
var _1d=boonity.get_current_style(_1c[i]).color;
if(!_1a[_1d]){
_1a[_1d]=1;
}else{
_1a[_1d]+=1;
}
if(_1b<_1a[_1d]){
_19=_1d;
_1b=_1a[_1d];
}
}
_19=_19.replace(/\#/,"");
}
catch(e){
}
return _19;
},get_current_style:function(ele){
var _1f=false;
if(ele&&ele.nodeType!=9){
if(document.defaultView){
_1f=document.defaultView.getComputedStyle(ele,"");
}else{
_1f=ele.currentStyle;
}
}
return _1f;
},last_dom_node:function(){
var pos;
pos=document;
while(pos.lastChild&&pos.lastChild.nodeType==1){
pos=pos.lastChild;
}
return pos;
},refetch_ads:function(){
var _21=document.getElementsByTagName("head")[0];
if(!_21){
_21=document.body;
}
script=document.createElement("script");
script.id="boonity_refetch_"+boonity.rand_int();
script.type="text/javascript";
script.src=boonity.get_url("");
_21.appendChild(script);
},refresh:function(){
if(boonity.options.ajax){
boonity.is_refresh=true;
boonity.refetch_ads();
}
},refresh_iframes:function(){
for(i=0;i<boonity_iframes.length;i++){
dyn_bg_color=boonity.get_current_style(_22).backgroundColor;
var _23=boonity.last_dom_node();
var _22=boonity.find_element(_23,function(ele){
var bg=boonity.get_current_style(ele).backgroundColor;
return (bg&&bg!="transparent");
});
if(_22){
dyn_bg_color=boonity.get_current_style(_22).backgroundColor;
if(dyn_bg_color){
dyn_bg_color=dyn_bg_color.replace(/\#/,"");
boonity.options.dynamic_bg="Ti-"+dyn_bg_color;
}
}
}
if(!boonity.get_ads()){
document.write("<sc"+"ri"+"pt src=\""+boonity.get_url(location)+"\" type=\"text/javascript\"> </sc"+"ript>");
}
},get_current_style:function(ele){
var _27=false;
if(ele&&ele.nodeType!=9){
if(document.defaultView){
_27=document.defaultView.getComputedStyle(ele,"");
}else{
_27=ele.currentStyle;
}
}
return _27;
},last_dom_node:function(){
var pos;
pos=document;
while(pos.lastChild&&pos.lastChild.nodeType==1){
pos=pos.lastChild;
}
return pos;
},refetch_ads:function(){
var _29=document.getElementsByTagName("head")[0];
if(!_29){
_29=document.body;
}
script=document.createElement("script");
script.id="boonity_refetch_"+boonity.rand_int();
script.type="text/javascript";
script.src=boonity.get_url("");
_29.appendChild(script);
},refresh:function(){
if(boonity.options.ajax){
boonity.is_refresh=true;
boonity.refetch_ads();
}
},refresh_iframes:function(){
for(i=0;i<boonity_iframes.length;i++){
var _2a=document.getElementById(boonity_iframes[i][0]);
if(_2a){
var _2b=boonity_iframes[i][1];
_2a.src=boonity.get_iframe_url(_2b);
_2a.width=local_ads[_2b+"_width"];
_2a.height=local_ads[_2b+"_height"];
}
}
var _2c="http://"+boonity.evhost()+"/log/event/"+boonity.site+"/"+boonity.get_canon("boonity_token")+"/"+boonity.get_canon("ag_id")+".gif";
boonity.assure_fimg(_2c);
},render_ad:function(){
if(!boonity.get_ads()){
var _2d=boonity.get_canon("started_fetch");
if(_2d&&_2d!=window){
setTimeout("window.location.reload();",1000);
}else{
boonity.fetch_ads(boonity_loc);
}
return;
}
var _2e=boonity.get_ads();
var _2f=_2e[boonity_loc];
if(boonity.options.ajax){
if(boonity.is_refresh){
boonity.refresh_iframes();
}else{
boonity.render_iframe();
}
}else{
if(_2f&&_2f.length>0){
document.write(_2f);
boonity.render_quantcast();
boonity.reveal_wrapper(boonity_loc);
}else{
if(_2f==null){
var url="http://"+boonity.host()+"/refill/refill?"+"url="+boonity.clean_uri_field(window.location)+"&site_id="+boonity.site+"&location="+boonity_loc+"&layout="+yieldbuild_layout+"&inline=true";
}
}
}
boonity.mark_ad_rendered(boonity_loc);
boonity.render_site_info_iframe(boonity_loc);
if(typeof yieldbuild_refill!="undefined"){
if(top){
if(top.postMessage){
top.postMessage("YB!"+yieldbuild_refill,"*");
}
}
}
},mark_ad_rendered:function(_31){
var _32=boonity.get_ads();
_32[_31+"_shown"]=true;
var _33=0;
var _34=0;
for(var key in _32){
if(key.search(/_loc_id$/)!=-1){
_34++;
}
if(key.search(/_shown$/)!=-1){
_33++;
}
}
if(_33==_34){
}
},render_tracker:function(){
var _36=boonity.get_tracker();
if(_36&&!boonity.no_log()){
boonity.assure_fimg("http://"+boonity.evhost()+boonity.update_tracker_with_actives(_36));
boonity.set_canon("boonity_tracker",false);
}
},render_quantcast:function(){
if(!boonity.get_canon("boonity_rendered_quantcast")){
_qoptions={qacct:"p-40hb1Sup4Jk_U"};
document.write("<"+"script type=\"text/javascript\" src=\"http://edge.quantserve.com/quant.js\" "+">"+"</"+"script"+">");
boonity.set_canon("boonity_rendered_quantcast",1);
}
},split_tracker:function(_37){
return _37.match(/^(.*locs=c-)([^&]+)(\&?.*)$/);
},update_tracker_with_actives:function(_38){
var m=boonity.split_tracker(_38);
if(!m){
return _38;
}
var _3a=boonity.get_ad_statuses();
var _3b=m[2].split("-");
var _3c=m[1];
for(var i=0;i<_3b.length;i++){
var _3e=_3b[i].split(":")[0]|0;
var _3f;
var _40=_3a[_3e];
if(typeof _40=="undefined"){
_3f="2";
}else{
if(_40){
_3f="1";
}else{
_3f="0";
}
}
for(var j=i+1;j<_3b.length;j++){
var _42=_3b[j].split(":")[0]|0;
if(_42==_3e){
_3f="4";
}
}
if(i>0){
_3c+="-";
}
_3c+=_3b[i]+":"+_3f;
}
if(m[3]){
_3c+=m[3];
}
return _3c;
},get_ad_statuses:function(){
var _43=new Array();
boonity.add_ad_statuses_for_document(window.parent.document,_43);
var _44;
try{
_44=parent.document.getElementsByTagName("iframe");
}
catch(e){
_44=window.document.getElementsByTagName("iframe");
}
for(var i=0;i<_44.length;i++){
var f=_44[i];
try{
var _47=f.contentWindow||f.contentDocument;
boonity.add_ad_statuses_for_document(_47.document,_43);
}
catch(e){
}
}
return _43;
},add_ad_statuses_for_document:function(doc,_49){
var _4a=doc.getElementsByTagName("div");
for(var i=0;i<_4a.length;i++){
var d=_4a[i];
var m=d.id.match(/boonity_([0-9a-z_]+)/);
if(m){
var _4e=m[1];
var _4f=boonity.div_has_ad(d);
var _50=boonity.get_ads()[_4e+"_loc_id"];
if(_50){
_49[_50]=_4f;
}
}
}
return _49;
},div_has_ad:function(obj){
if((obj.nodeName=="IMG"||obj.nodeName=="IFRAME"||obj.nodeName=="OBJECT"||obj.nodeName=="EMBED")&&obj.height&&obj.height>1){
return true;
}
if(obj.nodeName=="SCRIPT"){
var sib=obj.nextSibling;
if(!sib){
sib=obj.parentNode.nextSibling;
}
if(sib){
if(boonity.div_has_ad(sib)){
return true;
}
}
}
if(obj.hasChildNodes()){
for(var i=0;i<obj.childNodes.length;i++){
var _54=obj.childNodes[i];
if(boonity.div_has_ad(_54)){
return true;
}
}
}
return false;
},render_site_info_iframe:function(_55){
if(window.location.search.search(/boonity_site_info_scrape=1/)!=-1){
document.write("<div id=\"boonity_"+_55+"\"><iframe src=\"http://www.google.com/\" width=\"120\" height=\"3\" border=\"0\" frameborder=\"0\">&nbsp;</iframe></div>");
}
},render_iframe:function(){
if(boonity_loc&&boonity.get_canon("ag_id")){
var _56="b_if_"+boonity_loc;
var _57=boonity.get_iframe_url(boonity_loc);
var _58="<if"+"r"+"ame src=\""+_57+"\" id=\""+_56+"\" name=\""+_56+"\""+" width=\""+boonity.get_ads()[boonity_loc+"_width"]+"px\""+" height=\""+boonity.get_ads()[boonity_loc+"_height"]+"px\""+" frameborder=\"0\" scrolling=\"no\" hspace=\"0\" vspace=\"0\""+" marginheight=\"0\" marginwidth=\"0\"></iframe>";
document.write(_58);
boonity_iframes.push([_56,boonity_loc]);
}
},get_wrapper:function(_59){
var _5a=document.getElementById(_59+"_wrapper");
return (_5a)?_5a:false;
},reveal_wrapper:function(_5b){
var _5c=boonity.get_wrapper(_5b);
if(_5c){
_5c.style.display="";
}
},click_img_url:function(ele,_5e){
var _5f="http://"+boonity.evhost()+"/log/event/"+boonity.site+"/"+boonity.get_canon("boonity_token")+"/"+boonity.get_canon("ag_id")+".gif?"+"t_id="+_5e+"&category="+boonity.get_canon("boonity_category")+"&rnd="+boonity.rand_int();
if(ele){
if(ele.boon_loc_id){
_5f+="&locs="+ele.boon_loc_id;
}else{
if(ele.boon_loc){
_5f+="&locs="+ele.boon_loc;
}else{
if(ele.boon_rebased||ele.boon_not_supported_ad){
return false;
}else{
_5f+="&locs=[larr_tag_"+ele.tagName+"_id_"+ele.id+"_src_"+ele.src+ele.href+"]";
}
}
}
}
return _5f;
},log_feedback:function(ele,_61){
boonity.current_ad_element=null;
if(!boonity.logging_feedback&&!boonity.no_log()){
boonity.logging_feedback=true;
var _62=boonity.get_canon("click_count")||0;
if(_61){
_61+="&cc="+_62;
}else{
_61="cc="+_62;
}
if(_62<3){
if(ele.ft_id&&boonity.get_canon("ag_id")){
var _63=boonity.click_img_url(ele,ele.ft_id);
if(_63&&_61){
_63+="&"+_61;
}
boonity.assure_fimg(_63);
}
if(window.urchinTracker){
urchinTracker("/analytics/yieldbuild_click");
}
}
this.set_cookie_click_count(_62);
setTimeout("boonity.logging_feedback = false",4000);
}
return false;
},get_cookie_click_count:function(){
var _64=0;
try{
var _65="boon_ct=";
var ca=document.cookie.split(";");
for(var i=0;i<ca.length;i++){
var _68=ca[i];
while(_68.charAt(0)==" "){
_68=_68.substring(1,_68.length);
}
if(_68.indexOf(_65)==0){
_64=parseInt(_68.substring(_65.length,_68.length));
}
}
_64++;
}
catch(e){
}
boonity.set_canon("click_count",_64);
},set_cookie_click_count:function(_69){
var _6a=new Date();
_6a.setTime(_6a.getTime()+(10*60*1000));
document.cookie="boon_ct="+_69+"; expires="+_6a.toGMTString()+"; path=/";
boonity.set_canon("click_count",_69);
},attach_onclicks:function(_6b){
var els=document.getElementsByTagName(_6b);
for(var i=0,_6e=0,ele=null;ele=els[i];i++){
_6e=boonity.determine_ft(ele);
if(_6e){
boonity.set_onclick_logger(ele,_6e);
}
}
},set_onclick_logger:function(ele,_71){
ele.ft_id=_71;
boonity.add_event(ele,"click",function(){
boonity.log_feedback(ele,"ev=click");
});
if(ele.tagName=="IFRAME"){
boonity.add_event(ele,"focus",boonity.onfocus_handler);
ele.onmouseover=function(){
boonity.current_ad_element=ele;
};
ele.onblur=ele.onmouseout=function(){
boonity.current_ad_element=null;
};
}
},onfocus_handler:function(e){
e=e||window.event;
if(boonity.current_ad_element){
boonity.log_feedback(this,"ev=focus");
}else{
boonity.log_feedback(this,"ev=focus_no_ele");
}
return false;
},onunload_handler:function(e){
e=e||window.event;
if(boonity.current_ad_element){
boonity.log_feedback(boonity.current_ad_element,"ev=unload");
}
},keydown_handler:function(e){
e=e||window.event;
if(e&&e.keyCode&&(e.keyCode==166||e.keyCode==167)){
boonity.current_ad_element=false;
}
return false;
},message_handler:function(e){
if(e.data.indexOf("YB!")!=0){
return;
}
var _76=e.data.slice(3);
var _77=boonity.get_canon("boonity_tracker");
if(_77&&!boonity.no_log()){
var m=boonity.split_tracker(_77);
if(m&&m.length>2){
_77=m[1]+m[2]+"-"+_76;
if(m[3]){
_77+=m[3];
}
boonity.set_canon("boonity_tracker",_77);
}
}
},titanium_init:function(){
var _79;
try{
_79=parent.document.getElementsByTagName("iframe");
}
catch(e){
_79=window.document.getElementsByTagName("iframe");
}
try{
for(var i=0;i<_79.length;i++){
var f=_79[i];
if(!f.boon_rebased&&boonity.is_trackable_network(f)){
var div=f.previousSibling;
if(!div){
div=f.parentNode;
}
var _7d=4;
while(div){
if(div.nodeType==1&&div.id&&div.id.indexOf("boonity_")==0){
f.boon_loc=div.id.replace(/boonity_/,"");
f.boon_loc_id=boonity.get_ads()[f.boon_loc+"_loc_id"];
break;
}
var _7e=div.previousSibling;
if(!_7e&&_7d>0){
_7e=div.parentNode;
_7d--;
}
div=_7e;
}
f.boon_rebased=true;
}else{
f.boon_not_supported_ad=true;
}
}
}
catch(e){
}
},init:function(){
boonity.titanium_init();
boonity.set_canon_ref();
boonity.attach_onclicks("iframe");
boonity.attach_onclicks("a");
boonity.render_tracker();
boonity.get_cookie_click_count();
},hookem:function(){
if(window.hooked||boonity.no_log()){
return;
}
window.hooked=true;
boonity.add_event(window,"load",boonity.init);
boonity.current_ad_element=null;
boonity.add_event(window,"beforeunload",boonity.onunload_handler);
boonity.add_event(window,"unload",boonity.onunload_handler);
boonity.add_event(document,"keydown",boonity.keydown_handler);
boonity.add_event(window,"message",boonity.message_handler);
},host:function(){
return (boonity.is_deployed())?boonity.deployed_host:(boonity.options.js_server||boonity.deployed_host);
},evhost:function(){
return (boonity.is_deployed())?"ev.yieldbuild.com":(boonity.options.log_server||boonity.host());
},is_deployed:function(){
return ("1"=="1");
},_uVoid:function(){
return;
},assure_fimg:function(_7f){
var _80=new Image(1,1);
_80.src=_7f;
_80.onload=function(){
boonity._uVoid();
};
return _80;
},is_lu:function(url){
return (url.search(/\&format=(fp_al_lp|(.*)_0ads_al(_s)?)\&/)!=-1);
},is_adsense:function(url){
return ((url.indexOf("googlesyndication.com")>-1)||(url.indexOf("doubleclick.net")>-1));
},is_ypn:function(url){
return (url.indexOf("overture.com")>-1)&&(url.search(/ypn/)!=-1);
},is_pub_center:function(url){
return ((url.indexOf(".msn.com")>-1)||(url.indexOf("ac2.microsoft.com")>-1));
},is_ybc:function(url){
return (url.indexOf("ybc.yieldbuild.com")>-1);
},is_cj:function(url){
return (url.indexOf("jdoqocy.com")!=-1);
},is_pulse:function(url){
return (boonity.is_ybc(url)&&url.indexOf("feed=pulse360")>-1);
},is_chitika:function(ele,_89){
if(ele&&ele.src=="about:blank"&&ele.contentEditable){
if(boonity.is_chitika_present()){
if(ele.ft_id==9){
return true;
}
var pre=ele.previousSibling;
var nex=ele.nextSibling;
if(pre&&pre.nodeName=="SCRIPT"&&pre.src.indexOf("chitika.net")>-1){
return true;
}
if(nex&&nex.nodeName=="IFRAME"&&nex.src=="about:blank"){
return true;
}
if(_89){
boon_det_chitika=function(){
boon_det_chitika.retries-=1;
if(boonity.is_chitika(ele.previousSibling)){
var _8c=ele.previousSibling.ft_id=9;
boonity.set_onclick_logger(ele.previousSibling,_8c);
boonity.titanium_init();
}else{
if(boon_det_chitika.retries>0){
setTimeout(boon_det_chitika,500);
}
}
};
boon_det_chitika.retries=6;
setTimeout(boon_det_chitika,500);
}
}
}
return false;
},is_chitika_present:function(){
return (typeof window["ch_loaded"]!="undefined");
},is_trackable_network:function(ele){
var url=ele.src;
return boonity.is_adsense(url)||boonity.is_ypn(url)||boonity.is_pub_center(url)||boonity.is_chitika(ele)||boonity.is_pulse(url);
},extract_ft:function(url){
var m=url.match(/\&ft=([^&]*)/);
if(m&&m.length>1){
return [1];
}else{
return 0;
}
},determine_ft:function(ele){
if(ele.tagName=="IFRAME"){
var url=ele.src;
if(boonity.is_adsense(url)){
return boonity.is_lu(url)?5:2;
}else{
if(boonity.is_ypn(url)){
return 6;
}else{
if(boonity.is_pub_center(url)){
return 7;
}else{
if(boonity.is_chitika(ele,true)){
return 9;
}else{
if(boonity.is_pulse(url)){
return 20;
}else{
if(url.indexOf(boonity.host())>-1){
return boonity.extract_ft(url);
}
}
}
}
}
}
}else{
if(ele.tagName=="A"){
var url=ele.href;
if(boonity.is_cj(url)){
return 4;
}
}
}
return 0;
},add_event:function(obj,_94,fn){
if(obj.addEventListener){
obj.addEventListener(_94,fn,false);
}else{
if(obj.attachEvent){
obj["e"+_94+fn]=fn;
obj[_94+fn]=function(){
obj["e"+_94+fn](window.event);
};
obj.attachEvent("on"+_94,obj[_94+fn]);
}
}
},clean_uri_field:function(_96){
var _97=new String(_96);
var pat=/[^\w$\-_.+!^*'(),{}|~[\]<>#%";\/\\?:@&=]/g;
_97=_97.replace(pat,"");
return encodeURIComponent(_97);
},in_cross_iframe:function(){
var _99=false;
try{
_99=(window.top.location.host!=window.location.host);
}
catch(e){
var msg=e.toString();
if(typeof e.message!="undefined"){
msg=e.message;
}
_99=msg.indexOf("Permission denied")>=0;
}
return _99;
},rand_int:function(){
return Math.floor(Math.random()*10000);
}};
if(typeof yieldbuild_site!="undefined"){
boonity_site=yieldbuild_site;
}else{
if(typeof yieldbuild_client!="undefined"){
boonity_site=yieldbuild_client;
}else{
if(typeof boonity_client!="undefined"){
boonity_site=boonity_client;
}
}
}
if(typeof yieldbuild_loc!="undefined"){
boonity_loc=yieldbuild_loc;
}
if(typeof yieldbuild_options!="undefined"){
boonity_options=yieldbuild_options;
}
if(typeof boonity_iframes=="undefined"){
boonity_iframes=[];
}
if(typeof yieldbuild_layout=="undefined"){
yieldbuild_layout="";
}
if(boonity_site,boonity_loc){
boonity.site=boonity_site;
if(typeof boonity_options!="undefined"){
boonity.options=boonity_options;
}
if(typeof yieldbuild=="undefined"){
yieldbuild=boonity;
}
if(typeof yieldbuild_refill=="undefined"){
boonity.render_ad(boonity_loc);
}
}
if(!document.body.hooked){
boonity.hookem();
}

