import Image from '../UI-Element/Image';

export default function WeekdaysWeather({
  fileName,
  temperature,
  weekdayName,
  activeClass,
  onClick,
}) {
  console.log('WeekdaysWeather');
  return (
    <div className={`weekdays-day ${activeClass}`} onClick={onClick}>
      <Image
        fileName={fileName}
        png
        altImage="weather icon"
        classes="weather icon"
      />
      <h4>
        {Math.trunc(temperature)}
        <span>°</span>
      </h4>
      <span className="weekdays-day--name">{weekdayName}</span>
    </div>
  );
}
