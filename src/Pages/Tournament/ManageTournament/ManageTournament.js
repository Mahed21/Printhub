import React, { useEffect } from "react";
import { useState } from "react";
import UseAuth from "../../Context/UseAuth";
import DisplayeManageTournament from "./DisplayeManageTournament";

const ManageTournament = () => {
  const { user } = UseAuth();
  const [manageTournament, setManageTournament] = useState([]);
  useEffect(() => {
    fetch("https://efutsal.onrender.com/indoorAdmin")
      .then((res) => res.json())
      .then((data) => {
        const getManageIndoor = data.data.filter(
          (datas) =>
            user.email === datas.email && datas.tournamentStatus === "active"
        );

        setManageTournament(getManageIndoor);
      });
  }, [user.email, manageTournament]);
  return (
    <div>
      <div className="mt-4 tournamnetHomePage p-5">
        <div className="row row-cols-lg-3">
          {manageTournament.map((data) => (
            <DisplayeManageTournament
              data={data}
              key={data._id}
            ></DisplayeManageTournament>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageTournament;
