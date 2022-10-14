var apikey = "d0a8f37b50d92626e9a300a3ada7866b";
var weatherIcon = "https://openweathermap.org/img/wn/${(data.weather[0].icon)}.png"

var searchForm = document.querySelector('.search-form');
var locationInputEl = document.querySelector('#city-search-bar');
var searchButton = document.querySelector('#search-button'); 
var locationNameHeader = document.getElementById('location-name');
var date = document.getElementById('date');
var tempMain = document.getElementById('temp-main');
var windMain = document.getElementById('wind-main');
var humidMain = document.getElementById('humid-main');

var weatherContainer = document.querySelector('.weather-result-container');

var icon = document.getElementById('icon');
var today = document.getElementById('day1');
var day2 = document.getElementById('day2');
var day3 = document.getElementById('day3');
var day4= document.getElementById('day4');
var day5 = document.getElementById('day5');


//click event to search



function getCityAPI(locationName){ 
    locationNameHeader.textContent = '';

    var firstQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + locationName + "&appid=" + apikey + "&units=imperial";

    fetch(firstQueryURL, {
        cache: "reload",
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            locationNameHeader.textContent = data.name;
         //   icon.textContent = "https://openweathermap.org/img/wn/${(data.weather[0].icon)}.png"
            date.textContent = moment(data.tm).format("ddd MMM DD, YYYY")
            tempMain.textContent = "Temp: " + data.main.temp + " °F";
            windMain.textContent = "Wind: " + data.wind.speed + " mph";
            humidMain.textContent = "Humidity: " + data.main.humidity + " %";
        nextFiveAPI(locationName);
});
// locationInputEl.value
}
function nextFiveAPI(locationName) {
    var nextFiveURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + locationName + "&appid=" + apikey + "&units=imperial";

    fetch(nextFiveURL, {
        cache: "reload",
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var nextFiveDataArray = data.list;
        console.log(data);
        //looping through list array
        for (var i = 0; i < nextFiveDataArray.length; i++){
            //if dt_txt contains 09:00:00
            if(nextFiveDataArray[i].dt_txt.includes('09:00:00')){
            //console the items that match the condition out
                var nextFiveDates = nextFiveDataArray[i];
            }
        }
    }) 

}
    

searchButton.addEventListener('click', function(event) {
    event.preventDefault();
         getCityAPI(locationInputEl.value) 

         

});


// retrieve geographical coordinates for a searched city

//present date for 'today' + following 5 days

//present city weather conditions for 'today', 'tomorrow' + following three days
//conditions = city name, the date, icon representation of weather conditions, temperature, humidity, wind speed

//use localStorage for persistent data (city is added to seach history to easily access weather conditions) saved in search bar
