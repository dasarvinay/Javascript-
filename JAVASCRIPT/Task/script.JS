// Array Initialization:
// Create an array of 10 random integers between 1 and 100.

let Array=[10, 20, 30, 40, 50, 60, 70, 80, 90, 99]

// Array Manipulation:
Array.push(100);
console.log(Array);

Array.pop();
console.log(Array);

Array.shift();
console.log(Array);


Array.unshift(10);
console.log(Array);



// Array Sorting:
let num=[60, 40, 30, 20, 50, 10, 70, 80, 90, 99]

num.sort((a,b) => a - b);
console.log(num);
num.sort((a,b) => b - a);
console.log(num);




// Array Transformation:
// Create a new array where each element is the square of the corresponding element in the original array using map.

let element=["virat ", "smriti", "ashwin", "jadeja", "vinay"]
element.map((item) => console.log(item.toUpperCase()));


// Array Filtering:
// Create a new array that contains only the even numbers from the original array using filter.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

let even = numbers.filter((item) => item % 2 === 0);
console.log(even);

// Array Reduction:
// Calculate and display the sum of all elements in the array using reduce.
let num1=[60, 40, 30, 20, 50, 10, 70, 80, 90, 99]
let sum= num1.reduce((previousValue, currentValue) => previousValue + currentValue,0);
console.log(sum);