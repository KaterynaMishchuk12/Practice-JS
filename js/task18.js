/**
 * ЗАВДАННЯ 1
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

function greet() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("hello world"), 2000);
    reject("goodbye");
  });
}

greet()
  .then((data) => console.log(data))
  .catch((fail) => showError(fail));

function showError(err) {
  console.log(err);
}
