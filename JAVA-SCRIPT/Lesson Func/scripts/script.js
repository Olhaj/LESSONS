// function greetUser() {
//   const greet = "Welcome, User!";
//   console.log(greet);
// }

// greetUser();

// function greetUser(name) {
//   console.log("Welcome, " + name);
// }
// greetUser("Max");
// greetUser("Bob");
// greetUser("Mike");
// 1.	Создайте функцию `greet`,
// которая выводит в консоль приветствие "Привет, мир!".

// function greet() {
//   console.log("Привет, мир!");
// }

// greet();

// let number1 = 43 + 2;
// let number2 = 5 + 13; // чтоюы так дальше не писать мы используем функцию и даем ей параметры, это как создать в ней переменую

// function sum(number1, number2) {
//   console.log(number1 + number2);
// }

// sum(3, 65); //теперь мы ложим что она будет суммировать
// sum(1, 7);

// const calculator = {
//   name: "CALCULATOR",
//   sum(num1, num2) {
//     console.log(num1 + num2);
//   },
//   substract(num1, num2) {
//     console.log(num1 - num2);
//   },
//   multiply(num1, num2) {
//     console.log(num1 * num2);
//   },
//   divide(num1, num2) {
//     console.log(num1 / num2);
//   },
// };

// calculator.divide(10, 2);
// calculator.divide(100, 2);
// calculator.sum(45, 55);

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

// const sum = function (num1, num2) {
//   console.log(num1 + num2);
// };

// const sum = (num1, num2) => {
//   console.log(num1 + num2);
// };

// IIFE
// (function sum() {
//   console.log(4, 6);
// })();

// function greetUser(name) {
//   const greeting = "Hello " + name;
//   return greeting;
// }

// console.log(greetUser("Max"));

// const sumOfElementsInAList = (list) => {
//   let sum = 0;
//   for (let i = 0; i < list.length; i++) {
//     sum = sum + list[i];
//   }
//   return sum;
// };

// const result = sumOfElementsInAList([1, 2, 3]);
// console.log(result);

// const findWord = (list, word) => {
//     let isFound = false;

//   for (let i = 0; i < list.length; i++) {
//     if (list[i] === word) {
//       isFound = true;
//       break;
//     }
//     }

//   return isFound ? "Такое слово есть" : "Такого слова нет";
// }

// const words = ["I", "Love", "JavaScript"];
// let targetWord = "I";

// let result = findWord(words, targetWord);
// console.log(result);

//Создайте стрелочную функцию concatenate, которая принимает две строки и возвращает их объединение.

//Пример использования:
//console.log(concatenate("Hello", "World")); // Ожидаемый результат: "HelloWorld"
//console.log(concatenate("JavaScript", "Rocks!")); // Ожидаемый результат: "JavaScriptRocks!"

// const concatenate = (word1, word2) => word1 + word2;

// console.log(concatenate("Hello", "World"));
// console.log(concatenate("JavaScript", "Rocks!"));

// Создайте стрелочную функцию square, которая принимает число и возвращает его квадрат.

// Пример использования:
// console.log(square(5)); // Ожидаемый результат: 25
// console.log(square(8)); // Ожидаемый результат: 64

// const square = (number) => number ** 2;
// console.log(square(5));
// console.log(square(8));

// Создайте стрелочную функцию isEven, которая принимает число и возвращает true, если число четное, и false в противном случае.

// Пример использования:
// console.log(isEven(6)); // Ожидаемый результат: true
// console.log(isEven(7)); // Ожидаемый результат: false

// const isEven = (number) => number % 2 === 0;
// console.log(isEven(6));
// console.log(isEven(7));

//Создайте объект calculator с методом add, который принимает два числа и возвращает их сумму.

// const calculator = {
//   add(num1, num2) {
//     return num1 + num2;
//   },
// };

// console.log(calculator.add(3, 5));

Создайте объект user с методом sayHello, который принимает имя пользователя и возвращает приветствие.

Создайте стрелочную функцию getLength, которая принимает строку и возвращает ее длину.

Создайте стрелочную функцию toUpperCase, которая принимает строку и возвращает ее в верхнем регистре

Создайте стрелочную функцию isPositive, которая принимает число и возвращает true, если число положительное, и false в противном случае.

Создайте объект user с методами:
sayHello - принимает имя и возвращает приветствие
sayGoodbye - принимает имя и возвращает прощание
askQuestion - принимает имя и возвращает вопрос