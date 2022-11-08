import React, { useEffect, useState } from "react";
import DisplayAllOppnant from "./DisplayAllOppnant";
import "./oponant.css";

const Oponant = () => {
  const [teamdata, setTeamData] = useState([]);
  useEffect(() => {
    fetch("https://efutsal.onrender.com/team")
      .then((res) => res.json())
      .then((data) => {
        const fetchTeamData = data.data.filter(
          (value) => value.challange !== "accepted"
        );
        setTeamData(fetchTeamData);
      });
  }, []);
  return (
    <div className="opponant container">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Team Name</th>
            <th scope="col">Day</th>
            <th scope="col">Time</th>
            <th scope="col">Date</th>
            <th scope="col">Indoor Name</th>
            <th scope="col">Description </th>
            <th scope="col">Contact</th>
            <th scope="col"></th>
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
