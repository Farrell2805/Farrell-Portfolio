const burger = document.getElementById("burger");
const navbarMenu = document.getElementById("navbar-menu");
const closeIcon = document.getElementById("close");
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach(link => 
    link.addEventListener("click",() => {
        navbarMenu.classList.add('hidden')
    })
)

burger.addEventListener("click",() => {
    navbarMenu.classList.remove('hidden')
})

closeIcon.addEventListener("click",() => {
    navbarMenu.classList.add('hidden')
})

const scrollUp = () => {
    const scrollupbtn = document.getElementById("scrollUp");

    if(this.scrollY >= 250){
        scrollupbtn.classList.remove("-bottom-1/2");
        scrollupbtn.classList.add("bottom-4");
    } else {
        scrollupbtn.classList.add("-bottom-1/2");
        scrollupbtn.classList.remove("bottom-4");
    }
}
window.addEventListener('scroll',scrollUp);

const scrollHeader = () => {
    const header = document.getElementById("header");

    if(this.scrollY >= 250){
        header.classList.add("border-b","border-secondary");
    } else {
        header.classList.remove("border-b","border-secondary");
    }
}
window.addEventListener('scroll',scrollHeader);

const html = document.querySelector("html");
const theme = document.getElementById("theme");

if(localStorage.getItem("mode") == "dark"){
    darkMode();
} else {
    lightMode();
}


theme.addEventListener('click', (e) => {
    if(localStorage.getItem("mode") == "light"){
        darkMode();
    } else {
        lightMode();
    }
    
})

function darkMode(){
    html.classList.add("dark");
    theme.classList.replace("ri-moon-line","ri-sun-line");
    localStorage.setItem("mode","dark");
}

function lightMode (){
    html.classList.remove("dark");
    theme.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode","light");
}

const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav__link");

    let current = 'home';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (this.scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((item) => {
        item.classList.remove("text-secondary");
        if (item.href.includes(current)) {
            item.classList.add("text-secondary");
        }
    });
};

window.addEventListener('scroll',activeLink);

const sr = ScrollReveal({
    origin : "top",
    distance : "60px",
    duration : 2500,
    delay : 400
})

sr.reveal(".home__image");
sr.reveal(".home__content", {origin: "bottom"});
sr.reveal(".about");
sr.reveal(".projects__card", { origin: "left", interval: 200 });
sr.reveal(".skill", {origin:"bottom"});
sr.reveal(".contact")

