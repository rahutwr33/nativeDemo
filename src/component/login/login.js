import React, { Component } from 'react';
var style = require('./style');
import Card from '../shared/card';
import CardSection from '../shared/cardsection'
import Button from '../shared/button'
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  BackAndroid,
  AsyncStorage,
  BackHandler,
  ScrollView,
  PixelRatio,
  StyleSheet,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
      error:false,
      message:''
    }
    this.navigate = this.navigate.bind(this);
    this.login = this.login.bind(this);
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  handleBackButton = () => {
    BackHandler.exitApp()
  return true;
}

  navigate(){
    Actions.register()
  }
    login(){
    if(this.state.email  && this.state.password){
    this.props.firebaseApp.auth().signInWithEmailAndPassword(this.state.email,this.state.password).
    then((userData) =>{
        console.log(userData)
      var token = JSON.stringify(userData.uid);
     AsyncStorage.setItem('accessToken',token);
     Actions.home();
    }).catch((error) =>{
        console.log(error)
      this.setState({error: true});
      this.setState({message:'Login failed'})
  });
  }else{
    this.setState({error: true})
    this.setState({message:'Field vacent'})
  }
}
  render(){
    return(
      <ScrollView>
      <View style={style.container} >
          <View>
              <Card>
                 {this.state.error && <Text style={{color: "red"}}>{this.state.message}</Text>}
                  <TextInput
                    placeholder={"Email"}
                    value={this.state.email}
                    onChangeText={(text) => this.setState({email:text})}
                    keyboardType="email-address"
                  />
                  <TextInput
                   secureTextEntry={true}
                   placeholder={"Password"}
                   value={this.state.password}
                   onChangeText={(text) => this.setState({password:text})}
                  />
                  <Button children="login" onPress={this.login}/>
                  <Text style={{color:'#0a0b0b'}}>have not account?</Text>
                  <TouchableOpacity onPress={this.navigate}>
                  <Text style={{color:'#005c99'}}> Register</Text>
                  </TouchableOpacity>

              </Card>
        </View>
      </View>
</ScrollView>
    )
  }
}
