
// delete an element from the DOM
function removeElement(element)
{
    var el = document.getElementById(element);
    el.parentNode.removeChild(el);
};

// toggle an element from the dom
function toggleDisplay(elementId)
{
    var e = document.getElementById(elementId);
    
    if (e.style.display == 'block')
    {
        e.style.display = 'none';
    }
    else
    {
        e.style.display = 'block';
    }
};

// check to see if an element exists.  if so, eval jsExists. Else, eval jsNotExists
function ifExists(elementId,jsExists,jsNotExists)
{
    if (document.getElementById(elementId) == null)
    {
        // element doesnt exist
        eval(jsNotExists);
    }
    else
    {
        // element exists
        eval(jsExists);
    }
};

// Window for pop up player
function NewWindowPlayer(a){
    LeftPosition = (screen.width) ? (screen.width)/4 : 0;
    TopPosition = (screen.height) ? (screen.height)/4 : 0;
    settings = 'width=489,height=430,top='+TopPosition+',left='+LeftPosition+',scrollbars=,resizable';
    win = window.open('/player/popup?a='+a,'PurePlayer',settings);
};

// use a checkbox to determine if all checkboxes in the scope of id should be checked or unchecked
function toggleChecked(id, inputId) 
{
	var el        = document.getElementById(id);
    var newValue  = document.getElementById(inputId).checked;

	var tags      = el.getElementsByTagName('input');
	
	for (var i = 0; i < tags.length; i++) 
	{
	    tags[i].checked = newValue; 
	}
};



function selectRadioButton(formName, elementName, newValue) 
{    
    var radioObj    = document.forms[formName].elements[elementName]; 
    var radioLength = radioObj.length;
    
    if (radioLength == undefined) 
    {
        radioObj.checked = (radioObj.value == newValue.toString());
    	return;
    }
    
    for (var i=0; i < radioLength; i++) 
    {
        radioObj[i].checked = false;
    	
    	if (radioObj[i].value == newValue.toString()) 
    	{
    	    radioObj[i].checked = true;
    	}
    }    
};

function selectedCustomizeBackground(element, container)
{
    divId = element.parentNode.parentNode.parentNode.id;

    $('#' + divId + ' > div#colors div.skin_thumb a').removeClass('checked');
    $('#' + divId + ' > div#images div.skin_thumb a').removeClass('checked');
    $('#' + element.id).addClass('checked');
};

function selectedCustomizeSkin(element, container)
{
    divId = element.parentNode.parentNode.id;

    $('#' + divId + ' > div.skin_thumb a').removeClass('checked');
    $('#' + element.id).addClass('checked');
};

// zip / city switcher
function show_zip_or_postal(element)
{
    if (element == null)
    {
      var elementId = 'country';
    }
    else
    {
        var elementId = element.id;
    }
    
	if (document.getElementById(elementId))
	{
		var country_id = document.getElementById(elementId).options[document.getElementById(elementId).selectedIndex].value;
	
	    // if us or canada, show zipcode field
		if (country_id == '235' || country_id == '43' || country_id == 'United States' || country_id == 'Canada')
		{
		    document.getElementById('zip_display').style.display = 'block';
		    document.getElementById('city_display').style.display = 'none';
		    
		}
		else
		{		
			document.getElementById('zip_display').style.display = 'none';
		    document.getElementById('city_display').style.display = 'block';		
		}
	}
};


// zip / city switcher
function show_state()
{
	if (document.getElementById('country'))
	{
		var country_id = document.getElementById('country').options[document.getElementById('country').selectedIndex].value;
	
	    // if us or canada, show zipcode field
		if (country_id == '235' || country_id == 'United States' || country_id == 'USA')
		{
		    document.getElementById('state_display').style.display = 'block';
		    
		}
		else
		{		
			document.getElementById('state_display').style.display = 'none';
		}
	}
};





