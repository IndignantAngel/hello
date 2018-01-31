import React, { Component } from 'react';
import {
  Text,
	View,
	Image,
} from 'react-native';

import { Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'react-native-fetch-blob';

const uploadService = 'http://10.0.0.10:8080/file/upload';
const downloadService = 'http://10.0.0.15:8080/file/download?file_name=1.mp4&mime=video/mp4';
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
				mediaType: "image",
			}).then(image => {
				console.log(image);

				const index = image.path.lastIndexOf('/');
				const file_name = image.path.substr(index + 1);
				console.log(file_name);
				this.uploadImage(image.size, image.path, file_name);
			}).catch(e=> {
				console.log(e);
			});
	}

	uploadImage(size, path, name) {

		const file_name_query = 'file_name=' + name;
		const file_size_query = 'size=' + size;
		const url = uploadService + '?' + file_name_query + '&' + file_size_query

		console.log(url);

		RNFetchBlob.fetch('POST'			// method
			, url
			, {
				Authorization: "buke",
			}								// headers
			, RNFetchBlob.wrap(path)
		).uploadProgress((written, total) => {
			console.log('uploaded', written / total)
		}).then((response) =>{
			this.setState(response);
		}).catch((error) => {
			console.log(error);

			this.setState({ res: 'Error1' });
		});

		this.setState({ res: 'Wait for response！' });
	}
	
	onPressDownload = ()=> {
		RNFetchBlob.config({
			fileCache : true,
		}).fetch('POST'
			,downloadService
			, {
				Authorization: "buke",
			}
		).progress((received, total) => {
			console.log({received, total});
		}).then((res)=> {
			console.log(res);
		}).catch((errorMessage, statusCode) => {
			// error handling
			console.log(errorMessage);
		})
	}

	render() {
		return (
			<View>
				<Text>{this.state.res}</Text>
				<Button 
					onPress={() => this.onPress() }
					title='Select Pictuer'
				/>
				<Button
					onPress={this.onPressDownload}
					title='download file'
				/>
				<Image 
					source={{uri: 'http://10.0.0.10:8080/file/download?file_name=8e8b11f0-b077-570e-a289-5259e2a33fec.jpg'}}
					style={{width: 100, height: 100}}/>
			</View>
		);
	}
}

/*
<Image 
					source={{uri: 'http://10.0.0.10:8080/file/download?file_name=8e8b11f0-b077-570e-a289-5259e2a33fec.jpg'}}
					style={{width: 100, height: 100}}/>*/