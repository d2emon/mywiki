function confirm_reg()
{
return confirm("Вы действительно хотите заново создать все страницы дневника? Это может занять длительное время");
}

function j_p_h(headdate)
{
document.write(
'<table width=100% cellspacing=0 cellpadding=0 border=0><tr height=10><td width=175 rowspan=4>&nbsp;</td><td></td></tr><tr><td align=right class="j_headtext">'+headdate+
'</td></tr><tr><td><center><hr class="j_hc"</td></tr></table>');
}

function j_post1(messagesinfoid, dtime, textheader,textmess, postattachment, edittext, messagesinfouserid, comurl)
{
document.write(
'<a name=post'+messagesinfoid+'></a><table width=100% cellspacing=0 cellpadding=5 border=0 class="j_text"><tr><td width=170 class="j_text">&nbsp;</td><td><table width=100% cellspacing=0 cellpadding=5 border=0 class="j_text"><tr><td width=100% class="j_text2"><table width=100% class="j_text2" cellspacing=0 cellpadding=0 border=0 ><tr><td class="j_text2" colspan=2><h3 class="j_text2">'+dtime+' <b>'+textheader+'</b></h3>'+
'<p>'+textmess+'</p><br>'+postattachment+'</td></tr><tr><td align=left class="j_s"><a href=#post'+messagesinfoid+'>URL</a></td> <td align=right class="j_s">'+edittext+'&nbsp;'+
'<a href='+comurl+'>');
}

function j_post2(messagesinfoid, messagesinfouserid,linekeywords,journalid)
{
  document.write(
  '</a>&nbsp;'+
  '<a href=/journalpostcomments.php?jpostid='+messagesinfoid+'&journalid='+journalid+'>Комментировать</a>&nbsp;'+
  '<a href=/journalpostcomments.php?jpostid='+messagesinfoid+'&journalid='+journalid+'&postquote=1>Цитировать</a>&nbsp;'+
  '<a href=/journal_editpost.php?jpostid='+messagesinfoid+'&action=getquote>Добавить в цитатник</a>&nbsp;'+
  '<a href=/mail.php?action=newmessage&userid='+messagesinfouserid+'>Личное сообщение</a>&nbsp;</td></tr>'+linekeywords+
  '</table></td></tr></table></td></tr></table>');
}

function j_post2(messagesinfoid, messagesinfouserid,linekeywords)
{
  document.write(
  '</a>&nbsp;'+
  '<a href=/journalpostcomments.php?jpostid='+messagesinfoid+'>Комментировать</a>&nbsp;'+
  '<a href=/journalpostcomments.php?jpostid='+messagesinfoid+'&postquote=1>Цитировать</a>&nbsp;'+
  '<a href=/journal_editpost.php?jpostid='+messagesinfoid+'&action=getquote>Добавить в цитатник</a>&nbsp;'+
  '<a href=/mail.php?action=newmessage&userid='+messagesinfouserid+'>Личное сообщение</a>&nbsp;</td></tr>'+linekeywords+
  '</table></td></tr></table></td></tr></table>');
}

function j_post1_close(messagesinfoid, dtime, textheader,textmess, postattachment, edittext, messagesinfouserid, comurl)
{
  document.write(
  '<a name=post'+messagesinfoid+'></a><table width=100% cellspacing=0 cellpadding=5 border=0><tr><td width=170>&nbsp;</td><td><table width=100% cellspacing=0 cellpadding=5 border=0><tr><td class="j_text2" width=100%><table width=100% class="j_text2" bottommargin=0 cellspacing=0 cellpadding=0 border=0 ><tr><td class="j_text2" colspan=2>'+dtime+'<b> '+textheader+'</b><br>'+
  '<p>'+textmess+'</p><br>'+postattachment+'</td></tr><tr><td align=left class="j_s"><a href=/showjournal.php?journalid='+messagesinfouserid+'#post'+messagesinfoid+'>URL</a></td> <td align=right class="j_s">'+edittext+'&nbsp;');
}

function j_post1_close(messagesinfoid, dtime, textheader,textmess, postattachment, edittext, messagesinfouserid, comurl,journalid)
{
  document.write(
  '<a name=post'+messagesinfoid+'></a><table width=100% cellspacing=0 cellpadding=5 border=0><tr><td width=170>&nbsp;</td><td><table width=100% cellspacing=0 cellpadding=5 border=0><tr><td class="j_text2" width=100%><table width=100% class="j_text2" bottommargin=0 cellspacing=0 cellpadding=0 border=0 ><tr><td class="j_text2" colspan=2>'+dtime+'<b> '+textheader+'</b><br>'+
  '<p>'+textmess+'</p><br>'+postattachment+'</td></tr><tr><td align=left class="j_s"><a href=/showjournal.php?journalid='+journalid+'#post'+messagesinfoid+'>URL</a></td> <td align=right class="j_s">'+edittext+'&nbsp;');
}

function j_post2_close(messagesinfoid, messagesinfouserid)
{
  document.write(
  '<a href=/journal_editpost.php?jpostid='+messagesinfoid+'&action=getquote>Добавить в цитатник</a>&nbsp;'+
  '<a href=/mail.php?action=newmessage&userid='+messagesinfouserid+'>Личное сообщение</a>&nbsp;</td></tr></table></td></tr></table></td></tr></table>');
}

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
       midpage='<font class=j_headtext>['+maxpages+']</font>'; else
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
        midpage=midpage+'&nbsp; <font class=j_headtext>['+i+']</font>';
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
       leftpage='<font class=j_headtext>['+maxpages+']</font>'; else
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

function writepage_old()
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
       midpage='<font class=j_headtext>['+maxpages+']</font>'; else
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
         urls2=u2_1+jp;
       }
       if (i==cp)
        midpage=midpage+'&nbsp; <font class=j_headtext>['+i+']</font>';
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
       leftpage='<font class=j_headtext>['+maxpages+']</font>'; else
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
         urls2=u2_1+jp;
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
         urls2=u2_1+jp;
       }
       rightpage='&nbsp; <a href="'+urls2+urls2_gen+'" class=link_main><font class=j_headtext>'+i+'</font></a>'+rightpage;
       i=i+1;
     }
    document.write(leftpage+midpage+rightpage);
  }
}