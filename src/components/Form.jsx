import React from 'react';

import Ancestor from './Ancestor';

const BASE_URL = 'http://api.weatherstack.com/current?access_key=78b6376e9b1eaf841e6a89f6d1ac5021&query=';

export default class Form extends Ancestor {
  searchCity(evt) {
    evt.preventDefault();
    this.setState({ loadingImage: true });
    fetch(`${BASE_URL}${this.state.searchInputValue}`)
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

  handleChange(evt) {
    this.setState({ searchInputValue: evt.target.value });
  }

  handleKeyUp() {
    this.setState({ searchBtnDisabled: !this.state.searchInputValue });
  }

  render() {
    return (
      <form
        className="form-inline justify-content-center"
        id="search-city-form"
        onSubmit={event => {
          this.searchCity(event);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            id="search-city-input"
            value={this.state.searchInputValue}
            className="form-control form-control-lg"
            placeholder="Search Cities..."
            onChange={(event) => { this.handleChange(event); }}
            onKeyUp={() => { this.handleKeyUp(); }}
            autoFocus
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          disabled={this.state.searchBtnDisabled}
        >
          <i className="fas fa-search-location"></i> Search
        </button>
      </form>
    );
  }
}
