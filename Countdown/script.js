
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const newYear = document.getElementById('toYear');

const countdown = document.getElementById('countdown');



const currentYear = new Date().getFullYear();



const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);


newYear.innerText = `${new Date().getFullYear() + 1}`



function updateCountdown() {

    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;


    console.log(d);
    console.log(h)
    console.log(m);
    console.log(s);


    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;



}




setInterval(updateCountdown, 1000)
