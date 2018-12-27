import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Row, FormGroup, ControlLabel, FormControl, Col, Button} from 'react-bootstrap'

import './signup.css'

class Signup extends Component {
  constructor() {
      super()
      this.state = {
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
      }
  }

  handleSubmit = () => {
      axios({
          method: 'post',
          url: 'http://localhost:8000/api/auth/signup',
          headers: {
              'Content-Type': 'application/json'
          },
          data: {
              name: this.state.name,
              email: this.state.email,
              password: this.state.password,
              password_confirmation: this.state.confirmPassword
          }
      }).then(res => {
          this.props.history.push('/signin')
      }).catch(error => "something went wrong")
  } 

  handleChange = (event) => {
      this.setState({ [event.target.id] : event.target.value })
  }

  handleSignInSubmit = () => {
      this.props.history.push('/signin')
  }

renderSignUpForm() {
    const wellStyles = { maxWidth: 600, margin: '10px auto 10px' }
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} mdOffset={4} md={4}>
              <div className="well" style={{margin: '100px 0 0 0'}}>
                <h4>SignUp</h4>
                <FormGroup controlId="formBasicText" />
                <ControlLabel>Name: </ControlLabel>
                <FormControl 
                    id="name"
                    type="text" 
                    value={this.state.name} 
                    onChange={this.handleChange} 
                />
                <ControlLabel>Email: </ControlLabel>
                <FormControl 
                    id="email"
                    type="email" 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                />                     
                <ControlLabel>Password: </ControlLabel>
                <FormControl 
                    id="password"
                    type="password"
                    onChange={this.handleChange}
                />
                <ControlLabel>Confirm Password: </ControlLabel>
                <FormControl
                    id="confirmPassword"
                    type="password"
                    onChange={this.handleChange}
                />
                <div style={wellStyles}>    
                    <Button bsStyle="success" bsSize="large" block onClick={this.handleSubmit}>
                        Sign Up
                    </Button>
                </div>
                <div style={wellStyles}>  
                    <h6>Already have an account!!</h6>  
                    <Button bsStyle="primary" bsSize="large" block onClick={this.handleSignInSubmit}>
                        Sign In             
                    </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
        </div>
    )
  }                                                                       

  render() {
      return this.renderSignUpForm()
  }
}

export default Signup