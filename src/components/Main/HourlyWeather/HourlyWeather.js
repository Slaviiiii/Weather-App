import './HourlyWeather.css';
import { Hour } from './Hour/Hour';

export const HourlyWeather = (data) => {
    const allHours = [data?.forecast?.forecast?.forecastday[0]?.hour.slice(0, 7)]; 

    return (
        <div className="hourly-container">
              {allHours[0]?.map((item, index) => (
        		<Hour item={item} key={index}/>
              ))} 
        </div>    
    )  
} 