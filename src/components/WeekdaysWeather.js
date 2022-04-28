import {useContext, useState} from 'react';
import moment from 'moment';
import WeatherContext from '../store/weather-context';
import Image from './UI-Element/Image';

export default function WeekdaysWeather() {
  const [active, setActive] = useState(0);
  const {days, weatherIsLoading, getWeatherCode, setCurrentWeatherIndex} =
    useContext(WeatherContext);

  days?.intervals.forEach((element, i) => {
    element.index = i;
  });

  const widthProperty =
    days?.intervals.length > 0 ? {} : {width: '50%', alignItems: 'center'};

  return (
    <section className="weekdays" style={widthProperty}>
      {weatherIsLoading ? (
        <h3 className="alternate-text">Today & 5 Days Later...</h3>
      ) : (
        days?.intervals.map((item, i) => {
          const {startTime} = item;
          const {weatherCodeDay, temperature} = item.values;
          const fileName = getWeatherCode(weatherCodeDay);
          const weekdayName =
            i === 0 ? 'Today' : moment(startTime).format('ddd');

          return (
            <div
              key={i}
              className={`weekdays-day ${
                item.index === active ? 'active' : ''
              }`}
              onClick={() => {
                setActive(i);
                setCurrentWeatherIndex(i);
              }}
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
        })
      )}
    </section>
  );
}
