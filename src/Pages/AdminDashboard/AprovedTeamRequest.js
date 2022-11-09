import React, { useEffect, useState } from "react";
import DisplayApprovedTeamRequest from "./DisplayApprovedTeamRequest";
import { useQuery } from "@tanstack/react-query";

const AprovedTeamRequest = () => {
  const [teamdata, setTeamData] = useState([]);
  const { isLoading, error, data, refetch } = useQuery(["repoData"], () => {
    fetch("https://efutsal.onrender.com/team")
      .then((res) => res.json())
      .then((data) => setTeamData(data.data));
  });
  return (
    <div>
      <div className="opponant">
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
              <DisplayApprovedTeamRequest
                data={data}
                key={data._id}
                afterUpdate={(event) => refetch()}
              ></DisplayApprovedTeamRequest>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AprovedTeamRequest;
