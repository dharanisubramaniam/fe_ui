import React from 'react';
import { useStateValue } from '../../redux/StateProvider';
import "./HomePageBody.css";
import Row from './Row';




function AllCourseRow({id,title}) {
    const[{course}]=useStateValue();
    // console.log("inside all course",course)
    return (
        <div>
           <div className="course__categoryContainer">
                <h3>{title}</h3>
                <button>View All</button>
            </div>
            <div className="allcourse__rowsContainer">
               {course.map((item) => (
                   id===item.category_id && <Row
                       key={item.course_id}
                       img={item.thumbnail}
                       time={item.timing}
                       title={item.title}
                       students={item.noofstudents}
                       amount={item.amount}
                       rating={item.rating}
                       id={item.course_id}
                   />
               ))}
           </div>
        </div>
    )
}

export default AllCourseRow
