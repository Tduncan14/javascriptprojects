const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkElements);

checkElements(); // Call the function initially to check for elements in viewport

function checkElements() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}
