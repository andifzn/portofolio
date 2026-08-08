gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
    ".skills-items",
    {
        scale: 0.8,
        autoAlpha: 0,
    },
    {
        scale: 1,
        autoAlpha: 1,
        duration: 0.5,
        ease: "back.out(1.2)",
        stagger: 0.08,
        scrollTrigger: {
            trigger: ".skills-content",
            start: "top center",
            once: true,
        },
    },
);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-content",
        start: "top center",
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
                    trigger: ".services-content",
                    start: "top center",
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

        gsap.from(".projects-header", {
            y: 80,
            autoAlpha: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".projects-container",
                start: "top center",
                toggleActions: "play none none",
                once: true,
            },
        });

        gsap.from(".project-content .swiper-slide", {
            scale: 0.8,
            autoAlpha: 0,
            duration: 1,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
                trigger: ".project-content",
                start: "top 60%",
                toggleActions: "play none none",
                once: true,
            },
        });

        // Contact Section
        gsap.from(".contact-header", {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power.out",
            scrollTrigger: {
                trigger: ".contact",
                start: "top 65%",
                toggleActions: "play none none",
                once: true,
            }
        })

        gsap.from(".contact-content", {
            scale: 0.3, // Mulai dari ukuran sangat kecil (30%)
            autoAlpha: 0, // Sembunyi & transparan di awal
            duration: 1,
            ease: "back.out(1.2)",
            stagger: 0.4,
            scrollTrigger: {
                trigger: ".contact-main",
                start: "top 65%",
                toggleActions: "play none none",
                once: true,
            },
        });

        gsap.from(".contact-form", {
            y: -250,
            autoAlpha: 0, // Sembunyi & transparan di awal
            duration: 2,
            ease: "back.out(1.2)",
            scrollTrigger: {
                trigger: ".contact-main",
                start: "top 65%",
                toggleActions: "play none none",
                once: true,
            },
            
        });
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
                    duration: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top center",
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
