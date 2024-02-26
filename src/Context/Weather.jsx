import { createContext, useContext, useState } from "react";
import { getCurrentLocation, getWeatherDataForCity } from "../Api"
const weatherContext = createContext(null);

export const useWeather = () => {
    return useContext(weatherContext)
}

export const WeatherProvider = (props) => {

    const [data, setData] = useState(null);
    const [search, setSearch] = useState(null);

    const fetchData = async () => {
        const response = await getWeatherDataForCity(search)
        return setData(response);
    }

    const fetchCurrentLocationData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getCurrentLocation(position.coords.latitude, position.coords.longitude).then(data => setData(data))
        })
    }



    return <weatherContext.Provider value={{ data, search, setSearch, fetchData, fetchCurrentLocationData }}>{props.children}</weatherContext.Provider>
}




