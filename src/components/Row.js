import React from "react";
import "./Row.css";
import img from "../images/ae-image.png";

function Row() {
  return (
    <div className="row">
      <img src={img} className="row__image"></img>
      <div className="row__details">
        <p className="row__difficultyIcon"></p>
        <span>4 hr 45 m</span>
        <h3>Lorem ipsum dolor sit amet Praesent et justo nibh.</h3>
        <p className="row__studentsDetails">1200 students</p>
        <span className="row__amount">Free</span>
      </div>
    </div>
  );
}

export default Row;
