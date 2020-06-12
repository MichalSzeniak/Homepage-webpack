import '../scss/main.scss';

/* place your code below */

console.log('HELLO 🚀');

const burger = document.querySelector(".burger-js");
const menuClose = document.querySelector(".menu__close-button");
const list = document.querySelector(".menu");
const body = document.querySelector(".body")
const checkbox = document.querySelector(".checkbox")


burger.addEventListener('click', ()=> {
    list.classList.add("menu__open");
    body.classList.add("body-hide-scroll")
});

menuClose.addEventListener('click', ()=> {
    list.classList.remove("menu__open");
    body.classList.remove("body-hide-scroll")
});


