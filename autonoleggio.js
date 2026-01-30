const giorni = document.getElementById('giorni');
const prezzo = document.getElementById('prezzo');
const preventivobtn = document.getElementById('preventivo');
const codicesconto = document.getElementById('codice');
const verificato = document.getElementById('verificato');
const verificabtn = document.getElementById('verificatore');
let prezzototale = 0;
function calcolaprezzo() {
if (giorni.value > 6) {
prezzototale = giorni.value * 27;
} else if (giorni.value< 7){
prezzototale= giorni.value*30
}
prezzo.innerText = `Il prezzo totale è di euro `+ prezzototale;
if (prezzototale > 500) {
    prezzo.style.color = 'red';
} else {
    prezzo.style.color = 'green';
}
 
}
function verifica(){
    if (codicesconto.value == 'ESTATE2024') {
verificato.innerText= 'codice valido!';
verificato.style.backgroundColor='green';
codicesconto.style.border = '2px solid black';
}  else if (codicesconto.value == '') {
verificato.innerText= '';
    codicesconto.style.border = '5px solid red';  
}  else  {
 verificato.innerText= 'codice scaduto!';
verificato.style.backgroundColor='gray';
codicesconto.style.border = '2px solid black'; 
}
}
verificabtn.onclick = verifica;
preventivobtn.onclick = calcolaprezzo;