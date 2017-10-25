import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import Appbar from "./components/Appbar";
import List from "./components/List";

const styles = StyleSheet.create({
    container: {
      marginTop: 0,
      flex: 1,
      backgroundColor: "#efefef"
    }
  });

export default class PlaceholderExample extends Component {

    static navigationOptions = {
		title: 'Placeholder example.',
    };
    
    constructor(...args) {
        super(...args);

        this.state = {
            isReady: false,
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Appbar />
                <View style={styles.container}>
                    <List />
                </View>
            </View>
          );
    }
}