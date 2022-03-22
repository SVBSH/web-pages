
function registerPrimaryMenu() {

  const menuButton = document.querySelector('.header__menu');
  const primaryMenu = document.querySelector('.header__nav-container');
  menuButton.addEventListener('click', togglePrimaryMenu);

  function togglePrimaryMenu(e) {
    if (primaryMenu === null) {
      return;
    }
    menuStatus = JSON.parse(primaryMenu.getAttribute("data-menu-active"));
    primaryMenu.setAttribute('data-menu-active', !menuStatus);
    primaryMenu.classList.toggle('dropdown--open')
  }
}


document.addEventListener("DOMContentLoaded", (e) => {
  registerPrimaryMenu();
});