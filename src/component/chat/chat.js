import React, { Component } from 'react';
import {
    View,
    Image,
    AsyncStorage,
    Dimensions,
    windowSize,
    Alert,
    PixelRatio,
    StyleSheet,
    Text,
    TextInput,
  } from 'react-native';
  var styles = require('./style');

  import { Container, Content} from 'native-base';
  import { Actions } from 'react-native-router-flux';
  import AppHeader from '../shared/header'
  import AppFooter from '../shared/footer'
  
  export default class Chat extends Component{
      constructor(){
        super()
      }
      gotoprofile(){
        Actions.profile()
      }
      gotohome(){
        Actions.home() 
      }
    
      gotochat(){
        Actions.chat() 
      }
      render(){
          return(
            <Container>
                <View style={styles.headerstyle}>
                    <AppHeader headerText="Chat" />
                </View>
                <Content />
                <View style={styles.footerstyle}>
                    <AppFooter gotoprofile={this.gotoprofile} gotochat={this.gotochat} gotohome={this.gotohome}/>
                </View>
            </Container>
          )
      }
  }