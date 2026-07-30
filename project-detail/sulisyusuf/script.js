
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

window.addEventListener("load", () => {
    const loader = document.getElementById("loading-screen");
    if (loader) {
        // Beri efek fade-out halus
        loader.classList.add("hide");
        
        // Hapus dari DOM setelah efek transisi 0.5 detik selesai
        setTimeout(() => {
            loader.style.display = "none";
        }, 400);
    }
});