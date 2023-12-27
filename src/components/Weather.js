import React, { useState, useEffect } from 'react';
import axios from 'axios';
import key from "./key";

const api = {
    key: key.API_KEY,
    base: key.BASE_URL,
};
const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${api.base}weather?q=${'Bangkok'}&units=metric&APPID=${api.key}`
                );

                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='weather'>
            <h1>Real-time Weather in Bangkok</h1>
            {weatherData && (
                <div >
                    <h2>Temperature: {weatherData.main.temp} °C</h2>
                    <h2>Humidity: {weatherData.main.humidity}%</h2>
                    <h2>Description: {weatherData.weather[0].description}</h2>
                </div>
            )}
        </div>
    );
};

export default Weather;
