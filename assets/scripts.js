//API Key: d1c2fd318d4288ca5a66ea9133404e32
//Test Lat / Long: 25.9419824 / -97.4658041
//https://api.openweathermap.org/data/2.5/onecall?lat=25.9419824&lon=-97.4658041&appid=d1c2fd318d4288ca5a66ea9133404e32
console.log("JS file linked")

$(document).ready(function (){
$('.current-weather').each(function() {
    $(this).after($('<span>').text(""));
  });
});