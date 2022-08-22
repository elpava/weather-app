import BackgroundShape from './components/ui/BackgroundShape';
import Header from './components/Header';
import Main from './components/Main';
import DaysWrapper from './components/daysWeather/Index';
import FullDayWrapper from './components/hourlyWeather/Index';

import './App.scss';

function App() {
  return (
    <>
      <BackgroundShape />
      <Header />
      <Main>
        <DaysWrapper />
        <FullDayWrapper />
      </Main>
    </>
  );
}

export default App;
