import React, { useState } from "react";
import axios from "axios";
import WeatherInfoCard from "./WeatherInfoCard"


    
    function WeatherInfo(){
        const [data,setData] = useState({})
      
        const [location,setLocation] = useState('')
        const url = `https://api.weatherapi.com/v1/forecast.json?key=9627e13f495d4ab8959142307221207&q=${location}&days=1&aqi=no&alerts=no`
    const searchLocation = (event) =>{
          if (event.key === 'Enter'){
          axios.get(url).then((response) =>{
            setData(response.data)
            console.log(response.data)
            
          })
        }
        
    }
    return (<div>
        <input type="text" placeholder = "Enter name of a city" value ={location} onChange = {event => setLocation(event.target.value) }
      onKeyPress = {searchLocation}></input>
        <p>{data.Key}</p>
    </div>);
};

export default WeatherInfoCard;