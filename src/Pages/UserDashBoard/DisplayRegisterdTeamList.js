import React from "react";

const DisplayRegisterdTeamList = (props) => {
  const {
    RegisterdteamName,
    RegisterdTeamEmail,
    RegisterdteamContact,
    RegisterdteamAdress,
    indoorAdminEmail,
    HostindoorName,
    TournamnetName,
    _id,
  } = props.data;
  const AcceptTeamRequest = (e) => {
    e.preventDefault();
  };
  return (
    <tr>
      <td>{RegisterdteamName}</td>
      <td>{RegisterdTeamEmail}</td>
      <td>{RegisterdteamContact}</td>
      <td>{RegisterdteamAdress}</td>
    </tr>
  );
};

export default DisplayRegisterdTeamList;
