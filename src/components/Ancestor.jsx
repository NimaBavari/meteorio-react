import { Component } from 'react';

export default class Ancestor extends Component {
  constructor() {
    super();
    this.state = {
      searchInputValue: '',
      searchBtnDisabled: true,
      searhAgainBtnShown: false,
      loadingImage: false,
      errorTextShown: false,
      searchResults: {},
    };
  }
}
