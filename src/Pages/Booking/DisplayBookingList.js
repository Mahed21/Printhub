import React from "react";

const DisplayBookingList = (props) => {
  const { time, date, venue, name, email } = props.data;
  return (
    <tr>
      <td>{date}</td>
      <td>{time}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{venue}</td>
    </tr>
  );
};

export default DisplayBookingList;
