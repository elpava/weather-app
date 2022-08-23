import { useContext, useState } from 'react';

import NewWeatherContext from '../../store/weather-context';

import SelectedDay from './SelectedDay';
import Days from './Days';

export default function DaysWrapper() {
  const { data: weatherData } = useContext(NewWeatherContext);
  const { data } = weatherData;
  const [selectedItem, setSelcetedItem] = useState(0);

  if (!data) return <span className="skeleton-loader first"></span>;

  const { intervals } = data.timelines[0];
  const selectedWeatherData = intervals[selectedItem];

  return (
    <div className="main-container-weathers">
      <SelectedDay data={selectedWeatherData} />

      <section className="weekdays">
        <Days
          data={intervals}
          onSelectedWeather={setSelcetedItem}
          activeWeather={selectedItem}
        />
      </section>
    </div>
  );
}
