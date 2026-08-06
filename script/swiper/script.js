let swiper = new Swiper(".swipper", {
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0, //sudut rotasi slide samping
        stretch: 0, // jarak horizontal antar slide
        depth: 0, // kedalaman efek 3D
        modifier: 1, // seberapa kuat efek 3D-nya
        slideShadows: false,
    },
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
            loop: false,
        },
        1150: {
            slidesPerView: 3.4,
        },
        1350: {
            slidesPerView: 4,
        },
    },
});

const gallerySwiper = new Swiper(".gallery-content", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    observer: true,
    observeParents: true,
    resizeObserver: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 80,
        modifier: 1,
        scale: 0.92,
        slideShadows: false,
    },
    autoplay: {
        delay: 3000,
    },

    slidesPerView: 4,

    spaceBetween: 20,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        360: {
            slidesPerView: 1.3,
        },

        450: {
            slidesPerView: 1.5,
        },

        515: {
            slidesPerView: 1.7,
        },

        576: {
            slidesPerView: 2,
        },

        690: {
            slidesPerView: 2.5,
        },

        920: {
            spaceBetween: 15,
            slidesPerView: 3,
        },

        1024: {
            slidesPerView: 1.5,
        },

        1200: {
            slidesPerView:2,
        },
    },
});

