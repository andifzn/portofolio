gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    // 1. KHUSUS DESKTOP (Layar lebih besar dari 768px)
    "(min-width: 1024px)": function () {
        const tl = gsap.timeline({
            defaults: { ease: "power3.out", duration: 1 },
        });

        tl.from(".navbar", {
            duration: 1,
            y: -100,
            autoAlpha: 0,
        });

        // 2. Semua Elemen di Dalam Hero Text (Termasuk Navigation & Button)
        tl.fromTo(
            ".hero-text > *",
            { y: 40, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, stagger: 0.15 },
            "-=0.4",
        ); // Dimulai sedikit lebih cepat sebelum nav selesai
        // 3. Hero Image muncul dari kanan + Zoom in tipis
        tl.from(
            ".hero-image",
            {
                x: 50,
                scale: 0.9,
                autoAlpha: 0,
                duration: 1.2,
                ease: "back.out(1.2)", // Efek membal halus di akhir
            },
            "-=0.8",
        );

        gsap.to(".hero-image", {
            y: 12,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        // About Project
        const about = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-container",
                start: "top 50%",
                toggleActions: "play none none none",
                once: true,
            },
        });

        about.fromTo(
            ".about-content",
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
            },
        );

        // Project Gallery
        const gallery = gsap.timeline({
            scrollTrigger: {
                trigger: ".gallery",
                start: "top 80%",
                toggleActions: "play none none none",
                once: true,
            },
        });

        gallery.fromTo(
            ".gallery-header",
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
            },
        );

        gsap.from(".gallery-content", {
            y: 80,
            autoAlpha: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".gallery-content",
                start: "top 80%", // Animasi mulai saat bagian atas gallery mencapai 80% layar
                toggleActions: "play none none",
                once: true,
            },
        });

        // 2. Animasi Stagger untuk setiap slide di dalamnya
        gsap.from(".gallery-content .swiper-slide", {
            scale: 0.8,
            autoAlpha: 0,
            duration: 1,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
                trigger: ".gallery-content",
                start: "top 75%",
                toggleActions: "play none none",
                once: true,
            },
        });

        // More Information
        const information = gsap.timeline({
            scrollTrigger: {
                trigger: ".more-information-container",
                start: "top 50%",
                toggleActions: "play none none none",
                once: true,
            },
        });

        information.fromTo(
            ".information-content",
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
            },
        );

        // Hire Me
        const hireMe = gsap.timeline({
            scrollTrigger: {
                trigger: ".hire-me",
                start: "top 80%",
                toggleActions: "play none none none",
                once: true,
            },
        });

        hireMe.from(".hire-me-container", {
            scale: 0.3, // Mulai dari ukuran sangat kecil (30%)
            autoAlpha: 0, // Sembunyi & transparan di awal
            duration: 1,
            ease: "back.out(1.2)",
        });
    },

    "(max-width: 1023px)": function () {
        // gsap.utils.toArray(".services-card").forEach((card) => {
        //     gsap.fromTo(
        //         card,
        //         { y: -150, opacity: 0 },
        //         {
        //             y: 0,
        //             opacity: 1,
        //             duration: 0.1,
        //             ease: "power3.out",
        //             scrollTrigger: {
        //                 trigger: card,
        //                 start: "top center",
        //                 once: true,
        //             },
        //         },
        //     );
        // });
    },
});

const navBtn = document.querySelector(".navigation");
const heroBtn = document.querySelector(".hero-button");

if (navBtn) {
    // Animasi Hover In
    navBtn.addEventListener("mouseenter", () => {
        gsap.to(navBtn, { scale: 1.15, duration: 0.2, ease: "power2.out" });
    });

    // Animasi Hover Out
    navBtn.addEventListener("mouseleave", () => {
        gsap.to(navBtn, { scale: 1, duration: 0.2, ease: "power2.out" });
    });
}

if (heroBtn) {
    // Animasi Hover In
    heroBtn.addEventListener("mouseenter", () => {
        gsap.to(heroBtn, { scale: 1.15, duration: 0.2, ease: "power2.out"});
    });

    // Animasi Hover Out
    heroBtn.addEventListener("mouseleave", () => {
        gsap.to(heroBtn, { scale: 1, duration: 0.2, ease: "power2.out" });
    });
}