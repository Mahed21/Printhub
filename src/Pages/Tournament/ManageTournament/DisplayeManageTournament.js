import React from "react";
import { useNavigate } from "react-router-dom";
import "../tournament.css";

const DisplayeManageTournament = (props) => {
  const navigate = useNavigate();
  console.log(props.data);
  const {
    tournamentName,
    indoorName,
    tournamnetStart,
    tournamnetfee,
    tournamentFirstPrize,
    tournamentSecondPrize,
    tournamentRulesOne,
    tournamentRulesTwo,
    tournamentRulesThree,
    tournamentRulesFour,
    tournamentRulesFive,
    tournamentRulesSix,

    tournamentStatus,
    _id,
  } = props.data;
  const updateTournament = (e) => {
    e.preventDefault();

    const updateObject = {
      tournamentName: "",
      tournamnetStart: "",
      tournamnetfee: "",

      tournamentRulesOne: "",
      tournamentRulesTwo: "",
      tournamentRulesThree: "",
      tournamentRulesFour: "",
      tournamentRulesFive: "",
      tournamentRulesSix: "",
      tournamentFirstPrize: "",
      tournamentSecondPrize: "",
      tournamentStatus: "pending",
    };
    fetch(`https://efutsal.onrender.com/indoorAdmin/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateObject),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          console.log("hii");
          alert("Successfully Deleted");
          navigate("/");
        }
      });
  };
  return (
    <div>
      <div className="manage-tournamnet container">
        <div className="card-body">
          <h5 className="mb-2 header-text-crTournament">
            {tournamentName} at {indoorName}
          </h5>
          <h5 className="mb-2 header-text-crTournament ">{tournamentName}</h5>
          <h5 className="mb-2 ">
            ⚪Start Date:
            <span className=" dispTournament-text">{tournamnetStart}</span>
          </h5>

          <h5>
            ⚪Registartion Fees :
            <span className="dispTournament-text">{tournamnetfee} TK</span>
          </h5>
          <h5>
            ⚪First Prize:
            <span className="dispTournament-text">
              {tournamentFirstPrize} TK
            </span>
          </h5>
          <h5>
            ⚪ second Prize:
            <span className="dispTournament-text">
              {tournamentSecondPrize} TK
            </span>
          </h5>

          <div>
            <div>
              <button
                className="indoorlist-btn  ps-4 pe-4 pt-2 pb-2 mt-3 w-100"
                onClick={updateTournament}
              >
                Delete Tournament
              </button>
            </div>
            <div>
              <button className="indoorlist-btn  ps-4 pe-4 pt-2 pb-2 mt-3 w-100">
                Update Fixture
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayeManageTournament;
