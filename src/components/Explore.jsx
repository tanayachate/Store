import React from "react";
import s1 from "../assets/s1.svg";
import s2 from "../assets/s2.svg";
import s3 from "../assets/s3.svg";
import s4 from "../assets/s4.svg";
import s5 from "../assets/s5.svg";
import s6 from "../assets/s6.svg";
import "./Explore.css";
import b6 from "../assets/b1.svg";
import b4 from "../assets/b3.svg";
import b1 from "../assets/b5.svg";
import b2 from "../assets/b6.svg";
import b5 from "../assets/b2.svg";
import b3 from "../assets/b4.svg";
import c6 from "../assets/c1.svg";
import c5 from "../assets/c2.svg";
import c4 from "../assets/c3.svg";
import c3 from "../assets/c4.svg";
import c2 from "../assets/c5.svg";
import c1 from "../assets/c6.svg";
import BigCard from "./BigCard";

const bigCardData = [
  {
    t1: "Backpack",
    t2: "155 products",
    img1: b1,
    img2: c1,
  },
  {
    t1: "Shoes",
    t2: "22 products",
    img1: b2,
    img2: c2,
  },
  {
    t1: "Recycled Blanket ",
    t2: "144  products",
    img1: b3,
    img2: c3,
  },
  {
    t1: "Cycling Shorts",
    t2: "343 products",
    img1: b4,
    img2: c4,
  },
  {
    t1: "Cycling Jersey ",
    t2: "222  products",
    img1: b5,
    img2: c5,
  },
  {
    t1: "Car Coat",
    t2: "115 products",
    img1: b6,
    img2: c6,
  },
];

const Explore = () => {
  return (
    <div className="curve-sec">
      <div className="ex-titlee">Start exploring.</div>
      <div className="tabbar">
        <div className="tbar-row">
          <img src={s6} alt="#" />
          <p className="tbar-text">Women</p>
        </div>
        <div className="tbar-row activetab">
          <img src={s5} alt="#" />
          <p className="tbar-text">Man</p>
        </div>
        <div className="tbar-row">
          <img src={s4} alt="#" />
          <p className="tbar-text">Kids</p>
        </div>
        <div className="tbar-row">
          <img src={s3} alt="#" />
          <p className="tbar-text">Sports</p>
        </div>
        <div className="tbar-row">
          <img src={s2} alt="#" />
          <p className="tbar-text">Beauty</p>
        </div>
        <div className="tbar-row">
          <img src={s1} alt="#" />
          <p className="tbar-text">Jewelry</p>
        </div>
      </div>
      <div className="bigcard-sec">
        {bigCardData.map((data, i) => {
          return <BigCard key={i} item={data} />;
        })}
      </div>
    </div>
  );
};

export default Explore;
