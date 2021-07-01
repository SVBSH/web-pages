const hamburger = document.querySelector(".main-nav__hamburger");
const mainNav = document.querySelector(".main-nav");

hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("open");

  if (hamburger.classList.contains("open")) {
    hamburger.src = "images/icon-close.svg";
    mainNav.style.transform = "translateY(0%)";
  } else {
    hamburger.src = "images/icon-hamburger.svg";
    mainNav.style.transform = "translateY(-100%)";
  }
});
