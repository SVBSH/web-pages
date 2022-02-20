
function getDropdownState(dropdownButton) {
  return JSON.parse(
    dropdownButton.getAttribute('data-active')
  );
}

function setDropdownState(dropdownButton, dropdownState) {
  dropdownButton.setAttribute('data-active', dropdownState);
}

function toggleSecondaryMenu(dropdownButton, dropdown) {
  const dropdownState = getDropdownState(dropdownButton);
  setDropdownState(dropdownButton, !dropdownState)
  const prevMenuHeight = parseFloat(dropdown.style.maxHeight);
  if (prevMenuHeight > 0) {
    dropdown.style.maxHeight = '0px'
    return
  }
  dropdown.style.maxHeight = `${dropdown.scrollHeight}px`;
}

function registerDropdowns(dropdownButtons) {

  dropdownButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const dropdownButton = e.target;
      const dropdown = dropdownButton.nextElementSibling;
      // FIXME validate dropdown
      toggleSecondaryMenu(dropdownButton, dropdown);
    })
  });
}

function closeDropdowns(dropdownButtons) {
  dropdownButtons.forEach(button => {
    const dropdownOpen = getDropdownState(button);
    console.log(`state: ${getDropdownState(button)}`)
    if (dropdownOpen) {
      button.nextElementSibling.style.maxHeight = `0px`;
      setDropdownState(button, false);
    }
  })
} 

function registerPrimaryMenu(dropdownButtons) {

  const menuButton = document.querySelector('.header__menu');
  const primaryMenu = document.querySelector('.header__container');
  menuButton.addEventListener('click', togglePrimaryMenu);

  function togglePrimaryMenu(e) {
    if (primaryMenu === null) {
      return;
    }
    menuStatus = JSON.parse(primaryMenu.getAttribute("data-menu-active"));
    if(menuStatus) {
      closeDropdowns(dropdownButtons);
    }
    primaryMenu.setAttribute('data-menu-active', !menuStatus);
  }
}


document.addEventListener("DOMContentLoaded", (e) => {
  const dropdownButtons = document.querySelectorAll('.dropdown-button');
  registerPrimaryMenu(dropdownButtons)
  registerDropdowns(dropdownButtons);
});