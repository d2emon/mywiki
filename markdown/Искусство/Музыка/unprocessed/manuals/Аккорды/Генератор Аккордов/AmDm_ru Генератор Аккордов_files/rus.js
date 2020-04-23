<!-- Begin

//            GUITAR CHORD GENERATOR in JAVASCRIPT Version 4.01 
//                 by Jim Cranwell  (cranwell@yahoo.com)
//      additions: Copyright 2002 by Vladimir Raguimov (info@ragimov.com)
//    This program is Copyright 1998 by Jim Cranwell.  You may not reprint
//      or redistribute this code without permission from the authors.

function prntDate()
{
        var monthNames = new Array( '€нвар€','феврал€','марта','апрел€','ма€','июн€','июл€', 'августа', 'сент€бр€', 'окт€бр€', 'но€бр€', 'декабр€' );

        var zeroPad = null;
        var curDate = new Date();
        year = y2kYear( curDate );
        month = curDate.getMonth();
        day = curDate.getDate();
        if( day < 10 )
        {
                zeroPad = "0";
        }
        
        printDate = zeroPad + day + " " + monthNames[ month ] + " " + year + " года";

        return printDate;
}
function y2kYear( theDate )
{
        wrongYear = theDate.getYear();
        var rightYear = wrongYear % 100;
        rightYear += (rightYear < 38) ? 2000 : 1900;
        return rightYear;
}

if (top.location !=self.location) {top.location.replace(self.location);}
if((navigator.appName!="Netscape")&&(navigator.appName!="Microsoft Internet Explorer")){
document.bgColor='#ffffff';
document.write("<table width='100%'><tr><td bgcolor='#ff0000' align='center'>");
document.writeln("...Use <a href='http://www.Netscape.com'>Netscape</a>, <a href='http://www.Opera.com'>Opera</a> or IE<br>...for programs to work correctly </td></tr></table>")};


var capolist="open,first,second,third,fourth,fifth,sixth,xxx,openf,firstf,secondf,thirdf,fourthf,fifthf,sixthf,xxxf,openit" ;
        var capo=capolist.split(",");
        var imageDB=new Array();
        for (i=0; i < capo.length; i++) {
                imageDB[i] = new Image;
                imageDB[i].src = capo[i] + ".gif" }

var nameit="&amp; vladimir ragimov";
var titleit="";

function titler(){ titleit=window.prompt("what's the name or title?",titleit);}

function newin(num,pr){
var wingen = window.open("", "wingen", "scrollbars=yes,toolbar=no,menubar=no,resizable=yes,top=5,left=5,width=750,height=450"); 
var gen = wingen.document; 
gen.open("text/html", "replace");wingen.focus();
if (titleit.length>0){gen.write("<HTML><HEAD><META HTTP-EQUIV='Content-Type' CONTENT='text/html; charset=Windows-1251'><TITLE>" +titleit+ "</TITLE>");}
else{gen.write("<HTML><HEAD><META HTTP-EQUIV='Content-Type' CONTENT='text/html; charset=Windows-1251'><TITLE>" +chordname[0]+"</TITLE>");}
gen.write("<style>a:visited{COLOR: #663366;text-decoration:none};a:link{COLOR: #663366;text-decoration:none};a:hover{COLOR: #FF6633;text-decoration:underline}</style>");
gen.write("</HEAD><BODY bgcolor='#ffffff'>");
gen.writeln("<font size=+2><CENTER><B>~~~ " + titleit + " ~~~</B></CENTER></font> ");
if(pink=='0'){gen.write("<table width='100%'><tr><td bgcolor='#6699ff'>");}
else{gen.write("<table width='100%'><tr><td bgcolor='#ff66aa'>");}

gen.writeln("<font size=+2><B>&nbsp;таблица выбранных аккордов");
gen.writeln(" || " + toon + " строй || " + lefty + "</B></font>");
gen.writeln("</td></tr></table><code> &nbsp; &copy 2002 by jim cranwell " + nameit + "&nbsp;</code>");
gen.writeln("<hr noshade size=1 color=#000088> ");
gen.writeln("<table border bgcolor='#dddddd' cellspacing='09' cellpadding='9'> ");
gen.writeln("<tr>");

for (a=0;a<pr;a++) {
if((a%5==0)&&(a!=0)){gen.writeln("</tr><tr>");}//**ifpr
gen.writeln("<td bgcolor='#ffffff' valign=top align=center><font face=arial size=-1>");
gen.write(chordname[a]);
gen.writeln("<br>");
gen.write(chordnotes[a]);
gen.write("</font><u><code><font size=+3>");

for (j=0;j<prst[a];j++) {
if(j%6==0){gen.writeln("<br>");}//**ifj
gen.write(num[a][j]);}//**forj

gen.write("</td>");
                }//**fora

gen.writeln("</tr>");
gen.writeln("</TABLE>");
gen.writeln("<center><hr noshade size=1 color=#000088>");
gen.writeln("<code> знак  Ў ¶  и вертикальные линии означают, что играетс€ открыта€ струна, независимо от лада<br>");

gen.writeln("|  " +prntDate()+ "  |");
gen.writeln(" <a href=javascript:void('') onClick='window.print()'>отпечатать эту страницу</a></code>");
gen.write("</BODY></HTML>");
gen.close();
        
}


