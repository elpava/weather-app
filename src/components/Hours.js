import {useContext} from 'react';
import WeatherContext from '../store/weather-context';
import moment from 'moment';
import Image from './UI-Element/Image';

export default function Hours() {
  const {getWeatherCode, hours, weatherIsLoading} = useContext(WeatherContext);

  return (
    <>
      {weatherIsLoading ? (
        <h4 className="alternate-text">24 Hours later...</h4>
      ) : (
        hours?.intervals.slice(0, 24).map((item, i) => {
          const {startTime} = item;
          const {weatherCode, temperature} = item.values;
          const fileName = getWeatherCode(weatherCode);
          const isToday = moment(startTime).calendar().includes('Today');

          return (
            <div key={i} className="each-hour">
              <span className="hour">
                {`${moment(startTime).hour()}:00`.padStart(5, '0')}
              </span>
              {isToday && <span className="underline"></span>}
              <span className="temperature">{Math.trunc(temperature)}°</span>
              <Image fileName={fileName} svg altImage={fileName} />
            </div>
          );
        })
      )}
    </>
  );
}
