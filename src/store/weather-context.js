import {createContext, useEffect, useState} from 'react';
import useFetch from '../hooks/useFetch';
import {weatherCodes, weatherCodeDay, precipitationType} from './weather-code';

const WeatherContext = createContext({
  _1h: {},
  _1d: {},
  weatherCodeDay: {},
  getWeatherCode(item) {},
  currentWeatherIndex: 0,
  setCurrentWeatherIndex(i) {},
  selectedWeather(fn) {},
});

export function WeatherContextProvider({children}) {
  const [currentWeather, setCurrentWeather] = useState(0);
  // const weatherConditions = useFetch();
  // localStorage.setItem('weather', JSON.stringify(weatherConditions));

  const data = JSON.parse(localStorage.getItem('weather'));

  function getWeatherCode(code) {
    if (`${code}`.length === 5) {
      let type = wd.weatherCodeDay[code].replace(' ', '_').toLowerCase();
      return `${code}_${type}_large`;
    }
    if (`${code}`.length === 4) {
      return wd.weatherCodes[code];
    }
  }

  function setCurrentWeatherIndex(i) {
    setCurrentWeather(i);
  }

  function selectedWeather(fn) {
    fn(wd._1d.intervals[currentWeather]);
  }

  const wd = {
    _1h: data.data.timelines[0],
    _1d: data.data.timelines[1],
    weatherCodes,
    weatherCodeDay,
    precipitationType,
    getWeatherCode,
    currentWeatherIndex: 0,
    setCurrentWeatherIndex,
    selectedWeather,
  };

  return (
    <WeatherContext.Provider value={wd}>{children}</WeatherContext.Provider>
  );
}

export default WeatherContext;
