// const myTitle = document.querySelector(".title");
// console.log(myTitle);
// myTitle.textContent = "Hello word!"; //таким образом мы можем поменять текст в html
//textContent — это текст внутри HTML-элемента. textContent работает только с текстом внутри элемента.
// const myContainer = document.querySelector(".cube");
// myContainer.innerHTML = "<p>this is html code</p>";
// он работает как и html
//innerHTML — это содержимое HTML-элемента внутри него.
//То есть innerHTML — это внутренний HTML-код элемента.
// console.log(myContainer);

// const myInput = document.querySelector("#myInput");
// const sendBtn = document.querySelector(".sendBtn");

// myInput.value = "+98760";
//value — это значение элемента. Здесь value — атрибут, а "+98760" — его значение.
//То есть value — это то, что находится внутри поля ввода.
// myInput.disabled = true;

// sendBtn.textContent = "SEND|!|!!|";
// sendBtn.disabled = true; //disabled применяется главным образом к элементам формы — button, input, select, textarea и другим. Отключённое поле обычно нельзя изменить или отправить вместе с данными формы.
// sendBtn.setAttribute("id", "sendBtn");
//setAttribute() — это команда, которая добавляет или изменяет атрибут HTML-элемента. setAttribute означает: «установить атрибут».

// Создание элемента
// const myContainer = document.createElement("div");
// const myText = document.querySelector("p");

// // обращение к элементу
// const body = document.querySelector("body");

// //  обавляем свойство
// myContainer.setAttribute("class", "redCube");

// // Вывод созданного элемента на страницу HTML
// body.append(myContainer);
// body.append(myText);

//1.Создайте кнопку с текстом "Нажми меня" и добавьте её на вашу веб-страницу внутри элемента с идентификатором "myDiv".
// const body = document.querySelector("body");
// const container = document.createElement("div");
// const myBtn = document.createElement("button");

// container.append(myBtn);
// body.append(container);

// myBtn.textContent = "Нажми меня";

// document.getElementById("myDiv").append(myBtn);

// //2. Создайте список (например, ul)
// // и добавьте в него три элемента списка (li)
// // с текстом "Пункт 1", "Пункт 2", "Пункт 3".
// // Затем добавьте этот список на вашу веб-страницу
// // (Делаем с преподавателем).
// // Можно попробовать использовать циклы.

// const list = document.createElement("ul");
// const item1 = document.createElement("li");
// const item2 = document.createElement("li");
// const item3 = document.createElement("li");

// container.append(list);
// list.appendChild(item1, item2, item3);

// item1.textContent = "Пункт 1";
// item2.textContent = "Пункт 2";
// item3.textContent = "Пункт 3";

// const body = document.querySelector("body");
// const myUl = document.createElement("ul");
// const generateList = (totalElements) => {
//   const list = document.createElement("ul");
//   body.append(list);
//   for (let i = 1; i <= totalElements; i++) {
//     const listElement = document.createElement("li");
//     list.appendChild(listElement);
//     listElement.textContent = "Пункт " + i;
//   }
// };
// generateList(9);
// // generateList(12)

// //3. Создайте новый элемент изображения (img)
// // и установите ему атрибут src с ссылкой на
// // изображение. Далее добавьте это изображение на
// // вашу веб-страницу. Изображение может быть любым.
// const myImg = document.createElement("img");

// container.appendChild(myImg);
// myImg.setAttribute(
//   "src",
//   "https://www.magnific.com/ru/free-photos-vectors/img",
// );
// myImg.setAttribute("alt", "img");

//Задание 1

//Создайте HTML-страницу с элементом <div>.
// Используя innerHTML, замените внутренний текст
// этого элемента на "Это <em>курсивный</em> текст".

// const body = document.querySelector("body");
// const div = document.createElement("div");

// body.appendChild(div);

// div.innerHTML = "Это <em>курсивный</em> текст";

const div = document.createElement("div");
div.innerHTML = "Это <em>курсивный</em> текст";
document.body.appendChild(div);
