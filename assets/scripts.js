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
let UVQuery = document.querySelector(".uv-index")

let oneColdQuery = document.querySelector("#one-low")
let oneHotQuery = document.querySelector(".one-high")
let oneWindQuery = document.querySelector(".one-wind")
let oneHumidityQuery = document.querySelector(".one-humidity")
let oneIconQuery = document.querySelector(".weather-icon-one")
let oneUVQuery = document.querySelector(".one-uv-index")

let twoColdQuery = document.querySelector(".two-low")
let twoHotQuery = document.querySelector(".two-high")
let twoWindQuery = document.querySelector(".two-wind")
let twoHumidityQuery = document.querySelector(".two-humidity")
let twoIconQuery = document.querySelector(".weather-icon-two")
let twoDayQuery = document.querySelector(".day-two")
twoDayQuery.textContent = moment().add(1, 'days').format('dddd')
let twoUVQuery = document.querySelector(".two-uv-index")


let threeColdQuery = document.querySelector(".three-low")
let threeHotQuery = document.querySelector(".three-high")
let threeWindQuery = document.querySelector(".three-wind")
let threeHumidityQuery = document.querySelector(".three-humidity")
let threeIconQuery = document.querySelector(".weather-icon-three")
let threeDayQuery = document.querySelector(".day-three")
threeDayQuery.textContent = moment().add(2, 'days').format('dddd')
let threeUVQuery = document.querySelector(".three-uv-index")


let fourColdQuery = document.querySelector(".four-low")
let fourHotQuery = document.querySelector(".four-high")
let fourWindQuery = document.querySelector(".four-wind")
let fourHumidityQuery = document.querySelector(".four-humidity")
let fourIconQuery = document.querySelector(".weather-icon-four")
let fourDayQuery = document.querySelector(".day-four")
fourDayQuery.textContent = moment().add(3, 'days').format('dddd')
let fourUVQuery = document.querySelector(".four-uv-index")


let fiveColdQuery = document.querySelector(".five-low")
let fiveHotQuery = document.querySelector(".five-high")
let fiveWindQuery = document.querySelector(".five-wind")
let fiveHumidityQuery = document.querySelector(".five-humidity")
let fiveIconQuery = document.querySelector(".weather-icon-five")
let fiveDayQuery = document.querySelector(".day-five")
fiveDayQuery.textContent = moment().add(4, 'days').format('dddd')
let fiveUVQuery = document.querySelector(".five-uv-index")




