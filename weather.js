function checkweather(){
    let city = document.getElementById("city").value;
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + c")
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("result").innerText = "City not found!";
            } else {
            document.getElementById("result").innerHTML = 
    "<b>" + data.name + "</b><br>" +
    "Temp: " + data.main.temp + "C, feels like: " + data.main.feels_like + "C<br>" +
    "Sky: " + data.weather[0].description + "<br>" +
    "Wind: " + data.wind.speed + "km/h<br>" +
    "Humidity: " + data.main.humidity + "%"
            }
        });
};
