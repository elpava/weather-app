import {FaSatelliteDish} from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container-input">
          <h1>Location Weather</h1>
          <form htmlFor="input-location" className="header-input">
            <FaSatelliteDish size="1.9rem" className="header-input-icon" />
            <span className="header-input-divider"></span>
            <input type="text" name="location" id="input-location" />
          </form>
        </div>
      </div>
    </header>
  );
}
