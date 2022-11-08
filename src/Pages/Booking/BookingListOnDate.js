import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import DisplayBookingList from "./DisplayBookingList";
import "./booking.css";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../Context/UseAuth";
import moment from "moment";
import { TimePicker } from "antd";
import Marquee from "react-fast-marquee";

const BookingListOnDate = () => {
  const [checkedBook, setcheckedBook] = useState({});
  const format = "HH";
  const { user } = UseAuth();
  const location = useLocation();
  const { date, venue } = location.state;
  const [bookingList, setBookingList] = useState([]);
  const [time, setTime] = useState("");
  const nameRef = useRef();
  let email = user.email;

  // console.log(email);
  const { isLoading, error, data, refetch } = useQuery(["repoData"], () =>
    fetch("https://efutsal.onrender.com/booking").then((res) =>
      res.json().then((data) => {
        const filterData = data.data.filter(
          (datas) => datas.date === date && datas.venue === venue
        );
        setBookingList(filterData);
      })
    )
  );

  const timeHandle = (e) => {
    let hour = moment(e._d).format("h a");
    setTime(hour);
  };

  const confirmBooking = (e) => {
    e.preventDefault();

    console.log(time);
    if (!time) {
      alert("Select Time");
      setTime("");
    } else {
      if (
        time === "2 am" ||
        time === "3 am" ||
        time === "4 am" ||
        time === "5 am" ||
        time === "6 am" ||
        time === "6 am"
      ) {
        alert("The time you want to booked thsese is closing time");
      } else {
        let name = nameRef.current.value;

        const getFilterData = bookingList.filter((data) => data.time === time);
        console.log(getFilterData.length);

        if (getFilterData.length) {
          alert(`${time} already booked`);
        } else {
          setcheckedBook("");
          const newUser = { name, time, date, email, venue };
          fetch("https://efutsal.onrender.com/booking", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "success") {
                refetch();
                alert("successfully collected");
              } else {
                alert(data.data);
              }
            });
        }
      }
    }
  };

  return (
    <div className="mt-5 booking ps-2 pe-2">
      <Marquee
        direction="right"
        speed={100}
        pauseOnClick={true}
        className="marquee mb-5"
      >
        <h3>Closed time 2AM to 7AM</h3>
      </Marquee>
      <div className="mb-3">
        <h5 className="text-center">{venue}</h5>
        <h5 className="text-center">{date}</h5>
      </div>

      <h1>Booked Time List</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Time Slot</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">Indoor</th>
          </tr>
        </thead>
        <tbody>
          {bookingList.map((data) => (
            <DisplayBookingList data={data} key={data._id}></DisplayBookingList>
          ))}
        </tbody>
      </table>

      <form onSubmit={confirmBooking}>
        <div className="d-flex justify-content-center p-5 align-items-center">
          <div className="login p-5">
            <div className="d-flex justify-content-around mb-3">
              <h6 className="signup ps-4 pe-4 pt-3 pb-3 text-center">
                Book the free slot on {date}
              </h6>
            </div>

            <input
              placeholder="Enter Full Name"
              type="text"
              className="mt-4 p-1 w-100 booking_name"
              ref={nameRef}
              required
            />
            <br />
            <br />

            <div>
              <TimePicker
                format={format}
                use12Hours
                onChange={timeHandle}
                required
              />
            </div>
            <br />
            <br />
            <input type="submit" value="Book" className="login-btn p-2" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingListOnDate;
