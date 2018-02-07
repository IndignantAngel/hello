import React, { Component } from 'react';
import {
  View, 
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Emoji from '@ardentlabs/react-native-emoji';

export default class EmojiExample extends Component {
  render() {
    return (
    <View style={{flex: 1,}}>
      <Swiper style={{flex: 1}} showsButton={true}>
        <View style={styles.container}>
          <Text style={{fontSize: 50}}><Emoji name="kissing_heart"/></Text>
        </View>
        <View style={styles.container}>
          <Text style={{fontSize: 50}}><Emoji name="sob"/></Text>
        </View>
        <View style={styles.container}>
          <Text style={{fontSize: 50}}><Emoji name="right_anger_bubble"/></Text>
        </View>
      </Swiper>  
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})