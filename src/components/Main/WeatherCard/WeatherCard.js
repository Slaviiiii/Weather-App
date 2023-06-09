import './WeatherCard.css';
export const WeatherCard = () => {

    return (
        <div className="card-container">
            <div className="weather">     
                <div className='city-container'>
                    <h2 className="city">Andorrasdssss, BG</h2>    
                </div>
                  
                <div className='icon-container'>
                    <img src="icons/01d.png" alt="sun" className="weather-icon"/>    
                </div> 
                
                <div className='weather-type-container'>
                    <p className='weather-type'>sunny</p>     
                </div>

                <div>
                    <p id='card-day'><i class="fa-solid fa-calendar-days"></i> Sunday</p>    
                </div> 
                      
                <div className='temp-container'>
                    <h1 className="temp">22°c</h1>     
                </div>      
                
                <div className='details'>
                    <ul>
                        <li id='details-heading'>Details</li>
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
