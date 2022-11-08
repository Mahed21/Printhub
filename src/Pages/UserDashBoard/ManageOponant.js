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
        console.log(oponantData);
        setOponantInfo(oponantData);
      });
  });

  return (
    <div className="userDashBoard pt-4">
      {oponantInfo.map((data) => (
        <DisplayManageOpnant
          data={data}
          key={data._id}
          afterUpdate={(event) => refetch()}
        ></DisplayManageOpnant>
      ))}
    </div>
  );
};

export default ManageOponant;
