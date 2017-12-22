import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

export default class FilterTextInput extends Component {
    static propTypes = {

    }

    constructor(props) {
        super(props);



        this.state = {

        };
    }

    getDefaultState() {
        let textValue = '';
        if(this.props.value) {
            textValue = this.props.value;
        } else if(this.props.defaultValue) {
            textValue = this.props.defaultValue;
        }
    }
}