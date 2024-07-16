//1. Select Element by ID
// ○ Create an HTML element with a unique ID .
// ○ Use document.getElementById to select the element.
// ○ Change the style of the selected element (e.g., change the background
// color and font size).
 

const uniqueId = document.getElementById("unique")
console.log(unique.innerHTML);
uniqueId.style.background="green",
uniqueId.style.fontSize = '36px';

// 2. Select Elements by Class Name
// ○ Create multiple HTML elements with the same class name..
// ○ Use document.getElementsByClassName to select the elements.
// ○ Change the style of the selected elements (e.g., change the text color).

const Element = document.getElementsByClassName("Element")
for (let i = 0; i < Element.length; i++) {
    Element[i].style.color="violet"
    
}

// 3. Select Elements by Tag Name
// ○ Create multiple HTML elements of the same tag name.
// ○ Use document.getElementsByTagName to select the elements.
// ○ Change the style of the selected elements (e.g., add a border).


const element = document.getElementsByTagName("Element")
for (let i = 0; i < Element.length; i++) {
    Element[i].style.border = '2px solid black';
    
}

// 4. Select Element by Query Selector
// ○ Create an HTML element with a nested structure.
// ○ Use document.querySelector to select a specific element within the
// structure.
// ○ Change the style of the selected element (e.g., change the font style).
const nestedElement = document.querySelector('.parent');
nestedElement.querySelector(".nestedElement").style.fontStyle = 'italic';

// 5. Select Elements by Query Selector All
// ○ Create multiple HTML elements with a similar attribute (e.g., multiple span
// elements with a class item).
// ○ Use document.querySelectorAll to select the elements.

const span = document.querySelectorAll(".item")
console.log(span);


// 6. Change Styles of Selected Elements
// ○ Create a unique element that represents something about you (e.g., a
// favorite quote, hobby, or place).
// ○ Use JavaScript to style this element.

const favorite = document.getElementById('favorite');

favorite.style.backgroundColor = "orange"
favorite.style.textAlign = 'center';
favorite.style.fontSize = '28px';
favorite.style.border = '5px solid black';
favorite.style.borderRadius = '15px';
favorite.style.fontFamily = ' sans-serif';


