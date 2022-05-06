import React from 'react';

import './App.scss';
import BackgroundShape from './components/UI-Element/BackgroundShape';
import Header from './components/Header';
import Main from './components/Main';
import WeathersWrapper from './components/weatherDays/WeathersWrapper';
import OneDayWrapper from './components/weatherHours/Full24HoursWrapper';

function App() {
  return (
    <React.Fragment>
      <BackgroundShape />
      <Header />
      <Main>
        <WeathersWrapper />
        <OneDayWrapper />
      </Main>
    </React.Fragment>
  );
}

export default App;
