// !Подключение swiper.js
new Swiper(".swiper", {
  // !Стрелки
  navigation: {
    nextEl: ".portfolio__arrow--right",
    prevEl: ".portfolio__arrow--left",
    disabledClass: "portfolio__arrow--disable",
  },
  breakpoints: {
    480: {
      grid: {
        fill: "row",
        rows: 2,
      },
    },
    768: {
      grid: {
        fill: "row",
        rows: 2,
      },
      slidesPerView: 2,
    },
  },
});

$(".header__contacts-burger").click(function () {
  $(".header__contacts").slideToggle();
});

$(".present__order-btn").click(() => {
  $(".page__overlay--modal-callback").fadeIn(400).css("display", "flex");
});

$(".modal__close").click(() => {
  $(".page__overlay--modal-callback").fadeOut(400);
});
