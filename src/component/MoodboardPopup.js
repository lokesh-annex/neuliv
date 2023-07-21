import React from "react";
import arrow from "./images/black-arrow.svg";
import "./css/moodboard-popup.css";

function MoodboardPopup() {
  return (
    <>
      <div className="moodboard-inspiration">
        <div className="popup-main-heading">
          <div className="popup-heading">
            <h3>We’re getting a sense of what you want. </h3>
          </div>
          <div className="sub-popup-heading">
            Save these to a Moodboard to come back to them later
          </div>
          <div className="moodboard-containers">
            <div className="add-moodboard">
              <div className="moodboard-box"></div>
            </div>
            <div className="add-moodboard">
              <div className="moodboard-box"></div>
            </div>
            <div className="add-moodboard">
              <div className="moodboard-box"></div>
            </div>
            <div className="add-moodboard add-box">
            +
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoodboardPopup;
