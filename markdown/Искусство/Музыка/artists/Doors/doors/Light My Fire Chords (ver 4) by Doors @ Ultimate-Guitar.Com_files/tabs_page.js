var userAgent = navigator.userAgent.toLowerCase();
var is_opera  = (userAgent.indexOf('opera') != -1);
var is_saf    = ((userAgent.indexOf('applewebkit') != -1) || (navigator.vendor == "Apple Computer, Inc."));
var is_webtv  = (userAgent.indexOf('webtv') != -1);
var is_ie     = ((userAgent.indexOf('msie') != -1) && (!is_opera) && (!is_saf) && (!is_webtv));
var is_ie4    = ((is_ie) && (userAgent.indexOf("msie 4.") != -1));
var is_moz    = ((navigator.product == 'Gecko') && (!is_saf));

isDOM=document.getElementById; //DOM1 browser (MSIE 5+, Netscape 6, Opera 5+)
isMSIE=document.all && document.all.item; //Microsoft Internet Explorer 4+
isNetscape4=document.layers; //Netscape 4.*
isOpera=window.opera; //Opera
isOpera5=isOpera && isDOM; //Opera 5+
isMSIE5=isDOM && isMSIE && !isOpera; //MSIE 5+
isMozilla=isNetscape6=isDOM && !isMSIE && !isOpera;

var std_loading_message='';
var best_voted_loaded = false;
var ug_serv = 'ultimate-guitar.com';
var old_comments_link = 'first';

var votes_arr = new Array();
votes_arr[1] = "poor";
votes_arr[2] = "not so good";
votes_arr[3] = "worth learning";
votes_arr[4] = "accurate";
votes_arr[5] = "excellent!";

function search_function ()
{
	var w = '';
	var str  = $('#s').val();
	header ('location: search.php?w'+w+'&s='+s);
}

function put_w_value (val)
{
	switch (val)
	{
		case 'bands':
			w = 'BAND NAMES';
		break;
		case 'songs':
			w = 'SONG NAMES';
		break;
		case 'news':
			w = 'NEWS';
		break;
		case 'reviews':
			w = 'REVIEWS';
		break;
		case 'columns':
			w = 'COLUMNS';
		break;
		case 'lessons':
			w = 'LESSONS';
		break;
		case 'users':
			w = 'USERS';
		break;
		case 'interviews':
			w = 'INTERVIEWS';
		break;
		case 'tv':
			w = 'VIDEOS';
		break;
	}
	$(".selcurr").html("<a href=\"javascript: void(0)\"><img src=\"http://img." + ug_serv + "/img/sdbt.gif\"></a> " + w);
	$('#w').val(val);
}
function show_versions_area_pro()
{
	$('#more_ver').slideDown(300);
	$('#vert .vers').css ({"width":"100px","padding-left":"50px"});
}

function hide_versions_area_pro ()
{
	$('#more_ver').slideUp(300);
	$('#vert .vers').css ({"width":"","padding-left":""});
}
function show_versions_area()
{
	$('#more_ver').slideDown(300);
	$('#gfk').hide();
	$('#vert .vers').css ({"width":"100px","padding-left":"50px"});
}

function hide_versions_area ()
{
	$('#more_ver').slideUp(300);
	$('#gfk').show();
	$('#vert .vers').css ({"width":"","padding-left":""});
}

function stars_fill (value)
{
	for (var i = 1; i < 6; i++)
	{
		if (i <= value)
		{
			$('#star'+i).addClass('cur');
		}
		else
		{
			$('#star'+i).removeClass();
		}
	}
}
function VoteComment(rowid,content)
{

	$.ajax({
		type: 'POST',
		url: '/vote0_comment.php',
		data: 'rowid=' + rowid + '&content=' + content + '&ajax=1',
		error: function (){
			alert ('op');
		},
		success: function (data)
				{
					var old_val = parseInt($('#' + rowid).html(),10);

					var str = '';
					var class_color='';
					if (isNaN(old_val)) old_val = 0;

					var new_val = old_val;
					if (content == '-1')
					{
						new_val = old_val - 1;
					}
					else
					{
						new_val = old_val + 1;
					}
					if (new_val > 0)
					{
						str = '+' + new_val + '&nbsp;&nbsp;';
						class_color = 'green';
					}
					else if (new_val == 0)
					{
						str = '';
					}
					else
					{
						str = new_val + '&nbsp;&nbsp;';
						class_color = 'red';
					}


					if (!old_val)
					{
						$('#com_' + rowid + ' .vup').after ('<span id="'+rowid+'" class="f-right"></span>');
					}

					$('#' + rowid).html(str).addClass(class_color);
					$('#com_' + rowid + ' .vote_button').attr('href','javascript:void(0)');
					$('#com_' + rowid + ' .vote_button').attr('onClick', 'func()');
					$('#com_' + rowid + ' .vdn').addClass("votted");
					$('#com_' + rowid + ' .vup').addClass("votedd");

				}
	});
}

function	viewComments(tabid,is_best_rated,what)
{
	std_loading_message = "<div class='loadmsg'><img src='http://img." + ug_serv +"/img/ajax-loader.gif'><p class='p2 verd fs-11' style='margin-bottom: 5px;'>Loading, please wait...</p><a href='/tab_comment.php?id="+tabid+"&artist_genre=0' class='fs-13 aria undl blue'>Click here if don't want to wait</a></div>";

	if (old_comments_link == 'best_voted' || what == 'best_voted' || old_comments_link == 'first')
	{
		$('#comments').html(std_loading_message);
		var tmp_best_rated;
		if(is_best_rated)
		{
			tmp_best_rated = 'best_rated';
		}
		else
		{
			tmp_best_rated = '';
		}
		$.ajax({
			type: 'POST',
			url: '/src/ajax/ajax.tab_comment1.php',
			data: 'tabid=' + tabid + '&what=' + tmp_best_rated,
			success: function (data)
					{
						$('#comments').html(data);

						sort_comments (what,tabid);
						var b=document.cookie.split("; ");

						for(var i=0;i<b.length;i++)
						{
							var c=b[i].split("=");
							if (c[0] == 'bbuserid')
							{
								var userid  = unescape(c[1]);
							}
						}

						if (userid)
						{
							$('.comwr > .comh').each(function() {
								var id = $(this).attr('id').substr(4);

								$(this).find('a.vote_button:first').bind ('click', function() {
									VoteComment (id,-1);
									$('div#com_' + id +' > a.vote_button').unbind('click');
									return false;
								});

								$(this).find('a.vote_button:eq(1)').bind('click', function() {
									VoteComment (id,10,1);
									$('div#com_' + id +' > a.vote_button').unbind('click');
									return false;
								});
							});
						}
						chk_view_coms_ready = 1;
					}
		});
	}
	else
	{
		sort_comments (what,tabid);
	}

	old_comments_link = what;

}

