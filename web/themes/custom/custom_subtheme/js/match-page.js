(function ($, Drupal, once) {
  Drupal.behaviors.moviePage = {
    attach: function (context, settings) {
      once("slide", ".view-id-match_slider_block", context).forEach(
        (element) => {
          $(".view-id-match_slider_block .view-content").slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            prevArrow:
              '<span class="Slick-Prev arrow"><i class="fa-solid fa-chevron-left"></i></span>',
            nextArrow:
              '<span class="Slick-Next arrow"><i class="fa-solid fa-chevron-right"></i></span>',
          });
        }
      );
    },
  };
})(jQuery, Drupal, once);
