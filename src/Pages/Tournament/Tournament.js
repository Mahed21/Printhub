import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UseAuth from "../Context/UseAuth";
import CreateTournament from "./CreateTournament";

import "./tournament.css";

const Tournament = () => {
  const { user } = UseAuth();
  const [adminIndoorData, setAdminIndoorData] = useState([]);
  useEffect(() => {
    fetch("https://efutsal.onrender.com/indoorAdmin")
      .then((res) => res.json())
      .then((data) => {
        const fetchIndoorList = data.data.filter(
          (datas) => datas.email === user.email
        );

        setAdminIndoorData(fetchIndoorList);
      });
  }, [user.email]);

  return (
    <div className="tournament d-flex justify-content-center pt-5 pb-5">
      {adminIndoorData.map((data) => (
        <CreateTournament data={data} key={data._id}></CreateTournament>
      ))}
    </div>
  );
};

export default Tournament;
