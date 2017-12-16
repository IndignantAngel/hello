import React, { Component } from 'react';
import { 
    Text,
    View,
    StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types';

export default class TalkIndicator extends Component {
    static propTypes = {
        layout: PropTypes.object,
        show: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
        };
        
    }

    onLayout = (event) => {
        let {width, height} = event.nativeEvent.layout;
        this.setState({width, height});
    }

    render() {
        
        let {layout, show} = this.props;
        if(layout == null || show == null)
            return null;
        if(!show) return null;

        let {width, height} = layout;
        let translateX = (width - this.state.width) / 2;
        let translateY = (height - this.state.height) / 2 - 50;

        return(
            <View 
                onLayout={this.onLayout}
                style={[styles.container, {transform: [{translateX}, {translateY}], position: 'absolute'}]}/>
        );
        return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 200,
        height: 200,
        backgroundColor: '#646464',
        opacity: 0.5,
        borderColor: '#242424',
        borderRadius: 3,
    },
});