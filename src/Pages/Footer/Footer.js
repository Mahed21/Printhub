import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faHome,
  faBlog,
  faContactCard,
  faVoicemail,
  faMobileRetro,
  faSignIn,
  faEnvelopeOpenText,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="mt-5">
      {" "}
      <div className="footer pt-5 pb-5">
        <div className="container">
          <div className="row row-cols-lg-4">
            <div className="footer-col mb-3">
              <h4 className="footer-head mb-4">Address</h4>
              <p>
                {" "}
                <FontAwesomeIcon
                  icon={faEnvelopeOpenText}
                  className="me-2 icon"
                />{" "}
                efutsal255@gmail.com
              </p>
              <p>
                {" "}
                <FontAwesomeIcon
                  icon={faMobileRetro}
                  className="me-2 icon"
                />{" "}
                +8801759704872
              </p>
              <div className="mt-5">
                <i class="fab fa-facebook p-2 me-2"></i>
                <i class="fab fa-twitter p-2 me-2"></i>
                <i class="fab fa-instagram p-2 me-2"></i>
                <i class="fab fa-youtube p-2"></i>
              </div>
            </div>
            <div className="footer-col mb-3">
              <h4 className="footer-head mb-4">Useful Links</h4>
              <p>
                <FontAwesomeIcon icon={faHome} className="me-2 icon" /> Home
              </p>
              <p>
                {" "}
                <FontAwesomeIcon icon={faBlog} className="me-2 icon" /> Blog
              </p>
              <p>
                <FontAwesomeIcon icon={faContactCard} className="me-2 icon" />{" "}
                Contact
              </p>

              <p>
                <FontAwesomeIcon icon={faSignIn} className="me-2 icon" /> Login
              </p>
              <p>
                <FontAwesomeIcon icon={faSignIn} className="me-2 icon" />{" "}
                Register
              </p>
            </div>
            <div className="footer-col mb-3">
              <h4 className="footer-head mb-4">Find Oponant</h4>
              <p>Book Indoor</p>
              <p>Create Tournament</p>
              <p>Add Indoor</p>
              <p>Iive update</p>
              <p>About Us</p>
            </div>
            <div className="footer-col mb-3">
              <h4 className="footer-head mb-4">Our Newsletter</h4>
              <div className="footer-input">
                <input placeholder="Your Email Id " />
                <input
                  placeholder="Subscribe"
                  className="mt-2 newsletter-input"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-end p-4 d-flex justify-content-center">
          <p>
            Copyright{" "}
            <FontAwesomeIcon icon={faCopyright} className="icon mt-1" /> 2022
            printup
          </p>
        </div>
      </div>
      <footer>
        <h3>Football Team Name</h3>
        <p>Address, City, State</p>
        <p>Phone: (123) 456-7890</p>
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
      </footer>
    </div>
  );
};

export default Footer;
