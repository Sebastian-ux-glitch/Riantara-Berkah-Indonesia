$(document).ready(function() {
    // Menu toggle functionality
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar ul').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function() {
        $('#menu').removeClass('fa-times');
        $('.navbar ul').removeClass('nav-toggle');

        if ($(window).scrollTop() > 60) {
            $('header').addClass('header-active');
        } else {
            $('header').removeClass('header-active');
        }

        $('section').each(function() {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top >= offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    const images = document.querySelectorAll('.image-slider img');
    let currentIndex = 0;
    images[currentIndex].classList.add('active');

    function changeImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(changeImage, 4000);

    // Filter functionality
    $('.controls .buttons').click(function() {
        $(this).addClass('button-active').siblings().removeClass('button-active');
        
        let filter = $(this).attr('data-filter');
        if (filter == 'all') {
            $('.product .image').show(400);
        } else {
            $('.product .image').not('.' + filter).hide(200);
            $('.product .image').filter('.' + filter).show(400);
        }
    });
});
