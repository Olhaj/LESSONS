// const body = document.querySelector("body");
// function render() {
//   console.log("render");
// }

// body.addEventListener("click", render);

// const body = document.querySelector("body");
// function render(event, number) {
//   console.log("render");
//   console.log(number);
// }

// body.addEventListener("click", (event) => render(event, 455));

// 1. Создайте форму с полем для ввода email и кнопкой
// "Отправить". Напишите JavaScript-функцию, которая
// будет вызываться при отправке формы.
// В функции проверьте, чтобы введенный email
// содержал символ "@". Если условие выполняется,
// выведите сообщение "Форма отправлена",
// в противном случае выведите сообщение
// "Введите корректный email".

// const redisterForm = document.querySelector(".registerform");

// создание функции на проверку есть ли собачка
// function isValidateEmail(value) {
//   for (let i = 0; i < value.length; i++) {
//     if (value[i] === "@") {
//       return true;
//     }
//   }
//   return false;
// }

// вешаем обработчик на кнопку и добавляем в инпут нашу функцию
// redisterForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   //  console.log(event.target.elements.email.value); // так мы можем обратиться к инпуту и его значению через value
//   const emailInputValue = event.target.elements.email.value;

//   if (isValidateEmail(emailInputValue)) {
//     console.log("Форма отправлена");
//   } else {
//     console.log("Введите корректный email");
//   }
// });

// --------------- Примеры: ----------------------------
// const registerForm = document.querySelector(".registerForm");
// const statusMessage = document.querySelector(".statusMessage");
// function isValidEmail(value) {
//   for (let i = 0; i < value.length; i++) {
//     if (value[i] === "@") {
//       return true;
//     }
//   }
//   return false;
// }
// function isPaasswordValid(value) {}
// registerForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const emailInputValue = event.target.elements.email.value;
//   if (isValidEmail(emailInputValue)) {
//     statusMessage.textContent = "";
//     console.log("Форма отправлена");
//     registerForm.reset();
//   } else {
//     statusMessage.textContent = "Введите корректный email!";
//     statusMessage.style.color = "red";
//   }
// });

// Создать HTML-форму, которая включает в себя:

// Поля ввода:
// фамилии
// имени
// email
// пароля
// Кнопки отправки и очистки
// Чекбокс с текстом “Подписаться на email рассылку”
// Поле ввода почты должно содержать символ “@”,
// пароль должен быть длиннее 6 символов, в случае
// ошибки, выводить текст, содержащий сообщение об
// ошибке.
// Если все условия выполнены, очистить поля формы и
// показать сообщение об успехе.

// Все поля должны быть обязательны для заполнения,
// имя и фамилия(2-26 символов), в пароле хотя
// бы одна буква в верхнем регистре.

// Добавьте дату рождения(пользователь доложен
// быть старше 18 лет)

const registerForm = document.querySelector(".myForm");
const errorMessage = document.querySelectorAll(".errorMessage");
const completionMessage = document.querySelector(".completionMessage");

function isValidName(value) {
  return /^[a-zA-Zа-яА-ЯёЁ]{2,26}$/.test(value.trim());
}

function isValidEmail(value) {
  for (let i = 0; i < value.length; i++) {
    if (value[i] === "@") {
      return true;
    }
  }
  return false;
}

function isPasswordValid(value) {
  return value.length >= 6 && /[A-Z]/.test(value);
}

function isDateOfBirth(value) {
  const birthDate = new Date(value);
  const today = new Date();
  const adultDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate(),
  );

  return birthDate <= adultDate;
}

function validateInput(input) {
  const message = input.parentElement.querySelector(".errorMessage");
  const value = input.value.trim();

  message.textContent = "";

  if (value === "") {
    const fieldNames = {
      lastname: "фамилию",
      username: "имя",
      email: "email",
      password: "пароль",
      userDate: "дату рождения",
    };
    message.textContent = `Введите ${fieldNames[input.name]}!`;
    return false;
  }

  if (input.name === "lastname" || input.name === "username") {
    if (!isValidName(value)) {
      message.textContent = "Используйте от 2 до 26 букв!";
      return false;
    }
  }

  if (input.name === "email" && !isValidEmail(value)) {
    message.textContent = "Введите корректный email!";
    return false;
  }

  if (input.name === "password" && !isPasswordValid(value)) {
    message.textContent = "Пароль: минимум 6 символов и одна заглавная буква!";
    return false;
  }

  if (input.name === "userDate" && !isDateOfBirth(value)) {
    message.textContent = "Вам должно быть не меньше 18 лет!";
    return false;
  }

  return true;
}

registerForm
  .querySelectorAll("input:not([type='checkbox'])")
  .forEach((input) => {
    input.addEventListener("blur", () => {
      validateInput(input);
    });
  });

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  completionMessage.textContent = "";

  const lastNameInputValue = event.target.elements.lastname.value;
  const userNameInputValue = event.target.elements.username.value;
  const emailInputValue = event.target.elements.email.value;
  const passwordInputValue = event.target.elements.password.value;
  const dateInputValue = event.target.elements.userDate.value;

  let isFormValid = true;

  if (!isValidName(lastNameInputValue)) {
    errorMessage[0].textContent = "Введите корректную фамилию!";
    isFormValid = false;
  }

  if (!isValidName(userNameInputValue)) {
    errorMessage[1].textContent = "Введите корректное имя!";
    isFormValid = false;
  }

  if (!isValidEmail(emailInputValue)) {
    errorMessage[2].textContent = "Введите корректный email!";
    isFormValid = false;
  }

  if (!isPasswordValid(passwordInputValue)) {
    errorMessage[3].textContent =
      "Пароль: минимум 6 символов и одна заглавная буква!";
    isFormValid = false;
  }

  if (!isDateOfBirth(dateInputValue)) {
    errorMessage[4].textContent = "Вам должно быть не меньше 18 лет!";
    isFormValid = false;
  }

  if (isFormValid) {
    registerForm.reset();
    completionMessage.textContent = "Форма успешно отправленна!";
  }
});

// Выводит сообщение на экран, что форма не дозаполнена
registerForm.addEventListener("reset", () => {
  errorMessage.forEach((message) => {
    message.textContent = "";
  });
  completionMessage.textContent = "";
});
