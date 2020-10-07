import React, { useContext } from 'react';

import {
  ErrorTextShownContext,
  LoadingImageContext,
  SearchResultsContext
} from './Store.jsx'

import ErrorCard from './components/ErrorCard';
import Form from './components/Form';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import SearchAgain from './components/SearchAgain';
import WeatherCard from './components/WeatherCard';

const App = () => {
  const [errorTextShown, setErrorTextShown] = useContext(ErrorTextShownContext);
  const [loadingImage, setLoadingImage] = useContext(LoadingImageContext);
  const [searchResults, setSearchResults] = useContext(SearchResultsContext);

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