function sort_comments (what,tabid)
{
	if (what == 'cor')
	{
		cnt_ = $('.cor').parent().show();
		change_count_str (cnt_,what);
		$('.comm').parent().hide();
		$('#all_td').html("<a id='all' onClick='viewComments("+tabid+", false, \"all\")' href ='#comments' rel='nofollow' class='fs-10 verd blue undl'>All</a>");
		$('#cor_td').html("<b class='gray fs-10 bold' id='cor'>Corrections</b>");
		$('#com_td').html("<a id='com' onClick='viewComments("+tabid+", false, \"com\")' href ='#comments' rel='nofollow' class='fs-10 verd blue undl'>Comments</a>");
		$('#best_voted_td').html ("<a href ='#comments'  id='best_voted'  onClick=\"viewComments("+tabid+",true,'best_voted');\" rel='nofollow' class='fs-10 verd green undl'>Best Voted Corrections</a>");
	}
	else if (what == 'com')
	{
		cnt_ = $('.comm').parent().show();
		change_count_str (cnt_,what);
		$('.cor').parent().hide();
		$('#best_voted_td').html ("<a href ='#comments'  id='best_voted'  onClick=\"viewComments("+tabid+",true,'best_voted');\" rel='nofollow' class='fs-10 verd green undl'>Best Voted Corrections</a>");
		$('#all_td').html("<a id='all' onClick='viewComments("+tabid+", false, \"all\")' href ='#comments' rel='nofollow' class='fs-10 verd blue undl'>All</a>");
		$('#com_td').html("<b class='gray fs-10 bold' id='com'>Comments</b>");
		$('#cor_td').html("<a id='cor' onClick='viewComments("+tabid+", false, \"cor\")' href ='#comments' rel='nofollow' class='fs-10 verd blue undl'>Corrections</a>");
	}
	else if (what == 'all')
	{
		cnt_ = $('.comwr').show();
		change_count_str (cnt_,what);
		$('#best_voted_td').html ("<a href ='#comments'  id='best_voted'  onClick=\"viewComments("+tabid+",true,'best_voted');\" rel='nofollow' class='fs-10 verd green undl'>Best Voted Corrections</a>");
		$('#all_td').html("<b class='gray fs-10 bold'>All</b>");
		$('#com_td').html("<a id='com' onClick='viewComments("+tabid+", false, \"com\")' href ='#comments' rel='nofollow' class='fs-10 verd blue undl'>Comments</a>");
		$('#cor_td').html("<a id='cor' onClick='viewComments("+tabid+", false, \"cor\")' href ='#comments' rel='nofollow' class='fs-10 verd blue undl'>Corrections</a>");
	}
	else if (what == 'best_voted')
	{
		cnt_ = $('.comwr .cor').show();
		change_count_str (cnt_,what);
		$('#best_voted_td').html ("<b class='gray fs-10 bold'>Best Voted Corrections</b>");
		$('#all_td').html("<a id='all' onClick='viewComments("+tabid+", false, \"all\")' href ='#comments' rel='nofollow' class='fs-10 verd blue undl'>All</a>");
		$('#com_td').html("<a id='com' onClick='viewComments("+tabid+", false, \"com\")' href ='#comments' rel='nofollow' class='fs-10 verd blue undl'>Comments</a>");
		$('#cor_td').html("<a id='cor' onClick='viewComments("+tabid+", false, \"cor\")' href ='#comments' rel='nofollow' class='fs-10 verd blue undl'>Corrections</a>");
	}
}

function change_count_str (cnt_,what)
{
	var str ='';
	if (cnt_)
	{
		cnt_ = cnt_.length;
		if (what == 'com' || what == 'all')
		{
			if(cnt_==1)
			{
			str = cnt_ + ' comment posted';
			}
			else
			{
				str = cnt_ + ' comments posted';
			}
		}
		else if (what == 'cor' || what == 'best_voted')
		{
			if(cnt_==1)
			{
				str = cnt_ + ' correction posted';
			}
			else
			{
				str = cnt_ + ' corrections posted';
			}
		}
	}

	if (!cnt_)
	{
		str = 'Be the first to post your comment/correction';
	}

	$('#count_rows').html ('<b class="gray fs-10 bold">' + str + '</b>')
}

var q = 0; // глобальный счетчик для формирования id аппликатур
var accords = new Array();
		accords[1]="C";
		accords[2]="C#";
		accords[3]="D";
		accords[4]="D#";
		accords[5]="E";
		accords[6]="F";
		accords[7]="F#";
		accords[8]="G";
		accords[9]="G#";
		accords[10]="A";
		accords[11]="A#";
		accords[12]="B";
var cnt = accords.length - 1;


