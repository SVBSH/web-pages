const hamburger = document.querySelector(".main-nav__hamburger");
const mainNav = document.querySelector(".main-nav");

hamburger.addEventListener("click", (e) => {
  mainNav.classList.toggle('main-nav--open');
});
