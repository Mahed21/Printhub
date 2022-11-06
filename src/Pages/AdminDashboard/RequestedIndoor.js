import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DisplayRequestedIndoor from "./DisplayRequestedIndoor";

const RequestedIndoor = () => {
  const [indoorList, setIndoorList] = useState([]);
  const { isLoading, error, data, refetch } = useQuery(["repoData"], () => {
    fetch("http://localhost:5000/indoor")
      .then((res) => res.json())
      .then((data) => setIndoorList(data.data));
  });
  return (
    <div className="row row-cols-lg-3 container mt-3 mb-4">
      {indoorList.map((data) => (
        <DisplayRequestedIndoor
          data={data}
          key={data._id}
          afterUpdate={(event) => refetch()}
        ></DisplayRequestedIndoor>
      ))}
    </div>
  );
};

export default RequestedIndoor;
