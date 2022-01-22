$('.burger').on('click', function() {
        $('.mob-menu').toggle();
    });

$('.close').on('click', function() {
        $('.mob-menu').toggle();
    });

$("#arrow__down").click(function(){            
$('html, body').animate({
        scrollTop: $("#benefits").offset().top
    }, 2000);
});

$(".offer__btn").click(function(){            
$('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 2000);
});

$(function () {
        $(window).scroll(function() {
            $('.section__title').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("fadeInLeft");
                }
            });
        });
        $(window).scroll(function() {
            $('.section__subtitle').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("fadeInLeft");
                }
            });
        });
         $(window).scroll(function() {
            $('.card').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
        $(window).scroll(function() {
            $('.projects-box').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("fadeInDown");
                }
            });
        });
        $(window).scroll(function() {
            $('.subscribe__btn').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("fadeInRight");
                }
            });
        });
});