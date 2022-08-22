import moment from 'moment';

import { weatherCodeDayFileNames } from '../../store/weather-code';

import Image from '../ui/Image';

export default function Days({ data, onSelectedWeather, activeWeather }) {
  const result = data.map((day, i) => {
    const { startTime, values } = day;
    const { weatherCodeDay, temperature } = values;
    const activeClass = activeWeather === i ? 'active' : null;
    const fileName = weatherCodeDayFileNames[weatherCodeDay];
    const weekdayName = i === 0 ? 'Today' : moment(startTime).format('ddd');

    return (
      <div
        key={startTime}
        className={`weekdays-day ${activeClass}`}
        onClick={() => onSelectedWeather(i)}
      >
        <Image
          fileName={fileName}
          png
          altImage="weather icon"
          classes="weather icon"
        />
        <h4>
          {Math.trunc(temperature)}
          <span>°</span>
        </h4>
        <span className="weekdays-day--name">{weekdayName}</span>
      </div>
    );
  });
  // console.log('WeekdaysWeather');
  return <>{result}</>;
}
