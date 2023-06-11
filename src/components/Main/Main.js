import { WeatherCard } from "./WeatherCard/WeatherCard"
import { DailyWeather } from "./DailyWeather/DailyWeather"
import { HourlyWeather } from "./HourlyWeather/HourlyWeather";
import { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';

export const Main = () => {
    const { forecast } = useContext(WeatherContext);
    return (
        <main>
            <div id="wrapper">
                    <WeatherCard forecast={forecast}/>

                <div className="dayAndHour">
                    <DailyWeather />   
                    <HourlyWeather forecast={forecast}/>
                </div>      
            </div>
               
        </main>
    )
}