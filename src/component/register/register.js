import React, { Component } from 'react';
var style = require('./style');
import {
  View,
  Text,
  Alert,
  PixelRatio,
  BackHandler,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Card from '../shared/card';
import CardSection from '../shared/cardsection'
import Button from '../shared/button'

export default class Register extends Component{
  constructor(props){
    super(props);
    this.state = {
      fullname:'',
      email:'',
      password:'',
      confirmpassword:'',
      message:'',
      error:false
    }
    this.navigate = this.navigate.bind(this);
    this.register = this.register.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick() {
     Actions.login()
      return true;
  }
  navigate(){
    Actions.login()
  }
  register(){
    if(this.state.fullname && this.state.email  && this.state.password  && this.state.confirmpassword){
        if(this.state.password === this.state.confirmpassword){
              this.props.firebaseApp.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
              .then((response) => {
                this.props.firebaseApp.database().ref('users/' + response.uid).set({
                     fullname: this.state.fullname,
                     email: this.state.email,
                     password: this.state.password
                   }).then((response)=>{
                     Actions.login();
                   }).catch((error) =>{
                    this.setState({error: true});
                });
              }).catch((error) =>{
               this.setState({error: true});
               this.setState({message:'registration failed'})
           })
         }else{
           this.setState({error: true})
           this.setState({message:'password not match'})
        }
    }else{
      this.setState({error: true})
      this.setState({message:'Field vacent'})
    }
  }

  render(){
    return(
      <ScrollView>
      <View style={style.container}>
          <View>
              <Card>
               {this.state.error &&  <Text style={{color:'red'}}>{this.state.message}</Text>}
                <TextInput
                 onChangeText={(text) => this.setState({fullname:text})}
                 placeholder="Full Name"
                 value={this.state.fullname}
                 onChanges={this.ontextChange}
               />
                  <TextInput
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChangeText={(text) => this.setState({email:text})}
                  keyboardType="email-address"
                />
                  <TextInput
                  name="password"
                  secureTextEntry={true}
                  placeholder="Password"
                  value={this.state.password}
                  onChangeText={(text) => this.setState({password:text})}
                />
                  <TextInput
                  name="confirmpassword"
                  secureTextEntry={true}
                  value={this.state.confirmpassword}
                  placeholder="Confirm Password"
                  onChangeText={(text) => this.setState({confirmpassword:text})}
                />
                  <Button children="register"
                    onPress={this.register}
                  />
                  <Text style={{color:'#0a0b0b'}}>Already account?</Text>
                  <TouchableOpacity onPress={this.navigate}>
                  <Text style={{color:'#005c99'}}> login</Text>
                  </TouchableOpacity>
              </Card>
        </View>
      </View>
  </ScrollView>
    )
  }
}
