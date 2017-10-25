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
    header: null,
  };
	
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
			</View>
		);
	}
}