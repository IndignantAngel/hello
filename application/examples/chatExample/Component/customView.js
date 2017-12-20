import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VoiceMessage from './voiceMessage';

export default class CustomView extends Component {
    static propTypes = {
        currentMessage: PropTypes.object.isRequired,
        user: PropTypes.object.isRequired,
        position: PropTypes.oneOf(['left', 'right']).isRequired,
    };

    constructor(props) {
        super(props);
    }

    render() {
        let{currentMessage, user, position} = this.props;
        if(currentMessage.voice) {
            return (<VoiceMessage 
                        position={position} 
                        unread={currentMessage.voice.unread} 
                        length={currentMessage.voice.length}/>);
        }
        return null;
    }
}