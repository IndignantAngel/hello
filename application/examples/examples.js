import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Button } from 'react-native-elements';

export default class Examples extends Component {
	
	static navigationOptions = {
    header: <View/>,
  };
	
	componentWillMount() {

		//this._Socket = new WebSocket('ws://10.0.0.15:8080/wsapp');

		/*this._Socket.onopen = () => {
      const protocol = {
        prot_type: 0,
        data: {
          platform: 0,
          mac: '123',
          appid: '123',
          app_version: 'v1.0.0',
          group_type: 0,
					user_id: 1,
        },
      };

      console.log(JSON.stringify(protocol));
      this._Socket.send(JSON.stringify(protocol));
    }

    this._Socket.onmessage= (e) => {
			console.log(e.data);
			const proto = JSON.parse(e.data);
			switch(proto.type)
			{
				
			}
    }

    this._Socket.onerror = (e) => {
      // an error occurred
      console.log(e);
    }

    this._Socket.onclose = (e) => {
      // connection closed
      console.log(e);
    }*/
	}

	componentWillUnmount() {
    //this._Socket.close();
  }

	render() {
		return (
			<View>
				<Button 
					onPress = { () => this.props.navigation.navigate('avatarExamples') }
					title='Avatar example.'
				/>
				<Button 
					onPress = { () => this.props.navigation.navigate('imageCropPick') }
					title='Image pick then crop example.'
				/>
				<Button 
					onPress = { () => this.props.navigation.navigate('chatExamples') }
					title='Chat example.'
				/>
				<Button 
					onPress = { () => this.props.navigation.navigate('placeholderExample') }
					title='Placeholder example.'
				/>
				<Button 
					onPress = { () => this.props.navigation.navigate('webViewExample') }
					title='Wev view example.'
				/>
				<Button 
					onPress = { () => this.props.navigation.navigate('imageAdvExample') }
					title='Image advanced example.'
				/>
				<Button 
					onPress = { () => this.props.navigation.navigate('faceppExample') }
					title='Face plus plus example.'
				/>
				<Button 
					onPress = { () => this.props.navigation.navigate('audioExample') }
					title='Audio Example'
				/>
				<Button 
					onPress = { () => this.props.navigation.navigate('soundExample') }
					title='Sound Example'
				/>
				<Button 
					onPress = { () => this.props.navigation.navigate('formExample') }
					title='Form Example'
				/>
				<Button
					onPress = { () => this.props.navigation.navigate('simpleChat') }
					title='Simple Chat'
				/>
				<Button
					onPress = { () => this.props.navigation.navigate('emoji') }
					title='Simple Emoji'
				/>
			</View>
		);
	}
}