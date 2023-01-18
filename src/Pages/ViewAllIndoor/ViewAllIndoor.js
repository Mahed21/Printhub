import React, { useEffect, useState } from "react";
import DisplayAllIndoor from "./DisplayAllIndoor";

const ViewAllIndoor = () => {
  const [indoorList, setIndoorList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allIndoor")
      .then((res) => res.json())
      .then((data) => {
        const fetchIndoorList = data.data.filter(
          (datas) => datas.status === "active"
        );

        setIndoorList(fetchIndoorList);
      });
  }, []);
  return (
    <div>
      <div className="container ">
        <div className="row row-cols-lg-4">
          {indoorList.map((list) => (
            <DisplayAllIndoor list={list} key={list._id}></DisplayAllIndoor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewAllIndoor;
