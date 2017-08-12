import React, { Component } from 'react';
import {StyleSheet,Text,View,Image} from 'react-native';
import Form from './form.js';

export default class LoginComponent extends Component {
  constructor(props) {
  super(props);
  this.state = {
     bodyText: 'App',
   };
 }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.appLogo}>
      <Image style={styles.logo} source={require('./beard.png')}/>
      <Text style={styles.subtitle}>{this.state.bodyText}</Text>
      </View>
      <View className={styles.formContainer}>
        <Form/>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1c40f',
  },
  appLogo:{
    flexGrow:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
  height:180,
  width:180,
  },
  subtitle: {
  color:'#000000',
  fontSize: 14,
  fontWeight: 'bold',
},
formContainer:{
  color:'red',
},

});
