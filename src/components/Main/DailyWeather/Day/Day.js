import './Day.css';

export const Day = (dayData) => {
    const daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const date = dayData?.item?.date;
    const icon = dayData?.item?.day?.condition?.icon;
    const temp_c = dayData?.item?.day?.avgtemp_c;

    const fixedDate = new Date(date);
    const day = fixedDate.getDay();

    return (
        <div className='day-container'>
            <p>{daysArray[day]}</p>
            <img src={icon} alt="sun" className="daily-weather-icon"/>    
            <h1 className="daily-temp">{temp_c}°C</h1>     
        </div>
    )
}