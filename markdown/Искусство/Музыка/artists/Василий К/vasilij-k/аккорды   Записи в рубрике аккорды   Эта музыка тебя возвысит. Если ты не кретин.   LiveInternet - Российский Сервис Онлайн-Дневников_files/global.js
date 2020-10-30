/*
Project: LiveInternet - Global functions
Author:   A.Timofeev / Re.Active (www.reactant.ru)
Version:  15 Jun 2007
 */


/* ��������� �������
----------------------------------------------- */

        /* -----------| ������ � ������ |----------- */
          /* - ������ ���� - */
            function setCookie(name, value, expire)
            {
                    document.cookie = name + "=" + value + "; path=/; expires=" + expire;
            }
          /* - �������� ���� - */
            function getCookie(name)
            {
                    var search = name + "=";
                    if (document.cookie.length > 0)
                    {
                            offset = document.cookie.indexOf(search);
                            if (offset != -1)
                            {
                                    offset += search.length;
                                    end = document.cookie.indexOf(";", offset);
                                    if (end == -1) end = document.cookie.length;
                                    return unescape(document.cookie.substring(offset, end));
                            }
                    }
            }
          var today = new Date();
          var expires = new Date(today.getTime() + (56 * 86400000));
          setCookie("chbx","guest",expires);
          if (document.cookie.indexOf('__utm') >= 0)
          {
                  document.cookie = "__utma=0; path=/; domain=.liveinternet.ru; expires=Sat, 09 Dec 2000 21:00:00 GMT";
                  document.cookie = "__utmb=0; path=/; domain=.liveinternet.ru; expires=Sat, 09 Dec 2000 21:00:00 GMT";
                  document.cookie = "__utmc=0; path=/; domain=.liveinternet.ru; expires=Sat, 09 Dec 2000 21:00:00 GMT";
                  document.cookie = "__utmz=0; path=/; domain=.liveinternet.ru; expires=Sat, 09 Dec 2000 21:00:00 GMT";
          }

        /* -----------| ��������� � �������� ����� ���������� |----------- */
                var username = getCookie("bbusername");
                var bbjurl = getCookie("jurl");
                var jurl = bbjurl;
                var bbuserid = getCookie("bbuserid");
                var userid = getCookie("bbuserid");
                var sstyle = getCookie("ucss");
                var sava = getCookie("ava");

                if (!curj)
                {
                        var curj;
                }
                if (!comun)
                {
                        var comun;
                }

                if (jurl!=null)
                {
                  var domain = (jurl.indexOf('liveinternet.ru')==-1)?jurl:"http://www.liveinternet.ru/";
                }
                else
                {
                  var domain ="http://www.liveinternet.ru/";
                }

                if ((bbjurl != null) && (bbjurl != ""))
                {
                  var last=bbjurl;
                }
                else
                {
                  if ((bbuserid != null) && (bbuserid != ""))
                  {
                          var last="/users/"+bbuserid;
                  }
                  else
                  {
                          var last="/users/"+username;
                  }
                }
                /* - ����������� ��� ��� - */
                        if ((username != null)&&(username != "deleted")&&(username != ""))
                        {
                          var auth=1;
                        }
                        else
                        {
                          var auth=0;
                        }
                /* - ������ �������� ��� ��� - */
                        if (auth == 1)
                        {
                                if ((curj==userid)||(userid==739)||(userid==644454)||(userid==44992)||(userid==2635239))
                                {
                                        var utype=1;
                                }
                                else
                                {
                                        var utype=0;
                                }
                        }


