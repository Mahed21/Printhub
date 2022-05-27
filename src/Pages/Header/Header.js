import { Button } from "bootstrap";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">

      <div className="row m-5">
        <div className="col-lg-3 col-md-12 col-sm-12 ">
         <div className="d-flex justify-content-center">
         <h2 >PrintUp</h2>
         </div>
        </div>
        <div className="col-lg-8">
          <div className="input-top-header">
          <input type='text' value='what do you need' className="ps-2"/>
          <button className="btn mb-2 p-2 ms-1">Search</button>
          </div>
        </div>
        <div className="col-lg-1 col-md-12 col-sm-12">
         <div className="d-flex justify-content-center">
         <button className="btn">login</button>
         </div>
        </div>


      </div>

      <Navbar bg="black" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" className="dropdown-list">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="dropdown-list">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="dropdown-list">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" className="dropdown-list">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/home" className="nav-text ps-4 pe-4 ms-1">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="nav-text ps-4 pe-4 ms-1">
                Blog
              </Nav.Link>
              <Nav.Link href="/home" className="nav-text ps-4 pe-4 ms-1">
                Contact
              </Nav.Link>
              <Nav.Link href="/home" className="nav-text ps-4 pe-4 ms-1">
                Pages
              </Nav.Link>
              <Nav.Link href="/home" className="nav-text ps-4 pe-4 ms-1">
                Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
