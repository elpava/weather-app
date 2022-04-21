import {useContext, useEffect, useState} from 'react';
import WeatherContext from '../store/weather-context';
import moment from 'moment';
import Image from './UI-Element/Image';

export default function Hours() {
  const [_24Hours, set_24Hours] = useState([]);
  const {getWeatherCode, _1h} = useContext(WeatherContext);

  useEffect(() => {
    setTimeout(() => {
      set_24Hours(_1h?.intervals.slice(0, 24));
    }, 1000);
  }, [_1h]);

  return (
    <>
      {_24Hours.length > 0 ? (
        _24Hours?.map((item, i) => {
          const {startTime} = item;
          const {weatherCode, temperature} = item.values;
          const fileName = getWeatherCode(weatherCode);

          return (
            <div key={i} className="each-hour">
              <span className="hour">{moment(startTime).hour()}:00</span>
              <span className="temperature">{Math.trunc(temperature)}°</span>
              <Image fileName={fileName} svg altImage={fileName} />
            </div>
          );
        })
      ) : (
        <h4>24 Hours later...</h4>
      )}
    </>
  );
}
