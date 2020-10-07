import React from 'react';

export const state = {
  searchInputValue: '',
  searchBtnDisabled: true,
  searhAgainBtnShown: false,
  loadingImage: false,
  errorTextShown: false,
  searchResults: {},
};
const BASE_URL = 'http://api.weatherstack.com/current?access_key=78b6376e9b1eaf841e6a89f6d1ac5021&query=';

const Form = () => {
  const searchCity = (evt) => {
    evt.preventDefault();
    this.setState({ loadingImage: true });
    fetch(`${BASE_URL}${state.searchInputValue}`)
      .then(response => response.json())
      .then(results => {
        this.setState({
          loadingImage: false,
          searchInputValue: '',
          searchResults: results,
        });
      })
      .catch((err) => {
        this.setState({
          errorTextShown: true,
          loadingImage: false,
        });
      })
      .then(() => {
        this.setState({ searchAgainBtnShown: true });
      })
  }

  const handleChange = (evt) => {
    this.setState({ searchInputValue: evt.target.value });
  }

  const handleKeyUp = () => {
    this.setState({ searchBtnDisabled: !state.searchInputValue });
  }

  return (
    <form
      className="form-inline justify-content-center"
      id="search-city-form"
      onSubmit={event => {
        searchCity(event);
      }}
    >
      <div className="form-group">
        <input
          type="text"
          id="search-city-input"
          value={state.searchInputValue}
          className="form-control form-control-lg"
          placeholder="Search Cities..."
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          autoFocus
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-lg"
        disabled={state.searchBtnDisabled}
      >
        <i className="fas fa-search-location"></i> Search
      </button>
    </form>
  );
}

export default Form;
