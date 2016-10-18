$(document).ready(function () {

// $('.transform').prepend('<div class="block" id="transform"></div>');

//nav dropdown
$('#dropdown').on('click', function () {
  $('.dropdown-links').slideToggle("slow");
  $('#dropdown').css("display", "none");
});

//form
$('#contactForm').on('submit', function(event){
  event.preventDefault();
$('#contactForm').find('input[type=text],[type=email],textarea').val('');
})
$('.mySlides').css("display", "none");
headerMove();
});

//header movement
var open;

function headerMove() {
  open = setTimeout(blockOpen, 2000);
}

function blockOpen() {
  $('.transform').css("background-color", "darkolivegreen");
  $('#title-page').toggle("slow").delay(3000);
  $('.mySlides').css("display", "block");
  carousel();
}

picArray = [];
var slideIndex = 0;
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    // picArray.push(x);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3500); // Change image every 2 seconds
}
