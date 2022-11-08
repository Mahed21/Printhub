import React from "react";
import { useState } from "react";
import "./AdminDashBoard.css";

const DisplayRequestedIndoor = (props) => {
  const { afterUpdate } = props;
  const { image, indoorName, address, status, _id } = props.data;

  const changeStatus = (id) => {
    const updatestatus = {
      status: "active",
    };
    fetch(`https://efutsal.onrender.com/indoor/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatestatus),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          afterUpdate();
          alert("Successfully Updated");
        }
      });
  };
  const deleteIndoor = (id) => {
    fetch(`https://efutsal.onrender.com/indoor/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          afterUpdate();
          alert("Successfully deleted");
        }
      });
  };
  return (
    <div>
      <div class="card h-100">
        <img src={image} className="card-img-top h-100" alt="..." />
        <div class="card-body">
          <h5 class="card-title">IndoorName: {indoorName}</h5>
          <p class="card-text">Location: {address}</p>
          <div className="d-flex justify-content-between">
            <button
              className="dash-btn-status ps-3 pe-3 pt-1 pb-1"
              onClick={() => changeStatus(_id)}
            >
              {status}
            </button>
            <button
              className="dash-btn-del ps-3 pe-3 pt-1 pb-1"
              onClick={() => deleteIndoor(_id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayRequestedIndoor;
