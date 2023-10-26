import React from "react";

const BigCard = ({ item }) => {
  return (
    <div className="bigcard">
      <div className="leftt">
        <div className="bcard-img">
          <img src={item.img2} alt="#" />
        </div>
        <div className="imgg-text">Manufacturar</div>
        <div className="bcard-title">{item.t1}</div>
        <div className="bcard-sub">See Collection</div>
      </div>
      <div className="rightt">
        <p className="bcard-stext">{item.t2}</p>
      </div>
      <img className="design-img" src={item.img1} alt="#" />
    </div>
  );
};

export default BigCard;