let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + defaultLat + "&lon=" + defaultLon + "&appid=d1c2fd318d4288ca5a66ea9133404e32"
let siteURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + defaultLat + "&lon=" + defaultLon + "&appid=d1c2fd318d4288ca5a66ea9133404e32"
function site_URL(defaultLat, defaultLon){
    let siteURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + defaultLat + "&lon=" + defaultLon + "&appid=d1c2fd318d4288ca5a66ea9133404e32"
    let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + defaultLat + "&lon=" + defaultLon + "&appid=d1c2fd318d4288ca5a66ea9133404e32"

    fetch("https://api.openweathermap.org/data/2.5/uvi?lat=" + defaultLat + "&lon=" + defaultLon + "&appid=d1c2fd318d4288ca5a66ea9133404e32")
    .then(function(response){ 
        if(response.ok){
        response.json().then(function(data){
                UVQuery.textContent = data.value

                if (data.value >= 8 ){
                    UVQuery.style.color="red";
                } else if (data.value >= 4) {
                    UVQuery.style.color="orange";
                }
                else {
                    UVQuery.style.color="green";
                }
            })
        }
    })
    .then((data) => console.log(data));

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
                    iconQuery.innerHTML = '<img src="./assets/weather-three.png" width="151px" height="151px">'
                } else if(data.weather[0].main == "Rain"){
                    iconQuery.innerHTML = '<img src="./assets/weather-two.png" width="151px" height="151px">'
                }else if(data.weather[0].main == "Clouds"){
                    iconQuery.innerHTML = '<img src="./assets/weather-one.png" width="151px" height="151px">'
                }else if(data.weather[0].main == "Thunder"){
                    iconQuery.innerHTML = '<img src="./assets/weather-four.png" width="151px" height="151px">'
                }else if(data.wind.speed > 15){
                    iconQuery.innerHTML = '<img src="./assets/weather-seven.png" width="151px" height="151px">'
                }

            })
            }
        })
    .then((data) => console.log(data));

    fetch(forecastURL)
    .then(function(response){ 
        if(response.ok){
        response.json().then(function(data){
                 
                oneHotQuery.textContent = Math.round((((parseInt(data.list[6].main.temp_max)-273.15) * 9)/5)) + 32 + " °F"
                oneColdQuery.textContent = Math.round((((parseInt(data.list[6].main.temp_min)-273.15) * 9)/5)) + 32 + " °F"
                oneWindQuery.textContent = data.list[6].wind.speed + " Mph"
                oneHumidityQuery.textContent = data.list[6].main.humidity + " %"

                if(data.list[6].weather[0].main == "Clear"){
                    oneIconQuery.innerHTML = '<img src="./assets/weather-three.png" width="145px" height="125px">'
                } else if(data.list[6].weather[0].main == "Rain"){
                    oneIconQuery.innerHTML = '<img src="./assets/weather-two.png" width="145px" height="125px">'
                }else if(data.list[6].weather[0].main == "Clouds"){
                    oneIconQuery.innerHTML = '<img src="./assets/weather-one.png" width="145px" height="125px">'
                }else if(data.list[6].weather[0].main == "Thunder"){
                    oneIconQuery.innerHTML = '<img src="./assets/weather-four.png" width="145px" height="125px">'
                }else if(data.list[6].wind.speed > 15){
                    oneIconQuery.innerHTML = '<img src="./assets/weather-seven.png" width="145px" height="125px">'
                }


                twoHotQuery.textContent = Math.round((((parseInt(data.list[14].main.temp_max)-273.15) * 9)/5)) + 32 + " °F"
                twoColdQuery.textContent = Math.round((((parseInt(data.list[14].main.temp_min)-273.15) * 9)/5)) + 32 + " °F"
                twoWindQuery.textContent = data.list[14].wind.speed + " Mph"
                twoHumidityQuery.textContent = data.list[14].main.humidity + " %"

                if(data.list[14].weather[0].main == "Clear"){
                    twoIconQuery.innerHTML = '<img src="./assets/weather-three.png" width="145px" height="125px">'
                } else if(data.list[14].weather[0].main == "Rain"){
                    twoIconQuery.innerHTML = '<img src="./assets/weather-two.png" width="145px" height="125px">'
                }else if(data.list[14].weather[0].main == "Clouds"){
                    twoIconQuery.innerHTML = '<img src="./assets/weather-one.png" width="145px" height="125px">'
                }else if(data.list[14].weather[0].main == "Thunder"){
                    twoIconQuery.innerHTML = '<img src="./assets/weather-four.png" width="145px" height="125px">'
                }else if(data.list[14].wind.speed > 15){
                    twoIconQuery.innerHTML = '<img src="./assets/weather-seven.png" width="145px" height="125px">'
                }
                

                threeHotQuery.textContent = Math.round((((parseInt(data.list[22].main.temp_max)-273.15) * 9)/5)) + 32 + " °F"
                threeColdQuery.textContent = Math.round((((parseInt(data.list[22].main.temp_min)-273.15) * 9)/5)) + 32 + " °F"
                threeWindQuery.textContent = data.list[22].wind.speed + " Mph"
                threeHumidityQuery.textContent = data.list[22].main.humidity + " %"

                if(data.list[22].weather[0].main == "Clear"){
                    threeIconQuery.innerHTML = '<img src="./assets/weather-three.png" width="145px" height="125px">'
                } else if(data.list[22].weather[0].main == "Rain"){
                    threeIconQuery.innerHTML = '<img src="./assets/weather-two.png" width="145px" height="125px">'
                }else if(data.list[22].weather[0].main == "Clouds"){
                    threeIconQuery.innerHTML = '<img src="./assets/weather-one.png" width="145px" height="125px">'
                }else if(data.list[22].weather[0].main == "Thunder"){
                    threeIconQuery.innerHTML = '<img src="./assets/weather-four.png" width="145px" height="125px">'
                }else if(data.list[22].wind.speed > 15){
                    threeIconQuery.innerHTML = '<img src="./assets/weather-seven.png" width="145px" height="125px">'
                }


                fourHotQuery.textContent = Math.round((((parseInt(data.list[30].main.temp_max)-273.15) * 9)/5)) + 32 + " °F"
                fourColdQuery.textContent = Math.round((((parseInt(data.list[30].main.temp_min)-273.15) * 9)/5)) + 32 + " °F"
                fourWindQuery.textContent = data.list[30].wind.speed + " Mph"
                fourHumidityQuery.textContent = data.list[30].main.humidity + " %"

                if(data.list[30].weather[0].main == "Clear"){
                    fourIconQuery.innerHTML = '<img src="./assets/weather-three.png" width="145px" height="125px">'
                } else if(data.list[30].weather[0].main == "Rain"){
                    fourIconQuery.innerHTML = '<img src="./assets/weather-two.png" width="145px" height="125px">'
                }else if(data.list[30].weather[0].main == "Clouds"){
                    fourIconQuery.innerHTML = '<img src="./assets/weather-one.png" width="145px" height="125px">'
                }else if(data.list[30].weather[0].main == "Thunder"){
                    fourIconQuery.innerHTML = '<img src="./assets/weather-four.png" width="145px" height="125px">'
                }else if(data.list[30].wind.speed > 15){
                    fourIconQuery.innerHTML = '<img src="./assets/weather-seven.png" width="145px" height="125px">'
                }

                fiveHotQuery.textContent = Math.round((((parseInt(data.list[38].main.temp_max)-273.15) * 9)/5)) + 32 + " °F"
                fiveColdQuery.textContent = Math.round((((parseInt(data.list[38].main.temp_min)-273.15) * 9)/5)) + 32 + " °F"
                fiveWindQuery.textContent = data.list[38].wind.speed + " Mph"
                fiveHumidityQuery.textContent = data.list[38].main.humidity + " %"

                if(data.list[38].weather[0].main == "Clear"){
                    fiveIconQuery.innerHTML = '<img src="./assets/weather-three.png" width="145px" height="125px">'
                } else if(data.list[38].weather[0].main == "Rain"){
                    fiveIconQuery.innerHTML = '<img src="./assets/weather-two.png" width="145px" height="125px">'
                }else if(data.list[38].weather[0].main == "Clouds"){
                    fiveIconQuery.innerHTML = '<img src="./assets/weather-one.png" width="145px" height="125px">'
                }else if(data.list[38].weather[0].main == "Thunder"){
                    fiveIconQuery.innerHTML = '<img src="./assets/weather-four.png" width="145px" height="125px">'
                }else if(data.list[38].wind.speed > 15){
                    fiveIconQuery.innerHTML = '<img src="./assets/weather-seven.png" width="145px" height="125px">'
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

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Location denied")
    }
  }
    function showPosition(position) {
    console.log( "Latitude: " + position.coords.latitude + " Longitude: " + position.coords.longitude)
    let defaultLat = position.coords.latitude
    let defaultLon = position.coords.longitude
    site_URL(position.coords.latitude, position.coords.longitude);
  }

getLocation()

 
