const giorni = document.getElementById('giorni');
const prezzo = document.getElementById('prezzo');
const preventivoBtn = document.getElementById('preventivo');
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
preventivoBtn.onclick = calcolaprezzo;