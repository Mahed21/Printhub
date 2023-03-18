import React from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "../Context/UseAuth";

const DisplaySelectIndoor = (props) => {
  const { user } = UseAuth();

  const navigate = useNavigate();
  const { indoorName, address, status } = props.list;
  const RegisterForRanking = (indoor) => {
    if (!user.email) {
      navigate("/login");
    } else {
      navigate("/registerForRanking", { state: { indoorName: indoor } });
    }
  };
  return (
    <tr class="table-primary">
      <td>{indoorName}</td>
      <td>{address}</td>
      <td>{status}</td>
      <td>
        <button
          className="btn btn-primary w-50"
          onClick={() => RegisterForRanking(indoorName)}
        >
          Register Your Name
        </button>
      </td>
    </tr>
  );
};

export default DisplaySelectIndoor;
