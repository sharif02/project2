import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className= "bg-info">
          <Container>
      <Navbar collapseOnSelect expand="lg" className="bg-body-info">
      
        <Navbar.Brand to="/home">Donation</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Link className='p-3 text-decoration-none fs-5 text-dark hover:p-4 background-color: hsla(195, 83%, 58%, 0.2)' to="/home">Home</Link>
            <Link className='p-3 text-decoration-none fs-5'  to="/about">ABout</Link>
            <Link className='p-3 text-decoration-none fs-5'  to='/contact'>Contact</Link>
          </Nav>
          <Nav>
            <Link to="/login"  className='p-3 text-decoration-none fs-5 text-dark hover:p-4 background-color: hsla(195, 83%, 58%, 0.2)'>Login</Link>
            
          </Nav>
        </Navbar.Collapse>
 
    </Navbar>
    </Container>

        </div>
    );
};

export default Navigation;