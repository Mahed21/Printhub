import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import banner from "../../image/banner.png";
import banner1 from "../../image/banner1.png";
import banner2 from "../../image/banner2.png";
import card from "../../image/card1.jpg";
import card1 from "../../image/card2.jpg";
import card2 from "../../image/card3.jpg";
import printing from "../../image/printing1.png";
import printing1 from "../../image/printing-2.png";
import printing2 from "../../image/printing-3.png";
import printing3 from "../../image/printing-4.png";

const Home = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 972);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className="mb-5">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={banner} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <button className="banner-btn ps-1 pe-1 pt-2 pb-2">
                More Details
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img src={banner1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <button className="banner-btn ps-1 pe-1 pt-2 pb-2">
                More Details
              </button>
            </div>
          </div>
          <div class="carousel-item">
            <img src={banner2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <button className="banner-btn ps-1 pe-1 pt-2 pb-2">
                More Details
              </button>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container mt-5">
        {/* first card */}
        <div className="row row-cols-lg-2 mb-3">
          <img src={card2} alt="" />
          <div>
            <p className="mt-lg-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <button className="pb-2 pt-2 ps-3 pe-3 mt-4 banner-btn">
              View Printing Shop
            </button>
          </div>
        </div>

        {/* some product of first card */}
        <h3 className="text-center mb-3">Some Customize Design</h3>
        <div className="row row-cols-lg-4 row-cols-md-2 mb-3">
          <div>
            <div className="print-product h-100 p-4">
              <img src={printing} alt="" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="print-product h-100 p-4">
              <img src={printing1} alt="" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="print-product h-100">
              <img src={printing2} alt="" className="img-fluid" />
            </div>
          </div>
          <div>
            <div className="print-product h-100 pt-4">
              <img src={printing3} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        {/* second card */}
        {isDesktop ? (
          <div>
            <div className="row row-cols-lg-2 mb-3">
              <div>
                <p className="mt-lg-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <button className="pb-2 pt-2 ps-3 pe-3 mt-4 banner-btn mb-3">
                  View Trending Shop
                </button>
              </div>
              <img src={card1} alt="" />
            </div>
          </div>
        ) : (
          <div>
            <div className="row row-cols-lg-2 mb-3">
              <img src={card1} alt="" />
              <div>
                <p className="mt-lg-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <button className="pb-2 pt-2 ps-3 pe-3 mt-4 banner-btn mb-3">
                  View Trending Shop
                </button>
              </div>
            </div>
          </div>
        )}

        {/* third card */}
        <div className="row row-cols-lg-2">
          <img src={card2} alt="" />
          <div>
            <p className="mt-lg-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <button className="pb-2 pt-2 ps-3 pe-3 mt-4 banner-btn">
              Most Discount Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