var toon="EADGBE";
var pr =0;
var num =new Array();
var prst=new Array();
prst[0]=24;
num[0]=new Array();
var chordname=new Array();
chordname[pr]=" ";
var chordnotes=new Array();
chordnotes[pr]=" ";
var lefty=" ";
var pink=0;
var L=1; var Y=1; var Z=1;
var MMM=new Array(4, 9,2,7,11,4);
var T =new Array(1,0,0,0,1,0,0,1,0,0,0,0);
var TCK=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var P=new Array("C ","C#","D ","D#","E ","F ","F#","G ","G#","A ","A#","B ","xx");
var K=0;
var E1="XX"; var AA="XX"; var DD="XX"; var GG="XX"; var BB="XX"; var E2="XX";
var RIGHT=0;
var G =0 ;
var N=new Array(0,0,0,0,0,0); 
var NCK=""; 
var EG=0;
var chtext="maj"
var chordx="maj"
var V=7;
var VM=1;
var W=0;

function tunit(){
var form =document.forms.dym;
var tuner=form.tuning.selectedIndex;
var tutext=form.tuning.options[tuner].text;
toon=tutext;
if (tutext=="EADGBE") {MMM=new Array(4, 9,2,7,11,4)};
if (tutext=="EBEG#BE") {MMM=new Array(4,11,4,8,11,4)}; 
if (tutext=="EAEAC#E") {MMM=new Array(4, 9,4,9, 1,4)};  
if (tutext=="EADF#BE") {MMM=new Array(4, 9,2,6,11,4)};  
if (tutext=="EADGCF") {MMM=new Array(4, 9,2,7, 0,5)};
if (tutext=="DADGAD") {MMM=new Array(2, 9,2,7, 9,2)};
if (tutext=="DGCGCD") {MMM=new Array(2, 7,0,7, 0,2)};
if (tutext=="DADF#AD") {MMM=new Array(2, 9,2,6, 9,2)};
if (tutext=="DADGBE") {MMM=new Array(2, 9,2,7,11,4)};
if (tutext=="DGDGBD") {MMM=new Array(2, 7,2,7,11,2)};
if (tutext=="DADACD") {MMM=new Array(2, 9,2,9, 0,2)};
if (tutext=="CGCGAE") {MMM=new Array(0, 7,0,7, 9,4)};
if (tutext=="CGDAEG") {MMM=new Array(0, 7,2,9, 4,7)};
if (tutext=="FADGBE") {MMM=new Array(5, 9,2,7,11,4)};
if (tutext=="Gminor") {MMM=new Array(7,10,2,7,10,2)};
if (tutext=="Drop2") {MMM=new Array(2, 7,0, 5, 9,2)};
if (tutext=="Drop1") {MMM=new Array(3, 8,1, 6,10,3)};
if (tutext=="Capo1") {MMM=new Array(5,10,3, 8,0,5)};
if (tutext=="Capo2") {MMM=new Array(6,11,4, 9,1,6)};
if (tutext=="Capo3") {MMM=new Array(7, 0,5,10,2,7)};
if (tutext=="Capo4") {MMM=new Array(8, 1,6,11,3,8)};
if (tutext=="Capo5") {MMM=new Array(9, 2,7, 0,4,9)};
if (tutext=="Capo7") {MMM=new Array(11,4,9, 2,6,11)};
        GUITAR();       return MMM;}

