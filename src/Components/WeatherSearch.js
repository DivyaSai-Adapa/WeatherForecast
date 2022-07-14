import React,{useContext} from "react";
import css from "./WeatherSearch.css"
import WeatherInfoCard from "./WeatherInfoCard";
import Context from "../Context";

const WeatherSearch = () => {
    const {getWeatherData} = useContext(Context)
    return(
 
        
        <div className="weatherSearch">
           
            <form onSubmit = {getWeatherData} className="search_form">
                
                <label><input name="location" type="text" placeholder="Enter name of a city" className="city" /></label>
                
                <label><button className="submitButton" >Show Weather Info</button></label>
            </form>
            
            
            
        </div>
    )
}

export default WeatherSearch;