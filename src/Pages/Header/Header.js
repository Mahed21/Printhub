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
  console.log(user.email);
  const [admin, setAdmin] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [availableDay, setAvailableDay] = useState("");
  const [teamName, setTeamName] = useState("");
  const [contact, setContact] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/admin")
      .then((res) => res.json())
      .then((data) => {
        const getData = data.filter((datas) => user.email === datas.email);

        if (getData.length > 0) {
          setAdmin(true);
        }
      });
  }, [user.email]);

  //modal
  let subtitle;
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [TeamLoading, setTeamLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/team")
      .then((res) => res.json())
      .then((data) => {
        const fetchTeamData = data.filter(
          (datas) => datas.email === user.email
        );

        if (fetchTeamData.length > 0) {
          setTeamLoading(true);
        } else {
          setTeamLoading(false);
        }
      });
  }, [user.email]);

  const postOponant = (e) => {
    e.preventDefault();
    const teamList = {
      teamName: teamName,
      availableDay: availableDay,
      contact: contact,
      description: description,
      email: user.email,
    };
    fetch(`http://localhost:5000/team`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(teamList),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);

        alert("Data collected Successfully");
        closeModal();
        navigate("/oponant");
      });
  };

  return (
    <div>
      <div className="header pt-2 pb-2">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Navbar.Brand href="/">
              <img src={logo} alt="eFutsal" />
            </Navbar.Brand>
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
                  {admin ? (
                    <li className="nav-item">
                      <Nav.Link
                        className="nav-link active   ankor"
                        aria-current="page"
                        href="/indoorAdd"
                      >
                        Add Indoor
                      </Nav.Link>
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
                        <button
                          className="mt-2 ms-2 availableBtn"
                          onClick={openModal}
                        >
                          Available as oponant
                        </button>
                      </li>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* modal */}
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    {TeamLoading ? (
                      <div>
                        <h5 className="p-5">
                          Already You register team using these email
                        </h5>
                        <div className="d-flex justify-content-end mt-3">
                          <button
                            className="cancel-btn me-3"
                            onClick={closeModal}
                          >
                            cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={postOponant}>
                        <div className="container available">
                          <h5 className="mb-5 font-italic">
                            Set your team for oponant
                          </h5>
                          <div>
                            <input
                              placeholder="Team Name"
                              className="w-100 "
                              type="text"
                              required
                              onChange={(e) => setTeamName(e.target.value)}
                            />
                          </div>
                          <br />
                          <div>
                            <input
                              placeholder="Mention available day"
                              className="w-100"
                              type="text"
                              required
                              onChange={(e) => setAvailableDay(e.target.value)}
                            />
                          </div>
                          <br />
                          <div>
                            <input
                              placeholder="Contact"
                              className="w-100 "
                              type="text"
                              required
                              onChange={(e) => setContact(e.target.value)}
                            />
                          </div>
                          <br />
                          <div>
                            <input
                              placeholder="Description About the mtach"
                              className="w-100 "
                              type="text"
                              required
                              onChange={(e) => setdescription(e.target.value)}
                            />
                          </div>

                          <br />
                          <div className="d-flex justify-content-end mt-3">
                            <button
                              className="cancel-btn me-3"
                              onClick={closeModal}
                            >
                              cancel
                            </button>
                            <input
                              type="submit"
                              value="save"
                              className="save-btn"
                            />
                          </div>
                        </div>
                      </form>
                    )}
                  </Modal>
                  {/* modal end */}
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
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success " type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
