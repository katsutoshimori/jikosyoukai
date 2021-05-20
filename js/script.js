const mySwiper = new Swiper('.swiper-container',{
    // direction: 'vertical',
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,

    breakpoints: {
        769: {
          slidesPerView: 3,
          spaceBetween: 10
        }
    },

    autoplay: {
        delay:3000
    },


    
    pagination:{
        el: '.swiper-pagination',
    },

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})