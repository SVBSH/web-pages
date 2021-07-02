const hamburger = document.querySelector(".main-nav__hamburger");
const mainNav = document.querySelector(".main-nav");
const navList = document.querySelector('.main-nav__list');


hamburger.addEventListener("click", (e) => {
  // Set menu icon
  if (mainNav.classList.toggle('main-nav--open')) {
    hamburger.src = '../images/icon-close.svg';
  } else {
    hamburger.src = '../images/icon-hamburger.svg';
  }
  // Run animation on menu
  navList.classList.toggle('tracking-in-expand');
});
