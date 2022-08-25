//API Key: d1c2fd318d4288ca5a66ea9133404e32
//Test Lat / Long: 25.9419824 / -97.4658041
//https://api.openweathermap.org/data/2.5/onecall?lat=25.9419824&lon=-97.4658041&appid=d1c2fd318d4288ca5a66ea9133404e32
//https://api.openweathermap.org/data/3.0/onecall?lat=25.9419824&lon=-97.4658041&appid=
//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=d1c2fd318d4288ca5a66ea9133404e32
//https://api.openweathermap.org/data/3.0/onecall?lat=25.9018&lon=-97.4975&appid=d1c2fd318d4288ca5a66ea9133404e32
console.log("JS file linked")

$(document).ready(function (){
$('.current-weather').each(function() {
    $(this).after($('<span>').text(""));
  });
});

let defaultLat = "25.9018";
let defaultLon = "-97.4975";
let appId = "d1c2fd318d4288ca5a66ea9133404e32"

let siteURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + defaultLat + "&lon=" + defaultLon + "&appid=d1c2fd318d4288ca5a66ea9133404e32"
function site_URL(defaultLat, defaultLon){
    let siteURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + defaultLat + "&lon=" + defaultLon + "&appid=d1c2fd318d4288ca5a66ea9133404e32"
    
    fetch(siteURL)
    .then((response) => response.json())
    .then((data) => console.log(data));

    return siteURL;
}

fetch(siteURL)
  .then((response) => response.json())
  .then((data) => console.log(data));

