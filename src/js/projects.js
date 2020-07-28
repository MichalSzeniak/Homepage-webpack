// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
let test = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then((resp) => resp.json())
    .then((resp) => {
        const { icon_url, value } = resp;
        // console.log(`${icon_url} ${value}`);
  
        const chuckNorrisJokes = document.querySelector('.chuckNorrisJokes');
        // const JokesValue = `
        //   <img src="${icon_url}" alt="" class="NorrisImg">
        //   `;
        // chuckNorrisJokes.innerHTML += JokesValue;
        const joke = document.querySelector('.jokens');
        joke.innerHTML = value;
    })
    .catch((error) => {
      console.log(error);
    });
}


  const NorrisIcon = document.querySelector(".norrisIcon");
  NorrisIcon.addEventListener('click', () => {
      test();
  })