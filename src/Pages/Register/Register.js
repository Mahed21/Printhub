import React from "react";
import { Nav } from "react-bootstrap";

const Register = () => {
  return (
    <div>
      <div className="login">
        <div className="login-form p-5">
          <h1>Registration Form</h1>
          <input placeholder="email" type="email" className="mt-4 p-3" />
          <input placeholder="password" type="password" className="mt-4 p-3" />
          <br />
          <div className="d-flex">
            <button className="login-btn mt-5 ps-4 pe-4 pt-1 pb-1">
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
