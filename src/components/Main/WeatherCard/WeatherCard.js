import './WeatherCard.css';

export const WeatherCard = (data) => {
    const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const date = data.forecast?.forecast?.forecastday[0].date;
    const icon = data.forecast?.current?.condition?.icon;
    const weatherType = data.forecast?.current.condition.text;
    const temp = data.forecast?.current.temp_c;
    const city = data.forecast?.city;
    const feelslike = data.forecast?.current.feelslike_c;
    const wind = data.forecast?.current.wind_mph;
    const humidity = data.forecast?.current.humidity;
    const pressure = data.forecast?.current.pressure_mb;

    const fixedDate = new Date(date);
    const day = fixedDate.getDay();

    return (
        <div className="card-container">
            <div className="weather"> 
              <p id='card-day'><i className="fa-solid fa-calendar-days"></i> {daysArray[day]}</p>
                <div className='icon-container'>
                    <img src={icon} alt="sun" className="weather-icon"/>    
                </div> 
                <p className='weather-type'>{weatherType}</p>

                <div className='temp-container'>
                    <h1 className="temp">{Math.round(temp)}°C</h1>     
                </div>  

                <div className='city-container'>
                    <p className="city">{city}</p> 
                </div>             
                
                <div className='details'>
                    <p id='details-heading'>Details</p>
                    <ul>
                        <li><span className='details-topic'>Feels like</span>  <span className='details-value'>{feelslike}°c</span></li>
                        <li><span className='details-topic'>Wind</span>  <span className='details-value'>{wind} m/s</span></li>
                        <li><span className='details-topic'>Humidity</span> <span className='details-value'>{humidity}%</span></li>
                        <li><span className='details-topic'>Pressure</span>  <span className='details-value'>{pressure} hPa</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
