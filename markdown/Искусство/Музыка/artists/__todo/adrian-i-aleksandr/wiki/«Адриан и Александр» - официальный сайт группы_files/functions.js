var layerRef="null", styleSwitch="null";

function ownd(path,caption) {
	window.open('path','caption','toolbar=0,resizable=0,location=0,scrollbars=0,status=1,menubar=0,width=502,height=478,left=200,top=110');
}

function Init() {
  var globalDoc = window.dialogArguments;
  document.body.onkeypress = _CloseOnEsc;
//  btnOK.onclick = new Function("btnOKClick()");
}

function _CloseOnEsc() {
  if (event.keyCode == 27) { window.close(); return; }
}

function btnOKClick() {
  var globalDoc = window.dialogArguments;
//  alert(globalDoc.txtFileName.value);  
//  window.close();
}

function hideLayer(layerName){
  eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="hidden"');
}

function showLayer(layerName){
  eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="visible"');
}

var browser_name = navigator.appName;
var browser_version = parseFloat(navigator.appVersion);
var browser_ok = false;

if (browser_name == "Netscape" && browser_version >= 4.0)
    browser_ok = 'true';
else if (browser_name == "Microsoft Internet Explorer" && browser_version >= 4.0)
    browser_ok = 'true';

function imgChange(img, ref) {
  document.images[img].src = ref;
}

function setvalue(form,name,value) {
  var num = form.elements.length;
  for (var i = 0; i < num; i++) {
    if (form.elements[i].name != name) continue;
    form.elements[i].value = value;
    form.submit();
    break;
 }
}

function setstatus(text) {
   window.defaultStatus = text;
   window.status = text;
}

function cbchecked(form,name) {
  var num = form.elements.length;
  for (var i = 0; i < num; i++) {
    if (form.elements[i].name != name) continue;
    if (form.elements[i].checked) return true;
  }
  alert("Не указаны данные для голосования");
  return false;
}

function cbcheckfilled(form,name) {
  var num = form.elements.length;
  for (var i = 0; i < num; i++) {
    if (form.elements[i].name != name) continue;
    if (form.elements[i].checked) return true;
  }
  alert("Не указаны данные");
  return false;
}

function confirmsave() {
  return confirm("Сохранить изменения?");
}

function confirmdel() {
  return confirm("Удалить данные?");
}

function confirmadd() {
  return confirm("Добавить данные?");
}

function confirmdiscussion() {
  return confirm("Завершить обсуждение?");
}

function setfocus(obj) {
  obj.focus();
  obj.select();
}

function showerrorint(obj) {
  obj.focus();
  obj.select();
  alert("Неверное числовое значение \""+obj.value+"\".");
}

function showerrorempty(obj) {
  alert("Значение не введено.");
  setfocus(obj);
}

function showerrorradio(obj) {
  obj.focus();
  obj.select();
  alert("Значение не выбрано.");
}

function showerrorcombo(obj) {
  obj.focus();
  alert("Значение не выбрано.");
}

function invalidpath(obj) {
  alert("Неверный путь к файлу.");
  setfocus(obj);
}

function invalidname(obj,fname) {
  alert("Неверное имя файла \""+fname+"\"");
  setfocus(obj);
}

function fileoverwrite(fname,farray) {
  var num = farray.options.length;
  var val = fname.value;
  if (val == "") {return true;}

  var lastIndex = val.lastIndexOf("\\");
  if ((lastIndex == -1) || (lastIndex+1 >= val.length)) {
    invalidpath(fname);
    return false;
  }

  val = val.substring(lastIndex+1,val.length);
  if (val == "") {
    invalidpath(fname);
    return false;
  }

  var lastIndex = val.lastIndexOf(".");
  if (lastIndex == -1) {
    invalidname(fname,val)
    return false;
  }

  for (var i = 0; i < num; i++) {
     if (farray.options[i].value == val) {
         if (!confirm("Файл \""+val+"\" уже есть на сервере.\nПерезаписать?")) {
              setfocus(fname);
              return false;
        }
            else break;
     }
  }
  return true;
}

