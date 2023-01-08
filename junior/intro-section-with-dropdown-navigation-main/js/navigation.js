const navControl = document.querySelector('.nav-control');
const nav = document.querySelector('.nav');
let navPopupBtnList;


function navToggle(e) {
  
  navControl.classList.toggle('item-list-closed');

  const prevState = nav.getAttribute('data-active');
  nav.setAttribute('data-active', !(prevState === 'true'));
}

function manageBtnState(event) {
  const parentNavList = event.target.parentNode;
  const prevBtnState = event.target.getAttribute('aria-expanded');
  event.target.setAttribute('aria-expanded', !(prevBtnState === 'true'))
  parentNavList.classList.toggle('item-list-closed');
}

function registerPopups(navigation) {
  navPopupBtnList = Array.from(navigation.querySelectorAll('.nav__popup[aria-expanded]'))
  navPopupBtnList.forEach(button => button.addEventListener('click', manageBtnState));
}


document.addEventListener('DOMContentLoaded', () => {
  navControl.addEventListener('click', navToggle);
  registerPopups(nav);
})




