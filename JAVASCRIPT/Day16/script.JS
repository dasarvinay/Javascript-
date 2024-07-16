
// const btn = document.querySelector("#btn")

// btn.addEventListener('click',(evt) => {
//     console.log("Clicking on it1");
// })
// btn.addEventListener('click',(evt) => {
//     console.log("Clicking on it2");
// })
// btn.addEventListener('click',(evt) => {
//     console.log("Clicking on it3");
// })



// const removedHandling = (evt) => {
//     console.log(" remove Clicking on it2");
// }
// btn.addEventListener("click", removedHandling());
// btn.removeEventListener("click", removedHandling());



let toggle = document.querySelector("#btn");
let mode = false;

toggle.addEventListener("click",()=>{
    if(mode === false){
        document.querySelector("body").style.backgroundColor="black";
        mode = true;
    }else{
        document.querySelector("body").style.backgroundColor="white";
        mode = false;
    }
})

