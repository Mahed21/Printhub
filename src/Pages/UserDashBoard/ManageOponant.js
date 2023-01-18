import userEvent from "@testing-library/user-event";
import React from "react";
import { useState } from "react";
import UseAuth from "../Context/UseAuth";
import DisplayManageOpnant from "./DisplayManageOpnant";
import { useQuery } from "@tanstack/react-query";
import "./UserDashBoard.css";

const ManageOponant = () => {
  const { user } = UseAuth();

  const [oponantInfo, setOponantInfo] = useState([]);
  const { isLoading, error, data, refetch } = useQuery(["repoData"], () => {
    fetch("https://efutsal.onrender.com/team")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        const oponantData = data.data.filter(
          (value) => user.email === value.email
        );
        //console.log(oponantData);
        setOponantInfo(oponantData);
      });
  });

  return (
    <div className="userDashBoard pt-4">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Team Name</th>
            <th scope="col">Day</th>
            <th scope="col">Time</th>
            <th scope="col">Date</th>
            <th scope="col">Indoor Name</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          {oponantInfo.map((data) => (
            <DisplayManageOpnant
              data={data}
              key={data._id}
              afterUpdate={(event) => refetch()}
            ></DisplayManageOpnant>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOponant;
