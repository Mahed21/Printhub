import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../Context/UseAuth";
import Modal from "react-modal";
import "./Header.css";

import logo from "../../image/logo2.png";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
};

const Header = () => {
  let navigate = useNavigate();
  const { user, Logout } = UseAuth();
  // console.log(user.email);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch("https://efutsal.onrender.com/admin")
      .then((res) => res.json())
      .then((data) => {
        const getData = data.data.filter((datas) => user.email === datas.email);

        if (getData.length > 0) {
          setAdmin(true);
        }
      });
  }, [user.email]);

  return (
    <div>
      <div className="nav-logo">
        <Navbar.Brand href="/">
          <img src={logo} alt="eFutsal" />
        </Navbar.Brand>
      </div>
      <div className="header pt-5 pb-5">
        <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler toggle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Nav.Link
                      className="nav-link active ankor"
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className="nav-link active   ankor"
                      aria-current="page"
                      href="#"
                    >
                      Contact
                    </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <Nav.Link
                      className="nav-link active   ankor"
                      aria-current="page"
                      href="/indoorAdd"
                    >
                      Add Indoor
                    </Nav.Link>
                  </li>
                  {admin ? (
                    <li class="dropdown me-3 mt-2">
                      <li>Admin Dashboard</li>
                      <div class="dropdown-content">
                        <Nav.Link href="/requestedIndoor">
                          Manage Indoor
                        </Nav.Link>
                        <Nav.Link href="/aprovedTeamRequest">
                          Team Request
                        </Nav.Link>
                      </div>
                    </li>
                  ) : (
                    ""
                  )}
                  {user.emailVerified ? (
                    <div>
                      <li className="nav-item">
                        <Nav.Link
                          className="nav-link active   ankor"
                          aria-current="page"
                          href="/oponant"
                        >
                          Find Oponant
                        </Nav.Link>
                      </li>
                    </div>
                  ) : (
                    ""
                  )}

                  {user.emailVerified ? (
                    <div>
                      <li className="nav-item">
                        <Nav.Link href="/login">
                          <button
                            className="header-btn ps-3 pe-3"
                            onClick={Logout}
                          >
                            Logout
                          </button>
                        </Nav.Link>
                      </li>
                    </div>
                  ) : (
                    <div>
                      <li className="nav-item">
                        <Nav.Link
                          className="nav-link active   ankor"
                          aria-current="page"
                          href="/login"
                        >
                          Login
                        </Nav.Link>
                      </li>
                    </div>
                  )}
                  {user.emailVerified ? (
                    ""
                  ) : (
                    <div>
                      <li className="nav-item">
                        <Nav.Link
                          className="nav-link active   ankor"
                          aria-current="page"
                          href="/register"
                        >
                          Register
                        </Nav.Link>
                      </li>
                    </div>
                  )}
                  <div>
                    {user.emailVerified ? (
                      <li class="dropdown me-3 mt-2">
                        <li>Dashboard</li>
                        <div class="dropdown-content">
                          <Nav.Link href="/manageOponant">
                            Manage Oponant
                          </Nav.Link>
                        </div>
                      </li>
                    ) : (
                      ""
                    )}
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
