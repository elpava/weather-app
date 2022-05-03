import {useContext, Fragment} from 'react';
import WeatherContext from '../../store/weather-context';
import moment from 'moment';
import {WiWindy, WiHumidity, WiDaySunnyOvercast, WiNa} from 'react-icons/wi';
import Image from '../UI-Element/Image';

export default function SelectedWeather() {
  const {selectedWeather, getWeatherCode, weatherCodeDay, weatherIsLoading} =
    useContext(WeatherContext);

  let currentData = {
    fileName: null,
    day: 'N/A',
    forcast: 'N/A',
    visibility: 'N/A',
    temperature: 'N/A',
    temperatureApparent: 'N/A',
    humidity: 'N/A',
    windSpeed: 'N/A',
    cloudCover: 'N/A',
  };

  function selectedWeatherHandler(data) {
    if (data) {
      const d = data.values;
      currentData = {
        ...currentData,
        fileName: getWeatherCode(d.weatherCodeDay),
        day: moment(data?.startTime).format('dddd'),
        forcast: weatherCodeDay[d.weatherCodeDay],
        visibility: Math.trunc(d.visibility),
        temperature: Math.trunc(d.temperature),
        temperatureApparent: Math.trunc(d.temperatureApparent),
        humidity: Math.trunc(d.humidity),
        windSpeed: d.windSpeed,
        cloudCover: Math.trunc(d.cloudCover),
      };
    }
  }

  selectedWeather(selectedWeatherHandler);

  const weatherBoxClass = weatherIsLoading ? 'empty' : 'full';
  const forecastStyle = currentData.forcast.includes('and')
    ? {fontSize: '1rem'}
    : {};
  const dayStyle = currentData.day.length > 8 ? {fontSize: '1.7rem'} : {};
  // console.log('SelectedWeather');
  return (
    <div className={`weather-box ${weatherBoxClass}`}>
      {weatherIsLoading ? (
        <WiNa size="10rem" color="yellow" />
      ) : (
        <Fragment>
          <div className="weather-box-header">
            {currentData.fileName ? (
              <Image
                fileName={currentData.fileName}
                png
                altImage="weather icon"
                classes="weather-box-header-icon"
                doubleSize
              />
            ) : (
              <WiNa size="10rem" color="yellow" />
            )}
            <h3 style={dayStyle}>{currentData.day}</h3>
          </div>
          <div className="weather-box-content">
            <h4 style={forecastStyle}>{currentData.forcast}</h4>
            <span>visibility {currentData.visibility} KM</span>
            <h4>{currentData.temperature}°</h4>
            <span>feels like {currentData.temperatureApparent}°</span>
          </div>
          <div className="weather-box-conditions">
            <div className="weather-box-conditions--left">
              <div className="weather-box-conditions-image">
                <WiHumidity size="100%" />
              </div>
              <span>{currentData.humidity}%</span>
            </div>
            <div className="weather-box-conditions--middle">
              <div className="weather-box-conditions-image">
                <WiWindy size="100%" />
              </div>
              <span>
                {currentData.windSpeed}
                <span style={{fontSize: '0.8rem', marginLeft: '2px'}}>
                  km/h
                </span>
              </span>
            </div>
            <div className="weather-box-conditions--right">
              <div className="weather-box-conditions-image">
                <WiDaySunnyOvercast size="100%" />
              </div>
              <span>{currentData.cloudCover}%</span>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}
