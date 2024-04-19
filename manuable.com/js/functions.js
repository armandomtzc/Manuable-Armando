jQuery(function() {
    jQuery(".ma__quote__shipping__slider").slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.4,
                    slidesToScroll: 1,
                }
            }
        ]
    })
});