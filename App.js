
import React,{Component}from 'react';
import {AppRegistry} from 'react-native';

import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component{

 render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
   return(
       <Provider store={store}>
          <Router/>
      </Provider>
      
   );
 }
}

AppRegistry.registerComponent('App',()=>App);

