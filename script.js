const menu = document.querySelector(".menu");

const nav_lists = document.querySelector(".nav_lists");

const section_space = document.querySelector(".section_space");

const d = document.querySelector(".d");

menu.addEventListener('click', ()=>{
    nav_lists.classList.toggle('show');
    d.classList.toggle('section_space');
});