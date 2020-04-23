(function() {
var _UDS_MSG_SEARCHER_IMAGE = ('\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430');

var _UDS_MSG_SEARCHER_WEB = ('\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442');

var _UDS_MSG_SEARCHER_BLOG = ('\u0411\u043b\u043e\u0433');

var _UDS_MSG_SEARCHER_VIDEO = ('\u0412\u0438\u0434\u0435\u043e');

var _UDS_MSG_SEARCHER_LOCAL = ('\u041c\u0435\u0441\u0442\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a');

var _UDS_MSG_SEARCHCONTROL_SAVE = ('\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c');

var _UDS_MSG_SEARCHCONTROL_KEEP = ('\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c');

var _UDS_MSG_SEARCHCONTROL_INCLUDE = ('\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c');

var _UDS_MSG_SEARCHCONTROL_COPY = ('\u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c');

var _UDS_MSG_SEARCHCONTROL_CLOSE = ('\u0437\u0430\u043a\u0440\u044b\u0442\u044c');

var _UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS = ('\u0420\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438');

var _UDS_MSG_SEARCHCONTROL_SEE_MORE = ('\u0435\u0449\u0435...');

var _UDS_MSG_SEARCHCONTROL_WATERMARK = ('\u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0438\u0437 Google');

var _UDS_MSG_SEARCHER_CONFIG_SET_LOCATION = ('\u0420\u0435\u0433\u0438\u043e\u043d \u043f\u043e\u0438\u0441\u043a\u0430');

var _UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP = ('\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043f\u043e\u0438\u0441\u043a \u0430\u0434\u0440\u0435\u0441\u043e\u0432');

var _UDS_MSG_SEARCHER_NEWS = ('\u041d\u043e\u0432\u043e\u0441\u0442\u0438');

function _UDS_MSG_MINUTES_AGO(AGE_MINUTES_AGO) {
  return ('' + AGE_MINUTES_AGO + ' \u043c\u0438\u043d. \u043d\u0430\u0437\u0430\u0434');
}

var _UDS_MSG_ONE_HOUR_AGO = ('1 \u0447\u0430\u0441 \u043d\u0430\u0437\u0430\u0434');

function _UDS_MSG_HOURS_AGO(AGE_HOURS_AGO) {
  return ('' + AGE_HOURS_AGO + ' \u0447\u0430\u0441. \u043d\u0430\u0437\u0430\u0434');
}

function _UDS_MSG_NEWS_ALL_N_RELATED(NUMBER) {
  return ('\u043f\u043e\u0445\u043e\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438: ' + NUMBER);
}

var _UDS_MSG_NEWS_RELATED = ('\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0441\u0442\u0430\u0442\u044c\u0438');

var _UDS_MSG_BRANDING_STRING = ('\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 Google');

var _UDS_MSG_SORT_BY_DATE = ('\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u043f\u043e \u0434\u0430\u0442\u0435');

var _UDS_MSG_MONTH_ABBR_JAN = ('\u044f\u043d\u0432');

var _UDS_MSG_MONTH_ABBR_FEB = ('\u0444\u0435\u0432');

var _UDS_MSG_MONTH_ABBR_MAR = ('\u043c\u0430\u0440');

var _UDS_MSG_MONTH_ABBR_APR = ('\u0430\u043f\u0440');

var _UDS_MSG_MONTH_ABBR_MAY = ('\u043c\u0430\u0439');

var _UDS_MSG_MONTH_ABBR_JUN = ('\u0438\u044e\u043d');

var _UDS_MSG_MONTH_ABBR_JUL = ('\u0438\u044e\u043b');

var _UDS_MSG_MONTH_ABBR_AUG = ('\u0430\u0432\u0433');

var _UDS_MSG_MONTH_ABBR_SEP = ('\u0441\u0435\u043d\u0442');

var _UDS_MSG_MONTH_ABBR_OCT = ('\u043e\u043a\u0442');

var _UDS_MSG_MONTH_ABBR_NOV = ('\u043d\u043e\u044f\u0431');

var _UDS_MSG_MONTH_ABBR_DEC = ('\u0434\u0435\u043a');

var _UDS_MSG_DIRECTIONS = ('\u043c\u0430\u0440\u0448\u0440\u0443\u0442\u044b \u043f\u0440\u043e\u0435\u0437\u0434\u0430');

var _UDS_MSG_CLEAR_RESULTS = ('\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b');

var _UDS_MSG_SHOW_ONE_RESULT = ('\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442');

var _UDS_MSG_SHOW_MORE_RESULTS = ('\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b');

var _UDS_MSG_SHOW_ALL_RESULTS = ('\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b');

var _UDS_MSG_SETTINGS = ('\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438');

var _UDS_MSG_SEARCH = ('\u043f\u043e\u0438\u0441\u043a');

var _UDS_MSG_SEARCH_UC = ('\u041f\u043e\u0438\u0441\u043a');

var _UDS_MSG_POWERED_BY = ('\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f');

function _UDS_MSG_LOCAL_ATTRIBUTION(LOCAL_RESULTS_PROVIDER) {
  return ('\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u043e \u0431\u0438\u0437\u043d\u0435\u0441\u0430\u0445:  ' + LOCAL_RESULTS_PROVIDER);
}

var _UDS_MSG_SEARCHER_BOOK = ('\u041a\u043d\u0438\u0433\u0438');

function _UDS_MSG_FOUND_ON_PAGE(FOUND_ON_PAGE) {
  return ('\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 ' + FOUND_ON_PAGE);
}

function _UDS_MSG_TOTAL_PAGE_COUNT(PAGE_COUNT) {
  return ('' + PAGE_COUNT + ' \u0441\u0442\u0440.');
}

var _UDS_MSG_SEARCHER_BY = ('\u0410\u0432\u0442\u043e\u0440:');

var _UDS_MSG_SEARCHER_CODE = ('\u041a\u043e\u0434');

var _UDS_MSG_UNKNOWN_LICENSE = ('\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u044f');

var _UDS_MSG_SEARCHER_GSA = ('Google Search Appliance');

var _UDS_MSG_SEARCHCONTROL_MORERESULTS = ('\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b');

var _UDS_MSG_SEARCHCONTROL_PREVIOUS = ('\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f');

var _UDS_MSG_SEARCHCONTROL_NEXT = ('\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f');

var _UDS_MSG_GET_DIRECTIONS = ('\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u044b \u043f\u0440\u043e\u0435\u0437\u0434\u0430');

var _UDS_MSG_GET_DIRECTIONS_TO_HERE = ('\u0421\u044e\u0434\u0430');

var _UDS_MSG_GET_DIRECTIONS_FROM_HERE = ('\u041e\u0442\u0441\u044e\u0434\u0430');

var _UDS_MSG_CLEAR_RESULTS_UC = ('\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b');

var _UDS_MSG_SEARCH_THE_MAP = ('\u043d\u0430\u0439\u0442\u0438 \u043d\u0430 \u043a\u0430\u0440\u0442\u0435');

var _UDS_MSG_SCROLL_THROUGH_RESULTS = ('\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b');

var _UDS_MSG_EDIT_TAGS = ('\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0442\u0435\u0433\u0438');

var _UDS_MSG_TAG_THIS_SEARCH = ('\u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u043f\u043e\u0438\u0441\u043a');

var _UDS_MSG_SEARCH_STRING = ('\u043d\u0430\u0439\u0442\u0438 \u0446\u0435\u043f\u043e\u0447\u043a\u0443');

var _UDS_MSG_OPTIONAL_LABEL = ('\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u044f\u0440\u043b\u044b\u043a');

var _UDS_MSG_DELETE = ('\u0443\u0434\u0430\u043b\u0438\u0442\u044c');

var _UDS_MSG_DELETED = ('\u0443\u0434\u0430\u043b\u0435\u043d\u043e');

var _UDS_MSG_CANCEL = ('\u043e\u0442\u043c\u0435\u043d\u0430');

var _UDS_MSG_UPLOAD_YOUR_VIDEOS = ('\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u0438\u0434\u0435\u043e\u0440\u043e\u043b\u0438\u043a');

var _UDS_MSG_IM_DONE_WATCHING = ('\u0437\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440');

var _UDS_MSG_CLOSE_VIDEO_PLAYER = ('\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0432\u0438\u0434\u0435\u043e\u043f\u043b\u0435\u0435\u0440');

var _UDS_MSG_NO_RESULTS = ('\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u043d\u0435\u0442');

var _UDS_MSG_LINKEDCSE_ERROR_RESULTS = ('\u0412 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u044d\u0442\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u0447\u0435\u0440\u0435\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434.');

var _UDS_MSG_COUPONS = ('\u041a\u0443\u043f\u043e\u043d\u044b');
(function() { 
if(!google.search.NoOldNames){google_exportSymbol("UDS_ServiceBase",google.loader.ServiceBase);google_exportSymbol("UDS_OriginalAppPath",google.loader.OriginalAppPath);google_exportSymbol("UDS_ApiKey",google.loader.ApiKey);google_exportSymbol("UDS_KeyVerified",google.loader.KeyVerified);google_exportSymbol("UDS_LoadFailure",google.loader.LoadFailure);google_exportSymbol("UDS_CurrentLocale",google.search.CurrentLocale);google_exportSymbol("UDS_ShortDatePattern",google.search.ShortDatePattern);google_exportSymbol(
"UDS_Version",google.search.Version);google_exportSymbol("UDS_JSHash",google.search.JSHash)};
var j=new Object;j["blank"]="&nbsp;";j["image"]=_UDS_MSG_SEARCHER_IMAGE;j["web"]=_UDS_MSG_SEARCHER_WEB;j["blog"]=_UDS_MSG_SEARCHER_BLOG;j["video"]=_UDS_MSG_SEARCHER_VIDEO;j["local"]=_UDS_MSG_SEARCHER_LOCAL;j["news"]=_UDS_MSG_SEARCHER_NEWS;j["book"]=_UDS_MSG_SEARCHER_BOOK;j["save"]=_UDS_MSG_SEARCHCONTROL_SAVE;j["keep"]=_UDS_MSG_SEARCHCONTROL_KEEP;j["include"]=_UDS_MSG_SEARCHCONTROL_INCLUDE;j["copy"]=_UDS_MSG_SEARCHCONTROL_COPY;j["close"]=_UDS_MSG_SEARCHCONTROL_CLOSE;j["sponsored-links"]=_UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS;
j["see-more"]=_UDS_MSG_SEARCHCONTROL_SEE_MORE;j["watermark"]=_UDS_MSG_SEARCHCONTROL_WATERMARK;j["search-location"]=_UDS_MSG_SEARCHER_CONFIG_SET_LOCATION;j["disable-address-lookup"]=_UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP;j["sort-by-date"]=_UDS_MSG_SORT_BY_DATE;j["pbg"]=_UDS_MSG_BRANDING_STRING;j["n-minutes-ago"]=_UDS_MSG_MINUTES_AGO;j["n-hours-ago"]=_UDS_MSG_HOURS_AGO;j["one-hour-ago"]=_UDS_MSG_ONE_HOUR_AGO;j["all-n-related"]=_UDS_MSG_NEWS_ALL_N_RELATED;j["related-articles"]=_UDS_MSG_NEWS_RELATED;
j["page-count"]=_UDS_MSG_TOTAL_PAGE_COUNT;var A=new Array;A[0]=_UDS_MSG_MONTH_ABBR_JAN;A[1]=_UDS_MSG_MONTH_ABBR_FEB;A[2]=_UDS_MSG_MONTH_ABBR_MAR;A[3]=_UDS_MSG_MONTH_ABBR_APR;A[4]=_UDS_MSG_MONTH_ABBR_MAY;A[5]=_UDS_MSG_MONTH_ABBR_JUN;A[6]=_UDS_MSG_MONTH_ABBR_JUL;A[7]=_UDS_MSG_MONTH_ABBR_AUG;A[8]=_UDS_MSG_MONTH_ABBR_SEP;A[9]=_UDS_MSG_MONTH_ABBR_OCT;A[10]=_UDS_MSG_MONTH_ABBR_NOV;A[11]=_UDS_MSG_MONTH_ABBR_DEC;j["month-abbr"]=A;j["directions"]=_UDS_MSG_DIRECTIONS;j["clear-results"]=_UDS_MSG_CLEAR_RESULTS;
j["show-one-result"]=_UDS_MSG_SHOW_ONE_RESULT;j["show-more-results"]=_UDS_MSG_SHOW_MORE_RESULTS;j["show-all-results"]=_UDS_MSG_SHOW_ALL_RESULTS;j["settings"]=_UDS_MSG_SETTINGS;j["search"]=_UDS_MSG_SEARCH;j["search-uc"]=_UDS_MSG_SEARCH_UC;j["powered-by"]=_UDS_MSG_POWERED_BY;j["sa"]=_UDS_MSG_SEARCHER_GSA;j["by"]=_UDS_MSG_SEARCHER_BY;j["code"]=_UDS_MSG_SEARCHER_CODE;j["unknown-license"]=_UDS_MSG_UNKNOWN_LICENSE;j["more-results"]=_UDS_MSG_SEARCHCONTROL_MORERESULTS;j["previous"]=_UDS_MSG_SEARCHCONTROL_PREVIOUS;
j["next"]=_UDS_MSG_SEARCHCONTROL_NEXT;j["get-directions"]=_UDS_MSG_GET_DIRECTIONS;j["to-here"]=_UDS_MSG_GET_DIRECTIONS_TO_HERE;j["from-here"]=_UDS_MSG_GET_DIRECTIONS_FROM_HERE;j["clear-results-uc"]=_UDS_MSG_CLEAR_RESULTS_UC;j["search-the-map"]=_UDS_MSG_SEARCH_THE_MAP;j["scroll-results"]=_UDS_MSG_SCROLL_THROUGH_RESULTS;j["edit-tags"]=_UDS_MSG_EDIT_TAGS;j["tag-search"]=_UDS_MSG_TAG_THIS_SEARCH;j["search-string"]=_UDS_MSG_SEARCH_STRING;j["optional-label"]=_UDS_MSG_OPTIONAL_LABEL;j["delete"]=_UDS_MSG_DELETE;
j["deleted"]=_UDS_MSG_DELETED;j["cancel"]=_UDS_MSG_CANCEL;j["upload-video"]=_UDS_MSG_UPLOAD_YOUR_VIDEOS;j["im-done"]=_UDS_MSG_IM_DONE_WATCHING;j["close-player"]=_UDS_MSG_CLOSE_VIDEO_PLAYER;j["no-results"]=_UDS_MSG_NO_RESULTS;j["linked-cse-error-results"]=_UDS_MSG_LINKEDCSE_ERROR_RESULTS;j["coupons"]=_UDS_MSG_COUPONS;
Function.prototype.F=function(a){var b=function(){}
;b.prototype=a.prototype;this.prototype=new b;this.prototype.__super__=function(c,d,f,e){var i=Array.prototype.le.apply(arguments,[1,arguments.length]);return c.apply(this,i)}
}
;var _json_cache_defeater_=(new Date).getTime();var _json_request_require_prep=true;function pb(a,b){return a+"&key="+google.loader.ApiKey+"&v="+b}
function ma(a,b){if(ga("msie")&&Xc("msie 6.0")){var c=u(this,ob,[a,b]);setTimeout(c,0)}else{ob(a,b)}}
function ob(a,b){var c=document.getElementsByTagName("head")[0];var d=document.createElement("script");d.type="text/javascript";d.charset="utf-8";var f=_json_request_require_prep?pb(a,b):a;if(na()||rb()){f=f+"&nocache="+_json_cache_defeater_++}d.src=f;var e=function(){d.onload=null;var h=d.parentNode;h.removeChild(d);delete d}
;var i=function(h){var l=(h?h:window.event).target?(h?h:window.event).target:(h?h:window.event).srcElement;if(l.readyState=="loaded"||l.readyState=="complete"){l.onreadystatechange=null;e()}}
;if(navigator.product=="Gecko"){d.onload=e}else{d.onreadystatechange=i}c.appendChild(d)}
function P(a,b){return function(){return b.apply(a,arguments)}
}
function u(a,b,c){return function(){return b.apply(a,c)}
}
function Q(a){while(a.firstChild){a.removeChild(a.firstChild)}}
function Tb(a,b){if(a){try{Q(a);a.appendChild(b)}catch(c){}}return b}
function g(a,b){try{a.appendChild(b)}catch(c){}return b}
function bb(a,b){a.innerHTML=b}
function ab(a){return document.createTextNode(a?a:"")}
function m(a,b){var c=document.createElement("div");if(a){c.innerHTML=a}if(b){c.className=b}return c}
function o(a){var b=document.createElement("div");if(a){b.className=a}return b}
function xa(a,b){var c=document.createElement("span");if(a){g(c,ab(a))}if(b){c.className=b}return c}
function W(a,b,c){var d=document.createElement("table");d.setAttribute("cellSpacing",a?a:0);d.setAttribute("cellPadding",b?b:0);if(c){d.className=c}return d}
function O(a,b,c){var d=a.insertRow(-1);if(!d){alert(d)}for(var f=0;f<b;f++){x(d,c)}return d}
function x(a,b){var c=a.insertCell(-1);if(b){c.className=b}return c}
function J(a,b,c,d){var f=document.createElement("img");f.src=a;if(b){f.width=b}if(c){f.height=c}if(d){f.className=d}return f}
function cb(a,b,c,d){var f;if(na()){f=o(d);f.style.filter='progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+a+'")';f.style.width=b+"px";f.style.height=c+"px"}else{f=J(a,null,null,d)}return f}
function da(a,b,c,d,f){var e=document.createElement("a");e.href=a;if(b){if(d){g(e,xa(b,d))}else{g(e,ab(b))}}if(c){e.target=c}if(f){e.title=f}return e}
function v(a,b,c,d,f){var e=m(null,d);var i=document.createElement("a");i.href=a;i.innerHTML=b;if(d){i.className=d}if(c){i.target=c}if(f){i.title=f}e.appendChild(i);return e}
function Za(a){var b=document.createElement("form");if(a){b.className=a}return b}
function ca(a,b){var c=document.createElement("input");c.type="submit";c.value=a;if(b){c.className=b}return c}
function $a(a,b,c){var d=document.createElement("input");d.setAttribute("autoComplete","off");d.type="text";if(a==-1){n(d,"util-css-expand")}else{d.size=a>0?a:10}if(b){n(d,b)}if(c){d.value=c}return d}
function ka(a,b,c,d){var f=document.createElement("input");f.type="checkbox";f.name=a;f.value=b;if(d){f.className=d}if(c){f.checked=c}return f}
function B(a,b){a.className=b}
function n(a,b){Rb(a,b)}
function z(a,b){Ub(a,b)}
function Sb(a,b){if(a==null||a.className==null)return false;var c=a.className.split(" ");for(var d=0;d<c.length;d++){if(c[d]==b){return true}}return false}
function Rb(a,b){if(Sb(a,b))return;a.className+=" "+b}
function Ub(a,b){if(a.className==null)return;var c=a.className.split(" ");var d=[];var f=false;for(var e=0;e<c.length;e++){if(c[e]!=b){if(c[e]){d.push(c[e])}}else{f=true}}if(f){a.className=d.join(" ")}}
function ba(a){if(V!=""){return V}var b=a.toLowerCase().split(".");if(b.length<2){V=(ba.Ca=".com")}var c=b.pop();var d=b.pop();if(c.length==2){if(ja[d]&&ja[d][c]==1){V=(ba.Ca="."+d+"."+c)}else{V=(ba.Ca="."+c)}}else{V=(ba.Ca=".com")}return V}
var V=ba.Ca="";var ja={co:{ck:1,cr:1,hu:1,id:1,il:1,"in":1,je:1,jp:1,ke:1,kr:1,ls:1,nz:1,th:1,ug:1,uk:1,ve:1,vi:1,za:1},com:{ag:1,ar:1,au:1,bo:1,br:1,bz:1,co:1,cu:1,"do":1,ec:1,fj:1,gi:1,gr:1,gt:1,hk:1,jm:1,ly:1,mt:1,mx:1,my:1,na:1,nf:1,ni:1,np:1,pa:1,pe:1,ph:1,pk:1,pr:1,py:1,sa:1,sg:1,sv:1,tr:1,tw:1,ua:1,uy:1,vc:1,vn:1},off:{ai:1}};function ee(a){var b=a.toLowerCase().split(".");if(b.length<2){return false}var c=b.pop();var d=b.pop();if((d=="igoogle"||d=="gmodules"||d=="googlesyndication")&&c=="com"
){return true}if(c.length==2&&b.length>0){if(ja[d]&&ja[d][c]==1){d=b.pop()}}return d=="google"}
function ga(a){if(a in Pa){return Pa[a]}return Pa[a]=navigator.userAgent.toLowerCase().indexOf(a)!=-1}
function Xc(a){if(a in Qa){return Qa[a]}return Qa[a]=navigator.appVersion.toLowerCase().indexOf(a)!=-1}
var Pa={};var Qa={};function na(){return ga("msie")}
function rb(){return ga("safari")||ga("konqueror")}
function qb(){return ga("opera")}
function Qb(a){this.branding=a+"branding";this.vertical=a+"branding-vertical";this.img=a+"branding-img";this.userDefined=a+"branding-user-defined";this.imgNoClear=a+"branding-img-noclear";this.clickable=a+"branding-clickable";this.text=a+"branding-text"}
function de(a,b,c,d){var f=new Qb(a);var e=o(f.branding);var i=W(null,null,f.branding);g(e,i);var h=!c;if(!h){n(e,f.vertical);n(i,f.vertical)}var l=O(i,0);var p;var r;if(h){p=l;r=l}else{p=l;r=O(i,0)}var q="/css/small-logo.png";var s=51;var t=15;if(d){if(typeof d=="string"){if(d.match(/^http:\/\/www\.youtube\.com/)){q="/css/youtube-logo-55x24.png";s=55;t=24;n(e,f.branding+"-youtube");if(!h){n(e,f.vertical+"-youtube");n(i,f.vertical+"-youtube")}}}}var F=x(p,f.text);var w=x(r,f.imgNoClear);var y=m(j[
"powered-by"],f.text);var C=google.loader.ServiceBase+q;var D=cb(C,s,t,f.imgNoClear);g(F,y);if(d){var fa="http://www.google.com";if(typeof d=="string"&&(d.match(/^http:\/\/[a-z]*\.google\.com/)||d.match(/^http:\/\/www\.youtube\.com/))){fa=d}var Oa=da(fa,null,"_BLANK");Oa.className=f.clickable;g(Oa,D);g(w,Oa)}else{g(w,D)}if(b){Q(b);g(b,e)}return e}
function ce(a,b){var c;var d=a.getFullYear();var f=a.getMonth();var e=j["month-abbr"][f];var i=a.getDate();if(i<10){i="0"+i}switch(b){case "MDY":c=e+" "+i+", "+d;break;case "YMD":c=d+" "+e+" "+i;break;default:case "DMY":c=i+" "+e+" "+d;break}return c}
var Pb=Ya.nb=3600000;var be=Ya.ob=60000;var ae=Ya.mb=86400000;function Ya(a,b){var c=new Date;var d=c.getTime();var f=a.getTime();var e;if(d<f){return j["n-minutes-ago"](2)}var i=d-f;if(i<Pb){var h=parseInt(i/be);if(h<=1){e=2}else{e=h}return j["n-minutes-ago"](e)}if(i<ae){var l=parseInt(i/Pb);if(l<=1){return j["one-hour-ago"]}else{e=l;return j["n-hours-ago"](e)}}return ce(a,b)}
;
function k(){}
var E=k.Ed="gs-result";var Md=k.md="gs-error-result";var Qd=k.vd="gs-no-results-result";k.nd="gs-id";var va=k.Md="gs-spacer";var I=k.Pd="gs-title";var M=k.Ld="gs-snippet";var N=k.Qd="gs-visibleUrl";var Nb=k.Rd="gs-visibleUrl-long";var Yd=k.Sd="gs-visibleUrl-short";var Zd=k.Td="gs-watermark";var Ud=k.Fd="gs-results-attribution";var Fb=k.$c="gs-address";var Mb=k.Nd="gs-street";var Gb=k.fd="gs-city";var Jb=k.Cd="gs-region";var Id=k.hd="gs-country";var Hb=k.zd="gs-phone";var Cd=k.ad="gs-street gs-addressLine"
;var Dd=k.bd="gs-city gs-addressLine";var Ed=k.cd="gs-addressLine";var Jd=k.jd="gs-directions";var Kd=k.kd="gs-directions-to-from";var Nd=k.qd="gs-label";var Lb=k.Id="gs-secondary-link";var Fd=k.dd="gs-author";var Ib=k.Bd="gs-publisher";var Pd=k.td="gs-location";var Hd=k.gd="gs-clusterUrl";var sa=k.pd="gs-image-box";var Gd=k.ed="gs-image-box gs-book-image-box";var ia=k.Od="gs-text-box";k.ud="gs-metadata";var Vd=k.Gd="gs-row-1";var Wd=k.Hd="gs-row-2";k.Jd="gs-shadow";var Td=k.yd="gs-pages";var Sd=
k.xd="gs-page-edge";var H=k.od="gs-image";var Xd=k.Kd="gs-size";var Rd=k.wd="gs-pageCount";var ua=k.Ad="gs-publishedDate";var Kb=k.Dd="gs-relativePublishedDate";var $d=k.Ud="gs-webAd";var Od=k.sd="gs-localAd";var Eb=k.Zc="gs-ad-marker";var ta=k.rd="gs-line";var Ld=k.ld="gs-divider";var hd=k.kc="gsc-control";var nd=k.uc="gsc-narrow";var Bb=k.Hc="gsc-search-box";var Cb=k.Ic="gsc-search-button";var ub=k.$b="gsc-clear-button";var xb=k.qc="gsc-input";var Zc=k.Tb="gsc-branding";k.Zb="gsc-branding-vertical"
;var ad=k.Vb="gsc-branding-img";var cd=k.Yb="gsc-branding-user-defined";var bd=k.Wb="gsc-branding-img-noclear";var $c=k.Ub="gsc-branding-clickable";var tb=k.Xb="gsc-branding-text";var Sa=k.Cc="gsc-resultsRoot";var sd=k.Dc="gsc-results";var Ra=k.xc="gsc-result";var rd=k.Bc="gsc-resultsHeader";var U=k.Fc="gsc-resultsbox-invisible";var L=k.Gc="gsc-resultsbox-visible";var wb=k.pc="gsc-expansionArea";var yd=k.Tc="gsc-trailing-more-results";var jd=k.mc="gsc-cursor-box";var id=k.lc="gsc-cursor";var ld=k.oc=
"gsc-cursor-page";var kd=k.nc="gsc-cursor-current-page";var Yc=k.Rb="gsc-ad-box";var zd=k.Uc="gsc-twiddleRegionCell";var dd=k.ac="gsc-configLabelCell";var ed=k.bc="gsc-configLabel";var Ad=k.Vc="gsc-twiddle";var ha=k.Wc="gsc-twiddle-closed";var ra=k.Xc="gsc-twiddle-opened";var xd=k.Sc="gsc-title";var ud=k.Jc="gsc-stats";var yb=k.rc="gsc-keeper";var qd=k.Ac="gsc-result-selector gsc-one-result";var pd=k.zc="gsc-result-selector gsc-more-results";var od=k.yc="gsc-result-selector gsc-all-results";var td=
k.Ec="gsc-results-selector";var Ab=k.wc="gsc-one-result-active";var zb=k.tc="gsc-more-results-active";var sb=k.Sb="gsc-all-results-active";var Xa=k.Rc="gsc-tabsArea";var Db=k.Qc="gsc-tabsAreaInvisible";var wd=k.Lc="gsc-tabHeader";var Va=k.Oc="gsc-tabhActive";var Wa=k.Pc="gsc-tabhInactive";var Ta=k.Mc="gsc-tabdActive";var Ua=k.Nc="gsc-tabdInactive";var vd=k.Kc="gsc-tabData";var vb=k.jc="gsc-config";var qa=k.ic="gsc-configSetting";var T=k.hc="gsc-configSettingSubmit";var pa=k.dc="gsc-configSettingCheckbox"
;var oa=k.cc="gsc-configSettingCheckboxLabel";var gd=k.gc="gsc-configSettingInput";var fd=k.fc="gsc-configSettingInputLabel";var md=k.sc="gsc-locationConfig";var Bd=k.Yc="gsc-video-player";k.Qb="as-results";k.Pb="as-result-vertical";k.Ob="as-result-horizontal";k.Nb="as-result-cell";k.Mb="as-branding-cell";
var Vb=GSearch.BASE=google.loader.ServiceBase;var X=GSearch.LARGE_RESULTSET="large";var G=GSearch.SMALL_RESULTSET="small";GSearch.LARGE_RESULTS=8;GSearch.LARGE_ADS=4;GSearch.SMALL_RESULTS=4;GSearch.SMALL_ADS=2;var Wb=GSearch.KEEP_SWEEPER_DELAY=5000;GSearch.LINK_TARGET_TOP="_top";GSearch.LINK_TARGET_SELF="_self";GSearch.LINK_TARGET_PARENT="_parent";var db=GSearch.LINK_TARGET_BLANK="_blank";var Z=GSearch.ORDER_BY_RELEVANCE="order-by-relevance";var Y=GSearch.ORDER_BY_DATE="order-by-date";var Zb=GSearch.RESTRICT_TYPE=
"restrict-type";var gb=GSearch.RESTRICT_SAFESEARCH="restrict-safesearch";var jb=GSearch.SAFESEARCH_STRICT="active";var ib=GSearch.SAFESEARCH_OFF="off";var hb=GSearch.SAFESEARCH_MODERATE="moderate";var fb=GSearch.RESTRICT_EXTENDED_ARGS="restrict-extended";GSearch.strings=j;function GSearch(){this.Wd=null;this.M=null;this.lb=0;this.Ea=0;this.Sa=true;this.m={width:100,height:75};this.Q=db;this.gb=1;this.setResultSetSize(G);this.clearResults();this.La=null;this.Ma=null;this.ab=null;this.Va=null;this.la=
null;this.ka=null;this.ta=null;this.n="null";this.h=null;this.i=null;this.gwsUrl=null;this.H=new Array;if(typeof window==="object"&&window.location&&window.location.hostname&&window.location.hostname!=""){this.Ua=ba(window.location.hostname)}else{this.Ua=".com"}this.ba=null;this.ha=null}
GSearch.deferRequest=function(a){var b=u(this,ma,[a,google.search.Version]);setTimeout(b,0)}
;GSearch.prototype.Fb=function(){var a=this.O+"?hl="+google.search.CurrentLocale+"&source=uds";if(this.i){a=a+this.i}else{a=a+"&q="}if(this.K&&this.K!=""){return this.K}else{return a}}
;GSearch.prototype.setQueryAddition=function(a){if(a==null||a==""){this.h=null}else{this.h=a}}
;GSearch.prototype.G=function(a,b,c){var d=Vb+this.I+"?callback="+a+"&context="+b+"&lstkp="+this.rb()+"&rsz="+this.ya+"&hl="+google.search.CurrentLocale;if(this.Ua){d+="&gss="+this.Ua}if(google.search.JSHash){d+="&sig="+google.search.JSHash}if(c){d+="&start="+c}return d}
;GSearch.prototype.setLinkTarget=function(a){this.Q=a}
;GSearch.prototype.e=function(){if(this.Q&&this.Q!=""){return this.Q}else{return null}}
;GSearch.prototype.eb=function(){this.lb++;this.Ea++;if(this.ta){clearTimeout(this.ta)}this.ta=setTimeout(u(this,this.execute,[null]),Wb)}
;GSearch.prototype.rb=function(){clearTimeout(this.ta);var a=this.Ea;this.Ea=0;return a}
;GSearch.prototype.Ta=function(){if(this.La==null){this.La="gsc-"+this.n+"Result"}return this.La}
;GSearch.prototype.D=function(){if(this.Ma==null){this.Ma="gs-"+this.n+"Result"}return this.Ma}
;GSearch.prototype.Ab=function(){if(this.ab==null){this.ab=j[this.n]}if(this.la){return this.la}else{return this.ab}}
;GSearch.prototype.yb=function(){if(this.Va==null){this.Va=j[this.n]}if(this.la){return this.la}else{return this.Va}}
;GSearch.prototype.getResultSetSize=function(){return this.ya}
;GSearch.prototype.setResultSetSize=function(a){switch(a){case X:this.ya=X;break;default:case G:this.ya=G;break}}
;GSearch.prototype.execute=function(a){var b=this.u(a,null,null);if(window._googleudsextrastuff){b=b+window._googleudsextrastuff}this.cursor=null;this.Db=a;ma(b,google.search.Version);if(this.H&&this.H.length>0){for(var c=0;c<this.H.length;c++){this.H[c].execute(a)}}}
;GSearch.prototype.gotoPage=function(a){if(this.cursor&&a<this.cursor.pages.length){var b=this.u(this.Db,null,null,this.cursor.pages[a].start);this.cursor=null;ma(b,google.search.Version)}}
;GSearch.prototype.addRelatedSearcher=function(a){if(this.H){this.H.push(a)}}
;GSearch.prototype.getExecuteUrl=function(a,b,c){var d=this.u(a,b,c);return pb(d,google.search.Version)}
;GSearch.prototype.B=function(a){var b="http://code.google.com/apis/ajaxsearch/faq.html";var c=j["watermark"]+" - "+this.sb();var d=v(b,c,"_blank",Zd);g(a,d)}
;GSearch.prototype.sb=function(){var a=new Date;var b=a.getMonth()+1+"/"+a.getFullYear();return b}
;GSearch.prototype.formatToShortDate=function(a){var b;var c=a.getFullYear();var d=a.getMonth();var f=j["month-abbr"][d];var e=a.getDate();if(e<10){e="0"+e}switch(google.search.ShortDatePattern){case "MDY":b=f+" "+e+", "+c;break;case "YMD":b=c+" "+f+" "+e;break;default:case "DMY":b=e+" "+f+" "+c;break}return b}
;var eb=GSearch.nb=3600000;var Yb=GSearch.ob=60000;var Xb=GSearch.mb=86400000;GSearch.prototype.formatToRelativeDate=function(a){var b=new Date;var c=b.getTime();var d=a.getTime();var f;if(c<d){return j["n-minutes-ago"](2)}var e=c-d;if(e<eb){var i=parseInt(e/Yb);if(i<=1){f=2}else{f=i}return j["n-minutes-ago"](f)}if(e<Xb){var h=parseInt(e/eb);if(h<=1){return j["one-hour-ago"]}else{f=h;return j["n-hours-ago"](f)}}return this.formatToShortDate(a)}
;GSearch.prototype.clearResults=function(){this.gwsUrl=null;this.ge=null;this.results=new Array;this.adResults=new Array}
;GSearch.prototype.db=function(){if(this.cb){this.cb()}}
;GSearch.prototype.onSearchComplete=function(a,b,c,d){if(a==null&&b==204){return}this.gwsUrl=null;if(this.results&&this.results.length>0){for(var f=0;f<this.results.length;f++){if(this.results[f].html){Ob(this.results[f].html)}}}if(this.adResults&&this.adResults.length>0){for(var f=0;f<this.adResults.length;f++){if(this.adResults[f].html){Ob(this.adResults[f].html)}}}if(a&&a.results&&a.results.length>0){this.results=a.results;if(a.cursor&&a.cursor.moreResultsUrl){if(this.K&&this.K!=""){this.gwsUrl=
this.K}else{this.gwsUrl=a.cursor.moreResultsUrl}}else if(this.i&&this.O){this.gwsUrl=this.Fb()}}else{this.results=new Array}if(a&&a.adResults&&a.adResults.length>0){this.adResults=a.adResults}else{this.adResults=new Array}this.completionStatus=b;this.hashStatus=d;this.completionFailureDetails=c;if(a&&a.resultAttribution&&a.resultAttribution!=null&&a.resultAttribution!=""){this.xa=a.resultAttribution}else{this.xa=null}if(a&&a.cursor&&a.cursor.pages&&a.cursor.pages.length>0){this.cursor=a.cursor}if(
this.Sa){this.bb()}this.db()}
;GSearch.prototype.getAttribution=function(){var a=null;if(this.xa){a=m(this.xa,Ud)}return a}
;GSearch.prototype.bb=function(){var a;var b;for(a=0;a<this.results.length;a++){b=this.results[a];this.createResultHtml(b)}for(a=0;a<this.adResults.length;a++){b=this.adResults[a];this.ma(b)}}
;GSearch.prototype.ma=function(a){if(a.html){delete a.html}}
;GSearch.prototype.setSearchCompleteCallback=function(a,b,c){if(!c){c=[null]}this.cb=u(a,b,c)}
;var K=GSearch.AllocateCompletionMapContext=function(a,b){var c=false;var d=null;if(a.length){for(var f=0;f<a.length;f++){if(a[f]==null){a[f]=b;d=f;c=true;break}}}if(!c){d=a.length;a.push(b)}return d}
;GSearch.prototype.setUserDefinedLabel=function(a){this.la=a}
;GSearch.prototype.setUserDefinedClassSuffix=function(a){this.ka=a}
;GSearch.prototype.setNoHtmlGeneration=function(){this.Sa=false}
;GSearch.scaleImage=function(a,b,c,d,f){var e=c.width/a;var i=c.height/b;var h=Math.min(e,i);var l=Math.min(h,1);var p=new Object;p.width=Math.round(a*l);p.height=Math.round(b*l);if(d){d.width=p.width;d.height=p.height;if(f){var r=(c.width-p.width)/2;d.style.left=r+"px"}}return p}
;var $b=GSearch.VERTICAL_BRANDING=1;GSearch.HORIZONTAL_BRANDING=2;GSearch.getBranding=function(a,b,c){return de("gsc-",a,b&&b==$b,c)}
;GSearch.setOnLoadCallback=function(a,b){google.setOnLoadCallback(a,b)}
;var wa;function Ob(a){if(!wa){wa=document.createElement("DIV")}wa.appendChild(a);wa.innerHTML=""}
GSearch.prototype.vb=function(a){var b=this.ba;if(a){b=a}var c=new Object;var d=o(this.D());n(d,E);n(d,Md);var f;f=m(b,M);g(d,f);c.html=d;return c}
;GSearch.prototype.wb=function(a){var b=this.ha;if(a){b=a}var c=new Object;var d=o(this.D());n(d,E);n(d,Qd);var f;f=m(b,M);g(d,f);c.html=d;return c}
;
function GwebSearch(){GSearch.call(this);this.n="web";this.I="/GwebSearch";this.O="http://www.google.com/search";this.b=null;this.q=S;this.N=null;this.Na=null;this.K=null;this.r=null;this.j=null}
GwebSearch.F(GSearch);GwebSearch.RESULT_CLASS="GwebSearch";GwebSearch.AD_CLASS="GwebSearch.ad";var Ma=GwebSearch.cxRestriction_CX="cx";var La=GwebSearch.cxRestriction_CREF="cref";var S=GwebSearch.cxRestriction_NONE="none";var Na=GwebSearch.P=new Array;GwebSearch.RawCompletion=function(a,b,c,d,f){var e=0;if(a){e=parseInt(a)}var i=Na[e];Na[e]=null;i.onSearchComplete(b,c,d,f)}
;GwebSearch.prototype.u=function(a,b,c,d){var f;if(c==null){f=K(Na,this)}else{f=c}var e;if(b==null){e="google.search.WebSearch.RawCompletion"}else{e=b}var i=this.G(e,f,d);if(a){var h;var l=a;if(this.h){l=l+" "+this.h}if(this.b&&this.q!=S&&this.Na){var p=this.Na;var r=l;if(this.N!=null){r=l+" more:"+this.N}p=p.replace(/__HL__/,google.search.CurrentLocale);p=p.replace(/__QUERY__/,encodeURIComponent(r));this.K=p}if(this.b&&this.q==S){l=l+" site:"+this.b}h="";if(this.b&&this.q!=S){if(this.q==Ma){h=h+
"&cx="+this.b}else if(this.q==La){h=h+"&cref="+encodeURIComponent(this.b)}if(this.N!=null){l=l+" more:"+this.N}}h=h+"&q="+encodeURIComponent(l);if(this.r){h=h+"&safe="+this.r}if(this.j){h=h+this.j}i=i+h;this.i=h;if(d&&d!=0){this.i=this.i+"&start="+d}}return i}
;GwebSearch.prototype.createResultHtml=function(a){if(a.html){delete a.html}var b=o(this.D());n(b,E);var c;c=v(a.unescapedUrl,a.title,this.e(),I);g(b,c);c=m(a.content,M);g(b,c);c=m(a.visibleUrl,N);g(b,c);n(c,Yd);var d=a.unescapedUrl.indexOf(a.visibleUrl);var f=a.visibleUrl;if(d!=-1&&d!=0){f=a.unescapedUrl.substring(d)}c=m(f,N);n(c,Nb);g(b,c);a.html=b;this.B(a.html)}
;GwebSearch.prototype.ma=function(a){if(a.html){delete a.html}var b=o($d);n(b,E);var c;c=v(a.unescapedUrl,a.title,this.e(),I);g(b,c);if(a.content1){c=m(a.content1,ta);g(b,c)}if(a.content2){c=m(a.content2,ta);g(b,c)}c=m(a.visibleUrl,N);var d=J(a.impressionUrl,12,12,Eb);g(c,d);g(b,c);a.html=b;this.B(a.html)}
;GwebSearch.prototype.setSiteRestriction=function(a,b,c){this.K=null;this.ba=null;var d=false;if(a==null||typeof a=="string"&&a==""){d=false;this.b=null;this.q=S;this.N=null;this.ba=null}else if(typeof a=="string"){d=a.match(/^\d{21}:.*/);if(d){this.b=a;this.q=Ma}else{this.b=a;this.q=S}}else{if(a.siteUrl){d=false;this.b=a.siteUrl}else if(a.cseId){d=true;this.b=a.cseId;this.q=Ma}else if(a.crefUrl){d=true;this.b=a.crefUrl;this.q=La;this.ba=j["linked-cse-error-results"]}else{d=false;this.b=null;this.q=
S;this.N=null}}if(d){if(b){this.N=b}if(c){if(c.match(/__HL__/)&&c.match(/__QUERY__/)){this.Na=c}}if(this.q==La){var f=new Image;f.src="http://www.google.com/cse/tools/ping?cref="+encodeURIComponent(this.b)+"&nocache="+Number(new Date)}}}
;GwebSearch.prototype.setRestriction=function(a,b){if(a==gb){if(b){if(b==jb||b==ib||b==hb){this.r=b}else{this.r=null}}else{this.r=null}}if(a==fb){if(b){for(var c in b){var d=b[c];if(c=="lr"||c=="usg"){if(this.j==null){this.j="&"}else{this.j+="&"}this.j+=c+"="+encodeURIComponent(d)}}}else{this.j=null}}}
;
function GadSenseSearch(a){GSearch.call(this);this.n="ad";this.Oa=null;this.Pa=null;if(a){if(window["google_dynamic_adsense_units"]==null){return}var b=window["google_dynamic_adsense_units"][a];if(b!=null&&b._bind()){this.Oa=b}}else{var c=window.googleAFSAdsUpdater;if(c!=null&&c._bind()){this.Pa=c}}}
GadSenseSearch.F(GSearch);GadSenseSearch.prototype.execute=function(a,b){var c=a;if(this.h){c=c+" "+this.h}if(this.Oa){this.Oa._updateAds(c)}else if(this.Pa){this.Pa._updateAds(c)}}
;
function GsaSearch(a){GSearch.call(this);this.qb=a;this.n="sa";this.I="/ajax"}
GsaSearch.F(GSearch);GsaSearch.RESULT_CLASS="GsaSearch";GsaSearch.AD_CLASS="GsaSearch.ad";var Ja=GsaSearch.P=new Array;GsaSearch.RawCompletion=function(a,b,c){var d=0;if(a){d=parseInt(a)}var f=Ja[d];Ja[d]=null;f.onSearchComplete(b,c)}
;var Sc=GsaSearch.NEXT_PAGE="next";var Tc=GsaSearch.PREV_PAGE="prev";GsaSearch.prototype.execute=function(a,b){var c=this.u(a,null,null,b);ma(c,google.search.Version)}
;GsaSearch.prototype.u=function(a,b,c,d){var f;if(c==null){f=K(Ja,this)}else{f=c}var e;if(b==null){e="google.search.SaSearch.RawCompletion"}else{e=b}var i=this.G(e,f,d);if(a){var h=a;if(this.h){h=h+" "+this.h}i=i+"&q="+encodeURIComponent(h)}return i}
;GsaSearch.prototype.createResultHtml=function(a){if(a.html){delete a.html}var b=o(this.D());n(b,E);var c;c=v(a.unescapedUrl,a.title,this.e(),I);g(b,c);c=m(a.content,M);g(b,c);c=m(a.visibleUrl,N);g(b,c);n(c,Nb);a.html=b;this.B(a.html)}
;var Uc=GsaSearch.Xd="&ajax_version=1.0&client=default_frontend&site=default_collection&ie=UTF-8&oe=UTF-8";GsaSearch.prototype.G=function(a,b,c){var d=this.qb+this.I+"?ajax_callback="+a+"&ajax_context="+b+"&hl="+google.search.CurrentLocale+Uc+"&num="+this.wa+this.zb(c);return d}
;GsaSearch.prototype.eb=function(){this.lb++;this.Ea++}
;GsaSearch.prototype.onSearchComplete=function(a,b){if(a==null&&b==204){return}if(a&&a.results&&a.results.length>0){this.results=new Array;for(var c=0;c<a.results.length;c++){var d=a.results[c];var f=new Object;f.GsearchResultClass=d.GsearchResultClass;f.unescapedUrl=d.unescapedUrl;f.url=d.url;f.visibleUrl=d.visibleUrl;f.title=d.title;f.titleNoFormatting=d.titleNoFormatting;f.content=d.snippet;this.results.push(f)}this.Aa=a.start_index;this.oa=a.end_index;this.Qa=a.est}else{this.results=new Array;
this.Aa=0;this.oa=0;this.Qa=0}this.completionStatus=b;this.hashStatus=200;this.completionFailureDetails="";this.xa=null;if(this.Sa){this.bb()}this.db()}
;GsaSearch.prototype.setResultSetSize=function(a){this.__super__(GSearch.prototype.setResultSetSize,a);switch(this.ya){case X:this.wa=8;break;case G:this.wa=4;break}}
;GsaSearch.prototype.zb=function(a){var b="";if(a&&this.completionStatus==200&&this.Aa&&this.oa&&this.Qa){if(a==Sc){if(this.oa<this.Qa){b="&start="+this.oa}}else if(a==Tc){var c;if(this.Aa>this.wa+1){c=this.Aa-(this.wa+1)}else{c=0}b="&start="+c}}return b}
;
function GnewsSearch(){GSearch.call(this);this.n="news";this.I="/GnewsSearch";this.O="http://news.google.com/nwshp";this.ie=null;this.g=false;this.aa=true;this.M=P(this,Rc);this.$="gsc-newsConfig";this.c=null;this.j=null}
GnewsSearch.F(GSearch);GnewsSearch.RESULT_CLASS="GnewsSearch";var Ia=GnewsSearch.P=new Array;GnewsSearch.RawCompletion=function(a,b,c,d,f){var e=0;if(a){e=parseInt(a)}var i=Ia[e];Ia[e]=null;i.onSearchComplete(b,c,d,f)}
;GnewsSearch.prototype.u=function(a,b,c,d){var f;if(c==null){f=K(Ia,this)}else{f=c}var e;if(b==null){e="google.search.NewsSearch.RawCompletion"}else{e=b}var i=this.G(e,f,d);if(a||!a&&this.j){var h;var l=null;if(a){l=a}if(this.h){if(l==null){l=this.h}else{l=l+" "+this.h}}if(this.b){if(l==null){l="source:"+this.b}else{l=l+" source:"+this.b}}if(l){h="&q="+encodeURIComponent(l)}else{h=""}if(this.g){h=h+"&scoring=d"}if(this.j){h=h+this.j}if(this.b){i=i.replace(/&hl=.*&/,"&hl=en&")}i=i+h;this.i=h;if(d&&
d!=0){this.i=this.i+"&start="+d}}return i}
;GnewsSearch.prototype.createResultHtml=function(a){if(a.html){delete a.html}var b=o(this.D());n(b,E);var c;c=v(a.unescapedUrl,a.title,this.e(),I);g(b,c);c=m(a.publisher,Ib);g(b,c);var d=a.location.split(",");if(d.length>1){var f=", "+d[d.length-1];c=m(f,Pd);g(b,c)}var e=new Date(a.publishedDate);c=m(" - "+this.formatToShortDate(e),ua);g(b,c);var e=new Date(a.publishedDate);c=m(" - "+this.formatToRelativeDate(e),Kb);g(b,c);c=m(a.content,M);g(b,c);if(a.clusterUrl&&a.clusterUrl!=""){c=v(a.clusterUrl,
j["related-articles"]+"&nbsp;&raquo;",this.e(),Hd);g(b,c)}a.html=b;this.B(a.html)}
;GnewsSearch.prototype.setSiteRestriction=function(a){if(a==null||a==""){this.b=null}else{this.b=a.replace(/\s/g,"_")}}
;GnewsSearch.prototype.setResultOrder=function(a){if(a==Y){this.g=true}else if(a==Z){this.g=false}else{this.g=false}}
;var Rc=GnewsSearch.prototype.Wa=function(a,b){if(b){if(this.c==null){var c=o(qa);this.c=ka(null,"0",this.g?true:false,pa);g(c,this.c);g(c,m(j["sort-by-date"],oa));var d=o(T);g(d,ca(j["close"],T));g(c,d);g(a,c);this.c.focus()}else{this.c.checked=this.g?true:false;this.c.focus()}}else{if(this.c){if(this.c.checked){this.setResultOrder(Y)}else{this.setResultOrder(Z)}}}}
;GnewsSearch.prototype.setRestriction=function(a,b){if(a==fb){if(b){for(var c in b){var d=b[c];if(c=="geo"){if(this.j==null){this.j="&"}else{this.j+="&"}this.j+=c+"="+encodeURIComponent(d)}}}else{this.j=null}}}
;
function GimageSearch(){GSearch.call(this);this.gb=2;this.n="image";this.I="/GimageSearch";this.O="http://images.google.com/images";this.r=null;this.ra=null;this.da=null;this.ea=null;this.ca=null;this.b=null;this.m={width:112,height:84}}
GimageSearch.F(GSearch);var Hc=GimageSearch.RESULT_CLASS="GimageSearch";GimageSearch.AD_CLASS="GwebSearch.ad";var Fc=GimageSearch.RESTRICT_IMAGESIZE="restrict-imagesize";GimageSearch.IMAGESIZE_SMALL=["icon"];GimageSearch.IMAGESIZE_MEDIUM=["small","medium","large","xlarge"];GimageSearch.IMAGESIZE_LARGE=["xxlarge"];GimageSearch.IMAGESIZE_EXTRA_LARGE=["huge"];var Dc=GimageSearch.RESTRICT_COLORIZATION="restrict-coloration";var vc=GimageSearch.COLORIZATION_BLACK_AND_WHITE="mono";var xc=GimageSearch.COLORIZATION_GRAYSCALE=
"gray";var wc=GimageSearch.COLORIZATION_COLOR="color";var Ec=GimageSearch.RESTRICT_FILETYPE="restrict-filetype";var Ac=GimageSearch.FILETYPE_JPG="jpg";var Bc=GimageSearch.FILETYPE_PNG="png";var zc=GimageSearch.FILETYPE_GIF="gif";var yc=GimageSearch.FILETYPE_BMP="bmp";var Gc=GimageSearch.RESTRICT_IMAGETYPE="restrict-imagetype";var Cc=GimageSearch.IMAGETYPE_FACES="face";var Fa=GimageSearch.P=new Array;GimageSearch.RawCompletion=function(a,b,c,d,f){var e=0;if(a){e=parseInt(a)}var i=Fa[e];Fa[e]=null;
i.onSearchComplete(b,c,d,f)}
;GimageSearch.prototype.u=function(a,b,c,d){var f;if(c==null){f=K(Fa,this)}else{f=c}var e;if(b==null){e="google.search.ImageSearch.RawCompletion"}else{e=b}var i=this.G(e,f,d);if(a){var h;var l=a;if(this.h){l=l+" "+this.h}h="&q="+encodeURIComponent(l);if(this.r){h=h+"&safe="+this.r}if(this.ra){h=h+"&imgsz="+encodeURIComponent(this.ra)}if(this.da){h=h+"&imgc="+encodeURIComponent(this.da)}if(this.ea){h=h+"&imgtype="+encodeURIComponent(this.ea)}if(this.ca){h=h+"&as_filetype="+encodeURIComponent(this.ca)
}if(this.b){h=h+"&as_sitesearch="+encodeURIComponent(this.b)}i=i+h;this.i=h;if(d&&d!=0){this.i=this.i+"&start="+d}}return i}
;GimageSearch.prototype.createResultHtml=function(a){if(a.html){delete a.html}var b=o(this.D());n(b,E);var c=o(sa);var d=GSearch.scaleImage(a.tbWidth,a.tbHeight,this.m);var f=J(a.tbUrl,d.width,d.height,H);var e=(this.m.width-d.width)/2;f.style.left=e+"px";f.title=a.titleNoFormatting+" ("+a.visibleUrl+")";var i=da(a.unescapedUrl,null,this.e(),H);B(i,H);g(i,f);g(c,i);g(b,c);var h=o(ia);var l;l=m(a.content,M);l.title=a.contentNoFormatting;g(h,l);var p=a.width+" x "+a.height;l=m(p,Xd);g(h,l);l=v(a.originalContextUrl,
a.visibleUrl,this.e(),N);l.title=a.visibleUrl;g(h,l);g(b,h);a.html=b;this.B(a.html)}
;GimageSearch.prototype.setSiteRestriction=function(a){this.b=a}
;GimageSearch.prototype.setRestriction=function(a,b){if(a==gb){if(b){if(b==jb||b==ib){this.r=b}else if(b==hb){this.r=null}else{this.r=null}}else{this.r=null}}else if(a==Fc){if(b){this.ra=b.join("|")}else{this.ra=null}}else if(a==Dc){if(b){if(b==vc||b==xc||b==wc){this.da=b}else{this.da=null}}else{this.da=null}}else if(a==Ec){if(b){if(b==Ac||b==Bc||b==zc||b==yc){this.ca=b}else{this.ca=null}}else{this.ca=null}}else if(a==Gc){if(b){if(b==Cc){this.ea=b}else{this.ea=null}}else{this.ea=null}}}
;
function GlocalSearch(){GSearch.call(this);this.z=null;this.w="San Francisco, CA";this.C={y:37.77916,x:-122.42009};this.ga=true;this.U=false;this.aa=true;this.M=P(this,Oc);this.$=md;this.n="local";this.I="/GlocalSearch";this.k=null;this.T=null}
GlocalSearch.F(GSearch);GlocalSearch.RESULT_CLASS="GlocalSearch";GlocalSearch.AD_CLASS="GlocalSearch.ad";var Ha=GlocalSearch.P=new Array;GlocalSearch.RawCompletion=function(a,b,c,d,f){var e=0;if(a){e=parseInt(a)}var i=Ha[e];Ha[e]=null;if(b&&b.viewport){i.resultViewport=b.viewport}else{i.resultViewport=null}i.onSearchComplete(b,c,d,f)}
;GlocalSearch.prototype.u=function(a,b,c){var d;if(c==null){d=K(Ha,this)}else{d=c}var f;if(b==null){f="google.search.LocalSearch.RawCompletion"}else{f=b}var e=this.G(f,d);if(a){e=e+"&q="+encodeURIComponent(a)}this.viewport=null;var i;if(this.z){var h;var l;if(this.ga){h=this.z.getCenterLatLng();l=this.z.getSpanLatLng();i="&sll="+h.y+","+h.x;i+="&sspn="+l.height+","+l.width;i+=Ga(h.y,h.x);e+=i}else{h=this.z.getCenter();l=this.z.getBounds().toSpan().toUrlValue();i="&sll="+h.y+","+h.x;i+="&sspn="+l;
i+=Ga(h.y,h.x);e+=i}}else if(this.C){i="&sll="+this.C.y+","+this.C.x;i+=Ga(this.C.y,this.C.x);e+=i}else if(this.w){i="&near="+encodeURIComponent(this.w);e+=i}if(this.U){e+="&nogeocode=t"}return e}
;var Nc=GlocalSearch.fe=3.141592653589;var Mc=GlocalSearch.Yd=6367000;var Qc=GlocalSearch.oe=16093;var Ga=GlocalSearch.centerToGll=function(a,b){var c=Qc;var d=2*c/Mc*2*Nc;var f=a-d;var e=b-d;var i=a+d;var h=b+d;var l="&gll="+parseInt(f*1000000)+","+parseInt(e*1000000)+","+parseInt(i*1000000)+","+parseInt(h*1000000)+"&llsep=500,500";return l}
;GlocalSearch.prototype.createResultHtml=function(a){if(a.html){delete a.html}var b=o(this.D());n(b,E);var c;c=v(a.url,a.title,this.e(),I);g(b,c);var d=o(Fb);if(a.addressLines&&a.addressLines.length>0){for(var f=0;f<a.addressLines.length;f++){var e=a.addressLines[f];var i=Ed;if(f==0){i=Cd}else if(f==1){i=Dd}c=m(e,i);g(d,c)}}else{c=m(a.streetAddress,Mb);g(d,c);var h="";if(a.city!=""){h=a.city;if(a.region!=""){h+=", "}}c=m(h,Gb);g(d,c);c=m(a.region,Jb);g(d,c)}c=m(a.country,Id);g(d,c);g(b,d);if(a.phoneNumbers&&
a.phoneNumbers.length){var l=null;var p=null;var r=a.phoneNumbers[0];var q;for(var s=0;s<a.phoneNumbers.length;s++){q=a.phoneNumbers[s];if(q.type=="main"){l=q;break}if(q.type==""||q.type=="mobile"&&p==null){p=q}}if(l){q=l}else if(p){q=p}else{q=r}c=m(q.number,Hb);g(b,c)}if(a.ddUrl&&a.ddUrl!=""){c=v(a.ddUrl,j["directions"],this.e(),Jd);g(b,c)}if(a.ddUrlToHere&&a.ddUrlToHere!=""&&a.ddUrlFromHere&&a.ddUrlFromHere!=""){c=o(Kd);var t=m(j["get-directions"]+":",Nd);c.appendChild(t);t=v(a.ddUrlToHere,j["to-here"
],this.e(),Lb);c.appendChild(t);t=m("-",va);c.appendChild(t);t=v(a.ddUrlFromHere,j["from-here"],this.e(),Lb);c.appendChild(t);g(b,c)}a.html=b;this.B(a.html)}
;GlocalSearch.prototype.ma=function(a){if(a.html){delete a.html}var b=o(Od);n(b,E);var c;c=v(a.unescapedUrl,a.title,this.e(),I);g(b,c);if(a.content1){c=m(a.content1,ta);g(b,c)}if(a.content2){c=m(a.content2,ta);g(b,c)}if(a.phoneNumber){c=m(a.phoneNumber,Hb);g(b,c)}c=m(a.visibleUrl,N);var d=J(a.impressionUrl,12,12,Eb);g(c,d);g(b,c);if(a.streetAddress&&a.city&&a.region){var f=o(Fb);var e=a.streetAddress+", ";c=m(e,Mb);g(f,c);e=a.city+", ";c=m(e,Gb);g(f,c);e=a.region;c=m(e,Jb);g(f,c);g(b,f)}a.html=b;
this.B(a.html)}
;GlocalSearch.prototype.setCenterPoint=function(a){if(a.centerAndZoom){this.ga=true;this.z=a;this.C=null;this.w="";if(this.k){this.k=null}}else if(a.setCenter){this.ga=false;this.z=a;this.C=null;this.w="";if(this.k){this.k=null}}else if(a.x&&a.y){this.ga=true;this.C=a;this.z=null;this.w="";if(this.k){this.k=null}}else{if(a!=null&&a!=""){this.ga=true;this.z=null;this.w=a;this.C=null;if(this.k){this.k=null}var b=new GlocalSearch;b.setSearchCompleteCallback(this,this.pb,[b,a]);b.execute(a)}}}
;GlocalSearch.prototype.pb=function(a,b){if(a.results&&a.results.length){var c=new Object;c.y=parseFloat(a.results[0].lat);c.x=parseFloat(a.results[0].lng);this.C=c;this.w=b;this.aa=true;this.z=null}}
;var Oc=GlocalSearch.prototype.Wa=function(a,b){if(b){if(this.k==null){var c=null;if(this.z==null){var d=o(qa);this.k=$a(null,gd,this.w==""?null:this.w);g(d,m(j["search-location"],fd));g(d,this.k);g(a,d);c=this.k}d=o("gsc-configSetting");this.T=ka(null,"0",this.U?true:false,pa);g(d,this.T);g(d,m(j["disable-address-lookup"],oa));if(c==null){c=this.T}var f=m(null,"gsc-configSettingSubmit");g(f,ca(j["close"],T));g(d,f);g(a,d);c.focus()}}else{if(this.k){if(this.k.value){this.w=this.k.value;this.setCenterPoint(
this.w)}this.k=null}if(this.T){if(this.T.checked){this.U=true}else{this.U=false}this.T=null}Q(a)}}
;var Ic=GlocalSearch.ADDRESS_LOOKUP_DISABLED="disabled";var Jc=GlocalSearch.ADDRESS_LOOKUP_ENABLED="enabled";GlocalSearch.prototype.setAddressLookupMode=function(a){if(a==Ic){this.U=true}else if(a==Jc){this.U=false}}
;var Lc=GlocalSearch.STATIC_MAP_ZOOM_FARTHEST=17;GlocalSearch.STATIC_MAP_ZOOM_DEFAULT=4;var Kc=GlocalSearch.STATIC_MAP_ZOOM_CLOSEST=0;var nb=GlocalSearch.STATIC_MAP_MAX_POINTS=8;var Pc=GlocalSearch.resizeStaticMapUrl=function(a,b,c,d){var f=a.staticMapUrl;f=f.replace(/&h=\d*/,"&h="+b);f=f.replace(/&w=\d*/,"&w="+c);if(d&&d>=Kc&&d<=Lc){f=f.replace(/&zl=\d*/,"&zl="+d)}a.staticMapUrl=f;return f}
;GlocalSearch.computeStaticMapUrl=function(a,b,c,d){var f="&Point=b&Point.latitude_e6=__LAT__&Point.longitude_e6=__LNG__&Point.iconid=__ICONID__&Point=e";var e="";var i="http://mt.google.com/mapdata?cc=us&tstyp=5&zl=4&w=150&h=100";var h=new Object;h.staticMapUrl=i;i=Pc(h,b,c,d);if(d==null){i=i.replace(/&zl=\d*/,"")}var l=a.length;if(l>nb){l=nb}for(var p=0;p<l;p++){var r;var q;var s=a[p];if(s.lat&&s.lng){if(typeof s.lat=="string"){r=parseFloat(s.lat);q=parseFloat(s.lng)}else{r=s.lat;q=s.lng}}else if(
s.x&&s.y){r=s.y;q=s.x}else{return null}var t=r*1000000;var F=q*1000000;var w=f.replace(/__LAT__/,parseInt(t));w=w.replace(/__LNG__/,parseInt(F));var y=51+p;if(l==1){y=15}w=w.replace(/__ICONID__/,y);e=e+w}var C=i+e;return C}
;
function GblogSearch(){GSearch.call(this);this.n="blog";this.I="/GblogSearch";this.O="http://blogsearch.google.com/blogsearch";this.b=null;this.g=false;this.aa=true;this.M=P(this,rc);this.$="gsc-blogConfig";this.c=null}
GblogSearch.F(GSearch);GblogSearch.RESULT_CLASS="GblogSearch";GblogSearch.AD_CLASS="GwebSearch.ad";var Da=GblogSearch.P=new Array;GblogSearch.RawCompletion=function(a,b,c,d,f){var e=0;if(a){e=parseInt(a)}var i=Da[e];Da[e]=null;i.onSearchComplete(b,c,d,f)}
;GblogSearch.prototype.u=function(a,b,c){var d;if(c==null){d=K(Da,this)}else{d=c}var f;if(b==null){f="google.search.BlogSearch.RawCompletion"}else{f=b}var e=this.G(f,d);if(a){var i;var h=a;if(this.h){h=h+" "+this.h}if(this.b){h=h+" blogurl:"+this.b}i="&q="+encodeURIComponent(h);if(this.g){i=i+"&scoring=d"}e=e+i;this.i=i}return e}
;GblogSearch.prototype.createResultHtml=function(a){if(a.html){delete a.html}var b=o(this.D());n(b,E);var c;c=v(a.postUrl,a.title,this.e(),I);g(b,c);var d=new Date(a.publishedDate);c=m(this.formatToShortDate(d),ua);g(b,c);d=new Date(a.publishedDate);c=m(this.formatToRelativeDate(d),Kb);g(b,c);c=m(a.content,M);g(b,c);c=v(a.blogUrl,a.blogUrl,this.e(),N);g(b,c);a.html=b;this.B(a.html)}
;GblogSearch.prototype.setSiteRestriction=function(a){if(a==null||a==""){this.b=null}else{this.b=a}}
;GblogSearch.prototype.setResultOrder=function(a){if(a==Y){this.g=true}else if(a==Z){this.g=false}else{this.g=false}}
;var rc=GblogSearch.prototype.Wa=function(a,b){if(b){if(this.c==null){var c=o(qa);this.c=ka(null,"0",this.g?true:false,pa);g(c,this.c);g(c,m(j["sort-by-date"],oa));var d=o(T);g(d,ca(j["close"],T));g(c,d);g(a,c);this.c.focus()}else{this.c.checked=this.g?true:false;this.c.focus()}}else{if(this.c){if(this.c.checked){this.setResultOrder(Y)}else{this.setResultOrder(Z)}}}}
;
function GvideoSearch(){GSearch.call(this);this.n="video";this.I="/GvideoSearch";this.O="http://video.google.com/videosearch";this.g=false;this.aa=true;this.M=P(this,Wc);this.$="gsc-videoConfig";this.c=null}
GvideoSearch.F(GSearch);var Vc=GvideoSearch.RESULT_CLASS="GvideoSearch";GvideoSearch.AD_CLASS="GwebSearch.ad";var Ka=GvideoSearch.P=new Array;GvideoSearch.RawCompletion=function(a,b,c,d,f){var e=0;if(a){e=parseInt(a)}var i=Ka[e];Ka[e]=null;i.onSearchComplete(b,c,d,f)}
;GvideoSearch.prototype.u=function(a,b,c,d){var f;if(c==null){f=K(Ka,this)}else{f=c}var e;if(b==null){e="google.search.VideoSearch.RawCompletion"}else{e=b}var i=this.G(e,f,d);if(a){var h;var l=a;if(this.h){l=l+" "+this.h}h="&q="+encodeURIComponent(l);if(this.g){h=h+"&scoring=d"}i=i+h;this.i=h;if(d&&d!=0){this.i=this.i+"&start="+d}}return i}
;GvideoSearch.prototype.createResultHtml=function(a){if(a.html){delete a.html}var b=o(this.D());n(b,E);var c=o(sa);var d=o(ia);var f=W();var e=O(f,0);var i=x(e,sa);var h=x(e,ia);g(i,c);g(h,d);g(b,f);var l=GSearch.scaleImage(a.tbWidth,a.tbHeight,this.m);var p=J(a.tbUrl,l.width,l.height,H);var r=da(a.url,null,this.e(),H);B(r,H);g(r,p);g(c,r);var q;q=v(a.url,a.title,this.e(),I);g(d,q);var s=m(a.content,M);if(na()){s.style.height="2.6em"}g(d,s);var t=new Date(a.published);q=m(this.formatToShortDate(t)
,ua);g(d,q);var F="http://"+a.publisher;q=v(F,a.publisher,this.e(),Ib);g(d,q);a.html=b;this.B(a.html)}
;GvideoSearch.createPlayer=function(a,b){var c=null;if(a.playUrl&&a.playUrl!=""){var d=a.playUrl;var f=Bd;if(b){f=b}if(qb()){var e=document.createElement("object");e.className=f;e.setAttribute("type","application/x-shockwave-flash");e.setAttribute("data",d);c=o(b);c.appendChild(e)}else{var e=document.createElement("embed");e.className=f;e.setAttribute("type","application/x-shockwave-flash");e.setAttribute("src",d);if(a.videoType){if(a.videoType=="Google"){e.setAttribute("bgcolor","#000000")}else{
e.setAttribute("wmode","transparent")}}else{e.setAttribute("bgcolor","#000000")}c=o(b);c.appendChild(e)}}return c}
;GvideoSearch.prototype.setResultOrder=function(a){if(a==Y){this.g=true}else if(a==Z){this.g=false}else{this.g=false}}
;var Wc=GvideoSearch.prototype.Wa=function(a,b){if(b){if(this.c==null){var c=o(qa);this.c=ka(null,"0",this.g?true:false,pa);g(c,this.c);g(c,m(j["sort-by-date"],oa));var d=o(T);g(d,ca(j["close"],T));g(c,d);g(a,c);this.c.focus()}else{this.c.checked=this.g?true:false;this.c.focus()}}else{if(this.c){if(this.c.checked){this.setResultOrder(Y)}else{this.setResultOrder(Z)}}}}
;
function GbookSearch(){GSearch.call(this);this.n="book";this.I="/GbookSearch";this.O="http://books.google.com/books";this.qa=false;this.Ga=null}
GbookSearch.F(GSearch);GbookSearch.RESULT_CLASS="GbookSearch";GbookSearch.AD_CLASS="GwebSearch.ad";var uc=GbookSearch.USER_LIST="user-list";var sc=GbookSearch.TYPE_ALL_BOOKS=1;var tc=GbookSearch.TYPE_FULL_VIEW_BOOKS=2;var Ea=GbookSearch.P=new Array;GbookSearch.RawCompletion=function(a,b,c,d,f){var e=0;if(a){e=parseInt(a)}var i=Ea[e];Ea[e]=null;i.onSearchComplete(b,c,d,f)}
;GbookSearch.prototype.u=function(a,b,c,d){var f;if(c==null){f=K(Ea,this)}else{f=c}var e;if(b==null){e="google.search.BookSearch.RawCompletion"}else{e=b}var i=this.G(e,f,d);if(a){var h;var l=a;if(this.h){l=l+" "+this.h}h="&q="+encodeURIComponent(l);if(this.qa){h=h+"&as_brr=1"}if(this.Ga){h=h+"&as_list="+this.Ga}i=i+h;this.i=h}return i}
;GbookSearch.prototype.createResultHtml=function(a){if(a.html){delete a.html}a.thumbnailHtml=this.ub(a);var b=o(this.D());n(b,E);var c=o(ia);var d=W();var f=O(d,0);var e=x(f,sa);var i=x(f,ia);g(e,a.thumbnailHtml.cloneNode(true));g(i,c);g(b,d);var h;h=v(a.unescapedUrl,a.title,this.e(),I);g(c,h);h=m(j["by"]+"&nbsp;"+a.authors,Fd);g(c,h);h=o(va);g(c,h);if(a.publishedYear){h=m(a.publishedYear,ua);g(c,h)}if(parseInt(a.pageCount)>0){h=m("-&nbsp;"+j["page-count"](a.pageCount),Rd);g(c,h)}h=v("http://books.google.com"
,"books.google.com",this.e(),N);g(c,h);a.html=b;this.B(a.html)}
;GbookSearch.prototype.ub=function(a){var b="http://books.google.com/googlebooks/";var c=o(Gd);var d=o(Vd);var f=J(b+"pages-trans.gif",null,null,Td);g(d,f);f=J(b+"p_edge-trans.gif",null,null,Sd);g(d,f);g(c,d);d=o(Wd);var e=GSearch.scaleImage(a.tbWidth,a.tbHeight,this.m);f=J(a.tbUrl,e.width,e.height,H);var i=da(a.unescapedUrl,null,this.e(),H);B(i,H);g(i,f);g(d,i);g(c,d);return c}
;GbookSearch.prototype.setRestriction=function(a,b){if(a==Zb){if(b){if(b==sc){this.qa=false}else if(b==tc){this.qa=true}else{this.setRestriction(a,null)}}else{this.qa=false}}else if(a==uc){if(b&&b.match(/^[a-zA-Z0-9\-_]*$/)){this.Ga=b}else{this.Ga=null}}}
;
function GsearcherOptions(){this.v=aa;this.hb=this.v;this.root=null;this.m={width:112,height:84};this.Ha={width:100,height:75};this.ha=null}
GsearcherOptions.prototype.setExpandMode=function(a){switch(a){case ac:case ea:case aa:this.v=a;break;default:this.v=aa;break}this.hb=this.v}
;GsearcherOptions.prototype.setRoot=function(a){Q(a);this.root=a}
;GsearcherOptions.prototype.setNoResultsString=function(a){this.ha=a}
;GsearcherOptions.prototype.setImageResultsTbHeight=function(a){if(a>100){a=100}this.m.height=a;this.m.width=Math.round(a*1.33)}
;GsearcherOptions.prototype.setVideoResultsTbHeight=function(a){if(a>100){a=100}this.Ha.height=a;this.Ha.width=Math.round(a*1.33)}
;function GdrawOptions(){this.input=null;this.jb=null;this.t=$}
GdrawOptions.prototype.setInput=function(a){this.input=a}
;GdrawOptions.prototype.setSearchFormRoot=function(a){this.jb=a}
;GdrawOptions.prototype.setDrawMode=function(a){if(a==$||a==la){this.t=a}else{this.t=$}}
;function R(a,b,c){this.f=c;this.Ra=false;this.Ka=false;this.gs=a;this.d=null;this.Ib=u(b,nc,[this]);this.Lb=u(b,za,[this,Ca]);this.Kb=u(b,za,[this,Ba]);this.Jb=u(b,za,[this,mb]);this.Hb=u(b,mc,[this]);this.Gb=u(b,jc,[this]);this.gs.setSearchCompleteCallback(b,GSearchControl.prototype.onSearchComplete,[this]);this.gs.setResultSetSize(b.resultSetSize);this.gs.setLinkTarget(b.Q);this.root=null;this.Fa=null;this.W=null;this.Xa=null;this.J=null;this.V=null;this.p=null;this.fa=true}
GSearchControl.NO_RESULTS_DEFAULT_STRING=j["no-results"];var hc=GSearchControl.TIMEOUT_SHORT=350;var ya=GSearchControl.TIMEOUT_MEDIUM=500;var gc=GSearchControl.TIMEOUT_LONG=700;var ac=GSearchControl.EXPAND_MODE_CLOSED=1;var ea=GSearchControl.EXPAND_MODE_OPEN=2;var aa=GSearchControl.EXPAND_MODE_PARTIAL=3;var $=GSearchControl.DRAW_MODE_LINEAR=1;var la=GSearchControl.DRAW_MODE_TABBED=2;function GSearchControl(a){if(!google.loader.KeyVerified){if(GSearchControl.keyCheck()){google.loader.KeyVerified=true}
else{return}}this.resultSetSize=G;this.t=$;this.root=null;this.searchButton=null;this.input=null;this.Da=ya;this.Bb=u(this,kc,[null]);this.Cb=u(this,lc,[null]);this.ia=null;this.Za=null;this.Ya=null;this.X=null;this.Eb=false;this.Z=false;this.Q=db;this.va=j["copy"];this.a=new Array;this.Ia=new Array;var b;if(a){for(var c=0;c<a.length;c++){b=new R(a[c],this,false);this.a.push(b)}}}
try{GSearchControl.appPath=window.location.href}catch(fe){GSearchControl.appPath=null}GSearchControl.keyCheck=function(){var a=true;if(ee(window.location.host)){return true}if(google.loader.LoadFailure){if(google.loader.OriginalAppPath&&GSearchControl.appPath){if(GSearchControl.appPath==google.loader.OriginalAppPath){google.loader.LoadFailure=false;a=true}else{google.loader.LoadFailure=false;a=true}}}google.loader.KeyVerified=true;google.loader.LoadFailure=false;return a}
;GSearchControl.prototype.addSearcher=function(a,b){if(!b){b=new GsearcherOptions}if(a.n=="ad"){this.Ia.push(a)}else{a.H=null;var c=new R(a,this,b);this.a.push(c)}}
;GSearchControl.prototype.draw=function(a,b){var c=null;var d=null;if(b){if(b.t){this.t=b.t;c=b.input;d=b.jb}else{this.t=$}}else{this.t=$}this.root=o(hd);if(c!=null){this.input=c;this.input.onkeyup=this.Bb;this.input.onpaste=this.Cb}else{if(d==null){d=this.root}var f=new GSearchForm(true,d);f.setOnSubmitCallback(this,GSearchControl.prototype.submit);f.setOnClearCallback(this,GSearchControl.prototype.clearAllResults);this.input=f.input}this.Y=o(U);if(this.t==la){this.A=o(Db);g(this.root,this.A);this.l=
new Array;this.s=0;for(var e=0;e<this.a.length;e++){var i=new Object;var h=this.a[e].gs.Ab();h=h.replace(/ /g,"&nbsp;");i.E=m(h);i.L=null;i.E.onclick=u(this,pc,[e]);this.l[e]=i;g(this.A,i.E);var l=va;if(qb()){l=l+" "+va+"-opera"}var p=xa(" ",l);g(this.A,p);this.a[e].f.setExpandMode(ea)}}g(this.root,this.Y);for(var e=0;e<this.a.length;e++){if(this.a[e].f.root){this.a[e].fa=false;this.a[e].root=this.a[e].f.root;n(this.a[e].root,Sa);z(this.a[e].root,L);n(this.a[e].root,U)}else{this.a[e].root=o(Sa)}if(
this.a[e].gs.ka){var r=Sa+"-"+this.a[e].gs.ka;n(this.a[e].root,r)}if(this.t==la){this.l[e].L=this.a[e].root}var q=W(null,null,rd);var s=O(q,0);this.a[e].S=x(s,zd);var t=x(s,dd);this.a[e].Fa=m("",Ad);g(this.a[e].S,this.a[e].Fa);var F=m(this.a[e].gs.yb(),xd);g(this.a[e].Fa,F);this.a[e].W=m("",ud);g(this.a[e].S,this.a[e].W);var w=m();var y=m(j["blank"],qd);var C=m(j["blank"],pd);var D=m(j["blank"],od);y.title=j["show-one-result"];C.title=j["show-more-results"];D.title=j["show-all-results"];g(w,y);g(
w,C);g(w,D);y.onclick=this.a[e].Lb;C.onclick=this.a[e].Kb;D.onclick=this.a[e].Jb;this.a[e].Xa=w;this.a[e].$a(Aa);g(this.a[e].S,this.a[e].Xa);this.a[e].Fa.onclick=this.a[e].Ib;if(this.a[e].gs.M){this.a[e].o=xa("",ed);bb(this.a[e].o,j["blank"]);n(this.a[e].o,ha);g(t,this.a[e].o);this.a[e].o.onclick=this.a[e].Hb;this.a[e].o.title=j["settings"];this.a[e].J=o(vb);n(this.a[e].J,this.a[e].gs.$);this.a[e].V=Za(vb);n(this.a[e].V,this.a[e].gs.$);this.a[e].V.onsubmit=this.a[e].Gb;g(this.a[e].J,this.a[e].V);
this.a[e].J.style.display="none"}this.a[e].p=o(sd);n(this.a[e].p,this.a[e].gs.Ta());if(this.a[e].f.root==null){g(this.Y,this.a[e].root)}g(this.a[e].root,q);if(this.a[e].J){g(this.a[e].root,this.a[e].J)}g(this.a[e].root,this.a[e].p)}if(this.t==la){for(var e=0;e<this.a.length;e++){n(this.l[e].E,wd);n(this.l[e].L,vd);if(e==this.s){n(this.l[e].E,Va);n(this.l[e].L,Ta)}else{n(this.l[e].E,Wa);n(this.l[e].L,Ua)}}}if(a){Tb(a,this.root);var fa=this.xb();if(fa&&fa<300){this.Eb=true;n(this.root,nd)}}}
;GSearchControl.prototype.setTimeoutInterval=function(a){switch(a){case hc:case ya:case gc:this.Da=a;break;default:this.Da=ya;break}}
;var fc=GSearchControl.KEEP_LABEL_SAVE="save";var ec=GSearchControl.KEEP_LABEL_KEEP="keep";var dc=GSearchControl.KEEP_LABEL_INCLUDE="include";var cc=GSearchControl.KEEP_LABEL_COPY="copy";var bc=GSearchControl.KEEP_LABEL_BLANK="blank";GSearchControl.prototype.setOnKeepCallback=function(a,b,c){if(c){switch(c){case fc:case ec:case dc:case cc:case bc:this.va=j[c];break;default:this.va=c;break}}this.ia=P(a,b)}
;var pc=GSearchControl.prototype.ne=function(a){if(this.s==a){return}z(this.l[this.s].E,Va);z(this.l[this.s].L,Ta);n(this.l[this.s].E,Wa);n(this.l[this.s].L,Ua);this.s=a;n(this.l[this.s].E,Va);n(this.l[this.s].L,Ta);z(this.l[this.s].E,Wa);z(this.l[this.s].L,Ua)}
;GSearchControl.prototype.submit=function(){if(this.input.value.length){this.execute()}else{this.clearAllResults()}return false}
;GSearchControl.prototype.execute=function(a){var b;if(a){b=a;this.input.value=b}else{b=this.input.value}if(b.length){this.Z=false;B(this.Y,L);if(this.A){B(this.A,Xa)}for(var c=0;c<this.a.length;c++){if(!this.a[c].fa){z(this.a[c].root,U);n(this.a[c].root,L)}if(this.Za){this.Za(this,this.a[c].gs,b)}if(this.a[c].gs.H){this.a[c].gs.H=null}this.a[c].gs.execute(b)}for(var c=0;c<this.Ia.length;c++){this.Ia[c].execute(b)}}}
;var kc=GSearchControl.prototype.$d=function(){var a=this.input.value;if(a&&a!=""){if(this.X){clearTimeout(this.X)}this.X=setTimeout(u(this,GSearchControl.prototype.execute,[null]),this.Da)}}
;var lc=GSearchControl.prototype.ae=function(){if(this.X){clearTimeout(this.X)}this.X=setTimeout(u(this,GSearchControl.prototype.execute,[null]),this.Da)}
;GSearchControl.prototype.setResultSetSize=function(a){var b=true;switch(a){case X:this.resultSetSize=a;b=true;break;default:case G:this.resultSetSize=G;b=false;break}for(var c=0;c<this.a.length;c++){this.a[c].gs.setResultSetSize(a)}}
;GSearchControl.prototype.setLinkTarget=function(a){this.Q=a;for(var b=0;b<this.a.length;b++){this.a[b].gs.setLinkTarget(a)}}
;GSearchControl.prototype.setNoResultsString=function(a){for(var b=0;b<this.a.length;b++){this.a[b].f.setNoResultsString(a)}}
;var nc=GSearchControl.prototype.ee=function(a){if(a.Ra){this.R(a,false)}else{this.R(a,true)}}
;GSearchControl.prototype.R=function(a,b,c){if(!b){z(a.S,ra);n(a.S,ha);a.Ra=false;a.p.style.display="none";if(c){var d="(0)";a.W.innerHTML=d}else{var d="("+(a.gs.results.length+a.gs.adResults.length)+")";a.W.innerHTML=d}}else{z(a.S,ha);n(a.S,ra);a.Ra=true;a.p.style.display="block"}}
;var jc=GSearchControl.prototype.Zd=function(a){this.ja(a,false,true);return false}
;var mc=GSearchControl.prototype.de=function(a){if(a.gs.aa){if(a.Ka){this.ja(a,false,true)}else{this.ja(a,true,true)}}}
;GSearchControl.prototype.ja=function(a,b,c){if(!b){if(a.o){z(a.o,ra);n(a.o,ha);a.o.innerHTML=j["blank"];a.Ka=false;a.gs.M(a.V,false);a.J.style.display="none";if(c){this.execute()}}}else{if(a.o){n(a.o,ra);z(a.o,ha);a.o.innerHTML=j["close"];a.Ka=true;a.J.style.display="block";a.gs.M(a.V,true)}}}
;var lb=GSearchControl.prototype.be=function(a,b){if(this.ia){b.gs.eb();this.ia(a)}}
;GSearchControl.prototype.cancelSearch=function(){this.Z=true}
;GSearchControl.prototype.clearAllResults=function(){this.input.value="";B(this.Y,U);if(this.A){B(this.A,Db)}for(var a=0;a<this.a.length;a++){if(!this.a[a].fa){z(this.a[a].root,L);n(this.a[a].root,U)}var b=this.a[a];Q(b.p);b.d=null;this.R(b,false,true);this.ja(b,false,false)}}
;GSearchControl.prototype.onSearchComplete=function(a){var b;var c;var d=false;var f;if(this.Z){return}Q(a.p);a.d=null;this.R(a,false,true);this.ja(a,false,false);a.$a(Aa);var e=a.gs.results;if(a.gs.ba&&a.gs.completionStatus>=400){e=new Array;e.push(a.gs.vb())}else if(e.length==0&&a.f.ha&&a.gs.completionStatus==200){e=new Array;e.push(a.gs.wb(a.f.ha))}for(var c=0;c<e.length;c++){b=e[c];if(!b.html){a.gs.createResultHtml(b)}if(b.html){d=true;f=o(a.gs.Ta());n(f,Ra);if(a.gs.ka){var i=Ra+"-"+a.gs.ka;n(
f,i)}var h=b.html.cloneNode(true);if(b.GsearchResultClass==Hc){if(a.f.m){if(a.f.m.width!=a.gs.m.width||a.f.m.height!=a.gs.m.height){var l=h.getElementsByTagName("img");for(var p=0;p<l.length;p++){GSearch.scaleImage(b.tbWidth,b.tbHeight,a.f.m,l[p],true)}}}}else if(b.GsearchResultClass==Vc){if(a.f.Ha){var l=h.getElementsByTagName("img");for(var p=0;p<l.length;p++){GSearch.scaleImage(b.tbWidth,b.tbHeight,a.f.Ha,l[p])}}}g(f,h);if(this.ia){var r=this.va;var q=m("",yb);bb(q,r);g(f,q);q.onclick=u(this,lb,
[b,a])}var s=a.gs.gb;if(c>=s){if(!a.d){a.d=o(wb);g(a.p,a.d);if(a.f.v==aa){a.d.style.display="none"}}g(a.d,f)}else{g(a.p,f)}}}if(!a.d&&a.gs.cursor){a.d=o(wb);g(a.p,a.d)}if(a.d&&a.gs.i&&a.gs.gwsUrl){f=v(a.gs.gwsUrl,j["more-results"]+"&nbsp;&raquo;",a.gs.e(),yd);if(a.gs.cursor){var t=o(jd);var F=this.tb(a);t.appendChild(F);t.appendChild(f);g(a.d,t)}else{g(a.d,f)}}var w=a.d?a.d:a.p;if(a.gs.adResults.length){var y=o(Yc);for(var c=0;c<a.gs.adResults.length;c++){if(c==0){var f=m(j["sponsored-links"],Ld)
;g(y,f)}b=a.gs.adResults[c];if(!b.html){a.gs.ma(b)}if(b.html){d=true;f=o(a.gs.Ta());n(f,Ra);g(f,b.html.cloneNode(true));if(this.ia){var q=m(this.va,yb);g(f,q);q.onclick=u(this,lb,[b,a])}g(y,f)}}g(w,y)}if(!d){a.W.innerHTML="(0)";a.p.innerHTML="";this.R(a,false)}else{var C;var C="("+(a.gs.results.length+a.gs.adResults.length)+")";a.W.innerHTML=C;if(a.f.v==aa||a.f.v==ea){this.R(a,true)}else{this.R(a,false)}var D=a.gs.getAttribution(true);if(D){g(a.p,D)}}a.f.v=a.f.hb;if(this.Ya){this.Ya(this,a.gs)}}
;GSearchControl.prototype.tb=function(a){var b=o(id);var c=a.gs.cursor;for(var d=0;d<c.pages.length;d++){var f=ld;if(d==c.currentPageIndex){f=f+" "+kd}var e=m(c.pages[d].label,f);e.onclick=u(this,oc,[a,d]);b.appendChild(e)}return b}
;var kb=GSearchControl.Vd={border:"border",borderColor:"border-color",borderStyle:"border-style",borderWidth:"border-width",borderTop:"border-top",borderTopColor:"border-top-color",borderTopStyle:"border-top-style",borderTopWidth:"border-top-width",borderRight:"border-right",borderRightColor:"border-right-color",borderRightStyle:"border-right-style",borderRightWidth:"border-right-width",borderBottom:"border-bottom",borderBottomColor:"border-bottom-color",borderBottomStyle:"border-bottom-style",borderBottomWidth:
"border-bottom-width",borderLeft:"border-left",borderLeftColor:"border-left-color",borderLeftStyle:"border-left-style",borderLeftWidth:"border-left-width",color:"color",cssFloat:"float",styleFloat:"float",clear:"clear",cursor:"cursor",display:"display",font:"font",fontFamily:"font-family",fontSize:"font-size",fontStyle:"font-style",fontWeight:"font-weight",height:"height",margin:"margin",marginTop:"margin-top",marginRight:"margin-right",marginBottom:"margin-bottom",marginLeft:"margin-left",overflow:
"overflow",padding:"padding",paddingTop:"padding-top",paddingRight:"padding-right",paddingBottom:"padding-bottom",paddingLeft:"padding-left",textAlign:"text-align",textDecoration:"text-decoration",textTransform:"text-transform",verticalAlign:"vertical-align",visibility:"visibility",width:"width"};var ic=GSearchControl.inlineCurrentStyle=function(a,b){if(rb()){alert("GSearchControl.inlineCurrentStyle is not supported on Safari");return}var c=true;if(b){c=b}if(c){for(var d=0;d<a.childNodes.length;d++
){ic(a.childNodes[d],true)}}if(a.nodeType==1){var f;var e;var i=false;var h=false;if(window.getComputedStyle){f=window.getComputedStyle(a,null);e=true;i=true}else if(a.currentStyle){f=a.currentStyle;e=false;i=true}if(i){for(var l in f){if(kb[l]){var p=kb[l];var r=f[l];if(l=="display"&&r=="none"){a.innerHTML="";h=true}if(f[l]!=""){if(e){a.style.setProperty(p,r,"")}else{a.style.setAttribute(p,r,"")}}}}if(h){if(e==false){a.outerHTML="<div style='display:none'/>"}}}}}
;GSearchControl.prototype.xb=function(a){var b=a?a:this.root;var c=null;if(window.getComputedStyle){c=window.getComputedStyle(b,null)}else if(b.currentStyle){c=b.currentStyle}else if(document.defaultView.getComputedStyle){c=document.defaultView.getComputedStyle(b,null)}if(c){return parseInt(c["width"])}else{return 300}}
;GSearchControl.prototype.setSearchCompleteCallback=function(a,b){this.Ya=P(a,b)}
;GSearchControl.prototype.setSearchStartingCallback=function(a,b){this.Za=P(a,b)}
;var Aa=R.SRC_INIT=0;var Ca=R.SRC_ONE=1;var Ba=R.SRC_MORE=2;var mb=R.SRC_ALL=3;R.prototype.$a=function(a){var b=td+" ";if(a==Aa){if(this.f.v==aa){b+=Ab}else if(this.gs.getResultSetSize()==G){b+=zb}else{b+=sb}}else if(a==Ca){b+=Ab}else if(a==Ba){b+=zb}else{b+=sb}B(this.Xa,b)}
;var za=GSearchControl.prototype.ce=function(a,b){a.$a(b);var c=false;switch(b){default:case Ca:if(a.d){a.d.style.display="none"}break;case Ba:if(a.d){a.d.style.display="block"}if(a.gs.getResultSetSize()!=G){c=true}a.gs.setResultSetSize(G);break;case mb:if(a.d){a.d.style.display="block"}if(a.gs.getResultSetSize()!=X){c=true}a.gs.setResultSetSize(X);break}if(c){var d;d=this.input.value;if(d.length){this.Z=false;B(this.Y,L);if(this.A){B(this.A,Xa)}if(!a.fa){z(a.root,U);n(a.root,L)}a.f.v=ea;a.gs.execute(
d)}}}
;var oc=GSearchControl.prototype.he=function(a,b){this.Z=false;B(this.Y,L);if(this.A){B(this.A,Xa)}if(!a.fa){z(a.root,U);n(a.root,L)}a.f.v=ea;a.gs.gotoPage(b)}
;function GSearchForm(a,b,c){var d=Za(Bb);d.acceptCharset="utf-8";var f=null;var e=j["search-uc"];var i=j["search"];if(c){if(c.buttonText){e=c.buttonText;i=c.buttonText}if(c.clickableBrandingUrl){var h="http://www.google.com";if(typeof c.clickableBrandingUrl=="string"&&c.clickableBrandingUrl.match(/^http:\/\/[a-z]*\.google\.com/)){h=c.clickableBrandingUrl}f=da(h,null,"_BLANK");f.className=$c}}this.searchButton=ca(e,Cb);this.searchButton.title=i;var l;if(a){l=ad;this.Ja=m(j["blank"],ub);this.Ja.title=
j["clear-results"]}else{l=bd}this.input=$a(null,xb,null);this.input.name="search";var p=W(null,null,Bb);g(d,p);var r=O(p,0);this.fb=x(r,xb);var q=x(r,Cb);if(a){var s=x(r,ub);g(s,this.Ja)}g(this.fb,this.input);g(q,this.searchButton);var t=W(null,null,Zc);g(d,t);r=O(t,0);this.userDefinedCell=x(r,cd);var F=x(r,tb);var w=x(r,l);var y=m(j["powered-by"],tb);var C=google.loader.ServiceBase+"/css/small-logo.png";var D=cb(C,51,15,l);g(F,y);if(f){g(f,D);g(w,f)}else{g(w,D)}this.ib=d;Q(b);g(b,this.ib)}
GSearchForm.prototype.setOnSubmitCallback=function(a,b){this.kb=u(this,qc,[this]);this.Ba=u(a,b,[this]);this.ib.onsubmit=this.kb;this.searchButton.onclick=this.kb}
;GSearchForm.prototype.setOnClearCallback=function(a,b){this.Ja.onclick=u(a,b,[this])}
;var qc=GSearchForm.prototype.me=function(a){var b=this.fb.offsetWidth;var c=this.input.value;if(this.Ba){this.Ba()}if(na()){var d=this;var f;if(c.length*8>=b){f=b-6}else{f="99%"}setTimeout(function(){d.input.style.width=f}
,1)}return false}
;GSearchForm.prototype.execute=function(a){if(a){this.input.value=a}if(this.Ba){this.Ba()}}
;
google_exportSymbol("google.search.WebSearch",GwebSearch);google_exportSymbol("google.search.BookSearch",GbookSearch);google_exportSymbol("google.search.BlogSearch",GblogSearch);google_exportSymbol("google.search.VideoSearch",GvideoSearch);google_exportSymbol("google.search.NewsSearch",GnewsSearch);google_exportSymbol("google.search.LocalSearch",GlocalSearch);google_exportSymbol("google.search.ImageSearch",GimageSearch);google_exportSymbol("google.search.AdSenseSearch",GadSenseSearch);google_exportSymbol(
"google.search.SaSearch",GsaSearch);google_exportSymbol("google.search.Search",GSearch);google_exportSymbol("google.search.SearchControl",GSearchControl);google_exportSymbol("google.search.SearchForm",GSearchForm);google_exportSymbol("google.search.SearcherOptions",GsearcherOptions);google_exportSymbol("google.search.DrawOptions",GdrawOptions);if(!google.search.NoOldNames){google_exportSymbol("GwebSearch",GwebSearch);google_exportSymbol("GbookSearch",GbookSearch);google_exportSymbol("GblogSearch"
,GblogSearch);google_exportSymbol("GvideoSearch",GvideoSearch);google_exportSymbol("GnewsSearch",GnewsSearch);google_exportSymbol("GlocalSearch",GlocalSearch);google_exportSymbol("GimageSearch",GimageSearch);google_exportSymbol("GadSenseSearch",GadSenseSearch);google_exportSymbol("GsaSearch",GsaSearch);google_exportSymbol("GSearch",GSearch);google_exportSymbol("GSearchControl",GSearchControl);google_exportSymbol("GSearchForm",GSearchForm);google_exportSymbol("GsearcherOptions",GsearcherOptions);google_exportSymbol(
"GdrawOptions",GdrawOptions)};

 })()
})()