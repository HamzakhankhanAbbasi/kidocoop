//responsive-navigation
$('.mobile-toggle').click(function(){
	$('.mobie-nav').toggleClass('active');
});
// Mobile Navigation Close Button Js
// $('.toogle-close-btn').click(function(){
// 	$('.mobie-nav').removeClass('active');
// });
//frame-slider
$(".videoCarousel").owlCarousel({ 
    items:3,
    margin:50,
    loop: true,
    center:true,
    autoplay:true,
    autoplayTimeout:2000,
    nav:false,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:3,
        }
        
    }
  });
