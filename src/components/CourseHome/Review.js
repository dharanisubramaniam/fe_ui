import React from "react";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";

function Review() {
  return (
    <div className="coursehome__reviews">
      <h3>Reviews</h3>
      <div className="coursehome__review">
        <ChevronLeftRoundedIcon className="coursehome__reviewArrowIcon" />
        <div className="coursehome__reviewRow">
          <div className="coursehome__reviewRowOne">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tempus vulputate ullamcorper.
            </p>
            <div className="coursehome__reviewRowStarIconContainer">
              <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
              <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
              <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
              <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
              <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
              <AccountCircleRoundedIcon className="coursehome__reviewRowProfileIcon" />
            </div>
            <h4>Jack and Jill</h4>
          </div>
          <div className="coursehome__middleRow">
            <div className="coursehome__reviewRows">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tempus vulputate ullamcorper.
              </p>
              <div className="coursehome__reviewRowStarIconContainer">
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <AccountCircleRoundedIcon className="coursehome__reviewRowProfileIcon" />
              </div>

              <h4>Jack and Jill</h4>
            </div>
            <div className="coursehome__reviewRows">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tempus vulputate ullamcorper.
              </p>
              <div className="coursehome__reviewRowStarIconContainer">
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
                <AccountCircleRoundedIcon className="coursehome__reviewRowProfileIcon" />
              </div>

              <h4>Jack and Jill</h4>
            </div>
          </div>
          <div className="coursehome__reviewRowThree">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tempus vulputate ullamcorper.
            </p>
            <div className="coursehome__reviewRowStarIconContainer">
              <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
              <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
              <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
              <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
              <StarRoundedIcon className="coursehome__reviewRowStarIcon" />
              <AccountCircleRoundedIcon className="coursehome__reviewRowProfileIcon" />
            </div>

            <h4>Jack and Jill</h4>
          </div>
        </div>
        <ChevronRightRoundedIcon className="coursehome__reviewArrowIcon" />
      </div>
    </div>
  );
}

export default Review;
