var currentDay = moment().format('dddd')
var nextDay = ''
if (currentDay === "Monday"){
    nextDay = "Friday"
    document.getElementById("dayOfWeek4").textContent = nextDay
}
else if (currentDay === "Tuesday"){
    nextDay = "Saturday"
    document.getElementById("dayOfWeek4").textContent = nextDay
}
else if (currentDay === "Wednesday"){
    nextDay = "Sunday"
    document.getElementById("dayOfWeek4").textContent = nextDay
}
else if (currentDay === "Thursday"){
    nextDay = "Monday"
    document.getElementById("dayOfWeek4").textContent = nextDay
}
else if (currentDay === "Friday"){
    nextDay = "Tuesday"
    document.getElementById("dayOfWeek4").textContent = nextDay
}
else if (currentDay === "Saturday"){
    nextDay = "Wednesday"
    document.getElementById("dayOfWeek4").textContent = nextDay
}else{
    nextDay = "Thursday"
    document.getElementById("dayOfWeek4").textContent = nextDay
}
// function to fetch API
var getWeather4 = function (city) {
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
                            //object data storing in variable called daily[3]
                            var daily = {
                                feel: data.daily[3].feels_like,
                                humidity: data.daily[3].humidity,
                                highTemp: data.daily[3].temp.max,
                                lowTemp: data.daily[3].temp.min,
                                wind: data.daily[3].wind_speed,
                                uv: data.daily[3].uvi,
                                icon: data.daily[3].weather[0].icon
                            }
                            //adding daily[3] temp
                            document.getElementById('degree4').textContent = "Low: " + Math.floor(daily.lowTemp) + "°  " + " High: " + Math.floor(daily.highTemp) + "°"
                            //adding weather icon to html
                            document.getElementById('icon4').setAttribute("src", `http://openweathermap.org/img/wn/${daily.icon}@2x.png`)
                            // document.getElementById('feels_like1').textContent = "Feels like " + Math.floor(daily.feel) + "°"
                            document.getElementById('humidity4').textContent = "Humidity: " + daily.humidity
                            document.getElementById('wind4').textContent = "Wind: " + daily.wind + "mph"
                            var uvIndex = document.getElementById('uv-index4')
                            if (daily.uv < 2) {
                                uvIndex.textContent = "UV: " + daily.uv  +" level: Low"
                                var uvColor = document.getElementById("uv-color4");
                                uvColor.setAttribute('class', 'uv0-2')
                            } if (daily.uv > 2 && daily.uv < 6) {
                                uvIndex.textContent = "UV: " + daily.uv + " level: Moderate"
                                var uvColor = document.getElementById("uv-color4");
                                uvColor.setAttribute('class', 'uv3-5')
                            } if (daily.uv > 6 && daily.uv < 8) {
                                uvIndex.textContent = "UV: " + daily.uv + " level: High"
                                var uvColor = document.getElementById("uv-color4");
                                uvColor.setAttribute('class', 'uv6-7')
                            } if (daily.uv > 8 && daily.uv < 11) {
                                uvIndex.textContent = "UV: " + daily.uv + " level: Very High"
                                var uvColor = document.getElementById("uv-color4");
                                uvColor.setAttribute('class', 'uv8-10')
                            } if (daily.uv > 11) {
                                uvIndex.textContent = "UV: " + daily.uv + " level: Extreme"
                                var uvColor = document.getElementById("uv-color4");
                                uvColor.setAttribute('class', 'uv11up')
                            }
                            console.log(daily.feel);
                            //to display weather box on webpage
                            var boxEl = document.getElementById("weather-box4")
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
    getWeather4(search)
    
})