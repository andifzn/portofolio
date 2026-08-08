const isDesktop = window.innerWidth >= 1024;

if (isDesktop) {
    // 2. Inisialisasi Lenis KHUSUS DESKTOP saja
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // 3. Hubungkan Lenis dengan GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // 4. Pengganti requestAnimationFrame biasa (Pakai GSAP Ticker biar fps stabil)
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    // 5. Matikan lag smoothing GSAP biar ga ada delay melompat
    gsap.ticker.lagSmoothing(0);
}
