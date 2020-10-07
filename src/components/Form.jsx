import React, { useState } from 'react';

const BASE_URL = 'http://api.weatherstack.com/current?access_key=78b6376e9b1eaf841e6a89f6d1ac5021&query=';

const Form = () => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [loadingImage, setLoadingImage] = useState(false);
  const [errorTextShown, setErrorTextShown] = useState(false);
  const [searchResults, setSearchResults] = useState({});

  const searchCity = (evt) => {
    evt.preventDefault();
    setLoadingImage(true);
    fetch(`${BASE_URL}${searchInputValue}`)
      .then(response => response.json())
      .then(results => {
        setLoadingImage(false);
        setSearchInputValue('');
        setSearchResults(results);
      })
      .catch((err) => {
        setErrorTextShown(true);
        setLoadingImage(false);
      })
  }

  const handleChange = (evt) => {
    setSearchInputValue(evt.target.value);
  }

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
