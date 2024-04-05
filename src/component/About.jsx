import icons from './Icons';
import React from 'react';

const About = ({ city, list }) => {

    return (
        <div className='text-gray-100 flex justify-center h-screen w-screen items-center align-center'>
            <div className='bg-violet-100/20 rounded-xl w-4/5 p-10 pl-14 text-md font-mono leading-8'>
            {
                (city !== null && list !== null) && (
                    <div>
                        <p>City: <span>{city.name}</span></p>
                        <p>Country: <span>{city.country}</span></p>
                        <p>Date and time: <span>{list[0].dt_txt}</span></p>
                        <p>Weather: <span>{icons[list[0].weather[0].main]}</span></p>
                        <p>Description: <span>{list[0].weather[0].description}</span></p>
                        <p>Humidity: <span>{list[0].main.humidity}</span></p>
                        <p>Temperature: <span>{list[0].main.temp}</span></p>
                        <p>Minimum temperature: <span>{list[0].main.temp_min}</span></p>
                        <p>Maximum temperature: <span>{list[0].main.temp_max}</span></p>
                        <p>Visibility: <span>{list[0].visibility}</span></p>
                        <p>Wind speed: <span>{list[0].wind.speed}</span></p>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default About;
