const apikey = "addb76e535c4e5e7659ab5807b934e3b"

var getWeather = function (city) {
    var apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=addb76e535c4e5e7659ab5807b934e3b`;
    // lookuplocation need to be in html 
    fetch(apiUrl)
        .then(function (response) {
            return response.json().then(function (data) {
                //this is the data object.
                var lon = data[0].lon
                var lat = data[0].lat

                // console.log(lon, lat);
                return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=addb76e535c4e5e7659ab5807b934e3b`)
                    .then(function (response) {
                        return response.json().then(function (data) {
                            var current = {
                                humidity: data.current.humidity,
                                temp: data.current.temp,
                                clouds: data.current.clouds,
                                icon: data.current.weather[0].icon
                            }
                            console.log(current,data);
                            document.getElementById('degree').textContent = "Current Temp: " + Math.floor(current.temp) + "°" 
                            document.getElementById('icon').setAttribute("src",`http://openweathermap.org/img/wn/${current.icon}@2x.png`)
                            
                            
                        })
                    })
            })
        })

}
// var displayResult = document.getElementById("display-result")
var buttonEl = document.getElementById("submitBtn")
buttonEl.addEventListener("click", function () {
    var search = document.getElementById("inputCity").value
    getWeather(search)
})
