var main = funtion(){
    
$('nav li').mouseenter(function(){
       $('div').fadeTo('fast', 1);  
    });
$('nav li').mouseleave(function(){
        $('nav li).fadeTo('fast', .5); 
    });
    
    
$('nav li ul').hover().removeClass('fallback');
$('nav li').hover(
  function () {
    $('ul', this).stop().slideDown(100);
  },
  function () {
    $('ul', this).stop().slideUp(100);
  }
};
$(document).ready(main);