function whatchord(chtext){     
T =new Array(1,0,0,0,1,0,0,1,0,0,0,0);
if (chtext=="maj") {T[0]=1; T[4]=1; T[7]=1 ; }
if (chtext=="min") {T[3]=1; T[4]=0}
if (chtext=="7th" ) {T[10]=1}
if (chtext=="m7") {T[3]=1; T[10]=1; T[4]=0}
if (chtext=="maj7") {T[11]=1}
if (chtext=="m maj7") {T[11]=1 ;T[4]=0;T[3]=1}
if (chtext=="6th") {T[9]=1}
if (chtext=="m6th") {T[3]=1; T[4]=0; T[9]=1}
if (chtext=="aug") {T[8]=1; T[7]=0}									// +5
if (chtext=="flat5") {T[7]=0; T[6]=1}								// -5
if (chtext=="dim7") {T[9]=1 ; T[6]=1 ; T[7]=0 ;T[4]=0 ;T[3]=1}		// dim septaccord
if (chtext=="sus4") {T[5]=1; T[4]=0}
if (chtext=="7sus4"){T[5]=1; T[4]=0; T[10]=1}
if (chtext=="9th") {T[2]=1; T[10]=1 }
if (chtext=="m9th") {T[2]=1; T[10]=1; T[3]=1; T[4]=0}
if (chtext=="add9") {T[2]=1}
if (chtext=="maj9"){T[2]=1; T[11]=1 }
if (chtext=="m maj9"){T[2]=1; T[11]=1 ;T[4]=0;T[3]=1}
if (chtext=="7#5") {T[8]=1; T[7]=0; T[10]=1}						// 7+5
if (chtext=="m7#5") {T[8]=1; T[7]=0; T[10]=1 ;T[4]=0;T[3]=1}		// m7+5
if (chtext=="7b5") {T[7]=0; T[6]=1; T[10]=1}						// 7-5
if (chtext=="m7b5") {T[7]=0; T[6]=1; T[10]=1 ;T[4]=0;T[3]=1}		// m7-5
if (chtext=="sus2") {T[2]=1; T[4]=0}
if (chtext=="7sus2"){T[2]=1; T[4]=0; T[10]=1}
if (chtext=="6/9") {T[2]=1; T[9]=1}
if (chtext=="7#9") {T[7]=0; T[10]=1;T[3]=1}
if (chtext=="%7") {T[3]=1; T[10]=1; T[4]=0;T[7]=0; T[6]=1}			// half dim
if (chtext=="dim") {T[7]=0; T[6]=1 ;T[4]=0;T[3]=1}					// dim three
if (chtext=="5") {T[4]=0}
if (chtext=="11th") {T[2]=1; T[4]=0; T[5]=1; T[10]=1}
if (chtext=="m11th"){T[2]=1; T[4]=0; T[5]=1; T[10]=1 ; T[3]=1 }
if (chtext=="11xt") {T[2]=1; T[4]=0; T[5]=1; T[10]=1 ; T[7]=0 ;}
if (chtext=="m11xt"){T[2]=0; T[4]=0; T[5]=1; T[10]=1 ; T[3]=1 ; T[7]=1 ;}
if (chtext=="13th") {T[2]=0; T[7]=1; T[9]=1; T[10]=1 ;T[5]=0}
if (chtext=="m13th") {T[2]=0; T[7]=1; T[9]=1; T[10]=1 ;T[5]=0 ;T[4]=0;T[3]=1}
if (chtext=="maj13"){T[2]=0; T[7]=1; T[9]=1; T[11]=1 ;T[5]=0}
if (chtext=="m maj13"){T[2]=0; T[7]=1; T[9]=1; T[11]=1 ;T[5]=0; T[3]=1; T[4]=0}
if (chtext=="7b9") {T[1]=1;T[10]=1}
if (chtext=="7#11") {T[6]=1;T[10]=1}
if (chtext=="7b9b13") {T[1]=1;T[7]=0;T[8]=1;T[10]=1}
if (chtext=="7b9/13") {T[1]=1;T[7]=0;T[9]=1;T[10]=1}
if (chtext=="7#9#11") {T[3]=1;T[6]=1;T[10]=1}
                chordx=chtext; return T;}

