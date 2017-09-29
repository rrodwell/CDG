/**
 * Created by ryanrodwell on 8/22/17.
 */
$(document).ready(function() {

    // var isLargeWindow;
    // $(window).on('resize', function() {
    //     isLargeWindow = $(this).width() > 992;
    // });


    var mc_width = 419 * $(".mc-packages").length;
    $(".mc-inner").css("width", mc_width);

    var bk_width = 419 * $(".bk-packages").length;
    $(".bk-inner").css("width", bk_width);

    var popeyes_width = 419 * $(".popeyes-packages").length;
    $(".popeyes-inner").css("width", popeyes_width);

    $('select').material_select();

    //Nav
    $('.button-collapse').sideNav();

    $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            constrainWidth: false,
            hover: true,
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
        indicators: false
    });

    $(".carousel-fwd").on("click",function(){
        $('.carousel').carousel('next');
    });

    $(".carousel-prev").on("click",function(){
        $('.carousel').carousel('prev');
    });


    // Route to Packages
    $(".go-to-packages").click(function() {

        var myClass = $(this).children().attr("class");
        var split = myClass.split(" ");
        var classNeeded = split[2];

        if(classNeeded === "mcdonalds") {

            window.location = "packages.html#mcdonalds";

        } else if(classNeeded === "burgerking") {

            window.location = "packages.html#burgerking";

        } else if(classNeeded === "popeyes") {

            window.location = "packages.html#popeyes";

        } else {

            window.location = "otherBrands.html";
        }

    });

    // Package Buttons
    $(".mc-fwd").on("click",function(){
        $(".mc-outer").animate({
            scrollLeft:  "+=400",
            behavior: "smooth"
        }, 1000);
    });

    $(".mc-prev").on("click",function(){
        $(".mc-outer").animate({
            scrollLeft:  "-=400",
            behavior: "smooth"
        }, 1000);
    });

    $(".bk-fwd").on("click",function(){
        $(".bk-outer").animate({
            scrollLeft:  "+=400",
            behavior: "smooth"
        }, 1000);
    });

    $(".bk-prev").on("click",function(){
        $(".bk-outer").animate({
            scrollLeft:  "-=400",
            behavior: "smooth"
        }, 1000);
    });

    $(".popeyes-fwd").on("click",function(){
        $(".popeyes-outer").animate({
            scrollLeft:  "+=400",
            behavior: "smooth"
        }, 1000);
    });

    $(".popeyes-prev").on("click",function(){
        $(".popeyes-outer").animate({
            scrollLeft:  "-=400",
            behavior: "smooth"
        }, 1000);
    });


    //Modals functions
    var packages = {

        mcdonalds: {

            alphabet: {
                imgList: ["ALPHABET-1.jpg","ALPHABET-2.jpg","ALPHABET-3.jpg","ALPHABET-4.jpg"],
                altName: "Alphabet"
            },
            remixA: {
                imgList: ["REMIXA-1.jpg","REMIXA-2.jpg","REMIXA-3.jpg","REMIXA-4.jpg"],
                altName: "Remix A"
            },
            remixB: {
                imgList: ["REMIXB-1.jpg","REMIXB-2.jpg","REMIXB-3.jpg","REMIXB-4.jpg"],
                altName: "Remix B"
            },
            remixC: {
                imgList: ["REMIXC-1.jpg","REMIXC-2.jpg","REMIXC-3.jpg","REMIXC-4.jpg"],
                altName: "Remix C"
            },
            simplyModern: {
                imgList: ["SM-1.jpg","SM-2.jpg","SM-3.jpg","SM-4.jpg"],
                altName: "Simply Modern - "
            },
            woodStone: {
                imgList: ["SM-1.jpg","SM-2.jpg","SM-3.jpg","SM-4.jpg"],
                altName: "Wood & Stone"
            },
            craft: {
                imgList: ["SM-1.jpg","SM-2.jpg","SM-3.jpg","SM-4.jpg"],
                altName: "Craft 2017"
            },
            lrStyle: {
                imgList: ["SM-1.jpg","SM-2.jpg","SM-3.jpg","SM-4.jpg"],
                altName: "Living Room Style"
            },
            lrClassic: {
                imgList: ["SM-1.jpg","SM-2.jpg","SM-3.jpg","SM-4.jpg"],
                altName: "Living Room Classic"
            }
        },

        burgerKing: {
            gardengrill: {
                imgList: ["GardenGrill-1.jpg","GardenGrill-2.jpg","GardenGrill-3.jpg"],
                altName: "Garden Grill"
            },
            prime: {
                imgList: ["REMIXA-1.jpg","REMIXA-2.jpg","REMIXA-3.jpg","REMIXA-4.jpg"],
                altName: "Prime"
            },
            improved: {
                imgList: ["REMIXB-1.jpg","REMIXB-2.jpg","REMIXB-3.jpg","REMIXB-4.jpg"],
                altName: "Improved"
            },
            enhanced: {
                imgList: ["REMIXC-1.jpg","REMIXC-2.jpg","REMIXC-3.jpg","REMIXC-4.jpg"],
                altName: "Enhanced"
            }
        },

        popeyes: {
            lkplus: {
                imgList: ["LKPlus-1.jpg","LKPlus-2.jpg","LKPlus-3.jpg","LKPlus-4.jpg"],
                altName: "LK Plus"
            }
        }
    };

    $('.modal').modal();

    $(".mc-packages").click(function() {

        var imgPath = "./assets/catalogs/McDonalds/";

        var myClass = $(this).children().attr("class");
        var split = myClass.split(" ");
        var classNeeded = split[2];

        if(classNeeded === "alphabet") {
            imgSrc = packages.mcdonalds.alphabet.imgList;
            alt = packages.mcdonalds.alphabet.altName;
            buildModal(imgSrc, alt, imgPath);

        } else if(classNeeded === "remixA") {
            imgSrc = packages.mcdonalds.remixA.imgList;
            alt = packages.mcdonalds.remixA.altName;
            buildModal(imgSrc, alt, imgPath);

        } else if(classNeeded === "remixB") {
            imgSrc = packages.mcdonalds.remixB.imgList;
            alt = packages.mcdonalds.remixB.altName;
            buildModal(imgSrc, alt, imgPath);

        } else if(classNeeded === "remixC") {
            imgSrc = packages.mcdonalds.remixC.imgList;
            alt = packages.mcdonalds.remixC.altName;
            buildModal(imgSrc, alt, imgPath);

        } else if(classNeeded === "simplyModern") {
            imgSrc = packages.mcdonalds.simplyModern.imgList;
            alt = packages.mcdonalds.simplyModern.altName;
            buildModal(imgSrc, alt, imgPath);

        } else if(classNeeded === "woodStone") {
            imgSrc = packages.mcdonalds.woodStone.imgList;
            alt = packages.mcdonalds.woodStone.altName;
            buildModal(imgSrc, alt, imgPath);

        } else if(classNeeded === "craft") {
            imgSrc = packages.mcdonalds.woodStone.imgList;
            alt = packages.mcdonalds.woodStone.altName;
            buildModal(imgSrc, alt, imgPath);

        } else if(classNeeded === "lrStyle") {
            imgSrc = packages.mcdonalds.lrStyle.imgList;
            alt = packages.mcdonalds.lrStyle.altName;
            buildModal(imgSrc, alt, imgPath);

        } else if(classNeeded === "lrClassic") {
            imgSrc = packages.mcdonalds.lrClassic.imgList;
            alt = packages.mcdonalds.lrClassic.altName;
            buildModal(imgSrc, alt, imgPath);

        }
    buildModal(imgSrc, alt, imgPath);});

    $(".bk-packages").click(function() {

        var imgPath = "./assets/catalogs/BurgerKing/";

        var myClass = $(this).children().attr("class");
        var split = myClass.split(" ");
        var classNeeded = split[2];

        if(classNeeded === "gardengrill"){
            imgSrc = packages.burgerKing.gardengrill.imgList;
            alt = packages.burgerKing.gardengrill.altName;
            buildModal(imgSrc, alt, imgPath);

        } else if(classNeeded === "prime") {
            imgSrc = packages.burgerKing.prime.imgList;
            alt = packages.burgerKing.prime.altName;
            buildModal(imgSrc, alt, imgPath);

        } else if(classNeeded === "improved") {
            imgSrc = packages.burgerKing.improved.imgList;
            alt = packages.burgerKing.improved.altName;
            buildModal(imgSrc, alt, imgPath);

        } else if(classNeeded === "enhanced") {
            imgSrc = packages.burgerKing.enhanced.imgList;
            alt = packages.burgerKing.enhanced.altName;
            buildModal(imgSrc, alt, imgPath);

        }
    });

    $(".popeyes-packages").click(function() {

        var imgPath = "./assets/catalogs/Popeyes/";

        var myClass = $(this).children().attr("class");
        var split = myClass.split(" ");
        var classNeeded = split[2];

        if(classNeeded === "lkplus"){
            imgSrc = packages.popeyes.lkplus.imgList;
            alt = packages.popeyes.lkplus.altName;
            buildModal(imgSrc, alt, imgPath);

        }
    });

    // Map
    $(".map").css("height", $(".connect-section").height());


});//Document Ready

