$(document).ready(function(){
    var scrollTime = 1000;
    $('#introButton').click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, scrollTime);
        return false;
    });

    $('#side-about').click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, scrollTime);
        return false;
    });

    $('#side-what-i-do').click(function() {
        $('html, body').animate({
            scrollTop: $("#what-i-do").offset().top
        }, scrollTime);
        return false;
    });

    $('#side-contact-me').click(function() {
        $('html, body').animate({
            scrollTop: $('#contact-me').offset().top
        }, scrollTime);
        return false;
    });

    $('.tab-container').organicTabs();

    $('#sidenav-open').click(function() {
        $('#sidenav-content').addClass('sidenav-open');
        return false;
    });

    $('#sidenav-close').click(function() {
        $('#sidenav-content').removeClass('sidenav-open');
        return false;
    });

});