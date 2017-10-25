import React, { Component } from 'react';

import {
    Image,
    Animated,
    View
} from 'react-native';

import PropTypes from 'prop-types';

export default class ProgressImage extends Component {

    static propTypes = {
        //key: PropTypes.any.isRequired,
        source: PropTypes.object.isRequired,
        thumbnail: PropTypes.object.isRequired,
        style: PropTypes.any,
    };

    constructor() {
        super();
        this.state = { thumbnailOpacity: new Animated.Value(0) };
    }

    onLoad() {
        Animated.timing(
            this.state.thumbnailOpacity, {
                toValue: 0,
                duration: 250
            }).start();
    }

    onThumbnailLoad() {
        Animated.timing(
            this.state.thumbnailOpacity, {
                toValue: 1,
                duration: 250
            }).start();
    }

    render() {
        return (
            <View
                width={this.props.style.width}
                height={this.props.style.height}
                backgroundColor={'#CCC'}>
                <Animated.Image 
                    resizeMode={'contain'}
                    //key={this.props.key} 
                    style={[
                    {
                        opacity: this.state.thumbnailOpacity
                    }, 
                    this.props.style
                    ]}
                    source={this.props.thumbnail}
                    onLoad={ () => {this.onThumbnailLoad(); }} />
                <Animated.Image 
                    resizeMode={'contain'}
                    //key={this.props.key} 
                    style={[
                        {
                            position: 'absolute',
                        },
                        this.props.style 
                    ]}
                    source={this.props.source}
                    onLoad={ () => { this.onLoad() }} />
            </View>   
        );
    }
}