import React,{useState} from 'react'
import {Container, Form, Button, Row, Col} from 'react-bootstrap'

const SignUp = () => {
  return (
    <>
     <Container className='mx-auto '>
     <Row className="h-100 align-items-center justify-content-center">
        <Col xs={12} sm={8} md={5}>
     <Form>
       <h1>Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary">
        Login
      </Button>
    </Form></Col></Row>
     </Container>
    </>
  )
}

export default SignUp
