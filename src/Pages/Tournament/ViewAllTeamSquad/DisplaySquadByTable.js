import React from "react";

const DisplaySquadByTable = (props) => {
  const {
    TournamnetName,
    PlayerNameOne,
    PlayerNameTwo,
    PlayerNameThree,
    PlayerNameFour,
    PlayerNameFive,
    PlayerNameSix,
    PlayerNameSeven,
    RegisterdteamName,
  } = props.squad;
  return (
    <div className="col-lg-4 mt-4">
      <h5 className="text-center">Player List Of Team {RegisterdteamName}</h5>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Serial</th>
            <th scope="col">PlayerList</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{PlayerNameOne}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{PlayerNameTwo}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{PlayerNameThree}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{PlayerNameFour}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{PlayerNameFive}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>{PlayerNameSix}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>{PlayerNameSeven}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DisplaySquadByTable;
