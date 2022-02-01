document.addEventListener("DOMContentLoaded", function () {
  const mainNav = document.querySelector(".header__nav");
  const menu = document.querySelector(".header__menu");

  menu.addEventListener("click", (e) => {
    const menuStatus = JSON.parse(mainNav.getAttribute("data-menu-active"));
    mainNav.setAttribute("data-menu-active", !menuStatus);
    // Enable/Disable menu scroll and change menu icon to hamburger-icon/close-icon
    if (!menuStatus === true) {
      menu.style.backgroundImage = "url(./images/icons/icon-close.svg)";
      document.body.style.overflowY = "hidden";
    } else {
      menu.style.backgroundImage = "url(./images/icons/icon-hamburger.svg)";
      document.body.style.overflowY = "auto";
    }
  });
});