function vboy(V){
if(V==0) {L=1;Y=4 ;Z=1; VM=1;}
if(V==1) {L=1;Y=4 ;Z=7; VM=1;}
if(V==2) {L=1;Y=4 ;Z=11; VM=1;}
if(V==3) {L=5;Y=4 ;Z=1; VM=1;}
if(V==4) {L=5;Y=4 ;Z=7; VM=1;}
if(V==5) {L=5;Y=4 ;Z=11; VM=1;}
if(V==6) {L=1;Y=45;Z=1; VM=1;}
if(V==7) {L=1;Y=45;Z=7; VM=1;}
if(V==8) {L=1;Y=45;Z=11; VM=1;}
if(V==9) {L=5;Y=45;Z=1; VM=1;}
if(V==10){L=5;Y=45;Z=7; VM=1;}
if(V==11){L=5;Y=45;Z=11; VM=1;}
if(V==12){L=1;Y=4 ;Z=1; VM=-1;}
if(V==13){L=1;Y=4 ;Z=7; VM=-1;}
if(V==14){L=1;Y=4 ;Z=11; VM=-1;}
if(V==15){L=5;Y=4 ;Z=1; VM=-1;}
if(V==16){L=5;Y=4 ;Z=7; VM=-1;}
if(V==17){L=5;Y=4 ;Z=11; VM=-1;}
if(V==18){L=1;Y=45;Z=1; VM=-1;}
if(V==19){L=1;Y=45;Z=7; VM=-1;}
if(V==20){L=1;Y=45;Z=11; VM=-1;}
if(V==21){L=5;Y=45;Z=1; VM=-1;} 
if(V==22){L=5;Y=45;Z=7; VM=-1;}
if(V==23){L=5;Y=45;Z=11; VM=-1;}
        return L;Y;Z;VM ;}
        
        function varyit(V) { NCKIT=NCK;
                var form = document.forms.dym;
                for(ii=0; ii<24; ii++ ){
                V=(V+1)%24;
                form.varyL.selectedIndex=V;
                GUITAR();if( NCKIT !=NCK ){NCKIT=NCK;ii=25; };
                        }};
        
        function clearit(){pr=0; titleit="";    }

        function savit(){focus();
                num[pr]=new Array();num[pr+1]=new Array();
                for(b=0; b<42 ; b++ ){ num[pr][b]="|";
                if((b<6)&&(!G)){ num[pr][b]="_"} }
                GUITAR(); pr=pr + 1;}


        function docitx(){
        for(d=0; d<6; d++){ if(N[d]==0){num[pr][d]="Ч"};}
        document.six.src  =imageDB[7+G].src; E1=P[12];
        document.five.src =imageDB[7+G].src; AA=P[12];
        document.four.src =imageDB[7+G].src; DD=P[12];
        document.three.src=imageDB[7+G].src; GG=P[12];
        document.two.src  =imageDB[7+G].src; BB=P[12];
        document.one.src  =imageDB[7+G].src; E2=P[12];
        NCK=E1 + AA + DD + GG + BB + E2;}
        
        function docit(K,EG,W){
        if(K==0){document.six.src  =imageDB[EG].src; E1=P[W] };
        if(K==1){document.five.src =imageDB[EG].src; AA=P[W] };
        if(K==2){document.four.src =imageDB[EG].src; DD=P[W] };
        if(K==3){document.three.src=imageDB[EG].src; GG=P[W] };
        if(K==4){document.two.src  =imageDB[EG].src; BB=P[W] };
        if(K==5){document.one.src  =imageDB[EG].src; E2=P[W] };
        NCK=E1 + AA + DD + GG + BB + E2;        }



        function rand() {var form =document.forms[0];
        form.varyL.selectedIndex=Math.floor  ((Math.random() * 24));
        form.notes.selectedIndex=Math.floor  ((Math.random() * 12));
        form.chords.selectedIndex=Math.floor ((Math.random() * 29));
        form.frets.selectedIndex=Math.floor  ((Math.random() * 16));
        form.openit.checked=1
        GUITAR();        }

        function GUITAR() { 
        var form =document.forms.dym;
        var D =form.notes.selectedIndex ;
        var Dtext=form.notes.options[D].text;
        var chrd =form.chords.selectedIndex;
        chtext =form.chords.options[chrd].text;
        if(chtext!=chordx){whatchord(chtext); }
        P=new Array("C ","C#","D ","D#","E ","F ","F#","G ","G#","A ","A#","B ","Ч ")
        if((D==3)||(D==10))
        { P=new Array("C ","Db","D ","Eb","E ","F ","Gb","G ","Ab","A ","Bb","B ","Ч ")}
        var Q =form.varyQ.selectedIndex;
        prst[pr]=6 * Q + 18 
        Q=Q+2 ;
        var op =form.openit.checked;
        V  =form.varyL.selectedIndex;
        
        RIGHT =form.hand.selectedIndex;
        if (RIGHT) {lefty="левша"} else {lefty=" "}
        var FR =form.frets.selectedIndex;
        var FRtext=form.frets.options[FR].text;
         G =0 ;
        var A =0 ;
        if(FR) {G=8 } ; 

        docitx();
         L=1; Y=1; Z=1;

        vboy(V);
        Y=Y + Q; K=0; W=D-Z; var H=0-Z; 
         N=new Array(0,0,0,0,0,0); 
        TCK =new Array(0,0,0,0,0,0,0,0,0,0,0,0);
        var E=0 ; 
        var X=0; 

for(j=0; j<41 ; j++ ){ A=0; 
 
        for(bbb=0; bbb<7; bbb++ ){ 
        if(N[bbb]==1){A=A+1}    
        if((A==6)||(j>39)){     
                for(i=0; i<12; i++){ 
                if(TCK[i]!=T[i]){
                 N=new Array(0,0,0,0,0,0); 
                 TCK=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
                V=V+1; X=X+1;
        
        if(V>23){V=0};  vboy(V); j=0; i=401; bbb=401;
        if( X>23){docitx() ; ii=25; N=new Array(1,1,1,1,1,1); j=401; } 
                        }}
                        }}//forbbb
                var S=0; W=(W+Z)%12; H=(H+Z)%12;
         while(S<Y){
                S=S+1; if(E>Q){E=0; K=(K+L)%6}
                if(E<0){E=Q; K=(K+L)%6}
                if(T[H]==0){
                 for(c=0; c<13 ; c++ ){
                 W=(W+Z)%12; H=(H+Z)%12; 
                        if(T[H]==1) {c=401}
                         } }
        if(N[K]==1){
   for(b=0; b<7; b++ ){ 
         K=(K+L)%6; if(N[K]==0){b=401}  //**j€шє°©®¶ЎЎЈ
                if(b==6){S=401}
                        }}
        
                var F=(MMM[K]+E+FR)%12 ;
        
        if((W==MMM[K])&&(N[K]==0)&&(op)){
        if(RIGHT==1){K=5-K}; for(d=0; d<Q+1; d++){ num[pr][d*6+K]="¶";}; num[pr][K]="ш";
        EG=16; docit(K,EG,W);
        if(RIGHT==1){K=5-K}; 
         N[K]=1 ; TCK[H]=1 ; S=401
                }

        if((W==F)&&(N[K]==0)){
        if(RIGHT==1){K=5-K}; 
                for(d=0; d<Q+1 ; d++ ){ num[pr][d*6+K]="|";
                if((d<6)&&(!G)){ num[pr][K]="_"} }; num[pr][E*6+K]="o";
                                
        EG=E + G; docit(K,EG,W);
        if(RIGHT==1){K=5-K}; 
        N[K]=1 ; TCK[H]=1 ; S=401
                } 
                        E=E+VM;
                        } }
 if(chtext=="maj"){chtext=" "}

chordnotes[pr]=document.forms.duece.result2.value=" "+E1+" "+AA+" "+DD+" "+GG+" "+BB+" "+E2
chordname[pr]=document.forms.prima.result.value=" "+Dtext+chtext+" "+"лад:"+FRtext

        
 if(noteFlag) {
 	showNotes()
 }

         }//**guitar
// End -->
