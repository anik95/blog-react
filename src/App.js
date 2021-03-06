import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Signup from '../src/auth/Signup'
import Signin from '../src/auth/Signin'


import './App.css'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
            <Switch>
              <Route path="/signup" component={Signup} />  
              <Route path="/signin" component={Signin} />
          </Switch>
        </Router>
      </div>      
    )
  }
}

export default App
