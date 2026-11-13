const requestBtn = document.querySelector("button");

const BASE_URL = "https://jsonplaceholder.typicode.com";

// GET
function getPosts() {
  fetch(BASE_URL + "/posts")
    .then((response) => {
      // достать этот респонс с сервера
      return response.json(); //распаковать в обычный массив то что пришло с сервера
    })
    .then((data) => {
      const body = document.querySelector("body"); // здесь мы достаем то что до этого расспаковали
      data.forEach((post) => {
        body.append(document.createElement("br"), post.id, post.title);
      });
    })
    .catch((error) => {
      console.log(error); // если прийдет ошибка с сервера нужно ее обрабатывать
    });
}

// POST
function createPost() {
  // эта функция отправляет на сервер данные
  fetch(BASE_URL + "/posts", {
    method: "POST",
    body: JSON.stringify({
      id: 101,
      userId: 1,
      title: "Task1",
      body: "something",
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
}

requestBtn.addEventListener("click", createPost);
