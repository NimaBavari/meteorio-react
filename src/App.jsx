import React from 'react';

import ErrorCard from './components/ErrorCard';
import Form from './components/Form';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import SearchAgain from './components/SearchAgain';
import WeatherCard from './components/WeatherCard';

const errorTextShown = '';
const loadingImage = false;
const searchResults = {};

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <section role="main">
        <div className="container">
          <div className="main-search">
            {!errorTextShown && !Object.keys(searchResults).length ? <Form /> : ''}
          </div>
          <div className="d-flex justify-content-center my-5" id="weather">
            {loadingImage ? <Loading /> :
              errorTextShown ? <ErrorCard /> : <WeatherCard results={searchResults} />}
          </div>
          {errorTextShown || !!Object.keys(searchResults).length ? <SearchAgain /> : ''}
        </div>
      </section>
    </div>
  );
}

export default App;
