/**
 * Created by ryanrodwell on 8/22/17.
 */
$(document).ready(function() {
    var isLargeWindow;
    $(window).on('resize', function() {
        isLargeWindow = $(this).width() > 992;
    });


    var mc_width = 410 * $(".mc-packages").length;
    $(".mc-inner").css("width", mc_width);

    var bk_width = 410 * $(".bk-packages").length;
    $(".bk-inner").css("width", bk_width);

    $('select').material_select();

    $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false,
            hover: false,
            gutter: 0,
            belowOrigin: true,
            alignment: 'left',
            stopPropagation: false
        }
    );

    $('.slider').slider({
        height: '600px',
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

    // $('.alphabet').click(function(err) {
    //     if (isLargeWindow) {
    //         $('#modal1').modal('open');
    //     } else {
    //         var w = window.open('./assets/catalogs/ALPHABET2017.pdf', '_blank');
    //         w.focus();
    //     }
    // });

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
    $(".find-us").css("height", $(".connect-section").height());
});
