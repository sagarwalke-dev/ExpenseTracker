import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import "./css/header.css";
import logo from './images/icon.png'
const Header=()=>{
 
    return(
        <>
        <div>
                <div className="row">
                    <div className="col-md-12 bg">
                            <Navbar className="Navbar "  variant="dark" expand="lg" sticky="top">
                             <img className="logo" src={logo} alt="i" />
                             <h3>Expense Tracker</h3>
                                <Navbar.Toggle aria-controls="basic-navbar-navgit " />
                                <Navbar.Collapse  className="justify-content-end w-50">
                                    <Nav className="justify-content-between p-3 w-50">
                                    <Nav.Link href="#">Home</Nav.Link>
                                    <Nav.Link href="#">Contact Us</Nav.Link>
                                    <Nav.Link href="#">Registration</Nav.Link>
                                    <Nav.Link href="#">Login</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                    </div>
                </div>
            </div>
            </>
    )
}

export default Header;