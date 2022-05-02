import React from 'react';

import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import WeathersWrapper from './components/weatherDays/WeathersWrapper';
import SelectedWeather from './components/weatherDays/SelectedWeather';
import WeekdaysWeather from './components/weatherDays/WeekdaysWeather';
import OneDayWrapper from './components/weatherHours/_24HoursWrapper';
import Hours from './components/weatherHours/Hours';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <WeathersWrapper>
          <SelectedWeather />
        </WeathersWrapper>
        <OneDayWrapper>
          <Hours />
        </OneDayWrapper>
      </Main>
    </React.Fragment>
  );
}

export default App;
