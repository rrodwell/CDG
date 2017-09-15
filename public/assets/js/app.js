/**
 * Created by ryanrodwell on 8/22/17.
 */
$(document).ready(function() {

    // var isLargeWindow;
    // $(window).on('resize', function() {
    //     isLargeWindow = $(this).width() > 992;
    // });


    // var mc_width = 410 * $(".mc-packages").length;
    // $(".mc-inner").css("width", mc_width);
    //
    // var bk_width = 410 * $(".bk-packages").length;
    // $(".bk-inner").css("width", bk_width);

    $('select').material_select();

    //Nav
    $('.button-collapse').sideNav();

    $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false,
            hover: false,
            gutter: 0,
            belowOrigin: true,
            alignment: 'right',
            stopPropagation: false
        }
    );

    $('.dropdown-button-nested').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false,
            hover: true,
            gutter: 0,
            belowOrigin: false,
            alignment: 'left',
            stopPropagation: false
        }
    );

    // Carousel and Slider
    $('.slider').slider({
        indicators: false
    });

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });


    $(".carousel-fwd").on("click",function(){
        $('.carousel').carousel('next');
    });

    $(".carousel-prev").on("click",function(){
        $('.carousel').carousel('prev');
    });


    //Modals functions
    var packages = {

        mcdonalds: {

            alphabet: {
                imgList: ["ALPHABET-1.jpg","ALPHABET-2.jpg","ALPHABET-3.jpg","ALPHABET-4.jpg"],
                altName: "Alphabet Catalog - "
            },
            remixA: {
                imgList: ["REMIXA-1.jpg","REMIXA-2.jpg","REMIXA-3.jpg","REMIXA-4.jpg"],
                altName: "Remix A Catalog - "
            },
            remixB: {
                imgList: ["REMIXB-1.jpg","REMIXB-2.jpg","REMIXB-3.jpg","REMIXB-4.jpg"],
                altName: "Remix B Catalog - "
            },
            remixC: {
                imgList: ["REMIXC-1.jpg","REMIXC-2.jpg","REMIXC-3.jpg","REMIXC-4.jpg"],
                altName: "Remix C Catalog - "
            },
            simplyModern: {
                imgList: ["SM-1.jpg","SM-2.jpg","SM-3.jpg","SM-4.jpg"],
                altName: "Simply Modern Catalog - "
            }
        },

        burgerKing: {

        }
    };

    $('.modal').modal();

    $(".carousel-item").click(function() {

        var myClass = $(this).attr("class");
        var split = myClass.split(" ");
        var classNeeded = split[3];

        if(classNeeded === "alphabet"){
            imgSrc = packages.mcdonalds.alphabet.imgList;
            alt = packages.mcdonalds.alphabet.altName;
            for(var i = 0; i < imgSrc.length; i++) {
                console.log("A-ran"+ i);
                var src = "./assets/catalogs/"+imgSrc[i];
                runModal(i, src, alt);
            }

        } else if(classNeeded === "remixA") {
            imgSrc = packages.mcdonalds.remixA.imgList;
            alt = packages.mcdonalds.remixA.altName;
            for(var i = 0; i < imgSrc.length; i++) {
                console.log("R-ran" +i);
                var src = "./assets/catalogs/"+imgSrc[i];
                runModal(i, src, alt);
            }
        } else if(classNeeded === "remixB") {
            imgSrc = packages.mcdonalds.remixB.imgList;
            alt = packages.mcdonalds.remixB.altName;
            for(var i = 0; i < imgSrc.length; i++) {
                console.log("R-ran" +i);
                var src = "./assets/catalogs/"+imgSrc[i];
                runModal(i, src, alt);
            }
        } else if(classNeeded === "remixC") {
            imgSrc = packages.mcdonalds.remixC.imgList;
            alt = packages.mcdonalds.remixC.altName;
            for(var i = 0; i < imgSrc.length; i++) {
                console.log("R-ran" +i);
                var src = "./assets/catalogs/"+imgSrc[i];
                runModal(i, src, alt);
            }
        } else if(classNeeded === "simplyModern") {
            imgSrc = packages.mcdonalds.simplyModern.imgList;
            alt = packages.mcdonalds.simplyModern.altName;
            for(var i = 0; i < imgSrc.length; i++) {
                console.log("R-ran" +i);
                var src = "./assets/catalogs/"+imgSrc[i];
                runModal(i, src, alt);
            }
        }
        $('#packageModal').modal('open');
    });

    // Map
    console.log($(".contact-us").height());
    $(".find-us").css("height", $(".connect-section").height());


});//Document Ready

function runModal (i, source, alt) {
    $(".largeImg-"+i).attr("src", source);
    $(".thumbnail-"+i).attr("src", source).attr("alt", alt);
}

function openModal() {
    document.getElementById('packageModal').style.display = "block";
}

function closeModal() {
    document.getElementById('packageModal').style.display = "none";
    $('#packageModal').modal('close');
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;

    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("thumbnail");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    // captionText.innerHTML = dots[slideIndex-1].alt;
}