$(document).ready(function () {

// $('.transform').prepend('<div class="block" id="transform"></div>');

//nav dropdown
$('.dropdown').on('click', function () {
  $('.dropdown-links').slideToggle();
});

//form
$('#contactForm').on('submit', function(event){
  event.preventDefault();
$('#contactForm').find('input[type=text],[type=email]').val('');
})

headerMove();
});

//header movement
var open;

function headerMove() {
  open = setTimeout(blockOpen, 2000);
}

function blockOpen() {

  $('.transform').css("background-color", "darkolivegreen");
  $('.transform').animate({marginLeft:'auto'}, {duration: 9000});
// wordMove();
$('h1').toggle("slide").delay(1500);
//maybe I could select each letter???

// $('h1').animate({width: 'toggle'}, 3000);
// $('h1').show('slide', {direction: 'left'}, 2000);
}
// var header;
//
// function wordMove() {
//   header = setTimeout(title, 2000);
// }
//
// function title() {
//   $('h1').animate({width: 'toggle'});
// }
