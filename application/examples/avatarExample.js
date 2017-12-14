import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';
import { Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';

class AvatarExample extends Component {
	
	static navigationOptions = {
		title: 'Avatar example',
	};
	
	state = { messageType: 'text' };

	getIconName = () => {
		if(this.messageType == 'text')
			return 'record-voice-over';
		return 'keyboard';
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
				<View style={styles.wrapper}>
					<Icon name={ this.getIconName() } size={18} color="#b2b2b2"/>
				</View>
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
  });

export default AvatarExample;