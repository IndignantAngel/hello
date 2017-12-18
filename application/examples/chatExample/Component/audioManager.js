import React from 'react';
import Sound from 'react-native-sound';
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

        this.status = 'disabled';
        this.currentTime = 0;
    }

    init() {
        this.checkPermission().then((hasPermission) => {
            if(!hasPermission) return;

            AudioRecorder.onProgress = (data) => {
                this.currentTime = Math.floor(data.currentTime);
            };

            AudioRecorder.onFinished = (data) => {
                // Android callback comes in the form of a promise instead.
                if (Platform.OS === 'ios') {
                  this._finishRecording(data.status === "OK", data.audioFileURL);
                }
            };

            this.status = 'enabled';
        });
    }

    prepare(path) {
        if(this.status === 'disabled')
            return false;

        if()
    }

    checkPermission() {
        if (Platform.OS !== 'android') {
            return Promise.resolve(true);
        }
  
        const rationale = {
            'title': 'Microphone Permission',
            'message': 'AudioExample needs access to your microphone so you can record audio.'
        };
  
        return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, rationale)
            .then((result) => {
                console.log('Permission result:', result);
                return (result === true || result === PermissionsAndroid.RESULTS.GRANTED);
        });
    }

    finishRecording(didSucceed, filePath) {
        this.status = 'stopRecord';
        console.log(`Finished recording of duration ${this.state.currentTime} seconds at path: ${filePath}`);
    }

    async record() {
        if (this.state.recording) {
          console.warn('Already recording!');
          return;
        }
  
        if (!this.state.hasPermission) {
          console.warn('Can\'t record, no permission granted!');
          return;
        }
  
        if(this.state.stoppedRecording){
          this.prepareRecordingPath(this.state.audioPath);
        }
  
        this.setState({recording: true});
  
        try {
          const filePath = await AudioRecorder.startRecording();
        } catch (error) {
          console.error(error);
        }
    }
}