// ------------------------- menu ----------------------- //

const ul = document.getElementById('ul')
const hamburger = document.getElementById('ham')

hamburger.addEventListener('click', ()=>{
    ul.classList.toggle('active')
})