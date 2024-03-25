const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');


let load = 0;


let int = setInterval(blurring, 30);


function blurring() {
    load++

    if (load > 99) {
        clearInterval(int);
    }
    console.log(load);

    loadText.innerText = `${load}%`;
    loadText.style.opacity = mapRange(load, 0, 100, 1, 0);



    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;



}






function mapRange(value, minInput, maxInput, minOutput, maxOutput) {
    return minOutput + (maxOutput - minOutput) * ((value - minInput) / (maxInput - minInput));
}