/* ������� ������ ��������� ���������
----------------------------------------------- */

        /* -----------| Quote string with slashes |----------- */
                function addslashes( str )
                {
                    return str.replace('/(["\'\])/g', "\\$1").replace('/\0/g', "\\0");
            }

        /* -----------| ����� ������ � ������� ������ |----------- */
                function jstpl_tpanel (tpl)
                {
                        /* - ������������� ����� - */
                                /* - ����������� ���� - */
                                        function tplanel_stand(type,id)
                                        {
                                          if (type=="opn")
                                          {
                                                document.write('<div id="'+id+'">');
                                                  document.write('<p>');
                                          }
                                          if (type=="cls")
                                          {
                                                  document.write('</p>');
                                                document.write('</div>');
                                          }
                                        }
                                /* - ������� - */
                                        function tplanel_tabs(id,name,url)
                                        {
                                          document.write('<li id="'+id+'">'+name+'<strong><span><em><a href="'+url+'">'+name+'</a></em></span></strong></li>');
                                        }
                                /* - ����� ����������� - */
                                        function tplanel_aform(id_show)
                                        {
                                          document.write('<form id="GlHdrNavMnuForm" style="display:none;" onKeyDown="checkKey(\'GlHdrNavMnuForm\');" action="/member.php" method="post" name="aut">');
                                                tplanel_stand ('opn','GlHdrNavMnuLogin');
                                                  document.write('<b>�����:</b> <b>������:</b>');
                                                tplanel_stand ('cls','');
                                                tplanel_stand ('opn','GlHdrNavMnuInputs');
                                                  document.write('<input type="text" name="username" tabindex="1" /><input  type="password" name="password" tabindex="2" />');
                                                  document.write('<span><strong><a href="javascript:document.getElementById(\'GlHdrNavMnuForm\').submit();">�����</a></strong>, <a href="javascript:void(0);" onClick="show_div(\''+id_show+'\',\'GlHdrNavMnuForm\');">���������</a></span>');
                                                tplanel_stand ('cls','');

                                                var strurl=addslashes(window.location.href);
                                                document.write('<input type="hidden" name="s" value="" /><input type="hidden" name="url" value="'+strurl+'" /><input type="hidden" name="action" value="login" /><input type="submit" style="display:none;" />');
                                          document.write('</form>');
                                        }
                        /* - ����� ������ - */
                                /* - ������������ ����������� - */
                                        if (auth==1)
                                        {
                                          document.write('<div id="GlHdrNavMnuAut">');
                                                /* - �������� ������������ - */
                                                  tplanel_stand ('opn','GlHdrNavMnuLogin');
                                                        document.write('�� � <a href="'+jurl+'profile/"><b>'+username+'</b></a> <span>(<a href="javascript:void(0);" onClick="show_div(\'GlHdrNavMnuForm\',\'GlHdrNavMnuAut\');">�������</a>, <a href="/journals.php?s=&action1=login">�����</a>)</span>');
                                                  tplanel_stand ('cls','');
                                                /* - ������� - */
                                                  document.write('<ul id="GlHdrNavMnuTabs">');
                                                        tplanel_tabs('GlHdrNavMnuFrn','������',''+jurl+'friends/');
                                                        tplanel_tabs('GlHdrNavMnuBlog','� �������',''+jurl+'');
                                                        tplanel_tabs('GlHdrNavMnuPost','��������','/journal_post.php?journalid='+bbuserid+'');
                                                        tplanel_tabs('GlHdrNavMnuSett','���������','/journal_settings.php?journalid='+bbuserid+'');
                                                        tplanel_tabs('GlHdrNavMnuComm','�����������',''+jurl+'comments/');
                                                        if (pm_status==1)
                                                        {
                                                                tplanel_tabs('GlHdrNavMnuPriActive','�����','/im.php?_userid='+bbuserid+'');
                                                        }
                                                        else
                                                        {
                                                                tplanel_tabs('GlHdrNavMnuPri','�����','/im.php?_userid='+bbuserid+'');
                                                        }
                                                        
                                                        if (tpl=='beee')
                                                        {
															document.write('<li id="GlHdrNavMnuBeee">��������<strong><span><em><a target="_blank" href="http://www.liveinternet.ru/click;beeline_journal?lk.beeline.ru/requestStepOne.do">�������</a></em></span></strong></li>');                                                        	
                                                        }
                                                  document.write('</ul>');
                                          document.write('</div>');
                                          tplanel_aform ('GlHdrNavMnuAut');
                                        }
                          /* - ������������ �� ����������� - */
                                else
                                {
                                  document.write('<div id="GlHdrNavMnuNoaut">');
                                        /* - ������ �������������� - */
                                          tplanel_stand ('opn','GlHdrNavMnuLogin');
                                                document.write('<a id="GlHdrNavMnuLoginLgn" href="javascript:void(0);" onClick="show_div(\'GlHdrNavMnuForm\',\'GlHdrNavMnuNoaut\');">����</a> / <a id="GlHdrNavMnuLoginReg" href="http://www.liveinternet.ru/journal_register.php">�����������</a><span><a href="http://www.liveinternet.ru/member.php?action=lostpw">����������� ������</a> &nbsp;&nbsp;����� �����: <a href=http://www.liveinternet.ru/importmail.php?cmd=getbook&squery=>�� ���������</a>, <a href=http://www.liveinternet.ru/importmail.php?cmd=icq>�� ICQ</a></span>');
											//document.write('<ul><li id="GlHdrNavMnuBeee">��������<strong><span><em><a target="_blank" href="http://www.liveinternet.ru/click;beeline_journal?lk.beeline.ru/requestStepOne.do">�������</a></em></span></strong></li></ul>');
                                          tplanel_stand ('cls','');
                                  document.write('</div>');
                                  tplanel_aform ('GlHdrNavMnuNoaut');
                                }
new Image().src = "http://counter.yadro.ru/hit;beeline_journal?r" + escape(document.referrer) + ((typeof(screen)=="undefined")?"" : ";s"+screen.width+"*"+screen.height+"*" + (screen.colorDepth?screen.colorDepth:screen.pixelDepth)) + ";u"+escape(document.URL) + ";h"+escape(document.title.substring(0,80)) + ";" +Math.random();                                
                }

        /* -----------| ���� �������� � ����� ������ |----------- */
                function jstpl_lpanel_subscribe (superdomain)
                {
                        if (utype != 1)
                        {
                                document.write('<div class="Block Scribe"><ul class="Scribes">');
                                        if (auth == 1)
                                        {
                                                document.write('<li class="Scribe2Friend"><a class="GlIco2Friend" href="'+superdomain+'/member2.php?action=addlist&userlist=buddy&userid=$journalid&userownid='+userid+'">����� ��</a></li>');
                                        }
                                        document.write('<li class="Scribe2Mail" id="Scribe2Mail"><a class="GlIcoMail" href="javascript:void(0);" onClick="">�������� ��������</a></li>');
                                        document.write('<li class="Scribe2RSS"><a class="GlIcoRSS" href="'+superdomain+'rss/">RSS-����� ��������</a></li>');
                                document.write('</ul></div>');
                        }
                }

        /* -----------| ����� ������������ � ����� ������ |----------- */
                function jstpl_lpanel_uopts ()
                {
                        /* - ������ ���� - */
                        function jstpl_lpanel_li (name,url)
                        {
                          document.write('<li>&ndash; <a href="'+url+'">'+name+'</a></li>');
                        }
                        /* - ���� ����������� - */
                                if (auth == 1)
                                {
                                        jstpl_lpanel_li ('����� ������','/journal_post.php?journalid='+curj+'');

                                        /* - ���������� ������ ���������� ������������ - */
                                                if (utype == 1)
                                                {
                                                        jstpl_lpanel_li ('���������','/showjournal.php?action=draft&journalid='+curj+'');
                                                        jstpl_lpanel_li ('��������� ��������','/journal_settings.php?journalid='+curj+'');
                                                        jstpl_lpanel_li ('�������� �������','/showjournal_htmlall.php?journalid='+curj+'');
                                                        jstpl_lpanel_li ('��� ���������','/im.php?_userid='+curj+'');
                                                        jstpl_lpanel_li ('��� �����������','/journalshowownercomments.php?journalid='+curj+'');
                                                        jstpl_lpanel_li ('��� ��������','/journalshowsubscomments.php?journalid='+curj+'');
                                                }
                                                else
                                                {
                                                        jstpl_lpanel_li ('�������� ���������','/im.php?cmd=forcemessage&rcpt_userid='+curj+'');
                                                }

                                }
                        /* - ���� �� ����������� - */
                                else
                                {
                                        jstpl_lpanel_li ('<b>������� �������</b>','/journal_register.php');
                                }
                }

        /* -----------| �������� � ������ |----------- */
                function jstpl_lpanel_addfriend (username)
                {
                        if (auth==1)
                        {
                                if (utype != 1)
                                {
                                        document.write('<a class="GlIco2Friend" title="����� ���������� ��������� '+username+'" href="/member2.php?action=addlist&userlist=buddy&userid='+curj+'&userownid='+userid+'">� ������</a>');
                                }
                        }
                }

        /* -----------| ����� ��������� |----------- */
                function jstpl_rpanel_addpost ()
                {
                        if (utype == 1)
                        {
                                document.write('<b><a class="GlIcoAdd" href="/journal_post.php?journalid='+curj+'">����� ������</a></b>');
                        }
                }

        /* -----------| �������� ������� |----------- */
                function writepage()
                {
                  if ((maxpages!=0)&&(friend=='')) {

                         var c1=0;var c2=0;var c3=0;var c4=0;
                         var i=0;
                         var jp=0;
                         var midpage=''; var leftpage=''; var rightpage='';
                         mp=maxpages;
                         c1=cp+2;
                         if (c1>mp) c1=mp;
                         c2=c1-3;
                         if (c2<1) c2=1;
                         i=c1;
                         if (i==mp)
                         {
                          if (cp==mp)
                           midpage='<font class=j_headtext><b>'+maxpages+'</b></font>'; else
                           midpage='<a href="'+urls1+'" class=link_main><font class=j_headtext>'+maxpages+'</font></a>';
                           i=i-1;
                         }
                         while (i>=c2)
                         {
                           jp=mp-i+1;
                           if (u2_1=='')
                           {
                                 urls2_gen=u2_2+i+u2_3;
                                 urls2='';
                           } else
                           {
                                 urls2_gen='';
                                 urls2=u2_1+i;
                           }
                           if (i==cp)
                                midpage=midpage+'&nbsp; <font class=j_headtext><b>'+i+'</b></font>';
                           else
                                midpage=midpage+'&nbsp; <a href="'+urls2+urls2_gen+'" class=link_main><font class=j_headtext>'+i+'</font></a>';
                           i=i-1;
                         }

                         if (c1+3<mp) midpage=' <font class=j_headtext>...</font>'+midpage;
                         c3=mp-3;
                         if (c3<c1) c3=c1;
                         i=mp;
                         if ((i==mp)&&(i>c3))
                         {
                          if (cp==mp)
                           leftpage='<font class=j_headtext><b>'+maxpages+'</b></font>'; else
                           leftpage='<a href="'+urls1+'" class=link_main><font class=j_headtext>'+maxpages+'</font></a>';
                           i=i-1;
                         }

                         while (i>c3)
                         {
                           jp=mp-i+1;
                           if (u2_1=='')
                           {
                                 urls2_gen=u2_2+i+u2_3;
                                 urls2='';
                           } else
                           {
                                 urls2_gen='';
                                 urls2=u2_1+i;
                           }
                           leftpage=leftpage+'&nbsp; <a href="'+urls2+urls2_gen+'" class=link_main><font class=j_headtext>'+i+'</font></a>';
                           i=i-1;
                         }

                         if (c2-3>1) midpage=midpage+' <font class=j_headtext>...</font>';
                         c4=6;
                         if (c4>c2) c4=c2;
                         i=1;
                         while (i<c4)
                         {
                           jp=mp-i+1;
                           if (u2_1=='')
                           {
                                 urls2='';
                                 urls2_gen=u2_2+i+u2_3;
                           } else
                           {
                                 urls2_gen='';
                                 urls2=u2_1+i;
                           }
                           rightpage='&nbsp; <a href="'+urls2+urls2_gen+'" class=link_main><font class=j_headtext>'+i+'</font></a>'+rightpage;
                           i=i+1;
                         }
                        document.write(leftpage+midpage+rightpage);
                  }
                }


