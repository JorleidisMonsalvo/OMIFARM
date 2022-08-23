import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLocationArrow,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
//import a from "next/a";

const FooterBanner = ({ footerBanner }) => {
  return (
    <div className="footer-container">
      <p>
        <a href="https://www.facebook.com/omifarmcolombia" target='_blank'  rel="noreferrer">
          <FaFacebookF style={{fontSize: "25px"}} />
        </a>
        <a href="https://www.instagram.com/omifarmcolombia/?hl=en" target='_blank'  rel="noreferrer">
          <FaInstagram style={{fontSize: "25px"}} />
        </a>
        <a href="https://www.youtube.com/channel/UCjYwPwS51DaDpic_bl68uoA" target='_blank'  rel="noreferrer">
          <FaYoutube style={{fontSize: "25px"}} />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=573123809599&text=Bienvenido+a+OMI+FARM+COLOMBIA&type=phone_number&app_absent=0" target='_blank'  rel="noreferrer">
          <FaWhatsapp style={{fontSize: "25px"}} />
        </a>
        {/* <a href="https://www.facebook.com/omifarmcolombia" target="_blank">
          
        </a>
        <a
          href="https://www.instagram.com/omifarmcolombia/?hl=en"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UCjYwPwS51DaDpic_bl68uoA"
          target="_blank"
        >
          <FaYoutube />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=573123809599&text=Bienvenido+a+OMI+FARM+COLOMBIA&type=phone_number&app_absent=0"
          target="_blank"
        >
          <FaWhatsapp />
        </a> */}
      </p>
      <p>
        <FaLocationArrow /> Carrera 12 No. 7B - 20 Tunja, Colombia
      </p>
      <p>
        <FaPhoneAlt /> 312 3809599
      </p>
      <p>
        <FaEnvelope /> omifarm@yahoo.com
      </p>
      <p>© 2022 OMI FARM Colombia. Todos los derechos reservados</p>
    </div>
  );
};

export default FooterBanner;
