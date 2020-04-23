try {
  comments.setup({
    afterDelete: function(params){
      if (ge('actions' + params.id))
        ge('actions' + params.id).style.visibility = "hidden";
    },
    afterRestore: function(params){
      if (ge('actions' + params.id))
        ge('actions' + params.id).style.visibility = "visible";
    }
  });
} catch(e) {
}

var errorBox = null;
function show_error_box(message) {
  if (!errorBox) {
    errorBox = new MessageBox({title: board_error});
    errorBox.addButton({label: board_ok, onClick: function() { errorBox.hide(); }});
  }
  errorBox.content(message).show();
}

function escape_handler(todo) {
  return function(e) {
    if (e.keyCode == 27) {
      todo();
    }
  }
}

var answer_text = '';
var current_act = '';

function init() {
  current_act = ge('current_act') && ge('current_act').innerHTML.toLowerCase();
  if (current_act && ge('pages_count')) {
    if ((current_act == 't') || (current_act == 'topics')) {
      if (ge('scroller')) {
        setTimeout("ge('scroller').innerHTML = ''", 1000);
      }
    }
  }
}

function getPage(offset) {
  if (window.event && (window.event.which == 2 || window.event.button == 1)) {
    return true;
  }
  if (ge('loading_pages_up')) {
    ge('loading_pages_up').style.display = 'inline';
    if (ge('pages_count').value > 1) {
      ge('loading_pages_down').style.display = 'inline';
    }
  }
  var params = {offset: offset};
  if (ge('order') && ge('order').value) {
    params.order = ge('order').value;
  }
  ajaxHistory.go(params);
  return false;
}

var posts_or_topics_page_loaded = function(res, text) {
  var response = eval('(' + text + ')');
  set_posts_or_topics_data(response);
  if (ge('order')) {
    uiOrder.val(response.order);
  }
  window.scroll(0, 0);
}

function set_posts_or_topics_data(data, clear) {
  hide('loading_pages_up', 'loading_pages_down');
  ge('rows_content').innerHTML = data.html;
  ge('summary').innerHTML = data.summary;
  ge('pages_top').innerHTML = data.pages;
  ge('pages_bottom').innerHTML = data.pages;
  if (current_act == 't') {
    if (data.next_page) {
      ajaxHistory.addToCache(data.next_page.hash, data.next_page.text);
      preloadImages(data.next_page.text);
    } else if (intval(data.next_offset)) {
      ajaxHistory.preLoad('offset=' + intval(data.next_offset), function(obj, text) {
        preloadImages(text);
      });
    }else if(clear){
      ajaxHistory.clearCache('default');
    }
  }
}

