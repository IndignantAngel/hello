import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VoiceMessage from './voiceMessage';

export default class CustomView extends Component {
    static propTypes = {
        currentMessage: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
        let{currentMessage, user} = this.props;
        if(currentMessage.voice) {
            let rhs = currentMessage.user._id === user._id;
            let unread = currentMessage.voice.unread && !rhs;
            return (<VoiceMessage rhs={rhs} unread={unread} 
                                  length={currentMessage.voice.length}/>);
        }
        return null;
    }
}