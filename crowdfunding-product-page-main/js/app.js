// localStorage.setItem('name', 'svato');
// console.log(localStorage.getItem('name'))

// document.cookie = 'name=svatopluk; expires=' + new Date(2050, 0, 1).toUTCString()
// console.log(document.cookie)

const mainNav = document.querySelector(".menu--btn");

mainNav.addEventListener("click", _ => {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("nav-is-open");
    console.log("click")
    let main = document.querySelector(".main");
    if (main.style.marginTop === "17rem") {
        main.style.marginTop = "13rem";   
    }
    else {
        main.style.marginTop = "17rem";     
    }
});