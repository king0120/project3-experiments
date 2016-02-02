$(document).ready(function() {


  console.log('hello world');

  var band = "kanye west";

  $.getJSON('http://api.bandsintown.com/artists/'+band+'.json?callback=?', {
    app_id: 'test',
    api_version: '2.0'
  }, function(data){
    $('.ajaxPractice').html(
    "<h1> AJAX IS AWESOME, here is " + data.name + '</h1>' +
    '<img src=' + data.image_url+ '>');
  });

});
