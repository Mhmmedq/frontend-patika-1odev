let myname=prompt("lütfen isminizi giriniz");
let name=document.querySelector("#myName");
name.innerHTML=myname;

function showTime(){
var d = new Date();
var s = d.getSeconds();
var m = d.getMinutes();
if(m<10){
    m=`${"0"+m}`
}
if(s<10){
    s=`${"0"+m}`
}

var h = d.getHours();
let weekday = ['PAZAR', 'PAZARTESI', 'SALI', 'ÇARŞAMPA', 'PERŞEMPE', 'CUMA', 'CUMARTESİ'][new Date().getDay()]
let clock=document.querySelector("#myClock")
clock.innerHTML=`${h + ":" + m + ":" + s+"       "+weekday}`;
setTimeout(showTime, 1000);
}
showTime();
