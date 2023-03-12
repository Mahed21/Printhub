import React from "react";

const DisplayRankingafterFatching = (props) => {
  const { playerEmail, playerName, score, totalMatch } = props.list;
  return (
    <tr class="table-primary">
      <td>{playerName}</td>
      <td>{playerEmail}</td>
      <td>{totalMatch}</td>
      <td>{score}</td>
    </tr>
  );
};

export default DisplayRankingafterFatching;
