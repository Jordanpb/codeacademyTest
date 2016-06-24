var main = funtion(){
/*  $('.page-heading').click(funtion(){
    $('.dd1').toggleClass('dd1');
  });
*/
$('nav li ul').hide().removeClass('fallback');
$('nav li').hover(
  function () {
    $('ul', this).stop().slideDown(100);
  },
  function () {
    $('ul', this).stop().slideUp(100);
  }
  function() {
      $('ul',this).fadeTo('fast',1);
  }
);
};
$(document).ready(main);
