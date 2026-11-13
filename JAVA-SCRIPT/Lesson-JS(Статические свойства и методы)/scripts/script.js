// class Animal {
//     constructor (name) {
//         this.name = name;
//     }
//     makeSound () {}
//     hi () {}
//     hello () {}
// }

// const animal1 = new Animal();
// console.log(animal1);

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   checkIfArray(value) {
//     //........
//   }
// }

// const arr1 = new Array();

// Array.checkIfArray("jgijroior");
// Array.checkIfArray(4);
// Array.checkIfArray([1, 1]);
// Array.checkIfArray({});
// Array.checkIfArray(null);
// Array.checkIfArray(() => {});

// Promise.all([]);

// class Animal {
//   static count = 0;
//   static isAnimal(entity) {
//     return entity.__proto__ === Animal.prototype;
//   }
//   constructor(name) {
//     this.name = name;
//     Animal.count++;
//   }

//   makeSound() {
//     console.log("making sound");
//   }
// }

// const animal1 = new Animal("Tom");
// const animal2 = new Animal("Alice");
// const animal3 = new Animal("Doni");
// const animal4 = new Animal("Max");

// // console.log(Animal.count);
// console.log(Animal.isAnimal);
//==================================================
//=====================  TASK ======================
//==================================================
// 1. Создайте класс Calculator, у которого будет
// статический метод add(), который будет принимать
// два числа и возвращать их сумму.

// class Calculator {
//   static add(a, b) {
//     return a + b;
//   }
// }

// console.log(Calculator.add(3, 4));
//====================================================
// 2.Создайте класс RandomNumberGenerator, у которого
// будет статический метод generate(), который будет
// генерировать случайное число в заданном диапазоне.

// class RandomNumberGenerator {
//   static generate(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// }

// const randomNumber = RandomNumberGenerator.generate(1, 10);
// console.log(randomNumber);
//=====================================================
// 3. Создайте класс StringUtils, у которого будет
// статический метод reverse(), который будет принимать
// строку и возвращать ее в обратном порядке.

// class StringUtils {
//   static reverse(str) {
// return str.split("").reverse().join("");
//     let reverseStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       reverseStr += str[i];
//     }
//     return reverseStr;
//   }
// }

// console.log(StringUtils.reverse("Hallo"));
//=====================================================

// 4. Создайте класс MathUtils (Математический утилитар),
//  у которого будет статический метод getMax(), который
// будет принимать массив чисел и возвращать наибольшее
// число.

class MathUtils {
  static getMax(arr) {
    return Math.max(...arr);
  }
}

console.log(MathUtils.getMax([2, 45, 47, 3]));
//======================================================

//! forEach | map | filter | reduce

// Number.prototype.getLength = function () {
//     return this.toString().length;
// };

// const num1 = 151565356;
// const num2 = 85;
// const num3 = 5898;

// console.log(num1.getLength());
//=================================

//? forEach => myForEach
//? arr1.forEach((element, index, array) => { });

// Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// };

// const arr1 = [4, 5, 3, 7, -1];
// arr1.myForEach((elem, ind) => {
//     if (elem > 0) {
//         console.log(elem * 6);
//     }
// });
//====================================================

//? map => myMap
//? arr1.map();

// Array.prototype.myMap = function (callback) {
//   const result = [];

//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }

//   return result;
// };

// const arr1 = [1, 2, 3];

// const result = arr1.myMap((el) => {
//   return el * 1000;
// });

// console.log(result);

// Array.prototype.mySuperMap = function (callback) {
//   const result = [];
//   const types = [];

//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//     types.push(typeof result[i]);
//   }

//   return {
//     original: this,
//     originalLen: this.length,
//     result: result,
//     sub: Math.abs(this.length - result.length),
//     resultLen: result.length,
//     types: types,
//   };
// };

// const arr1 = [1, 2, 3];
// const result = arr1.mySuperMap((el) => {
//   return "render";
// });
// console.log(result);
