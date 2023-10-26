import React from "react";
import img1 from "../assets/li1.png";
import img2 from "../assets/li3.png";
import img3 from "../assets/li4.png";
import img4 from "../assets/li5.png";
import tab1 from "../assets/tab1.svg";
import tab2 from "../assets/tab2.svg";
import o1 from "../assets/o1.svg";
import o2 from "../assets/o2.svg";
import "./NewArrival.css";
import Card from "./Card";

const data = [
  {
    title: "Leather Gloves",
    sub: "Perfect mint green",
    price: "$45",
    review: "4.9 (98 reviews)",
    end_text: "Buy with 450 Pt",
    img1: img1,
    img2: tab1,
    offer: "",
    offerimg: null,
    fav: false,
  },
  {
    title: "Manhattan Toy WRT",
    sub: "New design 2023",
    price: "$300",
    review: "4.9 (98 reviews)",
    end_text: "Buy with 450 Pt",
    img1: img2,
    img2: tab2,
    offer: "",
    offerimg: null,
    fav: true,
  },
  {
    title: "Ella Leather Tote",
    sub: "Cream pink",
    price: "$45",
    review: "4.9 (98 reviews)",
    end_text: "Buy with 450 Pt",
    img1: img3,
    img2: tab1,
    offer: "limited edition",
    offerimg: o1,
    fav: false,
  },
  {
    title: "Jump Rope Kids",
    sub: "Classic green",
    price: "$68",
    review: "4.9 (98 reviews)",
    end_text: "Buy with 450 Pt",
    img1: img4,
    img2: tab2,
    offer: "50% Discount",
    offerimg: o2,
    fav: false,
  },
];

const NewArrival = () => {
  return (
    <div className="layout">
      <p className="na-title">
        New Arrivals. <span>REY backpacks & bags</span>
      </p>
      <div className="p-row">
        {data.map((item, i) => {
          return <Card data={item} />;
        })}
      </div>
    </div>
  );
};

export default NewArrival;