function str_pad( input, pad_length, pad_string, pad_type ) {    // Pad a string to a certain length with another string

    var half = '', pad_to_go;

    var str_pad_repeater = function(s, len){
            var collect = '', i;

            while(collect.length < len) collect += s;
            collect = collect.substr(0,len);

            return collect;
        };

    if (pad_type != 'STR_PAD_LEFT' && pad_type != 'STR_PAD_RIGHT' && pad_type != 'STR_PAD_BOTH') { pad_type = 'STR_PAD_RIGHT'; }
    if ((pad_to_go = pad_length - input.length) > 0) {
        if (pad_type == 'STR_PAD_LEFT') { input = str_pad_repeater(pad_string, pad_to_go) + input; }
        else if (pad_type == 'STR_PAD_RIGHT') { input = input + str_pad_repeater(pad_string, pad_to_go); }
        else if (pad_type == 'STR_PAD_BOTH') {
            half = str_pad_repeater(pad_string, Math.ceil(pad_to_go/2));
            input = half + input + half;
            input = input.substr(0, pad_length);
        }
    }

    return input;
}

function build_applicature (applicature, one, t)
{

	if (!one)
	{
		$('#chords_list').empty();
	}

	var str;
	var tuning = t.split(' ');

	for (acc in applicature)
	{
			var str_='';
			var q_acc = 0;
			var tmp_disp = '';
			if (one)
			{
				str_ += '<div id="chord" onMouseOver="clearTimeout(a)">'+
				'<div class="diag_head"><a href="#" id="alink" style="display: none;"></a><img src="http://img.' + ug_serv + '/img/move.gif" width="33" height="6"></div>';
			}


			str_ += '<div class="diagwrap">'+
			'<div class="chtit">';

			str_ += acc + '</div>';

			var r = 0;
			for (k1 in applicature[acc])
			{
				if (k1 != 'suggested_fret')
				{
					r++; // счетчик количества версий для аккордов
				}
			}

			for (k1 in applicature[acc])
			{
				if (k1 == 'suggested_fret') continue;

					var id = q + '_' + q_acc;

				if (q_acc)
				{
					 tmp_disp = 'none';
				}

				str_ += '<div style="display: '+ tmp_disp+'" id = "' + id + '">'+
					'<div class="chfret">';

				var tmp = new Array();
				tmp = applicature[acc][k1]['txt'].split(' ');

				for (var i=5; i>=0; i--)
				{
					var left = '';

					if (tmp[i] != 'x' && applicature[acc][k1]['app'][i] != 'capo')
					{
						var fr = tmp[i] - applicature[acc][k1]['fret'];

						if (applicature[acc][k1]['fret'] == 0)
						{
							switch  (fr)
							{

								case 1:
									left = "left:21px;";
								break;
								case 2:
									left = "left:35px;";
								break;
								case 3:
									left = "left:49px;";
								break;
								case 4:
									left = "left:63px;";
								break;
								case 5:
									left = "left:77px;";
								break;
							}
						}
						else
						{
							switch  (fr)
							{
								case 0:
									left = "left:21px;";
								break;
								case 1:
									left = "left:35px;";
								break;
								case 2:
									left = "left:49px;";
								break;
								case 3:
									left = "left:63px;";
								break;
								case 4:
									left = "left:77px;";
								break;
							}
						}

						var top = '';
						switch  (i)
						{
							case 0:
								top =  "top:55px;";
							break;
							case 1:
								top =  "top:44px;";
							break;
							case 2:
								top =  "top:33px;";
							break;
							case 3:
								top =  "top:22px;";
							break;
							case 4:
								top =  "top:11px;";
							break;
							case 5:
								top =  "top:0px;";
							break;
						}

						if (applicature[acc][k1]['fret'] != 0 || tmp[i] != 0)
						{
							var fing = '';
							switch (parseInt(applicature[acc][k1]['app'][i]))
							{
								case 0:
									fing = '';
								break;
								case 1:
									fing = '<div class="f-1"></div>';
								break;
								case 2:
									fing = '<div class="f-2"></div>';
								break;
								case 3:
									fing = '<div class="f-3"></div>';
								break;
								case 4:
									fing = '<div class="f-4"></div>';
								break;
							}
							str_ += '<div class="fingbg" style="'+left+top+'">'+fing+'</div>';
						}
					}

					var  cnt1 = 0;
					var capo;
					for (var j = 0; j < 6; j++)
					{
						if (tmp[j] != 'x')
						{
							cnt1++;
						}
					}

					for (var j = 0; j < 6; j++)
					{
						if (applicature[acc][k1]['app'][j] == 'capo')
						{
							capo = 1;
							break;
						}
						else
						{
							capo = 0;
						}
					}
					if (capo)
					{
						str_ += '<div class="barre" style="left:24px;"><img src="http://img.' + ug_serv + '/img/barre2.gif" width="3" height="2" style="margin-top:'+cnt1+'0px"></div>';
					}
			}

			str_ += '<div style="position:absolute; top:1px; left:5px">';
			for (var j=5; j>=0; j--)
			{
				str_ += '<div class="chname">'+tuning[j]+'</div>';
			}

			str_ += '</div><div class="strings">';

			var bs_note = 1;
			var arr_p = new Array();
			for (var j=0; j<6; j++)
			{
				if (!isNaN(tmp[j]) && bs_note)
				{
					arr_p[j] = "<div class=\"oo-str\"></div>";
					bs_note = 0;
				}
				else if (!bs_note && isNaN(tmp[j]) && tmp[j] != 'x')
				{
					arr_p[j] = "<div class=\"o-str\"></div>";
				}
				else if (tmp[j] == 'x')
				{
					arr_p[j] = "<div class=\"x-str\"></div>";
				}
				else
				{
					arr_p[j] = "<div class=\"o-str\"></div>";
				}
			}

			for (var j = 5; j>=0; j--)
			{
				str_ += arr_p[j];
			}
			var fret_tmp = '&nbsp;';
			if (applicature[acc][k1]['fret'] != 0)
			{
				fret_tmp = applicature[acc][k1]['fret'] + ' fr';
			}

			var id_l;
			var id_r;

			if (q_acc<1)
			{
				id_l = q + '_' + (r-1);
			}
			else
			{
			    id_l = q + '_' + (q_acc - 1);
			}

   			if (q_acc >= r-1)
				id_r = q + '_0';
			else
			    id_r = q + '_' + (q_acc + 1);

			str_ += '</div></div><div class="fs-10 fretnum">'+fret_tmp+'</div>';
			str_ += '<div class="varctrl">' +
					'<a href="javascript: void(0)" class="var-l" onClick="$(\'#' + id + '\').hide();$(\'#' + id_l +'\').show();return false;"><img src="http://img.' + ug_serv + '/img/1x1.gif" width="1" height="1"></a>'+
					'<a href="javascript: void(0)" class="var-r" onClick="$(\'#' + id + '\').hide();$(\'#' + id_r +'\').show();return false;"><img src="http://img.' + ug_serv + '/img/1x1.gif" width="1" height="1"></a>Variation</div></div>';
			q_acc++;

	}



	if (one)
	{
		str_ += '</div>';

		$('body').append(str_);
	}
	else
	{
		$('#chords_list').append(str_);
	}

	if (applicature[acc]['suggested_fret'])
	{
		var tmp_q_acc = 0;
		for (k2 in applicature[acc])
		{
			if (applicature[acc][k2]['fret'] == applicature[acc]['suggested_fret'])
			{
				$('#'+ q + '_0').css('display','none');
				$('#'+ q + '_' + (tmp_q_acc)).css('display','');
				$('#'+ q + '_0').prev().append(" ("+ applicature[acc]['suggested_fret'] + " fr.)");
				break;

			}
		tmp_q_acc++;
		}
	}

	q++;
	}

}

