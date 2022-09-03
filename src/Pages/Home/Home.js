import React, { useEffect, useState } from "react";
import "./Home.css";
import heaven from "../../image/sports_heaven.jpg"
import arena from "../../image/arena.jpg"
import crossbar from "../../image/crossbar.png"
import free_kick from "../../image/free_kick.jpg"
import kick_off from "../../image/kick_off_chondipul.jpg"

const Home = () => {
  return (
    <div>
      <div className="home_banner">
        <a href="#" className="btn d-flex justify-content-center">Join Turnament</a>

      </div>
      <div className="container mt-5 mb-4">
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
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="#" className="btn btn-primary">Check Availability</a>
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
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="#" className="btn btn-primary">Check Availability</a>
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
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="#" className="btn btn-primary">Check Availability</a>
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
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="#" className="btn btn-primary">Check Availability</a>
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
                  <img src={kick_off} className="img-fluid rounded-start h-60" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Kick Off</h5>
                    <p className="card-text">Location: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="#" className="btn btn-primary">Check Availability</a>
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
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Location: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a href="#" className="btn btn-primary">Check Availability</a>
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
