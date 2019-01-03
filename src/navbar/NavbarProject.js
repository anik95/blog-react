import React, { Component } from 'react'
import axios from 'axios'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class NavbarProject extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  handleSelect = (event) => {
    console.log('selected')
  }

  render() {
    return (
      <Navbar bsStyle="default">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="brand">Blog</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Home
            </NavItem>
            <NavItem eventKey={2} href="#" onSelect={this.handleSelect}>
              Add Post
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
export default NavbarProject