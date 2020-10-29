function MyF(partN) {

switch(navigator.appName){
case "Netscape": ua="NN"; break;
case "Microsoft Internet Explorer": ua="IE"; break;
default: ua=""; return;
}
if (ua=="IE") {


                window.document.banner.TGotoLabel("/","part" + partN); // переход в нужный сегмент фильма
                window.document.banner.Play(); // проигрывание этого сегмента
    }
}
