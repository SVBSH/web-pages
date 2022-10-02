const navContainer = document.querySelector('.header__container');
const navControl = document.querySelector('.nav-control');



navControl.addEventListener('click', (e) => {
  const previousNavState = JSON.parse(navContainer.getAttribute('data-nav-active'));
  navContainer.setAttribute('data-nav-active', !previousNavState);

  const iconHamburger = navControl.querySelector('.nav-control__img--hamburger');
  const iconClose = navControl.querySelector('.nav-control__img--close');

  iconClose.classList.toggle('hide');
  iconHamburger.classList.toggle('hide');
})
