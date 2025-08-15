$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    const gatilhoScroll = 150;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > gatilhoScroll) {
            $('#header-solto').css('top', '0');
            $('#header-fixado').fadeOut();
        } else {
            $('#header-solto').css('top', '-100px');
            $('#header-fixado').fadeIn();
        }
    })

    


});