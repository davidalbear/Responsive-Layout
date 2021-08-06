// import navbar from "./dom/navbar.js";
// const d = document;

// d.addEventListener('click' , e => {
//     navbar("nav__toggle",".main-nav")
// })


const d = document;
const navBtn = d.getElementById('btnNavOpen');
const navMenu =  d.querySelector('.main-nav');


navBtn.addEventListener('click',e =>{
  navMenu.classList.toggle('is-active');
})
