import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaLocationArrow, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({ footerBanner }) => {
  return (
    <div className="footer-banner-container">
      <div className="footer-container">
        <div className="top">
          <p>Nos puedes encontrar en:</p>
          <div className="icons">
          <a href="https://www.facebook.com/omifarmcolombia" target="_blank">
            <FaFacebookF style={{ fontSize: "30px" }} />
          </a>
          <a
            href="https://www.instagram.com/omifarmcolombia/?hl=en"
            target="_blank"
          >
            <FaInstagram style={{ fontSize: "30px" }} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCjYwPwS51DaDpic_bl68uoA"
            target="_blank"
          >
            <FaYoutube style={{ fontSize: "30px" }} />
          </a>
          </div>
          <p>
            <FaLocationArrow /> Carrera 12 No. 7B - 20 Tunja, Colombia
          </p>
          <p> <FaPhoneAlt/> 312 3809599</p>
          <p> <FaEnvelope /> omifarmcolombiasas@gmail.com</p>
          
          <p className="derechos">2022 OMI FARM Colombia Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
