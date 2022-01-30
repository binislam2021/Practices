$(document).ready(function(){

    // Video popUp
    new VenoBox({
        selector: '.video-popup',
    });

    new VenoBox({
        selector: '.map-popup'
    });

    // Galley popUp
    new VenoBox({
        selector: '.my-popup',
        share: true,
        numeration: true,
        overlayClose: false,
    });
    
    $('#gallery li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');  
    });
    var mixar = mixitup ('.gallery-content');

    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnSelect: false,
        pauseOnHover: false,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        dots: true,
    });
    
    $('.team-slider').slick({
        slidesToShow: 3,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.txt-slider',
        pauseOnFocus: true,
        pauseOnHover: false,
    });

    $('.txt-slider').slick({
        arrows: false,
        slidesToShow: 1,
        asNavFor: '.team-slider',
        pauseOnFocus: true,
        pauseOnHover: false,
    });
});



// $(document).ready(function(){
//     $('.box').slick();
// });