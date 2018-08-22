'use strict';
var Reactnative = require('react-native');
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');
var {
  StyleSheet,
} = Reactnative;
module.exports = StyleSheet.create({
container: {
flex:1,
justifyContent: 'flex-start',
flexDirection: 'column'
},
view1:{
  height: 200,
  backgroundColor:'#3F7689',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
},
view2:{
  height:height*0.71,
  backgroundColor:'white',
},
profileimage:{
    marginTop: 15,
    width:150,
    height:150,
    borderRadius: 150/2,
},
inputname:{
  fontFamily: 'lucida grande',
  paddingTop:5,
  fontSize:18,


},
listTextstyle:{
  padding:10,
  fontSize: 20,
  fontFamily: 'lucida grande',
},
});
