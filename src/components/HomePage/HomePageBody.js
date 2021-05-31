import React from "react";
import "./HomePageBody.css";
import AllCourse from "./AllCourse";
import Course from "./Course";
import { useStateValue } from "../../redux/StateProvider";


function HomePageBody() {
  const[{allCourse,updatedCourse}]=useStateValue();
 
  return (
    <div className="homepageBody">
      {allCourse?<AllCourse/>:updatedCourse?<Course/>:<AllCourse/>}
    </div>
  );
}

export default HomePageBody;
