import React, { useEffect } from "react";
import UseAuth from "../Context/UseAuth";
import { useNavigate } from "react-router";
import "./spinner.css";

const Spinner = () => {
  let navigate = useNavigate();

  const { user } = UseAuth();
  console.log(user.emailVerified);
  if (user.emailVerified) {
    navigate("/");
  }
  // useEffect(() => {
  //   console.log(user);
  // }, [user.emailVerified]);

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
