

function getDropdownState(dropdownButton) {
  return JSON.parse(
    dropdownButton.getAttribute('data-active')
  );
}

function setDropdownState(dropdownButton, dropdownState) {
  dropdownButton.setAttribute('data-active', dropdownState);
}

function toggleDropdown(dropdownButton, dropdown) {
  const dropdownState = getDropdownState(dropdownButton);
  setDropdownState(dropdownButton, !dropdownState)
  dropdown.classList.toggle('dropdown--open');
}

function registerDropdowns(dropdownButtons) {
  dropdownButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const dropdownButton = e.target;
      const dropdown = dropdownButton.nextElementSibling;
      // FIXME validate dropdown
      toggleDropdown(dropdownButton, dropdown);
    })
  });
}

function closeAllDropdown(dropdownButtons) {
  dropdownButtons.forEach(button => {
    const dropdownOpen = getDropdownState(button);
    if (dropdownOpen) {
      setDropdownState(button, false);
      button.nextElementSibling.classList.remove('dropdown--open');
    }
  })
} 

function registerPrimaryMenu(dropdownButtons) {

  const menuButton = document.querySelector('.header__menu');
  const primaryMenu = document.querySelector('.header__nav-container');
  menuButton.addEventListener('click', togglePrimaryMenu);

  function togglePrimaryMenu(e) {
    if (primaryMenu === null) {
      return;
    }
    menuStatus = JSON.parse(primaryMenu.getAttribute("data-menu-active"));
    primaryMenu.setAttribute('data-menu-active', !menuStatus);
    // If main menu should by closed, then close all dropdowns
    if(!menuStatus) {
      closeAllDropdown(dropdownButtons);
    }
  }
}


document.addEventListener("DOMContentLoaded", (e) => {
  const dropdownButtons = document.querySelectorAll('.dropdown__btn');
  registerPrimaryMenu(dropdownButtons);
  registerDropdowns(dropdownButtons);
});