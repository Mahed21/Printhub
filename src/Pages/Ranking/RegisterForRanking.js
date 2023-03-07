import React from "react";
import { useLocation } from "react-router-dom";
import UseAuth from "../Context/UseAuth";
import "./ranking.css";

const RegisterForRanking = () => {
  const { user } = UseAuth();
  const location = useLocation();
  const { indoorName } = location.state;
  return (
    <div class="d-flex justify-content-center register_for_ranking mt-5">
      <div class="card w-50 ">
        <div class="card-body">
          <h5 class="card-title text-center">Register Your Name For Ranking</h5>
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                value={user.email}
                readOnly
              />
              <span class="border"></span>
            </div>

            <div class="form-group">
              <label for="exampleFormControlInput1">Enter Full Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Full Name"
              />
              <span class="border"></span>
            </div>

            <div class="form-group">
              <label for="exampleFormControlInput1">Indoor Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={indoorName}
                readOnly
              />
              <span class="border"></span>
            </div>
            <input
              type="submit"
              value="submit"
              className="btn btn-primary w-100"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForRanking;
