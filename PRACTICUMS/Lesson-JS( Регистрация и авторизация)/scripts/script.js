// Находим поле для имени пользователя на странице.
const userNameInput = document.querySelector(".name");

// Находим поле для номера телефона.
const phoneInput = document.querySelector(".phone");

// Находим поле для электронной почты.
const emailInput = document.querySelector(".email");

// Находим поле для пароля.
const passwordInput = document.querySelector(".password");

// Находим кнопку, запускающую регистрацию пользователя.
const signUpBtn = document.querySelector(".signup");

// Находим элемент, в котором будут отображаться сообщения пользователю.
const message = document.querySelector(".statusMessage");

// Загружаем пользователей из localStorage или создаем пустой массив, если данных еще нет.
const users = JSON.parse(localStorage.getItem("users")) || [];

// Запускаем проверку и регистрацию после нажатия на кнопку.
signUpBtn.addEventListener("click", () => {
  const userName = userNameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  let validationMessage = "";

  if (!/^\p{L}{2,24}$/u.test(userName)) {
    validationMessage = "Имя должно содержать от 2 до 24 букв";
  } else if (!/^\+\d{8,12}$/.test(phone)) {
    validationMessage =
      "Телефон должен начинаться с + и содержать от 8 до 12 цифр";
  } else if (email.length < 7 || !email.includes("@")) {
    validationMessage =
      "Email должен содержать символ @ и быть длиной минимум 7 символов";
  } else if (password.length < 5 || password.length > 26) {
    validationMessage = "Пароль должен содержать от 5 до 26 символов";
  }

  if (validationMessage) {
    message.textContent = validationMessage;
    message.style.color = "red";
  } else {
    // Проверяем, зарегистрирован ли пользователь с таким email.
    let isError = users.some((user) => {
      return user.email === email;
    });

    // Если такой email уже существует, показываем сообщение об ошибке.
    if (isError) {
      console.log("User with such email already been registred");

      // Выводим сообщение о том, что пользователь уже зарегистрирован.
      message.textContent = "Такой пользователь уже зарегистрирован";
      message.style.color = "red";
    } else {
      // Создаем объект и записываем в него данные нового пользователя.
      const user = {
        name: userName,
        phone,
        email,
        password,
      };

      // Добавляем нового пользователя в общий массив.
      users.push(user);

      // Сохраняем обновленный массив пользователей в localStorage.
      localStorage.setItem("users", JSON.stringify(users));

      // Выводим сообщение об успешной регистрации.
      message.textContent = "Вы успешно зарегистрировались!";
      message.style.color = "green";

      // Очищаем поля формы после успешной регистрации.
      userNameInput.value = "";
      phoneInput.value = "";
      emailInput.value = "";
      passwordInput.value = "";
    }
  }
});
