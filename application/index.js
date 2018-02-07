/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, cloneElement } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Root } from './router';
import Storage from './examples/storage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  componentWillMount(){
    Storage.init();
    //Storage.put('keyboardHeight', 10);
    /*Storage.get('keyboardHeight').then((data)=> {
      console.log(data);
    }).catch((e)=> {
      console.log(e);
    });*/
  }

  componentDidMount() {
    /*Storage.get('keyboardHeight').then((data)=> {
      console.log(data);
    }).catch((e)=> {
      console.log(e);
    });*/
  }

  render() {
    return (
      <Root/>
    );
  }
}