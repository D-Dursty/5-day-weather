console.log('hello world');
var searchForm = document.querySelector('.search-form');
var cityInputEl = document.querySelector('.city-search-bar');
var searchButton = document.querySelector('.search-button'); 
var locationNameHeader = document.getElementById('location-name');
apikey = "97b38167c60b6e9a3150e694ec7d645d"
apiURL = "https://api.openweathermap.org/data/2.5/weather?"

var formSubmitHandler = function(event) {
    event.preventDefault();

    var city = cityInputEl.value.trim();

    if (city) {
        getCityName(city);

        locationNameHeader.textContent = '';
        cityInputEl.value = '';
    } else {
        alert('Please enter a searchable location.');
    }
    console.log('yahoo');
};

searchButton.addEventListener('submit', formSubmitHandler);
//click event to search

var searchButtonHandler = function (event) {
    var language = event.target.getAttribute('data-language');

    if(language) {
        getFeaturedLocation(language);
    }
}

// retrieve geographical coordinates for a searched city

//present date for 'today' + following 4 days

//present city weather conditions for 'today', 'tomorrow' + following three days
//conditions = city name, the date, icon representation of weather conditions, temperature, humidity, wind speed

//use localStorage for persistent data (city is added to seach history to easily access weather conditions) saved in search bar 

