import { DatePicker } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "../Context/UseAuth";

const DisplayAllIndoor = (props) => {
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
      <div>
        <div className="mb-5 booking-card-info ps-2 pe-2 pb-3 pt-2">
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
    </div>
  );
};

export default DisplayAllIndoor;
