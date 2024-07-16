// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// let promise = new Promise(function (reslove,reject){
//     let x = "I know Javascript";
//     let y = "I know Javascript";
//     if (x===y) {
//        reslove(); 
//     } else {
//        reject(); 
//     }
   
// });

// promise
//     .then(function(){       
//         console.log("sucess");
//     })
//     .catch(function(){
//         console.log("faild");
//     })



// function printName(num, name, time){
//     return new Promise((reslove,reject) => {
//         if(num == 2){
//             setTimeout(() => {
//                 console.log(name);
//                 reslove("promise resolved");
//             }, time);
//         } else {
//             console.log("error");
//             reject("promise rejected ");
//         }
//     });
// }   


// function printSomthing() {
//     printName(2, "something", 2000)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("operation completed"))
// }
// printSomthing();



function printVowels(vowel, time){
    return new Promise((reslove) =>{
        setTimeout(() => {
            console.log(vowel);
            reslove("promise resloved")
        }, time);
    });
}


function runPrintVowels() {
    printVowels("runPrintVowels")
    .then(()=> printVowels("a", 5000))  
    .then(()=> printVowels("e", 4000))  
    .then(()=> printVowels("i", 3000))  
    .then(()=> printVowels("o", 2000))  
    .then(()=> printVowels("u", 1000)) ; 
}

runPrintVowels();