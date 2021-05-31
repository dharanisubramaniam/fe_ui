import React from "react";
import "./HomePageSideBar.css";
import  { useStateValue } from "../../redux/StateProvider";


function HomePageSideBar() {
  const[{category},dispatch]=useStateValue();
  const toggleAllCourse=()=>{
    dispatch({type:"SET_ALLCOURSE",allCourse:true})
  }
  const courseUpdate=(e)=>{
    // console.log(e);
    dispatch({type:"SET_ALLCOURSE",allCourse:false})
    dispatch({type:"UPDATE_COURSE",updatedCourse:e.target.innerHTML})
    
  }
  return (
    <div className="homepage__Sidebar">
      <div className="sidebar__category all_courses" onClick={()=>{toggleAllCourse()}}>
        <p>ALL COURSES</p>
      </div>
      <button className="sidebar__filterButton">Filters</button>

      <div className="sidebar__category">
        
        {category.map((item) => (
          <p key={item.id} onClick={(e)=>{courseUpdate(e)}}>{item.name}</p>
        ))}
        
      </div>
    </div>
  );
}

export default HomePageSideBar;
