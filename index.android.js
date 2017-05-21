import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//import App from './Components/App';
import Nav from './Components/Nav';

export default class Realtime extends Component {
  render() {
    return (
      <Nav />
    );
  }
}

AppRegistry.registerComponent('Realtime', () => Realtime);
