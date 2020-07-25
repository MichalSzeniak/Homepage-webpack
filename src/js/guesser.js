console.log("siema bababbs");

const hint = document.querySelector(".guesser__hint");
const guessButton = document.querySelector(".button__guess");

let counter = 0;

let init = () => {
    hint.innerHTML = "Hint - It is between 1 and 100";
    number = Math.floor(Math.random()*101);
    console.log(number);
}

init();