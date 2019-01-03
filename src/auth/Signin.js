import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

class Signin extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			accessToken: ''
		}
	}
  
	handleChange = (event) => {
		this.setState({ [event.target.id]: event.target.value })
	}
	
	handleSubmit = (event) => {
		event.preventDefault()
		axios({
			url: 'http://localhost:8000/api/auth/login',
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
      },
      data: {
        email: this.state.email,
        password: this.state.password
      }
		}).then((response) => {
				this.setState({ accessToken: response.data.access_token })
        localStorage.setItem('Token', response.data.access_token)
      }).catch(() => console.log("something went wrong"))
	} 
	
	signUpSubmit = () => {
		this.props.history.push('/signup')
	}

	renderLoginForm() {
    const wellStyles = { maxWidth: 600, margin: '10px auto 10px' }
		return (
			<div>
				<Grid>
					<Row className="show-grid">
						<Col xs={12} md={4} mdOffset={4}>
							<div className="well" style={{margin: '100px 0 0 0'}}>
								<h4>Sign In</h4>
								<FormGroup controlId="formBasicText" />
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
									<div style={wellStyles}>    
										<Button bsStyle="success" bsSize="large" block onClick={this.handleSubmit}>
											Sign In
										</Button>
									</div>
									<div style={wellStyles}> 
										<h6>Not yet registered? Sign up now</h6>   
										<Button bsStyle="primary" bsSize="large" block onClick={this.signUpSubmit}>
											Sign Up
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
		return this.renderLoginForm()
	}
}
export default Signin