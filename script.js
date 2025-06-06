const navbarMenu = document.querySelector(".navbar-menu");
const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("pop-up");
});

document.addEventListener("click", (e) => {
    if (
        navbarMenu.classList.contains("pop-up") &&
        !navbarMenu.contains(e.target) &&
        !hamburgerMenu.contains(e.target)
    ) {
        navbarMenu.classList.remove("pop-up");
    }
});

var typed = new Typed("#element", {
    strings: [
        "Front End Developer",
        "PC-Laptop Repair",
        "UI / UX Designer",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    showCursor: true,
    cursorChar: '|',
    loop: true,
});
