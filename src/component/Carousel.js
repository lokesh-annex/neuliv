import React,{useState} from "react";
import "./css/inspiration.css";
import arrow from "./images/arrow.svg";
import designbg1 from "./images/design-bg-1.jpg";
import designbg2 from "./images/design-bg-2.jpg";
import designbg3 from "./images/design-bg-3.jpg";
import designbg4 from "./images/design-bg-4.jpg";
import designbg5 from "./images/design-bg-5.jpg";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Carousel() {
  const [show, setShow] = React.useState();
  console.warn(setShow)
  const CarouselImage = [
    {
      image: require("../component/images/design-bg-1"),
      image: require("../component/images/design-bg-2"),
    },
    {
      image: require("../component/images/design-bg-3"),
      image: require("../component/images/design-bg-4"),

    },
    {
      image: require("../component/images/design-bg-1"),
      image: require("../component/images/design-bg-5"),

    },
  ];
  return (
    <>
      <OwlCarousel items={3} className="owl-theme" navText="➜➜" nav margin={8}>
        
       <div className="item">
          <div className="cr-image">
            <img src={designbg1} alt="carousel-image" />
            <div onClick={() => setShow(!show)} className="heart-icon">
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
            </div>
          <div className="cr-image sec">
            <img src={designbg2}  alt="arrow" />

            <div className="heart-icon">
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
          </div>
        </div>
        <div className="item">
        <div className="cr-image">
            <img src={designbg2} alt="carousel-image" />
            <div className="heart-icon">
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
     </div>
          <div className="cr-image sec">
            <img src={designbg4} alt="arrow" />

            <div className="heart-icon">
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
          </div>
        </div>
        <div className="item">
        <div className="cr-image">
            <img src={designbg1} alt="carousel-image" />
            <div className="heart-icon">
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
            </div>
          <div className="cr-image sec">
            <img src={designbg5}  alt="arrow" />

            <div className="heart-icon">
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
          </div>
        </div>
        <div className="item">
        <div className="cr-image">
            <img src={designbg1} alt="carousel-image" />
            <div className="heart-icon">
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
            </div>
          <div className="cr-image sec">
            <img src={designbg5}  alt="arrow" />

            <div className="heart-icon">
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
          </div>
        </div>
      </OwlCarousel>
    </>
  );
}

export default Carousel;