/* ������� � ��������� ����������
----------------------------------------------- */

        /* -----------| ���������� ������� |----------- */
                /* - ������ ������, ���������� ������ - */
                        function show_div (d1,d2)
                        {
                          document.getElementById(d1).style.display='block';
                          document.getElementById(d2).style.display='none';
                        }
                /* - ������ ��� ���������� ������ ���� - */
                        function show_hide (bn)
                        {
                                if (document.getElementById(bn).style.display=='none')
                                {
                                        document.getElementById(bn).style.display='block'
                                }
                                else
                                {
                                        document.getElementById(bn).style.display='none';
                                }
                        }

        /* -----------| ������� ������ |----------- */
                /* - ������ ������ - */
                        function screenSize()
                        {
                                var w;
                                w = (window.innerWidth ? window.innerWidth : (document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.offsetWidth));
                                return {w:w};
                        }

        /* -----------| ������� ������� |----------- */
                function emoticon(text)
                {
                        var txtarea = document.getElementById('message');
                        text = ' ' + text + ' ';
                        if (txtarea.createTextRange && txtarea.caretPos)
                        {
                                var caretPos = txtarea.caretPos;
                                caretPos.text = caretPos.text.charAt(caretPos.text.length - 1) == ' ' ? text + ' ' : text;
                                txtarea.focus();
                        }
                        else
                        {
                                txtarea.value  += text;
                                txtarea.focus();
                        }
                }
                function emoticon2(text, areaid)
                {
                        var txtarea = document.getElementById(areaid);
                        text = ' ' + text + ' ';
                        if (txtarea.createTextRange && txtarea.caretPos)
                        {
                                var caretPos = txtarea.caretPos;
                                caretPos.text = caretPos.text.charAt(caretPos.text.length - 1) == ' ' ? text + ' ' : text;
                                txtarea.focus();
                        }
                        else
                        {
                                txtarea.value  += text;
                                txtarea.focus();
                        }
                }

        /* -----------| ������� ������� �� ����� ������ |----------- */
                function storeCaret(textEl)
                  {
                          if (textEl.createTextRange) textEl.caretPos = document.selection.createRange().duplicate();
                  }


