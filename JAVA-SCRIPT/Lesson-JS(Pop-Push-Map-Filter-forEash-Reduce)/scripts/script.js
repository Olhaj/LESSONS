// const names = ["Max", "Alice", "Dima"];

// const result = names.map((elem) => {
//   return `==${names}==`;
// });
// console.log(result);

// ===================== POP() =============================
// const numbers = [44, 66, 33, 99];
// numbers.pop();
// console.log(numbers);

// Создайте массив animals с элементами "cat", "dog", "rabbit".
// Используйте метод pop(), чтобы удалить последний
// элемент массива.
// const animals = ["cat", "dog", "rabbit"];
// animals.pop();
// console.log(animals);

// Создайте массив letters с элементами "A", "B", "C".
// Используйте метод pop(), чтобы получить и вывести
// последнюю букву.
// const letters = ["A", "B", "C"];
// const lastLetter = letters.pop();
// console.log(lastLetter);

// ================ FILTER() ==========================
// const numbers = [4, 5, -6, -3];

// const newNumbers = numbers.filter((numbers) => {
//   return "hello";
// });
// console.log(newNumbers);

// const users = [
//   { id: 1, name: "Alice", vip: false },
//   { id: 2, name: "Dima", vip: true },
//   { id: 3, name: "Max", vip: true },
//   { id: 4, name: "Greg", vip: false },
// ];
// const vipUsers = users.filter((user) => {
//   return user.vip;
// });
// console.log(vipUsers);

// ==================== SORT() =========================

// const numbers = [4, 6, 8, 2];
// numbers.push(4); // [4, 6, 8, 2, 4]
// //    4
// const n1 = numbers.shift(); // [6, 8, 2, 4]
// numbers.push(9, n1); // [6, 8, 2, 4, 9, 4]
// console.log(numbers); // [6, 8, 2, 4, 9, 4]

// pop - shift, push - unshift
// const numbers = [4, 6, 8, 2]; // [4, 6, 8, 2];
// //                     5                6
// numbers.unshift(numbers.push(3), numbers.push(5)); // [5, 6, 4, 6, 8, 2, 3, 5];
// //    5
// const n1 = numbers.shift(); // [6, 4, 6, 8, 2, 3, 5];
// //                     8
// numbers.unshift(numbers.push(n1)); // [8, 6, 4, 6, 8, 2, 3, 5, 5];
// console.log(numbers); // [8, 6, 4, 6, 8, 2, 3, 5, 5];

// const numbers = [4, 6, 8, 2]; // [4, 6, 8, 2];
// const foo = () => {
//   return numbers.push(2);
// };
// //    4                           2              4
// const n1 = numbers.unshift(numbers.pop(), numbers.shift()); // [2, 4, 6, 8];
// //            5       6             8
// numbers.push(foo(), foo(), numbers.unshift(n1, 4)); // [ 4, 4, 2, 4, 6, 8, 2, 2, 5, 6, 8];
// numbers.pop(); // [ 4, 4, 2, 4, 6, 8, 2, 2, 5, 6];
// console.log(numbers);

// =================== REDUCE ===============================
// const numbers = [2, 3, 10, 4];

// const result = numbers.reduce((accum, el, ind, arr) => {
//   return "render";
// }, 100);

// console.log(result);

// const numbers = [2, 3, 10, 4];

// const result = numbers.reduce((accum, el, ind, arr) => {
//   let a = 1;
//   let b = 2;
//   let c = a + b;
// }, 100);
// console.log(result);

// const numbers = [2, -3, 10, -4];
// const result = numbers.reduce((accum, num, ind, arr) => {
//   if (num > 0) {
//     accum.push(num * 2);
//   }
//   return accum;
// }, []);
// console.log(result);
// const filtredNumber = numbers.filter((num) => {
//   return num > 0;
// });
// const doubleElList = filtredNumber.map((num) => {
//   return num * 2;
// });
// console.log(doubleElList);

// debugger;
// **Вычислите сумму квадратов всех положительных чисел
// в числовом массиве, отсортировать массив по возрастанию.
// const numericArray = [-2, 3, -5, 1, 4];

