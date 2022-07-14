import React,{useContext} from "react";
import Context from "../Context";

import {WiDaySunny,WiDayCloudyWindy,WiRainWind} from "weather-icons-react";

const WeatherInfoCard = () =>{
    const {info,location} = useContext(Context)
    const data = info
    
    const sym = `http:${data.condition.icon}`
    
    
    // setInfo(req.data.current)
    
    return(
        <div className="weatherInfo" >
            <p>Weather Forecast for {location}</p>
            <h1>{data.temp_c} °C </h1> <h1>{data.temp_f} °F</h1>
            <h3><img src={sym} alt="weather symbol"/></h3>
            
            <p>{data.condition.text}</p>
            
            
        </div>

    )
}
export default WeatherInfoCard;