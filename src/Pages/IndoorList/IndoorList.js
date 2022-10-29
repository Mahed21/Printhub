import { DatePicker } from "antd";
import React, { useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import UseAuth from "../Context/UseAuth";

const IndoorList = (props) => {
  const { user } = UseAuth();
  let navigate = useNavigate();
  const { indoorName, image, _id } = props.list;
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
    <div className="col-lg-6">
      <div className="card mb-3  card_design">
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
              <h6 className="mb-1">Location:</h6>
              {/* <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="100%"
                    height="100vh"
                    src="https://maps.google.com/maps?q=VV96+CJQ,%20Pirozpur%20baypass,%203100&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div> */}
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
      </div>
    </div>
  );
};

export default IndoorList;
