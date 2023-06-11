import { WeatherCard } from "./WeatherCard/WeatherCard"
import { DailyWeather } from "./DailyWeather/DailyWeather"
import { HourlyWeather } from "./HourlyWeather/HourlyWeather";
import { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';

export const Main = () => {
    const { dailyForecast, hourlyForecast } = useContext(WeatherContext);
    return (
        <main>
            <div id="wrapper">
                    <WeatherCard forecast={dailyForecast}/>

                <div className="dayAndHour">
                    <DailyWeather forecast={dailyForecast}/>   
                    <HourlyWeather forecast={hourlyForecast}/>
                </div>      
            </div>
               
        </main>
    )
}