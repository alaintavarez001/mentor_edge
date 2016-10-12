
// menu toggle
$('#nav-icon').click(function() {
  $(this).toggleClass('open');
  if ($('#sideMenu').hasClass('hideMenu')){
    $('#sideMenu').removeClass('hideMenu');
  }else {
    $('#sideMenu').addClass('hideMenu');
  };
});
