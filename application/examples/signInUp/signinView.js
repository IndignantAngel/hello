import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar ,
    TouchableOpacity
} from 'react-native';

import Logo from './components/Logo';
import SigninForm from './components/signinForm';

export default class SigninView extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
    }

    signup = ()=> {
        this.props.navigation.navigate('signup');
    }

    onPressSignin = (usr, pwd) => {
        console.log({usr, pwd});
        this.props.navigation.navigate('examples');
    }

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<SigninForm type="Login" onSignin = {this.onPressSignin}/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
				</View>
            </View>
        );
	}
}
const styles = StyleSheet.create({
    container : {
        backgroundColor:'#455a64',
        flex: 1,
        alignItems:'center',
        justifyContent :'center'
    },
    signupTextCont : {
  	    flexGrow: 1,
        alignItems:'flex-end',
        justifyContent :'center',
        paddingVertical:16,
        flexDirection:'row'
    },
    signupText: {
  	    color:'rgba(255,255,255,0.6)',
  	    fontSize:16
    },
        signupButton: {
  	    color:'#ffffff',
  	    fontSize:16,
  	    fontWeight:'500'
    }
});