'use strict';
var React = require('react-native');

var {
  StyleSheet,
  Dimensions
 } = React;
 
module.exports = StyleSheet.create({
container: {
 flex:1
},
view1:{
flexDirection: 'row',
flex:1,
backgroundColor:'#cccccc',
borderBottomColor: '#000000',
maxHeight: 110,
},
view2:{
  flex:1,
  backgroundColor:'#cccccc',
  maxHeight: null,
  marginLeft:0
},
imagestyle:{
   width: 100,
   height: 100,
   margin:5,
   marginLeft:15
},
textstyle:{
fontSize: 18,
fontWeight: 'bold',
},
profiledata:{
  margin:20,
  marginLeft:15
},
listStyle:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop:10,
  marginLeft:5,
  backgroundColor:'#eeeeee',
  borderBottomColor: '#000000',
},
listtextstyle:{
  fontSize: 20,
  margin:10,
  fontFamily: 'sans-serif-medium',
},
iconstyle:{
color:'black',
marginRight:10,
margin:5,
marginTop:13,
fontSize:23
}
});
