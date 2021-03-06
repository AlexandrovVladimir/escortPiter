(function (){
    $('.girls__viewport').slick({
        autoplay: true,
        autoplaySpeed: 750,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 16,
        slidesToScroll: 1,
        responsive: [
            // {
            //     breakpoint: 2401,
            //     settings: {
            //         slidesToShow: 21,
            //         slidesToScroll: 1
            //     }
            // },
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

    //district and
    //metro
    const district = document.querySelector('.district');
    const metro = document.querySelector('.metro');
    const town = document.querySelector('.header__town');

    district.addEventListener('click', function(e) {
        if (this.classList.contains('district__open')) {
            this.classList.remove('district__open');
            this.lastElementChild.style.display = 'none';
        } else {
            this.classList.add('district__open');
            this.lastElementChild.style.display = 'flex';
            metro.classList.remove('district__open');
            metro.lastElementChild.style.display = 'none';
        }
    });
    metro.addEventListener('click', function(e) {
        if (this.classList.contains('metro__open')) {
            this.classList.remove('metro__open');
            this.lastElementChild.style.display = 'none';
        } else {
            this.classList.add('metro__open');
            this.lastElementChild.style.display = 'flex';
            district.classList.remove('district__open');
            district.lastElementChild.style.display = 'none';
        }
    });

    town.querySelector('.header__town-select').addEventListener('click', function(e) {
        if (this.parentNode.classList.contains('header__town-open')) {
            this.parentNode.classList.remove('header__town-open');
            this.nextElementSibling.style.display = 'none';
        } else {
            this.parentNode.classList.add('header__town-open');
            this.nextElementSibling.style.display = 'flex';
        }
    });
    //district and
    //metro

    //mobile menu
    $('.burger').click(function() {
        $(this).parent().next().toggle('fast');
    });


    //checkbox target
    // $('.settings .checkbox-wrap').on('click', '.checkbox__input', function () {
    //     window.open('http://google.com');
    // });

    $(window).resize(function(){
        if ($(window).width() > 900) {
            $('.sidebar').css('display', 'block');
        }
    });
})();

window.onload = function () {
    $('.girls__image img').css('display', 'block');
};