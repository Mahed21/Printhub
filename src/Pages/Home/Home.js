import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import shirt from "../../image/ti-shirt.png";
import mug from "../../image/mug.png";
import offer from "../../image/offer.png";

const Home = () => {
  return (
    <div className="mb-5">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={shirt} className="w-100 h-25 image" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={mug} class="d-block w-100 h-50 image" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={offer} class="d-block w-100 h-50 image" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