function upFront()
{
    // UPFRONT FLASH SPOT
    sl_movie1 = document.getElementById('spotlight_movie1').title;
    sl_movie2 = document.getElementById('spotlight_movie2').title;

    spotlightFeature  = '<object class="mlIFRobject" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="398" height="242">';
    spotlightFeature += '<param name="movie" value="/_swf/upfront.swf?movie1='+ sl_movie1 +'&movie2='+ sl_movie2;

    if (document.getElementById('spotlight_movie3'))
    {
        spotlightFeature += '&movie3='+ document.getElementById('spotlight_movie3').title;
    }

    spotlightFeature += '&server=http://www.purevolume.com" />';
    spotlightFeature += '<embed class="mlIFRobjet" src="/_swf/upfront.swf?movie1='+ sl_movie1 +'&movie2='+ sl_movie2;

    if (document.getElementById('spotlight_movie3'))
    {
        spotlightFeature += '&movie3='+ document.getElementById('spotlight_movie3').title;
    }

    spotlightFeature += '&server=http://www.purevolume.com" width="398" height="242" wmode="transparent" quality="best" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
    spotlightFeature += '</object>';

        //alert(sl_movie1);

    document.getElementById('spotlight_feature').innerHTML = spotlightFeature;
}




// My Music Player - Open browser in middle of screen
var win = null;
function NewWindow(mypage,myname,w,h,scroll){
    LeftPosition = (screen.width) ? (screen.width-w)/4 : 0;
    TopPosition = (screen.height) ? (screen.height-h)/4 : 0;
    if(w != "" && h != ""){
        settings = 'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
    } else {
        settings = 'scrollbars='+scroll+',resizable';
    }
    win = window.open(mypage,myname,settings);
}

//// SHOW A HIDDEN LAYER - For Search and Login////

function toggleLayer(theshown, hiddenArray, classArray, newClass, buttonObject, toggleLayer)
{
	var d = document;
  
	if (theshown != '')
	{
		if (d.getElementById(theshown).style.display=='none' || (d.getElementById(theshown).style.display == ''))
		{
      if (buttonObject)
        buttonObject.className = newClass;
      d.getElementById(theshown).style.display = 'block';   
		}
		else
		{
      if (buttonObject && toggleLayer != false)
        buttonObject.className = '';
      
      if (toggleLayer != false)  
        d.getElementById(theshown).style.display = 'none';
		}
	}

  if (classArray)
  {
    for (var i = 0; i < classArray.length; i++)
    {
      if (d.getElementById(classArray[i]))
      {
        d.getElementById(classArray[i]).className = '';
      }	  
    } 
  }

  if (hiddenArray)
  {
    for (var i = 0; i < hiddenArray.length; i++)
    {
      if (d.getElementById(hiddenArray[i]))
      {
        d.getElementById(hiddenArray[i]).style.display = 'none';
      }	  
    } 
  }
};

//// MAKE TEXT DARK ////

function SignupFocus(whichId,insertText)
{
    if (document.getElementById(whichId))
    {
        var d = document.getElementById(whichId);

        if (d.value==insertText)
        {
            d.style.color='#666';
            d.value='';
        }
    }
};

//// RESET TEXT - MAKE IT LIGHT ////

function SignupBlur(whichId,insertText,color)
{
    if (document.getElementById(whichId))
    {
        var d = document.getElementById(whichId);

        if (d.value=='')
        {
            if (!color)
            {
                d.style.color='#666';
            }
            d.value=insertText;
        }
    }
};

//// MAKE TEXT DARK ////

function SignupFocusPass(whichId,insertText)
{
    if (document.getElementById(whichId))
    {
        var d = document.getElementById(whichId);
        if (d.value==insertText)
        {
            x = d.cloneNode(true);
            x.style.color='#666';
            x.value='';
            x.type = 'password';
            tmp = d.tabIndex;
            d.tabIndex = 1000;
            
            x.id='temp';
            
            d.parentNode.insertBefore(x, d.nextSibling);
            d.style.position = 'absolute';
            d.style.visibility = 'hidden';
            
            document.getElementById('temp').focus(); 
            document.getElementById('temp').select();
            
            window.setTimeout(function(){d.parentNode.removeChild(d); x.id = whichId; }, 10);
            
        }
    }
};

//// RESET TEXT - MAKE IT LIGHT ////

function SignupBlurPass(whichId,insertText,color)
{
    if (document.getElementById(whichId))
    {
        var d = document.getElementById(whichId);

        if (d.value=='')
        {
            if (!color)
            {
                d.style.color='#666';
            }
            
            d.value = insertText;
            d.type  = 'text';
        }
    }
};

