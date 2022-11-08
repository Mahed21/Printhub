import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import UseAuth from "../Context/UseAuth";
import Marquee from "react-fast-marquee";
import IndoorList from "../IndoorList/IndoorList";
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

const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [availableDay, setAvailableDay] = useState("");
  const [availableTime, setAvailableTime] = useState("");
  const [venueName, setVenueName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [contact, setContact] = useState("");
  const [description, setdescription] = useState("");

  const { user } = UseAuth();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [indoorList, setIndoorList] = useState([]);
  useEffect(() => {
    fetch("https://efutsal.onrender.com/indoor")
      .then((res) => res.json())
      .then((data) => {
        const fetchIndoorList = data.data.filter(
          (datas) => datas.status === "active"
        );

        setIndoorList(fetchIndoorList);
      });
  }, []);

  //modal
  let subtitle;
  function openModal() {
    if (user.email) {
      setIsOpen(true);
    } else {
      navigate("/login");
    }
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  // const [TeamLoading, setTeamLoading] = useState(false);
  // useEffect(() => {
  //   fetch("https://efutsal.onrender.com/team")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const fetchTeamData = data.data.filter(
  //         (datas) => datas.email === user.email
  //       );

  //       if (fetchTeamData.length > 0) {
  //         setTeamLoading(true);
  //       } else {
  //         setTeamLoading(false);
  //       }
  //     });
  // }, [user.email]);
  const postOponant = (e) => {
    e.preventDefault();

    const teamList = {
      teamName: teamName,
      day: availableDay,
      time: availableTime,
      date: date,
      venue: venueName,
      contact: contact,
      description: description,
      email: user.email,
    };
    fetch(`https://efutsal.onrender.com/team`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(teamList),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.status === "success") {
          alert("Data collected Successfully");
          closeModal();
          navigate("/oponant");
        } else {
          alert(data.data);
        }
      });
  };

  return (
    <div className="home">
      {/* banner */}
      <div className="home_banner"></div>

      {/* indoor in sylhet */}

      <div className="mt-5 mb-4">
        <div className="title">
          <Marquee
            direction="right"
            speed={100}
            pauseOnClick={true}
            className="marquee mb-5"
          >
            <h3>Indoor in Sylhet</h3>
          </Marquee>
        </div>

        {/* all indoors */}
        <div className="row">
          {indoorList.map((list) => (
            <IndoorList list={list} key={list._id}></IndoorList>
          ))}
        </div>

        <div className="d-flex justify-content-evenly registerTeambtn p-5 mt-5">
          <h3 className="mt-3 me-3 registerbtnText">
            {" "}
            Register your team for a friendly match
          </h3>
          <div className="mt-3 mb-3">
            <button
              className="btn btn-primary mt-1 p-2 mb-4"
              onClick={openModal}
            >
              Add Your Team
            </button>
          </div>
        </div>

        {/* modal code  */}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form onSubmit={postOponant}>
            <div className="container available">
              <h5 className="mb-5 font-italic">Set your team for oponant</h5>
              <div>
                <input
                  placeholder="Team Name"
                  className="w-100 "
                  type="text"
                  required
                  onChange={(e) => setTeamName(e.target.value)}
                />
              </div>
              <br />
              <div>
                <input
                  placeholder="Day"
                  className="w-100"
                  type="text"
                  required
                  onChange={(e) => setAvailableDay(e.target.value)}
                />
              </div>
              <br />
              <div>
                <input
                  placeholder="Time"
                  className="w-100"
                  type="text"
                  required
                  onChange={(e) => setAvailableTime(e.target.value)}
                />
              </div>
              <br />
              <div>
                <input
                  placeholder="dd/mm/yy"
                  className="w-100"
                  type="text"
                  required
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <br />
              <div>
                <input
                  placeholder="Mention Indoor Name"
                  className="w-100"
                  type="text"
                  required
                  onChange={(e) => setVenueName(e.target.value)}
                />
              </div>
              <br />
              <div>
                <input
                  placeholder="Contact"
                  className="w-100 "
                  type="text"
                  required
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <br />
              <div>
                <input
                  placeholder="Description About the mtach"
                  className="w-100 "
                  type="text"
                  required
                  onChange={(e) => setdescription(e.target.value)}
                />
              </div>

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
        {/* modal code end */}
      </div>
    </div>
  );
};

export default Home;
