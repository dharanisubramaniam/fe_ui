import React from "react";
import { Link } from "react-router-dom";
import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";

function Thumbnail({ img, thumbnail_desc, title }) {
  return (
    <Link to="/video">
      <div className="coursehome__thumbnail">
        <img src={img} alt="coursehome_image"></img>
        <div className="coursehome__playerDesc">
          <h2>{title}</h2>
          <p>{thumbnail_desc}</p>

          <a href="/free" className="coursehome__playerDescFree">
            Free
          </a>
          <a href="/enroll" className="coursehome__playerDescLink">
            Enroll
          </a>
        </div>
        <div className="coursehome__playIconContainer">
          <PlayCircleFilledRoundedIcon className="coursehome__playerIcon" />
        </div>
      </div>
    </Link>
  );
}

export default Thumbnail;
