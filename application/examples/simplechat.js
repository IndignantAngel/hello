import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  Text,
  KeyboardAvoidingView,
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

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <ScrollView style={{flex: 1}} 
        canCancelContentTouches={false} 
        scrollEnabled={false}
        keyboardShouldPersistTaps='handled'>
        <View style={{height: 564}}>
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
}

const styles = StyleSheet.create({
  container: { flex: 1,},
  subview: {
    backgroundColor: 'red',
    height: 267,
  },
});