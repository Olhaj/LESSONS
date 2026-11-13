// У вас есть изображение. Под изображением есть
// второе изображение с id "copied-image".
// При загрузке страницы проверьте, существует ли
// второе изображение с id "copied-image".
// Если второго изображения нет, создайте копию
// первого изображения и добавьте ее под оригиналом с
// id "copied-image".

// const originalImage = document.querySelector("#original-image");
// const copiedImage = document.querySelector("#copied-image");
// const body = document.querySelector("body");

// /*
//     0
//     null
//     undefined
//     ""
//     false
//     NaN
// */

// if (copiedImage) {
//   console.log("Copied image already exists");
// } else {
//   const newImage = originalImage.cloneNode();
//   newImage.setAttribute("id", "copied-image");
//   // newImage.id = "copied-image"; //этоеще один способ как можно обратиться
//   body.appendChild(newImage);
// }
//---------------------------------------------------

// У вас есть блок с несколькими дочерними элементами.
// При загрузке страницы проверьте условие (например,
// наличие определенного класса у дочернего элемента).
// Если условие выполняется, создайте новый элемент и
// замените дочерний элемент с этим классом новым элементом.

const container = document.querySelector("#container");
const targetElement = container.querySelector(".hello");

if (targetElement) {
  const newElement = document.createElement("p");
  newElement.textContent = "New Element";

  container.replaceChild(newElement, targetElement);
}
