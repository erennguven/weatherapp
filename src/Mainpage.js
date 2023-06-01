import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import { fetchWeatherAction } from './redux/slices/weatherSlices';


function Mainpage() {
  const [city, setCity] = useState('kayseri');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchWeatherAction("Kayseri"));

    },[])
    // console.log(process.env.WEATHER_KEY);
    
    const state = useSelector((state) => state);
    const {weather, loading, error} = state;
    return (
        <div class="container">
    <div class="img">
<h1 class="header">Hava Durumu Öğren</h1>
<h6 class="subheader">Türkiye'deki şehirlerin hava durumlarını takip et!</h6>      
<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="cityName">
      
    </label>
    <input 
    placeholder="Şehir İsmi Gir"
    //onClick={()=> dispatch(fetchWeatherAction(city))}
    value={city}
    onChange= {e => setCity(e.target.value)}
    
    
    class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" />
  </div>
  <div class="flex items-center justify-between mb-5">
    <button 
    onClick={()=> dispatch(fetchWeatherAction(city))}

    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
      Ara
    </button>
  </div>
  <div class="mt-30">
  <div class="flex basis-2 m-1">
    <span class="mr-1">Sıcaklık: </span>
  <span class="text-blue-500 text-1xl"> {Math.ceil(Number(weather?.main.temp))}°C</span>
  </div>
  <div class="flex basis-2 m-1">
    <span class="mr-1">Hissedilen: </span>
  <span class="text-blue-500 text-1xl"> {Math.ceil(Number(weather?.main.feels_like))}°C</span>
  </div>
  <div class="flex basis-2 m-1">
    <span class="mr-1">Maximum: </span>
  <span class="text-blue-500 text-1xl"> {Math.ceil(Number(weather?.main.temp_max))}°C</span>
  </div>
  <div class="flex basis-2 m-1">
    <span class="mr-1">Minimum: </span>
  <span class="text-blue-500 text-1xl"> {Math.ceil(Number(weather?.main.temp_min))}°C</span>
  </div>
  </div>
</form>

</div>
  </div>
    );
}

export default Mainpage;