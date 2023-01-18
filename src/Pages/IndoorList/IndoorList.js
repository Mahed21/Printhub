import { DatePicker } from "antd";
import React, { useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import UseAuth from "../Context/UseAuth";

const IndoorList = (props) => {
  const { user } = UseAuth();
  let navigate = useNavigate();
  const { indoorName, image, _id, address } = props.list;
  const [date, setDate] = useState();
  const handleDate = (e) => {
    setDate(moment(e._d).format("MMM Do YY"));
  };
  const moveBookingDetails = (venue) => {
    if (!user.emailVerified) {
      navigate("/login");
    } else if (!date) {
      alert("select date");
    } else {
      navigate("/bookingListOnDate", { state: { date: date, venue: venue } });
    }
  };

  return (
    <div>
      <div className="mb-5 booking-card-info ps-2 pe-2 pb-3 pt-2">
        {/* <div className="card mb-3  card_design">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={image}
              className="img-fluid rounded-start h-100 w-100"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{indoorName}</h5>
              <h5 className="card-title">Location: {address}</h5>
              <div className="mt-2 mb-2 datepicker">
                <DatePicker
                  style={{
                    cursor: "pointer",
                    fontSize: "17px",
                    border: "2px solid #0D6EFD",
                    //backgroundColor: "#0D6EFD",
                  }}
                  onChange={handleDate}
                ></DatePicker>
              </div>
              <button
                onClick={() => moveBookingDetails(indoorName)}
                className="btn btn-primary mt-1"
              >
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div> */}

        <div>
          <img
            src={image}
            className="img-fluid rounded-start card-image"
            alt="..."
          />
        </div>
        <div className="mt-3">
          <div>
            <h5 className="card-title">{indoorName}</h5>
            <h5 className="card-title">Location: {address}</h5>
            <div className="mt-2 mb-2 datepicker">
              <DatePicker
                style={{
                  cursor: "pointer",
                  fontSize: "17px",
                  border: "2px solid #0D6EFD",
                  //backgroundColor: "#0D6EFD",
                }}
                onChange={handleDate}
              ></DatePicker>
            </div>
            <div className="d-flex align-items-end">
              <button
                onClick={() => moveBookingDetails(indoorName)}
                className="indoorlist-btn mt-1 p-2 w-100"
              >
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndoorList;
