import React from 'react';
import {AudioRecorder, AudioUtils} from 'react-native-audio';

export default class AudioManager {
    constructor() {

        this.audioParam = {
            SampleRate: 22050,
            Channels: 1,
            AudioQuality: "Low",
            AudioEncoding: "aac",
            AudioEncodingBitRate: 32000
        };
    }

    init() {
        
    }
}