import React, { Component } from 'react'
import { Grid, Row, FormGroup, ControlLabel, FormControl, Col} from 'react-bootstrap'

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
        
    } 

    handleChange = (event) => {
        this.setState({ [event.target.id] : event.target.value })
    }

    renderSignUpForm() {
        return (
            <div>
            <Row className="show-grid">
                <h5>Sign Up </h5>
            </Row>
            <form onSubmit={this.handleSubmit}>
                <Grid>
                <Row className="show-grid">
                    <Col xs={6} xsOffset={3}>
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
                            <input 
                                type="submit"
                                value="Submit"
                            />
                    </Col>
                    </Row>
                    </Grid>
                </form>
            </div>
        )
    }

    render() {
        return this.renderSignUpForm()
    }
}

export default Signup