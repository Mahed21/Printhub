import { useEffect } from "react";
import { useState } from "react";
import DisplayeTournament from "./DisplayeTournament";

const TournamentHomePage = () => {
  const [tournament, setTournament] = useState([]);

  useEffect(() => {
    fetch("https://efutsal.onrender.com/indoorAdmin")
      .then((res) => res.json())
      .then((data) => {
        const fetchTournamnet = data.data.filter(
          (datas) => datas.tournamentStatus === "active"
        );
        setTournament(fetchTournamnet);
        console.log(fetchTournamnet);
      });
  }, []);

  return (
    <div className="mt-4 tournamnetHomePage ps-5">
      <div className="row row-cols-lg-4">
        {tournament.map((data) => (
          <DisplayeTournament data={data} key={data._id}></DisplayeTournament>
        ))}
      </div>
      <div className="mt-1 mb-4 d-flex justify-content-end"></div>
    </div>
  );
};

export default TournamentHomePage;
