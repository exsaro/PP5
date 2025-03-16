$(document).ready(function() {

    var myCarousel = document.getElementById('carouselExampleControls')

    $(myCarousel).bind('mousewheel', function(e) {
        if(e.originalEvent.wheelDelta /120 > 0) {
            $(this).carousel('prev');
        } else {
            $(this).carousel('next');
        }
    });

    $(myCarousel).on('slide.bs.carousel', function (event) {
        var slideIndex = event.to;
        var slideElement = $(this).find('.carousel-item').eq(slideIndex);
        var slideName = slideElement.attr('data-slide-name');
        $('body').attr('class', `bg-${slideName}`);
    });
    
    $('.hamburger > a').click(function(e){
        e.preventDefault();
        $(this).siblings('.mob-nav').slideToggle();
    })
    $('.mob-nav a').click(function(){
        $(this).parents('.mob-nav').hide();
        $(this).parent('li').siblings().removeClass('act');
        $(this).parent('li').addClass('act');
    })

  

    $('.port-img a').click(function(e){
        e.preventDefault();
        var frameSrc = $(this).attr('src');
        $('#portfolioModel').modal('show');
        $('#portfolioModel').find('.modal-body iframe').attr({'src':frameSrc});
    })
});

