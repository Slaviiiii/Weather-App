import './Hour.css';

export const Hour = (hourlyData) => {
    return (
        <div className='hour-container'>
            <p>{hourlyData.time}</p>
            <img src="icons/01d.png" alt="sun" className="hourly-weather-icon"/>    
            <h1 className="hourly-temp">22°C</h1>     
        </div>
    )
}