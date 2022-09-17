import React from "react";

const DisplayBookingList = (props) => {
  const { time, date, indoor, name, email } = props.data;
  return (
    <tr>
      <th>1</th>
      <td>{date}</td>
      <td>{time}</td>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
};

export default DisplayBookingList;
