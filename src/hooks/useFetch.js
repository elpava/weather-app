import {useEffect, useState} from 'react';
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
  'temperatureApparent',
  'humidity',
  'visibility',
  'weatherCode',
  'weatherCodeDay',
  'weatherCodeNight',
  'weatherCodeFullDay',
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
