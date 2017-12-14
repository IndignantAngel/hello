import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'react-native-fetch-blob';

const uploadService = 'http://192.168.0.10:8080/file/upload';
const fetchTest = 'http://192.168.0.10:8080/';
const faceSetCreate = 'https://api-cn.faceplusplus.com/facepp/v3/faceset/create';

export default class ImageCropPick extends Component {
	
	static navigationOptions = {
		title: 'Image pick then crop example',
	};
	
	constructor() {
		super();

		this.state = { res: 'Ready!' };
	}

	onPress() {
		ImagePicker.openPicker({
			width: 300,
			height: 400,
			cropping: true
			}).then(image => {
				console.log(image);
				this.uploadImage(image);
			});
	}

	uploadImage(image) {
		RNFetchBlob.fetch('POST'			// method
			, uploadService
			, {
				Authorization: "buke",
				Args: '/avatar.jpg'
			}								// headers
			, RNFetchBlob.wrap(image.path)
		).then((response) =>{
			this.setState(response.json());
		}).catch((error) => {
			console.log(error);

			this.setState({ res: 'Error1' });
		});

		this.setState({ res: 'Wait for response！' });
	}
	
	render() {
		return (
			<View>
				<Text>{this.state.res}</Text>
				<Button 
					onPress = {() => this.onPress() }
					title='Select Pictuer'
				/>
			</View>
		);
	}
}