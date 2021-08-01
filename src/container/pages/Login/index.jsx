import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    usernameKey: 'admin',
    passwordKey: '123'
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    const {username, password, usernameKey, passwordKey} = this.state
    if (username === usernameKey && password === passwordKey) {
      this.props.history.push('/')
    } else {
      this.props.history.go(0)
    }
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control name="username" type="text" placeholder="Enter username" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleChange} />
          </Form.Group>

          <Button variant="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
