const time = new Date();

const date = document.getElementById('dates');
const dayEl = document.querySelector('.days'); // Corrected the class selector

// Get the last day of the last month
const lastDayLastMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();

// Get the last day of the current month
const lastDayCurrentMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();

// Get the first day of the current month (adjusting for Sunday = 0)
const firstDay = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();

console.log(firstDay);

// Console log for debugging
console.log(lastDayLastMonth, 'last day of last month', lastDayCurrentMonth, 'last day of current month');

let monthdays = "";

// Adding empty divs for days of the previous month
for (let i = 0; i < firstDay; i++) {
    monthdays += `<div class="empty"></div>`;
}

// Adding days of the current month
for (let i = 1; i <= lastDayCurrentMonth; i++) {
    if (i === time.getDate()) {
        monthdays += `<div class="today">${i} </div>`;
    } else {
        monthdays += `<div>${i}</div>`;
    }
}

dayEl.innerHTML = monthdays;

function Months() {
    const dateMe = time.getDate();
    const day = time.getDay();
    const year = time.getFullYear();
    const month = time.getMonth();

    console.log(day);
    console.log(year);
    console.log(month);

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const dayNames = [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
    ];

    const hOne = document.createElement('h1');
    const p = document.createElement('p');

    // Adding the month
    hOne.innerHTML = monthNames[month];

    p.innerHTML = `<span>${dayNames[day]}</span> ${monthNames[month]} ${dateMe} <span>${year}</span>`;

    // Clearing existing children to avoid duplicates
    date.innerHTML = "";
    date.appendChild(hOne);
    date.appendChild(p);
}

Months();

function updateDate() {
    // Function implementation or remove if not needed
}
