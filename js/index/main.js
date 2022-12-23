$(document).ready(function(){
    $('.IamSajid').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
    });
});
$(document).ready(function(){
  $('.IamSajid123').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    responsive: [
        {
          breakpoint: 1630,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
  
      ]
});
});