import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../tournament.css";
import { jsPDF } from "jspdf";
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
    };
    fetch(`http://localhost:5000/teamEntry`, {
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
          console.log(data.data._id);
          const doc = new jsPDF();

          doc.text(
            `You have Succesfully Registerd team in ${data.data.TournamnetName}`,
            10,
            10
          );
          doc.text(`Team Name ${data.data.RegisterdteamName}`, 10, 20);
          doc.text(`Venue: ${data.data.HostindoorName}`, 10, 30);
          doc.text(`Confimation Secret Key ${data.data._id}`, 10, 40);
          doc.text(
            `Dont Share Secret Key with anyoune fixture will update in website`,
            10,
            50
          );
          doc.save("eFutsal.pdf");
        }
      });
  };

  return (
    <div>
      <div className="card mb-3 display-tournamnet container">
        <div className="row g-0 ">
          <div className="col-md-6">
            <img
              src={tournamentBanner}
              alt=""
              class="img-fluid rounded-start h-100"
            />
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h5 className="mb-2">
                Register your team in {tournamentName} at {indoorName}
              </h5>
              <h5 className="mb-2">{tournamentName}</h5>
              <h5 className="mb-2 ">
                Start Date:
                <span className=" dispTournament-text">{tournamnetStart}</span>
              </h5>

              <h5>
                Registartion Fees :
                <span className="dispTournament-text">{tournamnetfee} TK</span>
              </h5>
              <h5>
                First Prize:
                <span className="dispTournament-text">
                  {tournamentFirstPrize} TK
                </span>
              </h5>
              <h5>
                second Prize:
                <span className="dispTournament-text">
                  {tournamentSecondPrize} TK
                </span>
              </h5>

              <div>
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
              </div>

              <div className="d-flex justify-content-end">
                <button
                  className="tournament-btn ps-4 pe-4 pt-2 pb-2 mt-3"
                  onClick={openModal}
                >
                  Register A Team
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
