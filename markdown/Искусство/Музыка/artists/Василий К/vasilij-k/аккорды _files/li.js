/* Global object
----------------------------------------------- */
	LI = {}

/* Menu
----------------------------------------------- */
	LI.menu = {
		/* -----------[ Create/delete menu ]----------- */
			show : function (e,hdr,body) {
				/* -[ Menu element ]- */
					var id = e.id+'_menu';
					var elem = LiCi.$(id);
				/* -[ If defined – delete ]- */
					if (elem)
						elem.parentNode.removeChild(elem);
				/* -[ If undefined – remove ]- */		
					else {
						/* -[ Position ]- */
							var top = LiCi.elemTop(e) + LiCi.elemHeight(e);
							var left = LiCi.elemLeft(e) - LiCi.elemWidth(e);
							var wrapper = document.createElement('div');
							var cl = 'gl_Menu';
						/* -[ Creating ]- */
							wrapper.id = id;
							wrapper.className = cl;
							wrapper.style.position = 'absolute';
							wrapper.style.top = top+'px';
							wrapper.style.left = left+'px';
							LiCi.$(':gl_Body').appendChild(wrapper);				
							LiCi.$(id).innerHTML = '<div class="'+cl+'T"></div><div class="'+cl+'I"><b class="'+cl+'-hdr">'+hdr+'</b>'+body+'</div><div class="'+cl+'B"></div>';
					}
			}
	}

/* Top panel
----------------------------------------------- */
	/* -----------[ Properties ]----------- */	
		LI.topPanel = {
			auth : '<form  class="gl_Top-nav-user-info-lnk-itemChange-menu" action="/member.php" method="post" name="diary_login_form"><input type="hidden" name="action" value="login" /><fieldset><label>Логин</label><input type="text" name="username" tabindex="1" /></fieldset><fieldset><label>Пароль</label><input  type=password name="password" tabindex="2" /></fieldset><input value="Войти" type="submit" tabindex="3" /></form>',
			theme : '<ul class="gl_Top-opts-theme-menu"><li onclick="LI.topPanel.themeSelect(\'default\');"><a href="#">Стандартный</a></li><li onclick="LI.topPanel.themeSelect(\'author\');"><a href="#">Авторский</a></li><li onclick="LI.topPanel.themeSelect(\'my\');"><a href="#">Мой</a></li></ul>'
		};		
	/* -----------[ Methods ]----------- */
		LI.topPanel.accountlist = function (j) {
			var users = '';
			for (i = 0; i<j.length; i++) {
				users += '<li><a href=" http://www.liveinternet.ru/login.php?userid='+j[i][1]+'&ref='+window.location+'">'+j[i][0]+'</a></li>';
			}
			return users;
		};
		LI.topPanel.users2form = function (e) {
			var id = e.id+'_menu';
			var elem = LiCi.$(id);
			elem.parentNode.removeChild(elem);
			LI.menu.show(e, 'Сменить пользователя', LI.topPanel.auth);
		};
		LI.topPanel.search = function (e,diff,type) {
			var parent = e.parentNode;
			var wrapper = e.parentNode.parentNode;
			
			if (type=='open') {
				wrapper.style.left = 0;
				parent.style.width = LiCi.elemWidth(parent)+diff+'px';
				e.style.width = LiCi.elemWidth(e)+diff+'px';
			} else {
				wrapper.style.left = '60px';
				parent.style.width = LiCi.elemWidth(parent)-diff+'px';
				e.style.width = LiCi.elemWidth(e)-diff+'px';
			}
		};
		LI.topPanel.themeSelect = function (type) {
			LiCi.setCookie('ThemeSelect',type);
			document.location.reload();
		};
	/* -----------[ Events ]----------- */
		LiCi.domReady (function () {
				/* -[ User type ]- */
					LiCi.$Set(LiCi.$(':gl_Top'),'visibility','visible');
					if (auth) {
						LiCi.$Set(LiCi.$(':gl_Top-navAuth'),'display','block');
						LiCi.$Set(LiCi.$(':gl_Top-rand-stat'),'display','none');
					} else {
						LiCi.$Set(LiCi.$(':gl_Top-navNoauth'),'display','block');
					}
				/* -[ Panel width ]- */				
					var e = LiCi.$(':gl_TopI');
					var wind = LiCi.windowWidth();
					if (wind>1200)
						LiCi.$Set(e,'width','1200px'); 
							else
								LiCi.$Set(e,'width','980px');
				/* -[ Username width ]- */
					if (auth) 
					{
						var u = LiCi.$(':gl_Top-nav-user-info-name');
						if (LiCi.elemWidth(u) > 80) {
							if (wind > 1200) {
								LiCi.$Set(LiCi.$(':gl_Top-nav-user'), 'width', '350px');
							}
							else 
							{
								LiCi.$Set(u, 'width', '80px');
								LiCi.$Set(u, 'height', '17px');
								LiCi.$Set(LiCi.$(':gl_Top-nav-user-info-name-long'), 'display', 'block');
								LiCi.$Set(LiCi.$(':gl_Top-nav-user-info-name-long'), 'left', LiCi.elemWidth(u) - 8 + 'px');
							}
						}				  
					}
			});
		/* -[ Change user ]- */	
			LiCi.eventAdd (LiCi.$(':gl_Top-nav-user-info-lnk-itemChange'), "click", function () {
				if (LI.topPanel.accounts.length > 0) {
					cur = this;
					LI.menu.show(this, 'Последние активные', '<ul class="gl_Top-opts-theme-menu">' + LI.topPanel.accountlist(LI.topPanel.accounts) + '</ul><div style="margin-top:5px;text-align:center;font-weight:bold;"><a href="javascript:LI.topPanel.users2form(cur);">Ввести имя</a></div>');
				}
				else 
					LI.menu.show(this, 'Сменить пользователя', LI.topPanel.auth);
			});
			LiCi.eventAdd (LiCi.$(':gl_Top-navNoauth-change'), "click", function () {
				LI.menu.show(this,'Сменить пользователя',LI.topPanel.auth);
			});
		/* -[ Change theme ]- */	
			LiCi.eventAdd (LiCi.$(':gl_Top-opts-theme'), "click", function () {
				LI.menu.show(this,'Для всех страниц',LI.topPanel.theme);
			});
		/* -[ Search form ]- */		
			LiCi.eventAdd (LiCi.$(':gl_Top-opts-srch-inp'), "focus", function () {
				LI.topPanel.search(this,70,'open');
			});
			LiCi.eventAdd (LiCi.$(':gl_Top-opts-srch-inp'), "blur", function () {
				LI.topPanel.search(this,70,'close');
			});
			LiCi.eventAdd (LiCi.$(':gl_Top-opts-srch-btn'), "click", function () {
				this.parentNode.parentNode.submit();
			});

