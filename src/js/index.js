import '../scss/main.scss';
import moment from 'moment';

/* place your code below */

console.log('HELLO 🚀');

const burger = document.querySelector(".burger-js");
const menuClose = document.querySelector(".menu__close-button");
const list = document.querySelector(".menu");
const body = document.querySelector(".body");
const checkbox = document.querySelector(".checkbox");
const check = document.querySelector(".check");
const navigation = document.querySelector(".navigation");
const logo = document.querySelector(".logo__img");
const time = document.querySelector(".time");

time.innerHTML = moment().format("MMM Do YY"); 

burger.addEventListener('click', ()=> {
    list.classList.add("menu__open");
    body.classList.add("body-hide-scroll");
});

menuClose.addEventListener('click', ()=> {
    list.classList.remove("menu__open");
    body.classList.remove("body-hide-scroll");
});



checkbox.addEventListener('click', ()=> {
    if (checkbox.checked == true) {
      check.classList.add("checked");
      document.documentElement.style.setProperty('--text-color','white');
      document.documentElement.style.setProperty('--background-color','rgb(24, 24, 24)');
      document.documentElement.style.setProperty('--background-menu', 'rgb(51, 51, 51)');
      document.documentElement.style.setProperty('--header-color', 'rgb(51, 51, 51)');
      document.documentElement.style.setProperty('--textarea-color', 'rgb(51, 51, 51)');
    }

    else {
      check.classList.remove("checked");
      document.documentElement.style.setProperty('--text-color','rgb(24, 24, 24)');
      document.documentElement.style.setProperty('--background-color','white');
      document.documentElement.style.setProperty('--background-menu', '#FFE45E');
      document.documentElement.style.setProperty('--header-color', '#09A5FC');
      document.documentElement.style.setProperty('--textarea-color', '#c7e4ff5d');
    }
})

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      navigation.classList.add("navigation--test")
      logo.classList.add("logo__img--test")
    }
    else if (window.pageYOffset < 50) {
      navigation.classList.remove("navigation--test")
      logo.classList.remove("logo__img--test")
    }
  })

  
// const apiUrl = 'http://api.punkapi.com/v2/beers/';

// const getBeer = async (id) => {
//   try {
//     const response = await fetch(`${apiUrl}${id}`);
//     const data = await response.json();
//     return data;

//   } catch (err) {
//     console.log(err);
//   }
// };

// let piwko = () => {
//   fetch('http://api.punkapi.com/v2/beers/')
//   .then((resp) => resp.json())
//   .then((resp) => {
//       for (let sprawdzam of resp) {
//         const {id, description} = sprawdzam;
//         console.log(description)
//     }
//     console.log(resp);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// }

// piwko();