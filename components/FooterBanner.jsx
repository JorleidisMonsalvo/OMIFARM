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
import Link from "next/link";

const FooterBanner = ({ footerBanner }) => {
  return (
    <div className="footer-container">
      <p>
        <Link href="https://www.facebook.com/omifarmcolombia">
          <FaFacebookF style={{fontSize: "25px"}} />
        </Link>
        <Link href="https://www.instagram.com/omifarmcolombia/?hl=en">
          <FaInstagram style={{fontSize: "25px"}} />
        </Link>
        <Link href="https://www.youtube.com/channel/UCjYwPwS51DaDpic_bl68uoA">
          <FaYoutube style={{fontSize: "25px"}} />
        </Link>
        <Link href="https://api.whatsapp.com/send/?phone=573123809599&text=Bienvenido+a+OMI+FARM+COLOMBIA&type=phone_number&app_absent=0">
          <FaWhatsapp style={{fontSize: "25px"}} />
        </Link>
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
