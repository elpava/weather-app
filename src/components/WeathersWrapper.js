import {useContext} from 'react';
import WeatherContext from '../store/weather-context';

export default function WeathersWrapper({children}) {
  const {weatherIsLoading} = useContext(WeatherContext);

  const containerWeathersClass = weatherIsLoading ? 'empty' : 'full';

  return (
    <div className={`main-container-weathers ${containerWeathersClass}`}>
      {children}
    </div>
  );
}
