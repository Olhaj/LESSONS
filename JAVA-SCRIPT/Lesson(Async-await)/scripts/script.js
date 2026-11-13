// function request() {
//     return fetch("/backend") // API
//         .then((response) => {
//         return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// async function request() {
//   const response = await fetch("/url");
//   const data = await response.json();
//   console.log(data);
// }

// 1. Сделайте 3 запроса на сервер https://jsonplaceholder.typicode.com/
// с использованием синтаксиса async/await.
// const BASE_URL = "https://jsonplaceholder.typicode.com";

// async function getPosts() {
//   const postsResponse = await fetch(`${BASE_URL}/posts`);
//   const usersResponse = await fetch(`${BASE_URL}/users`);
//   const todosResponse = await fetch(`${BASE_URL}/todos`);

//   const post = await postsResponse.json();
//   const user = await usersResponse.json();
//   const todo = await todosResponse.json();

//   console.log(post);
//   console.log(user);
//   console.log(todo);
// }

//2. Перепишите данную функцию на async/await:
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// async function getTodo() {
//   const response = await fetch(`${BASE_URL}/todos/1`);
//   const data = await response.json();
//   console.log(data);
// }

// getPosts();
// ======================================================
// 3. Переделать на async/await

// function createPost() {
//   return fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF/8",
//     },
//   });
// }

// createPost()
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// async function createPost() {
//   const response = await fetch(`${BASE_URL}/posts`, {
//     method: "POST",
//     body: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF/8",
//     },
//   });
//   const data = await response.json();
//   return data;
// }
// ==========================================================
// Задача 1
// Создать функцию, которая будет отправлять несколько
// асинхронных запросов на сервер параллельно,
// используя Promise.all. Дождаться выполнения всех
// запросов и вернуть массив результатов в том порядке,
// в котором они были отправлены. Используем новый
// синтаксис(async/await) в этой во всех последующих задачах.

// const urls = [
//   "https://jsonplaceholder.typicode.com/todos",
//   "https://jsonplaceholder.typicode.com/comments",
//   "https://jsonplaceholder.typicode.com/users",
// ];

// const promises = [
//   fetch("https://jsonplaceholder.typicode.com/todos"),
//   fetch("https://jsonplaceholder.typicode.com/comments"),
//   fetch("https://jsonplaceholder.typicode.com/users"),
// ];

// async function fetchMultipleDataParallerl(listOfUrls) {
//   const promises = listOfUrls.map((url) => fetch(url)); // promises

//   const responses = await Promise.all(promises);

//   const jsonResponses = responses.map((response) => response.json());

//   const data = await Promise.all(jsonResponses);

//   console.log(data);
// }

// fetchMultipleDataParallerl(urls);
// ===================================================================
// 2. Создать функцию, которая будет отправлять несколько
// асинхронных запросов на сервер последовательно await.
// Дождаться выполнения каждого запроса перед отправкой следующего
// и вернуть массив результатов в том порядке, в котором они
// были отправлены

// async function getDataSequentially() {
//   const results = [];

//   const todosResponse = await fetch(urls[0]);
//   const todos = await todosResponse.json();
//   results.push(todos);

//   const commentsResponse = await fetch(urls[1]);
//   const comments = await commentsResponse.json();
//   results.push(comments);

//   const usersResponse = await fetch(url[2]);
//   const users = await usersResponse.json();
//   results.push(users);

//   return results;
// }

// async function request(listOfUrls) {
//   const data = [];
//   for (const url of listOfUrls) {
//     const response = await fetch(url);
//     const responseData = await response.json();
//     data.push(responseData);
//   }
//   console.log(data);
// }
// request(urls);

// ======================================================================
// Задача 3 *
// Создать функцию, которая будет отправлять асинхронные запросы на
// сервер каждые 5 секунд, используя setInterval и await.
// Продолжать отправку запросов до тех пор, пока не будет получен
// определенный результат(например ошибка) или не пройдет
// определенное количество попыток.
// ==================================================================

// Задача 5
// Создать функцию, которая будет отправлять несколько асинхронных
// запросов на сервер параллельно, используя Promise.race.
// Дождаться выполнения любого из запросов и вернуть его
// результат.

// const urls = [
//   "https://jsonplaceholder.typicode.com/todos",
//   "https://jsonplaceholder.typicode.com/comments",
//   "https://jsonplaceholder.typicode.com/users",
// ];

// async function getFirstResult(listOfUrls) {
//   const requests = listOfUrls.map(async (url) => {
//     const response = await fetch(url);
//     const data = await response.json();
//     return {
//       url,
//       data,
//     };
//   });
//   const firstResult = await Promise.race(requests);
//   return firstResult;
// }

// getFirstResult(urls);

// async function request(listOfUrls) {
//   const promises = listOfUrls.map((url) => fetch(url));
//   const response = await Promise.race(promises);
//   const data = await response.json();
//   console.log(data);
// }
// request(urls);
// ================================================================
