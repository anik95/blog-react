import React, { Component } from 'react'
import { Grid, Row, Col, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

class CreatePost extends Component {
  constructor() {
    super() 
    this.state = {
      title: '',
      body: ''
    }
  }

  renderCreatePostForm() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6} mdOffset={3}>
              <Form horizontal>
                
              </Form>
            </Col> 
          </Row>
        </Grid>
      </div>
    )
  }

  render() {
    return this.renderCreatePostForm()
  }
}

export default CreatePost