import React, { Component } from 'react';

export default class ErrorCard extends Component {
  render() {
    return (
      <div className="text-danger">
        The city you entered not found. Search again, please.
      </div>
    );
  }
}