// переменная объявлена глобально, т.е. ее значение должно сохранятся при рекурсивном вызове функции
// Функция изменения тональности аккорда на заданное количество полутонов
function modulate_accord(acc, tune)
{
	tune = parseInt(tune, 10);

	//Если этот аккорд состоит из двух аккордов разделённых слэшем, то для каждого аккорда можно просто вызвать рекурсивно функцию модуляции
	if (acc.indexOf('/') != -1)
	{
		var acc_arr = acc.split("/");	// если аккорды разделены слэшем (бывает и такое), разобьем их на массив

		if (acc_arr[1] != '9') // проверка чтобы не разбивалось на массив если аккорд типа C6/9 (на уг существуют только такие)
		{
			for (var i = 0; i < acc_arr.length; i++)
			{
				acc_arr[i] = modulate_accord(acc_arr[i], tune);
			}

			return acc_arr.join('/');
		}
	}

	var acc_parse = acc.charAt(0) + acc.substring(1).toLowerCase();
	
	// распарсим аккорд который будем искать в массиве Accords (есть некоторые исключения, которые в последующих 3 условных конструкциях учитываюся)
	if (acc_parse.charAt(0) == "H")
	{
		acc_parse = "B" + acc_parse.substring(1);// Для аккорда Си есть 2 обозначения. На УГ используются оба, но в массиве хранится одно, т.к. они эквивалентны
	}
	if (acc_parse.charAt(0) == "B" && acc_parse.charAt(1) == "#")
	{
		acc_parse = "C" + acc_parse.substring(2);// т.к. для Си диезом является До сделаем это
	}
	if (acc_parse.charAt(0) == "E" && acc_parse.charAt(1) == "#")
	{
		acc_parse = "F" + acc_parse.substring(2);// т.к. для Ми диезом является Фа сделаем это
	}

	var str_acc = '';
	if (acc_parse.charAt(1) == "#")
	{
		str_acc = acc_parse.charAt(0) + acc_parse.charAt(1);
	}
	else if (acc_parse.charAt(1) == "b") // если бемоль то вычтем из ключа найденного элемента массива аккордов 1, получим нужный аккорд в массиве
	{
		var key;
		for (var i = 1; i <= cnt; i++)
		{
			if (accords[i] == acc_parse.charAt(0))
			{
				key = i;
				break;
			}
		}

		// вычитаем 1, не забывая про то что элементов 12 и они должны повторятся в цикле
		if (key == 1)
		{
			key = cnt;
		}
		else
		{
			key--;
		}

		str_acc = accords[key];	// строка поиска аккорда (можно сказать распарсеный аккорд) который будем искать в массиве
	}
	else
	{
		str_acc = acc_parse.charAt(0);
	}

	for (var i=1;i<=cnt;i++)// найдем нужный аккорд в массиве, чтобы от его ключа отсчитать нужное количество полутонов
	{
	    
		if (accords[i] == str_acc)
		{
			key = i;
			break;
		}
	}

	key += tune;		// получаем новый ключ, значение которого равно аккорду в нужной тональности

	if (key < 1)
	{
		key += cnt; // проверка границ массива
	}
	if (key > cnt)
	{
		key -= cnt;
	}

	if (acc_parse.charAt(1) == "#" || acc_parse.charAt(1) == "b") // Если попадается диез или бемоль, то убьем этот элемент массива и расставим заново ключи, т.к. в массиве аккордов хрянятся нужные нам значения
	{
		acc_parse = acc_parse.charAt(0) + acc_parse.substring(2);
	}
	

	acc_parse = accords[key] + acc_parse.substring(1); // формируем новый аккорд из символов разбитой на массив ранее строки
	
	return acc_parse;
}

function ajax_change_ch_applicatures(chords, tuning)
{
	$.ajax({
		type: 'POST',
		url: '/src/ajax/ajax.get_applicatures.php',
		data: chords,
		dataType: 'json',
		success: function (applicatures)
				{
					var span_acc = {};
					$('#cont .chordw span').each(function() {
						span_acc[$(this).attr('id')] = $(this).text();
					});

					var cnt = 0;

					for (key in applicature)
					{
						var cnt_ = 0;
						cnt++;
						for (key_ in applicatures)
						{
							cnt_++;
							if (cnt_ == cnt)
							{
								for(val in span_acc)
								{
									if (key == span_acc[val])
									{
										$('#'+val).html(key_);
									}
								}
							break;
							}
						}
					}
					applicature = applicatures;
					build_applicature(applicatures,false,tuning);
					$("#transpose").attr('disabled','');
					$("#small_loader").hide();
				}
			});

}
var transpose_sum = 0;
var first_link='';


