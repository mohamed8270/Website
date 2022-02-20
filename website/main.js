const nav =document.querySelector("nav");

const mobilenav = document.querySelector("nav.mobile-nav");

window.addEventListener("scroll",()=> {
    if (window.pageYOffset>60) {
        nav.classList.add("scrolled");
        mobilenav.classList.add("scrolled");
    }    else{
            nav.classList.remove("scrolled");
            mobilenav.classList.remove("scrolled");
        }
});