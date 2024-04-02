import react, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [list, setList] = useState(null);
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);

    const API_KEY = import.meta.env.VITE_APP_API_KEY;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
                const response = await axios.get(URL);
                console.log(response);
                if (Array.isArray(response.data.list)) {
                    setList(response.data.list);
                } else {
                    console.log('Invalid data format: list is not an array');
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        const displayDebounceFn = setTimeout(() => {
            if (city) {
                fetchData();
            }
        }, 1000);
        return () => clearTimeout(displayDebounceFn);
    }, [city, API_KEY]);

    return (
        <div>
            <input type="text" placeholder='Search...' value={city} onChange={(e) => setCity(e.target.value)} />
            {list && (
                <div>
                    {list.map((forecast, index) => (
                        <div key={index}> 
                            <p>Date and Time: {forecast.dt_txt}</p>
                            <p>Temperature: {forecast.main.temp}</p>
                            <p>Temp_min: {forecast.main.temp_min}</p>
                            <p>Temp_max: {forecast.main.temp_max}</p>
                            <p>Weather: {forecast.weather[0].main}</p>
                            <p>Description: {forecast.weather[0].description}</p>
                            <p>Wind speed: {forecast.wind.speed}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Search;