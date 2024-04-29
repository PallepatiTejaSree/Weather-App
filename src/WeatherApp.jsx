import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";


export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Hyderabad",
        feelsLike:34.21,
        humidity:26,
        temp:35.23,
        tempMax: 35.23,
        tempMin:34.73,
        weather:"few clouds"
    });

    let info=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App by Teja Sree</h1>
            <SearchBox updateInfo={info}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}