/* ������ � �������
----------------------------------------------- */
        var formtool = new Object();
                /* -----------| �������� ����� �� Enter |----------- */
                        formtool.enter = function (id)
                        {
                                if  (navigator.appName != "Netscape")
                                {
                                        if (eval(window.event.keyCode)==13)
                                        {
                                                document.getElementById(id).submit();
                                        }
                                }
                        }
                /* -----------| �������� ����� �� Ctrl+Enter |----------- */
                        formtool.ctrlenter = function (event)
                        {
                                if((event.ctrlKey) && ((event.keyCode == 0xA)||(event.keyCode == 0xD)))
                                {
                                        return true;
                                }
                        }
                /* -----------| �������� ����� �� E����� |----------- */
                        function checkKey(FrmName)
                        {
                                if  (navigator.appName != "Netscape")
                                {
                                        if (eval(window.event.keyCode)==13)
                                        {
                                                document.getElementById(FrmName).submit();
                                        }
                                }
                        }


/* ������ � �������
----------------------------------------------- */
        //var opera = Boolean(window["opera"]);
        var ie = (navigator.appName.indexOf("Microsoft") != -1);// && !opera;
        /* -----------| ������������ ������ |----------- */
                function mju_play_track(num)
                {
                        if ((num <= 0)) return false;
                        var mc = ie ? window.mjupl4li : window.document.mjupl4li;
                        mc.SetVariable("play_track", num);
                }
        /* -----------| ��������� ������ |----------- */
                function mju_play_file(chars)
                {
                    if (!chars.length) return false;
                    var mc = ie ? window.mjupl4li : window.document.mjupl4li;
                    mc.SetVariable("play_file",chars);
                }
        /* -----------| ���������� ������� |----------- */
                function mju_do(cmd)
                {
                        if (!cmd.length) return false;
                        var mc = ie ? window.mjupl4li : window.document.mjupl4li;
                        mc.SetVariable("do_"+cmd," ");
                }



