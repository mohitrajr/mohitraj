let res = document.getElementById('resume_logo');
let add = document.getElementById('address');
let loc = document.getElementById('location');
let ph = document.getElementById('phone');
let num = document.getElementById('number');
let email = document.getElementById('email');
let mail = document.getElementById('mail');
let page_2 = document.getElementById('page_2');

res.addEventListener('mousemove', function() {
    res.classList.remove('human-heart');
    res.classList.add('up-down');
});

res.addEventListener('mouseleave', function() {
    res.classList.remove('up-down');
    res.classList.add('human-heart');
});

add.addEventListener('mousemove', function() {
    loc.classList.add('animated');
    loc.classList.add('rubberBand');
});

add.addEventListener('mouseleave', function() {
    loc.classList.remove('animated');
    loc.classList.remove('rubberBand');
});

ph.addEventListener('mousemove', function() {
    num.classList.add("animate");
});

ph.addEventListener('mouseleave', function() {
    num.classList.remove("animate");
});

email.addEventListener('mousemove', function() {
    mail.classList.add('animated');
    mail.classList.add('wobble');
});

email.addEventListener('mouseleave', function() {
    mail.classList.remove('animated');
    mail.classList.remove('wobble');
});

$(document).ready(function(){
$('.name-light').hide();
$('#page_2').hide();
  $("a").on('click', function(event) {
  $('.name-dark').removeClass( "mtop" );
   $('.name-light').removeClass( "mtop" );
  $('#page_2').show();
   $('html, body').animate({scrollTop: $('#page_2').offset().top -100 }, 'slow');
  });
});
$('.switch').change(function(){

   $('.name-dark').toggle();
   $('.name-light').toggle();
   $('.title-dark').toggleClass( "title-light" );
   $('.icon-gradient-dark').toggleClass( "icon-gradient-light" );
   $('.background-dark').toggleClass( "background-light" );
   $('.resume-dark').toggleClass( "resume-light" );
});
