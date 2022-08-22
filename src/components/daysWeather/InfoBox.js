export default function InfoBox({ classes, icon, field }) {
  const { value, unit } = field;
  // console.log('WeatherField');
  return (
    <div className={`weather-box-conditions${classes}`}>
      <div className="weather-box-conditions-image">{icon}</div>
      <span className="weather-box-conditions-value">
        {value}
        <span className="weather-box-conditions-unit">{unit}</span>
      </span>
    </div>
  );
}
