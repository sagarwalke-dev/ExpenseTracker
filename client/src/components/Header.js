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
                            <Navbar className="Navbar " event="light"  sticky="top">
                             <img className="logo" src={logo} alt="i" />
                              <h3>EXPENSE TRACKER</h3>
                                <Navbar.Toggle aria-controls="basic-navbar-navgit " />
                                <Navbar.Collapse  className="justify-content-end w-50">
                                    <Nav className="nav justify-content-between  w-75">
                                    <Nav.Link className="navlink" href="#"><i class="fa fa-home"></i>Home</Nav.Link>
                                    <Nav.Link href="#">Contact Us</Nav.Link>
                                    <Nav.Link href="#">Registration</Nav.Link>
                                    <Nav.Link href="#">Log in</Nav.Link>
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