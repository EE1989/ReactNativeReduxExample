
import { Actions } from 'react-native-router-flux';
import React from 'react';


export const sampleAction = (entryValue) => {
   return (dispatch) => {
         sampleActionResult(dispatch,entryValue);
   };
};




const sampleActionResult = (dispatch, entryValue) => {
 
 dispatch({
    type:"sample",
    payload:entryValue
 });
  Actions.otherPage();
};
