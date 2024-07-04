import React from 'react';
import { useWeather } from '../context/Weather';

const Card = () => {
    const weather = useWeather();


    return (
        <div className="card">
            <img src={weather.data?.current?.condition?.icon} />
            <h2>{weather.data?.current?.temp_c} 'C / {weather.data?.current?.temp_f} 'F</h2>
            <h2 className='loc'>{weather.data?.location?.name}, {weather.data?.location?.region}, {weather.data?.location.country}</h2>
            <p>Timezone: {weather.data?.location?.tz_id}</p>
        </div>

    );
}


export default Card;