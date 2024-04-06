import icons from './Icons';
import React from 'react';

const About = ({ city, list }) => {

    return (
        <div className='text-gray-100 flex flex-col justify-center h-screen w-screen items-center align-center'>
            {
                (city !== null && list !== null) && <h2 className='text-3xl pb-14'>Today's weather</h2>
            }
    
            {
                (city !== null && list !== null) && (
                    <div className='grid grid-cols-2 bg-violet-100/20 rounded-xl w-5/6 p-10 pl-14 text-md font-mono leading-8 items-center justify-start'>
                        <div className='col-span-1'>
                            <p>City: <span>{city.name}</span></p>
                            <p>Country: <span>{city.country}</span></p>
                            <p>Date and time: <span>{list[0].dt_txt}</span></p>
                            <p>Description: <span>{list[0].weather[0].description}</span></p>
                            <p>Humidity: <span>{list[0].main.humidity}</span></p>
                            <p>Temperature: <span>{list[0].main.temp}</span></p>
                            <p>Minimum temperature: <span>{list[0].main.temp_min}</span></p>
                            <p>Maximum temperature: <span>{list[0].main.temp_max}</span></p>
                            <p>Visibility: <span>{list[0].visibility}</span></p>
                            <p>Wind speed: <span>{list[0].wind.speed}</span></p>
                        </div>
                        <div className='col-span-1 text-center'>
                            <span className='text-8xl'>{icons[list[0].weather[0].main]}</span>
                            <p>{list[0].weather[0].description}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default About;
