//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=240; timeIni=240; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
var score=0; scoreMax=7; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>El software <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> no es siempre efectivo 100%, pero es mejor que no tener ninguna <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly> en absoluto. Es muy posible que un usuario que no haya instalado un antivirus en su ordenador piense que no tiene ningún <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly> aunque probablemente su equipo esté infectado. </p><p>  </p><p> Con el fin de lograr la máxima protección, es necesario instalar el s<input type="text" name="item4" id="item4" class="ardoraDropInput" readonly> <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly> tanto en equipos individuales, como en todos los <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> de la red. Esa es la única manera de detectar <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly> en todos los puntos de entrada.</p>'];
var answers=["protección","virus","oftware","servidores","antivirus","virus","antivirus"];
var a=["Mg","Mw","NA","Ng","NQ","Nw","MQ"];
var itemCorr=["0","0","0","0","0","0","0"];
var itemHelp=["","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="Y29tcGxldGFyX3RleHRvX3JlY29tZW5kYWNpb24"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var fHelp="Verdana, Geneva, sans-serif";
