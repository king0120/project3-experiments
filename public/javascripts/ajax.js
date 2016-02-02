$(document).ready(function() {


  console.log('hello world');

  var band = "marvin gaye"

  $.getJSON('http://api.bandsintown.com/artists/'+band+'.json?callback=?', {
    app_id: 'test',
    api_version: '2.0'
  }, function(data){
    $('.ajaxPractice').html(
    "<h1> AJAX IS AWESOME, here is " + data.name + '</h1>' +
    '<img src=' + data.image_url+ '>');
  });
  //   data: {
  //     app_id: 'wdi3experiment'
  //   },
  //   cache: true,
  //   method: 'get',
  //   dataType: 'jsonp',
  //   jsonp: false,
  // }).done(function(data){
  //   console.log(data);
  // });

});
