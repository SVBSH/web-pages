const navAngles = document.querySelector(".galery__btn-container");
const buttonLeft = navAngles.querySelector(".galery__btn--left");
const buttonRight = navAngles.querySelector(".galery__btn--right");

const galery = document.querySelector('.galery__list');

const offers = document.querySelector(".main__offer-container");

const changeOffer = (currentOffer, targetOffer, currentImg) => {
    currentOffer.classList.remove("main__offer--active");
    targetOffer.classList.add("main__offer--active");

    // const nextImg = currentImage.nextElementSibling;
    // currentImage.classList.remove('galery__item--active');
    // nextImg.classList.add('galery__item--active');
};


navAngles.addEventListener("click", (e) => {
  const targetBtn = e.target.closest(".galery__btn");
  const currentOffer = offers.querySelector(".main__offer.main__offer--active");

  const currentImage = galery.querySelector('.galery__item--active');
  // Left arrow
  if (targetBtn.classList.contains("galery__btn--left")) {
    const prevOffer = currentOffer.previousElementSibling;
    if (!prevOffer) {
        return;
    }
    // Change active state main__offer element
    currentOffer.classList.remove("main__offer--active");
    prevOffer.classList.add("main__offer--active");

    // Change image
    const prevImg = currentImage.previousElementSibling;
    currentImage.classList.remove('galery__item--active');
    prevImg.classList.add('galery__item--active');
  // Right arrow
  } else {
    const nextOffer = currentOffer.nextElementSibling;
    if (!nextOffer) {
      return;
    }
    // Change active state of main__offer element
    currentOffer.classList.remove("main__offer--active");
    nextOffer.classList.add("main__offer--active");

    // Change image
    const nextImg = currentImage.nextElementSibling;
    currentImage.classList.remove('galery__item--active');
    nextImg.classList.add('galery__item--active');
  }
});
