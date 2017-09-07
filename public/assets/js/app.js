/**
 * Created by ryanrodwell on 8/22/17.
 */
$(document).ready(function() {

    var mc_width = 385 * $(".mc-packages").length;
    $(".mc-inner").css("width", mc_width);

    var bk_width = 385 * $(".bk-packages").length;
    $(".bk-inner").css("width", bk_width);

    $('select').material_select();

    $('.slider').slider({
        height: '470px',
        indicators: false
    });

    $('.button-collapse').sideNav();

    $('.parallax').parallax();

    // Scroll
    $(".mc-forward").click(function() {
        $(".mc-outer").animate({
            scrollLeft:  "+=300"
        }, 1000);
    });

    $(".mc-back").on("click" ,function(){
        $(".mc-outer").animate({
            scrollLeft:  "-=300"
        }, 1000);
    });

    $(".bk-forward").click(function() {
        $(".bk-outer").animate({
            scrollLeft:  "+=300"
        }, 1000);
    });

    $(".bk-back").on("click" ,function(){
        $(".bk-outer").animate({
            scrollLeft:  "-=300"
        }, 1000);
    });


    // Modals
    $('.modal').modal();

    $('.alphabet').click(function() {
        $('#modal1').modal('open');
    });

    $('.remixA').click(function() {
        $('#modal2').modal('open');
    });

    $('.remixB').click(function() {
        $('#modal3').modal('open');
    });

    $('.remixC').click(function() {
        $('#modal4').modal('open');
    });

    $('.simplyModern').click(function() {
        $('#modal5').modal('open');
    });

    // Map
    console.log($(".contact-us").height());
    $(".find-us").css("height", $(".something-else").height());
});
