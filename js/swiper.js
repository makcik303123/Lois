import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const swiper = new Swiper(".products__swiper", {
  // Optional parameters
  direction: "horizontal",

  // slidesPerView: "auto",
  loop: true,
  // If we need pagination
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 1,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    476: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      //   spaceBetween: 40,
    },
  },
});

const swiperLoys = new Swiper(".collection__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },

  centeredSlides: true,

  slidesPerView: 1,
  spaceBetween: 110,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    476: {
      slidesPerView: 3,
      spaceBetween: 70,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 5,
      spaceBetween: 90,
    },

    1280: {
      slidesPerView: 5,
      spaceBetween: 90,
    },
    // when window width is >= 640px
  },
});
