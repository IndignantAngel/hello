import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  TextInput,
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Button } from 'react-native-elements';
export default class SimpleChatExample extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this._KeyboardDidHideListener = 
      Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://b-ssl.duitang.com/uploads/item/201203/21/20120321162022_RiBdU.jpeg',
          },
        },
      ],
    })
  }

  componentWillUnmount() {    
    this._KeyboardDidHideListener.remove();
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <ScrollView ref={c=> {this._scrollView = c;}} style={{flex: 1}} 
        canCancelContentTouches={false} 
        scrollEnabled={false}
        keyboardShouldPersistTaps='handled'>
        <View style={{height: 831}}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        <View style={styles.subview}/>
        </View>
      </ScrollView>
    )
  }

  _keyboardDidHide = ()=> {
    this._scrollView.scrollTo({x: 0, y: 0, animated: true});
  }
}

const styles = StyleSheet.create({
  container: { flex: 1,},
  subview: {
    backgroundColor: 'red',
    height: 267,
  },
});