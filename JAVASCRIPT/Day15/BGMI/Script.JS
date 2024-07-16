const buttons = document.querySelectorAll('.Button');
console.log(buttons);
const body = document.querySelector("body")


buttons.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
    body.style.backgroundColor = e.target.id;
    });
});