/* ������������ ����
----------------------------------------------- */
        function NiftyCheck(){
        if(!document.getElementById || !document.createElement)
                 return(false);
        isXHTML=/html\:/.test(document.getElementsByTagName('body')[0].nodeName);
        if(Array.prototype.push==null){Array.prototype.push=function(){
                        this[this.length]=arguments[0]; return(this.length);}}
        return(true);
        }

        function Rounded(selector,wich,bk,color,opt){
        var i,prefixt,prefixb,cn="r",ecolor="",edges=false,eclass="",b=false,t=false;

        if(color=="transparent"){
                 cn=cn+"x";
                 ecolor=bk;
                 bk="transparent";
                 }
        else if(opt && opt.indexOf("border")>=0){
                 var optar=opt.split(" ");
                 for(i=0;i<optar.length;i++)
                          if(optar[i].indexOf("#")>=0) ecolor=optar[i];
                 if(ecolor=="") ecolor="#666";
                 cn+="e";
                 edges=true;
                 }
        else if(opt && opt.indexOf("smooth")>=0){
                 cn+="a";
                 ecolor=Mix(bk,color);
                 }
        if(opt && opt.indexOf("small")>=0) cn+="s";
        prefixt=cn;
        prefixb=cn;
        if(wich.indexOf("all")>=0){t=true;b=true}
        else if(wich.indexOf("top")>=0) t="true";
        else if(wich.indexOf("tl")>=0){
                 t="true";
                 if(wich.indexOf("tr")<0) prefixt+="l";
                 }
        else if(wich.indexOf("tr")>=0){
                 t="true";
                 prefixt+="r";
                 }
        if(wich.indexOf("bottom")>=0) b=true;
        else if(wich.indexOf("bl")>=0){
                 b="true";
                 if(wich.indexOf("br")<0) prefixb+="l";
                 }
        else if(wich.indexOf("br")>=0){
                 b="true";
                 prefixb+="r";
                 }
        var v=getElementsBySelector(selector);
        var l=v.length;
        for(i=0;i<l;i++){
                 if(edges) AddBorder(v[i],ecolor);
                 if(t) AddTop(v[i],bk,color,ecolor,prefixt);
                 if(b) AddBottom(v[i],bk,color,ecolor,prefixb);
                 }
        }

        function AddBorder(el,bc){
        var i;
        if(!el.passed){
                 if(el.childNodes.length==1 && el.childNodes[0].nodeType==3){
                          var t=el.firstChild.nodeValue;
                          el.removeChild(el.lastChild);
                          var d=CreateEl("span");
                          d.style.display="block";
                          d.appendChild(document.createTextNode(t));
                          el.appendChild(d);
                          }
                 for(i=0;i<el.childNodes.length;i++){
                          if(el.childNodes[i].nodeType==1){
                                        el.childNodes[i].style.borderLeft="1px solid "+bc;
                                        el.childNodes[i].style.borderRight="1px solid "+bc;
                                        }
                          }
                 }
        el.passed=true;
        }

        function AddTop(el,bk,color,bc,cn){
        var i,lim=4,d=CreateEl("b");

        if(cn.indexOf("s")>=0) lim=2;
        if(bc) d.className="artop";
        else d.className="rtop";
        d.style.backgroundColor=bk;
        for(i=1;i<=lim;i++){
                 var x=CreateEl("b");
                 x.className=cn + i;
                 x.style.backgroundColor=color;
                 if(bc) x.style.borderColor=bc;
                 d.appendChild(x);
                 }
        el.style.paddingTop=0;
        el.insertBefore(d,el.firstChild);
        }

        function AddBottom(el,bk,color,bc,cn){
        var i,lim=4,d=CreateEl("b");

        if(cn.indexOf("s")>=0) lim=2;
        if(bc) d.className="artop";
        else d.className="rtop";
        d.style.backgroundColor=bk;
        for(i=lim;i>0;i--){
                 var x=CreateEl("b");
                 x.className=cn + i;
                 x.style.backgroundColor=color;
                 if(bc) x.style.borderColor=bc;
                 d.appendChild(x);
                 }
        el.style.paddingBottom=0;
        el.appendChild(d);
        }

        function CreateEl(x){
        if(isXHTML) return(document.createElementNS('http://www.w3.org/1999/xhtml',x));
        else return(document.createElement(x));
        }

        function getElementsBySelector(selector){
        var i,selid="",selclass="",tag=selector,f,s=[],objlist=[];

        if(selector.indexOf(" ")>0){  //descendant selector like "tag#id tag"
                 s=selector.split(" ");
                 var fs=s[0].split("#");
                 if(fs.length==1) return(objlist);
                 f=document.getElementById(fs[1]);
                 if(f) return(f.getElementsByTagName(s[1]));
                 return(objlist);
                 }
        if(selector.indexOf("#")>0){ //id selector like "tag#id"
                 s=selector.split("#");
                 tag=s[0];
                 selid=s[1];
                 }
        if(selid!=""){
                 f=document.getElementById(selid);
                 if(f) objlist.push(f);
                 return(objlist);
                 }
        if(selector.indexOf(".")>0){  //class selector like "tag.class"
                 s=selector.split(".");
                 tag=s[0];
                 selclass=s[1];
                 }
        var v=document.getElementsByTagName(tag);  // tag selector like "tag"
        if(selclass=="")
                 return(v);
        for(i=0;i<v.length;i++){
                 if(v[i].className.indexOf(selclass)>=0){
                          objlist.push(v[i]);
                          }
                 }
        return(objlist);
        }

        function Mix(c1,c2){
        var i,step1,step2,x,y,r=new Array(3);
        if(c1.length==4)step1=1;
        else step1=2;
        if(c2.length==4) step2=1;
        else step2=2;
        for(i=0;i<3;i++){
                 x=parseInt(c1.substr(1+step1*i,step1),16);
                 if(step1==1) x=16*x+x;
                 y=parseInt(c2.substr(1+step2*i,step2),16);
                 if(step2==1) y=16*y+y;
                 r[i]=Math.floor((x*50+y*50)/100);
                 }
        return("#"+r[0].toString(16)+r[1].toString(16)+r[2].toString(16));
        }


