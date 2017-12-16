import React, { Component } from 'react';
import { 
    Text,
    View,
    StyleSheet,
    PanResponder,
} from 'react-native';

import PropTypes from 'prop-types';

export default class TalkButton extends Component {

    static propTypes = {
        onGrant: PropTypes.func,
        onRelease: PropTypes.func,
        onCancle: PropTypes.func,
      };

    constructor(props) {
        super(props);
        this.state = {
            isPressed: false,
            isCancle: false,
            position: {x: 0, y: 0},
        };
    }

    onPanResponderGrant = (e, gestureState) => {
        let state = this.state;
        let {pageX, pageY} = e.nativeEvent;

        state.isPressed = true;
        state.position = {x: pageX, y: pageY};
        this.setState(state);

        if(this.props.onGrant)
            this.props.onGrant();
    }

    onPanResponderMove = (e, gestureState) => {
        const theMagnitude = 40000;
        let state = this.state;
        
        let {pageX, pageY} = e.nativeEvent;

        let offsetX = pageX - state.position.x; 
        let offsetY = pageY - state.position.y;
        let offsetMagnitude = offsetX * offsetX + offsetY * offsetY;
        let isCancleValue = offsetMagnitude > theMagnitude;

        if(isCancleValue ^ state.isCancle) {
            state.isCancle = isCancleValue;
            this.setState(state);

            if(this.props.onCancle)
                this.props.onCancle(isCancleValue);
        }
    }

    onPanResponderRelease = (e, gestureState) => {
        let state = this.state;
        
            state.isPressed = false;
            state.isCancle = false;
            this.setState(state);

            if(this.props.onRelease)
                this.props.onRelease;
        
    }

    getText (){
        let state = this.state;
        if(state.isPressed) {
            if(state.isCancle) 
                return '松开手指，取消发送';
            else 
                return '松开 发送';
        }
        else 
            return '按住 说话';
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: this.onPanResponderGrant,
            onPanResponderMove: this.onPanResponderMove,
            onPanResponderRelease: this.onPanResponderRelease,
        });
    }

    render() {
        return(
        <View style={styles.container} {...this._panResponder.panHandlers}>
            <Text style={[styles.text, this.state.isPressed ? styles.pressIn : styles.pressOut]}>
                {this.getText()}
            </Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 43,
    },
    text: {
        backgroundColor: '#f008',
        flex: 1,
        lineHeight: 29,
        textAlign: 'center',
        color: '#808080',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10, 
        borderRadius: 5,
        borderColor: '#808080',
        borderWidth: 1,
        backgroundColor: '#f008',
    },
    pressIn: {   
        backgroundColor: '#C0C0C0',
    },
    pressOut: {
        backgroundColor: '#FFFFFF',
    },
});