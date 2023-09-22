import React from 'react';
import {Navbar, Nav, Container, Image, Dropdown} from 'react-bootstrap'
import {LinkContainer} from "react-router-bootstrap"
import { Link } from 'react-router-dom';
import Logo from '../Images/logo1.jpg'

const NavBar = () =>  {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
      <Container >
        <Navbar.Brand>
            <Image
                src={Logo}  
                alt='logo'
                style={{height:"70px"}}
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <LinkContainer to="/features">
            <Nav.Link>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Features
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item ><Link to={'/geolocation'}>Geolocation</Link></Dropdown.Item>
        <Dropdown.Item ><Link to={'/imageupload'}>Image Upload</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
            <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;