/* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
   Создай переменную counterValue в которой будет хранится текущее значение счетчика.
   Создай функции increment и decrement для увеличения и уменьшения значения счетчика
   Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса  */

const spanRef = document.querySelector('#value');
let counterValue = Number(spanRef.textContent);

const decrement = () => (counterValue -= 1);
const increment = () => (counterValue += 1);

const decrementButton = document.querySelector(
  '#counter button[data-action = "decrement"]'
);
const incrementButton = document.querySelector(
  '#counter button[data-action = "increment"]'
);

decrementButton.addEventListener('click', () => {
  decrement();
  spanRef.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
  increment();
  spanRef.textContent = counterValue;
});
