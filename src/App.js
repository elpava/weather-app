import React, {useState, useEffect} from 'react';
import {IconContext} from 'react-icons';
import useFetch from './hooks/useFetch';

import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import SelectedWeather from './components/SelectedWeather';
import WeekdaysWeather from './components/WeekdaysWeather';

function App() {
  const [weatherdata, setWeatherData] = useState();
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <Header />
      <Main>
        <SelectedWeather />
        <WeekdaysWeather />
      </Main>
    </React.Fragment>
  );
}

export default App;
