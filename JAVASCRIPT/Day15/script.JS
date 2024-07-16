function newClass(name){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(name));
    document.querySelector(".language").appendChild(li)
}
newClass("Power System1")
newClass("Power System2")
newClass("Electrical power")

// updates  or add

// pseudo selector
const secondLang = document.querySelector("li:nth-child(2)");
secondLang.innerHTML="python";

const newli = document.createElement("li")
newli.textContent="Oops";
secondLang.replaceWith(newli)


const firstlang=document.querySelector("li:first-child");
firstlang.outerHTML="<li>Angular</li>"

// remove
const lastLang = document.querySelector("li:last-child");
lastLang.remove();