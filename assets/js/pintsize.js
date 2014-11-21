$(document).ready(function(){
    $('#introButton').click(function() {
       $('html, body').animate({
           scrollTop: $("#about").offset().top
       }, 2000);
    });

    $('.tab-container').organicTabs();


});