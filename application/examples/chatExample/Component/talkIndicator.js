import React, { Component } from 'react';
import { 
    Text,
    View,
    StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

export default class TalkIndicator extends Component {
    static propTypes = {
        layout: PropTypes.object,
        show: PropTypes.bool,
        cancle: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
        };
    }

    getText = () => {
        return this.props.cancle? '松开手指，取消发送' : '手指上划，取消发送';
    }

    renderIcon = () => {
        return this.props.cancle? 
            (<IconFontAwesome name='undo' color='white' size={120} style={styles.icon}/>) :
            (<IconIonicons name='ios-mic' color='white' size={120} style={styles.icon}/>);
    }

    render() {
        
        let {layout, show} = this.props;
        if(layout == null || show == null)
            return null;
        if(!show) return null;

        let {width, height} = layout;
        let translateX = (width - 200) / 2;
        let translateY = (height - 200) / 2 - 50;
        let cancle = this.state.cancle;

        return(
            <View style={[styles.container, {transform: [{translateX}, {translateY}], position: 'absolute'}]}>
                <View style={styles.iconContainer}>
                    {this.renderIcon()}
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{this.getText()}</Text>
                </View>    
            </View>
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
        opacity: 0.6,
        borderColor: '#242424',
        borderRadius: 6,
    },
    textContainer: {
        height: 36,
        marginHorizontal: 20,
        marginVertical: 7,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    textContainerPressed: {
        backgroundColor: 'red',
    },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftIconContainer: {
        margin: 10,
        flex: 1,
        marginRight: 5,
        justifyContent: 'center',
    },
    rightIconContainer: {
        margin: 10,
        flex: 1,
        marginLeft: 5,
        justifyContent: 'center',
    },
    icon: {
    },
    text: {
        flex: 1,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 32,
    },
});