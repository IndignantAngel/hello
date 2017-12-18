import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TalkButton from './Component/talkButton';
import TalkIndicator from './Component/talkIndicator';

import {GiftedChat, Actions, Bubble, SystemMessage, Composer} from 'react-native-gifted-chat';
import CustomActions from './CustomActions';
import CustomView from './CustomView';
import talkBtnStyles from './Styles/talkButtonStyles';

export default class ChatExample extends React.Component {

  static navigationOptions = {
		title: 'Chat with madoka',
	};

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
      messageType: 'text',
      layout: null,
      showIndicator: false,
      talkCancle: false,
    };

    this._isMounted = false;
    this._isAlright = null;
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: require('./data/messages.js'),
      };
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'React Native is typing'
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          if (messages[0].image) {
            this.onReceive('Nice picture!');
          } else if (messages[0].location) {
            this.onReceive('My favorite place');
          } else {
            if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive('Alright');
            }
          }
        }
      }

      this.setState((previousState) => {
        return {
          typingText: null,
        };
      });
    }, 1000);
  }

  onLoadEarlier = () => {
    this.setState((previousState) => {
      return {
        isLoadingEarlier: true,
      };
    });

    setTimeout(() => {
      if (this._isMounted === true) {
        this.setState((previousState) => {
          return {
            messages: GiftedChat.prepend(previousState.messages, require('./data/old_messages.js')),
            loadEarlier: false,
            isLoadingEarlier: false,
          };
        });
      }
    }, 1000); // simulating network
  }

  onSend = (messages = []) => {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });

    // for demo purpose
    this.answerDemo(messages);
  }

  onReceive = (text) => {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            // avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        }),
      };
    });
  }

  /**************************************************************************
  ****************************** ACTION begin *******************************
  **************************************************************************/
  onPressAction = () => {
    let { messageType } = this.state;

    switch(messageType) {
    case 'text':
      messageType = 'voice';
      break;
    case 'voice':
      messageType = 'text';
      break;
    default:
      break;
    }
    
    this.setState({ messageType });
  }

  getActionIcon = () => {
    if(this.state.messageType == 'text')
      return 'record-voice-over';
    return 'keyboard';
  }

  renderCustomActions = (props) => {
    return (
        <CustomActions
          {...props}
          getIcon={this.getActionIcon}
          onPress={this.onPressAction}
        />
    );
  }
  /**************************************************************************
  ****************************** ACTION end *********************************
  **************************************************************************/

  /**************************************************************************
  ****************************** INPUT begin ********************************
  **************************************************************************/

  onPressTalkButton = () => {
    this.setState({showIndicator: true});
  }

  onReleaseTalkButton = () => {
    this.setState({showIndicator: false, talkCancle: false});
  }

  renderComposer = (props) =>{
    const {messageType} = this.state;
    if(messageType === 'text')
      return (
        <Composer {...props}/>
      );
    else if(messageType == 'voice')
      return (
        <TalkButton 
          onGrant={this.onPressTalkButton} 
          onRelease={this.onReleaseTalkButton}
          onCancle={this.onTalkCancle}/>
      );
  }

  /**************************************************************************
  ****************************** INPUT end **********************************
  **************************************************************************/

  renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#f0f0f0',
          }
        }}
      />
    );
  }

  renderSystemMessage = (props) => {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
        }}
        textStyle={{
          fontSize: 14,
        }}
      />
    );
  }

  renderCustomView = (props) => {
    return (
      <CustomView
        {...props}
      />
    );
  }

  /* talk promp begin*/
  onLayout = (event) => {
    let {width, height} = event.nativeEvent.layout;
    this.setState({layout: {width, height}});
  }

  onTalkCancle = (talkCancle) => {
    this.setState({talkCancle});
  }
  /* talk promp end*/

  render() {
    console.log(this.state);
    return (
      <View style={{flex: 1}} onLayout={this.onLayout}>  
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          loadEarlier={this.state.loadEarlier}
          onLoadEarlier={this.onLoadEarlier}
          isLoadingEarlier={this.state.isLoadingEarlier}

          user={{
            _id: 1, // sent messages should have same user._id
          }}

          renderActions={this.renderCustomActions}
          renderBubble={this.renderBubble}
          renderSystemMessage={this.renderSystemMessage}
          renderCustomView={this.renderCustomView}
          renderComposer={this.renderComposer}
          showUserAvatar={true}
        />
        <TalkIndicator 
          layout={this.state.layout} 
          show={this.state.showIndicator}
          cancle={this.state.talkCancle}
        />
      </View>
    );
  }
}

//<Button title='Hello' containerViewStyle={{position: 'absolute', transform:[ {translateX}, {translateY} ]}} />
//<TalkIndicator layout={this.state.layout} show={this.state.showIndicator}/>