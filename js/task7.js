///**
// *? Зробіть знижку 20% на всі фрукти у масиві
// *? Надайте ід для кожного продукту
// */

const fruits = [
  { name: "apple", price: 200 },
  { name: "orange", price: 300 },
  { name: "grapes", price: 750 },
];

const newFruits = fruits.map((item) => {
  const id = Date.now();
  return { ...item, id, price: item.price * 0.8 };
});
console.log(newFruits);
