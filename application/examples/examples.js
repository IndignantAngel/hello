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
			</View>
		);
	}
}