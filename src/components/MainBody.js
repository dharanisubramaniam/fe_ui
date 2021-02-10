import React from "react";
import "./MainBody.css";
import Row from "./Row";

function MainBody() {
  return (
    <div className="mainbody">
      <div className="mainbody__categoryContainer">
        <h3>AfterEffects Courses</h3>
        <a>View All</a>
      </div>
      <div className="mainbody__rowsContainer">
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
      <div className="mainbody__categoryContainer">
        <h3>Maya Courses Courses</h3>
        <a>View All</a>
      </div>
      <div className="mainbody__rowsContainer">
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
      <div className="mainbody__categoryContainer">
        <h3>Cinema4D Courses</h3>
        <a>View All</a>
      </div>
      <div className="mainbody__rowsContainer">
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
}

export default MainBody;
