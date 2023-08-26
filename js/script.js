var swiper = new Swiper(".results-swiper", {
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 10,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper-opinions", {
  effect: "cards",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
