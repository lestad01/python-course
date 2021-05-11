const deg = 6;
const hour = document.querySelector('#hr');
const sec = document.querySelector('#sc');
const mn = document.querySelector('#mn');


function clocks() {
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

//стрелка часа + считанные минуты (mm/12)deg
hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;

mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
}
setInterval(clocks, 1000);