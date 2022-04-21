import {useContext, useEffect, useState} from 'react';
import WeatherContext from '../store/weather-context';
import moment from 'moment';
import {WiWindy, WiHumidity, WiNa} from 'react-icons/wi';
import Image from './UI-Element/Image';

export default function SelectedWeather() {
  const {selectedWeather, weatherCodeDay} = useContext(WeatherContext);
  // const [currentWeather, setCurrentWeather] = useState();

  let currentData = {
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
    // console.log(data);
    currentData = {
      ...currentData,
      day: moment(data.startTime).format('dddd'),
      forcast: weatherCodeDay[data.values.weatherCodeDay],
      visibility: Math.trunc(data.values.visibility),
      temperature: Math.trunc(data.values.temperature),
      // temperatureApparent: Math.trunc(data.values.temperatureApparent),
      humidity: Math.trunc(data.values.humidity),
      windSpeed: data.values.windSpeed,
      // cloudCover: data.values.cloudCover,
    };
  }
  selectedWeather(selectedWeatherHandler);

  const fileName = '10000_clear_large';

  return (
    <div className="weather-box">
      <div className="weather-box-header">
        <Image
          fileName={fileName}
          png
          altImage={11}
          classes="weather-box-header-icon"
          doubleSize
        />
        <h3>{currentData.day}</h3>
      </div>
      <div className="weather-box-content">
        <h4>{currentData.forcast}</h4>
        <span>visibility {currentData.visibility} KM</span>
        <h4>{currentData.temperature}°</h4>
        <span>feels like {currentData.temperatureApparent}°</span>
      </div>
      <div className="weather-box-conditions">
        <div className="weather-box-conditions--left">
          <div className="weather-box-conditions-image">
            <Image fileName={fileName} png altImage={11} classes="" />
          </div>
          <span>{currentData.humidity}%</span>
        </div>
        <div className="weather-box-conditions--middle">
          <div className="weather-box-conditions-image">
            <Image fileName={fileName} png altImage={11} classes="" />
          </div>
          <span>
            {currentData.windSpeed}
            <span style={{fontSize: '0.8rem', marginLeft: '2px'}}>km/h</span>
          </span>
        </div>
        <div className="weather-box-conditions--right">
          <div className="weather-box-conditions-image">
            <Image fileName={fileName} png altImage={11} classes="" />
          </div>
          <span>{currentData.cloudCover}%</span>
        </div>
      </div>
    </div>
  );
}
