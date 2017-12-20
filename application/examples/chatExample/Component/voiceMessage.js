import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';

export default class VoiceMessage extends Component {
    static propTypes = {
        position: PropTypes.oneOf(['left', 'right']).isRequired,
        unread: PropTypes.bool.isRequired,
        length: PropTypes.number.isRequired,
    };

    constructor(props) {
        super(props);
    }

    getRenderWidth(length) {
        if(length < 2)
            return 80;
        if(length >= 60) {
            length = 60;
        }
        
        let center = 60 - length;
        return Math.floor(center * center * (-0.05) + 260);
    }

    renderIcon = () => {
        const { position } = this.props;

        return (<Icon name='volume-2' size={16} 
            style={styles[position].icon}/>);
    }

    renderLength = () => {
        const { position } = this.props;
        let lengthText = this.props.length + '"';
        return (<Text style={styles[position].text}>{lengthText}</Text>);
    }

    renderBadge = () => {
        return (<View style={styles[position].badge}/>);
    }

    render() {
        let{position, unread, length} = this.props;
        let width = this.getRenderWidth(length);
        let rhs = position === 'right';

        const renderFirst = rhs? this.renderLength : this.renderIcon;
        const renderSecond = rhs? this.renderIcon : this.renderLength;
        const renderThird = (unread && !rhs)? this.renderBadge : () => null;

        return(
            <View style={[styles[position].container, {width}]}>
                {renderFirst()}
                {renderSecond()}
                {renderThird()}
            </View>
        );
    }
}

const styles = {
    left: StyleSheet.create({
        container: {
            marginHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
        },
        icon: {
            marginVertical: 5,
        },
        text: {
            color: 'white',
            fontSize: 16,
            marginVertical: 5,
            marginLeft: 5,
            lineHeight: 19,
        },
        badge: {
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: 'red',
            marginTop: 2,
            marginLeft: 2,
        },
    }),
    right: StyleSheet.create({
        container: {
            marginHorizontal: 10,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
        },
        icon: {
            marginVertical: 5,
            transform: [{scaleX: -1}],
        },
        text: {
            color: 'white',
            fontSize: 16,
            marginVertical: 5,
            marginRight: 2,
            lineHeight: 19,
        },
        badge: {
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: 'red',
            marginTop: 2,
            marginRight: 5,
        },
    }),
};