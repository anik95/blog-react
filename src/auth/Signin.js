import React, { Component } from 'react'
import axios from 'axios'

class Signin extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: ''
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
        localStorage.setItem('Token', response.data.access_token)
      }).catch(() => console.log("something went wrong"))
	} 

	renderLoginForm() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Email:
					<input
						id="email"
						type="email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
				</label>

				<label>Password:
					<input
						id="password"
						value={this.state.password}
						type="password"
						onChange={this.handleChange}
					/>
				</label>

				<input
					type="submit"
					value="Submit"
				/>
			</form>
		)
	}

	render() {
		return this.renderLoginForm()
	}
}
export default Signin