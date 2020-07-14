begun_auto_url = 'http://autocontext.begun.ru/sense.php?';

begun_last_modified_time = Date.parse(document.lastModified) / 1000;
begun_referrer_url = document.referrer;


function begun_quoted(str) {
  return (str != null) ? '"' + str + '"' : '""';
}

function begun_escape(str) {
  str = escape(str);
//  str = str.split('/').join('%2F');
  return str;
}

function begun_append(param, value) {
  if (value) {
    window.begun_auto_url += '&' + param + '=' + begun_escape(value);
  }
}

function begun_autocontext() {
  var w = window;
  var stopwords;
  if (stopwords == null) stopwords = '';
  begun_append('pad_id', w.begun_auto_pad);
  begun_append('ref', w.begun_referrer_url);
  begun_append('lmt', w.begun_last_modified_time);
  begun_append('real_refer', document.location);
  begun_append('stopwords', w.stopwords);
  begun_append('begun_self_keywords' , w.begun_self_keywords);
  begun_append('n', w.begun_auto_limit);
  begun_append('begun_utf8', window.begun_utf8);
  begun_append('begun_koi8', window.begun_koi8);
  begun_append('begun_scroll' , window.begun_scroll);
  begun_append('many_span' , window.many_span);
  begun_append('misc_id' , window.begun_misc_id);
  begun_append('begun_multispan' , window.begun_multispan);
if (window.begun_scroll)
  { 
    document.write('<sc'+'ript type="text/javascript" src="http://autoscroll.begun.ru/prototype.lite.js"></scr'+'ipt>');
    document.write('<sc'+'ript type="text/javascript" src="http://autoscroll.begun.ru/moo.fx.js"></scr'+'ipt>');
    document.write('<sc'+'ript type="text/javascript" src="http://autoscroll.begun.ru/moo.fx.scroll.js"></scr'+'ipt>');
    document.write('<sc'+'ript type="text/javascript" src="http://autoscroll.begun.ru/begunScroll.js"></scr'+'ipt>');
  
  }
  w.begun_auto_url = w.begun_auto_url.substring(0, 1524);
  w.begun_auto_url = w.begun_auto_url.replace(/%[0-9a-fA-F]?$/, '');

  document.write('<scr' + 'ipt language="JavaScript1.1"' + ' src=' + begun_quoted(w.begun_auto_url) +'></scr' + 'ipt>');
}

var PositionBA = {
    cumulativeOffset: function(element) {
        var valueT = 0, valueL = 0;
        do {
            valueT += element.offsetTop  || 0;
            valueL += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);
        return [valueL, valueT];
    }
}

begun_autocontext();