function transpose(tuning)
{
    $("#small_loader").show();
	$("#transpose").attr('disabled','disabled');
	var to = document.getElementById('gfk').value;
	transpose_sum += parseInt(to,10);
	if (transpose_sum > 12)
	{
		transpose_sum = 12 - transpose_sum;
	}
	else if (transpose_sum < -12)
	{
		transpose_sum = transpose_sum+12;
	}
	$('#print_link').attr('href',first_link+'&transpose='+transpose_sum);

	var key = parseInt(to,10);

		var parsed_chords = {};
		var i = 0;

		for (k in applicature)
		{
			k = remove_frets_before_modulate(k);
   
			parsed_chords[i] = modulate_accord(k.toUpperCase(),key);
			i++;
		}
  
		ajax_change_ch_applicatures (parsed_chords, tuning);

}

function trim( str, charlist ) {

    charlist = !charlist ? ' \s\xA0' : charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1');
    var re = new RegExp('^[' + charlist + ']+|[' + charlist + ']+$', 'g');
    return str.replace(re, '');
}

function remove_frets_before_modulate (acc)
{
	var reg = /\([0-9XIV fr\.]+\)/;
	var result=acc.replace(reg, "");
	result = trim(result);
	return result;
}


function chk_ch_diagrams_visible()
{
	if (document.getElementById('disp_ch_diagrams').checked == true)
	{
		$('#chords_list').fadeIn(500);
	}
	else
	{
		$('#chords_list').hide();
	}

	tab_scroller.getMoveAreaCoords();
    tab_scroller.setMoveAreaCoords();
}

function chk_ch_highlight()
{
	if (document.getElementById('disp_ch_highlight').checked == true)
	{
		$('.chordw span').css({'color':'#007fbf','cursor':'pointer'});
		bind_hover();
	}
	else
	{
		$('.chordw span').css({'color':'#000','cursor':'auto'});
		$('.chordw').unbind('mouseover');
	}
}

function bind_hover ()
{

	$ ('.chordw').mouseover (function (e){

		var m_coords = get_mouse_position(e);
		var ch = $(this).find("span").html();
		if ($('#chord')) $('#chord').remove();
		var top = m_coords.y - 165;
		var left = m_coords.x + 30;

		for (var key in applicature)
		{
			if (key == ch)
			{
				var arr_one = {};

				arr_one[ch] = applicature[ch];
				str = build_applicature (arr_one, true, acc_tuning);
				$('#chord').css ({'position': 'absolute', 'top': top, 'left': left, 'z-index': ++zind});
				$('#chord').mousedown (function () {
					$(this).css ('z-index',++zind);
				});
				$('#chord').draggable({
					handle: '.diag_head',
					stop: function ()	{
						bind_hover();
					},
					start: function (){
						$('.chordw').unbind('mouseover');

						if ($(this))
						{
							uniq_cnt++;
							$(this).attr ('id','ch_'+ uniq_cnt);

							$('#ch_' + uniq_cnt + ' .diag_head').find('a').attr('id','alink_'+ uniq_cnt);
							//$('#ch_' + uniq_cnt + ' .diag_head').css ('cursor','auto');

							$('#alink_'+ uniq_cnt).bind('click',function (){
								var el_id = $(this).attr('id').substr(6);
								$('#ch_' + el_id).remove();
								return false;
							});
							$('#alink_' + uniq_cnt).show();
						}
						$('#chord').remove();
					}
				});
				clearTimeout(a);
				break;
			}
		}

		$("#chord").mouseleave(setInetv);
	});
}

function hide_scroll ()
{
	if (document.getElementById('scroll').style.display == 'none')
	{
		$('#scroll').show();
		$('#arr_scroll').css({'background':'url(http://img.' + ug_serv + '/img/arr.gif) 0px -40px'});
	}
	else
	{
		$('#scroll').hide();
		$('#arr_scroll').css({'background':'url(http://img.' + ug_serv + '/img/arr.gif)'});
	}
	tab_scroller.getMoveAreaCoords();
	tab_scroller.setMoveAreaCoords();
}

function setInetv()
{
	if (document.getElementById('alink'))
	{
		if (document.getElementById('alink').style.display == 'none')
		{
			a = setTimeout(function () {
				clearTimeout(a);
				$('#chord').remove();
			}, 400);
		}
	}
}
function get_mouse_position(e)
{
	var x = 0, y = 0;
	if (!e) e = window.event;
	if (e.pageX || e.pageY)
	{
		x = e.pageX;
		y = e.pageY;
	}
	else if (e.clientX || e.clientY)
	{
		x = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
		y = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
	}
	return {"x":x, "y":y};
}

