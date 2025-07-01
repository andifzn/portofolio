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
    strings: ["Front End Developer", "PC - Laptop Repair", "UI / UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    showCursor: true,
    cursorChar: "|",
    loop: true,
});

var typed = new Typed("#about-element", {
    strings: ["Front End Developer", "PC - Laptop Repair", "UI / UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    showCursor: true,
    cursorChar: "|",
    loop: true,
});

const inputs = document.querySelectorAll(".input");

inputs.forEach((input) => {
    // Tambahkan class "filled" saat ada isi
    input.addEventListener("input", () => {
        if (input.value.trim() !== "") {
            input.classList.add("filled");
        } else {
            input.classList.remove("filled");
        }
    });

    // Jalankan sekali saat halaman load (kalau ada value sebelumnya)
    if (input.value.trim() !== "") {
        input.classList.add("filled");
    }
});

// Portofolio Button Section
const buttons = document.querySelectorAll(".buttons button");
const sections = document.querySelectorAll(".project-section");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-section");

        sections.forEach((section) => {
            section.classList.remove("active");
        });

        document.getElementById(targetId).classList.add("active");
    });
});
