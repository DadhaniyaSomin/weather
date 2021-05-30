let weather = {
    "apikey" : "1e445cd65572f8fa3fe913782889d637",
    fetchFunctions : function(city)
    {
     fetch("http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=1e445cd65572f8fa3fe913782889d637")
     .then((response) => response.json())
     .then((data) => this.displayWeather(data))

    },
    displayWeather: function (data)
    {
       const  {name} = data;
       const  {icon , description} = data.weather[0];
       const {temp ,humidity} = data.main;
       const {speed} = data.wind;
      console.log(name, description,icon, temp,humidity , speed);
       document.querySelector(".city").innerHTML = name;
       document.querySelector(".temp").innerHTML = temp + " °C";
       document.querySelector(".humidity").innerHTML = "Humidity : " + humidity  + " % " ;
       document.querySelector(".description").innerHTML = description;
       document.querySelector(".wind").innerHTML = "Wind speed : " + speed + " km/h";
        document.body.style.backgroundImage= "url('https://source.unsplash.com/1600x900/? " + name +"')";
    },
     search : function(){
       this.fetchFunctions(document.querySelector(".search-bar").value);
     }
};

document.querySelector(".search button")
.addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup" ,(event) => {
   
    if(event.key == "Enter")
    {
        weather.search();
    }
 
})


