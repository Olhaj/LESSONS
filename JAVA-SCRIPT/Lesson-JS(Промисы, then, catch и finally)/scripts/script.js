// 1. Создайте функцию checkEvenNumber, которая принимает число в качестве аргумента и
// возвращает Promise. Если число четное, выполните resolve с сообщением "Число
// четное", в противном случае выполните reject с сообщением "Число нечетное"

// function checkEvenNumber(num) {
//   return new Promise((resolve, reject) => {
//     if (num % 2 === 0) {
//       resolve("Число четное");
//     } else {
//       reject("Число нечетное");
//     }
//   });
// }

// checkEvenNumber(22).then((message) => {
//   console.log(message).catch((error) => {
//     console.log(error);
//   });
// });

// 2. Создайте функцию fetchData, которая возвращает Promise. Используйте setTimeout, чтобы имитировать
// задержку при загрузке данных с сервера. Если данные успешно загружены, выполните resolve с данными, иначе
// выполните reject с сообщением об ошибке.

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = false;

//       if (success) {
//         const data = { id: 1, name: "John Doe" };
//         resolve(data);
//       } else {
//         reject("Ошибка при загрузке данных");
//       }
//     }, 1500);
//   });
// };

// fetchData()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 3. Создайте функцию generateRandomNumber, которая возвращает Promise. Используйте setTimeout для
// имитации вычислений. Если число успешно сгенерировано, выполните resolve с числом, иначе выполните reject
// с сообщением об ошибке.

// const generateRandomNumber = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const number = Math.floor(Math.random() * 100) + 1;

//       if (number) {
//         resolve(number);
//       } else {
//         reject("Ошибка при генерации числа");
//       }
//     }, 1000);
//   });
// };

// generateRandomNumber()
//   .then((result) => {
//     console.log("Сгенерированное число:", result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//*========================= PRACTICUM ==========================
// 1. Создайте простое приложение для сохранения списка задач.
// Пользователь должен иметь возможность добавлять и удалять
// задачи. Список задач должен сохраняться в localStorage.

const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

const STORAGE_KEY = "todoTasks";

let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
  todoList.innerHTML = "";

  if (tasks.length === 0) {
    todoList.innerHTML = `
                    <li class="todo__empty">
                        Задач пока нет
                    </li>
                `;

    return;
  }

  tasks.forEach((task) => {
    const taskElement = document.createElement("li");

    taskElement.className = "todo__item";

    taskElement.innerHTML = `
                    <span class="todo__text"></span>
                    <button
                        class="todo__delete-button"
                        type="button"
                        data-id="${task.id}"
                    >
                        Удалить
                    </button>
                `;

    taskElement.querySelector(".todo__text").textContent = task.text;

    todoList.append(taskElement);
  });
}

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = todoInput.value.trim();

  if (taskText === "") {
    return;
  }

  const newTask = {
    id: Date.now(),
    text: taskText,
  };

  tasks.push(newTask);

  saveTasks();
  renderTasks();

  todoInput.value = "";
  todoInput.focus();
});

todoList.addEventListener("click", (event) => {
  if (!event.target.classList.contains("todo__delete-button")) {
    return;
  }

  const taskId = Number(event.target.dataset.id);

  tasks = tasks.filter((task) => task.id !== taskId);

  saveTasks();
  renderTasks();
});

renderTasks();
// const note = {
//   id: Math.random(),
//   title: "Learn Enlish",
// };

// 4.*Создайте функцию generateError, которая будет генерировать
// случайную ошибку с вероятностью 50%. Если ошибка сгенерирована
// успешно, выполните resolve с сообщением "Операция выполнена",
// иначе выполните reject с сообщением об ошибке.

// function generateError() {
//   return new Promise((resolve, reject) => {
//     const randomError = Math.random() < 0.5;

//     if (randomError) {
//       reject("Error: ranmdom error generated");
//     } else {
//       resolve("Operation was done");
//     }
//   });
// }

// generateError()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// !==============================================================
// const promise1 = Promise.resolve("Promise resolved");
// promise1.then((result) => console.log(result));
// const promise2 = Promise.reject("Error occured");
// promise2.catch((error) => console.log(error));

function fetchData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resource 1");
    }, 2000);
  });
}

function fetchData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Resource 2");
    }, 1500);
  });
}

function fetchData3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resource 3");
    }, 1000);
  });
}

Promise.all([fetchData1(), fetchData2(), fetchData3()])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
