const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// Initialize the big cup
updateBigCup();

// Add event listeners to all small cups
smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index));
});

// Function to highlight small cups
function highlightCups(idx) {
    // Adjust index if clicking on a filled cup that is not followed by another filled cup
    if (smallCups[idx].classList.contains('full') &&
        (smallCups[idx].nextElementSibling === null ||
            !smallCups[idx].nextElementSibling.classList.contains('full'))) {
        idx--;
    }

    // Highlight the appropriate number of cups
    smallCups.forEach((cup, index) => {
        if (index <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });

    // Update the big cup's appearance
    updateBigCup();
}

// Function to update the big cup based on the filled small cups
function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    // Update the percentage of the big cup
    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    // Update the remaining liters
    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)} L`; // Corrected from 'full' to 'fullCups'
    }
}