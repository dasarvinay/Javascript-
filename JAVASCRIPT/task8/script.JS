// 1. Using setTimeout

setTimeout(() => {
    console.log("Hello, world!");
}, 3000);

// 2. Using setInterval.

setInterval(() => {
    console.log("Tick");
}, 2000);

// 3. Clear Interval

let tickCount = 0;
const intervalId = setInterval(() => {
    console.log("Tick");
    tickCount++;
    if (tickCount === 5) {
        clearInterval(intervalId);
    }
}, 2000);



// 4. Simple Callback Function

function greet(name) {
    console.log(`Hello, ${name}!`);
}
function processUserInput(callback, name) {
    callback(name);
}
processUserInput(greet, "vinay");


// 5. Using Callbacks with Timing Functions

function printHello() {
    console.log("Hello");
    setTimeout(() => {
        console.log("World!");
    }, 2000);
}
setTimeout(printHello, 1000);



// 1. What did you learn about JavaScript timing events and callbacks through this
// task?
// Answer-Through this task, I learned that JavaScript timing events like setTimeout and setInterval execute code after a delay or at repeated intervals. Both use callbacks, which are functions passed to be run later. setTimeout runs the callback once after a delay, while setInterval runs it repeatedly at specified intervals until stopped.

// ---------------------------------------------------------------------

// 2. How do setTimeout and setInterval differ in their usage?
// Answer-
// setTimeout- Is used to execute a callback function once after a specified delay. It's useful for scheduling a single future task

// syntax
// setTimeout(() => {
    
// }, timeout);

// setInterval- is used to repeatedly execute a callback function at specified intervals until it's explicitly stopped using clearInterval. It's useful for scheduling recurring tasks

// syntax
// setInterval(() => {
    
// }, interval);

// ------------------------------------------------------------------------


// 3. What are the advantages of using callbacks in JavaScript?
// Answer-
// Asynchronous Operations: Callbacks enable asynchronous programming, allowing functions to return immediately and continue execution without waiting for long-running tasks to complete. This is crucial for tasks like network requests, file I/O, and timers
