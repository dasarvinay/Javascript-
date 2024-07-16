// Array Methods : push pop, shift, unshift, sort, map, filter, reduce, slice, join, concat, reverse, split
//find, some , every -- its your task..!!
// forEach, Splice

// For, ForIn, ForOf, forEach

// let numbers = [1, 4, 5, 6, 8];

// numbers.map((x) => console.log(x * 2));

// let fruits = ["aPPle", "Mango", "BAnana", "Grapes"];
// fruits.forEach((x) => console.log(x.toLowerCase()));

// let lower = fruits.map((y) => y.toLowerCase());
// console.log(lower);
// console.log(lowerCase);

// Slice
// let bikes = ["splendor", "passion", "thunderbird", "Apache"];

// let bike = bikes.slice(1, 3);
// console.log(bike);
// console.log(bikes);

// Splice : Add Element, Remove Element and Replace Element

// let bikes = ["splendor", "passion", "thunderbird", "Apache"];

// bikes.splice(startCount, DeleteCount, item1, item2)

//Remove
// let newBike =bikes.splice(1, 1)
// console.log(newBike);
// console.log(bikes);

//Add
// let newBike = bikes.splice(1, 2, "Shine");
// console.log(bikes);

// Replace
// let newBike = bikes.splice(0, 4, "Activa", "Access", "NTorq");
// console.log(newBike);
// console.log(bikes);

// ------------------------------------------------------------------------------------------------

// Object : collections of property written inside curly braces, properties are in the form of key and value pair

// In four ways we can create an object
// 1. Object Literal

// let person = {
//   name: "Random",
//   age: 23,
// };

// 2. new Constructor

// let person = new Object();

// person.firstName = 'GuruRaj';
// person.lastName = 'Prasad'
// person.age = 23;

// console.log(person);

// 3. function Constructor

// function Person(name, age, height) {
//   this.name = name;
//   this.age = age;
//   this.height = height;
// }

// const person = new Person("joHn", 34, "174cm");
// console.log(person);

// 4. ES6 Classes

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person = new Person("joHn", 34);
// console.log(person);

// ---------------------------------------------------------------------------------------------

// let key = Symbol(123);

let student = {
    name: "Random",
    age: 23,
    //   [key]: 'newkey1',
  };
  
  // Access a property of object
  //Dot Notation
  // console.log(student.name);
  //Bracket Notation
  // console.log(student);
  // console.log(student[key]);
  
  // Modify the property of the object
  // student.name = "NonRandom";
  // student["age"] = 54;
  
  //Remove the property of the object
  // delete student.age;
  // delete student["name"];
  // console.log(student);
  
  //adding an nested object
  
  student.details = {
    height: "160cm",
    weight: "70kg",
    complexion: "fair",
    greet: function () {
      console.log("Hello inside the object");
    },
  };
  
  // console.log(student.details.greet());
  
  let car = {
    name: "SUV500",
    fuel: "petrol",
    color: "white",
  };
  
  let bike = {
    name: "ducati",
    color: "red",
    gears: 7,
  };
  
  // let keys = Object.keys(car);
  // let values = Object.values(car);
  // console.log(keys);
  // console.log(values);
  let assign = Object.assign(car, bike);
  console.log(assign);
  
  // console.log(Object.keys(student.details));

//   --------------------------------------------------------------------
// Math Methods and Date

// console.log(Math);

// Abs means absolute and it converts value from negative to positive but not vice versa
// console.log(Math.abs(24));

//ceil, floor and round

// console.log(Math.round(34.1));

//ceil will give you top value
// console.log(Math.ceil(34.13244942));
//floor will give you bottom value
// console.log(Math.floor(34.877));

// let array1 = [1, 34, 55, 6, 3, 5];
// console.log(Math.min(...array1));
// console.log(Math.max(...array1));

// console.log(Math.ceil(Math.random() * 10 + 1));

// let min = 1;
// let max = 6;
// Math.random will generate the numbers between 0 to 1
// Formula
// console.log(Math.floor(Math.random() * (max - min + 1) + min));

// ----------------------------------------------------------------------------------------------------------

// Everything in javascript is an Object

// Date
// let newDate = new Date();

// console.log(newDate);
// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());
// console.log(newDate.toLocaleDateString());
// console.log(newDate.toISOString());
// console.log(typeof newDate);

// let newDate = new Date("2002-2-5")
// let newDate = new Date("2-4-2023");
// let newDate = new Date(2002, 0, 3, 5, 20)

// console.log(newDate);

// console.log(Date.now());

// let newDay = new Date();

// console.log(newDay.getTime());
// console.log(newDay.getFullYear());
// console.log(newDay.getMonth() + 1);
// console.log(newDay.getDate());
// console.log(newDay.getHours());
// console.log(newDay.getMinutes());
// console.log(newDay.getSeconds());

// console.log(`${newDay.getHours()} : ${newDay.getMinutes()} : ${newDay.getSeconds()}`);

// Window -> Document -> HTML -> 1. Head and 2. Body
// Document Object Model : This is a tree like representation of the nodes of document(HTML file)









