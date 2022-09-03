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
      <div className="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="card mb-3  card_design">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={heaven} class="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Sports Heaven</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 ml-5">
            <div class="card mb-3  card_design">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={arena} class="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Futsal Arena</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="card mb-3  card_design">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={crossbar} class="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Crossbar</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 ml-5">
            <div class="card mb-3  card_design">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={free_kick} class="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Free Kick</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="card mb-3  card_design">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={kick_off} class="img-fluid rounded-start h-60" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Kick Off</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 ml-5">
            <div class="card mb-3  card_design">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={arena} class="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
