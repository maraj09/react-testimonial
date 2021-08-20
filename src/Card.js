import React, { useState } from "react";
import data from "./data";

const Card = () => {
  const [index, setIndex] = useState(0);
  const review = data[index];

  const next = () => {
    if (index >= data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const previous = () => {
    if (index < 1) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const rand = () => {
    let randIndex = Math.floor(Math.random() * data.length);
    if (randIndex === index) {
      randIndex = index + 1;
      if (randIndex > data.length - 1) {
        setIndex(0);
      } else {
        setIndex(randIndex);
      }
    } else {
      setIndex(randIndex);
    }
  };

  return (
    <div>
      <div className="card">
        <div className="content">
          <div className="img">
            <img src={review.image} alt="" />
          </div>
          <div className="info">
            <h3>{review.name}</h3>
            <p>{review.job}</p>
          </div>
          <div className="des">
            <p>{review.text}</p>
          </div>
          <div className="switch">
            <span onClick={() => previous()}>&lt;</span>
            <span onClick={() => next()}>&gt;</span>
          </div>
          <div className="btn">
            <button onClick={() => rand()}>Surprise Me!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