var TabScroller = function()
{
	this.of_top = $('#whole_scroll').offset().top; // верхняя граница области перемещения скроллера
    this.scrolling_speed        = 0;
    this.sticked             	= true;
    this.height_gradient  		= 0;
    this.to 					= '';
    this.move_area_coords;
	this.save_scroll_position 	= false;
	this.memorized_position 	= 20;
	this.getMoveAreaCoords();
    this.setMoveAreaCoords();

	$("#drop, #drop2").droppable({

		over: function(e,ui)
		{
			$('#drop').css({'background':'url(http://img.' + ug_serv + '/img/border_drag.gif) no-repeat top right'});
		},
		drop: function(e,ui)
		{
			$('#whole_scroll').animate ({'top':0,'left':0},100);

			$('#drop').css({'background-image':''});
			tab_scroller.stick();
			tab_scroller.save_scroll_position = false;
			tab_scroller.memorized_position = 20;

		},
		out: function(e,ui)
		{
			$('#drop').css({'background-image':''});
		}
	});

	$("#transparent_area_for_scroll").droppable({
		over: function()
		{
			$('.scropac').css({'opacity':'.6','filter':'alpha(opacity=60)'});
		},
		out: function()
		{
			$('.scropac').css({'opacity':'.9','filter':'alpha(opacity=90)'});
		},
		accept: "#whole_scroll"
	});

	$("#speed").click(function (e) {
		var page_coords = get_mouse_position(e);
		var el_coords = $('#speed');
		var p = el_coords.offset();
		height = page_coords.y - p.top;

		if (height%14)
		{
			height = Math.ceil(height/14)*14;
		}

		tab_scroller.setHeight(height,true);
		tab_scroller.changeSpeed (height/14*100);
	});

	$("#speed").mousemove(function (e) {
		var page_coords = get_mouse_position(e);
		var el_coords = $('#speed');
		var p = el_coords.offset();
		height_ = page_coords.y - p.top;
		tab_scroller.setHeight(height_, false);
	});

	$("#speed").mouseleave(function (){
		tab_scroller.setHeight(tab_scroller.height_gradient,true);
	});

	$('#dec_speed').click(function (){
		tab_scroller.decSpeed();
	});

	$('#inc_speed').click(function (){
		tab_scroller.incSpeed();
	});



	// задание горячих клавиш
	$().keydown(function(event){

  		switch (event.keyCode)
		{
	    	case 27:  // Esc
			{
				tab_scroller.setHeight(0,true);
				tab_scroller.changeSpeed (0);
				break;
			}
			case 43: case 107: // +
			{
				if (tab_scroller.scrolling_speed != 500)
				{
					tab_scroller.incSpeed();
				}
				break;
			}
			case 45: case 109: // -
			{
				tab_scroller.decSpeed();
				break;
			}
  		}
	});

	$(window).scroll (function () {

			scroll_top		=	$(window).scrollTop();
			if ($('#scroll').css('display') == 'none')
			{
				var height = $('#scroll_height').height() + 12;
			}
			else
			{
				var height = 235;
			}

			if (scroll_top >= tab_scroller.of_top)
			{
				tab_scroller.save_scroll_position = true;
			}
			else
			{
				tab_scroller.save_scroll_position = false;
				tab_scroller.memorized_position = $('#whole_scroll').offset().top - tab_scroller.of_top;
			}

			if (tab_scroller.memorized_position <= 20)
			{
				tab_scroller.memorized_position = 20;
			}

			if (!tab_scroller.sticked || (tab_scroller.sticked && tab_scroller.scrolling_speed > 0))
			{
				if ($(window).scrollTop() + 20 >= $('#whole_scroll').offset().top && !tab_scroller.save_scroll_position)
				{
					$('#whole_scroll').css({'top': ($(window).scrollTop() + 20 - tab_scroller.of_top)});
				}
				else if (tab_scroller.save_scroll_position)
				{
					$('#whole_scroll').css({'top':(scroll_top + tab_scroller.memorized_position - tab_scroller.of_top)+'px'});
				}
			}

			if ($('#whole_scroll').offset().top + height >= scroll_top + $(window).height() - 20)
			{
                if(!tab_scroller.sticked)
                {
					$('#whole_scroll').css({'top':(scroll_top + $(window).height() - 20 - height - tab_scroller.of_top)+'px'});
					tab_scroller.memorized_position = $('#whole_scroll').offset().top - tab_scroller.of_top;
				}
			}
			else if ($(window).scrollTop() + 20 >= $('#whole_scroll').offset().top && tab_scroller.scrolling_speed > 0)
			{
				$('#whole_scroll').css({'top': ($(window).scrollTop() + 20 - tab_scroller.of_top)});
			}
	});
};

TabScroller.prototype.getMoveAreaCoords = function()
{
	this.move_area_coords = $('#area_for_scroll').offset();
};
TabScroller.prototype.setMoveAreaCoords = function()
{
	// определение размеров скроллера
	if ($('#scroll').css('display') == 'none')
	{
		var height = $('#scroll_height').height()+12;
	}
	else
	{
		var height = 235;
	}
	var win_height = $(window).height();
	var win_scroll_top, ui_oftop;
	$('#whole_scroll').draggable('destroy');
	$('#whole_scroll').draggable({
		handle: '#move_scroll',
		containment: [0,this.of_top, $('#area_for_scroll').width() - 77,this.move_area_coords.top+$('#area_for_scroll').height() - height],
		start: function (){
			tab_scroller.unstick();
		},
		stop: function (ui1,ui2) {
			if ($(window).scrollTop() > tab_scroller.of_top)
			{
				tab_scroller.save_scroll_position = true;
			}
			else
			{
				tab_scroller.save_scroll_position = false;
			}

			tab_scroller.memorized_position = $('#whole_scroll').offset().top - $(window).scrollTop();
		},
		drag: function (ui1,ui2) {

				if (!is_ie)
				{
					ui_oftop 		= ui2.offset.top;
					win_scroll_top 	= window.scroll_top;

					if (win_scroll_top > tab_scroller.of_top)
					{
						if (win_scroll_top + 20 >= ui_oftop)
						{
							$(window).scrollTop(ui_oftop - 20);
						}
						tab_scroller.memorized_position = ui_oftop - win_scroll_top;
					}
					else
					{
						tab_scroller.memorized_position = ui_oftop - tab_scroller.of_top;
					}

					if (ui_oftop + height >= win_scroll_top + win_height - 20)
					{
						$(window).scrollTop(ui_oftop + height - win_height + 20);
					}
			}
		}
	});

};
//скроллит страницу по таймеру, запускает сам себя
TabScroller.prototype.doScroll = function()
{
	$(window).scrollTop($(window).scrollTop()+1);	// изменение значения скролла
	timeout_interval = 275 - this.scrolling_speed/2;	//задание интервала для таймера
	this.to = setTimeout('tab_scroller.doScroll()',timeout_interval);
};

