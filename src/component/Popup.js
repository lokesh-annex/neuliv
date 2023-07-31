import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Cross from "./images/cross.svg";

function PopUp() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="heart-icon" onClick={handleShow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
        >
          <path
            d="M8.56899 4.41211C5.26957 4.41211 2.59473 7.08695 2.59473 10.3864C2.59473 16.3606 9.65522 21.7918 13.457 23.0551C17.2588 21.7918 24.3193 16.3606 24.3193 10.3864C24.3193 7.08695 21.6445 4.41211 18.345 4.41211C16.3247 4.41211 14.5378 5.41524 13.457 6.95063C12.9061 6.16594 12.1743 5.52554 11.3234 5.08366C10.4726 4.64179 9.52775 4.41143 8.56899 4.41211Z"
            fill="#D9D9D9"
            fill-opacity="0.2"
            stroke="white"
            stroke-width="0.724153"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="design-popup">
        <Modal show={show} onHide={handleClose}>
          <Link onClick={handleClose} className="cross-btn">
            <img src={Cross} alt="cross" />
          </Link>
          <div className="">
            <h3>You’re on your way there!</h3>

            <div class="sub-heading-sec gray-color">
              We’re getting a sense of what you want.
            </div>
            <div class="sub-heading-sec gray-color">
              sTell us more about your style, and we’ll provide you with a
              personalized mood board for your dream home.
            </div>
          </div>
          <Link onClick={handleClose} className="cross-btn-footer">
            Maybe Later <img src={Cross} alt="cross" />
          </Link>
        </Modal>
      </div>
    </>
  );
}

export default PopUp;
