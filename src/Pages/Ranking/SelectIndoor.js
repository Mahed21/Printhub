import React, { useEffect, useState } from "react";
import DisplaySelectIndoor from "./DisplaySelectIndoor";
import "./ranking.css";

const SelectIndoor = () => {
  const [indoorList, setIndoorList] = useState([]);
  useEffect(() => {
    fetch("https://efutsal.onrender.com/indoor")
      .then((res) => res.json())
      .then((data) => {
        const fetchIndoorList = data.data.filter(
          (datas) => datas.status === "active"
        );

        setIndoorList(fetchIndoorList);
      });
  }, []);
  return (
    <div className="">
      <div className="container">
        <table class="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>Indoor Name</th>
              <th>Indoor Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {indoorList.map((list) => (
              <DisplaySelectIndoor
                list={list}
                key={list._id}
              ></DisplaySelectIndoor>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectIndoor;
