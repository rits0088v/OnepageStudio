AOS.init({
    duration:1200,
    disable: 'mobile',
});
$(document).ready(function() {
    $(".nav-toggle").click(function() {
        $(this).toggleClass("active");
        $(".nav-main").toggleClass("open");
        $("body").toggleClass("nav_open");      
    });
    $('.our-work-slide, .our-team-slide').slick({
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows:false,
        responsive: [
        {
            breakpoint: 991,
            settings: {
              slidesToShow: 2
            }
        },
        {
            breakpoint: 479,
            settings: {
              slidesToShow: 1
            }
        }
        ]
    });

    $('.testimonial-slide').slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows:false
    });
});
$(window).on('scroll', function (event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 120) {
        $('#header').addClass('affix');
    } else{
        $('#header').removeClass('affix');
    }
});

// number count for stats, using jQuery animate

$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });   
});