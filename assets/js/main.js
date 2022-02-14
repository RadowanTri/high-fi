$(document).ready(function($) {
    "use strict";
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
    //   var header = $(".header-area");
    //     $(window).on('scroll', function () {
    //         if ($(this).scrollTop() < 1) {
    //         header.removeClass("nav-fixed");
    //         } else {
    //         header.addClass("nav-fixed");
    //         }
    //     });
     // smartSpeed: 5000,
    // Banner slider
        var $appartmentSlider = $(".appartment-slider");
        $appartmentSlider.owlCarousel({
            loop: true,
            nav: true,
            navText: [
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>',
            ],
            dots: false,
            autoplayTimeout:7000,
            autoplay: true,
            margin: 30,
            responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1399: {
                items: 3,
            },
            }
        });
}(jQuery));