// $(document).ready(function() {
//     var inrWidth = $('body').innerWidth();
//     var totalWidth = Math.round(inrWidth * 7);
//     $('html, body, *').mousewheel(function(e, delta) {
//         this.scrollLeft -= (delta * inrWidth);
//         e.preventDefault();
//     });
    
//     $('.main').css('width',totalWidth+'px');

// });


// document.onkeydown = checkKey;

// function checkKey(e) {
//     e = e || window.event;
//     if (e.keyCode == '37') {
//     $('.carousel-control-prev').click();
//     }
//     else if (e.keyCode == '39') {
//     $('.carousel-control-next').click();
//     }
// }

// function checkitem(){
//     var $this = $('#carouselExampleControls');
//     //var carItems = [];
//     var item = $('.carousel-inner .carousel-item');
//     //console.log($(item[0]).attr("class"));
//     if ($(item[0]).hasClass('active')) {
//         $this.find('.carousel-control-prev').addClass('disble');
//         $this.find('.carousel-control-next').removeClass('disble');
//     } else if ($(item[item.length - 1]).hasClass('active')) {
//         $this.find('.carousel-control-next').addClass('disble');
//         $this.find('.carousel-control-prev').removeClass('disble');
//     } else {
//         $this.find('.carousel-control-next,.carousel-control-prev').removeClass('disble');
//     }
// }





$(document).ready(function() {

    

    //checkitem();

    //$('#carouselExampleControls').on('slid.bs.carousel', checkitem);

    var myCarousel = document.getElementById('carouselExampleControls')
    // if(myCarousel != undefined){
    // myCarousel.addEventListener('slid.bs.carousel', function () {
    //     checkitem();
    // })
    // }
    

    $(myCarousel).bind('mousewheel', function(e) {
        if(e.originalEvent.wheelDelta /120 > 0) {
            $(this).carousel('prev');
        } else {
            $(this).carousel('next');
        }
    });

    $(myCarousel).on('slide.bs.carousel', function (event) {
        var slideIndex = event.to; // Get the upcoming active slide index
        var slideElement = $(this).find('.carousel-item').eq(slideIndex); // Get the new slide element
        var slideName = slideElement.attr('data-slide-name'); // Get slide name
        
        // Append slide number and name to the body tag
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


    // $('.mob-nav li').each(function(){
    //     $(this).click(function(){
    //         let indx = $(this).index();
    //         $(myCarousel).carousel(indx)
    //     })
        
    // })

});

