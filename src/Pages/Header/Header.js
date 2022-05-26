import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
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
