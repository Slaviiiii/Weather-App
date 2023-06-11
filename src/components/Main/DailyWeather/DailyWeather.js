import './DailyWeather.css';
import { Day } from '../DailyWeather/Day/Day';

export const DailyWeather = (data) => {
    const allDays = [data?.forecast?.forecast?.forecastday[1],
    data?.forecast?.forecast?.forecastday[2],
    data?.forecast?.forecast?.forecastday[3],
    data?.forecast?.forecast?.forecastday[4],
    data?.forecast?.forecast?.forecastday[5],
    data?.forecast?.forecast?.forecastday[6],
    data?.forecast?.forecast?.forecastday[7]];

    return (
        <div className="daily-container">       
            {allDays?.map((item, index) => (
        		<Day item={item} key={index}/>
              ))}  
        </div>
    )
}