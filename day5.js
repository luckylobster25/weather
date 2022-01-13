var currentDay = moment().format('dddd')
var nextDay = ''
if (currentDay === "Monday"){
    nextDay = "Saturday"
    document.getElementById("dayOfWeek5").textContent = nextDay
}
else if (currentDay === "Tuesday"){
    nextDay = "Sunday"
    document.getElementById("dayOfWeek5").textContent = nextDay
}
else if (currentDay === "Wednesday"){
    nextDay = "Monday"
    document.getElementById("dayOfWeek5").textContent = nextDay
}
else if (currentDay === "Thursday"){
    nextDay = "Tuesday"
    document.getElementById("dayOfWeek5").textContent = nextDay
}
else if (currentDay === "Friday"){
    nextDay = "Wednesday"
    document.getElementById("dayOfWeek5").textContent = nextDay
}
else if (currentDay === "Saturday"){
    nextDay = "Thursday"
    document.getElementById("dayOfWeek5").textContent = nextDay
}else{
    nextDay = "Friday"
    document.getElementById("dayOfWeek5").textContent = nextDay
}
// function to fetch API
var getWeather5 = function (city) {
    var apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=addb76e535c4e5e7659ab5807b934e3b`;
    fetch(apiUrl)
        .then(function (response) {
            return response.json().then(function (data) {
                //API to find the latitude and longitude of user input if it is a city.
                var lon = data[0].lon
                var lat = data[0].lat
                console.log(data);
                return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=addb76e535c4e5e7659ab5807b934e3b`)
                    .then(function (response) {
                        return response.json().then(function (data) {
                            //API to get data for daily day 5 weather
                            var daily = {
                                feel: data.daily[4].feels_like,
                                humidity: data.daily[4].humidity,
                                highTemp: data.daily[4].temp.max,
                                lowTemp: data.daily[4].temp.min,
                                wind: data.daily[4].wind_speed,
                                uv: data.daily[4].uvi,
                                icon: data.daily[4].weather[0].icon
                            }
                            //adding daily[4] temp
                            document.getElementById('degree5').textContent = "Low: " + Math.floor(daily.lowTemp) + "°  " + " High: " + Math.floor(daily.highTemp) + "°"
                            //adding weather icon to html
                            document.getElementById('icon5').setAttribute("src", `http://openweathermap.org/img/wn/${daily.icon}@2x.png`)
                            document.getElementById('humidity5').textContent = "Humidity: " + daily.humidity
                            document.getElementById('wind5').textContent = "Wind: " + daily.wind + "mph"
                            var uvIndex = document.getElementById('uv-index5')
                            // UV index comparison statement for color 
                            if (daily.uv < 2) {
                                uvIndex.textContent = "UV: " + daily.uv  +" level: Low"
                                var uvColor = document.getElementById("uv-color5");
                                uvColor.setAttribute('class', 'uv0-2')
                            } if (daily.uv > 2 && daily.uv < 6) {
                                uvIndex.textContent = "UV: " + daily.uv + " level: Moderate"
                                var uvColor = document.getElementById("uv-color5");
                                uvColor.setAttribute('class', 'uv3-5')
                            } if (daily.uv > 6 && daily.uv < 8) {
                                uvIndex.textContent = "UV: " + daily.uv + " level: High"
                                var uvColor = document.getElementById("uv-color5");
                                uvColor.setAttribute('class', 'uv6-7')
                            } if (daily.uv > 8 && daily.uv < 11) {
                                uvIndex.textContent = "UV: " + daily.uv + " level: Very High"
                                var uvColor = document.getElementById("uv-color5");
                                uvColor.setAttribute('class', 'uv8-10')
                            } if (daily.uv > 11) {
                                uvIndex.textContent = "UV: " + daily.uv + " level: Extreme"
                                var uvColor = document.getElementById("uv-color5");
                                uvColor.setAttribute('class', 'uv11up')
                            }
                            console.log(daily.feel);
                            //to display weather box on webpage
                            var boxEl = document.getElementById("weather-box5")
                            boxEl.setAttribute("class", "card")

                        })
                    })
            })
        })

}


var buttonEl = document.getElementById("submitBtn")
// button executing code when click
buttonEl.addEventListener("click", function () {
    var search = document.getElementById("inputCity").value
    getWeather5(search)
    
})