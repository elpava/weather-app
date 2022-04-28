import {useState} from 'react';
import moment from 'moment';

const apikey = '8yqKcoT2VkntdX0a9AOsiUeNHMTx58FK';
const location = [35.721822238427805, 51.39032084963884];

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

const options = {method: 'GET', headers: {Accept: 'application/json'}};

const getTimelineURL = `https://api.tomorrow.io/v4/timelines?location=${location}&fields=${fields}&units=${units}&timesteps=${timesteps}&startTime=${startTime}&endTime=${endTime}&timezone=${timezone}&apikey=${apikey}`;

export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function sendRequest(applyData) {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(getTimelineURL, options);

      if (!response) throw new error('Request Faild!');

      const data = await response.json();
      console.log(data);

      applyData(data);
    } catch (error) {
      console.error('error: ' + error);
      setError(error || 'Something went wrong!');
    }
    setIsLoading(false);
  }

  return {
    isLoading,
    error,
    sendRequest,
  };
}
