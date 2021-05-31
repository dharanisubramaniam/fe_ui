import React from "react";
import "./Row.css";
import StarHalfRoundedIcon from "@material-ui/icons/StarHalfRounded";
import { Link } from "react-router-dom";
import { useStateValue } from "../../redux/StateProvider";



function Row({img,time, title, students, amount,rating}) {
  const[{},dispatch]=useStateValue();

  const updateTitle=(title)=>{
    dispatch({type:"UPDATE_TITLE",updatedTitle:title})
   }
  // console.log("iside row");
  
  return (
    <Link className="row__link" to="/course" onClick={()=>updateTitle(title)}>
      <div className="row" >
       <img src={img} className="row__image" alt="row_image"></img>
        <div className="row__details" > 
          <div className="row__time">
            <p className="row__difficultyIcon"></p>
            <span>{time}</span>
          </div>

          <h3>{title}</h3>
          <div className="row__amountDetails">
            <div className="row__rating">
              <StarHalfRoundedIcon className="star" />
              <p>{rating}</p>
            </div>
            <p className="row__studentsDetails">{students} students</p>
            <span className="row__amount">{amount}</span>
          </div>
        </div>
      </div>
      </Link>
  );
}

export default Row;
