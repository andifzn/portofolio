let swiper = new Swiper(".swipper", {
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0, //sudut rotasi slide samping
        stretch: 0, // jarak horizontal antar slide
        depth: 0, // kedalaman efek 3D
        modifier: 1, // seberapa kuat efek 3D-nya
        slideShadows: true,
    },
    loop: true,
    speed: 1000,
    grabCursor: "true",
    spaceBetween: 30,
    centeredSlides: true,
    mousewheel: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});