const WEBVIEW_REF = "WEBVIEW_REF";
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  WebView,
  Platform,
  BackHandler,
} from 'react-native';
import { Button } from 'react-native-elements'

export default class WebViewExample extends Component {

  static navigationOptions = {
    title: 'Welcome',
    headerLeft: <Button
      onPress = { () => {
        if(null != self) {
          if(self.state.canGoBack) {
            self.onBack();
          } else {
            self.props.navigation.goBack(null);
          }
        }
      } }
      title="<" />
  }; 

  static self;

  constructor(props) {
    super(props);
    this.state = { canGoBack: false };
    
    self = this;

    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  componentWillUnmount() {

    self = null;

    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topbar}>
          <TouchableOpacity
            disabled={!this.state.canGoBack}
            onPress={this.onBack.bind(this)}
            >
            <Text style={this.state.canGoBack ? styles.topbarText : styles.topbarTextDisabled}>Go Back</Text>
          </TouchableOpacity>
        </View>
        <WebView
          ref={WEBVIEW_REF}
          style={{flex: 1}}
          onNavigationStateChange=
            {this.onNavigationStateChange.bind(this)}
          source={{uri: 'http://reactnative.cn/docs/0.49/animated.html#content'}}
          /> 
      </View>
    );
  }

  onBack() {
    this.refs[WEBVIEW_REF].goBack();
  }

  onBackAndroid = () => {
    if(this.state.canGoBack)
    {
      this.onBack();
      return true;
    } else {
      return false;
    }
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  topbar: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topbarTextDisabled: {
    color: 'gray'
  }
});