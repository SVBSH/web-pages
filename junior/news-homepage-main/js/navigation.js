const navControl = document.querySelector('.nav-control');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header')

console.log(navControl)

navControl.addEventListener('click', (e) => {

  const att = navControl.getAttribute('active')
  navState = header.dataset.active;

  if (navState === "true") {
    header.dataset.active = false;
  } else {
    header.dataset.active = true;
  }
})