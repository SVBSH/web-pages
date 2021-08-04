const menuControl = document.querySelector(".menu-control");
const menuHamburger = document.querySelector(".menu-control__hamburger");
const menuClose = document.querySelector(".menu-control__close");
const menuNav = document.querySelector(".nav");

const track = document.querySelector(".feedback__card-container");
const slides = Array.from(track.children);

const trackNav = document.querySelector(".feedback__nav");
const trackNavChildren = Array.from(trackNav.children);


const toggleNav = () => {
  menuHamburger.classList.toggle("is-hidden");
  menuClose.classList.toggle("is-hidden");
  menuNav.classList.toggle("is-hidden");
}

const updateIndicator = (prevIndicator, targetIndicator) => {
  prevIndicator.classList.remove("current-slide");
  targetIndicator.classList.add("current-slide");
}

const updateSlide = (prevSlide, targetSlide) => {
  prevSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
}

const moveSlide = (track, targetSlideIndex) => {
  const slideWidth = track.getBoundingClientRect().width;

  console.log(slideWidth * targetSlideIndex);
  track.style.transform = "translateX(-" + slideWidth * targetSlideIndex + "px)";
}


// slides.forEach(setSlidePosition);

// Event listeners
/* Show and hide menu after click */
menuControl.addEventListener("click", () => toggleNav());
/* Mode slides */
trackNav.addEventListener("click", e => {
  const targetDot = e.target.closest("button");
  if (!targetDot) {
    return;
  }
  const prevDot = trackNav.querySelector(".current-slide");
  const prevSlide = track.querySelector(".current-slide");

  // Remove active status from current slide
  let targetSlideIndex = trackNavChildren.findIndex(
    slide => slide === e.target
  );
  let targetSlide = slides[targetSlideIndex];

  updateIndicator(prevDot, targetDot);
  updateSlide(prevSlide, targetSlide);
  moveSlide(track, targetSlideIndex);
});
