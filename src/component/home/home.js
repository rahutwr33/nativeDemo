import React, { Component } from 'react';
var styles = require('./style');
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Alert,
  TouchableHighlight
} from 'react-native';
import { Container, Content} from 'native-base';
import { Actions } from 'react-native-router-flux';
import AppHeader from '../shared/header'
import AppFooter from '../shared/footer'

export default class Home extends Component{
  constructor(props){
    super(props)
    this.gotoprofile = this.gotoprofile.bind(this)
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
                           <AppHeader headerText="Home" />
                      </View>
                      <Content />
                      <View style={styles.footerstyle}>
                          <AppFooter gotoprofile={this.gotoprofile} gotochat={this.gotochat} gotohome={this.gotohome}/>
                      </View>
                 </Container>
     )
  }
}
