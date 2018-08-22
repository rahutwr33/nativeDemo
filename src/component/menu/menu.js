import React, { Component } from 'react';
var style = require('./style');
import {
  View,
  Text,
  TextInput,
  ListView,
  Alert,
  TouchableHighlight,
  AsyncStorage,
  Image
} from 'react-native';
import {Content} from 'native-base'
import { Actions } from 'react-native-router-flux';

export default class Menu extends Component {
  constructor() {
    super();
    this.home = this.home.bind(this)
    this._logout = this._logout.bind(this)
    this.profile = this.profile.bind(this)
  }
  home = ()=>{
    Actions.home();
  }

  profile = ()=>{
    Actions.profile();
  }

  _logout= async()=>{
      AsyncStorage.clear();
        Actions.login();
   }
  render () {
    return (
      <Content>
        <View style={style.container}>
             <View style={style.view1}>
                    <Image style={style.profileimage} source={{uri: 'https://pixabay.com/get/eb36b8072ffc033ed1534705fb0938c9bd22ffd41cb0174194f3c870a2/profile-2398782_1920.png'}}/>
                    <Text style={style.inputname}>Test User</Text>

             </View>
             <View style={style.view2}>
                <TouchableHighlight underlayColor="transparent" onPress={this.home}>
                  <View><Text style={style.listTextstyle}>Home</Text></View>
               </TouchableHighlight>
               <TouchableHighlight underlayColor="transparent" onPress={this.profile}>
                 <View><Text style={style.listTextstyle}>Profile</Text></View>
              </TouchableHighlight>
                 <TouchableHighlight underlayColor="transparent"  onPress={this._logout}>
                <View><Text style={style.listTextstyle}>Logout</Text></View>
                 </TouchableHighlight>
             </View>
        </View>
      </Content>
    )
  }
}
