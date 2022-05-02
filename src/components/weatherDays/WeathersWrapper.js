import {useContext, useState} from 'react';
import moment from 'moment';
import WeatherContext from '../../store/weather-context';
import WeekdaysWeather from './WeekdaysWeather';

export default function WeathersWrapper({children}) {
  const {days, weatherIsLoading, getWeatherCode, setCurrentWeatherIndex} =
    useContext(WeatherContext);
  const [active, setActive] = useState(0);

  days?.intervals.forEach((element, i) => {
    element.index = i;
  });

  const weekdaysClass = weatherIsLoading ? 'empty' : 'full';
  const containerWeathersClass = weatherIsLoading ? 'empty' : 'full';
  console.log('WeathersWrapper');

  return (
    <div className={`main-container-weathers ${containerWeathersClass}`}>
      {children}
      <section className={`weekdays ${weekdaysClass}`}>
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
              <WeekdaysWeather
                key={i}
                fileName={fileName}
                temperature={temperature}
                weekdayName={weekdayName}
                activeClass={item.index === active ? 'active' : ''}
                onClick={() => {
                  setActive(i);
                  setCurrentWeatherIndex(i);
                }}
              />
            );
          })
        )}
      </section>
    </div>
  );
}
