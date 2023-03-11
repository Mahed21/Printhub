import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DisplayRankingafterFatching from "./DisplayRankingafterFatching";

const FetchRankingByIndoor = () => {
  const [ranking, setRanking] = useState([]);
  const location = useLocation();
  const { indoorName } = location.state;
  useEffect(() => {
    fetch("http://localhost:5000/ranking")
      .then((res) => res.json())
      .then((data) => {
        const fetchIndoorList = data.data.filter(
          (datas) => datas.indoorNameForRanking === indoorName
        );

        setRanking(fetchIndoorList);
      });
  }, [indoorName]);
  return (
    <div className="">
      <div className="container">
        <h1>Ranking for indoor {indoorName}</h1>
        <table class="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Player Email</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((list) => (
              <DisplayRankingafterFatching
                list={list}
                key={list._id}
              ></DisplayRankingafterFatching>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FetchRankingByIndoor;
