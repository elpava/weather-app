import React from 'react';

import './App.scss';
import BackgroudShape from './components/UI-Element/BackgroundShape';
import Header from './components/Header';
import Main from './components/Main';
import WeathersWrapper from './components/weatherDays/WeathersWrapper';
import SelectedWeather from './components/weatherDays/SelectedWeather';
import OneDayWrapper from './components/weatherHours/_24HoursWrapper';
import Hours from './components/weatherHours/Hours';

function App() {
  return (
    <React.Fragment>
      <BackgroudShape />
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
