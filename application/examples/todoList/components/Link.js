import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';

export default class Link extends Component {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func.isRequired
    }

    render() {
        const { active, children, onClick } = this.props;

        return (
            <Button
                onPress = {onClick}
                title={ children }
            />
        );
    }
}