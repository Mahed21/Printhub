import React, { useEffect, useState } from "react";
import "./Home.css";
import heaven from "../../image/sports_heaven.jpg";
import arena from "../../image/arena.jpg";
import crossbar from "../../image/crossbar.png";
import free_kick from "../../image/free_kick.jpg";
import kick_off from "../../image/kickoff.jpg";
import goal from "../../image/goal.jpg";
import tournament from "../../image/tournament.jpg";
import { Link, useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import moment from "moment";
import UseAuth from "../Context/UseAuth";
import Marquee from "react-fast-marquee";
import IndoorList from "../IndoorList/IndoorList";

const Home = () => {
  const { user } = UseAuth();
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [indoorList, setIndoorList] = useState([]);
  fetch("http://localhost:5000/indoor")
    .then((res) => res.json())
    .then((data) => setIndoorList(data));

  const handleDate = (e) => {
    setDate(moment(e._d).format("MMM Do YY"));
  };

  return (
    <div>
      {/* banner */}
      <div className="home_banner"></div>

      {/* indoor in sylhet */}
      <div className="container mt-2 mb-4">
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

        <div className="row">
          {indoorList.map((list) => (
            <IndoorList list={list} key={list._id}></IndoorList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
