document.addEventListener("DOMContentLoaded", function () {
  const menuControl = document.querySelector(".menu-control");
  const menuHamburger = document.querySelector(".menu-control__hamburger");
  const menuClose = document.querySelector(".menu-control__close");
  const menuNav = document.querySelector(".nav");

  const carousel = document.querySelector(".la");
  const carouselChildren = Array.from(carousel.children);
  let carouselElemWidth = carousel.getBoundingClientRect().width;

  const carouselNav = document.querySelector('.feedback__nav');
  const carouselNavChildren= Array.from(carouselNav.children);

  menuControl.addEventListener("click", () => toggleNav());

  carouselNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) {
      return;
    }

    let prevDot = carouselNav.querySelector('.current-slide');
    let prevSlide = carousel.querySelector('.current-slide');

    // Remove active status from current slide 
    let targetIndex = carouselNavChildren.findIndex(slide => slide === e.target);
    let targetSlide = carouselChildren[targetIndex];
    // Update indicator
    prevDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
    // Update slide
    prevSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
    // Move slide
    carousel.style.transform = "translateX(-" + targetSlide.style.left + ")";
  })


  carouselChildren.forEach((node, index) => {
    node.style.left = carouselElemWidth * index + 'px';
  });



  function toggleNav() {
    menuHamburger.classList.toggle("is-hidden");
    menuClose.classList.toggle("is-hidden");
    menuNav.classList.toggle("is-hidden");
  }
});
