$(".testimonials").owlCarousel({
    items: 1,
	margin:20,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
});
// slider-----------------------
var commentSlider = {
  
    'config' : {
      'container' : $('#wrapper')
    },
      
    'init' : function(config) {
        if(config && typeof(config) == 'object') {
          $.extend(commentSlider.config, config);
        }
      
        //caching dom elements
        //wrapper
        commentSlider.$container = commentSlider.config.container;
  
        //all paragraph tags
        commentSlider.$paragraphs = commentSlider.$container.
          find('p');
      
        //all li tags
        commentSlider.$dots = commentSlider.$container.
          find('ul.dots-wrap > li');
      
        //first li within ul.dots-wrap
        commentSlider.$firstDot = commentSlider.$container.
          find('ul.dots-wrap > li:first-child');
      
        //first p tag within module wrapper
        commentSlider.$firstParagraph = commentSlider.$container.
          find('p:first-child');
        
        //setting first dot with .active class
        commentSlider.$firstDot.addClass('active');
  
        //setting first paragraph tag with .active class
        commentSlider.$firstParagraph.addClass('activeText');
      
        //initializing functions and defining their parameters
        commentSlider.currentItem(commentSlider.$paragraphs, commentSlider.$dots);
        commentSlider.setActiveDot(commentSlider.$dots);
        commentSlider.timer();
    },
    
    //timer function runs necesary functions every five seconds
    'timer' : function() {
      setInterval(function(){ 
        
      }, 5000);
    }, //timer function end
    
    //grabs current numerical class of dot clicked
    'dotNumber' : function($dot) {
      var dotClassArray = [];
      var dotClassList = dotClassArray.push($dot.attr('class'));
      var splitArray = dotClassArray.toString().split(' ');
      
      for(i = 0; i < splitArray.length; i++) {
        if (splitArray[i] === "dot") { 
          splitArray.splice(i, 1);
          var dotClickedNumber = splitArray[i];
          commentSlider.paragraphNumber(dotClickedNumber, commentSlider.$paragraphs);
        }
      }
    },//end dotNumber
    
    'paragraphNumber' : function(dotClickedNumber, $paragraphs) {
      $paragraphs.each(function() {
          var $paragraph = $(this);
          var paragraphClass = $paragraph.attr('class');    
         
          if(paragraphClass === dotClickedNumber) {          
            $paragraph.addClass('activeText');
            $paragraph.siblings().removeClass('activeText').addClass('slideLeft');
            setTimeout(function () { 
               $paragraph.siblings().removeClass('slideLeft');    
            }, 400);          
          }
      });
    },//end paragraphNumber
    
    //currentItem function gives every paragraph and dot a numerical class
    //based on their array position
    'currentItem' : function($paragraphs, $dots) {
      $paragraphs.each(function(i) {
        var $paragraph = $(this);
        $paragraph.addClass([] + i);
      });
      
      $dots.each(function(i) {
        var $dot = $(this);
        $dot.addClass([] + i);
      });
    },//end currentItem
    
    //setActiveDot adds class active to whichever dot is clicked
    'setActiveDot' : function($dots) {
      $dots.each( function() {
        var $dot = $(this);
        $dot.on('click', function() {
          if($dot.hasClass('active')) {
            return false;
          } else {
            $dot.addClass('active');
            $dot.siblings().removeClass('active');
          }
          commentSlider.dotNumber($dot);      
        });
      });
    }//end setActiveDot
  };
    
  //initializes the entire thing by calling the init function  
  $(document).ready(commentSlider.init);

//logo slider

$('.logos-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [{
  breakpoint: 768,
  settings: {
  slidesToShow: 3
  }
  }, {
  breakpoint: 520,
  settings: {
  slidesToShow: 2
  }
  }]
  });
  // port folio start
  $(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});