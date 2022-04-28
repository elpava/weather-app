import {createContext, useEffect, useState} from 'react';
import useFetch from '../hooks/useFetch';
import {weatherCodes, weatherCodeDay, precipitationType} from './weather-code';

const WeatherContext = createContext({
  hours: {},
  days: {},
  weatherIsLoading: true,
  error: null,
  weatherCodeDay: {},
  getWeatherCode(item) {},
  currentWeatherIndex: 0,
  setCurrentWeatherIndex(i) {},
  selectedWeather(fn) {},
});

export function WeatherContextProvider({children}) {
  const [weatherData, setWeatherData] = useState();
  const [currentWeather, setCurrentWeather] = useState(0);

  const {isLoading: weatherIsLoading, error, sendRequest} = useFetch();

  useEffect(() => {
    sendRequest(setWeatherData);
  }, []);

  function getWeatherCode(code) {
    if (`${code}`.length === 5) {
      let type = wd.weatherCodeDay[code].toLowerCase();
      type = type.split(' and ').reverse().join('_').replaceAll(' ', '_');
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
    fn(wd.days?.intervals[currentWeather]);
  }

  const wd = {
    hours: weatherData?.data.timelines[0],
    days: weatherData?.data.timelines[1],
    weatherIsLoading,
    error,
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
