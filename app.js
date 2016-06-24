var main = funtion(){
    
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
