import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../tournament.css";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  },
};

const DisplayeTournament = (props) => {
  let navigate = useNavigate();
  const {
    indoorName,
    tournamentName,
    tournamnetStart,
    tournamnetfee,
    tournamentBanner,
    tournamentStatus,
    tournamentRulesOne,
    tournamentRulesTwo,
    tournamentRulesThree,
    tournamentRulesFour,
    tournamentRulesFive,
    tournamentRulesSix,
    tournamentFirstPrize,
    tournamentSecondPrize,
    _id,
    email,
  } = props.data;

  //modal
  const [modalIsOpen, setIsOpen] = useState(false);
  const [nameOfTeam, setNameofTeam] = useState("");
  const [teamEmail, setTeamEmail] = useState("");
  const [teamContact, setTeamContat] = useState("");
  const [teamAddress, setTeamAdress] = useState("");
  const [Player, setPlayer] = useState("");
  const [Player1, setPlayer1] = useState("");
  const [Player2, setPlayer2] = useState("");
  const [Player3, setPlayer3] = useState("");
  const [Player4, setPlayer4] = useState("");
  const [Player5, setPlayer5] = useState("");
  const [Player6, setPlayer6] = useState("");

  let subtitle;
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  // modal end
  const DetailsTournamnet = (e) => {
    e.preventDefault();

    const updateObject = {
      RegisterdteamName: nameOfTeam,
      RegisterdTeamEmail: teamEmail,
      RegisterdteamContact: teamContact,
      RegisterdteamAdress: teamAddress,
      indoorAdminEmail: email,
      HostindoorName: indoorName,
      TournamnetName: tournamentName,
      PlayerNameOne: Player,
      PlayerNameTwo: Player1,
      PlayerNameThree: Player2,
      PlayerNameFour: Player3,
      PlayerNameFive: Player4,
      PlayerNameSix: Player5,
      PlayerNameSeven: Player6,
    };
    fetch(`https://efutsal.onrender.com/teamEntry`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateObject),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert("Successfully Registerd Team");
          closeModal();
          //console.log(data.data._id);
          const doc = new jsPDF();

          doc.text(
            `You have Succesfully Registerd team in ${data.data.TournamnetName}`,
            10,
            10
          );
          doc.text(`Team Name ${data.data.RegisterdteamName}`, 10, 20);
          doc.text(`Venue: ${data.data.HostindoorName}`, 10, 30);
          // doc.text(`Confimation Secret Key ${data.data._id}`, 10, 40);
          // doc.text(
          //   `Dont Share Secret Key with anyoune fixture will update in website`,
          //   10,
          //   50
          // );
          // autoTable(doc, { html: "#my-table" });
          autoTable(doc, {
            margin: { top: 40 },
            head: [["Serial", "Player Name"]],
            body: [
              ["1", data.data.PlayerNameOne],
              ["2", data.data.PlayerNameTwo],
              ["3", data.data.PlayerNameThree],
              ["4", data.data.PlayerNameFour],
              ["5", data.data.PlayerNameFive],
              ["6", data.data.PlayerNameSix],
              ["7", data.data.PlayerNameSeven],
              // ...
            ],
          });
          doc.save("eFutsal.pdf");
        }
      });
  };
  const downloadRoles = () => {
    const doc = new jsPDF();

    doc.text(`Tournament Rules`, 10, 10);
    doc.text(`Team Name ${tournamentRulesOne}`, 10, 20);
    doc.text(`1: ${tournamentRulesTwo}`, 10, 30);
    doc.text(`2: ${tournamentRulesTwo}`, 10, 40);
    doc.text(`3: ${tournamentRulesThree}`, 10, 50);
    doc.text(`4: ${tournamentRulesFour}`, 10, 60);
    doc.text(`5: ${tournamentRulesFive}`, 10, 70);
    doc.save("eFutsalRules.pdf");
  };

  const ViewAllTeam = (email) => {
    navigate("/viewAllTeamSquad", { state: { email: email } });
  };

  return (
    <div className=" pt-5 pb-5 ">
      <div className="card mb-3 display-tournamnet rounded container">
        {/* <div className="">
          <img
            src={tournamentBanner}
            alt=""
            class="img-fluid h-100  w-100 rounded"
          />
        </div> */}

        <div className="">
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

            {/* <div>
                <h5>Tournament Rules:</h5>
                <h5 className="dispTournament-text">1: {tournamentRulesOne}</h5>
                <h5 className="dispTournament-text">2: {tournamentRulesTwo}</h5>
                <h5 className="dispTournament-text">
                  3: {tournamentRulesThree}
                </h5>
                <h5 className="dispTournament-text">
                  4: {tournamentRulesFour}
                </h5>
                <h5 className="dispTournament-text">
                  5: {tournamentRulesFive}
                </h5>
              </div> */}

            <div>
              <div>
                <button
                  className="indoorlist-btn ps-4 pe-4 pt-2 pb-2 mt-3 me-3 w-100"
                  onClick={downloadRoles}
                >
                  Download All Rules
                </button>
              </div>
              <div>
                <button
                  className="indoorlist-btn  ps-4 pe-4 pt-2 pb-2 mt-3 me-3 w-100"
                  onClick={openModal}
                >
                  Register Your Team
                </button>
              </div>
              <div>
                <button
                  className="indoorlist-btn  ps-4 pe-4 pt-2 pb-2 mt-3 w-100"
                  onClick={() => ViewAllTeam(email)}
                >
                  View All Registerd Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={DetailsTournamnet}>
          <div className="container available">
            <h5 className="mb-5 font-italic">Register a Team</h5>

            <br />
            <div>
              <input
                placeholder="Team Name"
                className="w-100"
                type="text"
                onChange={(e) => setNameofTeam(e.target.value)}
                required
              />
            </div>
            <br />
            <div>
              <input
                placeholder="Email"
                className="w-100"
                type="text"
                onChange={(e) => setTeamEmail(e.target.value)}
                required
              />
            </div>
            <br />
            <div>
              <input
                placeholder="Contact"
                className="w-100"
                type="text"
                required
                onChange={(e) => setTeamContat(e.target.value)}
              />
            </div>
            <br />
            <div>
              <input
                placeholder="Address"
                className="w-100"
                type="text"
                required
                onChange={(e) => setTeamAdress(e.target.value)}
              />
            </div>
            <br />
            <div>
              <input
                placeholder="Player 1"
                className="w-100"
                type="text"
                required
                onChange={(e) => setPlayer(e.target.value)}
              />
            </div>
            <br />
            <div>
              <input
                placeholder="Player 2"
                className="w-100"
                type="text"
                required
                onChange={(e) => setPlayer1(e.target.value)}
              />
            </div>
            <br />
            <div>
              <input
                placeholder="Player 3"
                className="w-100"
                type="text"
                required
                onChange={(e) => setPlayer2(e.target.value)}
              />
            </div>
            <br />
            <div>
              <input
                placeholder="Player 4"
                className="w-100"
                type="text"
                required
                onChange={(e) => setPlayer3(e.target.value)}
              />
            </div>
            <br />
            <div>
              <input
                placeholder="Player 5"
                className="w-100"
                type="text"
                required
                onChange={(e) => setPlayer4(e.target.value)}
              />
            </div>
            <br />
            <div>
              <input
                placeholder="Player 6"
                className="w-100"
                type="text"
                required
                onChange={(e) => setPlayer5(e.target.value)}
              />
            </div>
            <br />
            <div>
              <input
                placeholder="Player 7"
                className="w-100"
                type="text"
                required
                onChange={(e) => setPlayer6(e.target.value)}
              />
            </div>

            <br />
            <br />
            <div className="d-flex justify-content-end mt-3">
              <button className="cancel-btn me-3" onClick={closeModal}>
                cancel
              </button>
              <input type="submit" value="save" className="save-btn" />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default DisplayeTournament;
