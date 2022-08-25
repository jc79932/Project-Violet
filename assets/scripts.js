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

let mainQuery = document.querySelector(".current-weather")
let coldQuery = document.querySelector(".low")
let hotQuery = document.querySelector(".high")
let windQuery = document.querySelector(".wind")
let humidityQuery = document.querySelector(".humidity")
let iconQuery = document.querySelector(".weather-icon")

let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + defaultLat + "&lon=" + defaultLon + "&appid=d1c2fd318d4288ca5a66ea9133404e32"
let siteURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + defaultLat + "&lon=" + defaultLon + "&appid=d1c2fd318d4288ca5a66ea9133404e32"
function site_URL(defaultLat, defaultLon){
    let siteURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + defaultLat + "&lon=" + defaultLon + "&appid=d1c2fd318d4288ca5a66ea9133404e32"
    
    fetch(siteURL)
    .then(function(response){ 
        if(response.ok){
        response.json().then(function(data){
                mainQuery.textContent = Math.round((((parseInt(data.main.temp)-273.15) * 9)/5)) + 32 + "°F" 
                hotQuery.textContent = Math.round((((parseInt(data.main.temp_max)-273.15) * 9)/5)) + 32 + " °F"
                coldQuery.textContent = Math.round((((parseInt(data.main.temp_min)-273.15) * 9)/5)) + 32 + " °F"
                windQuery.textContent = data.wind.speed + " Mph"
                humidityQuery.textContent = data.main.humidity + " %"

                if(data.weather[0].main == "Clear"){
                    iconQuery.innerHTML = '<img src="./assets/weather-three.png" width="150px" height="150px">'
                } else if(data.weather[0].main == "Rain"){
                    iconQuery.innerHTML = '<img src="./assets/weather-two.png" width="150px" height="150px">'
                }else if(data.weather[0].main == "Clouds"){
                    iconQuery.innerHTML = '<img src="./assets/weather-one.png" width="150px" height="150px">'
                }else if(data.weather[0].main == "Thunder"){
                    iconQuery.innerHTML = '<img src="./assets/weather-four.png" width="150px" height="150px">'
                }else if(data.wind.speed > 15){
                    iconQuery.innerHTML = '<img src="./assets/weather-seven.png" width="150px" height="150px">'
                }

            })
            }
        })
    .then((data) => console.log(data));

    return siteURL;
}

fetch(siteURL)
  .then((response) => response.json())
  .then((data) => console.log(data));

  fetch(forecastURL)
  .then((response) => response.json())
  .then((data) => console.log(data));


  site_URL(defaultLat, defaultLon);
