// 1. Используя fetch для выполнения GET запроса к
// JSONPlaceholder
// (URL: https://jsonplaceholder.typicode.com/users).
// Выведите список пользователей в консоль.

// function getUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => {
//       console.log(err);
//     });
// }

// getUsers();

// такой вариан лучше всего использовать
// function getUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .catch((err) => console.log(err));
// }

// getUsers().then((data) => console.log(data));
// =================================================
// 2. Используя fetch для выполнения POST запроса к
// JSONPlaceholder
// (URL: https://jsonplaceholder.typicode.com/users).
// Создайте объект пользователя с полями name,
// username, и email. Отправьте POST запрос с
// созданным объектом пользователя. Выведите ответ
// сервера в консоль.

// const BASE_URL = "https://jsonplaceholder.typicode.com";

// function registerUser(userData) {
//   return fetch(`${BASE_URL}/users`, {
//     method: "POST",
//     body: JSON.stringify(userData),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   })
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// }

// const newUser = {
//   name: "Alice Joe",
//   username: "render",
//   email: "alice@gmail.com",
// };

// registerUser(newUser).then((user) => console.log(user));
// ============================================================

// 3. Используя fetch для выполнения GET запроса к JSONPlaceholder
// (URL: https://jsonplaceholder.typicode.com/posts).
// Необходимо функцию рендера постов. Отобразить все посты.

// const BASE_URL = "https://jsonplaceholder.typicode.com";
// const postsContainer = document.querySelector(".posts");

// function getPosts() {
//   return fetch(`${BASE_URL}/posts`)
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// }

// function renderPosts(posts) {
//   postsContainer.innerHTML = posts
//     .map((post) => {
//       return `
//         <article>
//           <h2>${post.id}. ${post.title}</h2>
//           <p>${post.body}</p>
//         </article>
//         <hr>
//       `;
//     })
//     .join("");
// }

// getPosts().then((data) => {
//   console.log(data);
//   renderPosts(data);
// });
// ==========================================================

// 4. Создать форму с полями Имя, Логин, Email, которая будет
// отправлять запрос на создание пользователя. Используем
// POST метод.

const userForm = document.querySelector("#userForm");
const result = document.querySelector("#result");

const BASE_URL = "https://jsonplaceholder.typicode.com";

function createUser(userData) {
  return fetch(`${BASE_URL}/users`, {
    // Указываем метод создания данных
    method: "POST",
    // Указываем формат отправляемых данных
    headers: {
      "Content-Type": "application/json",
    },
    // Преобразуем объект в JSON-строку
    body: JSON.stringify(userData),
  }).then((response) => {
    // Проверяем, успешно ли выполнен запрос
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    // Возвращаем ответ сервера в виде объекта
    return response.json();
  });
}

// Обрабатываем отправку формы.
userForm.addEventListener("submit", (event) => {
  // Отменяем перезагрузку страницы
  event.preventDefault();

  // Собираем данные из полей формы и создаём объект пользователя.
  const userData = {
    name: document.querySelector("#name").value.trim(),
    username: document.querySelector("#username").value.trim(),
    email: document.querySelector("#email").value.trim(),
  };

  // Отправляем данные на сервер.
  createUser(userData)
    .then((createdUser) => {
      // Выводим ответ сервера в консоль
      console.log("Созданный пользователь:", createdUser);

      // Очищаем поля формы
      userForm.reset();
    })
    .catch((error) => {
      console.error(error);
    });
});
