import icons from './Icons';

const About = ({ city, data }) => {

    return (
        <div>
            {
                (city && data) && (
                    <div>
                        <p>City: <span>{city.name}</span></p>
                        <p>Date: <span>{data.dt_txt.split(" ")[0]}</span></p>
                        <p>Weather: <span>{icons[data.weather[0].main]}</span></p>
                        <p>Description: <span>{data[0].weather[0].description}</span></p>
                    </div>
                )
            }
        </div>
    )
}

export default About;
