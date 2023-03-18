import React, { useEffect, useState } from "react";
import "./Home.css";
import { NavLink, useNavigate } from "react-router-dom";
import UseAuth from "../Context/UseAuth";
import Marquee from "react-fast-marquee";
import IndoorList from "../IndoorList/IndoorList";
import Modal from "react-modal";
import TournamentHomePage from "../Tournament/TournamnetInHomePage/TournamentHomePage";
import bannerImage from "../../image/banner/bannerImage.png";
import footballImage from "../../image/banner/football.png";
import challangeBanner from "../../image/tour3.png";
import { useSpring, animated } from "react-spring";

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
  const [isVisible, setIsVisible] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const leftAnimationProps = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(90%)" },
    config: { duration: 2000 },
    reverse: !isVisible,
    delay: 1000,
    immediate: !startAnimation,
  });
  const rightAnimationProps = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(0%)" },
    config: { duration: 2000 },
    reverse: !isVisible,
    delay: 1000,
    immediate: !startAnimation,
  });
  useEffect(() => {
    setStartAnimation(true);
    setIsVisible(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (isScrolled) {
      setIsVisible(true);
    }
  }, [isScrolled]);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setIsScrolled(true);
    }
  };

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
          alert("Data collected waite for admin aproval");
          closeModal();
        } else {
          alert(data.data);
        }
      });
  };
  const viewAllIndoor = () => {
    navigate("/viewAllIndoor");
  };
  const SelectIndoor = () => {
    navigate("/selectIndoor");
  };
  const selectIndoorForRank = (e) => {
    e.preventDefault();
    navigate("/selectIndoorforRanking");
  };
  return (
    <div className="home mt-5">
      {/* banner */}

      <div className="home_banner d-flex row">
        <div className="col-lg-4 footballImage">
          <animated.div style={leftAnimationProps}>
            <img src={footballImage} alt="" className="mt-3" />
          </animated.div>
        </div>
        <div className="col-lg-8 playerImage">
          <animated.div style={rightAnimationProps}>
            <img src={bannerImage} alt="" className=" w-75 mt-5 " />
          </animated.div>
        </div>
      </div>
      {/* tournament */}

      {/* end tournament */}
      {/* indoor in sylhet */}
      <div className=" row opponant-find p-5">
        <div className="col-lg-5">
          <div className="d-flex justify-content-center">
            <img src={challangeBanner} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-7 d-flex  justify-content-center align-items-center">
          <div
            className="
        "
          >
            <div>
              <div className="oponant-find-text me-5">
                <h1>READY FOR BATTLE !</h1>
                <h5 className="mb-1">
                  1. Give a challenge to find an opponent.
                </h5>
                <h5 className="mb-1">2. Wait for response.</h5>
                <h5 className="mb-1">3. Choose a suitable opponant</h5>
                <h5 className="mb-5">4. Lets Play.</h5>
                <h3 className="mt-3 me-3 registerbtnText">
                  {" "}
                  Register Your Team Now
                </h3>
                <div className="mt-3 mb-3 ">
                  <button
                    className="opponant-find-btn mt-1 p-2 mb-4 ps-5 pe-5 pt-2 pb-2 rounded"
                    onClick={openModal}
                  >
                    Add Your Team
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-4">
        <h3 className="indoorInSylhet mb-5 pt-3 pb-3 text-center">
          Running Tournament
        </h3>
      </div>
      <TournamentHomePage></TournamentHomePage>

      <div className="mt-5 mb-4">
        <h3 className="indoorInSylhet mb-5 pt-3 pb-3 text-center">
          Indoor In Sylhet
        </h3>
      </div>

      {/* all indoors */}
      <div class="">
        <div class="row">
          {indoorList.map((list) => (
            <IndoorList list={list} key={list._id}></IndoorList>
          ))}
        </div>
      </div>

      {/* <div className="container ">
        <div className="row row-cols-lg-4">
          {indoorList.map((list) => (
            <IndoorList list={list} key={list._id}></IndoorList>
          ))}
        </div>
      </div> */}
      {/* Ranking */}
      <div className=" row opponant-find p-5 mt-5">
        <div className="col-lg-5">
          <div className="d-flex justify-content-center">
            <img src={challangeBanner} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-7 d-flex  justify-content-center align-items-center">
          <div
            className="
        "
          >
            <div className="">
              <div className="oponant-find-text me-5">
                <h3>Register Your Name For Ranking!</h3>
                <h5 className="mb-1">
                  1. Register Your name If you love to played in indoor.
                </h5>
                <h5 className="mb-1">
                  2. Indoor Manager can keep track of your goals and matches.
                </h5>
                <h5 className="mb-1">
                  3. The ranking can be sorted by highest scoring goal.
                </h5>

                <div className="mt-3 mb-3 ">
                  <button
                    className="opponant-find-btn mt-1 p-2 mb-4 ps-5 pe-5 pt-2 pb-2 rounded"
                    onClick={SelectIndoor}
                  >
                    Register Your name
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* show ranking */}
      <div class="show_ranking_card mt-4 pt-3 pb-3">
        <div class="show_ranking_button-container">
          <button class="show_ranking_button" onClick={selectIndoorForRank}>
            Click Here see the ranking
          </button>
        </div>
      </div>

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
  );
};

export default Home;
