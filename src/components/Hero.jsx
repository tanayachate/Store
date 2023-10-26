import React from "react";
import "./Hero.css";
import heroimg from "../assets/image.png";
import oball from "../assets/oball.png";
import pball from "../assets/pball.png";
import redball from "../assets/redball.png";

const Hero = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="left">
          <p className="hero-subtext">It’s a good time to be rewarded</p>
          <p className="hero-text">Shop with reward points</p>
          <button className="exp-btn">Explore Now</button>
        </div>
        <div className="right">
          <img className="heroimg" src={heroimg} alt="#" />
        </div>
        <img className="oball ab" src={oball} alt="#" />
        <img className="pball ab" src={pball} alt="#" />
        <img className="redball ab" src={redball} alt="#" />
        <div className="greenball ab"></div>
        <div className="greenball1 ab"></div>
      </div>
    </section>
  );
};

export default Hero;
