(function (){
    $('.girls__viewport').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 16,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2401,
                settings: {
                    slidesToShow: 21,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 18,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1801,
                settings: {
                    slidesToShow: 16,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1401,
                settings: {
                    slidesToShow: 12,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 701,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 451,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 351,
                settings: {
                    slidesToShow: 3,
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