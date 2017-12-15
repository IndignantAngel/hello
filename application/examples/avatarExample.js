import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';

class AvatarExample extends Component {
	
	static navigationOptions = {
		title: 'Avatar example',
	};
	
	state = { messageType: 'text' };

	getIconName = () => {
		if(this.state.messageType == 'text')
			return 'record-voice-over';
		return 'keyboard';
	}

	onPressIcon = () => {
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

	render() {
		return (
			<ScrollView>
				<Avatar
					small
					rounded
					source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
					onPress={() => console.log("Works!")}
					activeOpacity={0.7}
				/>
				<Avatar
					medium
					source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
					onPress={() => console.log("Works!")}
					activeOpacity={0.7}
				/>
				<Avatar
					large
					source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
					onPress={() => console.log("Works!")}
					activeOpacity={0.7}
				/>
				<Avatar
					xlarge
					rounded
					source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
					onPress={() => console.log("Works!")}
					activeOpacity={0.7}
				/>
				<TouchableOpacity 
					style={styles.wrapper}
					onPress={this.onPressIcon}>
					<Icon name={ this.getIconName() } size={18} color="#b2b2b2" />
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
	  borderRadius: 15,
	  borderColor: '#b2b2b2',
	  borderWidth: 1,
	  width: 30,
	  height: 30,
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	icon: {
	  color: '#b2b2b2',
	  fontWeight: 'bold',
	  fontSize: 16,
	  backgroundColor: 'transparent',
	  textAlign: 'center',
	  flex: 1,
	},
	button: {
		width: 30,
		height: 30,
	},
  });

export default AvatarExample;