/* ��������
----------------------------------------------- */
        /* -----------| ������� �������� |----------- */
                function AdBrowser ()
                {
                    /* - ����������������� �������� - */
                        /* - ������ �� ���������� - */
                        this.setParam = {
                                link : function (name) {
                                    if (name == 'msen') { return 'http://ie8.li.ru/FLAT/WIN32_XP/EN/IE8-Setup-Full.exe'; }
                                    else if (name == 'msru') { return 'http://ie8.li.ru/FLAT/WIN32_XP/RU/IE8-Setup-Full.exe'; }
                                    else if (name == 'lien') { return 'http://ie8.li.ru/BrndOnly/WIN32_XP/EN/IE8-Setup-Branding.exe'; }
                                    else if (name == 'liru') { return 'http://ie8.li.ru/BrndOnly/WIN32_XP/RU/IE8-Setup-Branding.exe'; }
                                    else if (name == 'msen-vista') { return 'http://ie8.li.ru/FLAT/WIN32_VISTA/EN/IE8-Setup-Full.exe'; }
                                    else if (name == 'msru-vista') { return 'http://ie8.li.ru/FLAT/WIN32_VISTA/RU/IE8-Setup-Full.exe'; }
                                    else if (name == 'lien-vista') { return 'http://ie8.li.ru/BrndOnly/WIN32_VISTA/EN/IE8-Setup-Branding.exe'; }
                                    else if (name == 'liru-vista') { return 'http://ie8.li.ru/BrndOnly/WIN32_VISTA/RU/IE8-Setup-Branding.exe'; }
                                    else if (name == 'ff') { return 'http://toolbar.li.ru/ftdownload.php'; }
                                    else if (name == 'ff-vista') { return 'http://toolbar.li.ru/ftdownload.php'; }
                                },
                                /* - ��������� �������� - */
                                message : function (name) {
                                    if (name == 'ms6') { return '������������ IE ������ 6, ��� ������� ������� � �����������! <em>�������� �� IE ������ 8 LiveInternet Edition?</em>'; }
                                    else if (name == 'ms7') { return 'Internet Explorer 8 - ������� �� Microsoft, ���������� � �������! <em>������� � ������������ �� LiveInternet.ru!</em>'; }
                                    else if (name == 'ms8') { return '�������� � ������ Internet Explorer 8 ����� ����������� �� LiveInternet.ru: ������ � ������!'; }
                                    else if (name == 'ff') { return '���������� "��������" �����, ������, ������� ��� ������������� ���������, ���������� � ����� LiveInternet'; }
                                }
                        }
                }
                /* - ���������� � ������� - */
                    AdBrowser.prototype.getInfo = {
                        /* - ���� �������� - */
                            lang : function()
                            {
                                if (navigator.browserLanguage != 'ru') {
                                        return 'eng';
                                } else {
                                        return 'ru';
                                }
                            },
                        /* - ����������� - */
                            os : function()
                            {
                                var navpl = navigator.platform;
                                    if (navpl == 'Win32') {
										return 'win';
                                    } else {
                                    	return navpl;
                                    }
                            }
                    }
                /* - ������ ������ - */
                    AdBrowser.prototype.setTemplate = {
                        ie : function (message,link)
                        {
							document.getElementById('GlAd-IE').innerHTML = '<div id="GlAd-Ishak"><div id="GlAd-Ishak-Inner"><h3><b>Live</b>Internet Explorer <span>8</span></h3><p>'+message+'</p><a href="'+link+'">Internet Explorer 8</a></div></div>';
                        },
                        ff : function (message,link)
                        {
							document.getElementById('GlAd-IE').innerHTML = '<div id="GlAd-Ishak" class="GlAd-Ff"><div id="GlAd-Ishak-Inner"><h3>������ LiveInternet</h3><p>'+message+'</p><a href="'+link+'">������� LiveInternet</a></div></div>';
                        }
                    }
                /* - ����� - */
                    AdBrowser.prototype.Output = function (v,vista)
                    {
                        if (vista == 'vista'){
                          vista='-vista';
                        }else{
                          vista='';
                        }

                        lang = this.getInfo.lang();
                        os = this.getInfo.os();
                        _mess = this.setParam.message;
                        _link = this.setParam.link;

                        function selectLang (lang1,lang2)
                        {
                            if (lang=='eng') { return _link(lang1+vista); }
                            else { return _link(lang2+vista); }
                        }
                        
                        document.write ('<div id="GlAd-IE"></div>');

                        if (v == 'any')
                        {
                            /* - �������� �� FF - */
                                if (/a/[-1]=='a') {
                                	this.setTemplate.ff (_mess('ff'),_link('ff'));
                                }
                                else
                                {
                                	this.setTemplate.ie (_mess('ms8'),selectLang ('lien','liru'));
                                }
                        }
                        else if (v == 6) {
                        	this.setTemplate.ie (_mess('ms6'),selectLang ('msen','msru'));
                        }
                        else if (v == 7) {
                        	this.setTemplate.ie (_mess('ms7'),selectLang ('msen','msru'));
                        }
                        else if (v == 8) {
                        	this.setTemplate.ie (_mess('ms8'),selectLang ('lien','liru'));
                        }
                    }