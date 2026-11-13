// Это пример как создавать библиотеки
// class UIComponents {
//   constructor(...elements) {
//
//   }
// }

// class ModalWindow extends UIComponents {
//   static makeModal(
//     htmlContainerEl,
//     htmlBodyEl,
//     { contStyles, bodyStyles },
//     closeEvent,
//     closeFn,
//     HTMLContent,
//   ) {
//     const container = document.createElement(htmlContainerEl);
//     const modalBody = document.createElement(htmlBodyEl);

//     modalBody.innerHTML = HTMLContent;

//     container.append(modalBody);

//     container.classList.add(contStyles);
//     container.classList.add(bodyStyles);

//     container.addEventListener(closeEvent, closeFn);

//     modalBody.addEventListener(closeEvent, (event) => {
//       event.stopPropagation();
//     });
//   }

//   static makeNotification() {}
// }

// ModalWindow.makeModal(
//   "div",
//   "div",
//   {
//     constStyles: "modal",
//     bodyStyles: "modalBody",
//   },
//   "click",
//   (event) => {
//     event.target.classList.add("modalHidden");
//   },
//   "<h3>Hello</h3><p>fgfdiugsifkjdkvjksdfisdofidofidhjv</p>",
//   "<button>Close</button>",
// );

// const modal = new ModalWindow("div", "div", content, [
//   "closeIcon",
//   "esc",
//   "onblur",
// ]);

const openModalBtn = document.querySelector(".openModalBtn");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modalBody");
const closeModalBtn = document.querySelector(".closeBtn");
const acceptModalBtn = document.querySelector(".acceptBtn");

// Открыть модальное окно
openModalBtn.addEventListener("click", () => {
  modal.classList.remove("modalHidden");
});

// Функция закрытия (используеться везде где нужно закрыть модальное окно)
function closeModal() {
  modal.classList.add("modalHidden");
}
// modal.addEventListener("click", () => {
//   modal.classList.add("modalHidden");
// });

// 1. Закрыть крестиком
closeModalBtn.addEventListener("click", closeModal);

// 2. Закрыть по кнопке Accept
acceptModalBtn.addEventListener("click", closeModal);

// 3. Зфкрыть клавишей Esc
document.addEventListener("keydown", (event) => {
  // Есть ли у события свойство event.which и равно ли оно 27 (код клавиши Esc)
  // Есть ли у события свойство event.code и равно ли оно "Escape" (код клавиши Esc)
  // Есть ли у события свойство event.key и равно ли оно "Escape" (код клавиши Esc)
  if (event.key === "Escape") {
    closeModal();
  }
});

// 4. Закрыть по клику вне модального окна
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

modalBody.addEventListener("click", (event) => {
  event.stopPropagation();
});
