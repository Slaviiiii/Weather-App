import { createContext, useEffect, useState } from "react";
import { GEO_API_URL, WEATHER_API_KEY } from '../api';

export const WeatherContext = createContext();

export const Weather = ({ children }) => {

    const [search, setSearch] = useState(null);
    const [hourlyForecast, setHourlyForecast] = useState(null);
    const [dailyForecast, setDailyForecast] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        ((async () => {
                const sofiaHourlyForecastRes = await fetch(`${GEO_API_URL}/forecast.json?key=${WEATHER_API_KEY}&q=Sofia`);
                const sofiaHourlyForecast = await sofiaHourlyForecastRes.json();
                const sofiaDailyForecastRes = await fetch(`${GEO_API_URL}/forecast.json?key=${WEATHER_API_KEY}&q=Sofia&days=8`);
                const sofiaDailyForecast = await sofiaDailyForecastRes.json();

                setHourlyForecast({ city: 'Sofia, Bulgaria', ...sofiaHourlyForecast });
                setDailyForecast({ city: 'Sofia, Bulgaria', ...sofiaDailyForecast });
                setIsLoading(false);
        }))()
    }, [])

    const loadOptions = async (inputValue) => {
        let data = [];
        let response = "";
        try {
            // if(inputValue === "") {
            //     response = await fetch(`${GEO_API_URL}/search.json?key=${WEATHER_API_KEY}&q=${initValue}`); 
            // } else {
                response = await fetch(`${GEO_API_URL}/search.json?key=${WEATHER_API_KEY}&q=${inputValue ? inputValue : 'Sofia'}`); 
            // }
            const res = await response.json();
            data = {
                options: res.map(x => {
                    return {
                        label: `${x.name}, ${x.country}`
                    }
                })
            }
            return data;
        }
        catch (err) {
            console.log(err.message);
        }
    }

    const onSearchChange = async (searchData) => {
        const [city, country] = searchData.label.split(', ');

            const hourlyForecastRes = await fetch(`${GEO_API_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${city}`);
            const hourlyForecastData = await hourlyForecastRes.json();
            const dailyForecastRes = await fetch(`${GEO_API_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=8`);
            const dailyForecastData = await dailyForecastRes.json();

            setHourlyForecast({ city: `${city}, ${country}`, ...hourlyForecastData });
            setDailyForecast({ city: `${city}, ${country}`, ...dailyForecastData })
        setIsLoading(false);
    }

    const handleOnChange = (searchValue) => {
        setSearch(searchValue);
        onSearchChange(searchValue);
    }

    const contextValues = {
        dailyForecast,
        hourlyForecast,
        handleOnChange,
        onSearchChange,
        loadOptions,
        search,
        isLoading,
    }

    return (
        <>
            <WeatherContext.Provider value={contextValues}>
                {children}
            </WeatherContext.Provider>
        </>
    )
}