// function User (name, age) {
//   this.name = name
//   this.age = age
// }

// const user1 = new User('Alex', 23)
// console.log(user1)

class User {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  isAdult() {
    console.log("hello");
  }
}

const newUser = new User("Robert", 20);

class Student extends User {
  average;
  constructor(name, age, average) {
    super(name, age);
    this.average = average;
  }
}
class Teacher extends User {
  countOfLessons;
  constructor(name, age, countOfLessons) {
    super(name, age);
    this.countOfLessons = countOfLessons;
  }
}

const newStudent = new Student("Robert", 20, 3);
const newTecher = new Teacher("Nick", 40, 30);
console.log(newTecher);
console.log(newStudent);
