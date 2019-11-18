$(document).ready(function(){
  $('.gallery-container__main-slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    centerPadding: "0px",
    dots: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: false
        }
      },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false
      }
    }
    ]
  });
});
