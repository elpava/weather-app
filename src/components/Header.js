import {useContext, useState} from 'react';
import WeatherContext from '../store/weather-context';
import {FaSatelliteDish} from 'react-icons/fa';

export default function Header() {
  const [locationName, setLocationName] = useState('');
  const {getLocation, coordinates} = useContext(WeatherContext);

  function inputLocationHandler(e) {
    setLocationName(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    getLocation(locationName);
    setLocationName('');
  }
  console.log('Header');
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container-input">
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
              value={locationName}
            />
          </form>
        </div>
      </div>
    </header>
  );
}
