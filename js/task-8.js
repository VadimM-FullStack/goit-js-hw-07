/* Напиши скрипт создания и очистки коллекции элементов.
Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
При нажатии на кнопку Очистить, коллекция элементов очищается.
Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
Каждый созданный div:
    Имеет случайный rgb цвет фона
    Размеры самого первого div - 30px на 30px
    Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes. */

// НЕ ДЛЯ ПРОВЕРКИ !!! ///

const boxesRef = document.querySelector('#controls');
const inputRef = document.querySelector('#controls > input');

const renderButtonRef = document.querySelector(
  '#controls button[data-action = "render"]'
);
const destroyButtonRef = document.querySelector(
  '#controls button[data-action = "destroy"]'
);

function createBoxes(amount) {
  document.createElement('div');
  parentElem.insertBefore(elem, nextSibling);
}

function destroyBoxes() {
  inputRef.value = '';
  boxesRef.removeChild('div');
}

inputRef.addEventListener('input', (event) => console.log(event.target.value));

destroyButtonRef.addEventListener('click', destroyBoxes);

console.log(`!!! Задача №8 не готова для сдачи !!!`);
