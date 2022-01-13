setInterval(function () {
    var currentDisplayEl = moment().format("[Today is] dddd, MMMM Do YYYY");
    document.getElementById('clock').textContent = currentDisplayEl
}, 0)

var getWeather = function (city) {
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
                            //object data storing in variable called current
                            var current = {
                                humidity: data.current.humidity,
                                temp: data.current.temp,
                                clouds: data.current.clouds,
                                icon: data.current.weather[0].icon
                            }

                            console.log(current, data);
                            //adding current temp
                            document.getElementById('degree').textContent = "Current Temp: " + Math.floor(current.temp) + "°"
                            //adding weather icon to html
                            document.getElementById('icon').setAttribute("src", `http://openweathermap.org/img/wn/${current.icon}@2x.png`)
                            //adding city name
                            var cityInput = document.getElementById("inputCity").value
                            var nameOfCity = document.getElementById("cityName")
                            nameOfCity.textContent = cityInput.toUpperCase()
                            //to display weather box on webpage
                            var boxEl = document.getElementById("weather-box")
                            boxEl.setAttribute("class", "card")

                        })
                    })
            })
        })

}

var buttonEl = document.getElementById("submitBtn")
buttonEl.addEventListener("click", function () {

    var search = document.getElementById("inputCity").value
    getWeather(search)
})
