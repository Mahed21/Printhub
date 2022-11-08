import React from "react";
import { useState } from "react";
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

const DisplayAllOppnant = (props) => {
  const [opponatTeam, setOpponatTeam] = useState("");
  const [opponantContact, setopponantContact] = useState("");

  //modal
  const [modalIsOpen, setIsOpen] = useState(false);

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
  //modal end

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
    _id,
  } = props.data;

  const updateOponant = (id) => {
    console.log(id);

    const updateOponantInfo = {
      oponant: opponatTeam,
      opponantContact: opponantContact,
    };
    fetch(`https://efutsal.onrender.com/team/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateOponantInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert(`Challange sent to team ${teamName}`);
          closeModal();
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
        <button className="btn btn-primary" onClick={openModal}>
          Challange
        </button>
      </td>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateOponant(_id);
          }}
        >
          <div className="container available">
            <h5 className="mb-5 font-italic">Set your team for oponant</h5>
            <div>
              <input
                placeholder="Team Name"
                className="w-100 "
                type="text"
                required
                onChange={(e) => setOpponatTeam(e.target.value)}
              />
            </div>
            <br />
            <div>
              <input
                placeholder="Contact Number"
                className="w-100 "
                type="text"
                required
                onChange={(e) => setopponantContact(e.target.value)}
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
    </tr>
  );
};

export default DisplayAllOppnant;
