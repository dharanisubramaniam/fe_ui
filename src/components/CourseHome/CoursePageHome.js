import React from "react";
import "./CoursePageHome.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { ListItemIcon } from "@material-ui/core";
import Thumbnail from "./Thumbnail";
import Skill from "./Skill";
import Overview from "./Overview";
import Description from "./Description";
import StudentWork from "./StudentWork";
import Review from "./Review";
import FAQ from "./FAQ";
import Offer from "./Offer";

function CoursePageHome({
  img,
  desc,
  thumbnail_desc,
  title,
  timing,
  rating,
  level,
  noofstudents,
  lesson,
  courseid,
}) {
  return (
    <div className="coursehome">
      <Thumbnail title={title} img={img} thumbnail_desc={thumbnail_desc} />
      <div className="coursehome__body">
        <Description
          desc={desc}
          level={level}
          lesson={lesson}
          timing={timing}
          rating={rating}
          noofstudents={noofstudents}
        />
        <Skill />
        <Overview courseid={courseid} />
        <StudentWork />

        <div className="coursehome__dotIcons">
          <FiberManualRecordIcon className="coursehome__dotIcon" />
          <FiberManualRecordIcon className="coursehome__dotIcon" />
          <FiberManualRecordIcon className="coursehome__dotIcon" />
          <FiberManualRecordIcon className="coursehome__dotIcon" />
        </div>
        <Review />
        <FAQ />
        <Offer />
      </div>
    </div>
  );
}

export default CoursePageHome;
