import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  View,
  Image,
  AsyncStorage,
  Dimensions,
  windowSize,
  Alert,
  PixelRatio,
  StyleSheet,
  TextInput,
} from 'react-native';
import Login from '../login/login'
const splash_img = require('../images/splash.png');
const window = Dimensions.get('window');
export default class Splash extends Component{
  componentWillMount () {
    setTimeout(()=>{
			AsyncStorage.getItem("accessToken").then((token) => {
			    if(token) {
			    	if(token.length > 0){
			    		Actions.home();
			    	}else{
			    		Actions.login();
			    	}
				}else{
					Actions.login();
				}
			}).done();
		},2000);
 }
  render(){
    return(

          <Image  source={splash_img}  style={styles.container}>
          </Image>
    
    )
  }
}
const styles = StyleSheet.create({
  container:{
     flex: 1,
     width: null,
     height: null,
     resizeMode: 'cover'
  }
});
