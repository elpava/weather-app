import {useState} from 'react';
import Image from './Image';

export default function SelectedWeather() {
  return (
    <div className="weather-box">
      <div className="weather-box-header">
        <Image
          fileName={1000}
          altImage={11}
          classes="weather-box-header-icon"
          doubleSize
        />
        <h3>today</h3>
      </div>
      <div className="weather-box-content">
        <h4>day lightning</h4>
        <span>tonight</span>
        <h4>
          28°
          {/* 28<span>°</span> */}
        </h4>
        <span>feels like 32°</span>
      </div>
      <div className="weather-box-conditions">
        <div className="weather-box-conditions--left">
          <div className="weather-box-conditions-image">
            <Image fileName={1000} altImage={11} classes="" />
          </div>
          <span>28%</span>
        </div>
        <div className="weather-box-conditions--middle">
          <div className="weather-box-conditions-image">
            <Image fileName={1000} altImage={11} classes="" />
          </div>
          <span>8km/h</span>
        </div>
        <div className="weather-box-conditions--right">
          <div className="weather-box-conditions-image">
            <Image fileName={1000} altImage={11} classes="" />
          </div>
          <span>64%</span>
        </div>
      </div>
    </div>
  );
}
