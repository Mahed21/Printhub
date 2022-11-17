import React from "react";
import { useState } from "react";
import DisplayeTournament from "./DisplayeTournament";

const TournamentHomePage = () => {
  const [tournament, setTournament] = useState([]);
  fetch("http://localhost:5000/indoorAdmin")
    .then((res) => res.json())
    .then((data) => {
      const fetchTournamnet = data.data.filter(
        (datas) => datas.tournamentStatus === "active"
      );
      setTournament(fetchTournamnet);
    });
  return (
    <div className="mt-4">
      {tournament.map((data) => (
        <DisplayeTournament data={data} key={data._id}></DisplayeTournament>
      ))}
    </div>
  );
};

export default TournamentHomePage;
