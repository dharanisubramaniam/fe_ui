import React from "react";
import { useStateValue } from "../../redux/StateProvider";
import CoursePageHome from "./CoursePageHome";



function CoursePage() {
  const [{ updatedTitle, course }] = useStateValue();
//  console.log(course);
  return (
    <div className="coursepage__container">
      {course.map((item) => (
         updatedTitle === item.title && <CoursePageHome key={item.course_id} 
        img={item.thumbnail}
         desc={item.description} 
         thumbnail_desc={item.thumbnail_desc} 
         title={item.title}
         level={item.difficultylevel}
         rating={item.rating}
         timing={item.timing}
         noofstudents={item.noofstudents}
         lesson={item.lessons}
         courseid={item.course_id}
         categoryid={item.categoryid}/>
      ))}
    </div>
  );
}

export default CoursePage;
