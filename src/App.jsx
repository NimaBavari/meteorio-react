import React from 'react';

import Ancestor from './components/Ancestor';
import ErrorCard from './components/ErrorCard';
import Form from './components/Form';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import SearchAgain from './components/SearchAgain';
import WeatherCard from './components/WeatherCard';

class App extends Ancestor {
  render() {
    return (
      <div className="App">
        <Navbar />
        <section role="main">
          <div className="container">
            <div className="main-search">
              {!this.state.searhAgainBtnShown ? <Form /> : ''}
            </div>
            <div className="d-flex justify-content-center my-5" id="weather">
              {this.state.loadingImage ? <Loading /> :
                this.state.errorTextShown ? <ErrorCard /> : <WeatherCard results={this.state.searchResults} />}
            </div>
            {this.state.searchAgainBtnShown ? <SearchAgain /> : ''}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
