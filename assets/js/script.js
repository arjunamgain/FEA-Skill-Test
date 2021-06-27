//$( document ).ready() block.
(preloaderBg = document.getElementById("page_preloader__bg")),
    window.addEventListener("load", function () {
        preloaderBg.classList.add("off");
  }),

   

$( document ).ready(function() {
  
  /*fixed top menu*/
  if ($(window).width() > 992) {
    $(window).scroll(function(){  
       if ($(this).scrollTop() > 48) {
          $('.hero__nav').addClass("fixed-top");
          $('body').css('padding-top', $('.header').outerHeight() + 'px');
          $('.heroimg').addClass('ft_nav');
        }else{
          $('.hero__nav').removeClass("fixed-top");
          $('body').css('padding-top', '0');
          $('.heroimg').removeClass('ft_nav');
        }   
    });
  }


    //beneficiaries items
     $('.beneficiaries__list_slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
        {
          breakpoint: 1008,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      });



       /*founder slider*/ 
        $('.founders__images').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.founders__name'
        });
        $('.founders__name').slick({
          slidesToShow: 2,
          slidesToScroll: 2,
          asNavFor: '.founders__images',
          dots: true,
          focusOnSelect: true
        });   
     
     /*Gsap Animation*/
       gsap.from('.hero__title', {opacity: 0, duration: 1, y: -50});
       gsap.from('.heroimg', {opacity:0, duration:1, delay:0.5, y:50});
       gsap.from('.fea_btn', {opacity:0, x:10,delay:0.2 })


    /*wow*/
    new WOW(
      {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       false,       // default
        live:         true        // default
      }
    ).init();



});    




