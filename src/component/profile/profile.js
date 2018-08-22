import React, { Component } from 'react';
var styles = require('./style');
const Dimensions = require('Dimensions');
const window = Dimensions.get('window');
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    ListView,
    Alert,
    ScrollView,
    TouchableHighlight, AsyncStorage
} from 'react-native';
import { Container, 
  Header,
  Left, 
   Card, 
   CardItem, 
   Icon, 
   Body,
   Switch,
   Right,
   ListItem ,
   List
  } from 'native-base';

import { Actions } from 'react-native-router-flux';
import AppHeader from '../shared/header'
import AppFooter from '../shared/footer'

export default class Profile extends Component{
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.onPressevent = this.onPressevent.bind(this)
    this.state = {
      dataSource: ds.cloneWithRows(['Full Name', 'Phone no' , 'Status' , 'Logout']),
    };
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

    onPressevent= async(actionData)=>{
      if(actionData=='Logout'){
          AsyncStorage.clear();
          Actions.login();
      }

    }
  
  render(){
    return(


        <View style={styles.container}>
        <AppHeader headerText="Setting"/>
              <View style={styles.view1}>
                   <View>
                   <Image
                    style={styles.imagestyle}
                    source={{uri: 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-128.png'}}
                  />
                   </View>
                   <View style={styles.profiledata}>
                     <Text style={styles.textstyle}>Full Name</Text>
                     <View style={{flexDirection:'column'}}>
                        <Text  style={styles.textstyle}>Status</Text>
                      </View>
                  </View>
              </View>

              <View  style={styles.view2}>
              <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                    <TouchableHighlight underlayColor="transparent"  onPress={this.onPressevent.bind(this,rowData)}>
                    <View style={styles.listStyle}>
                      <Text style={styles.listtextstyle}>{rowData}</Text>
                     { rowData == 'Status'&&<Icon  style={styles.iconstyle} name="ios-arrow-dropright"/>}
                     { rowData == 'Logout'&&<Icon style={styles.iconstyle} name="ios-log-out"/>}
                    </View>
                    </TouchableHighlight>
                  }
                  />
              </View>
   <AppFooter gotoprofile={this.gotoprofile} gotohome={this.gotohome} gotochat={this.gotochat}/>
       </View>
             
     )
  }
}
