import {createContext, useEffect, useState} from 'react';
import useFetch from '../hooks/use-http';
import moment from 'moment';
import {
  weatherCodes,
  weatherCodeDay,
  weatherCodeDayFileNames,
} from './weather-code';

const WeatherContext = createContext({
  geoCollectionData: {},
  coordinates: [],
  getLocation(locationName) {},
  location: '',
  placeName: '',
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
  weatherCodeDayFileNames,
});

export function WeatherContextProvider({children}) {
  const [geoCollectionData, setGeoCollectionData] = useState();
  const [location, setLocation] = useState('Tehran');
  const [weatherData, setWeatherData] = useState(undefined);
  // JSON.parse(localStorage.getItem('weather'))
  const [queriedCoordinates, setQueriedCoordinates] = useState({
    coordinates: [35.721822238427805, 51.39032084963884],
    initialFetch: true,
  });
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
  const weatherLocation = queriedCoordinates.coordinates;

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
    if (typeof queriedCoordinates.coordinates[0] === 'number') {
      sendRequest(getTimelineURL, weatherMethodOptions, setWeatherData);
    }
  }, [queriedCoordinates]);

  useEffect(() => {
    if (!queriedCoordinates.initialFetch)
      sendRequest(
        getCoordinatesURL,
        coordinatesMethodOptions,
        setGeoCollectionData
      );
    // localStorage.setItem('weather', JSON.stringify(weatherData));
  }, [location]);

  useEffect(() => {
    setNewCoordinates();
  }, [geoCollectionData]);

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

  function setNewLocation(locationName) {
    setLocation(locationName);
  }

  function setNewCoordinates() {
    setQueriedCoordinates(prevState => {
      return {
        ...prevState,
        coordinates: [
          geoCollectionData?.features[0].center[1],
          geoCollectionData?.features[0].center[0],
        ],
        initialFetch: false,
      };
    });
  }
  // console.log('--WeatherContext');
  const wd = {
    geoCollectionData,
    queriedCoordinates,
    setNewLocation,
    location,
    placeName: geoCollectionData?.features[0].place_name || 'iran',
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

    weatherCodeDayFileNames,
  };

  return (
    <WeatherContext.Provider value={wd}>{children}</WeatherContext.Provider>
  );
}

export default WeatherContext;
