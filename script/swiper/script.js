let swiper = new Swiper(".swipper", {
    effect: "coverfl    ow",
    coverflowEffect: {
        rotate: 0, //sudut rotasi slide samping
        stretch: 0, // jarak horizontal antar slide
        depth: 0, // kedalaman efek 3D
        modifier: 1, // seberapa kuat efek 3D-nya
        slideShadows: false,
    },
    loop: true,
    speed: 1000,
    grabCursor: "true",
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 40, 
            centeredSlides: false, 
        },
    },
});