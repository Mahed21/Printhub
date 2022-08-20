import React from "react";
import UseAuth from "../Context/UseAuth";
import { useNavigate } from "react-router";
import "./spinner.css";

const Spinner = () => {
  let navigate = useNavigate();
  const { user } = UseAuth();
  //   console.log(user);
  if (user.emailVerified) {
    navigate("/");
  }
  return (
    <div className="spinner-parent d-flex justify-content-center align-items-center">
      <div className="spinner-border spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h5 className="ms-2">Reload after verified the email</h5>
    </div>
  );
};

export default Spinner;
