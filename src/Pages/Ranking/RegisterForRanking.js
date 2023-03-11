import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import UseAuth from "../Context/UseAuth";
import "./ranking.css";

const RegisterForRanking = () => {
  const [name, setName] = useState("");
  const { user } = UseAuth();
  const location = useLocation();
  const { indoorName } = location.state;

  const EntryNameForRanking = (e) => {
    e.preventDefault();

    const rankingList = {
      playerEmail: user.email,
      playerName: name,
      indoorNameForRanking: indoorName,
      score: 0,
    };
    fetch(`http://localhost:5000/ranking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(rankingList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("You Have Successfully register for ranking");

          setName("");
        } else {
          alert(data.data);
        }
      });
  };

  return (
    <div class="d-flex justify-content-center register_for_ranking mt-5">
      <div class="card w-50 ">
        <div class="card-body">
          <h5 class="card-title text-center">Register Your Name For Ranking</h5>
          <form onSubmit={EntryNameForRanking}>
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
                onBlur={(e) => setName(e.target.value)}
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
