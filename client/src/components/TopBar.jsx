import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {GiSmart} from "react-icons/gi"
const TopBar = () => {
  return (
    <div style={{padding:'2rem'}}>
      <Navbar bg="dark"  varient="dark" expand="lg" style={{position:'fixed',top:0,left:0,right:0, zIndex:10}}>
        <Container fluid >
          <h6 className='text-light'>
            <GiSmart className='text-warning'/> &nbsp;
            Be Smarter, Recycle Your e-Waste
          </h6>
             <Nav className='ms-auto'>
                <LinkContainer to="/" activeClassName=''>
                    <Nav.Link className='text-light'>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about" activeClassName=''>
                    <Nav.Link className='text-light'>Benefits</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact" activeClassName=''>
                    <Nav.Link className='text-light'>Initiatives</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/policy" activeClassName=''>
                    <Nav.Link className='text-light'>Terms and Policy</Nav.Link>
                </LinkContainer>
             </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default TopBar
