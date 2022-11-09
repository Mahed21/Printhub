import React from "react";

const DisplayApprovedTeamRequest = (props) => {
  const {
    teamName,
    contact,
    day,
    description,
    time,
    venue,
    date,
    challange,
    oponant,
    isAdminApproved,
    _id,
  } = props.data;
  const { afterUpdate } = props;
  const UpdateAdminAproval = (id) => {
    const updateadmin = {
      isAdminApproved: "accepted",
    };
    fetch(`https://efutsal.onrender.com/team/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateadmin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert(" Succesfully approved");
          afterUpdate();
        }
      });
  };
  return (
    <tr>
      <th scope="row">{teamName}</th>
      <td>{day}</td>
      <td>{time}</td>
      <td>{date}</td>
      <td>{venue}</td>
      <td>{description}</td>
      <td>{contact}</td>
      <td>
        {isAdminApproved === "pending" ? (
          <button
            className="btn btn-primary"
            onClick={() => UpdateAdminAproval(_id)}
          >
            pending
          </button>
        ) : (
          <button className="btn btn-primary">Approved</button>
        )}
      </td>
    </tr>
  );
};

export default DisplayApprovedTeamRequest;
