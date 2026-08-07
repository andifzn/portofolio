gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
    ".skills-items",
    {
        y: 100,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 0.1,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".skills-content",
            start: "top 80%",
            once: true,
        },
    },
);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
    },
});

ScrollTrigger.matchMedia({
    // 1. KHUSUS DESKTOP (Layar lebih besar dari 768px)
    "(min-width: 1024px)": function () {
        gsap.from(".hero-text", {
            delay: 1,
            duration: 2,
            y: 100,
            opacity: 0,
        });

        gsap.from(".hero-image", {
            delay: 1,
            duration: 2,
            x: 100,
            opacity: 0,
        });

        gsap.from(".navbar", {
            duration: 1.5,
            y: -100,
            opacity: 0,
        });

        // 1. KONDISI AWAL (Dari mana)
        gsap.fromTo(
            ".services-card",
            {
                y: 100,
                opacity: 0,
            },
            // 2. KONDISI AKHIR (Ke mana)
            {
                y: 0,
                opacity: 1,
                duration: 0.1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".content-header",
                    start: "top 80%",
                    once: true, // Hanya perlu dimainkan sekali
                },
            },
        );

        tl.fromTo(
            ".about-image",
            {
                x: -300,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
            },
        );
        tl.fromTo(
            ".about-main-header",
            {
                x: 300,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
            },
        );

        tl.fromTo(
            ".about-stagger",
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.2,
                stagger: 0.1,
            },
        );
    },

    // 2. KHUSUS MOBILE (Layar 768px ke bawah)
    "(max-width: 1023px)": function () {
        const heroTl = gsap.timeline({
            defaults: { ease: "power3.out", duration: 0.8 },
        });
        // Buat GSAP Timeline untuk Hero Section
        heroTl
            // 1. Navbar turun halus
            .from(".navbar", {
                y: -50,
                opacity: 0,
            })

            // 2. Foto Hero masuk dari kanan
            .from(
                ".hero-image",
                {
                    x: 50,
                    opacity: 0,
                    duration: 1,
                },
                "-=0.4",
            )

            // 3. Teks "Hello", Nama, & Role (h1, h2, h3) muncul berurutan dari bawah
            .from(
                ".hero-text h1, .hero-text h2, .hero-text h3",
                {
                    y: 30,
                    opacity: 0,
                    stagger: 0.25,
                },
                "-=0.6",
            )

            // 4. Paragraf deskripsi
            .from(
                ".hero-text p",
                {
                    y: 20,
                    opacity: 0,
                },
                "-=0.2",
            )

            // 5. Tombol CTA muncul membal (pop-out)
            .from(
                ".hero-cta",
                {
                    scale: 0.8,
                    opacity: 0,
                    ease: "back.out(1.7)",
                },
                "-=0.3",
            );

        gsap.utils.toArray(".services-card").forEach((card) => {
            gsap.fromTo(
                card,
                { y: -150, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 100%",
                        once: true,
                    },
                },
            );
        });

        tl.fromTo(
            ".about-main-header",
            {
                y: 300,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
            },
        );

        tl.fromTo(
            ".about-stagger",
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
    },
});
