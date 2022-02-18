$(document).ready(function($) {
    "use strict";
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });
    // Banner slider
        var $appartmentSlider = $(".appartment-slider");
        $appartmentSlider.owlCarousel({
            loop: false,
            nav: true,
            navText: [
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>',
            ],
            dots: false,
            autoplay: false,
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
        // rich text
         $(function() {
            $('.content').each(function() {
                $(this).richText();  
            });
        });
        
}(jQuery));