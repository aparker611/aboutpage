$(document).ready(function() {
  $('div.header').parallax();
  $('div.show-grid').slick({
    infinite: true,
    autoplay: true,
    arrows:   true,
    dots:     true,
    slidesToShow: 2
  })

});
