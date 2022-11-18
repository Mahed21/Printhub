import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import DisplaySquadByTable from "./DisplaySquadByTable";

const ViewAllTeamSquad = () => {
  const [teamSquad, setTeamSquad] = useState([]);
  const location = useLocation();
  const { email } = location.state;
  //console.log(email);
  fetch("https://efutsal.onrender.com/teamEntry")
    .then((res) => res.json())
    .then((data) => {
      const fetchData = data.data.filter(
        (datas) => email === datas.indoorAdminEmail
      );
      setTeamSquad(fetchData);
    });
  return (
    <div className="tournament">
      <div className="row container">
        {teamSquad.map((squad) => (
          <DisplaySquadByTable
            squad={squad}
            key={squad._id}
          ></DisplaySquadByTable>
        ))}
      </div>
    </div>
  );
};

export default ViewAllTeamSquad;
