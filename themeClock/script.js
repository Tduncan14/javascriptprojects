const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const date = new Date().getDate()
let dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const months = ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", 'Dec'];










toggleEl.addEventListener('click', (e) => {
    const html = document.querySelector('html');

    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = "Dark mode"
    }
    else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }

})



function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getHours()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'pm' : 'am';


    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;

    minuteEl.style.transform = `translate(-50%,-100%) rotate(${scale(minutes, 0, 11, 59, 360)}deg)`;

    hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;



    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`



    dateEl = `${days[day]},${months[month]}  <span class="circle>${date} </span>`



}



const scale = (x, in_min, in_max, out_min, out_max) => {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


setInterval(setTime, 1000)






setTime()

