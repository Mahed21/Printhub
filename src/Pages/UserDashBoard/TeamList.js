import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { useEffect } from "react";
import UseAuth from "../Context/UseAuth";
import DisplayRegisterdTeamList from "./DisplayRegisterdTeamList";
import "./UserDashBoard.css";

const TeamList = () => {
  const { user } = UseAuth();
  const [AllRgisterdTeam, setAllRegisterdTeam] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/teamEntry")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.data);
        const fetchData = data.data.filter(
          (datas) => datas.indoorAdminEmail === user.email
        );
        setAllRegisterdTeam(fetchData);
      });
  }, [user.email]);

  return (
    <div className="teamList container">
      <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">team Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Adreess</th>
          </tr>
        </thead>
        <tbody>
          {AllRgisterdTeam.map((data) => (
            <DisplayRegisterdTeamList
              data={data}
              key={data._id}
            ></DisplayRegisterdTeamList>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamList;
