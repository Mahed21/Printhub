import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../image/profile.jpg";
import UseAuth from "../Context/UseAuth";
import "./Indoor.css";

const IndoorAdd = () => {
  const { user } = UseAuth();
  let navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const PostIndoor = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=6e348ee5df7e5ac0e70738f8b8b2f9f0`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const indoorList = {
            image: img,
            indoorName: name,
            address: address,
            email: user.email,
          };
          fetch(`https://efutsal.onrender.com/indoor`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(indoorList),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "success") {
                alert("request of adding indoor has been submitted");

                setName("");
                navigate("/");
              } else {
                alert(data.data);
              }
            });
        }
      });
  };

  return (
    <div className="indoorAdd d-flex justify-content-center align-items-center">
      <div className="addIndoorCard p-5">
        <form className="ms-5 mt-5">
          <div className="mb-2">
            <img src={profile} alt="" className="profile" />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <input
            Placeholder="Enter Indoor Name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <input
            Placeholder="Enter Indoor Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <br />
          <br />
          <button
            className="btn btn-primary"
            onClick={PostIndoor}
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default IndoorAdd;
