import {createContext, useEffect, useState} from 'react';
import useFetch from '../hooks/use-http';
// import {
//   getTimelineURL,
//   options as weatherRequestMethodOptions,
// } from '../store/weather-api-config';
// import {
//   getCoordinatesURL,
//   options as coordinatesMethodOptions,
//   requestLocation,
// } from './coordinates-api-config';
import moment from 'moment';
import {weatherCodes, weatherCodeDay, precipitationType} from './weather-code';

const WeatherContext = createContext({
  geoCollectionData: {},
  coordinates: [],
  getLocation(locationName) {},
  hours: {},
  days: {},
  weatherIsLoading: true,
  error: null,
  getWeatherCode(item) {},
  currentWeatherIndex: 0,
  setCurrentWeatherIndex(i) {},
  selectedWeather(fn) {},
  weatherCodeDay,
  weatherCodes,
});

export function WeatherContextProvider({children}) {
  const [geoCollectionData, setGeoCollectionData] = useState();
  const [location, setLocation] = useState('Tehran');
  const [weatherData, setWeatherData] = useState();
  const [coordinates, setCoordinates] = useState([
    35.721822238427805, 51.39032084963884,
  ]);
  const [currentWeather, setCurrentWeather] = useState(0);
  const {isLoading: weatherIsLoading, error, sendRequest} = useFetch();

  const COORDINATE_API_KEY =
    'pk.eyJ1IjoiaGFkaWttYW4iLCJhIjoiY2twc2MybWt5MTF6czJxczR1ZGNqd3N6NSJ9.UA1qAc3pGYraATf9kGt5DQ';

  const getCoordinatesURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${COORDINATE_API_KEY}`;

  const coordinatesMethodOptions = {
    method: 'GET',
    headers: {Accept: 'application/json'},
  };

  const WEATHER_API_KEY = '8yqKcoT2VkntdX0a9AOsiUeNHMTx58FK';
  // const weatherLocation = [35.721822238427805, 51.39032084963884];
  const weatherLocation = coordinates;

  const fields = [
    'cloudCover',
    'precipitationType',
    'sunsetTime',
    'temperature',
    'temperatureApparent',
    'humidity',
    'sunriseTime',
    'visibility',
    'weatherCode',
    'weatherCodeDay',
    'weatherCodeNight',
    'weatherCodeFullDay',
    'windSpeed',
    'windDirection',
  ];
  const units = 'metric';
  // const timesteps = ['current'];
  const timesteps = ['1h', '1d'];

  const now = moment.utc();
  const startTime = moment.utc(now).add(0, 'minutes').toISOString();
  const endTime = moment.utc(now).add(5, 'days').toISOString();

  const timezone = 'Asia/Tehran';

  const getTimelineURL = `https://api.tomorrow.io/v4/timelines?location=${weatherLocation}&fields=${fields}&units=${units}&timesteps=${timesteps}&startTime=${startTime}&endTime=${endTime}&timezone=${timezone}&apikey=${WEATHER_API_KEY}`;

  const weatherMethodOptions = {
    method: 'GET',
    headers: {Accept: 'application/json'},
  };

  useEffect(() => {
    sendRequest(getTimelineURL, weatherMethodOptions, setWeatherData);
  }, []);

  useEffect(() => {
    sendRequest(
      getCoordinatesURL,
      coordinatesMethodOptions,
      setGeoCollectionData
    );
  }, [location]);

  function getWeatherCode(code) {
    if (`${code}`.length === 5) {
      let type = wd.weatherCodeDay[code].toLowerCase();
      type = type
        .split(' and ')
        .reverse()
        .join('_')
        .replaceAll(' ', '_')
        .replace('light_rain', 'rain_light');

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

  function getLocation(locationName) {
    setLocation(locationName);
  }
  console.log('--WeatherContext');
  const wd = {
    geoCollectionData,
    coordinates: geoCollectionData?.features[0].center,
    getLocation,
    hours: weatherData?.data.timelines[0],
    days: weatherData?.data.timelines[1],
    weatherIsLoading,
    error,
    getWeatherCode,
    currentWeatherIndex: 0,
    setCurrentWeatherIndex,
    selectedWeather,
    weatherCodes,
    weatherCodeDay,
    precipitationType,
  };

  return (
    <WeatherContext.Provider value={wd}>{children}</WeatherContext.Provider>
  );
}

export default WeatherContext;
