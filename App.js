import React, { Component } from 'react';
import { Router, Scene ,Actions} from 'react-native-router-flux';
import * as firebase from 'firebase';
import Splash from './src/component/splash/splash'
import Login from './src/component/login/login'
import Register from './src/component/register/register';
import Home from './src/component/home/home'
import Profile from './src/component/profile/profile'
import Chat from './src/component/chat/chat'

import {StyleSheet,
  Image,
  View,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
const firebaseConfig = {
    apiKey: "AIzaSyD3ewXzQcPLZ7DN254L3UnyP9GKShOmXO8",
    authDomain: "nativedemo-a430e.firebaseapp.com",
    databaseURL: "https://nativedemo-a430e.firebaseio.com",
    projectId: "nativedemo-a430e",
    storageBucket: "nativedemo-a430e.appspot.com",
    messagingSenderId: "383237498161"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default class App extends Component<{}> {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Router
        navigationBarStyle={styles.navBar}
        titleStyle={styles.navBarTitle}
        backButtonTextStyle={styles.backbutton}
        >
          <Scene key="root">
            <Scene
              hideNavBar={true}
              key="splash"
              component={Splash}
              initial
            />
            <Scene
              hideNavBar={true}
              key="login"
              firebaseApp={firebaseApp}
              component={Login}
              />
              <Scene
                hideNavBar={true}
                key="register"
                component={Register}
                firebaseApp={firebaseApp}
                />
              <Scene
                hideNavBar={true}
                key="home"
                component={Home}
                />
                <Scene
                  hideNavBar={true}
                  title="Profile"
                  key="profile"
                  component={Profile}
                  />
                 <Scene
                  hideNavBar={true}
                  key="chat"
                  component={Chat}
                  
                  />
          </Scene>
    </Router>
    );
  }
}
const styles = StyleSheet.create({
navBar: {
  backgroundColor:'#dddddd'
},
navBarTitle:{
  color:'#000000',
  marginHorizontal:80
}
});
