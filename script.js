let weather = {
    "apikey":"a73f2c775cbb9037d6b749d31ffa69cb",
     fetchWeather: function(city)
    {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city +
        "&units=metric&appid=" + this.apikey
        )
        .then((response) => response.json())
        .then((data) => this.displayweather(data));
    },
    displayweather: function(data){
        const{ name } = data;
        const{ icon, description} = data.weather[0];
        const{ temp,humidity } = data.main;
        const{ speed }=data.wind;
        console.log(name,icon,description,temp,speed);
        document.querySelector(".city").innerText = "Weather in " + name ;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".temp").innerText = "Temperature: " + temp +"°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind: " + speed + "km/h";
        document.querySelector(".discription").innerText = description;
        document.querySelector(".weather").classList.remove("loading");
        // document.body.style.backgroundImage= "url('https://images.unsplash.com/photo-1592210454359-9043f067919b?"+ name + "')"

 },
 select:function(){
this.fetchWeather(document.querySelector(".cities").value);
 }
};
document.querySelector(".select button").addEventListener("click",function(){
weather.select(); 
});
weather.fetchWeather("New Delhi");