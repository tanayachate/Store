import React from "react";

import favicon from "../assets/favicon.svg";
import star from "../assets/star.svg";
import favred from "../assets/favred.svg";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img className="p-imgg" src={data.img1} alt="#" />
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
        <img src={data.fav ? favred : favicon} alt="#" />
      </div>
      {data.offer && (
        <div className="offer-row">
          <img src={data.offerimg} alt="#" />
          <p>{data.offer}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
