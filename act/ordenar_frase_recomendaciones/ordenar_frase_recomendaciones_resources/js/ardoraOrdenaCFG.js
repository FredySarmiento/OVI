var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=11;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="b3JkZW5hcl9mcmFzZV9yZWNvbWVuZGFjaW9uZXM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["SW5jbHVpciB1bmEgbWV6Y2xhIGRlIGNhcmFjdGVyZXMgbWF5+nNjdWxhLCBtaW76c2N1bGEgeSBudW3pcmljb3M","TGFzIGNvbnRyYXNl8WFzIGRlYmVuIGNhbWJpYXJzZSBwZXJp82RpY2FtZW50ZQ","TGFzIGNvbnRyYXNl8WFzIGxhcmdhcyBzb24gbWVqb3Jlcw","Tm8gdXRpbGl6YXIgdW4gY29uanVudG8gZGUgY2FyYWN0ZXJlcyBjb25zZWN1dGl2b3MgZW4gZWwgdGVjbGFkbw",""];imaW=["","","","",""];queW=["","","","",""]; c=[65,46,34,64,0];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="400";indexG=0;profG=0;dirMedia="ordenar_frase_recomendaciones_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];
