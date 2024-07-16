
// Question 1: 
// 1.	Declare a variable named name and initialize it with your full name.
// 2.	Declare a variable named age and initialize it with your age.
// 3.	Declare a variable named isStudent and initialize it with a boolean value indicating whether you are a student or not.
// 4.	Print all the variables to the console

const student={
  fullname: "dasari vinay",
  age: "21",
  isStudent: "true",
}
 console.log(student);


// Question 2: 
// 1.	Declares variables length and width and assigns them values.
// 2.	Calculates the area and perimeter of the rectangle using the formulas:
// o	Area: length * width
// o	Perimeter: 2 * (length + width)
// 3.	Prints the area and perimeter.


let length ="9.5";
let width ="4";

area =length * width;
perimeter =2 * (length + width);

console.log( "Area of the rectangle:",area);
console.log("Perimeter of the rectangle:",perimeter);



// Question 3: 
// 1.	Declare a variable named greeting and initialize it with the string "Hello, ".
// 2.	Declare a variable named userName and initialize it with any name.
// 3.	Concatenate greeting and userName and store the result in a new variable welcomeMessage.
// 4.	Print welcomeMessage to the console.


  var greeting;
  greeting = "hello, " ;
  var userName;
  userName =  "Dasari vinay";
  let welcomeMessage = greeting + userName;
  console.log(welcomeMessage)


  // Question 4: 
// 1.	Declare a variable named stringNumber and initialize it with the string value "123".
// 2.	Convert stringNumber to a number and store it in a new variable convertedNumber.
// 3.	Print the type of stringNumber and convertedNumber to the console.


let stringNumber = "123";
convertedNumber = Number( stringNumber);
console.log("Type of stringNumber: " + typeof stringNumber);
console.log("Type of convertedNumber: " + typeof convertedNumber);

 // Question 5:
// 1.	Declare two variables a and b and assign them any numerical values.
// 2.	Compare a and b using the following operators and print the results to the console:

let a="10", b="20";

console.log( " a==b" , a==b);
console.log( " a===b" , a===b);
console.log( " a!=b" , a!=b);
console.log( " a!==b" , a!==b);
console.log( " a>b" , a>b);
console.log( " a<b" , a<b);
console.log( " a>=b" , a>=b);
console.log( " a<=b" , a<=b);

// Question 6:
// 1.	Declare three boolean variables isSunny, isWeekend, and hasHomework.
// 2.	Use logical operators to determine if you can go out to play (i.e., it is sunny, it is the weekend, and you have no homework).
// 3.	Print the result to the console

let isunny= true;
let isWeekend =true;
let hasHomework= true;
let result = isunny && isWeekend && hasHomework;
console.log("can go out to play:", result);



// Question 7: 
// 1.	Declare a variable named temperature and assign it a numerical value.
// 2.	Use the ternary operator to check if the temperature is above 30 degrees. If it is, assign the string "Hot" to a variable named weather, otherwise assign "Cold".
// 3.	Print the value of weather to the console.

let temperature ="50";
if (temperature >= 30) {
    console.log(" Hot weather ");
  }
  else{
      console.log(" cold weather ");
  }



  // Question 8: 
  // 1.	Declare a variable of each of the following types: string, number, boolean, object, and undefined.
  // 2.	Use the typeof operator to check the data type of each variable and print the results to the console.

  let str = " hello ";
  let num = 21;
  let bool = true;
  let obj = { name: " virat", age: 30 }
  let undefind;

  console.log( "Type of str is:", typeof str);
  console.log( "Type of num is:", typeof num);
  console.log( "Type of bool is:", typeof bool);
  console.log( "Type of obj is:", typeof obj);
  console.log( "Type of undefind is:", typeof undefind);
  




