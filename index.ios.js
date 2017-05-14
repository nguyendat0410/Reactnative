import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './Components/App';

export default class Realtime extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('Realtime', () => Realtime);
