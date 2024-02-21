// ------------------------- menu ----------------------- //
/* stiki nav bar */
const ul = document.getElementById('ul')
const hamburger = document.getElementById('ham')

hamburger.addEventListener('click', ()=>{
    ul.classList.toggle('active')
})

/* active link scrolling */

const navLinks = document.querySelectorAll('.nav_link')
const sections = document.querySelectorAll('section')

let currentSection = 'home'

window.addEventListener('scroll', ()=>{
    sections.forEach(section =>{
        if(window.scrollY >= section.offsetTop){
            currentSection = section.id
        }
    })

    navLinks.forEach(nav_link =>{
        if(nav_link.href.includes(currentSection)){
            document.querySelector('.active').classList.remove('active')
            nav_link.classList.add('active')
        }
    })
})