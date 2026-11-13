// 1. У вас есть HTML-страница с кнопкой и
// блоком текста. Напишите JavaScript код,
// который будет выполнять следующие действия:

// При клике на кнопку, добавьте класс "highlight"
// к блоку текста, если у него его еще нет.
// Если класс уже есть, удалите его.
// Если у блока текста есть класс "highlight",
// измените цвет фона на светло-желтый,
// а если класс отсутствует, верните исходный цвет фона.

// const textBlock = document.querySelector(".textBlock");
// const changeStyleBtn = document.querySelector(".changeStyleBtn");

// changeStyleBtn.addEventListener("click", () => {
//   textBlock.classList.toggle("highlight");
// });

// Задание 1
// У вас есть список элементов (<li>). При загрузке страницы проверьте условие (например, длина списка).
// Если условие выполняется, создайте новый элемент и замените последний элемент списка новым.

const list = document.querySelector("ul");
const listItems = list.querySelectorAll("li");

for (let i = 0; i < listItems.length; i++) {
  if (listItems.length > 3 && i === listItems.length - 1) {
    const newItem = document.createElement("li");
    newItem.textContent = "Новый последний элемент";

    list.replaceChild(newItem, listItems[i]);
  }
}
