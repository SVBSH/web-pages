document.addEventListener("DOMContentLoaded", function () {
  const mainNav = document.querySelector(".header__nav");
  const menu = document.querySelector(".header__menu");

  menu.addEventListener("click", (e) => {
    const menuStatus = JSON.parse(mainNav.getAttribute("data-menu-active"));
    mainNav.setAttribute("data-menu-active", !menuStatus);
    // Enable/Disable menu scroll and change menu icon to 
    // open menu icon/closed menu icon
    if (!menuStatus === true) {
      menu.style.backgroundImage = "url(./images/icons/icon-close.svg)";
    } else {
      menu.style.backgroundImage = "url(./images/icons/icon-hamburger.svg)";
    }
  });
});
