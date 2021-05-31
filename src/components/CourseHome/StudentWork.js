import React from "react";
import Thumbnail1 from "../../images/StudentsWorkThumbnail1.jpg";
import Thumbnail2 from "../../images/StudentWorkThumbnail2.jpg";
import Thumbnail3 from "../../images/StudentWorkThumbnail3.jpg";

function StudentWork() {
  return (
    <div className="coursehome__studentsWorks">
      <h3>Student's Works</h3>
      <div className="coursehome__studentsWork">
        <div className="coursehome__studentsWorkRows">
          <img src={Thumbnail1} alt="thumbnail" />
          <p>Michael Jordan</p>
        </div>
        <div className="coursehome__studentsWorkRows">
          <img src={Thumbnail2} alt="thumbnail" />
          <p>Nina Dobrev</p>
        </div>
        <div className="coursehome__studentsWorkRows">
          <img src={Thumbnail3} alt="thumbnail" />
          <p>Rachael</p>
        </div>
      </div>
    </div>
  );
}

export default StudentWork;
