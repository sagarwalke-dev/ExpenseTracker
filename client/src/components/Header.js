import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import "./css/header.css";
import logo from './images/icon2.webp'
const Header=()=>{
 
    return(
        <>
        <div>
                <div className="row">
                    <div className="col-md-12 bg">
                            <Navbar className="Navbar " bg="primary" expand="lg" sticky="top">
                            <h3>EXPENSE</h3>
                             <img className="logo" src={logo} alt="i" />
                              <h3>TRACKER</h3>
                                <Navbar.Toggle aria-controls="basic-navbar-navgit " />
                                <Navbar.Collapse  className="justify-content-end w-50">
                                    <Nav className="justify-content-around  w-75">
                                    <Nav.Link href="#"><i class="fa fa-home"></i>Home</Nav.Link>
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