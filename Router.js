import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import firstPage from './pages/firstPage.js'
import otherPage from './pages/otherPage.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "firstPage" component = {firstPage} title = "firstPage" initial = {true}  hideNavBar={true} />
         <Scene key = "otherPage" component = {otherPage} title = "otherPage"  hideNavBar={true} />
      </Scene>
   </Router>
)

export default Routes

