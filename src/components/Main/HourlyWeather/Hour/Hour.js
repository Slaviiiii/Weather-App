import './Hour.css';

export const Hour = (hourlyData) => {
    const time = hourlyData.item.time.split(' ')[1];
    const icon = hourlyData.item.condition.icon;
    const temp_c = hourlyData.item.temp_c;

    return (
        <div className='hour-container'>
            <p>{time}</p>
            <img src={icon} alt="sun" className="hourly-weather-icon"/>    
            <h1 className="hourly-temp">{temp_c}°C</h1>     
        </div>
    )
}