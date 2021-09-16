$(window).on('scroll',function(){
  /*--------------------------------
    2.shrink nav
  ---------------------------------*/ 
  if ($(window).scrollTop() > 20) {
    $('.navbar').addClass('shrink-nav');
  } else {
    $('.navbar').removeClass('shrink-nav')
  }
});