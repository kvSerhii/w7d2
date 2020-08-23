"use strict";
// classes
/* function Squirrel(name, age) {
  this.name = name;
  this.age = age;
}

function SquirrelAbilities() {
  this.sayHi = function () {
    return `hi, my name is ${this.name}`;
  };
}

Squirrel.prototype = new SquirrelAbilities(); */

/* class SquirrelClass {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // getters & setters
  set age(age) {
    if (typeof age !== "number") {
      throw new TypeError("Age must be a number");
    }
    if (!Number.isInteger(age) && age > 50) {
      throw new RangeError("Must be integer from 0 to 50");
    }
    this._age = age;
  }

  set name(newName) {
    if (typeof newName !== "string" && newName !== "") {
      throw new TypeError("Name must be a string");
    }
    if (typeof newName.length < 128) {
      throw new RangeError("Must be less than 128 symbols");
    }
    this._name = newName;
  }

  get age() {
    return this._age;
  }

  get name() {
    return this._name;
  }

  static isSquirrel(squirrel) {
    return squirrel instanceof SquirrelClass;
  }

  sayHi() {
    return `hi, my name is ${this.name}`;
  }
}

const sq = new SquirrelClass();
console.log(sq);

sq.age = 13;
sq.name = "Ed";

console.log(sq.name);

// extends parent class
class FlyingSquirrel extends SquirrelClass {
  constructor(name, age) {
    super(name, age);
    this.isMale = isMale;
  }

  fly() {
    return `Squirrel ${this.name} is flying`;
  }
}

const flyingSquirrel = new FlyingSquirrel("Max", 5, true); */

// practice (ToDo: )
/* class User {
  constructor(name, age, isMale = true, isBanned = false) {
    this._name = name;
    this._age = age;
    this._isMale = isMale;
    this._isBanned = isBanned;
  }

  get name() {
    return this._age;
  }
  get age() {
    return this._name;
  }
  get isMale() {
    return this._isMale();
  }

  get isBanned() {
    return this._isBanned();
  }

  set name(newName) {
    if (typeof newAge !== "string") {
      throw new TypeError("Wrong type");
    }
    if (newName.length > 128) {
      throw new RangeError("Wrong type");
    }
    this._name = newName;
  }

  set age(newAge) {
    if (typeof newAge !== "number" && newAge > 50) {
      throw new TypeError("Wrong type");
    }
    if (newAge > 50) {
      throw new RangeError("Wrong type");
    }
    this._name = newAge;
  }

  set male(male) {
    if (typeof male !== "boolean") {
      throw new TypeError("Wrong type");
    }
    this._isMale = male;
  }

  set isBanned(ban) {
    if (typeof ban !== "boolean") {
      throw new TypeError("Wrong type");
    }
    this._isBanned = ban;
  }

  sayHi() {
    return `${this._name} saying hi!`;
  }

  sendMessage(string) {
    if (this._isBanned) {
      throw new Error(`You banned and cannot send messages`);
    }
    console.log(`${this._name} sent message ${string}`);
  }
}

class Administrator extends User {
  constructor(name, age, isMale, isBanned = false) {
    super(name, age, (isMale = true), (isBanned = false));
  }

  sendMessage(msg) {
    const parentResult = super.sendMessage(msg);
    console.log(parentResult);
    return `admin send ${msg}`;
  }
  banUser(ban) {
    User._isBanned = ban;
  }
}

const user1 = new User("Fred", 25, true, false);
console.log(user1);

const admin = new Administrator("Tom", 34, true, false);
console.log(admin);

admin.banUser(true);
console.log(user1.isBanned()); */

class MyString {
  /* constructor(string) {
    this._string = string;
  } */

  static reverse(str) {
    return str.split(" ").reverse().toString();
  }

  static usFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static ucWord(str) {
    return str
      .split(" ")
      .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
      .join(" ");
  }
}

const strg = "test1 test2 test3 test4 test5";
// const str1 = new MyString(strg);

//1
console.log(MyString.reverse(strg));
//2
console.log(MyString.usFirst(strg));
//3
console.log(MyString.ucWord(strg));

//
class User {
  constructor(name, surname, year) {
    this._name = name;
    this._surname = surname;
    this._year = year;
  }

  get name() {
    return this._name;
  }
  get surname() {
    return this._surname;
  }
  get year() {
    return this._year;
  }

  fullName(name, surname) {
    return `${this._name} ${this._surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname, year);
  }

  getCourse(year) {
    const currentDate = new Date();
    return currentDate.getFullYear() - year;
  }
}

const stud1 = new Student("Sam", "Smith", 2015);

console.log(stud1.getCourse(stud1.year));
console.log(stud1.fullName());
console.log(stud1.name);
console.log(stud1.surname);

// таски брать здесь
//codewars.com
