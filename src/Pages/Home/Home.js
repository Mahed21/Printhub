import React, { useEffect, useState } from "react";
import "./Home.css";
import heaven from "../../image/sports_heaven.jpg"
import arena from "../../image/arena.jpg"
import crossbar from "../../image/crossbar.png"
import free_kick from "../../image/free_kick.jpg"
import kick_off from "../../image/kickoff.jpg"
import goal from "../../image/goal.jpg"
import tournament from "../../image/tournament.jpg"

const Home = () => {
  return (
    <div>
      <div className="home_banner">

        <div className="row ">
          <div className="col-lg-1">
          </div>
          <div className="col-lg-10 createTurnament p-5 mt-5 rounded d-flex justify-content-center">
            <div className="">
              <a href="#" className="btn btn-primary mt-1">Check Availability</a>
            </div>
          </div>
          <div className="col-lg-1">

          </div>

        </div>

        <div className="row">
          <div className="col-lg-1">
          </div>
          <div className="col-lg-10 createTurnament p-5 mt-5 rounded d-flex justify-content-center">
            <div className="">
              <a href="#" className="btn btn-primary mt-1">Check Availability</a>
            </div>
          </div>
          <div className="col-lg-1">

          </div>

        </div>


      </div>
      <div className="container mt-2 mb-4">
        <div className="title">
          <h1>Indoor in Sylhet</h1>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6">
            <div className="card mb-3  card_design">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={heaven} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Sports Heaven</h5>
                    <h6 className="mb-2">Location:</h6>
                    <div class="mapouter">
                      <div class="gmap_canvas">
                        <iframe width="100%" height="100vh" src="https://maps.google.com/maps?q=sports%20heaven%20sylhet&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                      </div>
                    </div>
                    <a href="#" className="btn btn-primary mt-1">Check Availability</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 ml-5">
            <div className="card mb-3  card_design">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={arena} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Futsal Arena</h5>
                    <h6 className="mb-2">Location:</h6>
                    <div class="mapouter">
                      <div class="gmap_canvas">
                        <iframe width="100%" height="100vh" src="https://maps.google.com/maps?q=Futsal%20Arena,%20VRQX+3MP,%20Technical%20Rd,%20Sylhet&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                      </div>
                    </div>
                    <a href="#" className="btn btn-primary mt-1">Check Availability</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="card mb-3  card_design">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={crossbar} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Crossbar</h5>
                    <h6 className="mb-2">Location:</h6>
                    <div class="mapouter">
                      <div class="gmap_canvas">
                        <iframe width="100%" height="100vh" src="https://maps.google.com/maps?q=Crossbar,%20Sheikh%20Akram,%20Furkan%20Ullah%20Rd,%20Shibganj%203100&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                      </div>
                    </div>
                    <a href="#" className="btn btn-primary mt-1">Check Availability</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 ml-5">
            <div className="card mb-3  card_design">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={free_kick} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Free Kick</h5>
                    <h6 className="mb-2">Location:</h6>
                    <div class="mapouter">
                      <div class="gmap_canvas">
                        <iframe width="100%" height="100vh" src="https://maps.google.com/maps?q=Free%20Kick,%20Sylhet&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                      </div>
                    </div>
                    <a href="#" className="btn btn-primary mt-1">Check Availability</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card mb-3  card_design">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={kick_off} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Kick Off</h5>
                    <h6 className="mb-1">Location:</h6>
                    <div class="mapouter">
                      <div class="gmap_canvas">
                        <iframe width="100%" height="100vh" src="https://maps.google.com/maps?q=VV96+CJQ,%20Pirozpur%20baypass,%203100&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                      </div>
                    </div>
                    <a href="#" className="btn btn-primary mt-1">Check Availability</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 ml-5">
            <div className="card mb-3  card_design">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={goal} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">GOAL</h5>
                    <h6 className="mb-1">Location:</h6>
                    <div class="mapouter">
                      <div class="gmap_canvas">
                        <iframe width="100%" height="100vh" src="https://maps.google.com/maps?q=goal%20sylhet&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                      </div>
                    </div>
                    <a href="#" className="btn btn-primary mt-1">Check Availability</a>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>

    </div>



  );
};

export default Home;
