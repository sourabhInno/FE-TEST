(function ($, Drupal, once) {
  Drupal.behaviors.moviePage = {
    attach: function (context, settings) {
      once("slide", ".view-id-match_slider_block", context).forEach(
        (element) => {
          $(".view-id-match_slider_block .view-content").slick({
            arrows: true,
            centerPadding: "0px",
            dots: true,
            slidesToShow: 1,
            infinite: false,
          });
        }
      );
    },
  };
})(jQuery, Drupal, once);
