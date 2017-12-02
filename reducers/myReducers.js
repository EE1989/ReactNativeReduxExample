
import { Actions } from 'react-native-router-flux';

const INITIAL_STATE = {
  textStore: 'sample reducer data',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {  
    case "sample":
      {
        return { ...state, textStore: action.payload };
      }
      default :
         return null;
  }

};

