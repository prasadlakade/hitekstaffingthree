$(window).scroll(function(){
  var stickyhead = $('.header-bottomrow'),
      scroll = $(window).scrollTop();

  if (scroll >= 118) stickyhead.addClass('headfixed');
  else stickyhead.removeClass('headfixed');
});

$(window).scroll(function(){
  var stickylogo = $('.logo .logoinner'),
      scroll = $(window).scrollTop();

   if (scroll >= 40) stickylogo.addClass('logofixed');
   else stickylogo.removeClass('logofixed');
});