const textarea = document.querySelector('.notebook__textarea');
const save = document.querySelector('.notebook__button--save');
const load = document.querySelector('.notebook__button--load');

let entry = localStorage.getItem('entry');
let  container = '';

if (entry) {
    container = entry;
}

save.addEventListener('click', ()=> {
    container = textarea.value;
    localStorage.setItem('entry', container)
})

load.addEventListener('click', ()=> {
    textarea.value = container;
})