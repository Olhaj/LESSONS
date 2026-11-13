// =============== some() ================

// 1. Проверьте, содержит ли массив хотя бы одно
// отрицательное число с помощью метода some().

// const numbers = [4, 5, 3, 78, 9];
// const result = numbers.some((number, ind, arr) => {
//   return number < 0;
// });
// console.log(result);

// 2. Проверьте, содержит ли массив хотя бы одну строку
//  длиной более 10 символов с помощью метода some().

// const strings = ["apple", "banana", "orange", "watermelon"];
// const hasLongString = strings.some((str) => str.length > 10);
// console.log(hasLongString);

// =============== every() ================

// 1. Проверьте, все ли элементы массива являются положительными числами
// с помощью метода every().
// const words = [
//   "apple",
//   "banfdbfdbfdbdfbana",
//   "sdvsdvsddsvsvdsv",
//   "watesdvsdvsdvrmelon",
// ];
// const has10Letters = words.every((string) => {
//   return string.length > 10;
// });
// console.log(has10Letters);

// 1. Проверьте, являются ли все элементы массива
// положительными числами с помощью метода every().
// const numbers = [1, 2, 3, 4, 5];

// const allPositive = numbers.every((num) => num > 0);

// console.log(allPositive);

// 2. Проверьте, являются ли все элементы массива
// четными числами с помощью метода every().
const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every((num) => num % 2 === 0);

console.log(allEven);
