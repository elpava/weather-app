import {useState} from 'react';
import {
  WiDayLightning,
  WiDayCloudyGusts,
  WiDaySleet,
  WiDayLightWind,
} from 'react-icons/wi';

export default function SelectedWeather() {
  const [hover, setHover] = useState(false);

  function mouseOverHandle() {
    setHover(true);
  }
  function mouseLeaveHandle() {
    setHover(false);
  }

  return (
    <div
      className="weather-box"
      onMouseOver={mouseOverHandle}
      onMouseLeave={mouseLeaveHandle}
    >
      <div className="weather-box-header">
        <WiDayLightning
          size="11rem"
          className={`weather-box-header-icon ${hover && 'animation'}`}
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
          <WiDayCloudyGusts size="100%" />
          <span>28%</span>
        </div>
        <div className="weather-box-conditions--middle">
          <WiDaySleet size="100%" />
          <span>8km/h</span>
        </div>
        <div className="weather-box-conditions--right">
          <WiDayLightWind size="100%" />
          <span>64%</span>
        </div>
      </div>
    </div>
  );
}
