var main = funtion(){
/*  $('.page-heading').click(funtion(){
    $('.dd1').toggleClass('dd1');
  });
*/
$('nav li ul').click().removeClass('fallback');
$('nav li').click(
  function () {
    $('ul', this).stop().slideDown(100);
  },
  function () {
    $('ul', this).stop().slideUp(100);
  }
);
};
$(document).ready(main);
