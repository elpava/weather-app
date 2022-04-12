import Image from './Image';

export default function WeekdaysWeather() {
  return (
    <section className="weekdays">
      <div className="weekdays-day">
        <Image fileName={1000} altImage={11} classes="weather icon" />
        <h4>
          28<span>°</span>
        </h4>
        <span>now</span>
      </div>
      <div className="weekdays-day">
        <Image fileName={1000} altImage={11} classes="weather icon" />
        <h4>
          26<span>°</span>
        </h4>
        <span>sat</span>
      </div>
      <div className="weekdays-day">
        <Image fileName={1000} altImage={11} classes="weather icon" />
        <h4>
          28<span>°</span>
        </h4>
        <span>sun</span>
      </div>
      <div className="weekdays-day">
        <Image fileName={1000} altImage={11} classes="weather icon" />
        <h4>
          26<span>°</span>
        </h4>
        <span>mon</span>
      </div>
      <div className="weekdays-day">
        <Image fileName={1000} altImage={11} classes="weather icon" />
        <h4>
          28<span>°</span>
        </h4>
        <span>tue</span>
      </div>
      <div className="weekdays-day active">
        <Image fileName={1000} altImage={11} classes="weather icon" />
        <h4>
          27<span>°</span>
        </h4>
        <span>wed</span>
      </div>
    </section>
  );
}
