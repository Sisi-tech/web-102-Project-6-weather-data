import react, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import icons from './Icons';

const FetchData = ({ search, list, setList, city, setCity }) => {
    // const [list, setList] = useState(null);
    // const [city, setCity] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = import.meta.env.VITE_APP_API_KEY;

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${API_KEY}`;
                const response = await axios.get(URL);
                console.log(response);
                if (Array.isArray(response.data.list)) {
                    setList(response.data.list);
                } 
                if (response.data.city) {
                    setCity(response.data.city);
                }
            } catch (error) {
                setError('Error fetching data. Please try again later.');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        const displayDebounceFn = setTimeout(() => {
            if (search) {
                fetchData();
            }
        }, 1000);
        return () => clearTimeout(displayDebounceFn);
    }, [search, API_KEY]);

    return (
        <div className='flex justify-center text-gray-100 bg-violet-100/20 pl-10 pr-10 pt-12 ml-4 mr-4 pb-20'>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {list && (
                <div className='flex flex-col'>
                    <div className='flex'>
                        <Card data={city.name} title={`${city.name} ${city.country}`} />
                        <Card data={list[0].main.temp_min} title="Lower Temp" />
                        <Card data={icons[list[0].weather[0].main]} title="Weather"  />
                        <Card data={list[0].weather[0].description} title="Description" />
                    </div>
                    <div className='flex flex-col text-center'>
                        <div>
                            <div className='grid grid-cols-5 pb-2 font-mono text-xl'>
                                <p>Date</p>
                                <p>Time</p>
                                <p>Temp</p>
                                <p>Weather</p>
                                <p>Description</p>
                            </div>
                            {list.map((forecast, index) => (
                                <div key={index} className='grid grid-cols-5'> 
                                    <p>{forecast.dt_txt.split(" ")[0]}</p>
                                    <p>{forecast.dt_txt.split(" ")[1]}</p>
                                    <p>{forecast.main.temp}</p>
                                    <p>{icons[forecast.weather[0].main]}</p>
                                    <p>{forecast.weather[0].description}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default FetchData; 

