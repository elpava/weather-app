import { createContext, useState, useEffect } from 'react';
import moment from 'moment';
import useFetch from '../hooks/use-http';

const WeatherContext = createContext({ data: null });

const COORDINATE_API_KEY = process.env.REACT_APP_COORDINATE_API_KEY;
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
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

const weatherMethodOptions = {
  method: 'GET',
  headers: { Accept: 'application/json' },
};

export function WeatherProvider({ children }) {
  const [data, setData] = useState({ data: null });
  const [requestedLocation, setRequestedLocation] = useState('Tehran');
  const [locationData, setLocationData] = useState(null);
  const { sendRequest } = useFetch();
  const location = locationData
    ? [locationData.features[0].center[1], locationData.features[0].center[0]]
    : [35.721822238427805, 51.39032084963884];
  const placeName = locationData ? locationData.features[0].place_name : 'Iran';

  const getCoordinateURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${requestedLocation}.json?access_token=${COORDINATE_API_KEY}`;
  const getTimelineURL = `https://api.tomorrow.io/v4/timelines?location=${location}&fields=${fields}&units=${units}&timesteps=${timesteps}&startTime=${startTime}&endTime=${endTime}&timezone=${timezone}&apikey=${WEATHER_API_KEY}`;

  useEffect(() => {
    sendRequest(getCoordinateURL, weatherMethodOptions, setLocationData);
  }, [getCoordinateURL]);

  useEffect(() => {
    sendRequest(getTimelineURL, weatherMethodOptions, setData);
  }, [getTimelineURL]);

  return (
    <WeatherContext.Provider
      value={{ data, requestedLocation, placeName, setRequestedLocation }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
