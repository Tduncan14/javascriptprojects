const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
// const allSeats = [...seats];

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;


populateUI();




// update total and count

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');


    const selectedSeatsCount = selectedSeats.length;


    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;



    // cop 

    const seatsIndex = [...selectedSeats].map((seat, index) => {
        return [...seats].indexOf(seat)
    })


    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));


}


// POPULATE UI
// Get Data from lOcal storage and populate UI


function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))


    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex
    }
}








// movieSelectEvent

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount()
})


// seat click envent
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {

        e.target.classList.toggle('selected');

        updateSelectedCount()
    }
})



// Initial count and total set

updateSelectedCount();
4