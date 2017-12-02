import React, { Component } from 'react'
import { TouchableOpacity, Text, View ,TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';


class  About  extends Component {

  render(){

   const {viewStyle,inputStyle,textStyle,buttonStyle}=styles;

   return (
     <View style={viewStyle}>
         <Text style={inputStyle}>{this.props.stateValue.textStore}</Text>
          <TouchableOpacity  style={buttonStyle} onPress = {()=>{Actions.firstPage()}}>
             <Text style={textStyle}>Goto First Page</Text>
          </TouchableOpacity>
       </View>
   );

  }
}


const styles = {
   viewStyle:{
       backgroundColor:'black',
       flex:1,
       alignItems:'center',
       justifyContent:'center'
   },
   inputStyle:{
      fontSize: 22,
      fontFamily:'monospace',
      color:'cyan'
   },
   buttonStyle:{
     width:150,
     margin:120,
   },
   textStyle:{
     fontFamily:'monospace',
     fontSize:28,
       color:'cyan'
   }

 }



const mapStateToProps = state => (
  { stateValue: state.myreducer }
);


export default connect(mapStateToProps)(About)
