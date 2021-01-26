/* Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным. */

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', (event) => {
  if (
    Number(inputRef.getAttribute('data-length')) === event.target.value.length
  ) {
    if (inputRef.classList.contains('invalid')) {
      inputRef.classList.replace('invalid', 'valid');
    }
    inputRef.classList.add('valid');
  } else {
    if (inputRef.classList.contains('valid')) {
      inputRef.classList.replace('valid', 'invalid');
    }
    inputRef.classList.add('invalid');
  }
});
