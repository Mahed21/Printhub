import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import UseAuth from "../Context/UseAuth";
import { useNavigate } from "react-router";

const Register = () => {
  const { emailPassSignIn } = UseAuth();
  const [email, setEmail] = useState({});
  const [pass, setPass] = useState({});
  const [conPass, setConPass] = useState({});
  const [name, setName] = useState({});
  let navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const handleConPass = (e) => {
    setConPass(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    if (pass === conPass) {
      emailPassSignIn(email, pass, navigate, name);
    } else {
      alert("Password and Confirm Password is not match");
    }
  };
  return (
    <div>
      <div className="login">
        <div className="login-form p-5">
          <h1>Registration Form</h1>
          <input
            placeholder="Name"
            type="text"
            className="mt-4 p-3"
            onBlur={handleName}
          />
          <input
            placeholder="email"
            type="email"
            className="mt-4 p-3"
            onBlur={handleEmail}
          />
          <input
            placeholder="password"
            type="password"
            className="mt-4 p-3"
            onBlur={handlePass}
          />
          <input
            placeholder=" Confirm password"
            type="password"
            className="mt-4 p-3"
            onBlur={handleConPass}
          />
          <br />
          <div className="d-flex">
            <button
              className="login-btn mt-5 ps-4 pe-4 pt-1 pb-1"
              onClick={handleRegister}
            >
              Register
            </button>
            <Nav.Link href="/login" className="mt-5">
              Already Registerd?
            </Nav.Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
