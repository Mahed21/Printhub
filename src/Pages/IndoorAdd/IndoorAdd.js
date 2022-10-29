import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../image/profile.jpg";
import "./Indoor.css";

const IndoorAdd = () => {
  let navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");

  const PostIndoor = (e) => {
    e.preventDefault();
    if (!name) {
      alert("indoor Name Required");
    } else {
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
            };
            fetch(`http://localhost:5000/indoor`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(indoorList),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  alert("Data inserted Successfully");
                  //console.log(data);
                  setName("");
                  navigate("/");
                }
              });
          }
        });
    }
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
          <button className="btn btn-primary" onClick={PostIndoor}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default IndoorAdd;
