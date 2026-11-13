// Как можно переиспользовать функцию

const netureImages = [
  "https://i.pinimg.com/736x/7b/87/7c/7b877c71092a5e0c124ae58a00f742c7.jpg",
  "https://i.pinimg.com/736x/0c/99/0a/0c990ac1ff7cab36cef11c1c3912fdb1.jpg",
  "https://i.pinimg.com/736x/0c/c0/88/0cc0883f9e5ddba5f9534dd59a69fdff.jpg",
  "https://i.pinimg.com/736x/c4/36/fc/c436fc43756c1478035c012dd99ae460.jpg",
  "https://i.pinimg.com/736x/70/29/05/702905c0b84c27b60c6fe7936f91eebb.jpg",
  "https://i.pinimg.com/736x/84/3b/bb/843bbbf640d026d65cd40eb31f1332d1.jpg",
  "https://i.pinimg.com/736x/af/c7/27/afc7272d3ce0d5cfe86631f7c9f75697.jpg",
];

const newImages = [
  "https://i.pinimg.com/1200x/61/6b/44/616b44502a9151b954c79e3135b5241a.jpg",
  "https://i.pinimg.com/736x/17/4a/2a/174a2acca872f776ea53ec5718339ff9.jpg",
  "https://i.pinimg.com/736x/c9/a1/08/c9a1082dea29c38d5e3b04084c10bb17.jpg",
  "https://i.pinimg.com/736x/8f/aa/8f/8faa8f919617bbd5d1cb13cd946fd332.jpg",
];

class UIComponents {
  static generateSlider(images, styles, triggersContent) {
    const root = document.querySelector("#root");

    let sliderIndex = 0;

    const frame = document.createElement("div");
    const cards = document.createElement("div");
    const triggers = document.createElement("div");
    const container = document.createElement("div");
    const leftBtn = document.createElement("button");
    const rightBtn = document.createElement("button");

    leftBtn.textContent = triggersContent.left;
    rightBtn.textContent = triggersContent.right;

    triggers.append(leftBtn, rightBtn);
    frame.append(cards, triggers, container);
    root.append(frame);

    frame.classList.add("frame");
    cards.classList.add("cards");
    triggers.classList.add("triggers");
    container.classList.add("rounds");

    frame.style.borderRadius = styles.borderRadius;

    images.forEach((image, index) => {
      const card = document.createElement("div");
      const button = document.createElement("button");

      cards.append(card);
      container.append(button);

      card.classList.add("card");

      card.style.backgroundImage = `url("${image}")`;

      // первая радиокнопка с классом active
      if (index === 0) {
        button.classList.add("active");
      }

      // событие нажатия на кнопку
      button.addEventListener("click", () => {
        sliderIndex = index;
        cards.style.left = `${-500 * sliderIndex}px`;

        images.forEach((_, i) => {
          container.children[i].classList.remove("active");
        });

        button.classList.add("active");
      });
    });

    // кнопка листает влево
    leftBtn.addEventListener("click", () => {
      if (sliderIndex > 0) {
        sliderIndex--;
        container.children[sliderIndex].click();
      }
    });

    // кнопка листает вправо
    rightBtn.addEventListener("click", () => {
      if (sliderIndex < images.length - 1) {
        sliderIndex++;
        container.children[sliderIndex].click();
      }
    });
  }
}

UIComponents.generateSlider(
  netureImages,
  { borderRadius: "12px" },
  { left: "prev", right: "next" },
);
UIComponents.generateSlider(
  newImages,
  { borderRadius: "50%" },
  { left: "<", right: ">" },
);

// const root = document.querySelector("#root");

// let sliderIndex = 0;

// const images = [
//   "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
//   "https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJAzu5aTrvg0yPTkww7slPkkHuIjxHKsxRnF6YOnvsQ&s=10",
//   "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",
// ];

// const frame = document.createElement("div");
// const cards = document.createElement("div");
// const triggers = document.createElement("div");

// const leftBtn = document.createElement("button");
// const rightBtn = document.createElement("button");

// leftBtn.textContent = "<";
// rightBtn.textContent = ">";

// triggers.append(leftBtn, rightBtn);
// frame.append(cards, triggers);
// root.append(frame);

// frame.classList.add("frame");
// cards.classList.add("cards");
// triggers.classList.add("triggers");

// images.forEach((image) => {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   card.style.backgroundImage = `url("${image}")`;
//   cards.append(card);
// });

// leftBtn.addEventListener("click", () => {
//   if (sliderIndex > 0) {
//     sliderIndex--;
//     cards.style.left = `${-500 * sliderIndex}px`;
//   }
// });

// rightBtn.addEventListener("click", () => {
//   if (sliderIndex < images.length - 1) {
//     sliderIndex++;
//     cards.style.left = `${-500 * sliderIndex}px`;
//   }
// });

// function createRounds() {
//   const container = document.createElement("div");
//   container.classList.add("rounds");
//   frame.append(container);

//   for (let i = 0; i < images.length; i++) {
//     const button = document.createElement("button");
//     container.append(button);

//     button.addEventListener("click", () => {
//       sliderIndex = i;
//       cards.style.left = `${-500 * sliderIndex}px`;

//       const allButtons = button.parentElement.children;

//       for (let j = 0; j < allButtons.length; j++) {
//         allButtons[j].classList.remove("active");
//       }

//       button.classList.add("active");
//     });
//   }
// }

// createRounds();
