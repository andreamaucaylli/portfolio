new WOW().init();

$(document).ready(parallax);
    
    var parallax = function (){  
        $('#sectionIntro').parallax({ "coeff":+0.5 });
        $('.imageIntro').parallax({ "coeff":+0.4 });
    };

$(window).load(carga);

    var carga = function (){ 
        var $container = $('#masonry-grid');
        $container.isotope({
        itemSelector: '.grid-item'
    });



