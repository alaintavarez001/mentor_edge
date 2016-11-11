
// menu toggle
$('#nav-icon').click(function() {
  $(this).toggleClass('open');
  if ($('#sideMenu').hasClass('hideMenu')){
    $('#sideMenu').removeClass('hideMenu');
  }else {
    $('#sideMenu').addClass('hideMenu');
  };
});

$("a").click(function(event) {
  event.preventDefault();
});


$('#callToAction').mouseenter(function(event) {
  $('#owl2').addClass('w3-spin');
});

$('#callToAction').mouseleave(function (event) {
  $('#owl2').removeClass('w3-spin');
});

//slides

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
};

var timer;
var slideIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    timer = setTimeout(carousel, 10000); // Change image every 10 seconds
};

$('#slider').click(function(){
  if ($('.mySlides').hasClass('w3-animate-fading')) {
    $('.mySlides').removeClass('w3-animate-fading');
    document.getElementById('pause').style.display='block';
    setTimeout(function(){$('#pause').fadeOut()},300);
    clearTimeout(timer);

  }else{
    document.getElementById('play').style.display='block'
    setTimeout(function(){$('#play').fadeOut()},300);
    $('.mySlides').addClass('w3-animate-fading');
    carousel();
  };
});

// $(document).scroll(scrollanimation);
//
// function scrollanimation() {
//   if ($(document).scrollTop()>500 && $(document).scrollTop()<550) {
//       console.log('balls!')
//       $('#pic1').addClass('w3-animate-left');
//       $('#blurb1').addClass('w3-animate-right');
//   }
// };





  // $('.leftSide').addClass('w3-animate-left');
  // $('.rightSide').addClass('w3-animate-right');
// };