// HIDE SPECIFIC LAYER
function HideLayer(thehidden){
    document.getElementById(thehidden).style.display = 'none';
}


function debug(message)
{
    if (document.getElementById('debug'))
    {
        document.getElementById('debug').innerHTML += message + '<br/>';
        document.getElementById('debug').scrollTop += 50;
    }
}

function changeTab(element, show, container)
{
    ulId = element.parentNode.parentNode.id;
    
    $('#' + ulId + ' > li a').removeClass('selected');
    $('#' + element.id).addClass('selected');
    
    $('.' + container + ' > div').hide();
    $('#' + container + ' > div').hide();
    $('#' + show).show();
}

function changeLiTab(element, show, container)
{
    ulId = element.parentNode.id;
    
    $('#' + ulId + ' > li').removeClass('selected');
    $('#' + element.id).addClass('selected');
    
    $('.' + container + ' > div').hide();
    $('#' + container + ' > div').hide();
    $('#' + show).show();
}

function changeSong(ulId, show)
{
    $('#' + ulId + ' > span').hide();
    $('#' + show).show();
}

function showAllSongs(ulId)
{
    $('#' + ulId + ' > li').show();
    $('#' + ulId + '_more_songs').hide();
}


function toggleForm(element, show, container)
{
    ulId = element.parentNode.parentNode.id;
    
    $('#' + ulId + ' > li a').each(function()
    {
        if (this != element)
        {
            $(this).removeClass('selected');
        }
    });

    $(element).toggleClass('selected');            

    $('.' + container + ' > div').each(function()
    {
        if (this != $('#' + show).get())
        {
            $(this).hide();   
        }
    });
    
    $('#' + container + ' > div').each(function()
    {
        if (this.id != show)
        {
            $(this).hide();   
        }
    });
        
    $('#' + show).toggle();
}

function toggleControlForm(element, show, container)
{
    ulId = element.parentNode.id;
    
    $('#' + ulId + ' > li').each(function()
    {
        if (this != element)
        {
            $(this).removeClass('selected');
        }
    });

    $(element).toggleClass('selected');            

    $('.' + container + ' > div').each(function()
    {
        if (this != $('#' + show).get())
        {
            $(this).hide();   
        }
    });
    
    $('#' + container + ' > div').each(function()
    {
        if (this.id != show)
        {
            $(this).hide();   
        }
    });
        
    $('#' + show).toggle();
}

function toggleSearch()
{
    if ($('#login_collapse').css('display') == 'block')
    {
        $('#login_collapse').hide();
        $('a.search').toggleClass('selected');
        $('#search_collapse').show();
        $('a.login').toggleClass('selected');
    }
    else if ($('#search_collapse').css('display') == 'none')
    {
        $('#search_collapse').slideDown({duration: 500, easing: 'easeout'});
        $('a.search').toggleClass('selected');
    }
    else
    {
         $('#search_collapse').slideUp({duration: 500, easing: 'easeout', complete: function() { $('a.search').toggleClass('selected'); }});
    }
}

function toggleLogin()
{
    if ($('#search_collapse').css('display') == 'block')
    {
        $('#search_collapse').hide();
        $('a.search').toggleClass('selected');
        $('#login_collapse').show();
        $('a.login').toggleClass('selected');
    }
    else if ($('#login_collapse').css('display') == 'none')
    {
        $('a.login').toggleClass('selected');
        $('#login_collapse').slideDown({duration: 500, easing: 'easeout'});
    }
    else
    {
         $('#login_collapse').slideUp({duration: 500, easing: 'easeout', complete: function() { $('a.login').toggleClass('selected'); }});
    }
}

function preloadImage(url)
{
    var img = new Image;
    img.src = url;
}

function limitChars(textid, limit, infodiv)
{
    var text = $('#'+textid).val(); 
    var textlength = text.length;
    if(textlength > limit)
    {
        $('#' + infodiv).html('You have reached '+limit+' characters!');
        $('#'+textid).val(text.substr(0,limit));
        return false;
    }
    else
    {
        $('#' + infodiv).html(''+ (limit - textlength) +' characters left.');
        return true;
    }
}