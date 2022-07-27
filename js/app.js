//BURGER MENU
(function () {
  const burgerItem = document.querySelector('.burger--btn');
  const menuClose = document.querySelector('.burger--close');
  const menuLinks = document.querySelectorAll('.burger__inner-links');

  const burger = document.querySelector('.burger')
  const body = document.querySelector('#body')

// відкрити меню 2
const openMenu = () => {
  burger.classList.add('burger--active');
  body.classList.add('body--off');
}

// закрити меню 2 
const closeMenu = () => {
  burger.classList.remove('burger--active');
  body.classList.remove('body--off');
}

burgerItem.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', closeMenu);
}
}());
//SWIPER
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    '@0.00': {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    '@0.75': {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    '@1.00': {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    '@1.50': {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 5000,
  },
});
//FIXED HEADER
$(function() {

  var header = $("#header"),
      introH = $("#intro").innerHeight(),
      scrollOffset = $(window).scrollTop();

      checkScroll(scrollOffset);

  $(window).on("scroll", function() {

      scrollOffset = $(this).scrollTop();

      checkScroll(scrollOffset);
  });

      function checkScroll(scrollOffset) {

      if (scrollOffset >=  introH) {
          header.addClass("header--fixed");
      }
          else {
              header.removeClass("header--fixed");
          }
      }

      //SMOOTH SCROLL

      $("[data-scroll]").on("click", function(event) {
          event.preventDefault();

          var $this = $(this),
              blockId = $this.data('scroll'),
              blockOffset = $(blockId).offset().top;

          $("html, body").animate({
              scrollTop: blockOffset
          }, 500);
      });
});
//video autoplay
document.getElementById('autoplay').play();
