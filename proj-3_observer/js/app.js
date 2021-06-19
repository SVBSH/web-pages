const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const sectionTwo = document.querySelector(".sec-2");
const sectionTwoPar = document.querySelector(".par");


const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    // treshold: 1,
    rootMargin: "0px 0px -300px 0px" 
};

const appearOnScroll = new IntersectionObserver(
function(
    entries, 
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});




const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
  // treshold: .5
};

const sectionOneObserver = new IntersectionObserver(
  (entries, sectionOneObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("nav-scrolled");
      } else {
        header.classList.remove("nav-scrolled");
      }
    });
  },
  sectionOneOptions
);

sectionOneObserver.observe(sectionOne);

const sectionTwoOptions = {
  rootMargin: "-100px",
  // treshold: 0.5
};

const sectionTwoObserver = new IntersectionObserver(
  (entries, sectionTwoObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // sectionTwoPar.style.setProperty("transform", "translateX(0%)");
        // sectionTwoPar.classList.add("move");
      } else {
        // sectionTwoPar.style.setProperty("transform", "translateX(-80%)");
        // sectionTwoPar.classList.remove("move");
      }
    });
  },
  sectionTwoOptions
);

sectionTwoObserver.observe(sectionTwo);
