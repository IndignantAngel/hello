import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import FadeInImage from './imageFade'
import ProgressImage from './imageProgress'

export default class ImageAdvExample extends Component {

    static navigationOptions = {
		title: 'Image advanced example',
	};

    constructor(props) {
        super(props);

        this.state = { showImage : false };
    }

    render() {

        // image soure
        let imageSrc = 'http://www.eatornotapp.com/img/Home.png?cBuster';
        let thumbnailSrc = 'http://www.eatornotapp.com/img/Home.min.png';

        // local image variables
        let image;
        let imageFade;
        let imageProgress;

        let buttonLabel;
        if(!this.state.showImage) {
            buttonLabel = 'Show Image';
            image = (
                <View
                    style={{
                        height: 267,
                        width: 150,
                        backgroundColor: '#CCC'
                    }}
                />
            );

            imageFade = image;
            imageProgress = image;
        } else {
            buttonLabel = 'Hide Image';
            image = (
                <Image
                    style= {{
                        height: 267,
                        width: 150,
                        backgroundColor: '#CCC'
                    }}
                    source={{
                        uri: imageSrc
                    }}
                />
            );

            imageFade = (
                <FadeInImage
                    style= {{
                        height: 267,
                        width: 150
                    }}
                    source={{
                        uri: imageSrc
                    }}
                    backgroundColor= '#CCC'
                    resizeMode= 'contain'
                />
            );

            imageProgress = (
                <ProgressImage
                    style= {{
                        height: 267,
                        width: 150
                    }}
                    //key={1}
                    source={{
                        uri: imageSrc
                    }}
                    thumbnail= {{
                        uri: thumbnailSrc
                    }}
                />
            );
        }

        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <TouchableOpacity
                    style={{
                        padding: 30
                    }}
                    onPress={() => {
                        this.setState({ showImage: !this.state.showImage });
                    }}
                >
                    <Text>{buttonLabel}</Text>
                </TouchableOpacity>
                <View
                    style={{
                        flexDirection: 'row'
                    }}>
                    {image}
                    {imageFade}
                </View>
                <View>
                    {imageProgress}
                </View>
            </View>
        );
    }
}