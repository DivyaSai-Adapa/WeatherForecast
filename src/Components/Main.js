import axios from "axios";
import React,{useState} from "react";

import WeatherSearch from "./WeatherSearch";
import WeatherInfoCard from "./WeatherInfoCard";
import Context from "../Context";

const Main = () =>{

    const [info,setInfo] = useState()
    const [location,setLocation] = useState()
    const  getWeatherData = async e =>{
    e.preventDefault()
    const location = e.target.elements.location.value
    const api_key = "9627e13f495d4ab8959142307221207"
    const url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}&aqi=no`
   
    const req = axios.get(url)
    const res = await req    // waits untill API url fetches the data and stores response data to res
    setInfo(res.data.current)
    setLocation(res.data.location.name)
    console.log(res)
}

    info && console.log(info)
    
    // useEffect(() => {
    //     getWeatherData() 
    // }, [])
    return(
        <div className="main">
            <Context.Provider value={{getWeatherData : getWeatherData,info : info, location: location}}>
                <WeatherSearch />
                {info && <WeatherInfoCard />}
            
            </Context.Provider>

        
        </div>
    )
}

export default Main