//изменение скорости
TabScroller.prototype.changeSpeed = function(speed)
{
    //если скорость была 0 а теперь больше 0, то надо запустить doScroll

	if (speed <= 0)
	{
		speed = 0;
	}
    if (speed > 500)
	{
		speed = 500;
	}
	this.scrolling_speed = speed;

	if (this.sticked && this.scrolling_speed > 0 && $(window).scrollTop() > this.of_top)
	{
		this.unstick();
		$('#whole_scroll').animate({'top':($(window).scrollTop() - this.of_top + 20)+'px'},1000);

		setTimeout (function () {
			clearTimeout(tab_scroller.to);
			tab_scroller.memorized_position = 20;
			tab_scroller.doScroll();

		},1000);
	}
	else
	{
		if (this.scrolling_speed)
		{
			clearTimeout(this.to);
			this.doScroll();
		}
		else
		{
			clearTimeout(this.to);
		}
	}
};

//увеличивает скорость на 1 пункт
TabScroller.prototype.incSpeed = function()
{
	this.scrolling_speed += 100;
	this.changeSpeed(this.scrolling_speed);
    this.height_gradient += 14;
    this.setHeight(this.height_gradient,true);
};

//уменьшает скорость на 1 пункт
TabScroller.prototype.decSpeed = function()
{
	this.scrolling_speed -= 100;
	this.changeSpeed(this.scrolling_speed);
    this.height_gradient -= 14;
    this.setHeight(this.height_gradient, true);
};

// проверка высоты заполнения градиента
TabScroller.prototype.setHeight = function(height, set_)
{

	if (set_) // для различая в наведении и клике на область, чтобы не нарушать инкапсуляцию
	{
		if (height > 70)
		{
			this.height_gradient = 70;
			height = 70;
		}
	    else if (height < 0)
		{
			this.height_gradient = 0;
			height = 0;
		}
		else
		{
			this.height_gradient = height;
		}
	}
	else
	{
		if (height > 70)
		{
			height = 70;
		}
		else if (height < 0)
		{
			height = 0;
		}
	}

	$('#speed').html('<div id="speed_d" style="background:url(http://img.' + ug_serv + '/img/speed.png) -22px 0px; height:'+height+'px; line-height: 0px;">&nbsp;</div>');
};
//прикрепляет скролл
TabScroller.prototype.stick = function()
{
    this.sticked = true;
};

//открепляет скролл
TabScroller.prototype.unstick = function()
{
    this.sticked = false;
};

//при перетаскивании
/*TabScroller.prototype.onDrag = function()
{
    if (this.stick)
    {
        this.unstick();
    }
}

//при перетаскивании
TabScroller.prototype.onDrop = function()
{
    //прикреплять если перетащили в нужное место
}*/

function show_all_acc ()
{
	if ($('#all_acc').css('display') == 'none')
	{
		$('#all_acc').show();
	}
	else
	{
		$('#all_acc').hide();
	}
}

function add_ch(acc)
{
	var ch = build_applicature_txt(acc);
	$('#list').prepend (ch);
}

