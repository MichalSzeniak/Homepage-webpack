const notesInput = document.querySelector('.notes__input');
const confirmButton = document.querySelector('.notes__confirm-button');
const notesContainer = document.querySelector('.notes__container');
const delateButton = document.querySelector(".delate-button");
const notesItem = document.querySelector(".notes__item");

let notesValue = '';

const init = () => {
  notesValue = '';
  notesInput.value = notesValue;
};

// if (notesInput.value !== "") {}
confirmButton.addEventListener('click', () => {
  if (notesInput.value !== "") {
  let item = `
        <div class="notes__item">
            <div class="content">${notesInput.value}</div>
            <div class="buttons">
            <button class="delate-button">⨉</button>
            <button class="done-button">✔</button>
            </div>
        </div>
        `;
  notesContainer.innerHTML += item;
  init();
}
});

delateButton.addEventListener('click', () => {
    // const module = this.closest(".notes__item").remove();
    notesItem.remove();
})

init();