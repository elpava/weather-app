import {useContext} from 'react';
import WeatherContext from '../../store/weather-context';
import moment from 'moment';
import Hours from './Hours';

export default function OneDayWrapper() {
  const {getWeatherCode, hours, weatherIsLoading} = useContext(WeatherContext);
  // console.log('OneDayWrapper');
  return (
    <div className="main-container-hours">
      {weatherIsLoading ? (
        <h4 className="alternate-text">24 Hours later...</h4>
      ) : (
        hours?.intervals.slice(0, 24).map((item, i) => {
          const {startTime} = item;
          const {weatherCode, temperature} = item.values;
          const hour = `${moment(startTime).hour()}:00`.padStart(5, '0');
          const isToday = moment(startTime).calendar().includes('Today');
          const fileName = getWeatherCode(weatherCode);

          return (
            <Hours
              key={i}
              hour={hour}
              isToday={isToday}
              startTime={startTime}
              fileName={fileName}
              temperature={temperature}
            />
          );
        })
      )}
    </div>
  );
}
