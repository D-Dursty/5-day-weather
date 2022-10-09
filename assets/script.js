
var searchForm = document.querySelector('.search-form');
var locationInputEl = document.querySelector('#city-search-bar');
var searchButton = document.querySelector('#search-button'); 
var locationNameHeader = document.getElementById('location-name');
var apikey = "d0a8f37b50d92626e9a300a3ada7866b";

//click event to search

function getAPI(locationName){ 
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + locationName + "&appid=" + apikey;

    fetch(apiURL, {
        cache: "reload",
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
})
}
searchButton.addEventListener('click', function searchLocation(event) {
    event.preventDefault();
   getAPI(locationInputEl.value) 
 console.log(locationInputEl.value);
})

// retrieve geographical coordinates for a searched city

//present date for 'today' + following 4 days

//present city weather conditions for 'today', 'tomorrow' + following three days
//conditions = city name, the date, icon representation of weather conditions, temperature, humidity, wind speed

//use localStorage for persistent data (city is added to seach history to easily access weather conditions) saved in search bar
