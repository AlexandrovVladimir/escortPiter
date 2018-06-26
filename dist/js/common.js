(function (){
    $('.girls__viewport').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 16,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 12,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //    anchor top
    $(".anchor").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    //    anchor top
})();