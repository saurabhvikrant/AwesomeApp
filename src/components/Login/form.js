import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	ActivityIndicator,
	TouchableOpacity,
	Image,
	Text,
	TextInput,
} from 'react-native';

export default class Form extends Component {
	constructor(props) {
    super(props);
    this.state = {
			showPass: true,
			press: false,
		};
		this.showPass = this.showPass.bind(this);
	}

	showPass() {
  this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
  }

	render() {
		return (
			<KeyboardAvoidingView
				behavior='padding'
				style={styles.container}>
				<TextInput
					style={styles.username}
					placeholder='Username'
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false} />
				<TextInput
					style={styles.pass}
					secureTextEntry={this.state.showPass}
					placeholder='Password'
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false} />
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.btnEye}
						onPress={this.showPass}>
						<Text style={styles.buttonText}>Login</Text>
					</TouchableOpacity>
			</KeyboardAvoidingView>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		marginTop:20,
		marginBottom:100,
	},
	username:{
		width:240,
		marginLeft:40,
		justifyContent: 'center',
		alignItems: 'center',

	},
	pass:{
		width:240,
		marginLeft:40,
		justifyContent: 'center',
		alignItems: 'center',

	},
	btnEye:{
		marginTop:20,
		width:230,
		marginLeft:45,
		backgroundColor:'#d35400',
		paddingVertical:10,
	},
	buttonText:{
		color:"#000000",
		textAlign:'center',
	}
});
