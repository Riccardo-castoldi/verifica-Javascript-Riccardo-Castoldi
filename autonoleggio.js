const giorni = document.getElementById('giorni');
const prezzo = document.getElementById('prezzo');
const preventivoBtn = document.getElementById('preventivo');
let prezzototale = 0;
function calcolaprezzo() {
if (giorni.value > 6) {
prezzototale = giorni.value * 27;
}
}
preventivoBtn.onclick = calcolaprezzo;