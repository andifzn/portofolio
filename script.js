const navbarMenu = document.querySelector(".navbar-menu");
const hamburgerMenu = document.getElementById("hamburger-menu");

const isDesktop = window.innerWidth >= 1024;

if (isDesktop) {
  // 2. Inisialisasi Lenis KHUSUS DESKTOP saja
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  // 3. Hubungkan Lenis dengan GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  // 4. Pengganti requestAnimationFrame biasa (Pakai GSAP Ticker biar fps stabil)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  // 5. Matikan lag smoothing GSAP biar ga ada delay melompat
  gsap.ticker.lagSmoothing(0);
}
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
        "Full Stack Web Developer",
        "PC - Laptop Repair",
        "UI / UX Designer",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    showCursor: true,
    cursorChar: "|",
    loop: true,
});

var typed = new Typed("#about-element", {
    strings: [
        "Full Stack Web Developer",
        "PC - Laptop Repair",
        "UI / UX Designer",
    ],
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

window.addEventListener("load", () => {
    const loader = document.getElementById("loading-screen");
    if (loader) {
        // Beri efek fade-out halus
        loader.classList.add("hide");

        // Hapus dari DOM setelah efek transisi 0.5 detik selesai
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});
