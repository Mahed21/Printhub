import React, { useEffect, useState } from "react";
import UseAuth from "../../Context/UseAuth";

const UpdatePlayerInfo = () => {
  const [indorName, setIndoorName] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [updatedScore, setUpdatedScore] = useState("");
  const [failResult, setFailResult] = useState("");
  const [sucess, setsucess] = useState("");
  const { user } = UseAuth();
  useEffect(() => {
    fetch("https://efutsal.onrender.com/indoorAdmin")
      .then((res) => res.json())
      .then((data) => {
        const getIndoorAdminData = data.data.filter(
          (datas) => user.email === datas.email
        );

        if (getIndoorAdminData.length > 0) {
          setIndoorName(getIndoorAdminData[0].indoorName);
        }
      });
  }, [user.email]);

  const updatePlayerScore = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/ranking")
      .then((res) => res.json())
      .then((data) => {
        const getPreviousRanking = data.data.filter(
          (datas) => searchEmail === datas.playerEmail
        );
        if (getPreviousRanking.length === 0) {
          setFailResult(
            "You didnt register First You have to register for ranking"
          );
          setsucess("");
        } else {
          const updatePlayerPro = {
            totalMatch: getPreviousRanking[0].totalMatch + 1,
            score: getPreviousRanking[0].score + parseInt(updatedScore),
          };
          fetch(`http://localhost:5000/ranking/${getPreviousRanking[0]._id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatePlayerPro),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "success") {
                setsucess("Player score and match is updated");
                setFailResult("");
              }
            });
        }
      });
  };
  return (
    <div>
      <h5 className="text-success text-center">{sucess}</h5>
      <h5 className="text-danger text-center">{failResult}</h5>
      <div class="d-flex justify-content-center register_for_ranking mt-5">
        <div class="card w-50 ">
          <div class="card-body">
            <h5 class="card-title text-center">Update Player Ranking;</h5>
            <form onSubmit={updatePlayerScore}>
              <div class="form-group">
                <label for="exampleFormControlInput1">Indoor Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={indorName}
                  readOnly
                />
                <span class="border"></span>
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="type player email address"
                  onBlur={(e) => setSearchEmail(e.target.value)}
                />
                <span class="border"></span>
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">
                  Total scored in these match
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  onBlur={(e) => setUpdatedScore(e.target.value)}
                  required
                />
                <span class="border"></span>
              </div>
              <input
                type="submit"
                value="submit"
                className="btn btn-primary w-100"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePlayerInfo;
