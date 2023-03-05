import { useEffect, useState } from "react"
 import axios from "axios"

 const WeatherInfo = ({ c }) => {
   const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY
   const [weatherInfo, setWeatherInfo] = useState([])

   useEffect(() => {
     axios
       .get(`https://api.openweathermap.org/data/2.5/weather?q=${c}&units=metric&appid=${WEATHER_API_KEY}`)
       .then((r) => {setWeatherInfo(r.data)})
   }, [WEATHER_API_KEY, c])

   return (
     <>
       {weatherInfo.main ? (
         <div>
            <h2>Weather in {c}</h2>
            <div>temperature {weatherInfo.main.temp} Celsius</div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
                alt={`weather icon`}
              />
            <div>wind {weatherInfo.wind.speed} m/s</div>
         </div>
       ) : null}
     </>
   )
 }

 export default WeatherInfo