var image_cache = {};
function preloadImages(text) {
  var m = {};
  var vk = location.host.indexOf('vk.com') != -1;
  if (vk) {
    m = text.match(/http:\\\/\\\/cs\d*\.vk\.com\\\/[ug]\d*\\\/[a-f0-9_]*\.jpg/gi);
  } else {
    m = text.match(/http:\\\/\\\/cs\d*\.vkontakte\.ru\\\/[ug]\d*\\\/[a-f0-9_]*\.jpg/gi);
  }
  for (var i in m) {
    var val = '' + m[i];
    if (val.substr(0, 4) == 'http') {
      var src = val.replace(/\\\\/g, '\\').replace(/\\\//g, '/');
      if (!image_cache[src]) {
        image_cache[src] = new Image();
        image_cache[src].src = src;
      }
    }
  }
}

var posting_answer = false;
function post_answer() {
  if (posting_answer) {
    return;
  }
  posting_answer = true;
  var callback = function(ajaxObj, text) {
    posting_answer = false;
    hide('post_answer_progress');
    ge('post').value = '';
    if (text == "flood_control") {
      show_error_box(board_too_fast);
      ge('post').value = answer_text;
    } else if (text.charAt(0) == 'r') {
      window.location.href = text.substr(1);
    } else {
      set_posts_or_topics_data(eval('(' + text + ')'), true);
    }
  };
  answer_text = ge('post').value;
  ge('post').value = '';
  ge('post_answer_progress').style.display = 'inline';
  var params = {'act': 'a_post_answer', 'tid': ge('tid').value, 'post': answer_text, 'hash': ge('hash').value, 'gid': ge('gid').value, 'add_bookmark': ge('add_bookmark').value};
  var cancel = function(obj, text) {
    posting_answer = false;
    hide('post_answer_progress');  
    ge('post').value = answer_text;
  }
  var stop = function(obj, text) {
    posting_answer = false;
    hide('post_answer_progress');  
  }
  var options = {onSuccess: callback, onFail: cancel, onCaptchaShow: stop, onCaptchaHide: cancel};
  Ajax.postWithCaptcha('/board.php', params, options);
}

var edit_comment_escape_handler = function(e, post_id) { var f = escape_handler(function() { cancel_edit_comment(post_id); }); f(e); };

function edit_comment(post_id) {
  ge('edit_comment_link' + post_id).innerHTML = '<img src="/images/upload.gif"/>';
  var ajax = new Ajax();
  ajax.onDone = function(obj, text) {
    if (text.length == 1) {
      ge('edit_comment_link' + post_id).innerHTML = '<a href="javascript: edit_comment(' + post_id + ')">' + board_edit + '</a>';
      
      if (text == 'd') {
        show_error_box(board_cannot_edit);
      } else { //if (text == "e")
        show_error_box(board_error_occurred);
      }
    } else {
      var comment = ge('comment' + post_id);
      ge('edit_comment_link' + post_id).style.display = 'none';
      var margin_top = "-4px", margin_left = "-4px"; // For Google Chrome, Opera.
      var width = "396px";
      if (browser.msie) {
        margin_top = "-5px"; // For IE.
        width = "380px";
      } else if (browser.safari) {
        margin_left = "-7px"; // For Safari Windows.
      } else if (browser.mozilla) {
        margin_left = "-5px";
      }
      comment.style.overflow = "visible";
      comment.innerHTML = '<textarea id="comment' + post_id + 'edit" style="width: ' + width + '; height: ' + comment.offsetHeight + 'px; margin-top: ' + margin_top + '; margin-left: ' + margin_left + '; line-height: 14px; margin-bottom: 0px;" onkeydown="edit_comment_escape_handler(event, ' + post_id + ')">' + text.substr(1) + '</textarea>' +
      '<div style="margin-top: 5px; margin-left: ' + margin_left + '; height: 23px"><ul class="nNav btnList"><li ><b class="nc"><b class="nc1"><b></b></b><b class="nc2"><b></b></b></b><span class="ncc"><a onclick="if (!linksAllowed && hasLinks(ge(\'post\').value)) {alert(\'' + board_links_forbidden + '\'); return false;}" href="javascript: this.disabled = true; do_edit_comment(' + post_id + ')">' + board_done + '</a></span><b class="nc"><b class="nc2"><b></b></b><b class="nc1"><b></b></b></b></li><li><b class="nc"><b class="nc1"><b></b></b><b class="nc2"><b></b></b></b><span class="ncc"><a href="javascript: cancel_edit_comment(' + post_id + ')">' + board_cancel + '</a></span><b class="nc"><b class="nc2"><b></b></b><b class="nc1"><b></b></b></b></li></ul><div id="edit_answer' + post_id + '_progress" style="margin: 5px 10px 0px 10px; vertical-align: 0px; display: none" class="fl_l"><img src="images/upload.gif"/></div></div>' +
      '<div id="comment' + post_id + 'text" style="display: none">' + comment.innerHTML + '</div>';
      ge('post' + post_id).parentNode.style.paddingBottom = "5px";
      new Autosize(ge('comment' + post_id + 'edit'));
      var c = ge('comment' + post_id + 'edit')
      c.focus();
      setSelRange(c, c.value.length, c.value.length);
    }
  };
  ajax.post('/board.php', {'act': 'a_get_edit_comment', 'pid': post_id, 'tid': ge('tid').value});
}

function do_edit_comment(post_id) {
  ge('edit_answer' + post_id + '_progress').style.display = 'block';
  var ajax = new Ajax();
  ajax.onDone = function(ajaxObj, text) {
    if (text.length == 1) {
      ge('edit_answer' + post_id + '_progress').style.display = 'none';      

      if (text == "e") {
        show_error_box(board_error_occurred);
      } else if (text == 'd') {
        show_error_box(board_cannot_edit);
      } else if (text == 'l') {
        show_error_box(board_any_links_forbidden);
      } else if (text == 'v') {
        show_error_box(board_enter_text);
      }
    } else {
      ge('edit_comment_link' + post_id).style.display = 'block';
      ge('edit_comment_link' + post_id).innerHTML = '<a href="javascript: edit_comment(' + post_id + ')">' + board_edit + '</a>';
      ge('comment' + post_id).innerHTML = text.substr(1);
      ge('comment' + post_id).style.overflow = "hidden";
      ge('post' + post_id).parentNode.style.paddingBottom = "10px";
    };
  };
  ajax.post('/board.php', {'act': 'a_edit_comment', 'pid': post_id, 'tid': ge('tid').value, 'post': ge('comment' + post_id + 'edit').value});
}

function cancel_edit_comment(post_id) {
  ge('edit_comment_link' + post_id).style.display = 'block';
  ge('edit_comment_link' + post_id).innerHTML = '<a href="javascript: edit_comment(' + post_id + ')">' + board_edit + '</a>';
  ge('comment' + post_id).innerHTML = ge('comment' + post_id + 'text').innerHTML;
  ge('comment' + post_id).style.overflow = "hidden";
  ge('post' + post_id).parentNode.style.paddingBottom = "10px";
}

function delete_comment(post_id) {
  var ajax = new Ajax();
  ajax.onDone = function(obj, text) {
    ge('post' + post_id).style.display = 'none';
    ge('postContainer' + post_id).innerHTML += text;
  }
  ajax.onFail = function(obj, text) {
    text = text ? text : "Server error.";
    ge('post' + post_id).style.display = 'none';
    ge('postContainer' + post_id).innerHTML += '<div class="msg_wall" style="margin: 0">' + text + '</div>';
  }

  ajax.post('board.php', {act: 'a_delete_comment', id: post_id, tid: ge('tid').value});
}

function restore_comment(post_id) {
  var ajax = new Ajax();
  ajax.onDone = function(obj, text) {
    ge('postContainer' + post_id).innerHTML = '<div id="post' + post_id + '" class="postData clearFix">' + ge('post' + post_id).innerHTML + '</div>';
    if (text != "good") {
      ge('post' + post_id).style.display = 'none';
      ge('postContainer' + post_id).innerHTML += '<div class="msg_wall" style="margin: 0">Server error.</div>';
    }
  }
  ajax.onFail = function(obj, text) {
    text = text ? text : "Server error.";
    ge('postContainer' + post_id).innerHTML = '<div id="post' + post_id + '" class="postData clearFix">' + ge('post' + post_id).innerHTML + '</div>';
    ge('post' + post_id).style.display = 'none';
    ge('postContainer' + post_id).innerHTML += '<div class="msg_wall" style="margin: 0">' + text + '</div>';
  }

  ajax.post('board.php', {act: 'a_restore_comment', id: post_id, tid: ge('tid').value});
}

function report_spam(post_id) {
  var ajax = new Ajax();
  ajax.onDone = function(obj, text) {
    ge('post' + post_id).style.display = 'none';
    ge('postContainer' + post_id).innerHTML += text;
  }
  ajax.onFail = function(obj, text) {
    text = text ? text : "Server error.";
    ge('post' + post_id).style.display = 'none';
    ge('postContainer' + post_id).innerHTML += '<div class="msg_wall" style="margin: 0">' + text + '</div>';
  }

  ajax.post('board.php', {act: 'a_report_spam', id: post_id, tid: ge('tid').value});
}

var create_voting_shown = 1;
var edit_topic_shown = 2;
var edit_voting_shown = 3;
var delete_topic_shown = 4;
var delete_voting_shown = 5;
var spam_topic_shown = 6;

var topic_editing_shown = 0;

var topic_editing_controller = {
  fps: 60,
  
  last_on_hide: null,
  visible: false,

  show: function(prepare_text, new_topic_editing_shown, on_hide, on_shown) {
    if (topic_editing_controller.visible) {
      topic_editing_controller.hide(null, true);
    }
    ge('topic_editing_bar').style.display = 'block';
    prepare_text(ge('topic_editing'));
    topic_editing_controller.visible = true;
    topic_editing_controller.last_on_hide = on_hide;
    topic_editing_shown = new_topic_editing_shown;
    addEvent(document, 'keydown', topic_editing_controller_escape_handler);
  },
  
  hide: function(handler) {
    topic_editing_shown = 0;
    if (topic_editing_controller.last_on_hide) {
      topic_editing_controller.last_on_hide();
    }
    topic_editing_controller.last_on_hide = null;
    topic_editing_controller.visible = false;
    if (handler) {
      handler();
    }
    
    removeEvent(document, 'keydown');
    ge('topic_editing_bar').style.display = 'none';
    hide('topic_editing_message');
  }
};

var topic_editing_controller_escape_handler = escape_handler(topic_editing_controller.hide);

function prepare_editing_text(header, text, opts) {
  if (!opts)
    opts = '';
  return '<div class="privacy_panel" style="width: auto; margin: 0px;"><div class="privacy_panel_editor" style="width: auto"><div class="privacy_panel_border">' +
    '<span class="fl_r" style="font-size: 9px; margin-top: 10px">' + opts + '</span>' +
    '<h2 style="width: auto">' + header + '</h2>' + text + '</div></div></div>';
}

function prepare_editing_buttons(ok, ok_handler, cancel, cancel_handler, progress_img) {
  if (progress_img) {
    progress_img = '<div id="' + progress_img + '" style="margin: 5px 0px 0px 10px; vertical-align: 0px; float: left; display: none"><img src="/images/upload.gif"/></div>';
  } else {
    progress_img = '';
  }
    
  if (cancel) {
    cancel = '<li><b class="nc"><b class="nc1"><b></b></b><b class="nc2"><b></b></b></b><span class="ncc"><a href="' + cancel_handler + '">' + cancel + '</a></span><b class="nc"><b class="nc2"><b></b></b><b class="nc1"><b></b></b></b></li>';
  } else {
    cancel = '';
  }

  return '<div style="height: 23px; margin-top: 5px"><ul class="nNav btnList"><li><b class="nc"><b class="nc1"><b></b></b><b class="nc2"><b></b></b></b><span class="ncc"><a id="ok_button" href="' + ok_handler + '">' + ok + '</a></span><b class="nc"><b class="nc2"><b></b></b><b class="nc1"><b></b></b></b></li>' + cancel + '</ul>' + progress_img + '</div>';
}

function show_create_voting() {
  if (topic_editing_shown == create_voting_shown) {
    hide_create_voting();
    return;
  }
  if (ge('voting_create_link')) {
    ge('voting_create_link').innerHTML = '<img src="/images/upload.gif"/> |';
  }

  if (ge('voting_create_link2')) {
    ge('voting_create_link2').innerHTML = '<img src="/images/upload.gif"/>';
  }
  var ajax = new Ajax();
  ajax.onDone = function(obj, text) {
    if (ge('voting_create_link')) {
      ge('voting_create_link').innerHTML = '';
    }
    topic_editing_controller.show(function(element) {
      element.innerHTML = text;
      initVotingOptionsNew();
    }, create_voting_shown, function() {
      if ((!parseInt(ge('is_voting').innerHTML)) && (ge('voting_create_link'))) {
        ge('voting_create_link').innerHTML = ge('voting_create_link_text').innerHTML;
      }
    });
    var q = ge('question');
    q.focus();
    setSelRange(q, q.value.length, q.value.length);
  }
  ajax.post('/board.php', {'act': 'a_create_voting_text', 'tid': ge('tid').value, 'oid': -ge('gid').value}); // TODO Votings!
}

var hide_create_voting = topic_editing_controller.hide;    
var hide_edit_voting = topic_editing_controller.hide;

function create_voting() {
  var ajax = new Ajax();
  ajax.onDone = function(obj, text) {
    ge('voting_progress').style.display = 'none';
    if (text.charAt(0) == 'e') {
      ge('voting_data').innerHTML = text.substr(1);
      ge('voting_data').style.display = 'block';
    } else if (text.charAt(0) == 'g') {
      ge('voting_data').innerHTML = text.substr(1);
      ge('voting_data').style.display = 'block';
      ge('is_voting').innerHTML = '1';
      hide_create_voting();
    } else {
      alert(text);
    }
  }
  ge('voting_progress').style.display = 'block';
  var who_can_vote = 1;
  if (ge('who_can_vote2').checked) {
    who_can_vote = 2;
  }
  var protect_from_on = 0;
  if (ge('protect_from').checked) {
    protect_from_on = 1;
  }
  var params = 'vid=0&act=a_do_create&tid=' + ge('tid').value + '&oid=-' + ge('gid').value + '&question=' + encodeURIComponent(ge('question').value) + '&who_can_vote=' + who_can_vote + '&protect_from_on=' + protect_from_on;
  for (var i = 1; i <= 15; ++i) {
    if (ge('option' + i)) {
      if (!ge('option' + i).disabled) {
        params += '&options[]=' + encodeURIComponent(ge('option' + i).value);
      }
    }
  }
  ajax.post('/voting.php', params); // TODO Votings!
}

function new_topic_key_down(e) {
  if (e.keyCode == 13) {
    edit_topic();
  }
}

function show_edit_topic() {
  if (topic_editing_shown == edit_topic_shown) {
    topic_editing_controller.hide();
    return;
  }
  topic_editing_controller.show(function(element) {
    var options = '<img id="options_progress" style="vertical-align: -1px; margin-right: 5px; display: none" src="/images/upload.gif"/>';
    if (parseInt(ge('is_voting').innerHTML)) {
      if (parseInt(ge('canEditVoting').innerHTML)) {
        options += '<a href="javascript: show_edit_voting()">' + board_edit_voting + '</a>';
      }
    } else if (parseInt(ge('canCreateVoting').innerHTML)) {
      options += '<span id="voting_edit_link"><a href="javascript: show_create_voting()">' + board_create_voting + '</a></span>';
    }
    
    var txt = '<table cellspacing="0" style="border: 0px;"><tr style="vertical-align: middle; text-align: left">' +
      '<td style="color: gray; font-weight: bold; width: 150px">' + board_new_topic_title + '</td>' + 
      '<td><input style="width: 250px; margin: 0;" class="inputText" autocomplete="off" type=text name="new_topic_title" id="new_topic_title" onkeydown="new_topic_key_down(event)"></td></tr></table>' + 
      '<div class="pollEditButtons">' + prepare_editing_buttons(board_done, 'javascript: edit_topic()', board_cancel, 'javascript: topic_editing_controller.hide()', 'topic_edit_progress') + '</div>';
    element.innerHTML = prepare_editing_text(board_edit_topic, txt, options);
    ge('new_topic_title').value = ge('topic_title').innerHTML;  
  }, edit_topic_shown);
  var ntt = ge('new_topic_title');
  ntt.focus();
  setSelRange(ntt, ntt.value.length, ntt.value.length);
}

function edit_topic() {
  var ajax = new Ajax();
  ajax.onDone = function(obj, text) {
    ge('topic_edit_progress').style.display = 'none';
    if (text.length == 1) {
      if (text == "e") {
        show_error_box(board_wrong_topic_number);
      } else if (text == 't') {
        show_error_box(board_no_text_stated);
      } else if (text == 'a') {
        show_error_box(board_cannot_edit_title);
      }
    } else if (text.charAt(0) == 'g') {
      topic_editing_controller.hide();
      ge('topic_title').innerHTML = text.substr(1);
    };
  }
  ge('topic_edit_progress').style.display = 'block';
  ajax.post('/board.php', {act: 'a_edit_topic', tid: ge('tid').value, oid: -ge('gid').value, title: ge('new_topic_title').value});
}

function show_delete_topic() {
  if (topic_editing_shown == delete_topic_shown) {
    topic_editing_controller.hide();
    return;
  }
  topic_editing_controller.show(function(element) {

    var txt = '<div style="margin-bottom: 10px">' + board_sure_delete_topic + '</div>' +
      prepare_editing_buttons(board_delete, 'javascript: delete_topic()', board_cancel, 'javascript: topic_editing_controller.hide()');
    element.innerHTML = prepare_editing_text(board_warning, txt);
  }, delete_topic_shown);
}

function show_spam_topic() {
  if (topic_editing_shown == spam_topic_shown) {
    topic_editing_controller.hide();
    return;
  }
  topic_editing_controller.show(function(element) {
    var txt = '<div style="margin-bottom: 10px">' + board_sure_spam + '</div>' +
      prepare_editing_buttons(board_delete, 'javascript: report_topic_spam(true)', board_cancel, 'javascript: topic_editing_controller.hide()');
    element.innerHTML = prepare_editing_text(board_warning, txt);
  }, delete_topic_shown);
}

function delete_topic() {
  window.location.href = '/board.php?act=do_delete_topic&topic_id=' + ge('tid').value + '&oid=-' + ge('gid').value;
}

function show_edit_voting() {
  if (topic_editing_shown == edit_voting_shown) {
    topic_editing_controller.hide();
    return;
  }
  ge('options_progress').style.display = 'inline';

  var ajax = new Ajax();
  ajax.onDone = function(obj, text) {
    topic_editing_controller.show(function(element) {
      element.innerHTML = text;
      initVotingOptionsNew();
    }, edit_voting_shown);
    var q = ge('question');
    q.focus();
    setSelRange(q, q.value.length, q.value.length);    
  }
  ajax.post('/board.php', {'act': 'a_edit_voting_text', 'tid': ge('tid').value, 'oid': -ge('gid').value}); // TODO Votings!
}

function edit_voting() {
  var ajax = new Ajax();
  ajax.onDone = function(obj, text) {
    ge('voting_progress').style.display = 'none';
    if (text.charAt(0) == 'e') {
      ge('voting_data').innerHTML = text.substr(1);
      ge('voting_data').style.display = 'block';
    } else if (text.charAt(0) == 'g') {
      ge('voting_data').innerHTML = text.substr(1);
      ge('voting_data').style.display = 'block';
      hide_edit_voting();
    } else {
      alert(text);
    }
  }
  ge('voting_progress').style.display = 'block';
  var who_can_vote = 1;
  if (ge('who_can_vote2').checked) {
    who_can_vote = 2;
  }
  var protect_from_on = 0;
  if (ge('protect_from').checked) {
    protect_from_on = 1;
  }
  var params = 'vid=' + ge('vid').value + '&act=a_do_edit&tid=' + ge('tid').value + '&oid=-' + ge('gid').value + '&question=' + encodeURIComponent(ge('question').value) + '&who_can_vote=' + who_can_vote + '&protect_from_on=' + protect_from_on;
  for (var i = 1; i <= 15; ++i) {
    if (ge('option' + i)) {
      if (!ge('option' + i).disabled) {
        params += '&options[]=' + encodeURIComponent(ge('option' + i).value);
      }
    }
  }
  ajax.post('/voting.php', params); // TODO Votings!
}

function show_delete_voting() {
  if (topic_editing_shown == delete_voting_shown) {
    topic_editing_controller.hide();
    return;
  }
  topic_editing_controller.show(function(element) {
    var txt = '<div>' + board_sure_delete_voting + '</div>' +
      prepare_editing_buttons(board_delete, 'javascript: delete_voting()', board_cancel, 'javascript: topic_editing_controller.hide()', 'delete_voting_progress');
    element.innerHTML = prepare_editing_text(board_warning, txt);
  }, delete_voting_shown);
}

function delete_voting() {
  var ajax = new Ajax();
  ajax.onDone = function(obj, text) {
    ge('delete_voting_progress').style.display = 'none';
    if (text.charAt(0) == 'f') {
      show_error_box(board_voting_not_deleted);
    } else if (text.charAt(0) == 'd') {
      ge('voting_data').innerHTML = '<div id="dld" style="margin-bottom: 0px">' + board_voting_deleted + '</div>';
      ge('is_voting').innerHTML = '0';
      if ((parseInt(ge('canCreateVoting').innerHTML)) && (ge('voting_create_link'))) {
        ge('voting_create_link').innerHTML = ge('voting_create_link_text').innerHTML;
      }
      topic_editing_controller.hide();
    }
  }
  ge('delete_voting_progress').style.display = 'block';
  ajax.post('/voting.php', {act: 'a_do_delete', tid: ge('tid').value, oid: -ge('gid').value}); // TODO Votings!
}

var new_topic_shown = false;

function show_new_topic() {
  if (new_topic_shown) {
    ge('new_topic').style.display = 'none';
    removeEvent(document, 'keydown');
  } else {
    ge('new_topic').style.display = 'block';
    ge('newTopicButtons').innerHTML = '<ul class="nNav btnList"><li><b class="nc"><b class="nc1"><b></b></b><b class="nc2"><b></b></b></b><span class="ncc"><a onclick="return submitTopic()" href="#">' + board_create_topic + '</a></span><b class="nc"><b class="nc2"><b></b></b><b class="nc1"><b></b></b></b></li><li><b class="nc"><b class="nc1"><b></b></b><b class="nc2"><b></b></b></b><span class="ncc"><a href="javascript: show_new_topic()">' + board_cancel + '</a></span><b class="nc"><b class="nc2"><b></b></b><b class="nc1"><b></b></b></b></li></ul><div style="margin: 5px 10px 0px; vertical-align: 0px; display: none;" class="fl_l" id="creating_progress"><img src="images/upload.gif"/></div>';
    ge('title').focus();
    
    addEvent(document, 'keydown', function(e) {
      if (e.keyCode == 27) {
        show_new_topic();
      }
    });
  }
  new_topic_shown = !new_topic_shown;
}

function report_topic_spam(sure) {
  if (!sure && parseInt(ge('canEditTopic').innerHTML)) {
    show_spam_topic();
  } else {
    window.location.href = '/board.php?act=do_spam_topic&topic_id=' + ge('tid').value + '&oid=-' + ge('gid').value;
  }
}

onDomReady(init);

var deleting_all_id = 0;

function toggleDeleteAll(topic_id) {
  toggle('wConfirm' + topic_id);
  if (isVisible('wConfirm' + topic_id)) {
    hide('wConfirm' + deleting_all_id);
    removeEvent(document, 'keydown');
    addEvent(document, 'keydown', function(e) { if (e.keyCode == 27) { toggleDeleteAll(topic_id); }});
    deleting_all_id = topic_id;
  } else {
    removeEvent(document, 'keydown');
    deleting_all_id = 0;
  }
}

