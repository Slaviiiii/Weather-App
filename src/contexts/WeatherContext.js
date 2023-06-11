import { createContext, useEffect, useState } from "react";
import { GEO_API_URL, WEATHER_API_KEY } from '../api'

export const WeatherContext = createContext();

export const Weather = ({ children }) => {

    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [search, setSearch] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(false);

    let initValue = "Sofia";
 
    const loadOptions = async (inputValue) => {
        let data = [];
        let response = "";
        try {
            if(inputValue === "") {
                response = await fetch(`${GEO_API_URL}/search.json?key=${WEATHER_API_KEY}&q=${initValue}`); 
            } else {
                response = await fetch(`${GEO_API_URL}/search.json?key=${WEATHER_API_KEY}&q=${inputValue}`); 
            }
            const res = await response.json();
            data = {
                options: res.map(x => {
                    return {
                        value: `${x.lat} ${x.lon}`,
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

    const handleOnChange = (searchValue) => {
        setSearch(searchValue);
    }

    const contextValues = {
        // weather,
        // forecast,
        handleOnChange,
        loadOptions,
        search,
        // isLoading,
        // fetchError,
    }

    return (
        <>
            <WeatherContext.Provider value={contextValues}>
                {children}
            </WeatherContext.Provider>
        </>
    )
}