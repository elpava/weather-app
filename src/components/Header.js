import {useContext, useState} from 'react';
import WeatherContext from '../store/weather-context';
import {FaSatelliteDish} from 'react-icons/fa';

export default function Header() {
  const [inputedLocationName, setInputedLocationName] = useState('');
  const {location, placeName, setNewLocation} = useContext(WeatherContext);
  const locationName = [...new Set(placeName.split(', '))].join(' - ');

  function inputLocationHandler(e) {
    setInputedLocationName(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    setNewLocation(inputedLocationName);
    setInputedLocationName('');
  }
  // console.log('Header');
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container-search">
          <h1>Location Weather</h1>
          <form
            htmlFor="input-location"
            className="header-input"
            onSubmit={submitHandler}
          >
            <FaSatelliteDish size="1.9rem" className="header-input-icon" />
            <span className="header-input-divider"></span>
            <input
              type="text"
              name="location"
              id="input-location"
              onChange={inputLocationHandler}
              value={inputedLocationName}
            />
          </form>
        </div>
        <div className="header-container-location">
          <h1 className="locationName">{location}</h1>
          <h3>{locationName}</h3>
        </div>
      </div>
    </header>
  );
}