/* Application panel
----------------------------------------------- */ 
	/* -----------[ Properties ]----------- */
		LI.appPanel = {
			smallHeight : 50,
			delay : 500,
			timer : 0,
			transp : false,
			topFull : function () {
				return LiCi.windowHeight() - this.bigHeight;
			},
			topMin : function () {
				return LiCi.windowHeight()/2 - this.smallHeight;
			}
		};
		if (auth) {
			LI.appPanel.bigStatus = LiCi.getOption(LiCi.$(':gl_Apps-full')).status;
			LI.appPanel.smallStatus = LiCi.getOption(LiCi.$(':gl_Apps-min')).status;
			LI.appPanel.bigStyle = LiCi.$(':gl_Apps-full').style;
			LI.appPanel.smallStyle = LiCi.$(':gl_Apps-min').style;
			LI.appPanel.bigHeight = LiCi.elemHeight(LiCi.$(':gl_Apps-full'));
		}
	/* -----------[ Methods ]----------- */	
		/* -[ First call ]- */
			LI.appPanel.pos = function () {
				var dig = LiCi.$_('gl_Apps-item-digitI',LiCi.$(':gl_Apps-full'));
				for (var i=0,j=dig.length; i<j; i++)
					if (dig[i].innerHTML == 0)
						dig[i].style.display = 'none';
				this.bigStyle.top = this.topFull() + 'px';
				this.smallStyle.top = this.topMin() + 'px';
				if (this.bigStatus === 1)  this.bigStyle.visibility = 'visible';
				else this.smallStyle.visibility = 'visible';
			};
		/* -[ Show/hide panel ]- */	
			LI.appPanel.view = function (stat1,stat2,obj1,obj2,act) {
				stat1 = 0;
				stat2 = 1;
				obj1.visibility = 'hidden';
				obj2.visibility = 'visible';
				var url = '/show_app_panel.php';
			 	var myAjax = new Ajax.Updater('', url, {method: 'get', parameters: 'cmd='+act});
			};
		/* -[ Scroll ]- */	
			LI.appPanel.scroll = function () {
				/* -[ Scrolling ]- */
					/* -[ Transparency ]- */
						if (this.transp == false) {
							if (LiCi.getBrowser.safari)
								LiCi.setOpacity(LiCi.$(':gl_Apps'),0.10);
							else
								LiCi.$Set($(':gl_Apps'),'display','none');
							this.transp = true;
						}
						clearTimeout(this.timer);
						this.timer = setTimeout(function(){
							if (LiCi.getBrowser.safari) 
								LiCi.setOpacity(LiCi.$(':gl_Apps'),1);
							else
								LiCi.$Set($(':gl_Apps'),'display','block'); 
							LI.appPanel.transp = false; 
						}, this.delay);
						
					var offset = LiCi.bodyOffset();
						this.bigStyle.top = this.topFull() + offset + 'px';
						this.smallStyle.top = this.topMin() + offset + 'px';
						
			};
	/* -----------[ Events ]----------- */
		if (auth) 
		{
			/* -[ Load ]- */
				LiCi.domReady (function () {
					LI.appPanel.pos();	
				});
			/* -[ Scroll ]- */	
				LiCi.eventAdd (window, "scroll", function () {
					LI.appPanel.scroll();
				});
				LiCi.eventAdd (window, "load", function () {
				});
			/* -[ Resize ]- */	
				LiCi.eventAdd (window, "resize", function () {
					LI.appPanel.scroll();
				});
			/* -[ Hide big ]- */	
				LiCi.eventAdd (LiCi.$(':gl_Apps-minim'), "click", function () {
					LI.appPanel.view(
						LI.appPanel.bigStatus,
						LI.appPanel.smallStatus,
						LI.appPanel.bigStyle,
						LI.appPanel.smallStyle,
						'hide'
					);
				});
			/* -[ Hide small ]- */	
				LiCi.eventAdd (LiCi.$(':gl_Apps-min-lnk'), "click", function () {
					LI.appPanel.view(
						LI.appPanel.smallStatus,
						LI.appPanel.bigStatus,
						LI.appPanel.smallStyle,
						LI.appPanel.bigStyle,
						'show'
					);
				});
		}
			
