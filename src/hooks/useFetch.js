import {useEffect, useState} from 'react';
import axios from 'axios';
import moment from 'moment';

const apikey = '8yqKcoT2VkntdX0a9AOsiUeNHMTx58FK';
const location = [35.721822238427805, 51.39032084963884];

const fields = [
  'precipitationType',
  'sunsetTime',
  'sunriseTime',
  'windSpeed',
  'windDirection',
  'temperature',
  'humidity',
  'visibility',
  'weatherCode',
];
const units = 'metric';
// const timesteps = ['current', '1h', '1d'];
const timesteps = ['1h', '1d'];

const now = moment.utc();
const startTime = moment.utc(now).add(0, 'minutes').toISOString();
const endTime = moment.utc(now).add(1, 'days').toISOString();

const timezone = 'Asia/Tehran';

const weatherCodes = {
  0: 'unknown',
  1000: 'clear',
  1001: 'cloudy',
  1100: 'mostly_clear',
  1101: 'partly_cloudy',
  1102: 'mostly_cloudy',
  2000: 'fog',
  2100: 'fog_light',
  3000: 'breezy',
  3001: 'windy',
  3002: 'strong_wind',
  4000: 'drizzle',
  4001: 'rain',
  4200: 'rain_light',
  4201: 'rain_heavy',
  5000: 'snow',
  5001: 'flurries',
  5100: 'snow_light',
  5101: 'snow_heavy',
  6000: 'freezing_drizzle',
  6001: 'freezing_rain',
  6200: 'freezing_rain_light',
  6201: 'freezing_rain_heavy',
  7000: 'ice_pellets',
  7101: 'ice_pellets_heavy',
  7102: 'ice_pellets_light',
  8000: 'thunderstorm',
};

const precipitationType = {
  0: 'N/A',
  1: 'Rain',
  2: 'Snow',
  3: 'Freezing Rain',
  4: 'Ice Pellets',
};

const options = {method: 'GET', headers: {Accept: 'application/json'}};

const getTimelineURL = `https://api.tomorrow.io/v4/timelines?location=${location}&fields=${fields}&units=${units}&timesteps=${timesteps}&startTime=${startTime}&endTime=${endTime}&timezone=${timezone}&apikey=${apikey}`;

export default function useFetch(props) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchTimeLine = async function () {
      try {
        const result = await fetch(getTimelineURL, options);

        const response = await result.json();
        console.log(response);

        setData(response);
      } catch (error) {
        console.error('error: ' + error);
      }
    };

    fetchTimeLine();
  }, []);

  return data;
}
