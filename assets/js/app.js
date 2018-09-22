
$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});

$(window).bind('scroll', function () {
  var currentTop = $(window).scrollTop();
  var elems = $('.scrollspy');
  elems.each(function (index) {
    var elemTop = $(this).offset().top;
    var elemBottom = elemTop + $(this).height();
    if (currentTop >= elemTop && currentTop <= elemBottom) {
      if ($(this).attr('id') === "SplashSection") {
        var navElem = $('a[href="#About"]');
        navElem.parent().removeClass('active').siblings().removeClass('active');
      }
      else {
        var id = $(this).attr('id');
        var navElem = $('a[href="#' + id + '"]');
        navElem.parent().addClass('active').siblings().removeClass('active');
      }
    }
  })
}); 
