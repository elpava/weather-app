import {WiDayLightning} from 'react-icons/wi';

export default function WeekdaysWeather() {
  return (
    <section className="weekdays">
      <div className="weekdays-day">
        <WiDayLightning size="5rem" />
        <h4>
          28<span>°</span>
        </h4>
        <span>now</span>
      </div>
      <div className="weekdays-day">
        <WiDayLightning size="5rem" />
        <h4>
          26<span>°</span>
        </h4>
        <span>sat</span>
      </div>
      <div className="weekdays-day">
        <WiDayLightning size="5rem" />
        <h4>
          28<span>°</span>
        </h4>
        <span>sun</span>
      </div>
      <div className="weekdays-day">
        <WiDayLightning size="5rem" />
        <h4>
          26<span>°</span>
        </h4>
        <span>mon</span>
      </div>
      <div className="weekdays-day">
        <WiDayLightning size="5rem" />
        <h4>
          28<span>°</span>
        </h4>
        <span>tue</span>
      </div>
      <div className="weekdays-day active">
        <WiDayLightning size="5rem" />
        <h4>
          27<span>°</span>
        </h4>
        <span>wed</span>
      </div>
    </section>
  );
}
