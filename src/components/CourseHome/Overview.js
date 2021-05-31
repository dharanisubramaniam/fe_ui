import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useStateValue } from "../../redux/StateProvider";

function Overview({ courseid }) {
  const [{ skill, overview }] = useStateValue();
  const [clickStatus, setclickStatus] = useState(false);
  const [overviewTitle, setoverviewTitle] = useState("");
  const showDesc = (e) => {
    setclickStatus(!clickStatus);
    if (e.target.tagname === "svg") {
      setoverviewTitle(e.target.parentElement.innerText);
    } else if (e.target.tagname === "path") {
      setoverviewTitle(e.target.parentElement.parentElement.innerText);
    } else if (e.target.className === "coursehome__lesson") {
      setoverviewTitle(e.target.firstChild.innerHTML);
    }
    //  setoverviewTitle()

    console.log(clickStatus, overviewTitle, e);
  };
  return (
    <div className="coursehome__courseOverview">
      <h3>Course Overview</h3>
      <div className="coursehome__lessons">
        {overview.map((item, i) =>
          item.course_id === courseid ? (
            <div>
              <div
                className="coursehome__lesson"
                onClick={(e) => {
                  showDesc(e);
                }}
              >
                <p key={i}>{item.overview_title}</p>
                <ArrowDropDownIcon
                  onClick={(e) => {
                    showDesc(e);
                  }}
                />
              </div>
              <div
                className={`coursehome__lessonDescription ${
                  clickStatus ? "show" : "hide"
                }`}
              >
                {item.overview_title === overviewTitle ? (
                  <p key={i}>{item.description}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}

export default Overview;
