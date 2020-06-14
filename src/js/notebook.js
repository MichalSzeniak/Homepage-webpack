const textarea = document.querySelector(".notebook__textarea")
const save = document.querySelector(".notebook__button--save")
const load = document.querySelector(".notebook__button--load")

container = '';

save.addEventListener('click', ()=> {
    textarea.value == container;
    console.log(textarea.value)
})