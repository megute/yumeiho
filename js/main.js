$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.head__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

const swiper = new Swiper('.reviews__cont', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});