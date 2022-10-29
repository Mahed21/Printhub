import React, { useState } from "react";
import DisplayAllOppnant from "./DisplayAllOppnant";
import "./oponant.css";

const Oponant = () => {
  const [teamdata, setTeamData] = useState([]);
  fetch("http://localhost:5000/team")
    .then((res) => res.json())
    .then((data) => setTeamData(data));
  return (
    <div className="opponant container mt-5">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Team Name</th>
            <th scope="col">Availavle Day</th>
            <th scope="col">Description </th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        <tbody>
          {teamdata.map((data) => (
            <DisplayAllOppnant data={data} key={data._id}></DisplayAllOppnant>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Oponant;
