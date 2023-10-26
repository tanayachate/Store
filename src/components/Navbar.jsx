import React from "react";
import searchicon from "../assets/n2.svg";
import usericon from "../assets/n3.svg";
import carticon from "../assets/n1.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-main">
      <div className="navsec">
        <div className="nav-left">
          <p>Store Name</p>
          <span>
            <p>Explore</p>
            <p>Orders</p>
          </span>
        </div>
        <div className="nav-right">
          <img className="i1" src={searchicon} alt="#" />
          <img className="i2" src={usericon} alt="#" />
          <img className="i3" src={carticon} alt="#" />
          <button className="reward-btn">
            <p className="rbtn-t1">Reward points</p>
            <p className="rbtn-t2">2200 pt</p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
