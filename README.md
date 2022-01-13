# 🪟🌛 -- Weather Application -- ❄️🌞
## Overview 
*****************
Deployment link:[ The weather app](https://luckylobster25.github.io/weather/)
*****************
![Overview of the whole Project](img\overview-of-project.png)
This is how the application look when cities are entered in as input. Big box display the current weather while the other five box is the five day foecast. 
### Tools used in application:
* [Bootstrap](https://getbootstrap.com/docs/4.5/components/alerts/) is the main CSS framework. There is also a [style sheet](style.css) which is used to overwrite or adjust certain bootstrap code. 
* Another very beautiful tool is [moment.js](https://momentjs.com/docs/#/displaying/)⏲️ which was used to create the current date on header. 
## Application Programming Interface (API)
* The API used in this application is obtain from [Openweatehermap.org](https://openweathermap.org/api)
## How does this application work?
![The Initial Look](img\initial-look.png)
* When application is first opened, this is how it will look. The white box is where user can enter in a city anywhere in the world. 
* After entering in a city, user can click on the "Submit" button to load data. 
* User input are being store below the search bar. 
* The "Clear" button allow user to clear the history. 
******************
![current-day](img\current-day.png)
* The image above is what the current day will display. 
* Current day will display the city name and current temperature.
* It is also the biggest display. 
*******
![5dayfoecast](img\five-day-foecast.png)
* The five day foecast, will display weather for the next five day.
* It will show low temperature and high temperature for these day.
* Each weather icon represent the condition of the weather for day.
 🌧️     ❄️     ☀️
 ********************
![UV-index](https://www.sknclinics.co.uk/wp-content/uploads/2018/07/UV-index-scale-scaled.jpg)
* Lastly, there is the UV index which tell user the risk level of UV.