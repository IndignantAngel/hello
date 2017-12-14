import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

export default class Todo extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    };

    render() {
        const { onClick, completed, text } = this.props;

        return (
            <ListItem
                onPress={ onClick }
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
                title={text}
            />
        );
    }
}