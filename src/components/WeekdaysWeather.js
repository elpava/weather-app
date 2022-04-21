import {useContext, useState} from 'react';
import moment from 'moment';
import WeatherContext from '../store/weather-context';
import Image from './UI-Element/Image';

export default function WeekdaysWeather() {
  const [active, setActive] = useState();
  const {_1d, getWeatherCode, setCurrentWeatherIndex} =
    useContext(WeatherContext);
  const _6days = _1d?.intervals;

  _6days.forEach((element, i) => {
    element.index = i;
  });

  return (
    <section className="weekdays">
      {_6days.map((item, i) => {
        const {startTime} = item;
        const {weatherCodeDay, temperature} = item.values;
        const fileName = getWeatherCode(weatherCodeDay);
        let weekdayName = moment(startTime).format('ddd');

        return (
          <div
            key={i}
            className={`weekdays-day ${item.index === active ? 'active' : ''}`}
            onClick={() => {
              setActive(i);
              setCurrentWeatherIndex(i);
            }}
          >
            <Image
              fileName={fileName}
              png
              altImage={11}
              classes="weather icon"
            />
            <h4>
              {Math.trunc(temperature)}
              <span>°</span>
            </h4>
            <span>{weekdayName}</span>
          </div>
        );
      })}
    </section>
  );
}
