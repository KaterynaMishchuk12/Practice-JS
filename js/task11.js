/**
 *? Напиши функцію конструктор Storage який створює об'єкти
 *? Для управління складом товарів.
 *? При виклику отримуватиме один агрумент - початковий масив товарів,
 *? і записувати їх у властивість items.
 *? Додай методи класу:
 *? getItems() - повертайте масив товарів
 *? addItems(item) - отримує новий товар та додає його до поточних
 *? removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
 */
function Storage(param) {
  this.items = param;
  //   this.getItems = () => this.items;
}
Storage.prototype.getItem = function () {
  return this.items;
};
Storage.prototype.addItem = function (item) {
  this.items.push(item);
  return this.items;
};

Storage.prototype.removeItem = function (item) {
  const index = this.items.indexOf(item);
  if (index === -1) return "Такий елемент не знайдено";

  this.items.splice(index, 1);
  return this.items;
};

console.dir(Storage);
const storage = new Storage(["apple", "banana", "mango"]);
console.log(storage.addItem("kiwi"));
console.log(storage.removeItem("banana"));
console.log(storage.removeItem("peach"));
