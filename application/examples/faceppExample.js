import React, { Component } from 'react';

import {
    Text,
    View
  } from 'react-native';

import { Button } from 'react-native-elements';

const faceSetCreate = 'https://api-cn.faceplusplus.com/facepp/v3/faceset/create';
const faceDetect = 'https://api-cn.faceplusplus.com/facepp/v3/detect';

export default class FacePPExample extends Component {

    static navigationOptions = {
		title: 'Image pick then crop example',
    };
    
    constructor() {
        super();

        this.state = { status: 'Ready!' };
    }


    render() {
        return(
            <View>
                <Button 
                    title='Create Faceset'
                    onPress={ this.onCreateFaceset }
                />
                <Button 
                    title='Detect Face'
                    onPress={ this.onDetectFace }
                />
                <Text>{ JSON.stringify(this.state) }</Text>
            </View>
        );
    }


    onCreateFaceset = () => {

    }

    onAddFace = () => {

    }

    onDetectFace = async () => {

        let detectParam = {
            api_key: 'zvJIuD0B3xj5L2c-uHycKQJTNNRjf_Uq',
            api_secret: 'JSQoT_9MvhrD-65TEnBtoNdGjkXCJb7b',
            image_url: 'https://bj-mc-prod-asset.oss-cn-beijing.aliyuncs.com/mc-official/images/demo/demo-pic1.jpg'
        };

        let formData = new FormData();
        Object.entries(detectParam).forEach((entry) => {
            formData.append(...entry);
        });

        console.log(formData);
        let responseData = await (await fetch(faceDetect, {
            method: 'POST',
            body: formData
        })).json();
        console.log(responseData);
        this.setState({ status: 'OK!' });

        /*
        fetch(faceDetect, {
            method: 'POST',
            body: formData
        }).then((response) => response.json())
        .then(responseData => {
            console.log(responseData);
            this.setState({ status: 'OK!' });
        });
        */
    }

    onCompareFace = () => {

    }
}