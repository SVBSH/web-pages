const hamburger = document.querySelector('.hamburger');
const menuCross = document.querySelector('.menu-closed');
const mainNav = document.querySelector('.nav');

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('.menu-control').addEventListener('click', () => toggleNav());
});


function toggleNav() {
    hamburger.classList.toggle('is-hidden');
    menuCross.classList.toggle('is-hidden');
    mainNav.classList.toggle('nav--active');
}
