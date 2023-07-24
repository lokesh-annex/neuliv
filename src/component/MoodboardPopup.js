import React from "react";
import arrow from "./images/arrow.svg";
import "./css/moodboard-popup.css";

function MoodboardPopup() {
  const MoodPopImage = [
    {
      image: require("../component/images/design-bg-1.jpg"),
    },
    {
      image: require("../component/images/design-bg-1.jpg"),
    },
    {
      image: require("../component/images/design-bg-1.jpg"),
    },
  ];
  return (
    <>
      <div className="moodboard-inspiration">
        <div className="cross-popup">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 6.33359L13.8336 0.5L15.5 2.1664L9.6664 8L15.5 13.8336L13.8336 15.5L8 9.6664L2.1664 15.5L0.5 13.8336L6.33359 8L0.5 2.1664L2.1664 0.5L8 6.33359Z"
              fill="#6A6868"
            />
          </svg>
        </div>
        <div className="popup-main-heading">
          <div className="popup-heading">
            <h3>We’re getting a sense of what you want. </h3>
          </div>
          <div className="sub-popup-heading">
            Save these to a Moodboard to come back to them later
          </div>
          <div className="moodboard-containers">
            {MoodPopImage.map((item, index) => (
              <div className="add-moodboard">
                <div className="moodboard-box">
                  <img className="img-fluid" src={item.image} alt="image" />
                </div>
              </div>
            ))}

            <div className="add-moodboard add-box">+</div>
          </div>
        </div>
        <div className="brand-box">
          <div className="brand-heading">Board Name</div>
          <div className="brand-sec">
            <div className="brand-input">
              <input type="text" placeholder="Start Typing..." />
            </div>
            <div className="create-box-brand">Living Room</div>
            <div className="create-box-brand">Sofa Sets</div>
            <div className="create-box-brand">Home Interiors</div>
          </div>
        </div>
        <div className="popup-button d-flex justify-content-end">
          <a className="btn-primary" href="">
            Create Moodboard
            <img src={arrow} className="web-logo" alt="arrow" />
          </a>
        </div>
      </div>
    </>
  );
}

export default MoodboardPopup;
