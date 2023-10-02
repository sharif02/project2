import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (
        <div className= "bg-success  p-1">
     <Navbar collapseOnSelect expand="lg" className="bg-success font-weight-bold text-center text-uppercase">
        <Navbar.Brand href="#home" className="ps-4">Blood Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto ">
            <Nav.Link href="#Home" className="p-2 ">Home</Nav.Link>
            <Nav.Link href="#About" className="p-2 ">About</Nav.Link>
            <Nav.Link href="#Doner" className="p-2 ">Doner</Nav.Link>
          </Nav>
          <Nav>
          <button type="button" class="btn btn-outline-warning">LogIn</button>
            
          </Nav>
        </Navbar.Collapse>
    </Navbar>

        </div>
    );
};

export default Navigation;