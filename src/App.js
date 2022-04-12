import React, {useState, useEffect} from 'react';
import {IconContext} from 'react-icons';
import useFetch from './hooks/useFetch';

import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Weathers from './components/Weathers';
import SelectedWeather from './components/SelectedWeather';
import WeekdaysWeather from './components/WeekdaysWeather';
import OnDayHours from './components/OneDayHours';
import Hours from './components/Hours';

function App() {
  const [weatherdata, setWeatherData] = useState();
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <Header />
      <Main>
        <Weathers>
          <SelectedWeather />
          <WeekdaysWeather />
        </Weathers>
        <OnDayHours>
          <Hours />
        </OnDayHours>
      </Main>
    </React.Fragment>
  );
}

export default App;
