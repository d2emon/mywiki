//Если пользователь не авторизован - предлагаем зарегистрироваться
if ((auth == 0))
{
	document.write('<a href="/journal_register.php"><img width="100" height="30" src="/4Ek/i/diary/butt/new.gif" alt="Создать дневник" /></a>'); 
}
//Если авторизован
else
{
		//Предлагаем создать сообщение
		if ((utype == 1) || ((comun>0) && (comun<5)))
		{
			if ((typeof ptype!="undefined") && (ptype==2)){
	  			document.write('<a href="/journal_post.php?journalid='+curj+'&action=m_add"><img width="110" height="30" src="/4Ek/i/diary/butt/newzap_'+cssc+'.gif" alt="Новая запись в аудио-коллекции" /></a>'); 
	                } 
			else if ((typeof ptype!="undefined") && (ptype==3)){
	  			document.write('<a href="/journal_post.php?journalid='+curj+'&action=v_add"><img width="110" height="30" src="/4Ek/i/diary/butt/newzap_'+cssc+'.gif" alt="Новая запись в видео-коллекции" /></a>'); 
	                } 
			else if ((typeof ptype!="undefined") && (ptype==4)){
	  			document.write('<a href="/journal_post.php?journalid='+curj+'&action=n_add"><img width="110" height="30" src="/4Ek/i/diary/butt/newzap_'+cssc+'.gif" alt="Добавить новость" /></a>'); 
	                } 
			else if ((typeof ptype!="undefined") && (ptype==5)){
	  			document.write('<a href="/journal_post.php?journalid='+curj+'&action=l_add"><img width="110" height="30" src="/4Ek/i/diary/butt/newzap_'+cssc+'.gif" alt="Добавить новую ссылку в коллекцию" /></a>'); 
	                } 
			else{
	  			document.write('<a onclick="show_hide_effect(\'BlQuickpost\');LI.bigpic.resizer.coordinator();return false;" href="/journal_post.php?journalid='+curj+'"><img width="110" height="30" src="/4Ek/i/diary/butt/newzap_'+cssc+'.gif" alt="Новая запись" /></a>');
			}
		}
		//Или стать постоянным читателем
		else
		{
			document.write('<a href=/member2.php?action=addlist&userlist=buddy&userid='+curj+'&userownid='+userid+'><img width="98" height="28" src="/4Ek/i/diary/main/btns/clr/p4/'+cssc+'.gif" alt="Стать постоянным читателем" /></a>'); 
		}
}