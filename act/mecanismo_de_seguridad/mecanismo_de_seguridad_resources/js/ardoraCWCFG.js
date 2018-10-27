//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="bWVjYW5pc21vX2RlX3NlZ3VyaWRhZA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Qw","SQ","Rg","Ug","QQ","RA","Tw","","","","","","","SQ"],["Tw","","","","","","","","","","","","","Tg"],["Tg","Tw","VA","QQ","Ug","SQ","Wg","QQ","Qw","SQ","Tw","Tg","","VA"],["VA","","","","","","","","","","","","","RQ"],["Ug","","","","","","","","","","","","","Rw"],["Tw","","","","","","","","","","","","","Ug"],["TA","","","Uw","","","","","","","","","","SQ"],["RA","RQ","VA","RQ","Qw","Qw","SQ","Tw","Tg","","","","","RA"],["RQ","","","Rw","","","","","","","","","","QQ"],["QQ","","","VQ","","","","","","","","","","RA"],["Qw","","UA","Ug","RQ","Vg","RQ","Tg","Qw","SQ","Tw","Tg","",""],["Qw","","Rg","SQ","Ug","TQ","QQ","RA","SQ","Rw","SQ","VA","QQ","TA"],["RQ","","","RA","","","","","","","","","",""],["Uw","","","QQ","","","","","","","","","",""],["Tw","","","RA","","","","","","","","","",""]];
var x1=[1,1,1,4,3,1,3,14,3,5,6,7,8];
var y1=[1,1,3,7,11,8,12,1,11,11,11,11,11];
var x2=[7,1,12,4,12,9,14,14,3,5,6,7,8];
var y2=[1,15,3,15,11,8,12,10,12,12,12,12,12];
var imaCW=["","","","","","","","","","","","",""];
var audioCW=["","","","","","","","","","","","",""];
var defCW=["es un mecanismo destinado a proteger el contenido de un mensaje mediante el uso de algoritmos matemáticos que transforman los datos originales. ","abarca una variedad de mecanismos que establecen la política de derechos de acceso a los recursos","es un mecanismo que utiliza terceras partes de confianza para garantizar ciertas propiedades en un intercambio de datos","es un mecanismo que permite aceptar o bloquear datos procedentes o destinados a un ordenador concreto ubicado fuera de la red local.","Identificando con anterioridad posibles problemas de seguridad que podrían ocurrir"," Realizando chequeos en línea de los ataques a la seguridad.","es un mecanismo que utiliza herramientas criptográficas para autentificar el origen, garantizar la integridad de los datos y ofrecer protección contra falsificaciones","de datos abarca una variedad de mecanismos utilizados para asegurar la integridad de un mensaje o de un flujo de datos","","","","",""];
var colNum=14;
var rowNum=15;
