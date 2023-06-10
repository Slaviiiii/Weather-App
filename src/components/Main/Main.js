import { WeatherCard } from "./WeatherCard/WeatherCard"
import { DailyWeather } from "./DailyWeather/DailyWeather"
import { HourlyWeather } from "./HourlyWeather/HourlyWeather";

export const Main = () => {
    return (
        <main>
            <div id="wrapper">
                <WeatherCard />
                
            <div className="dayAndHour">
                <DailyWeather />   
                <HourlyWeather />
            </div>      
            </div>
               
        </main>
    )
}