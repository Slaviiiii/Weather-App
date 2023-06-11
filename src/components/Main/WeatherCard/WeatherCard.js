import './WeatherCard.css';

export const WeatherCard = (data) => {

    return (
        <div className="card-container">
            <div className="weather"> 
              <p id='card-day'><i className="fa-solid fa-calendar-days"></i> </p>
                <div className='icon-container'>
                    <img src={data?.forecast?.current?.condition?.icon} alt="sun" className="weather-icon"/>    
                </div> 
                <p className='weather-type'>{data?.forecast.current.condition.text}</p>

                <div className='temp-container'>
                    <h1 className="temp">{data?.forecast.current.temp_c}°C</h1>     
                </div>  

                <div className='city-container'>
                    <p className="city">{data?.forecast.city}</p> 
                          
                </div>             
                
                <div className='details'>
                    <p id='details-heading'>Details</p>
                    <ul>
                        <li><span className='details-topic'>Feels like</span>  <span className='details-value'>{data?.forecast.current.feelslike_c}°c</span></li>
                        <li><span className='details-topic'>Wind</span>  <span className='details-value'>{data?.forecast.current.wind_mph} m/s</span></li>
                        <li><span className='details-topic'>Humidity</span> <span className='details-value'>{data?.forecast.current.humidity}%</span></li>
                        <li><span className='details-topic'>Pressure</span>  <span className='details-value'>{data?.forecast.current.pressure_mb} hPa</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
