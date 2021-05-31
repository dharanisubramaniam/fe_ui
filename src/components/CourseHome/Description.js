import React from "react";

function Decsription({ timing, rating, level, noofstudents, lesson, desc }) {
  return (
    <div className="coursehome__description">
      <div className="coursehome__desc1">
        <h3>Description</h3>
        <p>{desc}</p>
      </div>
      <div className="coursehome__desc2">
        <div className="coursehome__desc2Box">
          <div className="coursehome__desc2Boxes">
            <p className="coursehome__descBoxParagraph">LEVEL</p>
            <p>{level}</p>
          </div>
          <div className="coursehome__desc2Boxes">
            <p className="coursehome__descBoxParagraph">LESSONS</p>
            <p>{lesson}</p>
          </div>
          <div className="coursehome__desc2Boxes">
            <p className="coursehome__descBoxParagraph">DURATION</p>
            <p>{timing}</p>
          </div>
          <div className="coursehome__desc2Boxes">
            <p className="coursehome__descBoxParagraph">RATING</p>
            <p>{rating}</p>
          </div>
          <div className="coursehome__desc2Boxes">
            <p className="coursehome__descBoxParagraph">STUDENTS</p>
            <p>{noofstudents}</p>
          </div>
        </div>
        <div className="coursehome__desc2Enroll">
          <a href="/free" className="coursehome__desc2EnrollFree">
            Free
          </a>
          <a href="/enroll" className="coursehome__desc2EnrollLink">
            Enroll
          </a>
        </div>
      </div>
    </div>
  );
}

export default Decsription;
