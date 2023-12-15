import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  // loop: true,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
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
