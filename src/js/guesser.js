console.log("siema bababbs");

const hint = document.querySelector(".guesser__hint");
const guessButton = document.querySelector(".guesser__button");
const input = document.querySelector(".guesser__input");
//buttons
const remove1 = document.querySelector(".remove1");
const remove10 = document.querySelector(".remove10");
const add1 = document.querySelector(".add1");
const add10 = document.querySelector(".add10");
const winScreen = document.querySelector(".win-screen");
const againButton = document.querySelector(".again");
const tries = document.querySelector(".tries");
const winNumber = document.querySelector(".win-number");
const winTries = document.querySelector(".win-tries");

let counter = 0;
let triesCounter = 0;

let init = () => {
    input.value = 0;
    counter = 0;
    triesCounter = 0;
    tries.innerHTML = `tries: ${triesCounter}`;
    hint.innerHTML = "Hint - It is between 1 and 100";
    number = Math.floor(Math.random()*101);
    console.log(number);
}

//input value

remove1.addEventListener('click', () => {
    counter -= 1;
    input.value = counter;
    limit();
})

remove10.addEventListener('click', () => {
    counter -= 10;
    input.value = counter;
    limit();
})

add1.addEventListener('click', () => {
    counter += 1;
    input.value = counter;
    limit();
})

add10.addEventListener('click', () => {
    counter += 10;
    input.value = counter;
    limit();
})

let limit = () => {
    if (input.value > 100) {
        counter = 100;
    } else if (input.value < 0) {
        counter = 0;
    }
    input.value = counter;
}

guessButton.addEventListener('click', () => {
    if (input.value < number) {
        hint.innerHTML = `Hint - Number is greater than ${input.value}`;
    }
    else if (input.value > number) {
        hint.innerHTML = `Hint - Number is less than ${input.value}`;
    }
    else if (input.value = number) {
        hint.innerHTML = `CONGRATULATIONS`;
        win();
    }
    triesCounter += 1;
    tries.innerHTML = `tries: ${triesCounter}`;
})



let win = () => {
    winScreen.style.display = "block";
    winScreen.classList.add("win-screen__display");
    winNumber.innerHTML = `You found the number: ${number}`;
    winTries.innerHTML = `tries: ${triesCounter}`;
}

againButton.addEventListener('click', () => {
    init();
    winScreen.style.display = "none";
    winScreen.classList.remove("win-screen__display");
})

init();