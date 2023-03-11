import React from "react";

const DisplayRankingafterFatching = (props) => {
  const { playerEmail, playerName, score } = props.list;
  return (
    <tr class="table-primary">
      <td>{playerName}</td>
      <td>{playerEmail}</td>
      <td>{score}</td>
    </tr>
  );
};

export default DisplayRankingafterFatching;
