import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity 
} from 'react-native';
import PropTypes from 'prop-types';

export default class signinForm extends Component {

    static propTypes = {
        onSignin: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: '',
        };
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

    onPressSignin = () => {
        const {onSignin} = this.props;
        const { phone, password } = this.state;
        onSignin(phone, password);
    }

	render(){
		return(
			<View style={styles.container}>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Phone number"
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}
                onChangeText={this.onPhoneNumberChange}
                value= {this.state.phone}
                keyboardType="phone-pad"
            />
            <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#ffffff"
                ref={(input) => this.password = input}
                onChangeText={(password) => {this.setState({password})}}
            />  
            <TouchableOpacity style={styles.button} onPress={this.onPressSignin}>
                <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>     
  		</View>
		)
	}
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'center',
        alignItems: 'center'
    },

    inputBox: {
        width:300,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
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
    }
});