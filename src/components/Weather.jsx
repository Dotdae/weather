import { useState } from 'react';
import styled from 'styled-components';
import NotFound from './NotFound';
import WeatherBox from './WeatherBox';
import WeatherDetails from './WeatherDetails';

const Container = styled.div`

    position: relative;
    width: 500px;
    height: ${({height}) => height};
    background: #FFF;
    padding: 28px 32px;
    overflow: hidden;
    border-radius: 18px;
    transition: 0.6s ease-out;


`;

const SearchBox = styled.div`

    width: 100%;
    height: min-content;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input{

        color: #06283D;
        padding: 10px;
        width: 80%;
        font-size: 24px;
        font-weight: 500;
        text-align: center;

        &::placeholder{

            font-size: 20px;
            font-weight: 500;
            color: #06283D;
            text-transform: capitalize;

        }

    }

    button{

        width: 50px;
        height: 50px;
        color: #06283D;
        background: #DFF6FF;
        border-radius: 50%;
        font-size: 22px;
        cursor: pointer;
        transition 0.4 ease;

        &:hover{

            color: #FFF;
            background: #06283D;

        }

    }

    i{

        position: absolute;
        color: #06283D;
        font-size: 28px;
        margin-left: 20px;

    }

`;


export default function Weather() {

    const key = '671f3b5a521e6f484b987d5e8b79b439'
    const [city, setCity] = useState('');
    const [height, setHeight] = useState('125px');
    const [weather, setWeather] = useState({});

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const getWeather = (city) => {

       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
        .then(response => response.json())
        .then(json => {

            if(json.cod === '404'){
                console.error('Error on search...')
                setWeather({found: false});
                setHeight("550px");
            }
            else{

                var img = ''; 

                switch(json.weather[0].main){
                    
                    case 'Clear':
                        img = 'https://i.ibb.co/wLsrh9n/clear.png';
                        break;

                    case 'Rain':
                        img = 'https://i.ibb.co/ncyQTRX/rain.png';
                        break;

                    case 'Snow':
                        img = 'https://i.ibb.co/s5DNgGn/thunder.png'
                        break;

                    case 'Clouds':
                        img = 'https://i.ibb.co/5x4w3CH/cloud.png'
                        break;

                    case 'Haze':
                        img = 'https://i.ibb.co/mRZXc1R/windy.png'
                        break;
                    
                    default:
                        img = '';
                        

                }

                const data = {

                    found: true,
                    temp: `${parseInt(json.main.temp)}°C`,
                    description: `${json.weather[0].description}`,
                    humidity: `${json.main.humidity}%`,
                    wind: `${json.wind.speed}Km/h`,
                    img

                }

                setWeather(data);
                console.log(weather);
                setHeight("550px");
            }

        });

    }

  return (
    <Container height={height}>
        <SearchBox>
            <i className="fa-solid fa-location-dot"></i>
            <input type="text" placeholder='Enter your location' onChange={(e) => handleChange(e)}/>
            <button className='fa-solid fa-magnifying-glass' onClick={() => getWeather(city)}>
            </button>
        </SearchBox>
        {
            (weather.found) ?(
                <>
                    <WeatherBox temp={weather.temp} desc={weather.description} image={weather.img} fade="fadeIn"/>
                    <WeatherDetails hum={weather.humidity} speed={weather.wind} fade="fadeIn"/>
                </>
            ) 
            :(
                <NotFound/>
            )
        }
    </Container>
  )
}
