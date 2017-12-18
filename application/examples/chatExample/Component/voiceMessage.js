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
        rhs: PropTypes.bool.isRequired,
        unread: PropTypes.bool.isRequired,
        length: PropTypes.number.isRequired,
    };

    constructor(props) {
        super(props);
    }

    rightIcon() {
        return this.props.rhs? styles.iconRight:null;
    }

    renderIcon() {
        return (<Icon name='volume-2' size={20} 
            style={[styles.icon, this.rightIcon()]}/>);
    }

    renderLength() {
        let lengthText = this.props.length + '"';
        return (<Text style={styles.length}>{lengthText}</Text>
        );
    }

    renderInform() {
        return (<View style={styles.inform}/>);
    }

    render() {
        let{rhs, unread} = this.props;

        return(
            <View style={styles.container}>
                {rhs? this.renderLength() : this.renderIcon()}
                {rhs? this.renderIcon() : this.renderLength()}
                {(unread && !rhs)? null : this.renderInform()}
            </View>
        );
    }
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    icon: {

    },
    iconRight: {
        transform: [{scaleX: -1}],
    },
    length: {
        color: 'white',
        fontSize: 16,
    },
    inform: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'red',
    },
});