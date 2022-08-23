import React from "react";
import { client, urlFor } from "../lib/client";
import { BiBadgeCheck } from "react-icons/bi";

const AboutUs = ({ aboutUsData }) => {
  let misionImg = urlFor(aboutUsData[0]?.misionImg);
  return (
    <div>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img
                src={urlFor(aboutUsData[0]?.descImg)}
                className="img-responsive"
                alt=""
              />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>SOBRE NOSOTROS</h2>
                <p>{aboutUsData[0]?.desc}</p>
                <h3>¿Por qué elegirnos?</h3>
                <div className="list-style">
                  <div className="col-lg-8 col-sm-8 col-xs-10">
                    <ul>
                      {aboutUsData[0]?.whyUs.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="mision">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="section-title">
                <h2>MISIÓN</h2>
              </div>
              <p>{aboutUsData[0].mision}</p>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="image-stack">
                <div className="image-stack__item image-stack__item--top">
                  <img src={urlFor(aboutUsData[0]?.misionImg[0])} alt="" />
                </div>
                <div className="image-stack__item image-stack__item--bottom">
                  <img src={urlFor(aboutUsData[0]?.misionImg[1])} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="vision" >
        <div className="container">
          
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <div className="image-stack">
                  <div className="image-stack__item image-stack__item--top">
                    <img src={urlFor(aboutUsData[0]?.visionImg[0])} alt="" />
                  </div>
                  <div className="image-stack__item image-stack__item--bottom">
                    <img src={urlFor(aboutUsData[0]?.visionImg[1])} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
              <div className="section-title">
            <h2>VISIÓN</h2>
            </div>
                <p>{aboutUsData[0].vision}</p>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const aboutUsQuery = '*[_type == "aboutUs"]';
  const aboutUsData = await client.fetch(aboutUsQuery);

  return {
    props: { aboutUsData },
  };
};

export default AboutUs;
