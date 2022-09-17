import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DisplayBookingList from "./DisplayBookingList";
import "./booking.css";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../Context/UseAuth";

const BookingListOnDate = () => {
  const { user } = UseAuth();
  const location = useLocation();
  const { date, venue } = location.state;
  const [bookingList, setBookingList] = useState([]);
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  let email = user.email;
  console.log(email);
  const { isLoading, error, data, refetch } = useQuery(["repoData"], () =>
    fetch("http://localhost:5000/booking").then((res) =>
      res.json().then((data) => {
        const filterData = data.filter(
          (datas) => datas.date === date && datas.venue === venue
        );
        setBookingList(filterData);
      })
    )
  );

  // useEffect(() => {
  //   fetch("http://localhost:5000/booking")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const filterData = data.filter((datas) => datas.date === date);
  //       setBookingList(filterData);
  //     });
  // }, []);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const confirmBooking = (e) => {
    e.preventDefault();
    console.log(time);
    console.log(name);
    const newUser = { name, time, date, email, venue };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          refetch();
          alert("successfully collected");
        }
      });
  };

  return (
    <div className="container mt-5 booking">
      <div className="mb-3">
        <h5 className="text-center">{venue}</h5>
        <h5 className="text-center">{date}</h5>
      </div>
      <h1>Booked Time List</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">serial</th>
            <th scope="col">Date</th>
            <th scope="col">Time Slot</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
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
                book the free slot on {date}
              </h6>
            </div>

            <input
              placeholder="Enter Full Name"
              type="text"
              className="mt-4 p-1 w-100"
              onBlur={handleName}
              required
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="hours AM/PM- hours AM/PM"
              onBlur={handleTime}
              required
            />
            <br />
            <br />
            <input type="submit" value="book" className="login-btn p-2" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingListOnDate;
