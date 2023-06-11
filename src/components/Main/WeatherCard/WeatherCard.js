import './WeatherCard.css';
export const WeatherCard = () => {

    return (
        <div className="card-container">
            <div className="weather"> 
              <p id='card-day'><i className="fa-solid fa-calendar-days"></i> Sunday</p>
                <div className='icon-container'>
                    <img src="icons/01d.png" alt="sun" className="weather-icon"/>    
                </div> 
                <p className='weather-type'>sunny</p>

                <div className='temp-container'>
                    <h1 className="temp">22°C</h1>     
                </div>  

                <div className='city-container'>
                    <p className="city">Andorrasdssss, BG</p> 
                          
                </div>             
                
                <div className='details'>
                    <p id='details-heading'>Details</p>
                    <ul>
                        <li><span className='details-topic'>Feels like</span>  <span className='details-value'>21°c</span></li>
                        <li><span className='details-topic'>Wind</span>  <span className='details-value'>6 m/s</span></li>
                        <li><span className='details-topic'>Humidity</span> <span className='details-value'>36%</span></li>
                        <li><span className='details-topic'>Pressure</span>  <span className='details-value'>1010 hPa</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
