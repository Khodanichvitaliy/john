$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.main-menu__items').toggleClass('active');
        $('body').toggleClass('lock');
    });
});