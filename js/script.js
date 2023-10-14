var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  coverflowEffect: {
    rotate: 0,
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
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
  },
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll(".nav__menu__link");

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.closest(".nav__menu") && !target.closest(".hamburger")) {
    closeMenu();
  }
});
