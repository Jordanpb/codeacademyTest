/*var main = funtion(){
$('body').hide();
$('nav li ul').hover().removeClass('fallback');
$('nav li').hover(
  function () {
    $('ul', this).stop().slideDown('slow');
  },
  function () {
    $('ul', this).stop().slideUp('slow');
  }
};
$(document).ready(main);
*/

$(document).ready(function(){
  $('body').hide();
  $('nav li ul').click().removeClass('fallback');
  $('nave li').click(function(){
    $('ul', this).stop().slideToggle('slow');
  });
});
