import React from "react";

const DisplayAllOppnant = (props) => {
  const { teamName, contact, availableDay, description } = props.data;

  return (
    <tr>
      <th scope="row">{teamName}</th>
      <td>{availableDay}</td>
      <td>{description}</td>
      <td>{contact}</td>
    </tr>
  );
};

export default DisplayAllOppnant;
