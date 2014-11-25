$(document).ready(function(){
    var scrollTime = 1000;

    $('.sidenav ul li a').each(function () {
         $(this).click(function () {
             var target = $(this).attr('href');
             $('html, body').animate({
                 scrollTop: $(target).offset().top
             }, scrollTime);
             return false;
         });
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