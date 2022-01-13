var currentDay = moment().format('dddd')
var nextDay = ''
if (currentDay === "Monday"){
    nextDay = "Thursday"
    document.getElementById("dayOfWeek3").textContent = nextDay
}
else if (currentDay === "Tuesday"){
    nextDay = "Friday"
    document.getElementById("dayOfWeek3").textContent = nextDay
}
else if (currentDay === "Wednesday"){
    nextDay = "Saturday"
    document.getElementById("dayOfWeek3").textContent = nextDay
}
else if (currentDay === "Thursday"){
    nextDay = "Sunday"
    document.getElementById("dayOfWeek3").textContent = nextDay
}
else if (currentDay === "Friday"){
    nextDay = "Monday"
    document.getElementById("dayOfWeek3").textContent = nextDay
}
else if (currentDay === "Saturday"){
    nextDay = "Tuesday"
    document.getElementById("dayOfWeek3").textContent = nextDay
}else{
    nextDay = "Wednesday"
    document.getElementById("dayOfWeek3").textContent = nextDay
}
// function to fetch API
var getWeather3 = function (city) {
    var apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=addb76e535c4e5e7659ab5807b934e3b`;
    // lookuplocation need to be in html 
    fetch(apiUrl)
        .then(function (response) {
            return response.json().then(function (data) {
                //this is the data object.
                var lon = data[0].lon
                var lat = data[0].lat
                console.log(data);
                return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=addb76e535c4e5e7659ab5807b934e3b`)
                    .then(function (response) {
                        return response.json().then(function (data) {
                            //object data storing in variable called daily[2]
                            var daily = {
                                feel: data.daily[2].feels_like,
                                humidity: data.daily[2].humidity,
                                highTemp: data.daily[2].temp.max,
                                lowTemp: data.daily[2].temp.min,
                                wind: data.daily[2].wind_speed,
                                uv: data.daily[2].uvi,
                                icon: data.daily[2].weather[0].icon
                            }
                            //adding daily[2] temp
                            document.getElementById('degree3').textContent = "Low: " + Math.floor(daily.lowTemp) + "°  " + " High: " + Math.floor(daily.highTemp) + "°"
                            //adding weather icon to html
                            document.getElementById('icon3').setAttribute("src", `http://openweathermap.org/img/wn/${daily.icon}@2x.png`)
                            // document.getElementById('feels_like1').textContent = "Feels like " + Math.floor(daily.feel) + "°"
                            document.getElementById('humidity3').textContent = "Humidity: " + daily.humidity
                            document.getElementById('wind3').textContent = "Wind: " + daily.wind + "mph"
                            var uvIndex = document.getElementById('uv-index3')
                            if (daily.uv < 2) {
                                uvIndex.textContent = "UV: " + daily.uv  +" level: Low"
                                var uvColor = document.getElementById("uv-color3");
                                uvColor.setAttribute('class', 'uv0-2')
                            } if (daily.uv > 2 && daily.uv < 6) {
                                uvIndex.textContent = "UV: " + daily.uv + " level: Moderate"
                                var uvColor = document.getElementById("uv-color3");
                                uvColor.setAttribute('class', 'uv3-5')
                            } if (daily.uv > 6 && daily.uv < 8) {
                                uvIndex.textContent = "UV: " + daily.uv + " level: High"
                                var uvColor = document.getElementById("uv-color3");
                                uvColor.setAttribute('class', 'uv6-7')
                            } if (daily.uv > 8 && daily.uv < 11) {
                                uvIndex.textContent = "UV: " + daily.uv + " level: Very High"
                                var uvColor = document.getElementById("uv-color3");
                                uvColor.setAttribute('class', 'uv8-10')
                            } if (daily.uv > 11) {
                                uvIndex.textContent = "UV: " + daily.uv + " level: Extreme"
                                var uvColor = document.getElementById("uv-color3");
                                uvColor.setAttribute('class', 'uv11up')
                            }
                            console.log(daily.feel);
                            //to display weather box on webpage
                            var boxEl = document.getElementById("weather-box3")
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
    getWeather3(search)
    
})