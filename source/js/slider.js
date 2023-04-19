import "./swiper-bundle.min.js";

const swiper = new Swiper(".mySwiper", {
  loop: true,
  watchOverFlow: true,

  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
  },

  spaceBetween: 10,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
});
