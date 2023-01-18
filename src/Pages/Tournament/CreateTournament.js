import userEvent from "@testing-library/user-event";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../image/profile.jpg";
import "./tournament.css";

const CreateTournament = (props) => {
  let navigate = useNavigate();
  const { indoorName, _id } = props.data;
  const [nameofTournmanet, setNameofTournmanet] = useState("");
  const [startDate, setStartDate] = useState("");
  const [fees, setfees] = useState("");
  const [banner, setbanner] = useState(null);
  const [rules, setRules] = useState("");
  const [rules1, setRules1] = useState("");
  const [rules2, setRules2] = useState("");
  const [rules3, setRules3] = useState("");
  const [rules4, setRules4] = useState("");
  const [rules5, setRules5] = useState("");
  const [firstPrize, setFirstPrize] = useState("");
  const [secondPrize, setSecondPrize] = useState("");
  // const [otherPrize, setOtherPrize] = useState("");

  const createTournamnent = (e) => {
    e.preventDefault();

    const updateObject = {
      tournamentName: nameofTournmanet,
      tournamnetStart: startDate,
      tournamnetfee: fees,

      tournamentRulesOne: rules,
      tournamentRulesTwo: rules1,
      tournamentRulesThree: rules2,
      tournamentRulesFour: rules3,
      tournamentRulesFive: rules4,
      tournamentRulesSix: rules5,
      tournamentFirstPrize: firstPrize,
      tournamentSecondPrize: secondPrize,
      tournamentStatus: "active",
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
          alert("Successfully Updated");
          navigate("/");
        }
      });
  };

  return (
    <div>
      <form>
        <h3>Create Tournament for {indoorName}</h3>
        <img src={profile} alt="" className="profile" />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setbanner(e.target.files[0])}
        />
        <br />
        <br />
        <input value={indoorName} readOnly className="w-100" />
        <br />
        <br />
        <input
          placeholder="Enter Tournament Name"
          onChange={(e) => setNameofTournmanet(e.target.value)}
          className="w-100"
        />
        <br />
        <br />
        <input
          placeholder="Tournamnet Starting Date"
          onChange={(e) => setStartDate(e.target.value)}
          className="w-100"
        />
        <br />
        <br />
        <input
          placeholder="Enter Team Registration Fees"
          onChange={(e) => setfees(e.target.value)}
          className="w-100"
        />
        <br />
        <br />
        <input
          placeholder="First Prize"
          onChange={(e) => setFirstPrize(e.target.value)}
          className="w-100"
        />
        <br />
        <br />
        <input
          placeholder="Second Prize"
          onChange={(e) => setSecondPrize(e.target.value)}
          className="w-100"
        />
        <br />
        <br />
        {/* <input
          placeholder="Other Prize"
          onChange={(e) => setOtherPrize(e.target.value)}
          className="w-100"
        />
        <br />
        <br /> */}

        <input
          placeholder="Enter Rules"
          onChange={(e) => setRules(e.target.value)}
          className="w-100"
        />
        <br />
        <br />
        <input
          placeholder="Enter Rules"
          onChange={(e) => setRules1(e.target.value)}
          className="w-100"
        />
        <br />
        <br />
        <input
          placeholder="Enter Rules"
          onChange={(e) => setRules2(e.target.value)}
          className="w-100"
        />
        <br />
        <br />
        <input
          placeholder="Enter Rules"
          onChange={(e) => setRules3(e.target.value)}
          className="w-100"
        />
        <br />
        <br />
        <input
          placeholder="Enter Rules"
          onChange={(e) => setRules4(e.target.value)}
          className="w-100"
        />
        <br />
        <br />
        <input
          placeholder="Enter Rules"
          onChange={(e) => setRules5(e.target.value)}
          className="w-100"
        />
        <br />
        <br />
        <button
          className="tournament-btn ps-3 pe-3 pt-1 pb-1"
          onClick={createTournamnent}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateTournament;
