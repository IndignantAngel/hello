import React from 'react';
import {Platform, PermissionsAndroid} from 'react-native';
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

        /*
         * disabled, ready, prepare, record, stopping
         */
        this.audio = {
            state: 'disabled',
            length: 0,
            onFinished: null,
            onError: null,
        };

        /*
         * ready, play, pause, stop
         */
        this.sound = {
            state: 'ready',
            module: null,
        };
    }

    init(onRecordFinished, onRecordError) {
        
        if(onRecordFinished)
            this.audio.onFinished = onRecordFinished;
        if(onRecordError)
            this.audio.onError = onRecordError;

        this.checkPermission().then((hasPermission) => {
            if(!hasPermission) return;

            AudioRecorder.onProgress = (data) => {
                this.audio.length = Math.floor(data.currentTime);
            };
            this.audio.state = 'ready';
        });
    }

    uninit() {
        this.stopPlay();
    }

    prepareRecordingPath(path) {
        AudioRecorder.prepareRecordingAtPath(path, this.audioParam);
    }

    async startRecording(path) {

        const audioPath = AudioUtils.DocumentDirectoryPath + '/' + path;
        console.log(audioPath);

        switch(this.audio.state) {
        case 'disabled':
            console.warn('Can\'t record, no permission granted!');
            return;
        case 'ready':
            break;
        default:
            console.warn('Already recording!');
            return;
        }
  
        this.audio.state = 'prepare';
        this.prepareRecordingPath(audioPath);
  
        try {
          await AudioRecorder.startRecording();
          this.audio.state = 'record';
        } catch (error) {
          console.error(error);
        }
    }

    async stopRecording(cancel) {
        if(this.audio.state !== 'record')
            return;

        this.audio.state = 'stopping';
        try {
            const path = await AudioRecorder.stopRecording();
            this.audio.state = 'ready';
            
            if(!cancel && this.audio.onFinished)
            {
                const length = this.audio.length;  
                this.audio.onFinished({path, length});
            }
                
        }
        catch(error) {
            console.error(error);
            if(this.audio.onError)
                this.audio.onError(error);
        }
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

    onPlayStopped = () => {
        this.sound.state = 'ready';
    }

    onPlayFinished = (success) => {
        if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
        }
        this.onPlayStopped();
    }

    startPlay(path) {
        this.stopPlay();

        setTimeout(()=>{
            var sound = new Sound(path, '', (error) => {
                if (error) {
                  console.log('failed to load the sound', error);
                }
            });
            
            this.sound.state = 'play';
            this.sound.module = sound;
            setTimeout(()=>{
                this.sound.module.play(this.onPlayFinished);
            }, 100)
        }, 100)
    }

    resumePlay() {
        if(this.sound.state === 'pause')
            this.sound.module.play(this.onPlayFinished);
    }
        
    stopPlay() {
        if(this.sound.state !== 'ready')
            this.sound.module.stop(this.onPlayStopped);
    }
        
    pausePlay() {
        if(this.sound.state == 'play') {
            this.sound.module.pause();
        }
    }
}