import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import UseAuth from "../Context/UseAuth";
import "./Login.css";
import { useNavigate } from "react-router";

const Login = () => {
  let navigate = useNavigate();
  const { googleSignIn, user, emailPassLogIn } = UseAuth();
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  if (user.email) {
    navigate("/");
  }
  const emailHandle = (e) => {
    setEmail(e.target.value);
  };
  const passHandle = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    emailPassLogIn(email, password, navigate);
  };

  return (
    <div>
      <div className="login">
        <div className="login-form p-5">
          <h1>Login Form</h1>
          <input
            placeholder="email"
            type="email"
            className="mt-4 p-3"
            onBlur={emailHandle}
          />
          <input
            placeholder="password"
            type="password"
            className="mt-4 p-3"
            onBlur={passHandle}
          />
          <br />
          <div className="d-flex">
            <button
              className="login-btn mt-5 ps-4 pe-4 pt-1 pb-1"
              onClick={handleLogin}
            >
              Login
            </button>
            <Nav.Link href="/register" className="mt-5">
              Not Registerd?
            </Nav.Link>
          </div>
          <br />
          <button
            className="login-btn mt-3 ps-4 pe-4 pt-1 pb-1"
            onClick={googleSignIn}
          >
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
