import React from 'react';

import ErrorCard from './components/ErrorCard';
import Form, { state } from './components/Form';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import SearchAgain from './components/SearchAgain';
import WeatherCard from './components/WeatherCard';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <section role="main">
        <div className="container">
          <div className="main-search">
            {!state.searhAgainBtnShown ? <Form /> : ''}
          </div>
          <div className="d-flex justify-content-center my-5" id="weather">
            {state.loadingImage ? <Loading /> :
              state.errorTextShown ? <ErrorCard /> : <WeatherCard results={state.searchResults} />}
          </div>
          {state.searchAgainBtnShown ? <SearchAgain /> : ''}
        </div>
      </section>
    </div>
  );
}

export default App;
