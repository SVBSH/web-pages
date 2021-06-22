const navAngles = document.querySelector('.main-nav__angles');
const buttonLeft = navAngles.querySelector('.arrow__btn--left');
const buttonRight = navAngles.querySelector('.arrow__btn--right');

const offers = document.querySelector('.main__offer-container'); 

const changeOffer = () => {

}

navAngles.addEventListener('click', e => {
    const targetBtn = e.target.closest('.arrow__btn');
    // Left arrow
    if (targetBtn.classList.contains('arrow__btn--left')) {
        console.log('left');

        const currentOffer = offers.querySelector('.main__offer.active');
        const prevOffer = currentOffer.previousElementSibling;
        if (!prevOffer) {
            return;
        }
        
        currentOffer.classList.remove('active');
        prevOffer.classList.add('active');

    // Right arrow
    } else {
        console.log('right');

        const currentOffer = offers.querySelector('.main__offer.active');
        const nextOffer = currentOffer.nextElementSibling;
        if (!nextOffer) {
            return;
        }

        currentOffer.classList.remove('active');
        nextOffer.classList.add('active');
    }
});