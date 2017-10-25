import React, { Component } from 'react'
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { Avatar } from 'react-native-elements'


class AvatarExample extends Component {
	
	static navigationOptions = {
		title: 'Avatar example',
	};
	
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
			</ScrollView>
		);
	}
}

export default AvatarExample;