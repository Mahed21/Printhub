import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UseAuth from "../Context/UseAuth";
import Modal from "react-modal";
import "./Header.css";

import logo from "../../image/mainLogo.png";
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
  const [adminIndoor, setAdminIndoor] = useState(false);
  const [manageTournament, setManageTournament] = useState(false);
  //console.log(user.email);

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

  useEffect(() => {
    fetch("https://efutsal.onrender.com/indoorAdmin")
      .then((res) => res.json())
      .then((data) => {
        const getIndoorAdminData = data.data.filter(
          (datas) => user.email === datas.email
        );

        if (getIndoorAdminData.length > 0) {
          setAdminIndoor(true);
        }
      });
  }, [user.email]);
  useEffect(() => {
    fetch("https://efutsal.onrender.com/indoorAdmin")
      .then((res) => res.json())
      .then((data) => {
        const getManageIndoor = data.data.filter(
          (datas) =>
            user.email === datas.email && datas.tournamentStatus === "active"
        );

        if (getManageIndoor.length > 0) {
          setManageTournament(true);
        }
      });
  }, [user.email, manageTournament]);

  return (
    <div>
      <div className="header pt-2 pb-2">
        <div className="container">
          <nav className="navbar fixed-top navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <Nav.Link class="navbar-brand" to="#">
                {/* <img src={logo} alt="eFutsal" className="w-25 h-25" /> */}
              </Nav.Link>
              <button
                className="navbar-toggler toggle"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"> </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active ankor me-2"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active ankor me-2"
                      aria-current="page"
                      to="#"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link active ankor me-2"
                      aria-current="page"
                      to="/indoorAdd"
                    >
                      Add Indoor
                    </NavLink>
                  </li>
                  {admin ? (
                    <li class="dropdown me-3 mt-2">
                      <li>Admin Dashboard</li>
                      <div class="dropdown-content">
                        <Nav.Link to="/requestedIndoor">Manage Indoor</Nav.Link>
                        <Nav.Link to="/aprovedTeamRequest">
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
                        <NavLink
                          className="nav-link active ankor me-2"
                          aria-current="page"
                          to="/oponant"
                        >
                          Find Oponant
                        </NavLink>
                      </li>
                    </div>
                  ) : (
                    ""
                  )}

                  {user.emailVerified ? (
                    ""
                  ) : (
                    <div>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link active ankor me-2"
                          aria-current="page"
                          to="/register"
                        >
                          Register
                        </NavLink>
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
                          {adminIndoor ? (
                            <Nav.Link href="/tournament">
                              Create Tournament
                            </Nav.Link>
                          ) : (
                            ""
                          )}
                          {manageTournament ? (
                            <Nav.Link href="/manageTournament">
                              Manage Tournament
                            </Nav.Link>
                          ) : (
                            ""
                          )}
                          {adminIndoor ? (
                            <Nav.Link href="/teamList">Team List</Nav.Link>
                          ) : (
                            ""
                          )}
                        </div>
                      </li>
                    ) : (
                      ""
                    )}
                  </div>
                  {user.emailVerified ? (
                    <div>
                      <li className="nav-item">
                        <Nav.Link to="/login">
                          <button
                            className="header-btn login-text me-2"
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
                          className="nav-link active login-text me-2"
                          aria-current="page"
                          to="/login"
                        >
                          Login
                        </Nav.Link>
                      </li>
                    </div>
                  )}
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
