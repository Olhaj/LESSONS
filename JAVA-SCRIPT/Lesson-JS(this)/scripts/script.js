// 1. Создать объект person со свойствами name и
// age и с методом myAge, который будет выводить
// сообщение в консоль с использованием свойства
// age объекта

const person = {
  name: "Nikita",
  age: 44,
  myAge() {
    console.log(this.age);
  },
};

person.myAge();
// ==============================================

// 2.Создать объект calculator с методами add и
// multiply и свойством result, равному 0, которые
// будут принимать два числа и возвращать их сумму
// и произведение соответственно в переменную
// result.

const calculator = {
  result: 0,
  add(a, b) {
    this.result = a + b;
    return this.result;
  },
  multiply(a, b) {
    this.result = a * b;
    return this.result;
  },
};

console.log(calculator.add(5, 4));
console.log(calculator.multiply(2, 5));
// ==============================================

// 3.Создать обработчик события “click” для кнопки,
// при клике на которую будет меняться цвет фона.

const bnt = document.createElement("button");

bnt.textContent = "Нажми меня";

bnt.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
});

document.body.append(bnt);
// ===============================================

//================== PRACTICUM (this)====================
// function User(id, name, age) {
//   //функция конструктор
//   this.id = id;
//   this.name = name;
//   this.age = age;
//   this.getInfo = function () {
//     console.log("ID:", this.id);
//     console.log("Name:", this.name);
//     console.log("Age:", this.age);
//   };
// }

// // таким образом мы тспользуем функцию конструктор
// const user1 = new User(1, "Alice", 34);
// const user2 = new User(2, "Bob", 54);
// const user3 = new User(3, "Greg", 35);

// user1.getInfo();
// user2.getInfo();
// user3.getInfo();
// ===============================================

// 1.Создать функцию конструктор объекта Car,
// который имеет поля brand, model, year и метод
// print, который выводит в консоль все поля
// строкой.

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.print = function () {
    console.log(`${this.brand} ${this.model} ${this.year}`);
  };
}

const car = new Car("BMW", "X5", 2022);

car.print();
//===============================================
//================== PRACTICUM(call, apply, bind) ====================
const user1 = {
  name: "Alice",
  age: 45,
  getName(city) {
    console.log(this.name, city);
  },
};

const user2 = {
  name: "Bob",
  age: 34,
};

user1.getName("Tokio"); //определения контекста
// call()
// user1.getName.call(user2); //переопределитьконтекст Bob, 34

// apply()
// user1.getName.apply(user2); // он принимает аргументы в массиве

// bind()
const newFoo = user1.getName.bind(user2); // он не вызывает функцию, а говорит сам вызови там где нужно тебе.
newFoo();
// ==============================================

// 1. Написать функцию, которая принимает 2
// аргумента и результат их сложения записывает в
// this.result. Использовать метод call().

const user = {
  name: "Alice",
  age: 23,
};
