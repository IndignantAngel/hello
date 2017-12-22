import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity 
} from 'react-native';

export default class signupForm extends Component {

    constructor(props) {
        super(props);

        this._maxCount = 60;
        this._timer = null;
        this.state = {
            canGetSecurityCode: true,
            timeoutCount: 0,
            phone: '',
            security: '',
        };
    }

    componentWillUnmount() {
        this._timer && clearInterval(this._timer);
    }

    clearTimer() {
        this._timer && clearInterval(this._timer);
        this._timer = null;
    }

    getSecurityButtonText() {
        const { canGetSecurityCode, timeoutCount } = this.state;
        if(canGetSecurityCode) return 'Get';

        const laterString = 'Get(' + timeoutCount + 's) later';
        return laterString;
    }

    onPressGetSecurityCode = ()=> {
        this.setState({
            canGetSecurityCode: false, 
            timeoutCount: this._maxCount});

        this._timer = setInterval(()=> {
            let { timeoutCount } = this.state;
            if(timeoutCount <= 0) {
                this.clearTimer();
                this.setState({canGetSecurityCode: true, timeoutCount});
            }
            else{
                timeoutCount = timeoutCount - 1;
                this.setState({timeoutCount});
            }
        }, 1000);
    }

    onPhoneNumberChange = (text) => {
        let phone = '';
        const numbers = '0123456789';
        for(var loop = 0; loop < text.length; ++loop) {
            if(numbers.indexOf(text[loop]) > -1) {
                phone = phone + text[loop];
            }
        }
        this.setState({phone});
    }

    onPressSignup = () => {
        console.log(this.state);
    }

	render(){
        const { canGetSecurityCode } = this.state; 
		return(
			<View style={styles.container}>
                <TextInput style={styles.inputPhone} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Phone number"
                    placeholderTextColor = "#ffffff"
                    selectionColor="#fff"
                    keyboardType="phone-pad"
                    onSubmitEditing={()=> this.password.focus()}
                    onChangeText={this.onPhoneNumberChange}
                    value= {this.state.phone}
                />
                <View style={styles.containerSecurity}>
                    <TextInput style={styles.inputSecurity} 
                        underlineColorAndroid='rgba(0,0,0,0)' 
                        placeholder="Security code"
                        secureTextEntry={true}
                        placeholderTextColor = "#ffffff"
                        ref={(input) => this.password = input}
                        onChangeText={(password) => {this.setState({password})}}
                    />
                    <TouchableOpacity 
                        style={styles.btnGetsecurity} 
                        disabled={!canGetSecurityCode}
                        onPress={this.onPressGetSecurityCode}>
                        <Text style={canGetSecurityCode ? styles.buttonText : styles.textTimeout}>
                            {this.getSecurityButtonText()}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.onPressSignup}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>     
  		    </View>
		);
	}
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    containerSecurity: {
        flexDirection: 'row',
        width:300,
        marginVertical: 10,
        justifyContent:'center',
        alignItems: 'center'
    },
    inputPhone: {
        width:300,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
    },
    inputSecurity: {
        width: 185,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
    },
    btnGetsecurity: {
        flex: 1,
        backgroundColor:'#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        marginLeft: 10,
        paddingVertical: 15
    },
    button: {
        width:300,
        backgroundColor:'#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },
    textTimeout: {
        fontSize:16,
        color:'#969696',
        textAlign:'center',
    },
});