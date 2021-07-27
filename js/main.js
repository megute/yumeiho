$(document).ready(function(){
    $('.reviews__slider').slick();
});

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.head__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});