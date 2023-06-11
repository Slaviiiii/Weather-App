import './HourlyWeather.css';
export const HourlyWeather = (data) => {
    const  data.forecast?.forecast?.forecastday[0]?.hour[0]?.time;

    return (
        <div className="hourly-container">
                <div className='hour-container'>
                    <p>{}</p>
                    <img src="icons/01d.png" alt="sun" className="hourly-weather-icon"/>    
                    <h1 className="hourly-temp">22°C</h1>     
                </div>

                <div className='hour-container'>
                    <p>Monhourly</p>
                    <img src="icons/01d.png" alt="sun" className="hourly-weather-icon"/>    
                    <h1 className="hourly-temp">22°C</h1>     
                </div>

                <div className='hour-container'>
                    <p>Monhourly</p>
                    <img src="icons/01d.png" alt="sun" className="hourly-weather-icon"/>    
                    <h1 className="hourly-temp">22°C</h1>     
                </div>

                <div className='hour-container'>
                    <p>Monhourly</p>
                    <img src="icons/01d.png" alt="sun" className="hourly-weather-icon"/>    
                    <h1 className="hourly-temp">22°C</h1>     
                </div>

                <div className='hour-container'>
                    <p>Monhourly</p>
                    <img src="icons/01d.png" alt="sun" className="hourly-weather-icon"/>    
                    <h1 className="hourly-temp">22°C</h1>     
                </div>

                <div className='hour-container'>
                    <p>Monhourly</p>
                    <img src="icons/01d.png" alt="sun" className="hourly-weather-icon"/>    
                    <h1 className="hourly-temp">22°C</h1>     
                </div>

                <div className='hour-container'>
                    <p>Mondau</p>
                    <img src="icons/01d.png" alt="sun" className="hourly-weather-icon"/>    
                    <h1 className="hourly-temp">22°C</h1>     
                </div>
        </div>
    )
}