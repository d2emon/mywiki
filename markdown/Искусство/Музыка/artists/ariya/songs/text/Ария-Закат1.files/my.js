function MyF(partN) {

switch(navigator.appName){
case "Netscape": ua="NN"; break;
case "Microsoft Internet Explorer": ua="IE"; break;
default: ua=""; return;
}
if (ua=="IE") {


                window.document.banner.TGotoLabel("/","part" + partN); // ������� � ������ ������� ������
                window.document.banner.Play(); // ������������ ����� ��������
    }
}
