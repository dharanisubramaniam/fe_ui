import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__allcourses">
        <p>ALL COURSES</p>
      </div>
      <div className="sidebar__category">
        <p>AfetrEffects Courses</p>
      </div>
      <div className="sidebar__category">
        <p>Maya Courses</p>
      </div>
      <div className="sidebar__category">
        <p>Cinema4D Courses</p>
      </div>
      <div className="sidebar__category">
        <p>Blender Courses</p>
      </div>
    </div>
  );
}

export default SideBar;