function checkfilled(form,name) {
  var num = form.elements.length;
  for (var i = 0; i < num; i++) {
    if (form.elements[i].name != name) continue;
    var obj = form.elements[i];
    var str = obj.value;
    if (str == "") {
       showerrorempty(obj);
       return false;
    }
 }
  return true
}

function checkequal(form,name1,name2) {
  var num = form.elements.length;
  for (var i = 0; i < num; i++) {
    if (form.elements[i].name != name1) continue;
    var obj1 = form.elements[i];
  }
  for (var i = 0; i < num; i++) {
    if (form.elements[i].name != name2) continue;
    var obj2 = form.elements[i];
  }
    if (obj1.value != obj2.value) {
       alert('Указанные пароли не совпадают. Повторите ввод снова.');
	   obj1.select();
	   obj1.focus();
       return false;
    } else  return true;
}

function checkemail(form,name) {
  var num = form.elements.length;
  for (var i = 0; i < num; i++) {
    if (form.elements[i].name != name) continue;
    var obj = form.elements[i];
  }
  if (obj.value == '') return true;
  if ((obj.value.indexOf('@', 0) == -1) || obj.value.indexOf('.', 0) == -1) {
	   alert('Неверный E-mail адрес!'); 
	   obj.focus();
	   obj.select();
       return false;
  } else return true;
  
}

function checkfloat(form,name) {
	var num = form.elements.length;
	for (var i = 0; i < num; i++) {
		if (form.elements[i].name != name) continue;
	
		var obj = form.elements[i];
		var str = obj.value;
		if (str == "") {
			showerrorint(obj);
			return false;
		}
		
		for (var j = 0; j < str.length; j++) {
			var ch = str.substring(j, j + 1);
			if ((ch < "0" || ch > "9") && (ch != "-") && (ch != ".")) {
				showerrorint(obj);
				return false;
			}
		}
		if (isNaN(parseFloat(str))) {
			showerrorint(obj);
			return false;
		}
	}
	return true;
}

function checkint(form,name,min,max) {
  var num = form.elements.length;
  for (var i = 0; i < num; i++) {
    if (form.elements[i].name != name) continue;

    var obj = form.elements[i];
    var str = obj.value;
    if (str == "") {
//		continue;
        showerrorint(obj);
         return false;
	}

    for (var j = 0; j < str.length; j++) {
       var ch = str.substring(j, j + 1);
       if ((ch < "0" || ch > "9") && ch != "-") {
         showerrorint(obj);
         return false;
       }
    }
    var val = parseInt(str, 10);
    if (((val < min) || (val > max)) && (min != 'undefined') && (max != 'undefined')) {
      showerrorint(obj);
      return false;
    }
  }
  return true;
}

function checkradiogroup(form,name) {
	n = form.elements.length;
    var obj;
	for (var i = 0; i < n; i++)
		for (var j = 0; j < n; j++)
		    if (form.elements[i].id == name + '_' + j) {
				obj = form.elements[i];
				if (obj.checked)  return true;
			}
	showerrorradio(obj);
	return false;
}

function checkcombobox(form,name) {
	var obj;
	for (var i = 0; i < form.elements.length; i++)
		if (form.elements[i].name == name) {
			obj = form.elements[i];
			if (obj.selectedIndex > 0)  return true;
		}
	showerrorcombo(obj);
	return false;
}

function cbcheckall(form,name) {
  var num = form.elements.length;
  for (var i = 0; i < num; i++) {
    if (form.elements[i].name != name) continue;
	form.elements[i].checked = "1";
  }
}

function cbuncheckall(form,name) {
  var num = form.elements.length;
  for (var i = 0; i < num; i++) {
    if (form.elements[i].name != name) continue;
	form.elements[i].checked = false;
  }
}

function disableButton (button) {
    if (document.all || document.getElementById) {
       document.all.namedItem(button).disabled=true;
    }
}

//<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">