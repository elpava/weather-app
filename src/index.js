import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {WeatherContextProvider} from './store/weather-context';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
