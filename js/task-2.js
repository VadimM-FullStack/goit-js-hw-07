/* Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
после чего вставит все li за одну операцию в список ul.ingredients.
Для создания DOM - узлов используй document.createElement(). */

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const newLiRefs = ingredients.map((ingredient) => {
  const newLi = document.createElement('li');
  newLi.textContent = ingredient;
  return newLi;
});
document.querySelector('#ingredients').append(...newLiRefs);
