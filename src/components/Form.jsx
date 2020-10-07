import React, { useCallback, useContext } from 'react';

import {
  ErrorTextShownContext,
  LoadingImageContext,
  SearchInputValueContext,
  SearchResultsContext
} from '../Store.jsx';

const BASE_URL = 'http://api.weatherstack.com/current?access_key=78b6376e9b1eaf841e6a89f6d1ac5021&query=';

const Form = () => {
  const [errorTextShown, setErrorTextShown] = useContext(ErrorTextShownContext);
  const [loadingImage, setLoadingImage] = useContext(LoadingImageContext);
  const [searchInputValue, setSearchInputValue] = useContext(SearchInputValueContext);
  const [searchResults, setSearchResults] = useContext(SearchResultsContext);

  const searchCity = useCallback((evt) => {
    evt.preventDefault();
    setLoadingImage(true);
    fetch(`${BASE_URL}${searchInputValue}`)
      .then(response => response.json())
      .then(results => {
        setSearchInputValue('');
        setSearchResults(results);
      })
      .catch((err) => {
        setErrorTextShown(true);
      })
      .then(() => {
        setLoadingImage(false);
      });
  }, [searchInputValue, searchResults, errorTextShown, loadingImage]);

  const handleChange = useCallback((evt) => {
    setSearchInputValue(evt.target.value);
  }, [searchInputValue]);

  return (
    <form
      className="form-inline justify-content-center"
      id="search-city-form"
      onSubmit={searchCity}
    >
      <div className="form-group">
        <input
          type="text"
          id="search-city-input"
          value={searchInputValue}
          className="form-control form-control-lg"
          placeholder="Search Cities..."
          onChange={handleChange}
          autoFocus
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-lg"
        disabled={!searchInputValue}
      >
        <i className="fas fa-search-location"></i> Search
      </button>
    </form>
  );
}

export default Form;