// numericArray.sort((a, b) => a - b);

// console.log(numericArray);

// const result = numericArray.reduce((accum, num, ind, arr) => {
//   if (num > 0) {
//     return accum + num * num;
//   }
//   return accum;
// }, 0);

// console.log(result);

// 1. Реализуйте функцию pushToStack, которая добавляет числа 1,
//  2, 3 в стек, а затем реализуйте функцию popFromStack,
// которая удаляет последнее число из стека.

// function pushToStack(num) {
//   num.push(1, 2, 3);
//   console.log(num);
// }

// function popFromStack(num) {
//   num.pop();
//   console.log(num);
// }

// const number = [44, 55];

// popFromStack(number);

// 2. Создайте массив чисел. Реализуйте функцию
// doubleEvenNumbers, используя методы map и filter,
// чтобы удвоить значения только четных чисел.

// const numbers = [1, 2, 3, 4, 5];

// function doubleEvenNumbers(numbers) {
//   return numbers
// .filter((num) => num % 2 === 0)
// .map((num) => num * 2);
// }

// console.log(doubleEvenNumbers(numbers));

// 3.  Создайте массив строк. Реализуйте функцию addExclamation,
//  используя метод forEach, чтобы добавить к каждой строке
// восклицательный знак "!".

// const phrases = ["Hello", "How are you", "Goodbye"];

// function addExclamation(phrases) {
//   phrases.forEach((word, ind, arr) => {
//     phrases[ind] = word + "!";
//   });

//   return phrases;
// }

// console.log(addExclamation(phrases));

// 5. Условие: Создайте массив чисел. Реализуйте функцию
// addAndSort, используя методы unshift и sort, чтобы добавить
// число 5 в начало массива и отсортировать его по возрастанию.

// const numbers = [3, 1, 4, 2];

// function addAndSort(numbers) {
//   numbers.unshift(5);
//   numbers.sort((a, b) => a - b);

//   return numbers;
// }

// console.log(addAndSort(numbers));

// 4. Создайте массив чисел. Реализуйте функцию
// calculateAverage, чтобы вычислить среднее значение чисел
// в массиве.
// const numbers = [10, 20, 30, 40, 50];

// const calculateAverage = (numbers) => {
//   const sum = numbers.reduce((total, number) => total + number, 0);
//   return sum / numbers.length;
// };

// console.log(calculateAverage(numbers));

// 6.** Создайте массив строк. Реализуйте функцию
// concatenateAndCountChars, используя методы map и reduce,
// чтобы объединить строки в одну и подсчитать общее количество
// символов

// const words = ["Hello", " ", "World", " ", "!"];

// const concatenateAndCountChars = (words) => {
//   const lengths = words.map((str) => str.length);
//   const concatenated = words.reduce((res, str) => res + str, "");
//   const charCount = lengths.reduce((total, length) => total + length, 0);

//   return {
//     text: concatenated,
//     characterCount: charCount,
//   };
// };

// console.log(concatenateAndCountChars(words));

// 7. **Создайте массив объектов с полями "name" и "age".
// Реализуйте функцию updateAges, используя методы forEach и
// filter, чтобы увеличить возраст на 1 для всех объектов с
// возрастом менее 30 лет.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 28 },
];

const updateAges = (people) => {
  const youngPeople = people.filter((person) => person.age < 30);

  youngPeople.forEach((person) => {
    person.age += 1;
  });

  return people;
};

console.log(updateAges(people));

// 8. **Создайте массив чисел. Реализуйте функцию sumAndMultiplyByLast,
// используя методы reduce и map, чтобы вычислить сумму чисел и
// умножить ее на последний элемент массива.

const numbers = [2, 4, 6, 8, 10];

// 9. **Создайте массив строк. Реализуйте функцию
// filterAndSortStrings, используя методы filter и sort,
// чтобы оставить только строки длиной более 3 символов и
// отсортировать их по алфавиту.

const words = ["apple", "pear", "banana", "kiwi"];
