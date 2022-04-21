import React from 'react';

import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import WeathersWrapper from './components/WeathersWrapper';
import SelectedWeather from './components/SelectedWeather';
import WeekdaysWeather from './components/WeekdaysWeather';
import OneDayWrapper from './components/_24HoursWrapper';
import Hours from './components/Hours';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <WeathersWrapper>
          <SelectedWeather />
          <WeekdaysWeather />
        </WeathersWrapper>
        <OneDayWrapper>
          <Hours />
        </OneDayWrapper>
      </Main>
    </React.Fragment>
  );
}

export default App;