function build_applicature_txt (acc)
{

	var str;
	var tuning = tuning_.split(' ');


	var str_='';

	var tmp_disp = '';


	str_ += '<div style="width: 190px; float: left; margin: 1px;background:#f9f9f9; border:solid #ddd 1px; " id="all_ch_'+q+'">' +
	'<div style="float: left; width: 92%;text-align:center; font-size:14px; line-height:22px; color:#000; padding:5px 0px"><b>';

	str_ += acc + '</b></div><div class="x" style="float: right; padding: 3px; cursor: pointer;" onClick="$(\'#all_ch_'+q+'\').remove();">x</div>';

	var r = 0;
	for (k1 in applicature[acc])
	{
		if (k1 != 'suggested_fret')
		{
			r++;
		}
	}
	var q_acc = 0;
	for (k1 in applicature[acc])
	{
		if (k1 == 'suggested_fret') continue;

			var id = q + '_' + q_acc;

		if (q_acc)
		{
			 tmp_disp = 'none';
		}
		else
		{
		 	tmp_disp = '';
		}

		str_ += '<div style="clear: both; display: '+ tmp_disp+'" id = "' + id + '">'+
		'<div style="padding:1px 5px 0px 5px;  width:175px;">';

		var tmp = new Array();
		tmp = applicature[acc][k1]['txt'].split(' ');


			var  cnt1 = 0;
			var capo;
			for (var j = 0; j < 6; j++)
			{
				if (tmp[j] != 'x')
				{
					cnt1++;
				}
			}

			for (var j = 0; j < 6; j++)
			{
				if (applicature[acc][k1]['app'][j] == 'capo')
				{
					capo = 1;
					break;
				}
				else
				{
					capo = 0;
				}
			}
			var _str = new Array();
			var str_ch='';
			for (var i=5; i>=0; i--)
			{

				if (tmp[i] == 'x')
					_str[i] = str_pad(tuning[i], 2,' ','STR_PAD_RIGHT') + "|---|---|---|---|---| x<br>";
				else if (tmp[i] == '0')
					_str[i] = str_pad(tuning[i], 2,' ','STR_PAD_RIGHT') + "|---|---|---|---|---| o<br>";
				else
				{
					var pos = tmp[i] - applicature[acc][k1]['fret'];
					if (applicature[acc][k1]['fret'] == 0)
					{
						switch (pos)
						{
							case 1:
								_str[i] = str_pad(tuning[i], 2,' ','STR_PAD_RIGHT') + "|-";
								if (capo)
									_str[i] += '<b>1</b>';
								else
									_str[i] += '<b>'+ applicature[acc][k1]['app'][i] + '</b>';
								_str[i] += "-|---|---|---|---| o<br>";
							break;
							case 2:
								_str[i] = str_pad(tuning[i], 2,' ','STR_PAD_RIGHT')+"|-";
								if (capo)
									_str[i] += '<b>1</b>';
								else
									_str[i] += '-';
								_str[i] += "-|-<b>"+applicature[acc][k1]['app'][i]+"</b>-|---|---|---| o<br>";
							break;
							case 3:
								_str[i] = str_pad(tuning[i], 2,' ','STR_PAD_RIGHT')+"|-";
								if (capo)
									_str[i] += '<b>1</b>';
								else
									_str[i] += '-';

								_str[i] += "-|---|-<b>"+applicature[acc][k1]['app'][i]+"</b>-|---|---| o<br>";
							break;
							case 4:
								_str[i] = str_pad(tuning[i], 2,' ','STR_PAD_RIGHT')+"|-";
								if (capo)
									_str[i] += '<b>1</b>';
								else
									_str[i] += '-';

								_str[i] += "-|---|---|-<b>"+applicature[acc][k1]['app'][i]+"</b>-|---| o<br>";
							break;
							case 5:
								_str[i] = str_pad(tuning[i], 2,' ','STR_PAD_RIGHT')+"|-";
								if (capo)
									_str[i] += '<b>1</b>';
								else
									_str[i] += '-';

								_str[i] += "-|---|---|---|-<b>"+applicature[acc][k1]['app'][i]+"</b>-| o<br>";
							break;
						}
					}
					else
					{
						switch (pos)
						{
							case 0:
								_str[i] = str_pad(tuning[i], 2,' ','STR_PAD_RIGHT')+"|-";
								if (capo)
									_str[i] += '<b>1</b>';
								else
									_str[i] += '<b>'+applicature[acc][k1]['app'][i]+'</b>';
								_str[i] += "-|---|---|---|---| o<br>";
							break;
							case 1:
								_str[i] = str_pad(tuning[i], 2,' ','STR_PAD_RIGHT')+"|-";
								if (capo)
									_str[i] += '<b>1</b>';
								else
									_str[i] += '-';

								_str[i] += "-|-<b>"+applicature[acc][k1]['app'][i]+"</b>-|---|---|---| o<br>";
							break;
							case 2:
								_str[i] = str_pad(tuning[i], 2,' ','STR_PAD_RIGHT')+"|-";
								if (capo)
									_str[i] += '<b>1</b>';
								else
									_str[i] += '-';
								_str[i] += "-|---|-<b>"+applicature[acc][k1]['app'][i]+"</b>-|---|---| o<br>";
							break;
							case 3:
								_str[i] = str_pad(tuning[i], 2,' ','STR_PAD_RIGHT')+"|-";
								if (capo)
									_str[i] += '<b>1</b>';
								else
									_str[i] += 	'-';
								_str[i] += "-|---|---|-<b>"+applicature[acc][k1]['app'][i]+"</b>-|---| o<br>";
							break;
							case 4:
								_str[i] = str_pad(tuning[i], 2,' ','STR_PAD_RIGHT')+"|-";
								if (capo)
									_str[i] += '<b>1</b>';
								else
									_str[i] += '-';
								_str[i] += "-|---|---|---|-<b>"+applicature[acc][k1]['app'][i]+"</b>-| o<br>";
							break;
						}
					}
				}
			}
			str_ch = '<pre>'+_str[5]+_str[4]+_str[3]+_str[2]+_str[1]+_str[0] + '</pre></div>';
			str_ += str_ch;

			var fret_tmp = '&nbsp;';
			if (applicature[acc][k1]['fret'] != 0)
			{
				fret_tmp = applicature[acc][k1]['fret'] + ' fr.';
			}

			var id_l;
			var id_r;

			if (q_acc<1)
			{
				id_l = q + '_' + (r-1);
			}
			else
			{
			    id_l = q + '_' + (q_acc - 1);
			}

   			if (q_acc >= r-1)
				id_r = q + '_0';
			else
			    id_r = q + '_' + (q_acc + 1);

			str_ += '<div class="fs-10" style="padding:0px 0px 0px 23px; color:#000;">'+fret_tmp+'</div>';
			str_ += '<div class="fs-10" style="padding: 10px 0px; text-align: center; " id="vers">' +
					'<a href="javascript: void(0)" class="var-l"><img src="http://img.' + ug_serv + '/img/1x1.gif" onClick="$(\'#' + id + '\').hide();$(\'#' + id_l +'\').show();return false;"></a>'+
					'&nbsp;&nbsp;Variation&nbsp;&nbsp;'+
					'<a href="javascript: void(0)" class="var-r"><img src="http://img.' + ug_serv + '/img/1x1.gif" onClick="$(\'#' + id + '\').hide();$(\'#' + id_r +'\').show();return false;"></a>'+
			'</div></div>';
			q_acc++;
	}
	q++;
	return str_;

}

function get_check(what)
{
	$('.com_area').removeClass('com_area');
	$('#pleaseselect').hide();
	$('#com_msg').css('padding','0px 0px');
	$('#com_msg').html('');
	if (what == 'comm')
	{
	    $('#cb_comment').attr("checked", 'checked');
		$('#cb_correction').attr("checked", "");
	}
	else if (what == 'corr')
	{
	    $('#cb_correction').attr("checked", 'checked');
		$('#cb_comment').attr("checked", "");
	}
}
function check_com_area()
{

	if(!$('#cb_correction').attr("checked") && !$('#cb_comment').attr("checked") && $('#content_').val().length < 10)
	{
		$('#pleaseselect').show();
		$('.chk_area').addClass('com_area');
		$('#com_msg').html("<img src='http://img." + ug_serv + "/img/warning_icon.png' align=absmiddle> Please select type above <br><img src='http://img." + ug_serv + "/img/warning_icon.png' align=absmiddle> Your comment is too short").show();
		return false;
	}
	else if ($('#content_').val().length < 10)
	{
		$('#pleaseselect').show();
		$('.chk_area').addClass('com_area');
		$('#com_msg').html("<img src='http://img." + ug_serv + "/img/warning_icon.png' align=absmiddle> Your comment is too short").show();
		return false;
	}
	else if (!$('#cb_correction').attr("checked") && !$('#cb_comment').attr("checked"))
	{
        $('#pleaseselect').show();
		$('.chk_area').addClass('com_area');
		$('#com_msg').html("<img src='http://img." + ug_serv + "/img/warning_icon.png' align=absmiddle> Please select type above").show();
		return false;
	}
	return true;
}
