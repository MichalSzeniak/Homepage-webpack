import '../scss/main.scss';

/* place your code below */

console.log('HELLO 🚀');

const burger = document.querySelector(".burger-js");
const list = document.querySelector(".navigation__list");
const circle = document.querySelector(".circle");
const close = document.querySelector(".button__close");


burger.addEventListener('click', ()=> {
    list.classList.toggle("navigation__open");
    circle.classList.toggle("circle__open");
    close.classList.toggle("button__close--open");
});