// Array methods:
// for each,splice

// let num=[1, 2, 4, 6, 9]
// num.forEach((item) => console.log(item*2));
// num.map((items) => console.log(items*4));



// let fruits=["APPlE", "MANGO", "BANANA", "GRAPES"];
// fruits.forEach((x) => console.log(x.toLowerCase()));

// let lower= fruits.map((y) => y.toLowerCase());
// console.log(lower);


// let bike=["splendor", "Passion", "Thunderbird", "Apache"];
// let newbike = bike.splice(0,4, "KTM", "Ns120");
// console.log(bike);


let student = {
    name : "vinay",
    age: 23,

}
// Access a property of object
// Dot notation
console.log(student);
// Breaket natation
// console.log(student["name"]);
// console.log(student["age"]);

// modify the property of the object
// student.name="dasari";
// student["age"]=21;

// // remove the property of the object 
// delete student.age;
// delete student["name"];
// console.log(student);

// adding an nested Object

// student.details={
//     h: "6.5fts",
//     w: "100kg",

//     great: function(){
//         console.log("hello");
//     },
// };

// console.log(student.details.great());
// console.log(student);
let car={
    brand: "audi",
    model: "A8",

}

let keys = Object.keys(car)
console.log(keys);





