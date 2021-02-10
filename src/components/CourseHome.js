import React from 'react';
import img from "../images/coursehome.jpg";
import './CourseHome.css'

function CourseHome() {
    return (
      <div className="coursehome">
        <div className="coursehome__thumbnail">
          <img src={img}></img>
        </div>
        <div className="coursehome__description">
          <div className="coursehome__desc1">
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              et justo nibh. Nulla eget ante quis purus aliquet molestie. Etiam
              ullamcorper nibh diam, quis tincidunt dolor blandit vitae. Mauris
              enim nunc, pulvinar vehicula purus eget, commodo placerat felis.
              <br />
              <br />
              Nullam sed tortor quis neque tincidunt sodales. Maecenas ultricies
              eros id ligula dictum pulvinar. Nunc tristique est vulputate,
              elementum nisl quis, ultricies velit. Proin erat elit, pharetra
              vitae laoreet in, facilisis sed nisi. Maecenas ac massa sed diam
              fermentum volutpat at posuere turpis.Cras eu consectetur urna, nec
              luctus dolor. Nam viverra egestas enim, facilisis placerat erat
              aliquam et. Fusce at odio pulvinar libero iaculis mollis.
            </p>
          </div>
          <div className="coursehome__desc2">
            <div className="coursehome__desc2Box">
              <div className="coursehome__desc2Boxes">
                <p>LEVEL</p>
                <p>Intermediate</p>
              </div>
              <div className="coursehome__desc2Boxes">
                <p>LESSONS</p>
                <p>6</p>
              </div>
              <div className="coursehome__desc2Boxes">
                <p>DURATION</p>
                <p>4h 45m</p>
              </div>
              <div className="coursehome__desc2Boxes">
                <p>RATING</p>
                <p>5</p>
              </div>
              <div className="coursehome__desc2Boxes">
                <p>STUDENTS</p>
                <p>1200</p>
              </div>
            </div>
            <div className="coursehome__desc2Enroll">
              <a href="#" className="coursehome__desc2EnrollFree">
                Free
              </a>
              <a href="#" className="coursehome__desc2EnrollLink">
                ENROLL
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3>Skills covered</h3>
          <div></div>
        </div>
      </div>
    );
}

export default CourseHome
