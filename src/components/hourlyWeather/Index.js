import { useContext } from 'react';
import moment from 'moment';

import NewWeatherContext from '../../store/new-context';
import { weatherCodes } from '../../store/weather-code';

import Image from '../ui/Image';

export default function FullDayWrapper() {
  const { data: weatherData } = useContext(NewWeatherContext);
  const { data } = weatherData;

  if (!data) return <h3 className="alternate-text">24 Hours later...</h3>;

  const { intervals } = data.timelines[1];

  const result = intervals.slice(0, 24).map((hour, i) => {
    const { startTime } = hour;
    const { weatherCode, temperature } = hour.values;
    const longHour = `${moment(startTime).hour()}:00`.padStart(5, '0');
    const isToday = moment(startTime).calendar().includes('Today');
    const fileName = weatherCodes[weatherCode];

    return (
      <div key={i} className="each-hour">
        <span className="hour">{longHour}</span>
        {isToday && <span className="underline"></span>}
        <span className="temperature">{Math.trunc(temperature)}°</span>
        <Image fileName={fileName} svg altImage={fileName} />
      </div>
    );
  });

  // console.log('OneDayWrapper');
  return <div className="main-container-hours">{result}</div>;
}
