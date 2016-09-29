$(document).ready(function () {
//nav dropdown
$('.dropdown').on('click', function () {
  $('.dropdown-links').slideToggle();
});

//form
$('#contactForm').on('submit', function(event){
  event.preventDefault();
$('#contactForm').find('input[type=text],[type=email]').val('');
})

});
