import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Signup from '../src/auth/Signup'
import Signin from '../src/auth/Signin'
import Dashboard from '../src/pages/Dashboard'


import './App.css'

class App extends Component {

  render() {
    return (
      <div>
        <Dashboard />
        <Router>
            <Switch>
              <Route path="/signup" component={Signup} />  
              <Route path="/signin" component={Signin} />
              <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>      
    )
  }
}

export default App
