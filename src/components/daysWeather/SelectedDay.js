import moment from 'moment';
import { WiWindy, WiHumidity, WiDaySunnyOvercast } from 'react-icons/wi';

import {
  weatherCodeDayFileNames,
  weatherCodeDay as weatherCodeDays,
} from '../../store/weather-code';

import WeatherField from './InfoBox';
import Image from '../UI-Element/Image';
import InfoBox from './InfoBox';

export default function SelectedDay({ data }) {
  const { startTime, values } = data;
  // let currentData = {
  //   fileName: null,
  //   day: 'N/A',
  //   forcast: 'N/A',
  //   visibility: 'N/A',
  //   temperature: 'N/A',
  //   temperatureApparent: 'N/A',
  //   humidity: 'N/A',
  //   windSpeed: 'N/A',
  //   cloudCover: 'N/A',
  // };

  // function selectedWeatherHandler(data) {
  //   if (data) {
  //     const d = data.values;
  //     currentData = {
  //       ...currentData,
  //       fileName: weatherCodeDayFileNames[d.weatherCodeDay],
  //       day: moment(data?.startTime).format('dddd'),
  //       forcast: weatherCodeDay[d.weatherCodeDay],
  //       visibility: Math.trunc(d.visibility),
  //       temperature: Math.trunc(d.temperature),
  //       temperatureApparent: Math.trunc(d.temperatureApparent),
  //       humidity: Math.trunc(d.humidity),
  //       windSpeed: d.windSpeed,
  //       cloudCover: Math.trunc(d.cloudCover),
  //     };
  //   }
  // }

  // selectedWeather(selectedWeatherHandler);

  // const weatherBoxClass = weatherIsLoading ? 'empty' : 'full';
  // const forecastStyle = currentData.forcast?.includes('and')
  //   ? {fontSize: '1rem'}
  //   : {};
  // // console.log('SelectedWeather');
  // return (
  //   <div className={`weather-box ${weatherBoxClass}`}>
  //     {weatherIsLoading ? (
  //       <WiNa size="10rem" color="yellow" />
  //     ) : (
  //       <Fragment>
  //         <div className="weather-box-header">
  //           {currentData.fileName ? (
  //             <Image
  //               fileName={currentData.fileName}
  //               png
  //               altImage="weather icon"
  //               classes="weather-box-header-icon"
  //               doubleSize
  //             />
  //           ) : (
  //             <WiNa size="10rem" color="yellow" />
  //           )}
  //           <h3>{currentData.day}</h3>
  //         </div>
  //         <div className="weather-box-content">
  //           <h4 style={forecastStyle}>{currentData.forcast}</h4>
  //           <span>visibility {currentData.visibility} KM</span>
  //           <h4>{currentData.temperature}°</h4>
  //           <span>feels like {currentData.temperatureApparent}°</span>
  //         </div>
  //         <div className="weather-box-conditions">
  //           <WeatherField
  //             classes="--left"
  //             icon={<WiHumidity size="100%" />}
  //             field={{value: currentData.humidity, unit: '%'}}
  //           />
  //           <WeatherField
  //             classes="--middle"
  //             icon={<WiWindy size="100%" />}
  //             field={{value: currentData.windSpeed, unit: 'km/h'}}
  //           />
  //           <WeatherField
  //             classes="--right"
  //             icon={<WiDaySunnyOvercast size="100%" />}
  //             field={{value: currentData.cloudCover, unit: '%'}}
  //           />
  //         </div>
  //       </Fragment>
  //     )}
  //   </div>
  // );

  const {
    weatherCodeDay,
    visibility,
    temperature,
    temperatureApparent,
    humidity,
    windSpeed,
    cloudCover,
  } = values;
  const day = moment(startTime).format('dddd');

  function truncNumber(number) {
    return Math.trunc(number);
  }

  const forecastStyle = weatherCodeDays[weatherCodeDay]?.includes('and')
    ? { fontSize: '1rem' }
    : {};

  return (
    <div className={`weather-box full`}>
      <div className="weather-box-header">
        <Image
          fileName={weatherCodeDayFileNames[weatherCodeDay]}
          png
          altImage="weather icon"
          classes="weather-box-header-icon"
          doubleSize
        />
        <h3>{day}</h3>
      </div>
      <div className="weather-box-content">
        <h4 style={forecastStyle}>{weatherCodeDays[weatherCodeDay]}</h4>
        <span>visibility {truncNumber(visibility)} KM</span>
        <h4>{truncNumber(temperature)}°</h4>
        <span>feels like {truncNumber(temperatureApparent)}°</span>
      </div>
      <div className="weather-box-conditions">
        <InfoBox
          classes="--left"
          icon={<WiHumidity size="100%" />}
          field={{ value: truncNumber(humidity), unit: '%' }}
        />
        <InfoBox
          classes="--middle"
          icon={<WiWindy size="100%" />}
          field={{ value: windSpeed, unit: 'km/h' }}
        />
        <InfoBox
          classes="--right"
          icon={<WiDaySunnyOvercast size="100%" />}
          field={{ value: truncNumber(cloudCover), unit: '%' }}
        />
      </div>
    </div>
  );
}
