


let parent = document.querySelector(".parent");
// console.log(parent.children[0].innerText);
for (let i = 0; i < parent.children.length; i++) {
   console.log(parent.children[i].innerText);
    
}

console.log(parent.firstElementChild.innerText);
console.log(parent.lastElementChild.innerText);

const dayOne = document.querySelector(".day")
console.log(dayOne.nextElementSibling);
console.log(dayOne.parentElement.innerText);