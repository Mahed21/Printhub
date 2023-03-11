import React from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";

const DisplayingIndoorListForSelect = (props) => {
  const { user } = UseAuth();

  const navigate = useNavigate();
  const { indoorName, address, status } = props.list;
  const seeRanking = (indoor) => {
    navigate("/fetchRankingByIndoor", { state: { indoorName: indoor } });
  };
  return (
    <tr class="table-primary">
      <td>{indoorName}</td>
      <td>{address}</td>
      <td>{status}</td>
      <td>
        <button
          className="btn btn-primary w-50"
          onClick={() => seeRanking(indoorName)}
        >
          See The Ranking
        </button>
      </td>
    </tr>
  );
};

export default DisplayingIndoorListForSelect;
