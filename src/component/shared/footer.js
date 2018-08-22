import React from 'react';
import { Text, View, Image,TouchableHighlight} from 'react-native';
const tooglebutton = require('../images/hamburger.png')
import {Footer, FooterTab, Button, Icon } from 'native-base';

const AppFooter = (props) => {
  const { footerstyle ,iconStyle} = styles;

  return (
     <TouchableHighlight>
         <Footer >
           <FooterTab style={footerstyle}>
           <Button vertical onPress={props.gotohome}>
               <Icon name="ios-radio-button-on" style={iconStyle}/>
               <Text>Status</Text>
             </Button>
             <Button vertical onPress={props.gotochat}>
               <Icon name="ios-chatbubbles" style={iconStyle}/>
               <Text>Chat</Text>
             </Button>
             <Button vertical onPress={props.gotoprofile}>
               <Icon name="settings"  style={iconStyle}/>
               <Text>Profile</Text>
             </Button>
           </FooterTab>
         </Footer>
        </TouchableHighlight>
  );
};

const styles = {
  footerstyle: {
    backgroundColor: '#dddddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  iconStyle:{
    color:"#000000",
    fontSize:30
  }
};

export default AppFooter;
