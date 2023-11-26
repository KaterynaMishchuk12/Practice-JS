/**
 * ЗАВДАННЯ 8
 * Створи список справ.
 * Є інпут, в який вводиться назва задачі.
 * Після натискання на кнопку "Додати" завдання додається до списку #list.
 * Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
 * прибрати завдання зі списку.
 * Список із завданнями має бути доступним після перезавантаження сторінки.
 */
const refs = {
  form: document.querySelector("#task-form"),
  list: document.querySelector("#task-list"),
};

const array = JSON.parse(localStorage.getItem("task")) || [];
getTaskFromLocalStorage();
refs.form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const value = event.target.elements.taskName.value.trim();
  refs.list.innerHTML = "";
  addTask(value);
  createTaskToLocalStorage();
  getTaskFromLocalStorage();
}

function createTaskToLocalStorage() {
  localStorage.setItem("task", JSON.stringify(array));
}

function getTaskFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("task"));
  console.log(data);
  const markup = data
    .map((element) => {
      return `<li>${element.text}</li>`;
    })
    .join("");
  refs.list.insertAdjacentHTML("beforeend", markup);
}

function addTask(value) {
  const dataTask = {
    id: Math.random(),
    text: value,
  };
  array.push(dataTask);
}
