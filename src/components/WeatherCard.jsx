import React, { Component } from 'react';

export default class WeatherCard extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { location, current } = this.props.results;
    if (!location && !current) return null;
    return (
      <div className="card weather-card">
        <div className="card-body">
          <h5 className="card-title">{location.name}, {location.country}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{current.temperature} &#176;C</h6>
          <div className="media">
            <img
              src={current.weather_icons[0]}
              className="align-self-start mr-3"
              alt={current.weather_descriptions[0]}
            />
            <div className="media-body">
              <h5 className="mt-0">{current.weather_descriptions[0]}</h5>
              <small>Last refreshed: {current.observation_time}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
