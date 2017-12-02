import React, { Component } from 'react'
import { TouchableOpacity, Text, View ,TextInput} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {sampleAction} from '../actions/myActions';
import { connect } from 'react-redux';

const TEXT_VALUE = "Sample Text";
const TEXT_PLACEHOLDER="Type something"

class  Home extends Component {

constructor(props){
    super(props);
    this.state={
      entry:TEXT_VALUE,
      placeholder:TEXT_PLACEHOLDER
    }
}


  render() {

     const {viewStyle,inputStyle,textStyle,buttonStyle}=styles;
     
     return (
            <View style={viewStyle}>
              <TextInput style={inputStyle} placeholder={this.state.placeholder} onChangeText={(value)=>{this.setState({entry:value})}}/>
              <TouchableOpacity  style={buttonStyle} onPress = {()=>{this.props.sampleAction(this.state.entry)}}>
                   <Text style={textStyle}>Goto Other Page</Text>
              </TouchableOpacity>
            </View>
         );
     }
}


const styles = {
   viewStyle:{
       backgroundColor:'cyan',
       flex:1,
   },
   inputStyle:{
      marginTop:20,
      height:60,
      fontSize: 22,
      fontFamily:'monospace',
   },
   buttonStyle:{
     width:150,
     margin:120,
   },
   textStyle:{
     fontFamily:'monospace',
     fontSize:28
   }
 }

function bindAction(dispatch) {
  return {
    sampleAction: (entryValue) => dispatch(sampleAction(entryValue)),
  };
}

const mapStateToProps = state => (
  { stateValue: state.myreducer }
);

export default connect(mapStateToProps,bindAction)(Home)