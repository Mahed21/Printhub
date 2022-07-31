import React from "react";
import { Nav } from "react-bootstrap";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="login">
        <div className="login-form p-5">
          <h1>Login Form</h1>
          <input placeholder="email" type="email" className="mt-4 p-3" />
          <input placeholder="password" type="password" className="mt-4 p-3" />
          <br />
          <div className="d-flex">
            <button className="login-btn mt-5 ps-4 pe-4 pt-1 pb-1">
              Login
            </button>
            <Nav.Link href="/register" className="mt-5">
              Not Registerd?
            </Nav.Link>
          </div>
          <br />
          <button className="login-btn mt-3 ps-4 pe-4 pt-1 pb-1">
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
