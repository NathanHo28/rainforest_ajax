// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on('page:load ready', function() {
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

	$.getScript('/products?search=' + searchValue);
  });

  $(window).scroll(function() {
    var url = $('.pagination span.next').children().attr('href');
    if (url && $(window).scrollTop() > ($(document).height() - $(window).height() - 50)) {

      console.log(url);
      $('#index-pagination').text("Fetching more products...");
      $.getScript(url);
    }
  });
});