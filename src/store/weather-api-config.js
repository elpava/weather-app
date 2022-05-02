// import moment from 'moment';

// const API_KEY = '8yqKcoT2VkntdX0a9AOsiUeNHMTx58FK';
// const location = [35.721822238427805, 51.39032084963884];
// // const location = useContext();

// const fields = [
//   'cloudCover',
//   'precipitationType',
//   'sunsetTime',
//   'temperature',
//   'temperatureApparent',
//   'humidity',
//   'sunriseTime',
//   'visibility',
//   'weatherCode',
//   'weatherCodeDay',
//   'weatherCodeNight',
//   'weatherCodeFullDay',
//   'windSpeed',
//   'windDirection',
// ];
// const units = 'metric';
// // const timesteps = ['current'];
// const timesteps = ['1h', '1d'];

// const now = moment.utc();
// const startTime = moment.utc(now).add(0, 'minutes').toISOString();
// const endTime = moment.utc(now).add(5, 'days').toISOString();

// const timezone = 'Asia/Tehran';

// export const getTimelineURL = `https://api.tomorrow.io/v4/timelines?location=${location}&fields=${fields}&units=${units}&timesteps=${timesteps}&startTime=${startTime}&endTime=${endTime}&timezone=${timezone}&apikey=${API_KEY}`;

// export const options = {method: 'GET', headers: {Accept: 'application/json'}};