/* Blogs
----------------------------------------------- */
	LI.blogs = {};
	/* -----------[ Elements ]----------- */
		/* -[ Friend menu ]- */
			LI.blogs.addFriend = function () {
			}
	/* -----------[ Events ]----------- */
		LiCi.domReady (function () {
			if (auth) {
				var e = LiCi.$(':blg_SidebarTofriend');
				if (e) 
				{
					if (curj!=userid) {
						if (is_friend==1) {
							var string = 'Из друзей';
							var action = 'removelist';
						} else {
							var string = 'В друзья';
							var action = 'addlist';
						}
						e.innerHTML = '<a class="GlIco2Friend" href="/member2.php?action='+action+'&userlist=buddy&userid='+curj+'&userownid='+userid+'">'+string+'</a>';
					}
				}
			}	
		});	
		
/* Footer toolbars
----------------------------------------------- */
	/* -----------[ Properties ]----------- */
		LI.ftrBar = {};			
			LI.ftrBar.opts = {
				hdr : 'Тулбар LiveInternet',
				features : [['Погода в Вашем городе'],['Быстрый вход в блоги, почту, статистику'],['Список соседних сайов'],['Поиск в статистике запросов']]
			};
			if (LiCi.getBrowser.mozilla)  {
				LI.ftrBar.opts.type = 'bar';
				LI.ftrBar.opts.cl = 'FF';
				LI.ftrBar.opts.title = 'Любите FireFox?';
				LI.ftrBar.opts.size = '1 Мб';
				LI.ftrBar.opts.link = 'http://toolbar.li.ru/ftdownload.php';
			}
			if (LiCi.getBrowser.msie)  {
				LI.ftrBar.opts.type = 'bar';
				LI.ftrBar.opts.cl = 'IE';
				LI.ftrBar.opts.title = 'Любите InternetExplorer?';
				LI.ftrBar.opts.size = '1 Мб';
				LI.ftrBar.opts.link = 'http://toolbar.li.ru/tdownload.php';	
				LI.ftrBar.opts.features[LI.ftrBar.opts.features.length] = 'Заголовки ленты друзей';
			}
			if (LiCi.getBrowser.chrome)  {
				LI.ftrBar.opts.type = 'plug';
				LI.ftrBar.opts.cl = 'CH';
				LI.ftrBar.opts.title = 'Любите Google Chrome?';
				LI.ftrBar.opts.hdr1 = 'Статистика сайтов';
				LI.ftrBar.opts.size1 = '200 КБ';
				LI.ftrBar.opts.link1 = 'https://chrome.google.com/extensions/detail/pgfknkimgmlhnmkjmlncojniaomcbahf?hl=ru';	
				LI.ftrBar.opts.features1 = 'Быстрый просмотр статистик и рейтингов открытого сайта';
				LI.ftrBar.opts.hdr2 = 'Дневники LiveInternet';
				LI.ftrBar.opts.size2 = '150 КБ';
				LI.ftrBar.opts.link2 = 'https://chrome.google.com/extensions/detail/ediknbigigjapdhnimpagffehbdbkdal?hl=ru';	
				LI.ftrBar.opts.features2 = 'Читать, писать, комментировать записи в блогах liveinternet.ru';
			}
	/* -----------[ Methods ]----------- */
		LI.ftrBar.tpl = {
			title : function () {
				LiCi.$(':gl_Bar-ttl-like').innerHTML = '<span class="gl_Bar-ttl-like-main">'+LI.ftrBar.opts.title+'</span><span class="gl_Bar-ttl-like-shad">'+LI.ftrBar.opts.title+'</span>';
			},
			features : function () {
				var arr = LI.ftrBar.opts.features;
				var row = '';
				for (var i=0; i < arr.length; i++) {
					if (i%3==0) row += '<div class="gl_Bar-desc-info-bar-func-row">';		
					row += '<p>&mdash; '+arr[i]+'</p>';
					if (i%3==2) row += '</div>';
				}
				return row;
			},
			body : function () {
				if (LiCi.getBrowser.mozilla || LiCi.getBrowser.msie) 
				{
					LiCi.$(':gl_Bar-descI').innerHTML = '<div class="gl_Bar-desc-meta"><h3 id=":gl_Bar-desc-meta-hdr">'+LI.ftrBar.opts.hdr+'</h3><b id=":gl_Bar-desc-meta-size">Всего '+LI.ftrBar.opts.size+'</b><a class="gl_Bar-desc-meta-lnk" href="'+LI.ftrBar.opts.link+'">Скачать и поставить</a></div><div class="gl_Bar-desc-info"><div class="gl_Bar-desc-info-bar"><a class="gl_Bar-desc-info-bar-full" href="'+LI.ftrBar.opts.link+'"></a><a href="'+LI.ftrBar.opts.link+'" class="gl_Bar-desc-info-bar-accs"></a></div><div class="gl_Bar-desc-info-bar-func">'+this.features()+'</div><div class="Bo"></div>';
				}
				else
				{
					LiCi.$(':gl_Bar-descI').innerHTML = '<div class="gl_Bar-desc2"><div class="gl_Bar-desc-meta"><h3 id=":gl_Bar-desc-meta-hdr">'+LI.ftrBar.opts.hdr1+'</h3><b id=":gl_Bar-desc-meta-size">Всего '+LI.ftrBar.opts.size1+'</b><a class="gl_Bar-desc-meta-lnk" href="'+LI.ftrBar.opts.link1+'">Скачать и поставить</a></div><div class="gl_Bar-desc-info"><div class="gl_Bar-desc-info-bar"><a class="gl_Bar-desc-info-bar-full gl_Bar-desc-info-bar-full1" href="'+LI.ftrBar.opts.link1+'"></a>'+LI.ftrBar.opts.features1+'</div></div></div><div class="gl_Bar-desc2"><div class="gl_Bar-desc-meta"><h3 id=":gl_Bar-desc-meta-hdr">'+LI.ftrBar.opts.hdr2+'</h3><b id=":gl_Bar-desc-meta-size">Всего '+LI.ftrBar.opts.size2+'</b><a class="gl_Bar-desc-meta-lnk" href="'+LI.ftrBar.opts.link2+'">Скачать и поставить</a></div><div class="gl_Bar-desc-info"><div class="gl_Bar-desc-info-bar"><a class="gl_Bar-desc-info-bar-full gl_Bar-desc-info-bar-full2" href="'+LI.ftrBar.opts.link2+'"></a>'+LI.ftrBar.opts.features2+'</div></div></div><div class="Bo"></div>';
				}
			}
		}
	/* -----------[ Events ]----------- */
		if (LiCi.getBrowser.mozilla || LiCi.getBrowser.msie || LiCi.getBrowser.chrome) {
			LiCi.domReady(function() {
				LiCi.$Set(LiCi.$(':gl_Bar'), 'display', 'block');
				LiCi.$(':gl_Bar').className += ' gl_Bar' + LI.ftrBar.opts.cl;
				LI.ftrBar.tpl.title();
				LI.ftrBar.tpl.body();
			});
			LiCi.eventAdd(LiCi.$(':gl_Bar-ttl-tip-str'), "mouseover", function(){
				LiCi.$Set(LiCi.$(':gl_Bar-desc'), 'display', 'block');
			});
			/*
			LiCi.eventAdd(LiCi.$(':gl_Bar'), "mouseout", function(){
				LiCi.$Set(LiCi.$(':gl_Bar-desc'), 'display', 'none');
			});
			*/
		} else {
			LiCi.$(':gl_Bar').parentNode.removeChild(LiCi.$(':gl_Bar'));
		}