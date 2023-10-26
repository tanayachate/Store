import React from "react";
import favicon from "../assets/favicon.svg";
import star from "../assets/star.svg";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={`${data.img1}`} alt="#" />
      <div className="details">
        <div className="row">
          <div className="tablet">
            <img src={data.img2} alt="#" />
            <p className="p-title">{data.title}</p>
            <p className="p-sub">{data.sub}</p>
            <div className="btn-row">
              <button className="g-btn">{data.price}</button>
              <div className="reviews-row">
                <img src={star} alt="#" />
                <p className="p-sub">{data.review}</p>
              </div>
            </div>
            <p className="p-endtext">
              Buy with <span>450 Pt</span>
            </p>
          </div>
        </div>
      </div>
      <div className="fav-icon">
        <img src={favicon} alt="#" />
      </div>
    </div>
  );
};

export default Card;