function buildModal (imgArray, altName, imgRoute) {
    $('.modal-container').empty();
    $('.modal-row').empty();
    for(var i = 0; i < imgArray.length; i++) {
        var modalSlides = $('<div>');
        modalSlides.addClass("modalSlides");
        var currentSlideNum = i + 1;
        var slideImg = $('<img>');
        var path = imgRoute + imgArray[i];
        slideImg.attr("src", path);

        modalSlides.append(slideImg);
        $('.modal-container').append(modalSlides);

        var column = $('<div>');
        column.addClass("col s3");
        var thumbnailImg = $('<img>');
        thumbnailImg.attr("src",path).attr("alt", altName);
        thumbnailImg.addClass("thumbnail");
        thumbnailImg.attr("onclick", "currentSlide("+currentSlideNum+")");
        column.append(thumbnailImg);

        $(".modal-row").append(column);

    }
    console.log("modal build complete");
    openModal();
}


function openModal() {
    console.log("opening modal");
    var slideIndex = 1;
    $('#packageModal').modal('open');
    showSlides(slideIndex);
}

function closeModal() {
    $('.modal').modal('close');
}

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    console.log("n: ",n);
    var i;

    var slides = document.getElementsByClassName("modalSlides");
    console.log("slides: ",slides);
    console.log("nslides length: ",slides.length);

    var dots = document.getElementsByClassName("thumbnail");
    console.log("dots: ",dots);

    if (n > slides.length) {
        slideIndex = 1;
        slides[slideIndex].style.display = "block";
        console.log("ran if 1");
    }
    if (n < 1) {
        slideIndex = slides.length;
        console.log("ran if 2");
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        console.log("for-loops on slide display")
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        console.log("for-loop on dots class name");
    }

    if(slideIndex > slides.length){
        slides[0].style.display = "block";
    } else {
        slides[slideIndex - 1].style.display = "block";
        console.log("slides style to block");
        console.log(slideIndex);
    }
    dots[slideIndex - 1].className += " active";
    console.log("dots class name to active");
}